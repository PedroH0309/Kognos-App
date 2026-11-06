/** Etapa 26: doze aulas estaticas autorais, sem geracao de texto em tempo de estudo. */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage26Physics} from './authored-stage26-physics.ts';
import {stage26Geography} from './authored-stage26-geography.ts';
import {stage26Portuguese} from './authored-stage26-portuguese.ts';
export const stage26Seeds=[...stage26Physics,...stage26Geography,...stage26Portuguese];
const specs:readonly LessonBlueprint[]=stage26Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage26Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage26EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage26Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
