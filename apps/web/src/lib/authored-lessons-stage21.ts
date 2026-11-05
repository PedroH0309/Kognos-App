/** Etapa 21 — 64 lições de conteúdo estático escrito por tópico, não por IA durante leitura.
 * O modelo compartilha somente organização didática. Revisão docente pendente.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
import {stage21Math} from './authored-stage21-math.ts';
import {stage21Physics} from './authored-stage21-physics.ts';
import {stage21Chemistry} from './authored-stage21-chemistry.ts';
import {stage21Biology} from './authored-stage21-biology.ts';
import {stage21History} from './authored-stage21-history.ts';
import {stage21Geography} from './authored-stage21-geography.ts';
import {stage21Portuguese} from './authored-stage21-portuguese.ts';
import {stage21Literature} from './authored-stage21-literature.ts';
import {stage21Writing} from './authored-stage21-writing.ts';
import {stage21Languages} from './authored-stage21-languages.ts';
import {stage21Society} from './authored-stage21-society.ts';
import {stage21ArtScience} from './authored-stage21-art-science.ts';

export const stage21Seeds=[...stage21Math,...stage21Physics,...stage21Chemistry,...stage21Biology,...stage21History,...stage21Geography,...stage21Portuguese,...stage21Literature,...stage21Writing,...stage21Languages,...stage21Society,...stage21ArtScience];
const specs:readonly LessonBlueprint[]=stage21Seeds.map(expandTopicSeed);
const byKey=new Map(specs.map(item=>[item.subject+'\0'+item.topic,item]));
export const stage21Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage21EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage21Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
