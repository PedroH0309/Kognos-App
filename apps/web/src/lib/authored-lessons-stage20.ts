/** Etapa 20: 16 aulas autorais específicas escritas antes do acesso do estudante.
 * O projeto não solicita geração por API durante a leitura. Revisão docente pendente.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage20ExactSciences} from './authored-stage20-sciences.ts';
import {stage20Humanities} from './authored-stage20-humanities.ts';

export const stage20Seeds=[...stage20ExactSciences,...stage20Humanities];
const specs:readonly LessonBlueprint[]=stage20Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(x=>[x.subject+'\0'+x.topic,x]));
export const stage20Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage20EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage20Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}