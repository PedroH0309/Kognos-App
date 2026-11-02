import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {aggregateAIStudyProgress,type PrivateAIQuestionRow,type PrivateAIAttemptRow} from '@/lib/ai-study-progress';

export const runtime='nodejs';
const error=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async (_request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Entre em sua conta para consultar o desempenho gerado por IA.',401);
 // Both queries MUST be scoped to the owner. The correct_index is used only inside this route.
 const {data:questions,error:qError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
  .select('id,lesson_id,institution,subject,topic,correct_index')
  .eq('user_id',userId).neq('review_status','withdrawn').order('created_at',{ascending:false}).limit(501);
 if(qError)return error('Banco de IA indisponível. Execute a migração 0007 após a 0005.',503);
 const known=(questions||[]).slice(0,500) as PrivateAIQuestionRow[];
 const {data:attempts,error:aError}=await ctx.supabaseAdmin.from('kognos_ai_attempts')
  .select('question_id,answer_index,created_at,mode').eq('user_id',userId)
  .order('created_at',{ascending:false}).limit(1501);
 if(aError)return error('Não foi possível consultar o histórico de respostas IA.',503);
 const selectedIds=new Set(known.map(q=>q.id));
 const latest=(attempts||[]).slice(0,1500) as PrivateAIAttemptRow[];
 const included=latest.filter(a=>selectedIds.has(a.question_id));
 // Question count and attempt count are bounded; results are expressly a sample if either was truncated.
 const partial=(questions?.length??0)>500||(attempts?.length??0)>1500||included.length<latest.length;
 const result=aggregateAIStudyProgress(known,included,partial);
 return NextResponse.json(result,{headers:{'Cache-Control':'no-store'}});
});
export async function GET(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase ainda não configurado no servidor.',503);
 return handler(request);
}