import { getSupabase } from './supabase';
import {attemptFromRow,attemptToRow,taskFromRow,taskToRow, type StudyTask,type TaskRow,type AttemptRow} from './cloud-study-model';
import type { QuestionAttempt } from './demo-questions';
export type {StudyTask} from './cloud-study-model';

function db(){const sb=getSupabase();if(!sb)throw new Error('Supabase não configurado.');return sb;}
function friendly(error: {message:string} | null){if(error)throw new Error(`Erro ao sincronizar com Supabase: ${error.message}`);}

/** Detect the schema-cache error on installations that have not run 0011. */
function calendarSchemaMissing(message:string):boolean{
 return /start_time/i.test(message)&&/column|schema|does not exist|could not find/i.test(message);
}
export async function getCloudTasks(userId: string): Promise<StudyTask[]> {
  const first=await db().from('kognos_demo_tasks')
    .select('id,user_id,task_date,title,duration_minutes,done,kind,subject,start_time')
    .eq('user_id',userId).order('task_date',{ascending:true}).limit(500);
  if(first.error&&calendarSchemaMissing(first.error.message)){
    // Backwards compatibility: 0004-only installs can still view tasks.
    const legacy=await db().from('kognos_demo_tasks')
      .select('id,user_id,task_date,title,duration_minutes,done,kind,subject')
      .eq('user_id',userId).order('task_date',{ascending:true}).limit(500);
    friendly(legacy.error);
    return (legacy.data||[]).map(row=>taskFromRow(row as TaskRow));
  }
  friendly(first.error);
  return (first.data||[]).map(row=>taskFromRow(row as TaskRow));
}
export async function createCloudTasks(userId:string,tasks:StudyTask[]) {
  if(!tasks.length)return;
  const {error}=await db().from('kognos_demo_tasks').insert(tasks.map(t=>taskToRow(t,userId)));
  if(error&&calendarSchemaMissing(error.message))throw new Error('Para salvar horários, execute a migração 0011_calendar_task_times.sql no Supabase.');
  friendly(error);
}
export async function setCloudTaskTime(userId:string,id:string,startTime:string|null){
  // The field is optional: use null to return a task to "Sem horário".
  if(startTime!==null&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(startTime))
    throw new Error('Horário inválido. Use HH:mm.');
  const {data,error}=await db().from('kognos_demo_tasks')
    .update({start_time:startTime}).eq('user_id',userId).eq('id',id)
    .select('id').single();
  if(error&&calendarSchemaMissing(error.message))throw new Error('Para organizar horários, execute a migração 0011_calendar_task_times.sql no Supabase.');
  friendly(error);
  if(!data)throw new Error('Atividade não encontrada na sua conta.');
}
export async function setCloudTaskDone(userId:string,id:string,done:boolean){
  const {data,error}=await db().from('kognos_demo_tasks').update({done}).eq('user_id',userId).eq('id',id).select('id').single();
  friendly(error);if(!data)throw new Error('Tarefa não encontrada na sua conta.');
}
export async function deleteCloudTask(userId:string,id:string){
  const {error}=await db().from('kognos_demo_tasks').delete().eq('user_id',userId).eq('id',id);
  friendly(error);
}
export async function getCloudAttempts(userId:string):Promise<QuestionAttempt[]>{
  const {data,error}=await db().from('kognos_demo_attempts')
    .select('id,user_id,question_id,subject,answer_index,correct,mode,created_at')
    .eq('user_id',userId).order('created_at',{ascending:true}).limit(2000);
  friendly(error);return (data||[]).map(row=>attemptFromRow(row as AttemptRow));
}
export async function createCloudAttempt(userId:string,attempt:QuestionAttempt){
  const {error}=await db().from('kognos_demo_attempts').insert(attemptToRow(attempt,userId,crypto.randomUUID()));
  friendly(error);
}

/** Batch original demo attempts for the exploratory diagnostic; this is client-graded sample practice. */
export async function createCloudAttempts(userId:string,attempts:QuestionAttempt[]){
  if(!attempts.length)return;
  const rows=attempts.map(attempt=>attemptToRow(attempt,userId,crypto.randomUUID()));
  const {error}=await db().from('kognos_demo_attempts').insert(rows);
  friendly(error);
}