/** Model-specific performance defaults. Only send GLM parameters to GLM endpoints. */
export const DEFAULT_NVIDIA_MODEL = 'z-ai/glm-5.3-flash';

export function nvidiaInferenceOptions(model: string) {
  if (model === 'z-ai/glm-5.3-flash' || model === 'z-ai/glm-5.3') {
    // These models otherwise default to MAX reasoning, even for a short JSON response.
    return { reasoning_effort: 'low' as const, chat_template_kwargs: { clear_thinking: true } };
  }
  return {};
}
