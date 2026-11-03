import type {AIReadiness} from './ai-readiness.ts';

/** The diagnostic is for the actual generation + review pipeline.
 * NVIDIA_API_KEY alone is not enough in the default free-only mode.
 */
export type IntegrationState='ready'|'missing-both'|'missing-supabase'|'missing-ai';
export function integrationState(status:Pick<AIReadiness,'supabaseServerConfigured'|'generatorCredentialsConfigured'>):IntegrationState{
 if(!status.supabaseServerConfigured&&!status.generatorCredentialsConfigured)return 'missing-both';
 if(!status.supabaseServerConfigured)return 'missing-supabase';
 if(!status.generatorCredentialsConfigured)return 'missing-ai';
 return 'ready';
}
export function integrationTitle(state:IntegrationState):string{
 switch(state){
  case 'missing-both':return 'Conecte o banco de dados e o provedor de IA';
  case 'missing-supabase':return 'Conecte o Supabase ao servidor';
  case 'missing-ai':return 'Configure um provedor de IA para gerar e revisar questões';
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
/** Do not echo raw server diagnostics or student data back into the interface. */
export function bankSyncNotice(error:string):string{
 if(/sessão|sessao|entre novamente|autenticaç/i.test(error))
  return 'Sua sessão precisa ser renovada. Entre novamente e atualize o banco de questões.';
 if(/migraç|migrac|kognos_ai_questions|banco de IA indisponível/i.test(error))
  return 'O banco de questões não respondeu. Confira as migrações do Supabase e tente novamente.';
 return 'Não foi possível consultar o banco de questões agora. Atualize a conexão para tentar outra vez.';
}
