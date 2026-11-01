'use client';

import { useState, type ChangeEvent } from 'react';
import {UserRound, ShieldCheck, BookOpenCheck, SunMoon, type LucideIcon} from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { getSupabase } from '@/lib/supabase';
import { type StudentProfile, adaptationLabels, goalLabels, styleLabels } from '@/lib/profile';
import { normalizeUsername, validateDisplayName, validateUsername, validateAvatar, validateNewPassword } from '@/lib/account';

type SettingsTab = 'profile'|'security'|'learning'|'appearance';
const TABS: {id:SettingsTab;icon:LucideIcon;label:string}[]=[
  {id:'profile',icon:UserRound,label:'Meu perfil'},
  {id:'security',icon:ShieldCheck,label:'Conta e segurança'},
  {id:'learning',icon:BookOpenCheck,label:'Preferências de estudo'},
  {id:'appearance',icon:SunMoon,label:'Aparência e acesso'},
];

function ProfileAvatar({url,name,large=false}:{url:string|null;name:string;large?:boolean}){
  return <span className={`profile-avatar ${large?'large':''}`} aria-label={`Foto de ${name}`}>
    {url?<img src={url} alt={`Foto de perfil de ${name}`} />:<span>{name.trim().charAt(0).toUpperCase()||'K'}</span>}
  </span>;
}

export {ProfileAvatar};

