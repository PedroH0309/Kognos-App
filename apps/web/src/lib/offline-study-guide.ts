import {findLearningLesson,introductoryLessons,type LearningLesson} from './learning-catalog.ts';

export type LocalStudyContext={kind:string;lessonId?:string;phase?:string}|null;
export type OfflineGuide={content:string;topic:string};
function normalize(value:string){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();}
const pitagoras:OfflineGuide={topic:'Teorema de Pitágoras',content:`Guia do Kognos — biblioteca local (sem IA)\n\nTeorema de Pitágoras: em um triângulo retângulo, o quadrado da hipotenusa (lado oposto ao ângulo de 90°) é igual à soma dos quadrados dos catetos: a² + b² = c².\n\nExemplo resolvido: catetos de 3 cm e 4 cm. Então c² = 3² + 4² = 9 + 16 = 25; logo, c = 5 cm.\n\nErro comum: aplicar a fórmula a um triângulo que não é retângulo, ou confundir hipotenusa com cateto.\n\nAgora tente: catetos de 5 cm e 12 cm. Qual é a hipotenusa? Mostre seu cálculo.\n\nEste é um conteúdo preparado previamente, não uma resposta gerada por IA.`};
function fromLesson(lesson:LearningLesson):OfflineGuide {
 return {topic:lesson.topic,content:`Guia do Kognos — biblioteca local (sem IA)\n\n${lesson.subject} · ${lesson.topic}\n\n${lesson.explanation}\n\nExemplo: ${lesson.workedExample}\n\nCuidado: ${lesson.commonMistake}\n\nPara praticar: ${lesson.check}\n\nMaterial autoral introdutório; para uma conversa livre, é necessário configurar a NVIDIA.`};
}

/** Deterministic pre-authored help only; no fabricated open-ended AI response. */
export function localStudyGuide(message:string,context:LocalStudyContext=null):OfflineGuide|null {
 if(!message||message.length>3000)return null;
 // Never leak a worked example or answer while a specific graded item is being solved.
 if((context?.kind==='question'||context?.kind==='generated_question')&&context.phase==='solving')return null;
 const value=normalize(message);
 if(!value)return null;
 if(/\b(pitagor|pythagor)/.test(value))return pitagoras;
 const focused=context?.kind==='lesson'&&context.lessonId?findLearningLesson(context.lessonId):null;
 if(focused && !focused.curriculumId && /\b(expli|entend|exempl|revis|resum|ajud|duvid|aula|estud)/.test(value))return fromLesson(focused);
 const topics=introductoryLessons.filter(l=>{
  const topic=normalize(l.topic);
  return topic.length>=6 && new RegExp(`\\b${topic.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`).test(value);
 });
 if(topics.length===1)return fromLesson(topics[0]);
 if(topics.length>1)return null;
 // A question may refer to one distinctive term (e.g., "fotossíntese"),
 // not the entire official topic title. Only return an authored guide when
 // exactly one catalog item matches the term; never guess among ties.
 const words=new Set(value.split(' ').filter(word=>word.length>=6));
 const matches=introductoryLessons.filter(lesson=>
  normalize(lesson.topic).split(' ').some(word=>word.length>=6&&words.has(word))
 );
 return matches.length===1?fromLesson(matches[0]):null;
}
