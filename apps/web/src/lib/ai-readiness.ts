/** Public configuration readiness, never an active credential or provider health check. */
import {isAIJobConfigured,resolveAIProvider,isFreeOnlyAI,type AIProvider} from './ai-provider.ts';

export type AIReadiness = {
  freeOnlyMode: boolean;
  generatorProvider: AIProvider|null;
  reviewerProvider: AIProvider|null;
  tutorConfigured: boolean;
  tutorProvider: AIProvider|null;
  nvidiaKeyConfigured: boolean;
  questionGenerationConfigured: boolean;
  /** Provider credentials are present for generation and independent review, regardless of DB configuration. */
  generatorCredentialsConfigured: boolean;
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
    freeOnlyMode:isFreeOnlyAI(config),
    generatorProvider:generatorReady?resolveAIProvider('generate',config)?.provider??null:null,
    reviewerProvider:generatorReady?resolveAIProvider('review',config)?.provider??null:null,
    tutorConfigured:tutorReady && supabaseServerConfigured,
    tutorProvider:tutorReady?resolveAIProvider('tutor',config)?.provider??null:null,
    nvidiaKeyConfigured:nvidiaConfigured,
    questionGenerationConfigured:generatorReady && supabaseServerConfigured,
    generatorCredentialsConfigured:generatorReady,
    supabaseServerConfigured,
    offlineGuidesAvailable:true,
  };
}