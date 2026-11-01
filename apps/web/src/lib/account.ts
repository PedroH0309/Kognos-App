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
