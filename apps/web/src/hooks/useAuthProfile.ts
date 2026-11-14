'use client';

import {useEffect, useRef, useState} from 'react';
import {getSupabase, isCloudConfigured} from '@/lib/supabase';
import {readStoredStudentProfile} from '@/lib/auth-profile-routing';
import {explainProfileDatabaseError} from '@/lib/profile-setup';
import {isSameAuthenticatedAccount, readWorkspaceView, saveWorkspaceView} from '@/lib/workspace-session';
import type {User} from '@supabase/supabase-js';
import type {StudentProfile} from '@/lib/profile';

interface UseAuthProfileResult {
  loading: boolean;
  user: User | null;
  profile: StudentProfile | null;
  profileError: string;
  avatarUrl: string | null;
  cloud: boolean;
  editing: boolean;
  setEditing: (editing: boolean) => void;
  reloadRequest: number;
  setReloadRequest: (n: number) => void;
  saveProfile: (p: StudentProfile) => Promise<void>;
  signout: () => Promise<void>;
  retryProfile: () => void;
  changeAvatar: (url: string | null, _path: string | null) => void;
  actualProfile: StudentProfile;
}

const STORAGE_KEY = 'kognos_guest_profile_v1';

export function useAuthProfile(initialProfile: StudentProfile): UseAuthProfileResult {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [profileError, setProfileError] = useState('');
  const [reloadRequest, setReloadRequest] = useState(0);
  const [assistantInitialized, setAssistantInitialized] = useState(false);
  const [tutorReturnView, setTutorReturnView] = useState<'dashboard'>('dashboard');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const authRequestId = useRef(0);
  const authenticatedUserRef = useRef<string | null>(null);
  const supabaseRef = useRef<ReturnType<typeof getSupabase> | null>(null);

  const cloud = isCloudConfigured();

  useEffect(() => {
    let mounted = true;
    let sessionEventSeen = false;

    try {
      const preferred = window.localStorage.getItem('kognos_theme_v1');
      if (preferred === 'light' || preferred === 'dark') setTheme(preferred);
    } catch {
      /* Storage restrictions must not interfere with authentication. */
    }

    const supabase = getSupabase();
    supabaseRef.current = supabase;
    if (!supabase) {
      setLoading(false);
      return () => {
        mounted = false;
      };
    }

    async function resolveAccount(account: User | null) {
      const requestId = ++authRequestId.current;
      if (!mounted) return;

      const sameAccount = isSameAuthenticatedAccount(authenticatedUserRef.current, account?.id ?? null);
      if (!sameAccount) {
        // Clear prior account's retained drafts
      }
      authenticatedUserRef.current = account?.id ?? null;

      if (account && !sameAccount) {
        const saved = readWorkspaceView(window.sessionStorage, account.id);
      }

      setLoading(true);
      setProfileError('');
      setUser(account);
      setProfile(null);
      setAvatarUrl(null);

      if (!account) {
        setEditing(false);
        setLoading(false);
        return;
      }

      const supabaseInstance = getSupabase();
      if (!supabaseInstance) {
        setProfileError('Supabase não configurado.');
        setLoading(false);
        return;
      }
      let {data, error} = await supabaseInstance.from('profiles')
        .select('display_name,username,biography,avatar_path,preferences')
        .eq('id', account.id)
        .maybeSingle();

      if (error && /avatar_path/i.test(error.message) && /column|schema cache|does not exist/i.test(error.message)) {
        const supabase2 = getSupabase();
        if (!supabase2) throw new Error('Supabase não configurado.');
        const older = await supabase2.from('profiles')
          .select('display_name,username,biography,preferences')
          .eq('id', account.id)
          .maybeSingle();
        data = older.data ? {...older.data, avatar_path: null} : null;
        error = older.error;
      }

      if (!mounted || authRequestId.current !== requestId) return;

      if (error) {
        setProfileError(explainProfileDatabaseError(error));
        setLoading(false);
        return;
      }

      setProfile(readStoredStudentProfile(data));
      setLoading(false);

      if (data?.avatar_path) {
        const {data: signed} = await supabaseInstance.storage.from('kognos-avatars').createSignedUrl(data.avatar_path, 3600);
        if (mounted && authRequestId.current === requestId) setAvatarUrl(signed?.signedUrl ?? null);
      }
    }

    const supabaseClient = getSupabase();
    if (!supabaseClient) {
      setLoading(false);
      return () => {
        mounted = false;
      };
    }

    const {data: listener} = supabaseClient.auth.onAuthStateChange((event: any, session: any) => {
      if (!mounted) return;

      if (event === 'INITIAL_SESSION') return;

      if (event === 'SIGNED_OUT') {
        sessionEventSeen = true;
        setAssistantInitialized(false);
        void resolveAccount(null);
      } else if (event === 'SIGNED_IN' && session?.user) {
        sessionEventSeen = true;
        if (isSameAuthenticatedAccount(authenticatedUserRef.current, session.user.id)) return;
        setAssistantInitialized(false);
        setEditing(false);
        void resolveAccount(session.user);
      } else if (event === 'PASSWORD_RECOVERY' && session?.user) {
        sessionEventSeen = true;
        setRecoveryMode(true);
        if (!isSameAuthenticatedAccount(authenticatedUserRef.current, session.user.id)) {
          void resolveAccount(session.user);
        }
      }
    });

    void supabaseClient.auth.getSession().then(({data, error}) => {
      if (!mounted || sessionEventSeen) return;
      if (error) {
        setProfileError('Não foi possível verificar sua sessão. Tente entrar novamente.');
        setLoading(false);
        return;
      }
      void resolveAccount(data.session?.user ?? null);
    }).catch(() => {
      if (mounted && !sessionEventSeen) {
        setProfileError('Não foi possível verificar a sessão. Confira sua conexão e tente novamente.');
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      authRequestId.current++;
      listener?.subscription?.unsubscribe?.();
    };
  }, [reloadRequest]);

  const saveProfile = async (p: StudentProfile) => {
    const {normalizeProfile} = await import('@/lib/profile');
    const normalized = normalizeProfile(p);

    if (user) {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Supabase não configurado.');

      const {error} = await supabase.from('profiles').upsert({
        id: user.id,
        display_name: normalized.nickname || null,
        username: normalized.username || null,
        biography: normalized.biography,
        preferences: normalized,
      }, {onConflict: 'id'});

      if (error) throw new Error(explainProfileDatabaseError(error));
    } else {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    }

    setProfile(normalized);
    setEditing(false);
  };

  const signout = async () => {
    const supabase = getSupabase();
    if (supabase) await supabase.auth.signOut();

    setAvatarUrl(null);
    setAssistantInitialized(false);
  };

  const retryProfile = () => {
    setProfileError('');
    setReloadRequest(x => x + 1);
  };

  const changeAvatar = (url: string | null, _path: string | null) => {
    setAvatarUrl(url);
  };

  const actualProfile = profile ?? initialProfile;

  return {
    loading,
    user,
    profile,
    profileError,
    avatarUrl,
    cloud,
    editing,
    setEditing,
    reloadRequest,
    setReloadRequest,
    saveProfile,
    signout,
    retryProfile,
    changeAvatar,
    actualProfile,
  };
}