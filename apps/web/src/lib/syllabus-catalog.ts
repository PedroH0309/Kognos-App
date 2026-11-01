import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {type ApprovedSyllabusTopic,isUuid, type ImportMethod} from './syllabus-sources.ts';

export type DbSyllabusSource={id:string;institution:ExamId;edition:string;source_title:string;source_url:string;source_method:ImportMethod;review_status:'pending'|'approved'|'rejected';created_at:string};
export type DbSyllabusTopic={id:string;source_id:string;subject:string;topic:string;evidence_excerpt:string;review_status:'pending'|'approved'|'rejected'};

/** Safe, typed projection from private database; never include raw source text or system prompts. */
export function visibleCatalog(sources:DbSyllabusSource[],topics:DbSyllabusTopic[]):ApprovedSyllabusTopic[]{
 const approved=new Map(sources.filter(s=>s.review_status==='approved').map(s=>[s.id,s]));
 const output:ApprovedSyllabusTopic[]=[];
 for(const t of topics){
  if(t.review_status!=='approved'||!isUuid(t.id)||!isUuid(t.source_id))continue;
  const s=approved.get(t.source_id);if(!s||!Object.hasOwn(examBlueprints,s.institution))continue;
  if(!t.subject||!t.topic||t.evidence_excerpt.length<16)continue;
  output.push({id:t.id,sourceId:s.id,institution:s.institution,edition:s.edition,sourceTitle:s.source_title,sourceUrl:s.source_url,sourceMethod:s.source_method,subject:t.subject,topic:t.topic,evidence:t.evidence_excerpt});
 }
 return output;
}