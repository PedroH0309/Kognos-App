import { NextResponse } from 'next/server';
import { withSupabase } from '@supabase/server';
import { buildTutorSystemPrompt, sanitizeHistory, validateTutorMessage, normalizeTutorAnswer } from '@/lib/tutor';
import { normalizeProfile } from '@/lib/profile';
import { parseKogStudyContext, buildVerifiedQuestionContext, buildVerifiedPlanContext, buildVerifiedPerformanceContext, findDemoQuestion, type VerifiedDemoAttempt, type VerifiedStudyTask } from '@/lib/kog-study-context';

export const runtime = 'nodejs';

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

/** A protected Bearer-token API route. The browser never receives secret/admin/provider credentials. */
const authenticatedTutor = withSupabase({ auth: 'user', audience: 'authenticated', issuer: 'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1' }, async (request, ctx) => {
  let body: { message?: unknown; history?: unknown; subject?: unknown; studyContext?: unknown };
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
  // The tutoring boundary must also exist on the server, not only in the UI.
  // Explicit non-educational requests are answered without invoking a paid provider.
  const scopeResponse=tutorScopeReply(body.message as string);
  if(scopeResponse)return NextResponse.json({answer:scopeResponse,scope:'pedagogical_only'},{headers:{'Cache-Control':'no-store'}});
  try {
    // Caller-scoped read. Row Level Security enforces isolation of preferences.
    const { data: profileRow, error: profileError } = await ctx.supabase
      .from('profiles').select('preferences').eq('id', userId).single();
    if (profileError || !profileRow) return jsonError('Conclua o cadastro antes de utilizar o tutor.', 409);

    const profile = normalizeProfile(profileRow.preferences);
    const studyContext = parseKogStudyContext(body.studyContext);
    let contextText = '';
    let effectiveSubject = subject;
    if (studyContext?.kind === 'question') {
      const question = findDemoQuestion(studyContext.questionId);
      if(question) {
        effectiveSubject = question.subject;
        let attempt: VerifiedDemoAttempt|null = null;
        if(studyContext.phase === 'review') {
          // Only a recorded attempt owned by the authenticated student unlocks correction.
          const {data: recorded, error: attemptError} = await ctx.supabase.from('kognos_demo_attempts')
            .select('answer_index').eq('user_id',userId).eq('question_id',question.id)
            .order('created_at',{ascending:false}).limit(1).maybeSingle();
          if(attemptError) return jsonError('Não foi possível verificar sua tentativa.',503);
          if(recorded) attempt={answerIndex:recorded.answer_index,correct:recorded.answer_index===question.correct};
        }
        contextText=buildVerifiedQuestionContext(studyContext,attempt)||'';
      }
    } else if (studyContext?.kind === 'planner') {
      let query = ctx.supabase.from('kognos_demo_tasks')
        .select('title,subject,task_date,duration_minutes,done').eq('user_id',userId);
      if(studyContext.taskId)query=query.eq('id',studyContext.taskId);
      const {data: tasks,error: tasksError} = await query.order('task_date',{ascending:true}).limit(30);
      if(tasksError)return jsonError('Não foi possível consultar seu planejamento.',503);
      const safeTasks:VerifiedStudyTask[]=(tasks||[]).map(item=>({
        title:item.title,subject:item.subject,date:item.task_date,minutes:item.duration_minutes,done:item.done
      }));
      contextText=buildVerifiedPlanContext(safeTasks);
    } else if (studyContext?.kind === 'performance') {
      const {data: rows,error: resultError} = await ctx.supabase.from('kognos_demo_attempts')
        .select('question_id,answer_index').eq('user_id',userId)
        .order('created_at',{ascending:false}).limit(100);
      if(resultError)return jsonError('Não foi possível consultar seu desempenho.',503);
      const totals=new Map<string,{subject:string;answered:number;correct:number}>();
      let counted=0,correct=0;
      for(const row of rows||[]){
        const q=findDemoQuestion(row.question_id);
        if(!q)continue; // Only verified original demo questions are included.
        counted++;const correctAnswer=row.answer_index===q.correct;if(correctAnswer)correct++;
        const prev=totals.get(q.subject)||{subject:q.subject,answered:0,correct:0};
        prev.answered++;if(correctAnswer)prev.correct++;
        totals.set(q.subject,prev);
      }
      contextText=buildVerifiedPerformanceContext({answered:counted,correct,bySubject:[...totals.values()]});
    }
    const messages = [
      { role: 'system', content: buildTutorSystemPrompt(profile, effectiveSubject, contextText) },
      ...sanitizeHistory(body.history),
      { role: 'user', content: (body.message as string).trim() },
    ];
    const answer = await requestAI('tutor',messages as {role:'system'|'user'|'assistant';content:string}[],1250,0.55);
    return NextResponse.json(
      { answer: normalizeTutorAnswer(enforcePedagogicalTutorAnswer(answer)).slice(0, 12000) },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (e) {
    if (e instanceof Error && e.message === 'NVIDIA_TIMEOUT') return jsonError('O tutor excedeu o tempo de resposta.',504);
    if (e instanceof AIProviderRateLimitError){
      const after=e.retryAfterSeconds;
      return NextResponse.json({error:`O provedor gratuito ${e.provider} atingiu seu limite de uso.${after?` Tente novamente após aproximadamente ${after} segundos.`:' Aguarde a renovação da cota da conta.'}`},
        {status:429,headers:{'Cache-Control':'no-store',...(after?{'Retry-After':String(after)}:{})}});
    }
    if (e instanceof Error && e.message === 'NVIDIA_AUTH') return jsonError('Chave de API do tutor inválida ou sem autorização.',502);
    if (e instanceof Error && e.message === 'NVIDIA_MODEL_UNAVAILABLE') return jsonError('O modelo de IA do tutor não foi encontrado. Confira AI_TUTOR_MODEL.',502);
    if (e instanceof Error && e.message === 'NVIDIA_BAD_REQUEST') return jsonError('O provedor rejeitou a requisição do tutor. Confira o modelo e seus parâmetros.',502);
    if (e instanceof Error && e.message === 'NVIDIA_UNAVAILABLE') return jsonError('O serviço de IA do tutor está temporariamente indisponível.',502);
    if (e instanceof Error && e.message === 'AI_PROVIDER_NOT_CONFIGURED') return jsonError('Configure GROQ_API_KEY ou GEMINI_API_KEY para ativar o tutor gratuito.',503);
    return jsonError('Não foi possível conectar ao tutor. Tente novamente.', 503);
  }
});

export async function POST(request: Request) {
  if (!isAIJobConfigured('tutor')) return NextResponse.json({error:'O tutor IA precisa de configuração no servidor. O guia local pode ser usado enquanto isso.',code:'AI_NOT_CONFIGURED'},{status:503,headers:{'Cache-Control':'no-store'}});
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY ||
      !process.env.SUPABASE_SECRET_KEY || !process.env.SUPABASE_JWKS_URL) {
    return jsonError('A proteção da API precisa das variáveis do Supabase configuradas no servidor.', 503);
  }
  return authenticatedTutor(request);
}