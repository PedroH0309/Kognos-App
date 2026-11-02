import type {AIReadiness} from './ai-readiness.ts';

/** Plain-language configuration state. Never returns or reflects private env values. */
export type IntegrationState = 'ready'|'missing-both'|'missing-supabase'|'missing-nvidia';
export function integrationState(status:Pick<AIReadiness,'supabaseServerConfigured'|'nvidiaKeyConfigured'>):IntegrationState {
 if(!status.supabaseServerConfigured && !status.nvidiaKeyConfigured)return 'missing-both';
 if(!status.supabaseServerConfigured)return 'missing-supabase';
 if(!status.nvidiaKeyConfigured)return 'missing-nvidia';
 return 'ready';
}
export function integrationTitle(state:IntegrationState):string {
 switch(state){
  case 'missing-both':return 'Conecte o servidor à NVIDIA e ao Supabase';
  case 'missing-supabase':return 'Conecte o Supabase ao servidor';
  case 'missing-nvidia':return 'Ative a chave NVIDIA no servidor';
  case 'ready':return 'Configuração detectada';
 }
}
/** A setup outage is not evidence of zero lessons or zero generated questions. */
export function studySyncNotice(error:string):string {
 if(/Supabase ainda não configurado no servidor|Configure o Supabase no servidor/i.test(error)){
  return 'As estatísticas de IA estão indisponíveis porque faltam variáveis do Supabase no servidor. A prática demonstrativa continua visível; as questões salvas não foram apagadas.';
 }
 if(/migraç(?:ão|ao)|kognos_ai_questions|kognos_ai_attempts|indisponível/i.test(error)){
  return 'As estatísticas de IA não puderam ser consultadas. Confira as migrações do banco; o progresso demonstrativo continua disponível.';
 }
 return 'Não foi possível atualizar as estatísticas de IA. Mostrando apenas a prática demonstrativa.';
}