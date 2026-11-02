/** Public configuration readiness, never an active credential or provider health check. */
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
  return {
    tutorConfigured:nvidiaConfigured && supabaseServerConfigured,
    nvidiaKeyConfigured:nvidiaConfigured,
    questionGenerationConfigured:nvidiaConfigured && supabaseServerConfigured,
    supabaseServerConfigured,
    offlineGuidesAvailable:true,
  };
}