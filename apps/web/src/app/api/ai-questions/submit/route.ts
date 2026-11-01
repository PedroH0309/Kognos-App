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
 const {data:question,error:questionError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
   .select('id,correct_index,explanation,review_status').eq('id',body.questionId).eq('user_id',userId).neq('review_status','withdrawn').maybeSingle();
 if(questionError)return error('Falha ao buscar questão. Verifique a migração 0005.',503);
 if(!question)return error('Questão não encontrada em sua conta.',404);
 const correct=question.correct_index===body.answerIndex;
 const {error:insertError}=await ctx.supabaseAdmin.from('kognos_ai_attempts').insert({user_id:userId,question_id:question.id,answer_index:body.answerIndex,correct,mode:body.mode});
 if(insertError)return error('Não foi possível registrar a resposta.',503);
 return NextResponse.json({correct,correctIndex:question.correct_index,explanation:question.explanation},{headers:{'Cache-Control':'no-store'}});
});
export async function POST(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase não configurado no servidor.',503);
 return handler(request);
}