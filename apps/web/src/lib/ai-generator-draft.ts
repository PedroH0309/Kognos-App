import {examBlueprints,difficulties,type ExamId,type Difficulty} from './exam-blueprints.ts';

export type GeneratorDraft={
 institution:ExamId;subject:string;topic:string;difficulty:Difficulty;count:string;bankScope:'all'|'topic'
};
const prefix='kognos_ai_generator_draft_v1:';
const counts=new Set(['1','3','5','10']);

/** Restore only validated, user-owned UI preferences, never answer keys or bearer tokens. */
export function parseGeneratorDraft(input:unknown):GeneratorDraft|null {
 if(!input||typeof input!=='object'||Array.isArray(input))return null;
 const value=input as Record<string,unknown>;
 if(typeof value.institution!=='string'||!Object.hasOwn(examBlueprints,value.institution))return null;
 const institution=value.institution as ExamId,blueprint=examBlueprints[institution];
 if(typeof value.subject!=='string'||!Object.hasOwn(blueprint.subjects,value.subject))return null;
 const subject=value.subject;
 if(typeof value.topic!=='string'||!blueprint.subjects[subject].includes(value.topic))return null;
 if(typeof value.difficulty!=='string'||!Object.hasOwn(difficulties,value.difficulty))return null;
 if(typeof value.count!=='string'||!counts.has(value.count))return null;
 if(value.bankScope!=='all'&&value.bankScope!=='topic')return null;
 return {institution,subject,topic:value.topic,difficulty:value.difficulty as Difficulty,count:value.count,bankScope:value.bankScope};
}
export function readGeneratorDraft(storage:Pick<Storage,'getItem'>,userId:string):GeneratorDraft|null {
 try{const content=storage.getItem(prefix+userId);return content?parseGeneratorDraft(JSON.parse(content)):null;}
 catch{return null;}
}
export function saveGeneratorDraft(storage:Pick<Storage,'setItem'>,userId:string,draft:GeneratorDraft):void {
 const checked=parseGeneratorDraft(draft);
 if(!checked)return;
 try{storage.setItem(prefix+userId,JSON.stringify(checked));}catch{/* restricted storage */}
}