export default function AccountSettings({user,profile,avatarUrl,onSave,onAvatarChanged,onLogin,onPreferences,onSignout,theme,onThemeChange,recoveryMode=false,openSecurity=false}:{
  user:User|null;profile:StudentProfile;avatarUrl:string|null;
  onSave:(p:StudentProfile)=>Promise<void>;onAvatarChanged:(newUrl:string|null,avatarPath:string|null)=>void;
  onLogin:()=>void;onPreferences:()=>void;onSignout:()=>Promise<void>;
  theme:'dark'|'light';onThemeChange:(value:'dark'|'light')=>void;recoveryMode?:boolean;openSecurity?:boolean;
}) {
  const [tab,setTab]=useState<SettingsTab>(recoveryMode||openSecurity?'security':'profile');
  const [nickname,setNickname]=useState(profile.nickname);
  const [username,setUsername]=useState(profile.username);
  const [biography,setBiography]=useState(profile.biography);
  const [email,setEmail]=useState(user?.email||'');
  const [newPassword,setNewPassword]=useState('');const [confirmPassword,setConfirmPassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [busy,setBusy]=useState(false);const [notice,setNotice]=useState('');const [error,setError]=useState('');
  const info=(text:string)=>{setNotice(text);setError('');};
  const fail=(e:unknown)=>{setError(e instanceof Error?e.message:'Não foi possível concluir a operação.');setNotice('');};

  async function saveProfile(e:React.FormEvent){e.preventDefault();if(busy)return;
    const nameError=validateDisplayName(nickname);const usernameError=username.trim()?validateUsername(username):null;
    if(nameError||usernameError){setError(nameError||usernameError||'');return;}
    setBusy(true);setError('');setNotice('');
    try { await onSave({...profile,nickname:nickname.trim(),username:username.trim()?normalizeUsername(username):'',biography:biography.trim().slice(0,240)});info('Perfil atualizado. Seu nome e usuário já aparecem na plataforma.'); }
    catch(e){fail(e);}finally{setBusy(false);}
  }

  async function uploadAvatar(e:ChangeEvent<HTMLInputElement>){const file=e.target.files?.[0];e.target.value='';if(!file)return;
    const validation=validateAvatar(file);if(validation){setError(validation);return;}
    setBusy(true);setError('');setNotice('');
    try {
      if(!user){
        // Guests: resize before saving a small image in the browser. Nothing is sent to a server.
        const blobUrl=URL.createObjectURL(file);
        try{
          const img=new window.Image();img.src=blobUrl;await img.decode();
          const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
          const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Seu navegador não permite editar esta imagem.');
          const size=Math.min(img.naturalWidth,img.naturalHeight);
          ctx.drawImage(img,(img.naturalWidth-size)/2,(img.naturalHeight-size)/2,size,size,0,0,256,256);
          const data=canvas.toDataURL('image/jpeg',0.75);
          try{localStorage.setItem('kognos_guest_avatar_v1',data);}catch{throw new Error('Armazenamento local cheio. Escolha uma foto menor.');}
          onAvatarChanged(data,null);info('Foto salva neste navegador. Crie uma conta para sincronizá-la.');
        }finally{URL.revokeObjectURL(blobUrl);}
        return;
      }
      const sb=getSupabase();if(!sb)throw new Error('A nuvem não está configurada.');
      const extension=file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg';
      const path=`${user.id}/${crypto.randomUUID()}.${extension}`;
      const {error:uploadError}=await sb.storage.from('kognos-avatars').upload(path,file,{upsert:false,contentType:file.type,cacheControl:'3600'});
      if(uploadError)throw uploadError;
      const {error:dbError}=await sb.from('profiles').update({avatar_path:path}).eq('id',user.id);
      if(dbError){await sb.storage.from('kognos-avatars').remove([path]);throw dbError;}
      const {data:sign,error:signError}=await sb.storage.from('kognos-avatars').createSignedUrl(path,3600);
      if(signError)throw signError;
      onAvatarChanged(sign.signedUrl,path);
      info('Foto atualizada e guardada na sua conta.');
    }catch(e){fail(e);}finally{setBusy(false);}
  }

  async function removeAvatar(){setBusy(true);setError('');setNotice('');try{
    if(user){const sb=getSupabase();if(!sb)throw new Error('Nuvem indisponível.');
      // Remove DB pointer first, then the private object (best effort).
      const {data:old}=await sb.from('profiles').select('avatar_path').eq('id',user.id).single();
      const {error}=await sb.from('profiles').update({avatar_path:null}).eq('id',user.id);
      if(error)throw error;
      if(old?.avatar_path)await sb.storage.from('kognos-avatars').remove([old.avatar_path]);
    }else localStorage.removeItem('kognos_guest_avatar_v1');
    onAvatarChanged(null,null);info('Foto removida.');
  }catch(e){fail(e);}finally{setBusy(false);}}

  async function changeEmail(e:React.FormEvent){e.preventDefault();const sb=getSupabase();if(!user||!sb)return;
    if(email.trim().toLowerCase()===user.email?.toLowerCase()){setError('Digite um e-mail diferente do atual.');return;}
    setBusy(true);setError('');try{
      const {error}=await sb.auth.updateUser({email:email.trim()});if(error)throw error;
      info('Solicitação enviada. Confirme o endereço seguindo os e-mails de verificação (podem ser enviados ao endereço antigo e ao novo).');
    }catch(e){fail(e);}finally{setBusy(false);}
  }
  async function changePassword(e:React.FormEvent){e.preventDefault();const sb=getSupabase();if(!user||!sb)return;
    const validation=validateNewPassword(newPassword);
    if(validation||newPassword!==confirmPassword){setError(validation||'A confirmação de senha não corresponde.');return;}
    setBusy(true);setError('');try{
      const {error}=await sb.auth.updateUser({password:newPassword});if(error)throw error;
      setNewPassword('');setConfirmPassword('');info('Senha atualizada.');
    }catch(e){fail(e);}finally{setBusy(false);}
  }
  async function recovery(){const sb=getSupabase();if(!sb||!user?.email)return;
    setBusy(true);try{const {error}=await sb.auth.resetPasswordForEmail(user.email,{redirectTo:window.location.origin});if(error)throw error;
      info('Se o endereço for válido, as instruções de recuperação serão enviadas por e-mail.');
    }catch(e){fail(e);}finally{setBusy(false);}
  }
  return <div className="app-content account-settings">
    <div className="page-intro"><span className="overline">ESPAÇO DO ESTUDANTE</span><h1>Seu perfil, <em>suas escolhas.</em></h1><p>Controle como você aparece e estuda no Kognos.</p></div>
    <div className="settings-layout">
      <aside className="settings-tabs" aria-label="Configurações da conta">{TABS.map(t=><button key={t.id} className={`settings-tab ${tab===t.id?'active':''}`} onClick={()=>{setTab(t.id);setError('');setNotice('');}}><span><t.icon size={18} strokeWidth={1.8} aria-hidden="true"/></span>{t.label}</button>)}</aside>
      <div className="settings-main">
        {notice&&<div className="message success" role="status">{notice}</div>}
        {error&&<div className="message warning" role="alert">{error}</div>}
        {tab==='profile'&&<section className="settings-panel"><div className="settings-heading"><h2>Informações do aluno</h2><p>Seu nome e foto serão usados na navegação e no tutor.</p></div>
          <div className="profile-photo-row"><ProfileAvatar url={avatarUrl} name={profile.nickname} large/><div className="photo-actions"><strong>Foto de perfil</strong><p>PNG, JPG ou WebP, até 3 MB. {user?'Foto privada e sincronizada com sua conta.':'Foto salva apenas neste dispositivo.'}</p><div className="inline-actions"><label className="btn outline small file-button">{busy?'Salvando...':'Alterar foto'}<input disabled={busy} type="file" accept="image/png,image/jpeg,image/webp" onChange={uploadAvatar} /></label>{avatarUrl&&<button className="text-button danger" onClick={removeAvatar} disabled={busy}>Remover foto</button>}</div></div></div>
          <form className="field-stack" onSubmit={saveProfile}><div className="two-cols"><label>Nome de exibição<input maxLength={60} value={nickname} onChange={e=>setNickname(e.target.value)} required placeholder="Como quer ser chamado"/></label><label>Nome de usuário<input autoCapitalize="none" maxLength={24} value={username} onChange={e=>setUsername(e.target.value)} placeholder="ex.: estudante_23"/><small>3 a 24 caracteres, letras, números e _. {user?'Nome único entre usuários.':'Será reservado ao conectar sua conta.'}</small></label></div><label>Sobre mim (opcional)<textarea value={biography} onChange={e=>setBiography(e.target.value)} maxLength={240} rows={3} placeholder="Seus interesses e objetivos de estudo"/></label><div className="settings-form-footer"><button className="btn primary" disabled={busy}>{busy?'Salvando...':'Salvar alterações'}</button><span>{user?'Alterações sincronizadas com sua conta':'Salvo somente neste navegador'}</span></div></form>
        </section>}
        {tab==='security'&&<section className="settings-panel"><div className="settings-heading"><h2>Conta e segurança</h2><p>Suas credenciais são gerenciadas de forma protegida pelo serviço de autenticação.</p></div>
          {!user?<div className="account-not-connected"><strong>Você está no modo visitante.</strong><p>Crie uma conta para alterar e-mail, senha e sincronizar seu perfil entre dispositivos.</p><button className="btn primary" onClick={onLogin}>Entrar ou criar conta</button></div>:<>
          <form onSubmit={changeEmail} className="field-stack"><h3>E-mail de acesso</h3><label>E-mail atual<input readOnly disabled value={user.email||''}/></label><label>Novo e-mail<input type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} /></label><div><button className="btn outline" disabled={busy}>Solicitar alteração de e-mail</button></div><p className="privacy-note">A alteração pode exigir confirmação nos dois endereços.</p></form>
          <div className="section-divider"/>
          <form onSubmit={changePassword} className="field-stack"><h3>{recoveryMode?'Redefinir sua senha':'Alterar senha'}</h3><p className="privacy-note">A senha atual não pode ser visualizada: ela não fica armazenada de forma recuperável. O olho mostra apenas a nova senha digitada aqui.</p><div className="password-input"><label>Nova senha<input type={showPassword?'text':'password'} autoComplete="new-password" required minLength={12} value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder="Mínimo 12 caracteres"/></label><button type="button" className="password-eye" onClick={()=>setShowPassword(!showPassword)} aria-label={showPassword?'Ocultar senha digitada':'Mostrar senha digitada'}>{showPassword?'Ocultar':'Mostrar'}</button></div><label>Confirmar nova senha<input type={showPassword?'text':'password'} autoComplete="new-password" required value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} /></label><div className="inline-actions"><button className="btn primary" disabled={busy}>Atualizar senha</button><button type="button" className="text-button" disabled={busy} onClick={recovery}>Enviar recuperação por e-mail</button></div></form>
          <div className="section-divider"/><h3>Sessão da conta</h3><button className="btn outline" onClick={onSignout}>Sair da minha conta</button>
          </>}
        </section>}
        {tab==='learning'&&<section className="settings-panel"><div className="settings-heading"><h2>Preferências de aprendizagem</h2><p>O tutor usa estas escolhas para ajustar o ritmo e as explicações.</p></div><div className="preference-summary"><div><small>OBJETIVO</small><strong>{goalLabels[profile.goal]}</strong></div><div><small>ROTINA</small><strong>{profile.dailyMinutes} min · {profile.weeklyDays.length} dias/semana</strong></div><div><small>MÉTODOS</small><div className="profile-tags">{profile.styles.map(s=><span className="profile-tag" key={s}>{styleLabels[s]}</span>)}</div></div><div><small>ACESSIBILIDADE</small><div className="profile-tags">{profile.adaptations.length?profile.adaptations.map(a=><span className="profile-tag special" key={a}>{adaptationLabels[a]}</span>):<span>Nenhuma adaptação selecionada</span>}</div></div></div><button className="btn primary" onClick={onPreferences}>Editar meu jeito de aprender</button><p className="privacy-note">Os recursos para concentração e leitura são escolhas de acessibilidade, não diagnósticos.</p></section>}
        {tab==='appearance'&&<section className="settings-panel"><div className="settings-heading"><h2>Aparência</h2><p>Escolha uma experiência confortável em cada dispositivo.</p></div><div className="appearance-choices"><button aria-pressed={theme==='dark'} className={`appearance-choice ${theme==='dark'?'selected':''}`} onClick={()=>onThemeChange('dark')}><span className="appearance-swatch dark-swatch"/><strong>Tema escuro</strong><small>Reduz luminosidade no ambiente</small></button><button aria-pressed={theme==='light'} className={`appearance-choice ${theme==='light'?'selected':''}`} onClick={()=>onThemeChange('light')}><span className="appearance-swatch light-swatch"/><strong>Tema claro</strong><small>Superfícies claras para leitura</small></button></div><p className="privacy-note">Fonte maior, espaçamento e menos distrações podem ser ajustados em Preferências de aprendizagem.</p></section>}
      </div>
    </div>
  </div>;
}
