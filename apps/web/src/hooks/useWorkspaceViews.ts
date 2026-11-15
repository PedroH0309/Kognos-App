'use client';

import {useEffect, useRef, useState} from 'react';
import {isRetainedStudyView, rememberStudyView, type RetainedStudyView} from '@/lib/retained-study-views';
import {isSameAuthenticatedAccount, readWorkspaceView, saveWorkspaceView} from '@/lib/workspace-session';
import type {User} from '@supabase/supabase-js';
import type {StudentProfile} from '@/lib/profile';

export function useWorkspaceViews(
  user: User | null,
  profile: StudentProfile | null,
  loading: boolean,
  editing: boolean,
  view: string,
  setView: (view: string) => void
) {
  const [retainedViews, setRetainedViews] = useState<readonly RetainedStudyView[]>([]);
  const [plannerDate, setPlannerDate] = useState('');
  const [diagnosticCycle, setDiagnosticCycle] = useState<'baseline' | 'weekly'>('baseline');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [practiceMenuOpen, setPracticeMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Persist workspace view per user
  useEffect(() => {
    if (user?.id && profile && !loading && !editing) {
      saveWorkspaceView(window.sessionStorage, user.id, view);
    }
  }, [user?.id, profile, loading, editing, view]);

  // Track retained study views
  useEffect(() => {
    if (user?.id && profile && !loading && !editing) {
      if (isRetainedStudyView(view)) {
        setRetainedViews(prev => rememberStudyView(prev, view));
      }
    }
  }, [user?.id, profile, loading, editing, view]);

  // Initialize sidebar collapsed state from localStorage
  useEffect(() => {
    try {
      const collapsed = window.localStorage.getItem('kognos_sidebar_collapsed_v1') === 'true';
      setSidebarCollapsed(collapsed);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(old => {
      try {
        window.localStorage.setItem('kognos_sidebar_collapsed_v1', String(!old));
      } catch {
        /* ignore */
      }
      return !old;
    });
  };

  const navigate = (newView: string) => {
    setMobileMenu(false);
    setMoreMenuOpen(false);
    setPracticeMenuOpen(false);
    setSearchOpen(false);
    setSearch('');
    setView(newView);
  };

  return {
    retainedViews,
    setRetainedViews,
    plannerDate,
    setPlannerDate,
    diagnosticCycle,
    setDiagnosticCycle,
    mobileMenu,
    setMobileMenu,
    sidebarCollapsed,
    setSidebarCollapsed,
    moreMenuOpen,
    setMoreMenuOpen,
    practiceMenuOpen,
    setPracticeMenuOpen,
    searchOpen,
    setSearchOpen,
    search,
    setSearch,
    navigate,
    toggleSidebar,
  };
}