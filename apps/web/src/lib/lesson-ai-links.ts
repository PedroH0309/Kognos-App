import {isProvaoTopic,type ProvaoGrade} from './provao-paulista.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {findLearningLesson,learningLessons} from './learning-catalog.ts';

/** Explicit editorial bridges. These are NOT a claim that the institution endorses the lesson. */
const introductoryExamTopics: Readonly<Record<string,Partial<Record<ExamId,string>>>> = {
 'math-percentages':{enem:'Porcentagem e razão',etec:'Porcentagem e proporções'},
 'math-equations':{etec:'Equações e problemas'},
 'math-functions':{enem:'Funções e gráficos',fuvest:'Funções e modelagem'},
 'math-probability':{enem:'Probabilidade e estatística',fuvest:'Probabilidade e combinatória'},
 'pt-grammar':{etec:'Classes gramaticais'},
 'pt-reading':{enem:'Interpretação de textos',etec:'Interpretação de textos'},
 'pt-agreement':{etec:'Concordância'},
 'physics-motion':{etec:'Movimento e unidades'},
 'physics-forces':{enem:'Movimento e forças',etec:'Força e energia'},
 'physics-energy':{enem:'Trabalho e energia',fuvest:'Energia e termodinâmica'},
 'chem-atoms':{enem:'Estrutura atômica',etec:'Estrutura da matéria'},
 'chem-bonds':{enem:'Ligações químicas',fuvest:'Ligações e reações'},
 'chem-solutions':{enem:'Soluções e concentração'},
 'bio-cells':{enem:'Citologia',etec:'Célula e saúde'},
 'bio-genetics':{enem:'Genética e hereditariedade',fuvest:'Genética'},
 'bio-ecology':{enem:'Ecologia e impactos ambientais',etec:'Ecologia',fuvest:'Ecologia'},
 'hist-colony':{enem:'Brasil colonial'},
 'hist-industry':{enem:'Industrialização e trabalho',etec:'Industrialização'},
 'geo-maps':{enem:'Cartografia',etec:'Mapas e escalas'},
 'geo-climate':{enem:'Clima e ambiente',fuvest:'Climatologia'},
};

// Exact editorial topic matches only: never infer cross-subject or fuzzy links.
const expandedExamTopics: Record<string,Partial<Record<ExamId,string>>> = {};
for(const lesson of learningLessons){
 const links:Partial<Record<ExamId,string>>={};
 for(const institution of Object.keys(examBlueprints) as ExamId[]){
  if(examBlueprints[institution].subjects[lesson.subject]?.includes(lesson.topic))links[institution]=lesson.topic;
 }
 expandedExamTopics[lesson.id]={...links,...introductoryExamTopics[lesson.id]};
}
const fundamentalBridges:Record<string,string>={
 'math-ratios':'Razões, proporções e regra de três',
 'math-geometry':'Semelhança e teorema de Pitágoras',
 'math-statistics':'Estatística, gráficos e tabelas',
 'pt-cohesion':'Coesão e coerência',
 'pt-language':'Variação linguística',
 'pt-figures':'Figuras de linguagem e sentidos do texto',
 'pt-syntax':'Sintaxe, concordância e regência',
};
for(const [id,topic] of Object.entries(fundamentalBridges)){
 expandedExamTopics[id]={...expandedExamTopics[id],etec:topic,saresp:topic};
}
export const lessonExamTopics:Readonly<Record<string,Partial<Record<ExamId,string>>>>=expandedExamTopics;

export function linkedExamTopic(lessonId:string,institution:ExamId):string|null {
 const lesson=findLearningLesson(lessonId);
 const topic=lessonExamTopics[lessonId]?.[institution];
 return lesson&&topic&&examBlueprints[institution]?.subjects[lesson.subject]?.includes(topic)?topic:null;
}

/** The server must verify this before associating a generated question with a lesson. */
export function validLessonAIReference(lessonId:string,institution:ExamId,subject:string,topic:string):boolean{
 const lesson=findLearningLesson(lessonId);
 return Boolean(lesson&&lesson.subject===subject&&linkedExamTopic(lessonId,institution)===topic);
}

/** Legacy bank rows without lesson_id: conservative matches only. A broad exam topic is NOT proof that
 *  an old generated question belongs to a narrower lesson (e.g. Movimento e forças != Cinemática). */
export function inferLegacyLessonId(institution:ExamId,subject:string,topic:string):string|null {
 const normalize=(v:string)=>v.normalize('NFKD').replace(/\p{M}/gu,'').toLocaleLowerCase('pt-BR').trim();
 const matching=learningLessons.filter(lesson=>!lesson.curriculumId&&lesson.subject===subject&&
  normalize(lesson.topic)===normalize(topic)&&linkedExamTopic(lesson.id,institution)===topic);
 return matching.length===1?matching[0].id:null;
}

/** Returns a verified generation preset; prefer ENEM when a lesson has a documented editorial bridge. */
export function lessonGenerationPreset(lessonId:string,preferred?:ExamId){
 const lesson=findLearningLesson(lessonId);
 if(!lesson)return null;
 const institutions:ExamId[]=preferred?[preferred,'enem','etec','fuvest','vunesp','saresp']:['enem','etec','fuvest','vunesp','saresp'];
 for(const institution of institutions){const topic=linkedExamTopic(lessonId,institution);if(topic)return {lessonId:lesson.id,institution,subject:lesson.subject,topic};}
 return null;
}
/** Ten graded questions per lesson. The API accepts up to five per request,
 * so generate sequentially to protect free-provider quotas.
 * Order: 3 basic, 4 intermediate, 3 advanced.
 */
export const LESSON_PRACTICE_STEPS=[
 {difficulty:'basic',count:3},
 {difficulty:'intermediate',count:4},
 {difficulty:'advanced',count:3}
] as const;

export function lessonPracticeGenerationRequest(lessonId:string,run:number){
 const preset=lessonGenerationPreset(lessonId);
 if(!preset||!Number.isSafeInteger(run)||run<1)return null;
 return {...preset,variation:(run-1)%12};
}


/** Shared exam scope for the subject dashboard and learning trails. */
export function learningCatalogForExam(exam:ExamId|null,grade:ProvaoGrade|null=null){
 return exam?learningLessons.filter(lesson=>Boolean(linkedExamTopic(lesson.id,exam))&&(exam!=='saresp'||isProvaoTopic(lesson.subject,lesson.topic,grade))):[...learningLessons];
}

