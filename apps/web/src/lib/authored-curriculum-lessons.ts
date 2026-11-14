import {authoredCurriculumBatch03} from './authored-curriculum-batch03.ts';
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import {courseId} from './curriculum-id.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

export const authoredCurriculumSpecs=authoredCurriculumBatch03;
const specs=new Map(authoredCurriculumSpecs.map(spec=>[JSON.stringify([spec.subject,spec.topic]),spec]));

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
  sourceUrls:[...new Set(exams.map(exam=>examBlueprints[exam].sourceUrl).filter(url=>url.startsWith('https://')))],
  review:'introductory',syllabusScope:'Escopo editorial Kognos: '+spec.topic+'. Referências institucionais orientam o roteiro; textos e questões são autorais, sem certificação de equivalência oficial.'
 };
}
