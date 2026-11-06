/** Etapa 23 — seis aulas autorais específicas, sem geração em tempo de estudo. */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage23Science} from './authored-stage23-science.ts';
import {stage23Physics} from './authored-stage23-physics.ts';
export const stage23Seeds=[...stage23Science,...stage23Physics];
const specs:readonly LessonBlueprint[]=stage23Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage23Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage23EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage23Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
