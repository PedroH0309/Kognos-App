import {contentJson} from '@/lib/content-server';
export const runtime='nodejs';

/** Deliberately retired: the Studies library contains editorially prepared,
 * individually authored material, not per-user LLM-generated lessons.
 * Keep a compatibility response so old clients cannot create AI lessons.
 * Other authorized editorial publication workflows remain unchanged.
 */
export async function POST(){
 return contentJson({error:'A geração automática de aulas foi desativada. O repertório é escrito e publicado editorialmente pelo Kognos.'},410);
}
