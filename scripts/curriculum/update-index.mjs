import {writeFileSync} from 'node:fs';
import {canonicalExamTopicMappings} from '../../apps/web/src/lib/canonical-lesson-reuse.ts';

const byTopic=new Map();
for(const row of canonicalExamTopicMappings()){
 const existing=byTopic.get(row.examTopicId);
 if(existing){
  if(existing[1]!==row.canonicalId)throw new Error('Fontes divergentes para '+row.examTopicId);
  existing[2].push(row.exam);
 }else byTopic.set(row.examTopicId,[row.examTopicId,row.canonicalId,[row.exam]]);
}
const rows=[...byTopic.values()].sort((a,b)=>a[0].localeCompare(b[0]));
const content='/** Generated from the verified runtime registry. No lesson text. */\n'+
 "import type {ExamId} from './exam-blueprints.ts';\n"+
 'export const canonicalLessonIndex:readonly (readonly [string,string,readonly ExamId[]])[] = [\n'+
 rows.map(row=>' '+JSON.stringify(row)).join(',\n')+'\n];\n';
writeFileSync(new URL('../../apps/web/src/lib/canonical-lesson-index.generated.ts',import.meta.url),content);
console.log('Canonical availability index:',rows.length,'registered topics');
