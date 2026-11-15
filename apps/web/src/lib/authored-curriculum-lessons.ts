import {authoredCurriculumBatch14,authoredCurriculumBatch14ReviewRecords} from './authored-curriculum-batch14.ts';
import {authoredCurriculumBatch13,authoredCurriculumBatch13ReviewRecords} from './authored-curriculum-batch13.ts';
import {authoredCurriculumBatch12,authoredCurriculumBatch12ReviewRecords} from './authored-curriculum-batch12.ts';
import {authoredCurriculumBatch03,authoredCurriculumReviewRecords as batch03Reviews} from './authored-curriculum-batch03.ts';
import {authoredCurriculumBatch04,authoredCurriculumBatch04ReviewRecords} from './authored-curriculum-batch04.ts';
import {authoredCurriculumBatch05,authoredCurriculumBatch05ReviewRecords} from './authored-curriculum-batch05.ts';
import {authoredCurriculumBatch06,authoredCurriculumBatch06ReviewRecords} from './authored-curriculum-batch06.ts';
import {authoredCurriculumBatch07,authoredCurriculumBatch07ReviewRecords} from './authored-curriculum-batch07.ts';
import {authoredCurriculumBatch08,authoredCurriculumBatch08ReviewRecords} from './authored-curriculum-batch08.ts';
import {authoredCurriculumBatch09,authoredCurriculumBatch09ReviewRecords} from './authored-curriculum-batch09.ts';
import {authoredCurriculumBatch10,authoredCurriculumBatch10ReviewRecords} from './authored-curriculum-batch10.ts';
import {authoredCurriculumBatch11,authoredCurriculumBatch11ReviewRecords} from './authored-curriculum-batch11.ts';
import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import {courseId} from './curriculum-id.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

export const authoredCurriculumSpecs:readonly AuthoredLessonSpec[]=[...authoredCurriculumBatch03,...authoredCurriculumBatch04,...authoredCurriculumBatch05,...authoredCurriculumBatch06,...authoredCurriculumBatch07,...authoredCurriculumBatch08,...authoredCurriculumBatch09,...authoredCurriculumBatch10,...authoredCurriculumBatch11,...authoredCurriculumBatch12,...authoredCurriculumBatch13,...authoredCurriculumBatch14];
export const authoredCurriculumReviewRecords=[...batch03Reviews,...authoredCurriculumBatch04ReviewRecords,...authoredCurriculumBatch05ReviewRecords,...authoredCurriculumBatch06ReviewRecords,...authoredCurriculumBatch07ReviewRecords,...authoredCurriculumBatch08ReviewRecords,...authoredCurriculumBatch09ReviewRecords,...authoredCurriculumBatch10ReviewRecords,...authoredCurriculumBatch11ReviewRecords,...authoredCurriculumBatch12ReviewRecords,...authoredCurriculumBatch13ReviewRecords,...authoredCurriculumBatch14ReviewRecords] as const;
const specs=new Map(authoredCurriculumSpecs.map(spec=>[JSON.stringify([spec.subject,spec.topic]),spec]));
const references=new Map(authoredCurriculumReviewRecords.map(record=>[JSON.stringify([record.subject,record.topic]),record.verifiedSourceUrls]));

/** Literal scope only. This is preparatory content, with human review pending. */
export function deepAuthoredCurriculumLesson(topic:CurriculumTopic):CourseLesson|null{
 const spec=specs.get(JSON.stringify([topic.subject,topic.topic]));
 if(!spec||topic.id!==courseId(spec.subject,spec.topic))return null;
 const exams=(Object.keys(examBlueprints) as ExamId[]).filter(exam=>examBlueprints[exam].subjects[spec.subject]?.includes(spec.topic));
 if(!exams.length)return null;
 return {
  kind:'lesson',id:topic.id,subject:spec.subject,topic:spec.topic,exams,
  objective:spec.objective,prerequisites:[...spec.prerequisites],sections:spec.sections,tasks:spec.tasks,videos:[],
  authorship:'Kognos — aula autoral de conteúdo original com assistência de IA; revisão pedagógica humana pendente; sem homologação docente',
  license:'Material preparatório autoral do Kognos; não oficial das provas nem homologado pelas instituições organizadoras',
  sourceUrls:[...new Set([
   ...exams.map(exam=>examBlueprints[exam].sourceUrl),
   ...(references.get(JSON.stringify([spec.subject,spec.topic]))??[])
  ].filter(url=>url.startsWith('https://')))],
  review:'introductory',syllabusScope:'Escopo editorial Kognos: '+spec.topic+'. Referências institucionais orientam o roteiro; textos e questões são autorais, sem certificação de equivalência oficial.'
 };
}
