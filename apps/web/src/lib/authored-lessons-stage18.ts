/** Etapa 18: 64 aulas novas com formato editorial comum, fatos autorais por tema.
 * Material pré-escrito, não gera texto por serviços de IA na navegação.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {stage18Math} from './authored-stage18-math.ts';
import {stage18Physics} from './authored-stage18-physics.ts';
import {stage18Chemistry} from './authored-stage18-chemistry.ts';
import {stage18Biology} from './authored-stage18-biology.ts';
import {stage18History} from './authored-stage18-history.ts';
import {stage18Geography} from './authored-stage18-geography.ts';
import {stage18Portuguese} from './authored-stage18-portuguese.ts';
import {stage18Literature} from './authored-stage18-literature.ts';
import {stage18Writing} from './authored-stage18-writing.ts';
import {stage18English} from './authored-stage18-english.ts';
import {stage18Spanish} from './authored-stage18-spanish.ts';
import {stage18Philosophy} from './authored-stage18-philosophy.ts';
import {stage18Sociology} from './authored-stage18-sociology.ts';
import {stage18Art} from './authored-stage18-art.ts';
import {stage18PE} from './authored-stage18-pe.ts';
import {stage18Science} from './authored-stage18-science.ts';

const specs:readonly LessonBlueprint[]=[
 ...stage18Math,
 ...stage18Physics,
 ...stage18Chemistry,
 ...stage18Biology,
 ...stage18History,
 ...stage18Geography,
 ...stage18Portuguese,
 ...stage18Literature,
 ...stage18Writing,
 ...stage18English,
 ...stage18Spanish,
 ...stage18Philosophy,
 ...stage18Sociology,
 ...stage18Art,
 ...stage18PE,
 ...stage18Science,
];
const byKey=new Map(specs.map(x=>[x.subject+'\0'+x.topic,x]));
export const stage18Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage18EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage18Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
