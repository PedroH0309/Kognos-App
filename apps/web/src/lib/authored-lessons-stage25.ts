/** Etapa 25 — doze aulas autorais, estáticas, aprofundadas e independentes. */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage25Math} from './authored-stage25-math.ts';
import {stage25Chemistry} from './authored-stage25-chemistry.ts';
import {stage25Biology} from './authored-stage25-biology.ts';
export const stage25Seeds=[...stage25Math,...stage25Chemistry,...stage25Biology];
const specs:readonly LessonBlueprint[]=stage25Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage25Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage25EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage25Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
