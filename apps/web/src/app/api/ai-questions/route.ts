import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {publicGeneratedQuestion} from '@/lib/ai-question-validation';

export const runtime='nodejs';
const error=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async (_request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Entre na sua conta para acessar o banco da IA.',401);
 const {data, error:queryError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
   .select('id,institution,source_title,source_url,source_topic_id,lesson_id,edition,subject,topic,difficulty,prompt,options,created_at,review_status')
   .eq('user_id',userId).neq('review_status','withdrawn').order('created_at',{ascending:false}).limit(100);
 if(queryError)return error('Não foi possível carregar o banco gerado por IA. Execute as migrações 0005 e 0007.',503);
 return NextResponse.json({questions:(data||[]).map(row=>publicGeneratedQuestion(row as Record<string,unknown>))},{headers:{'Cache-Control':'no-store'}});
});
export async function GET(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase ainda não configurado.',503);
 return handler(request);
}