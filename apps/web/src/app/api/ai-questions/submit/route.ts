import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
export const runtime='nodejs';
const error=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Acesso não autorizado.',401);
 let input:unknown;
 try{const raw=await request.text();if(raw.length>1000)return error('Pedido muito grande.',413);input=JSON.parse(raw);}catch{return error('Pedido inválido.',400);}
 if(!input||typeof input!=='object'||Array.isArray(input))return error('Pedido inválido.',400);
 const body=input as Record<string,unknown>;
 if(typeof body.questionId!=='string'||!uuid.test(body.questionId)||!Number.isInteger(body.answerIndex)||Number(body.answerIndex)<0||Number(body.answerIndex)>4||(body.mode!=='practice'&&body.mode!=='mock'))return error('Resposta inválida.',400);
 // Atomic service-role RPC validates ownership, grades the private answer key
 // and locks the question. Repeated/concurrent submissions cannot earn more XP.
 const {data:result,error:gradeError}=await ctx.supabaseAdmin.rpc('submit_kognos_ai_answer_once',{
   p_user_id:userId,p_question_id:body.questionId,p_answer_index:body.answerIndex,p_mode:body.mode
 });
 if(gradeError)return error('Não foi possível registrar a resposta. Execute a migração 0009 e tente novamente.',503);
 if(!result||typeof result!=='object'||Array.isArray(result))return error('O servidor retornou uma correção inválida.',503);
 if(result.status==='already_answered')return error('Questão já concluída. Ela saiu da sua lista de questões pendentes.',409);
 if(result.status==='not_found')return error('Questão não encontrada em sua conta.',404);
 if(result.status!=='recorded'||typeof result.correct!=='boolean'||typeof result.correctIndex!=='number'||typeof result.explanation!=='string')return error('Falha ao validar a correção no servidor.',503);
 return NextResponse.json({
   correct:result.correct,correctIndex:result.correctIndex,explanation:result.explanation,
   xpEarned:result.correct?10:2,completed:true
 },{headers:{'Cache-Control':'no-store'}});
});
export async function POST(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase não configurado no servidor.',503);
 return handler(request);
}