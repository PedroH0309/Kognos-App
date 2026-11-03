/** Map common PostgREST setup errors to an actionable user-facing explanation. */
export type ProfileSetupIssue = 'core' | 'account' | null;
export function profileSetupIssue(value:unknown):ProfileSetupIssue {
 const raw=typeof value==='string'?value:typeof value==='object'&&value!==null&&'message' in value?String((value as {message:unknown}).message):'';
 const code=typeof value==='object'&&value!==null&&'code' in value?String((value as {code:unknown}).code):'';
 if(/public\.profiles|schema cache.*profiles/i.test(raw)&&(/could not find|does not exist|not found|schema cache/i.test(raw)||code==='PGRST205'||code==='42P01'))return 'core';
 if(/(username|avatar_path|biography)/i.test(raw)&&(/could not find|does not exist|schema cache|column/i.test(raw)||code==='PGRST204'||code==='42703'))return 'account';
 return null;
}
export function explainProfileDatabaseError(error:unknown):string {
 const issue=profileSetupIssue(error);
 if(issue==='core')return 'Não foi possível salvar: a tabela public.profiles não existe no Supabase conectado. No SQL Editor, aplique primeiro 0001_core_schema.sql e as migrações seguintes na ordem; confirme a URL do projeto no .env.local.';
 if(issue==='account')return 'Não foi possível salvar: faltam colunas do perfil no Supabase. Execute a migração 0003_account_and_avatars.sql após a 0001 e a 0002.';
 const code=typeof error==='object'&&error!==null&&'code' in error?String((error as {code:unknown}).code):'';
 if(code==='42501')return 'O Supabase recusou a gravação do perfil. Verifique a migração 0001, as políticas RLS e se você está na sua própria conta.';
 const raw=typeof error==='object'&&error!==null&&'message' in error?String((error as {message:unknown}).message):'';
 return `Não foi possível salvar seu perfil${raw?`: ${raw.slice(0,220)}`:'. Verifique sua conexão e as migrações do Supabase.'}`;
}