import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

/**
 * Regression: each assessed chapter needs its own question, four independent
 * alternatives and an explicit editorial answer. This does not certify the
 * scientific accuracy of a key; a subject specialist must still review it.
 */
test('every offline deep Provão assessment is explicitly authored, without matching fallbacks',()=>{
 let checked=0;
 const invalid:string[]=[];
 for(const topic of curriculumTopics.filter(item=>item.exams.includes('saresp'))){
  const lesson=deepProvaoLesson(topic);
  if(!lesson)continue;
  const prompts=new Set<string>();
  const optionSets=new Set<string>();
  for(const task of lesson.tasks){
   const choice=lessonTaskChoice(lesson,task);
   const label=topic.subject+' / '+topic.topic+' / '+task.level;
   if(choice.source!=='editorial'){invalid.push(label+': no editorial choice');continue;}
   const prompt=choice.prompt.trim().toLocaleLowerCase('pt-BR');
   if(prompts.has(prompt))invalid.push(label+': repeated question');
   prompts.add(prompt);
   if(!Number.isInteger(choice.correctIndex)||choice.correctIndex<0||choice.correctIndex>3)
    invalid.push(label+': invalid answer index');
   if(choice.options.length!==4||new Set(choice.options.map(s=>s.trim().toLocaleLowerCase('pt-BR'))).size!==4)
    invalid.push(label+': repeated or missing alternatives');
   const signature=choice.options.map(s=>s.trim().toLocaleLowerCase('pt-BR')).sort().join('\u0000');
   if(optionSets.has(signature))invalid.push(label+': reused complete alternative set');
   optionSets.add(signature);
   if(choice.explanation.trim().length<20)invalid.push(label+': missing worked correction');
   if(/resolution_matching|example_matching/i.test(choice.instruction))
    invalid.push(label+': prohibited synthetic fallback');
   checked++;
  }
 }
 assert.ok(checked>0,'No offline authored assessments found');
 assert.deepEqual(invalid,[],'Invalid authored assessments:\n'+invalid.join('\n'));
});
