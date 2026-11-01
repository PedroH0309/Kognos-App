import { NextResponse } from 'next/server';
import { withSupabase } from '@supabase/server';
import { buildTutorSystemPrompt, sanitizeHistory, validateTutorMessage } from '@/lib/tutor';
import { normalizeProfile } from '@/lib/profile';

export const runtime = 'nodejs';

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

/** A protected Bearer-token API route. The browser never receives secret/admin/NVIDIA credentials. */
const authenticatedTutor = withSupabase({ auth: 'user', audience: 'authenticated', issuer: 'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1' }, async (request, ctx) => {
  let body: { message?: unknown; history?: unknown; subject?: unknown };
  try {
    // Limit actual bytes too; Content-Length is optional and cannot be trusted alone.
    const raw = await request.text();
    if (raw.length > 30000) return jsonError('Mensagem muito grande.', 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== 'object' || Array.isArray(body)) return jsonError('Requisição inválida.', 400);
  } catch { return jsonError('Não foi possível ler sua pergunta.', 400); }
  const messageError = validateTutorMessage(body.message);
  if (messageError) return jsonError(messageError, 400);
  const subject = typeof body.subject === 'string'
    ? body.subject.replace(/[\r\n<>]/g, ' ').slice(0, 70) : 'Conteúdo geral';
  const userId = ctx.userClaims?.id;
  if (!userId) return jsonError('Sua sessão não foi reconhecida. Entre novamente.', 401);
  try {
    const maxRequests = Math.max(1, Math.min(100, Number(process.env.AI_DAILY_REQUEST_LIMIT || '20') || 20));
    // Only the server can invoke the security-definer RPC; the user cannot choose the owner ID.
    const { data: reserved, error: quotaError } = await ctx.supabaseAdmin.rpc(
      'reserve_ai_quota', { p_user_id: userId, p_daily_limit: maxRequests }
    );
    if (quotaError) return jsonError('O controle de cotas precisa da migração 0002 no Supabase.', 503);
    if (reserved !== true) return jsonError(`Limite de ${maxRequests} perguntas por dia atingido.`, 429);

    // Caller-scoped read. Row Level Security enforces isolation of preferences.
    const { data: profileRow, error: profileError } = await ctx.supabase
      .from('profiles').select('preferences').eq('id', userId).single();
    if (profileError || !profileRow) return jsonError('Conclua o cadastro antes de utilizar o tutor.', 409);

    const profile = normalizeProfile(profileRow.preferences);
    const messages = [
      { role: 'system', content: buildTutorSystemPrompt(profile, subject) },
      ...sanitizeHistory(body.history),
      { role: 'user', content: (body.message as string).trim() },
    ];
    const baseUrl = (process.env.NVIDIA_API_BASE_URL || 'https://integrate.api.nvidia.com/v1').replace(/\/$/, '');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000);
    let response: Response;
    try {
      response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: process.env.NVIDIA_MODEL || 'meta/llama-3.3-70b-instruct', messages,
          max_tokens: 1250, temperature: 0.55, stream: false,
        }),
        cache: 'no-store', signal: controller.signal,
      });
    } finally { clearTimeout(timeout); }
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) return jsonError('Chave NVIDIA inválida ou modelo não autorizado.', 502);
      if (response.status === 429) return jsonError('O provedor limitou temporariamente as respostas.', 429);
      return jsonError('O tutor está temporariamente indisponível.', 502);
    }
    const result = await response.json();
    const answer = result?.choices?.[0]?.message?.content;
    if (typeof answer !== 'string' || !answer.trim()) return jsonError('O modelo não retornou uma resposta válida.', 502);
    return NextResponse.json(
      { answer: answer.slice(0, 12000), model: result.model || process.env.NVIDIA_MODEL },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (e) {
    if (e instanceof Error && e.name === 'AbortError') return jsonError('O tutor excedeu o tempo de resposta.', 504);
    return jsonError('Não foi possível conectar ao tutor. Tente novamente.', 503);
  }
});

export async function POST(request: Request) {
  if (!process.env.NVIDIA_API_KEY) return jsonError('A IA NVIDIA ainda não foi configurada no servidor.', 503);
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY ||
      !process.env.SUPABASE_SECRET_KEY || !process.env.SUPABASE_JWKS_URL) {
    return jsonError('A proteção da API precisa das variáveis do Supabase configuradas no servidor.', 503);
  }
  return authenticatedTutor(request);
}
