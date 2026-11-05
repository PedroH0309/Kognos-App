/** Stage 19: 92 static courses; all three chapters, questions, corrections
 * and everyday cases are individually written per topic. No lecture-time AI calls.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {renderAuthoredBlueprint,renderAuthoredSituation,type LessonBlueprint} from './authored-lesson-blueprint.ts';
import {expandTopicSeed} from './authored-stage19-seed.ts';
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
import {stage19Extras} from './authored-stage19-extras.ts';

const specs:readonly LessonBlueprint[]=[
 ...stage19Math.map(expandTopicSeed),
 ...stage19Physics.map(expandTopicSeed),
 ...stage19Chemistry.map(expandTopicSeed),
 ...stage19Biology.map(expandTopicSeed),
 ...stage19History.map(expandTopicSeed),
 ...stage19Geography.map(expandTopicSeed),
 ...stage19Portuguese.map(expandTopicSeed),
 ...stage19Literature.map(expandTopicSeed),
 ...stage19Writing.map(expandTopicSeed),
 ...stage19English.map(expandTopicSeed),
 ...stage19Spanish.map(expandTopicSeed),
 ...stage19Philosophy.map(expandTopicSeed),
 ...stage19Sociology.map(expandTopicSeed),
 ...stage19Art.map(expandTopicSeed),
 ...stage19PE.map(expandTopicSeed),
 ...stage19Science.map(expandTopicSeed),
 ...stage19Extras.map(expandTopicSeed),
];
const byKey=new Map(specs.map(x=>[x.subject+'\0'+x.topic,x]));
export const stage19Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage19EverydayContexts:readonly EverydayContext[]=specs.map(renderAuthoredSituation);
export function stage19Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=byKey.get(topic.subject+'\0'+topic.topic);
 return data?renderAuthoredBlueprint(topic,data):null;
}
