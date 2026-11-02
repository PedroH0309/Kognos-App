/** Safe, actionable failure categories for the public AI question generator.
 * Never return provider responses, prompts, access tokens or raw exception messages. */
export type GenerationFailure = {code:string;message:string;status:number};
const known:Record<string,GenerationFailure>={
  NVIDIA_NOT_CONFIGURED:{code:'NVIDIA_NOT_CONFIGURED',message:'Configure NVIDIA_API_KEY no servidor.',status:503},
  NVIDIA_AUTH:{code:'NVIDIA_AUTH',message:'Chave NVIDIA inválida ou modelo não autorizado. Confira as credenciais no servidor.',status:502},
  NVIDIA_RATE_LIMIT:{code:'NVIDIA_RATE_LIMIT',message:'A NVIDIA atingiu o limite de requisições. Aguarde antes de tentar novamente.',status:429},
  NVIDIA_TIMEOUT:{code:'NVIDIA_TIMEOUT',message:'A NVIDIA demorou demais para gerar ou revisar as questões. Tente gerar 1 ou 2 por vez.',status:504},
  NVIDIA_NETWORK:{code:'NVIDIA_NETWORK',message:'O servidor não conseguiu se conectar à NVIDIA. Verifique a conexão e a URL da API.',status:502},
  NVIDIA_UNAVAILABLE:{code:'NVIDIA_UNAVAILABLE',message:'A NVIDIA está temporariamente indisponível. Tente novamente mais tarde.',status:502},
  NVIDIA_BAD_REQUEST:{code:'NVIDIA_BAD_REQUEST',message:'A NVIDIA rejeitou a solicitação. Confira NVIDIA_MODEL e os limites do modelo configurado.',status:502},
  NVIDIA_MODEL_UNAVAILABLE:{code:'NVIDIA_MODEL_UNAVAILABLE',message:'O modelo NVIDIA configurado não foi encontrado. Confira NVIDIA_MODEL.',status:502},
  NVIDIA_BAD_RESPONSE:{code:'NVIDIA_BAD_RESPONSE',message:'A NVIDIA retornou dados em formato inesperado. Nenhuma questão foi salva.',status:502},
  NVIDIA_EMPTY:{code:'NVIDIA_EMPTY',message:'A NVIDIA não retornou texto para geração ou revisão. Tente novamente.',status:502},
  NVIDIA_TRUNCATED:{code:'NVIDIA_TRUNCATED',message:'A NVIDIA interrompeu a resposta por limite de tokens. Tente gerar menos questões de uma vez.',status:422},
};
export function describeGenerationError(cause:unknown):GenerationFailure {
  const message=cause instanceof Error?cause.message:'';
  if(Object.hasOwn(known,message))return known[message];
  if(/JSON válido|formato esperado|validação estrutural|quantidade solicitada|acima do limite/i.test(message)){
    return {code:'AI_INVALID_OUTPUT',message:'A IA retornou questões ou revisão em um formato inválido. Tente gerar menos questões ou escolha outro tema.',status:422};
  }
  return {code:'AI_GENERATION_UNEXPECTED',message:'Não foi possível concluir a geração. Consulte os logs do servidor para identificar a falha.',status:503};
}
