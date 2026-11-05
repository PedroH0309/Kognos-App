/** Etapa 19 — 64 aulas redigidas diretamente para o currículo.
 * Estrutura de leitura e prática compartilhada; sem geração por IA durante estudo.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandAuthoredLesson,type AuthoredLessonSeed} from './authored-lesson-recipe.ts';
import {stage19Math} from './authored-stage19-math.ts';
import {stage19Physics} from './authored-stage19-physics.ts';
import {stage19Chemistry} from './authored-stage19-chemistry.ts';
import {stage19Biology} from './authored-stage19-biology.ts';
import {stage19History} from './authored-stage19-history.ts';
import {stage19Geography} from './authored-stage19-geography.ts';
import {stage19Portuguese} from './authored-stage19-portuguese.ts';
import {stage19Literature} from './authored-stage19-literature.ts';
import {stage19Writing} from './authored-stage19-writing.ts';
import {stage19English} from './authored-stage19-english.ts';
import {stage19Spanish} from './authored-stage19-spanish.ts';
import {stage19Philosophy} from './authored-stage19-philosophy.ts';
import {stage19Sociology} from './authored-stage19-sociology.ts';
import {stage19Art} from './authored-stage19-art.ts';
import {stage19PE} from './authored-stage19-pe.ts';
import {stage19Science} from './authored-stage19-science.ts';

const seeds:readonly AuthoredLessonSeed[]=[
 ...stage19Math,
 ...stage19Physics,
 ...stage19Chemistry,
 ...stage19Biology,
 ...stage19History,
 ...stage19Geography,
 ...stage19Portuguese,
 ...stage19Literature,
 ...stage19Writing,
 ...stage19English,
 ...stage19Spanish,
 ...stage19Philosophy,
 ...stage19Sociology,
 ...stage19Art,
 ...stage19PE,
 ...stage19Science,
];
const specs:readonly LessonBlueprint[]=seeds.map(expandAuthoredLesson);
const byKey=new Map(specs.map(x=>[x.subject+'\0'+x.topic,x]));
export const stage19Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage19EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage19Lesson(topic:CurriculumTopic):CourseLesson|null{
 const spec=byKey.get(topic.subject+'\0'+topic.topic);
 return spec?renderAuthoredBlueprint(topic,spec):null;
}
