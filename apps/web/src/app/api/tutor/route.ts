import { NextResponse } from 'next/server';
import { withSupabase } from '@supabase/server';
import { buildTutorSystemPrompt, sanitizeHistory, validateTutorMessage } from '@/lib/tutor';
import { normalizeProfile } from '@/lib/profile';
import {DEFAULT_NVIDIA_MODEL,nvidiaInferenceOptions} from '@/lib/nvidia-request-config';
import {refundAIQuota} from '@/lib/ai-quota';
import {findLearningLesson} from '@/lib/learning-catalog';
import { parseKogStudyContext, buildVerifiedQuestionContext, buildVerifiedGeneratedQuestionContext, buildVerifiedPlanContext, buildVerifiedPerformanceContext, buildVerifiedLessonContext, findDemoQuestion, type VerifiedDemoAttempt, type VerifiedStudyTask } from '@/lib/kog-study-context';

export const runtime = 'nodejs';

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

/** A protected Bearer-token API route. The browser never receives secret/admin/NVIDIA credentials. */
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
  try {
    // Caller-scoped read. Row Level Security enforces isolation of preferences.
    const { data: profileRow, error: profileError } = await ctx.supabase
      .from('profiles').select('preferences').eq('id', userId).single();
    if (profileError || !profileRow) return jsonError('Conclua o cadastro antes de utilizar o tutor.', 409);

    const profile = normalizeProfile(profileRow.preferences);
    const studyContext = parseKogStudyContext(body.studyContext);
    let contextText = '';
    let effectiveSubject = subject;
    if(studyContext?.kind === 'lesson') {
      const lesson=findLearningLesson(studyContext.lessonId);
      if(lesson){effectiveSubject=lesson.subject;contextText=buildVerifiedLessonContext(lesson);}
    } else if (studyContext?.kind === 'question') {
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
    } else if (studyContext?.kind === 'generated_question') {
      const {data:generated,error:lookupError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
        .select('id,subject,topic,difficulty,prompt,options,correct_index,explanation')
        .eq('id',studyContext.questionId).eq('user_id',userId).neq('review_status','withdrawn').maybeSingle();
      if(lookupError)return jsonError('O banco gerado por IA requer a migração 0005.',503);
      if(generated){
        effectiveSubject=generated.subject;
        let verifiedAttempt:VerifiedDemoAttempt|null=null;
        if(studyContext.phase==='review'){
          const {data:recorded,error:attemptError}=await ctx.supabaseAdmin.from('kognos_ai_attempts')
            .select('answer_index').eq('user_id',userId).eq('question_id',generated.id).order('created_at',{ascending:false}).limit(1).maybeSingle();
          if(attemptError)return jsonError('Não foi possível verificar sua resposta.',503);
          if(recorded)verifiedAttempt={answerIndex:recorded.answer_index,correct:recorded.answer_index===generated.correct_index};
        }
        contextText=buildVerifiedGeneratedQuestionContext(generated,studyContext.phase,verifiedAttempt);
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
    // Only consume quota after all profile/context checks have succeeded.
    const maxRequests = Math.max(1, Math.min(100, Number(process.env.AI_DAILY_REQUEST_LIMIT || '20') || 20));
    const quotaDay = new Date().toISOString().slice(0,10);
    const { data: reserved, error: quotaError } = await ctx.supabaseAdmin.rpc(
      'reserve_ai_quota', { p_user_id: userId, p_daily_limit: maxRequests }
    );
    if (quotaError) return jsonError('O controle de cotas precisa da migração 0002 no Supabase.', 503);
    if (reserved !== true) return jsonError(`Cota diária esgotada: até ${maxRequests} usos e ${maxRequests*2} tentativas de IA, compartilhadas com o gerador. Reinicia às 00:00 UTC.`, 429);
    const messages = [
      { role: 'system', content: buildTutorSystemPrompt(profile, effectiveSubject, contextText) },
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
          model: process.env.NVIDIA_MODEL || DEFAULT_NVIDIA_MODEL, messages,
          max_tokens: 1250, temperature: 0.55, stream: false,
          ...nvidiaInferenceOptions(process.env.NVIDIA_MODEL || DEFAULT_NVIDIA_MODEL),
        }),
        cache: 'no-store', signal: controller.signal,
      });
    } catch (e) {
      if (!(e instanceof Error && (e.name==='AbortError'||e.name==='TimeoutError'))) {
        // The request never yielded a provider response. Refund the reserved use.
        await refundAIQuota(ctx.supabaseAdmin,userId,quotaDay);
      }
      throw e;
    } finally { clearTimeout(timeout); }
    if (!response.ok) {
      // The provider explicitly rejected the call before returning usable output.
      // Preserve timeouts as charged: the provider might still have processed them.
      if(response.status!==408 && response.status!==504)await refundAIQuota(ctx.supabaseAdmin,userId,quotaDay);
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
  if (!process.env.NVIDIA_API_KEY?.trim()) return NextResponse.json({error:'O tutor IA precisa de configuração no servidor. O guia local pode ser usado enquanto isso.',code:'AI_NOT_CONFIGURED'},{status:503,headers:{'Cache-Control':'no-store'}});
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY ||
      !process.env.SUPABASE_SECRET_KEY || !process.env.SUPABASE_JWKS_URL) {
    return jsonError('A proteção da API precisa das variáveis do Supabase configuradas no servidor.', 503);
  }
  return authenticatedTutor(request);
}