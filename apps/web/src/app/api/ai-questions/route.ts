import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {publicGeneratedQuestion} from '@/lib/ai-question-validation';
import {parseAIQuestionListQuery} from '@/lib/ai-bank-paging';

export const runtime='nodejs';
const error=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async (request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Entre na sua conta para acessar o banco da IA.',401);
 const filters=parseAIQuestionListQuery(request.url);
 if(!filters)return error('Filtros de questões inválidos.',400);
 let query=ctx.supabaseAdmin.from('kognos_ai_questions')
   .select('id,institution,source_title,source_url,source_topic_id,lesson_id,edition,subject,topic,difficulty,prompt,options,created_at,review_status',{count:'exact'})
   .eq('user_id',userId).neq('review_status','withdrawn').is('completed_at',null);
 if(filters.institution)query=query.eq('institution',filters.institution);
 if(filters.subject)query=query.eq('subject',filters.subject);
 if(filters.topic)query=query.eq('topic',filters.topic);
 if(filters.difficulty)query=query.eq('difficulty',filters.difficulty);
 const {data,count,error:queryError}=await query.order('created_at',{ascending:false})
   .range(filters.offset,filters.offset+filters.limit-1);
 if(queryError)return error('Não foi possível carregar o banco gerado por IA. Execute a migração 0009 (após 0005 e 0007).',503);
 return NextResponse.json({questions:(data||[]).map(row=>publicGeneratedQuestion(row as Record<string,unknown>)),
   total:count??0,offset:filters.offset,limit:filters.limit,hasMore:filters.offset+(data?.length??0)<(count??0)},
   {headers:{'Cache-Control':'no-store'}});
});
export async function GET(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase ainda não configurado.',503);
 return handler(request);
}