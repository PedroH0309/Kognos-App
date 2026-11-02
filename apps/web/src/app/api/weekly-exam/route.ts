import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {normalizeProfile} from '@/lib/profile';
import {examForStudent} from '@/lib/exam-syllabus';

export const runtime='nodejs';
const fail=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const noCache={'Cache-Control':'no-store'};
type WeeklyItem={question_id:string;position:number};
type PublicQuestion={id:string;subject:string;topic:string;prompt:string;options:string[]};

function weekStart(now=new Date()):string{
 // Fixed study timezone for the PT-BR release; never trust a client-supplied week.
 const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const part=(type:string)=>parts.find(p=>p.type===type)?.value||'';
 const d=new Date(Date.UTC(Number(part('year')),Number(part('month'))-1,Number(part('day'))));
 d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7);
 return d.toISOString().slice(0,10);
}
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return fail('Entre na sua conta para fazer o simulado semanal.',401);
 const {data:row,error:profileError}=await ctx.supabase.from('profiles').select('preferences').eq('id',userId).maybeSingle();
 if(profileError||!row)return fail('Complete as preferências de sua conta antes do simulado.',409);
 const exam=examForStudent(normalizeProfile(row.preferences));
 if(!exam)return fail('Escolha a prova principal em Perfil → Preferências de aprendizagem.',409);
 const monday=weekStart();
 if(request.method==='POST'){
  let body:unknown;
  try{const raw=await request.text();if(raw.length>500)return fail('Solicitação inválida.',413);body=JSON.parse(raw);}catch{return fail('Informe quantas questões deseja responder.',400);}
  const quantity=(body&&typeof body==='object'&&!Array.isArray(body))?(body as Record<string,unknown>).count:undefined;
  if(!Number.isInteger(quantity)||Number(quantity)<20||Number(quantity)>90)
   return fail('Escolha uma quantidade inteira entre 20 e 90 questões.',400);
  const {error:reservationError}=await ctx.supabaseAdmin.rpc('reserve_kognos_weekly_exam',{
   p_user_id:userId,p_institution:exam,p_week_start:monday,p_count:quantity
  });
  if(reservationError){
   if(/INSUFFICIENT_APPROVED_QUESTIONS/.test(reservationError.message))
    return fail('Ainda não há questões inéditas e aprovadas suficientes para esse tamanho. Gere novos itens no Banco de questões IA; nenhuma questão foi repetida.',409);
   return fail('Não foi possível criar o simulado. Aplique a migração 0012_weekly_unique_exams.sql e confira o banco de questões.',503);
  }
 }
 const {data:examRow,error:examError}=await ctx.supabaseAdmin.from('kognos_weekly_exams')
  .select('id,question_count,week_start').eq('user_id',userId).eq('institution',exam).eq('week_start',monday).maybeSingle();
 if(examError)return fail('O simulado semanal exige a migração 0012 no Supabase.',503);
 // Inventory and longitudinal summaries are service-role scoped. On databases
 // that have only migration 0012, existing exams remain usable.
 const [inventoryRead,historyRead,weakRead]=await Promise.all([
  ctx.supabaseAdmin.rpc('kognos_weekly_exam_inventory',{p_user_id:userId,p_institution:exam}),
  ctx.supabaseAdmin.rpc('kognos_weekly_exam_history',{p_user_id:userId,p_institution:exam}),
  ctx.supabaseAdmin.rpc('kognos_weekly_exam_weak_topics',{p_user_id:userId,p_institution:exam})
 ]);
 const inventory=inventoryRead.error?null:inventoryRead.data;
 const history=historyRead.error?[]:historyRead.data;
 const weakTopics=weakRead.error?[]:weakRead.data;
 const enhanced=inventoryRead.error===null&&historyRead.error===null&&weakRead.error===null;
 if(!examRow)return NextResponse.json({institution:exam,weekStart:monday,session:null,
  inventory,history,weakTopics,enhanced},{headers:noCache});
 const {data:assignments,error:itemsError}=await ctx.supabaseAdmin.from('kognos_weekly_exam_items')
  .select('question_id,position').eq('exam_id',examRow.id).eq('user_id',userId).order('position');
 if(itemsError||!assignments||assignments.length!==examRow.question_count)
  return fail('As questões desta semana não puderam ser recuperadas. Nenhum gabarito será exibido.',503);
 const ids=(assignments as WeeklyItem[]).map(item=>item.question_id);
 const [questionResult,attemptResult]=await Promise.all([
  ctx.supabaseAdmin.from('kognos_ai_questions')
   .select('id,institution,subject,topic,prompt,options,correct_index,review_status')
   .eq('user_id',userId).eq('institution',exam).in('id',ids),
  ctx.supabaseAdmin.from('kognos_ai_attempts')
   .select('question_id,answer_index').eq('user_id',userId).in('question_id',ids)
 ]);
 if(questionResult.error||attemptResult.error||questionResult.data?.length!==ids.length)
  return fail('Não foi possível verificar os itens e respostas deste simulado.',503);
 const source=new Map((questionResult.data||[]).map(q=>[q.id,q]));
 const byId=new Map((attemptResult.data||[]).map(a=>[a.question_id,a.answer_index]));
 let correct=0;
 const breakdown=new Map<string,{subject:string;total:number;answered:number;correct:number;topics:Map<string,{topic:string;total:number;answered:number;correct:number}>}>();
 const questions:PublicQuestion[]=assignments.map(item=>{
  const q=source.get(item.question_id)!;
  const hasAnswer=byId.has(q.id);
  const right=hasAnswer&&byId.get(q.id)===q.correct_index;
  if(right)correct++;
  const group=breakdown.get(q.subject)||{subject:q.subject,total:0,answered:0,correct:0,
   topics:new Map<string,{topic:string;total:number;answered:number;correct:number}>()};
  group.total++;group.answered+=Number(hasAnswer);group.correct+=Number(right);
  const topic=group.topics.get(q.topic)||{topic:q.topic,total:0,answered:0,correct:0};
  topic.total++;topic.answered+=Number(hasAnswer);topic.correct+=Number(right);
  group.topics.set(q.topic,topic);breakdown.set(q.subject,group);
  // The question key/explanation never leave the server before grading.
  return {id:q.id,subject:q.subject,topic:q.topic,prompt:q.prompt,options:q.options};
 });
 const answeredIds=ids.filter(id=>byId.has(id));
 const completed=answeredIds.length===ids.length;
 const subjectScores=completed?[...breakdown.values()].map(group=>({
  subject:group.subject,total:group.total,answered:group.answered,correct:group.correct,
  topics:[...group.topics.values()].sort((a,b)=>a.topic.localeCompare(b.topic,'pt-BR'))
 })).sort((a,b)=>a.correct/a.total-b.correct/b.total||a.subject.localeCompare(b.subject,'pt-BR')):null;
 return NextResponse.json({institution:exam,weekStart:monday,
  inventory,history,weakTopics,enhanced,session:{
   id:examRow.id,count:examRow.question_count,answeredIds,correct,questions,subjectScores
  }},{headers:noCache});
});
export async function GET(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return fail('Supabase não configurado.',503);
 return handler(request);
}
export async function POST(request:Request){
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return fail('Supabase não configurado.',503);
 return handler(request);
}
