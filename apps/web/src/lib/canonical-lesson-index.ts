import {canonicalLessonIndex} from './canonical-lesson-index.generated.ts';
import {curriculumTopics,type CurriculumTopic} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

const registered=new Map(curriculumTopics.map(topic=>[topic.id,topic]));
const sources=new Map(canonicalLessonIndex.map(([id,source,exams])=>[id,{source,exams}]));

/** Client-safe availability only; actual chapters arrive through /api/content. */
export function indexedCanonicalTopicId(exam:ExamId,topic:CurriculumTopic):string|null{
 const actual=registered.get(topic.id);
 if(!actual||actual.subject!==topic.subject||actual.topic!==topic.topic)return null;
 if(!examBlueprints[exam]?.subjects[actual.subject]?.includes(actual.topic))return null;
 const row=sources.get(actual.id);
 return row?.exams.includes(exam)?row.source:null;
}
