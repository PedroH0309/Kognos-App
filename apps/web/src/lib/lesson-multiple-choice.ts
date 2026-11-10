import type {CourseLesson,CourseTask} from './course-content.ts';
import type {LearningLesson} from './learning-catalog.ts';
import {questionForLesson} from './learning-catalog.ts';

/** Only questions with an authored, explicit key may be scored as formative MCQs.
 * Previous 'resolution_matching' combined arbitrary excerpts from unrelated lessons,
 * including physics distractors in thermodynamics, and fabricated an answer key.
 * Never silently reconstruct distractors or infer an answer from prose.
 */
export type LessonChoice={
 prompt:string;
 instruction:string;
 options:[string,string,string,string];
 correctIndex:number;
 explanation:string;
 hint?:string;
 source:'editorial'|'demo'|'unavailable';
};

const unavailable=(lesson:CourseLesson):LessonChoice=>({
 prompt:'',
 instruction:'',
 // Required by the existing consumer contract, but NEVER rendered or scored.
 options:['','','',''],
 correctIndex:-1,
 explanation:'',
 source:'unavailable'
});

function validOptions(options:unknown,correctIndex:unknown):options is [string,string,string,string]{
 return Array.isArray(options)&&options.length===4
  &&options.every(option=>typeof option==='string'&&option.trim().length>0)
  &&new Set(options.map(option=>option.trim().toLocaleLowerCase('pt-BR'))).size===4
  &&typeof correctIndex==='number'&&Number.isInteger(correctIndex)
  &&correctIndex>=0&&correctIndex<4;
}

export function lessonTaskChoice(lesson:CourseLesson,task:CourseTask):LessonChoice{
 if(validOptions(task.options,task.correctIndex)
  &&task.prompt.trim().length>=15&&task.solution.trim().length>=20){
  return {
   prompt:task.prompt,instruction:'Selecione a alternativa correta.',
   options:task.options,correctIndex:task.correctIndex as number,
   explanation:task.solution,hint:task.hint,source:'editorial'
  };
 }
 return unavailable(lesson);
}

export function introductoryChoice(lesson:LearningLesson):LessonChoice|null{
 const question=questionForLesson(lesson);
 if(question&&validOptions(question.options,question.correct)
  &&question.prompt.trim().length>=15&&question.explanation.trim().length>=20){
  return {
   prompt:question.prompt,instruction:'Selecione a alternativa correta.',
   options:question.options,correctIndex:question.correct,
   explanation:question.explanation,source:'demo'
  };
 }
 // No unrelated example-matching distractors in introductory lessons.
 return null;
}
