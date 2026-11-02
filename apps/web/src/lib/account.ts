/** Account field validation shared by the editor and the tests. No passwords are persisted. */
export const USERNAME_RE = /^[a-z][a-z0-9_]{2,23}$/;
export function normalizeUsername(value: string) { return value.trim().toLowerCase().replace(/^@/, ''); }
export function validateUsername(value: string): string | null {
  return USERNAME_RE.test(normalizeUsername(value)) ? null : 'Use 3 a 24 caracteres: comece com letra, depois letras minúsculas, números ou _. ';
}
export function validateDisplayName(value: string): string | null {
  return value.trim().length >= 2 && value.trim().length <= 60 ? null : 'O nome deve ter entre 2 e 60 caracteres.';
}
export function validateNewPassword(value: string): string | null {
  return value.length >= 12 && value.length <= 128 ? null : 'Use uma senha de 12 a 128 caracteres.';
}
export const AVATAR_MAX_BYTES = 3 * 1024 * 1024;
export const AVATAR_MIME = ['image/jpeg', 'image/png', 'image/webp'];
export function validateAvatar(file: {type:string;size:number}): string | null {
  if (!AVATAR_MIME.includes(file.type)) return 'Escolha uma foto JPG, PNG ou WebP.';
  if (file.size > AVATAR_MAX_BYTES) return 'O tamanho máximo é 3 MB.';
  if (file.size <= 0) return 'O arquivo está vazio.';
  return null;
}

/** Actionable avatar errors. Never expose raw provider internals as diagnosis. */
export function avatarStorageErrorMessage(error:unknown):string{
 const failure=error as {message?:unknown;statusCode?:unknown;code?:unknown}|null;
 const message=typeof failure?.message==='string'?failure.message:'';
 const code=typeof failure?.code==='string'?failure.code:'';
 if(/bucket.{0,25}(not found|does not exist|missing)|no such bucket/i.test(message)
   || /BucketNotFound|NoSuchBucket/i.test(code)){
  return 'O armazenamento privado de fotos não foi criado neste projeto Supabase. Execute a migração supabase/migrations/0010_restore_private_avatars.sql no SQL Editor e tente novamente.';
 }
 if(/avatar_path/i.test(message)&&/column|schema cache|does not exist/i.test(message)){
  return 'A coluna de foto está ausente no banco de dados. Execute a migração supabase/migrations/0010_restore_private_avatars.sql no Supabase.';
 }
 if(/row.level.security|permission denied|unauthori[sz]ed|new row violates/i.test(message)
   || /403|401/.test(String(failure?.statusCode??''))){
  return 'O Supabase recusou a permissão de armazenamento. Confira as políticas privadas do bucket kognos-avatars na migração 0010 e faça login novamente.';
 }
 if(/file.?size|payload too large|entity too large/i.test(message)){
  return 'Esta foto ultrapassa o limite permitido. Escolha uma imagem de até 3 MB.';
 }
 return message||'Não foi possível guardar a foto. Confira a configuração do Supabase e tente novamente.';
}
