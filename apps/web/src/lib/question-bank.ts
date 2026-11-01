import {demoQuestions,type DemoQuestion} from './demo-questions.ts';

export interface QuestionFilters {subject:string;topic:string;difficulty:string;search:string}
export function filterDemoQuestions(filters:QuestionFilters,questions:readonly DemoQuestion[]=demoQuestions):DemoQuestion[] {
 const term=filters.search.trim().toLocaleLowerCase('pt-BR');
 return questions.filter(q=>(filters.subject==='Todas'||q.subject===filters.subject)
   && (filters.topic==='Todos'||q.topic===filters.topic)
   && (filters.difficulty==='Todas'||q.difficulty===filters.difficulty)
   && (!term||`${q.subject} ${q.topic} ${q.prompt}`.toLocaleLowerCase('pt-BR').includes(term)));
}
export function demoTopics(subject:string,questions:readonly DemoQuestion[]=demoQuestions):string[]{
 return ['Todos',...new Set(questions.filter(q=>subject==='Todas'||q.subject===subject).map(q=>q.topic))];
}