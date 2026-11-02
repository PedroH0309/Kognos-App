/** Public configuration readiness, never an active credential or provider health check. */
import {isAIJobConfigured} from './ai-provider.ts';

export type AIReadiness = {
  tutorConfigured: boolean;
  nvidiaKeyConfigured: boolean;
  questionGenerationConfigured: boolean;
  supabaseServerConfigured: boolean;
  offlineGuidesAvailable: boolean;
};

export function publicAIReadiness(config: Record<string,string|undefined>): AIReadiness {
  const valid = (key:string) => typeof config[key]==='string' && Boolean(config[key]?.trim());
  const supabaseServerConfigured = ['SUPABASE_URL','SUPABASE_PUBLISHABLE_KEY','SUPABASE_SECRET_KEY','SUPABASE_JWKS_URL'].every(valid);
  const nvidiaConfigured = valid('NVIDIA_API_KEY');
  const tutorReady=isAIJobConfigured('tutor',config);
  const generatorReady=isAIJobConfigured('generate',config)&&isAIJobConfigured('review',config);
  return {
    tutorConfigured:tutorReady && supabaseServerConfigured,
    nvidiaKeyConfigured:nvidiaConfigured,
    questionGenerationConfigured:generatorReady && supabaseServerConfigured,
    supabaseServerConfigured,
    offlineGuidesAvailable:true,
  };
}