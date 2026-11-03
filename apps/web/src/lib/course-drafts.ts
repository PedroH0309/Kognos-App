import type {CourseLesson,CourseQuestion,CourseLevel} from './course-content.ts';
import type {CurriculumTopic} from './curriculum-catalog.ts';
import {findLearningLesson} from './learning-catalog.ts';
import {officialSyllabusSources} from './exam-syllabus.ts';
import {videosForTopic} from './course-videos.ts';
export function newCourseDraft(topic:CurriculumTopic):CourseLesson{
 const intro=topic.legacyLessonId?findLearningLesson(topic.legacyLessonId):null;
 return {kind:'lesson',...topic,objective:intro?.objective||'',prerequisites:[],sections:(['basic','intermediate','advanced'] as CourseLevel[]).map((level,i)=>({level,title:['Fundamentos','Aplicação','Aprofundamento'][i],explanation:i===0?intro?.explanation||'':'',steps:[],example:i===0?intro?.workedExample||'':'',pitfall:i===0?intro?.commonMistake||'':''})),tasks:(['basic','intermediate','advanced'] as CourseLevel[]).map(level=>({level,prompt:'',hint:'',solution:''})),videos:videosForTopic(topic.subject,topic.topic),authorship:'Kognos — conteúdo editorial',license:'Conteúdo autoral Kognos; uso educacional na plataforma',sourceUrls:[...new Set(topic.exams.map(e=>officialSyllabusSources[e].url))],review:'editor'};
}
export function newQuestionDraft(courseId:string,id:string):CourseQuestion{return {kind:'question',id,courseId,prompt:'',options:['','','',''],correctIndex:0,explanation:'',authorship:'Kognos — questão autoral',license:'Conteúdo autoral Kognos; uso educacional na plataforma',sourceUrls:[]};}
