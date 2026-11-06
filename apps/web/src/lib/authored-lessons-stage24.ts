/** Etapa 24: seis aulas autorais estáticas em Matemática, Química e Biologia. */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage24Math} from './authored-stage24-math.ts';
import {stage24Chemistry} from './authored-stage24-chemistry.ts';
import {stage24Biology} from './authored-stage24-biology.ts';
export const stage24Seeds=[...stage24Math,...stage24Chemistry,...stage24Biology];
const specs:readonly LessonBlueprint[]=stage24Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage24Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage24EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage24Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
