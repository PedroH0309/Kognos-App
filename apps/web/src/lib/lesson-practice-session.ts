import type {GenerationRequest,ExamId,Difficulty} from './exam-blueprints.ts';

/** Exact public projection of an individually checked, newly generated item.
 * This type contains no answer key; grading stays in the authenticated route.
 */
export type NewLessonQuestion={
 id:string;lesson_id:string;institution:ExamId;source_title:string;source_url:string;
 source_kind?:'editor_approved_source'|'editorial';edition:string;subject:string;topic:string;
 difficulty:Difficulty;prompt:string;options:string[];created_at:string;review_status:'auto_reviewed';
};

export function newQuestionsForSelectedLesson(
 response:unknown,preset:GenerationRequest
):NewLessonQuestion[]{
 if(!response||typeof response!=='object'||Array.isArray(response))return [];
 const questions=(response as Record<string,unknown>).questions;
 if(!Array.isArray(questions))return [];
 const distinct=new Set<string>();
 const out:NewLessonQuestion[]=[];
 for(const value of questions){
  if(!value||typeof value!=='object'||Array.isArray(value))continue;
  const q=value as Record<string,unknown>;
  if(typeof q.id!=='string'||!q.id.trim()||distinct.has(q.id))continue;
  if(q.lesson_id!==preset.lessonId||q.institution!==preset.institution
   ||q.subject!==preset.subject||q.topic!==preset.topic||q.difficulty!==preset.difficulty
   ||q.review_status!=='auto_reviewed'
   ||typeof q.prompt!=='string'||q.prompt.trim().length<30
   ||!Array.isArray(q.options)||q.options.length!==5
   ||!q.options.every(v=>typeof v==='string'&&v.trim().length>0)
   ||typeof q.source_title!=='string'||typeof q.source_url!=='string'
   ||typeof q.edition!=='string'||typeof q.created_at!=='string')continue;
  distinct.add(q.id);
  out.push(value as NewLessonQuestion);
 }
 return out.slice(0,preset.count);
}
