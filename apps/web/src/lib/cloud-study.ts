import { getSupabase } from './supabase';
import {attemptFromRow,attemptToRow,taskFromRow,taskToRow, type StudyTask} from './cloud-study-model';
import type { QuestionAttempt } from './demo-questions';
export type {StudyTask} from './cloud-study-model';

function db(){const sb=getSupabase();if(!sb)throw new Error('Supabase não configurado.');return sb;}
function friendly(error: {message:string} | null){if(error)throw new Error(`Erro ao sincronizar com Supabase: ${error.message}`);}

export async function getCloudTasks(userId: string): Promise<StudyTask[]> {
  const {data,error}=await db().from('kognos_demo_tasks').select('id,user_id,task_date,title,duration_minutes,done,kind,subject')
    .eq('user_id',userId).order('task_date',{ascending:true}).limit(500);
  friendly(error);return (data||[]).map(row=>taskFromRow(row as TaskRow));
}
export async function createCloudTasks(userId:string,tasks:StudyTask[]) {
  if(!tasks.length)return;
  const {error}=await db().from('kognos_demo_tasks').insert(tasks.map(t=>taskToRow(t,userId)));
  friendly(error);
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
