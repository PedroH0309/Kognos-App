'use client';
import {useState} from 'react';
import {BookOpenText,CheckSquare,Lightbulb,ChevronDown,ArrowRight} from 'lucide-react';
import {levels,type CourseLesson} from '@/lib/course-content';
import type {LearningLesson} from '@/lib/learning-catalog';
import {studyMethodForSubject} from '@/lib/study-exploration';
import {everydayContextFor} from '@/lib/everyday-lesson-contexts';
import {courseId} from '@/lib/curriculum-id';

export type LessonPane='content'|'activities'|'explanations';
export const lessonPanes:{id:LessonPane;label:string;description:string}[]=[
 {id:'content',label:'Aula em texto',description:'Teoria organizada para leitura'},
 {id:'activities',label:'Atividades',description:'Aplicação e exercícios'},
 {id:'explanations',label:'Explicações',description:'Exemplos e resoluções'}
];
const sectionNumber=(index:number)=>String(index+1).padStart(2,'0');
function TextBlocks({value}:{value:string}){
 return <div className="k-lesson-text-block">{value.split(/\n\s*\n/).filter(Boolean).map((text,i)=><p key={i}>{text.trim()}</p>)}</div>;
}
/** Reading-first layout for individually selected curricular lessons.
 * Does not fabricate missing educational content or auto-grade free text.
 */
