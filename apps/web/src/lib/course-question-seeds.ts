import {learningLessons,questionForLesson} from './learning-catalog.ts';
import {topicForLegacyLesson} from './curriculum-catalog.ts';
import type {CourseQuestion} from './course-content.ts';
/** Editable copies of the original practice bank. Published editorial copies
 * have separate IDs so prior demo answers and private AI banks stay intact. */
export const editorialQuestionSeeds:CourseQuestion[]=learningLessons.flatMap(lesson=>{
 const topic=topicForLegacyLesson(lesson.id),q=questionForLesson(lesson);
 if(!topic||!q)return [];
 return [{kind:'question',id:`editorial-${q.id}`,courseId:topic.id,prompt:q.prompt,options:[...q.options],correctIndex:q.correct,explanation:q.explanation,authorship:'Kognos — acervo autoral inicial',license:'Conteúdo autoral Kognos; uso educacional na plataforma',sourceUrls:[]}];
});
