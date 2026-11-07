/** Etapa 22 — 56 aulas inéditas escritas por tema com três capítulos conceituais,
 * resoluções, análise de hipóteses e um caso cotidiano. Sem chamadas IA em runtime.
 * A publicação pedagógica ainda depende de revisão humana.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage22Math} from './authored-stage22-math.ts';
import {stage22Physics} from './authored-stage22-physics.ts';
import {stage22Chemistry} from './authored-stage22-chemistry.ts';
import {stage22Biology} from './authored-stage22-biology.ts';
import {stage22History} from './authored-stage22-history.ts';
import {stage22Geography} from './authored-stage22-geography.ts';
import {stage22Portuguese} from './authored-stage22-portuguese.ts';
import {stage22Literature} from './authored-stage22-literature.ts';
import {stage22EarthLife} from './authored-stage22-earth-life.ts';
import {stage22SpaceTech} from './authored-stage22-space-tech.ts';
import {stage22ArtScience} from './authored-stage22-art-science.ts';
import {stage22LanguagesWriting} from './authored-stage22-languages-writing.ts';

export const stage22Seeds=[...stage22Math,...stage22Physics,...stage22Chemistry,...stage22Biology,...stage22History,...stage22Geography,...stage22Portuguese,...stage22Literature,...stage22ArtScience,...stage22LanguagesWriting,...stage22EarthLife,...stage22SpaceTech];
const specs:readonly LessonBlueprint[]=stage22Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage22Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage22EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage22Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