export default function TopicLessonSections({view,subject,topic,lesson,introduction,onTutor,onActivityProgress,onRelatedTopic}:{
 view:LessonPane;subject:string;topic:string;
 lesson?:CourseLesson|null;introduction?:LearningLesson|null;onTutor?:()=>void;
 onRelatedTopic?:(topicId:string)=>void;
 onActivityProgress?:(allAnswered:boolean)=>void;
}){
 const [drafts,setDrafts]=useState<Record<string,string>>({});
 const [hints,setHints]=useState<Record<string,boolean>>({});
 const [steps,setSteps]=useState<Record<string,boolean>>({});
 const [solutions,setSolutions]=useState<Record<string,boolean>>({});
 const method=studyMethodForSubject(subject);
 const authored=Boolean(lesson||introduction);
 const individuallyAuthored=Boolean(lesson?.authorship.includes('aula autoral'));
 const situation=everydayContextFor(lesson);

 const status=lesson?(lesson.review==='introductory'?(individuallyAuthored?'AULA AUTORAL APROFUNDADA · REVISÃO DOCENTE PENDENTE':'AULA-BASE PRÉ-CARREGADA · REVISÃO DOCENTE PENDENTE'):'AULA DESENVOLVIDA'):introduction?'INTRODUÇÃO AUTORAL':'TEMA DO ROTEIRO · SEM AULA EDITORIAL';
 const idFor=(a:string,b:number)=>a+'-'+b;
 const exerciseIds=lesson?lesson.sections.flatMap(section=>lesson.tasks.filter(t=>t.level===section.level)
  .map((_,i)=>idFor(section.level,i))):introduction?['intro']:[];
 const answered=exerciseIds.filter(id=>Boolean(drafts[id]?.trim())).length;
 function updateDraft(id:string,value:string){
  const next={...drafts,[id]:value};setDrafts(next);
  onActivityProgress?.(exerciseIds.length>0&&exerciseIds.every(key=>Boolean(next[key]?.trim())));
 }
 return <section className="k-lesson-reading-room" aria-label={lessonPanes.find(p=>p.id===view)?.label+' de '+topic}>
  <header className="k-lesson-reading-intro">
   <span className="overline">{status}</span>
   <h3>{view==='content'?'Estude o conteúdo':view==='activities'?'Coloque em prática':'Entenda o raciocínio'}</h3>
   <p>{view==='content'?'Leia a explicação no seu ritmo, sem interromper o texto com controles de simulação.':
    view==='activities'?'Resolva os desafios autorais deste assunto. Respostas livres não são corrigidas automaticamente.':
    'Confira exemplos, resoluções passo a passo e os erros mais comuns do conteúdo.'}</p>
  </header>
  {!authored&&<div className="k-lesson-unavailable" role="status">
   <BookOpenText size={20} aria-hidden="true"/>
   <div><strong>Este tema ainda não possui uma aula escrita e revisada no catálogo.</strong>
    <p>O título do roteiro não é uma aula completa. Enquanto o conteúdo é desenvolvido, você pode consultar o edital, estudar com o Kog ou acessar os simuladores no Kognos Lab. Não apresentamos textos gerados automaticamente como se fossem uma aula validada.</p>
   </div>
  </div>}
  {view==='content'&&<>
   {lesson&&<>
    {situation&&<section className="k-lesson-everyday-problem" aria-label="Problema do cotidiano">
     <span className="k-lesson-everyday-label">COMECE PELO COTIDIANO</span>
     <h4>O que você faria nesta situação?</h4>
     <p>{situation.context}</p>
     <p className="k-lesson-everyday-question"><strong>Desafio:</strong> {situation.question}</p>
     <small>Exemplo didático contextualizado; dados e personagens podem ser hipotéticos. A resolução comentada está em Explicações.</small>
    </section>}
    <div className="k-lesson-objective"><strong>Objetivo de aprendizagem</strong><p>{lesson.objective}</p></div>
    {lesson.sections.map((section,i)=><article className="k-lesson-chapter" key={section.level}>
     <div className="k-lesson-chapter-heading"><span>{sectionNumber(i)}</span><div><small>{levels[section.level]}</small><h4>{section.title}</h4></div></div>
     <TextBlocks value={section.explanation}/>
    </article>)}
    {situation&&<section className="k-lesson-topic-connections" aria-label="Conexões entre aulas">
     <span className="k-lesson-everyday-label">AMPLIE SEU REPERTÓRIO</span>
     <h4>Como este assunto se conecta a outros?</h4>
     <p>As relações abaixo ajudam a aplicar o que você aprendeu em outra matéria ou tema.</p>
     <div className="k-lesson-connections-list">
      {situation.connections.map(connection=>{
       const id=courseId(connection.subject,connection.topic);
       const details=<><small>{connection.subject}</small><strong>{connection.topic}</strong><span>{connection.reason}</span></>;
       return onRelatedTopic?
        <button type="button" key={id} onClick={()=>onRelatedTopic(id)} aria-label={'Abrir conteúdo relacionado: '+connection.subject+' — '+connection.topic}>{details}<ArrowRight size={17} aria-hidden="true"/></button>:
        <div className="k-lesson-connection-readonly" key={id}>{details}</div>;
      })}
     </div>
    </section>}
    <p className="k-lesson-source">{lesson.review==='introductory'?individuallyAuthored?'Conteúdo específico com teoria, exemplos e exercícios originais, ainda sem revisão docente.':'Material inicial, montado com modelos didáticos e orientações curriculares; não representa aula integral revisada por professor.':lesson.review==='ai_reviewed'?'Material revisado automaticamente por IA, sem homologação docente.':'Material editorial.'} Autoria: {lesson.authorship}.</p>
   </>}
   {!lesson&&introduction&&<>
    <div className="k-lesson-objective"><strong>Objetivo da introdução</strong><p>{introduction.objective}</p></div>
    <article className="k-lesson-chapter"><div className="k-lesson-chapter-heading"><span>01</span><div><small>INTRODUÇÃO</small><h4>Fundamentos de {topic}</h4></div></div>
     <TextBlocks value={introduction.explanation}/></article>
    <p className="k-lesson-source">Esta é uma introdução, não uma aula completa de todos os subtemas.</p>
   </>}
  </>}
  {view==='activities'&&<>
   {exerciseIds.length>0&&<p className="k-lesson-answer-count" role="status">Respostas preenchidas: {answered} de {exerciseIds.length}. A conclusão indica apenas campos preenchidos, não correção.</p>}
   {lesson&&lesson.sections.map((section,i)=>{
    const tasks=lesson.tasks.filter(task=>task.level===section.level);
    return <article className="k-lesson-chapter" key={section.level}>
     <div className="k-lesson-chapter-heading"><span>{sectionNumber(i)}</span><div><small>{levels[section.level]}</small><h4>Atividades de {section.title}</h4></div></div>
     {tasks.map((task,j)=>{
      const id=idFor(section.level,j);
      return <div className="k-lesson-exercise" key={id}>
       <span className="k-lesson-exercise-number"><CheckSquare size={16}/> EXERCÍCIO {j+1}</span>
       <p className="k-lesson-question">{task.prompt}</p>
       <label>Sua resolução ou interpretação
        <textarea rows={4} value={drafts[id]??''} onChange={e=>updateDraft(id,e.target.value)}
         placeholder="Desenvolva a resposta com suas palavras. Este rascunho fica somente na tela."/>
       </label>
       <button type="button" aria-expanded={Boolean(hints[id])} onClick={()=>setHints(prev=>({...prev,[id]:!prev[id]}))}>
        <Lightbulb size={15}/> {hints[id]?'Ocultar pista':'Mostrar pista'}
       </button>
       {hints[id]&&<div className="k-lesson-hint"><strong>Pista editorial</strong><p>{task.hint}</p></div>}
       <p className="k-lesson-exercise-help">A resolução comentada está na aba Explicações.</p>
      </div>;
     })}
    </article>;
   })}
   {!lesson&&introduction&&<article className="k-lesson-chapter">
    <h4>Verifique a compreensão do conceito</h4><p className="k-lesson-question">{introduction.check}</p>
    <label className="k-lesson-draft">Seu raciocínio
     <textarea rows={5} value={drafts['intro']??''} onChange={e=>updateDraft('intro',e.target.value)}
      placeholder="Escreva sua hipótese ou solução antes de ler o exemplo."/>
    </label><p className="k-lesson-exercise-help">Compare sua resposta ao exemplo na aba Explicações. Esta tarefa introdutória não gera nota.</p>
   </article>}
   {!authored&&<div className="k-lesson-study-method"><h4>Como preparar este tema para a prática?</h4>
    {method.promptLabels.map((label,i)=><p key={label}><strong>{i+1}. {label}.</strong> {method.questions[i]}</p>)}
    <p>Estas são orientações gerais de estudo, não exercícios específicos ou questões oficiais.</p></div>}
  </>}
  {view==='explanations'&&<>
   {situation&&<article className="k-lesson-problem-answer">
    <span className="k-lesson-everyday-label">RETOMANDO O DESAFIO INICIAL</span>
    <h4>Como resolver a situação?</h4>
    <p>{situation.answer}</p>
   </article>}
   {lesson&&lesson.sections.map((section,i)=>{
    const tasks=lesson.tasks.filter(task=>task.level===section.level);
    const open=Boolean(steps[section.level]);
    return <article className="k-lesson-chapter" key={section.level}>
     <div className="k-lesson-chapter-heading"><span>{sectionNumber(i)}</span><div><small>{levels[section.level]}</small><h4>{section.title}</h4></div></div>
     <button type="button" className="k-lesson-expand" aria-expanded={open}
      onClick={()=>setSteps(prev=>({...prev,[section.level]:!open}))}>Passo a passo do exemplo <ChevronDown size={17}/></button>
     {open&&<ol className="k-lesson-steps">{section.steps.map((step,j)=><li key={j}>{step}</li>)}</ol>}
     <div className="k-lesson-worked"><strong>Exemplo resolvido</strong><TextBlocks value={section.example}/></div>
     <div className="k-lesson-mistake"><strong>Erro frequente</strong><p>{section.pitfall}</p></div>
     {tasks.map((task,j)=>{
      const id=idFor(section.level,j);
      return <div key={id} className="k-lesson-solution">
       <button type="button" className="k-lesson-expand" aria-expanded={Boolean(solutions[id])}
        onClick={()=>setSolutions(prev=>({...prev,[id]:!prev[id]}))}>Ver resolução da atividade {j+1} <ChevronDown size={17}/></button>
       {solutions[id]&&<TextBlocks value={task.solution}/>}
      </div>;
     })}
    </article>;
   })}
   {!lesson&&introduction&&<article className="k-lesson-chapter">
    <h4>Exemplo contextualizado</h4><div className="k-lesson-worked"><TextBlocks value={introduction.workedExample}/></div>
    <div className="k-lesson-mistake"><strong>Atenção ao erro comum</strong><p>{introduction.commonMistake}</p></div>
   </article>}
   {!authored&&<div className="k-lesson-study-method"><h4>Explicação ainda não publicada</h4><p>Não existe resolução editorial específica para este assunto. Consulte as referências da disciplina ou peça uma explicação individual ao Kog.</p></div>}
  </>}
  <footer className="k-lesson-reading-footer">
   <span><Lightbulb size={16}/> Atividades desta página são treino local; o histórico de domínio é calculado na Evolução da habilidade.</span>
   {onTutor&&<button type="button" onClick={onTutor}>Explicar com o Kog <ArrowRight size={16}/></button>}
  </footer>
 </section>;
}
