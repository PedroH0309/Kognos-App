import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {demoQuestions} from '@/lib/demo-questions';
import {buildAchievementSummary,type ScoredAnswer} from '@/lib/ai-achievements';

export const runtime='nodejs';
const fail=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(_request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return fail('Entre na sua conta para ver suas conquistas.',401);
 const [attempts,questions,demo]=await Promise.all([
  ctx.supabaseAdmin.from('kognos_ai_attempts')
   .select('question_id,correct,created_at,mode')
   .eq('user_id',userId).order('created_at',{ascending:true}).limit(5001),
  ctx.supabaseAdmin.from('kognos_ai_questions')
   .select('id,subject').eq('user_id',userId).not('completed_at','is',null).limit(5001),
  ctx.supabase.from('kognos_demo_attempts')
   .select('question_id,answer_index,created_at,mode')
   .eq('user_id',userId).order('created_at',{ascending:true}).limit(2001),
 ]);
 if(attempts.error||questions.error)return fail('Não foi possível carregar suas conquistas. Execute a migração 0009 no Supabase.',503);
 if(demo.error)return fail('Não foi possível consultar as atividades demonstrativas.',503);
 const subjectById=new Map((questions.data||[]).map(q=>[q.id,q.subject]));
 const originals=new Map(demoQuestions.map(q=>[q.id,q]));
 const rows:ScoredAnswer[]=[];
 for(const a of (attempts.data||[]).slice(0,5000)){
  // Only questions belonging to this user are included, even with service-role access.
  const subject=subjectById.get(a.question_id);
  if(!subject)continue;
  rows.push({id:'ai:'+a.question_id,subject,correct:a.correct===true,
   mode:a.mode==='mock'?'mock':'practice',createdAt:a.created_at});
 }
 for(const a of (demo.data||[]).slice(0,2000)){
  const original=originals.get(a.question_id);
  if(!original)continue;
  // Demo attempts are client-recorded; recompute correctness from the original
  // question, rather than trusting the client's submitted "correct" flag.
  rows.push({id:'demo:'+a.question_id,subject:original.subject,
   correct:a.answer_index===original.correct,mode:a.mode==='mock'?'mock':'practice',
   createdAt:a.created_at});
 }
 const partial=(attempts.data?.length??0)>5000||(questions.data?.length??0)>5000||(demo.data?.length??0)>2000;
 return NextResponse.json(buildAchievementSummary(rows,new Date(),partial),
   {headers:{'Cache-Control':'no-store'}});
});
export async function GET(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||
    !process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)
  return fail('Supabase não configurado no servidor.',503);
 return handler(request);
}
