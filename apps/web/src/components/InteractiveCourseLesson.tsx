'use client';

import {useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpenText,CheckCircle2,Eye,Lightbulb,PenLine} from 'lucide-react';
import {levels,type CourseLesson,type CourseLevel} from '@/lib/course-content';

type Stage='concept'|'example'|'exercise';
const grades:CourseLevel[]=['basic','intermediate','advanced'];
const stages:{id:Stage;label:string}[]=[
 {id:'concept',label:'Entenda'},
 {id:'example',label:'Veja na prática'},
 {id:'exercise',label:'Sua vez'}
];

/**
 * A self-contained classroom for one published lesson. Writing and revealing
 * hints here are local study aids, NOT graded attempts or evidence of mastery.
 */
export default function InteractiveCourseLesson({lesson,onTutor}:{
 lesson:CourseLesson;onTutor?:()=>void;
}){
 const [level,setLevel]=useState<CourseLevel>('basic');
 const [stage,setStage]=useState<Stage>('concept');
 const [stepsShown,setStepsShown]=useState<Record<string,number>>({});
 const [drafts,setDrafts]=useState<Record<string,string>>({});
 const [hint,setHint]=useState<Record<string,boolean>>({});
 const [solution,setSolution]=useState<Record<string,boolean>>({});
 const section=lesson.sections.find(item=>item.level===level)??lesson.sections[0];
 const tasks=lesson.tasks.filter(item=>item.level===section.level);
 const shown=stepsShown[section.level]??0;
 const next=()=>{
  const i=stages.findIndex(item=>item.id===stage);
  if(i<stages.length-1){setStage(stages[i+1].id);return;}
  const levelIndex=grades.indexOf(level);
  if(levelIndex<grades.length-1){setLevel(grades[levelIndex+1]);setStage('concept');}
 };
 const previous=()=>{
  const i=stages.findIndex(item=>item.id===stage);
  if(i>0){setStage(stages[i-1].id);return;}
  const levelIndex=grades.indexOf(level);
  if(levelIndex>0){setLevel(grades[levelIndex-1]);setStage('exercise');}
 };
 const atBeginning=level==='basic'&&stage==='concept';
 const atEnd=level==='advanced'&&stage==='exercise';
 return <section className="k-course-classroom" aria-label={'Sala de aula: '+lesson.topic}>
  <header className="k-classroom-heading">
   <span className="overline"><BookOpenText size={15} aria-hidden="true"/> SALA DA DISCIPLINA · {lesson.subject}</span>
   <h3>{lesson.topic}</h3>
   <p>Aprenda em blocos curtos, resolva uma atividade e continue no seu ritmo.</p>
  </header>
  <div className="k-classroom-levels" role="group" aria-label="Dificuldade da aula">
   {grades.map((item,i)=><button key={item} type="button" aria-pressed={level===item} className={level===item?'is-current':''}
    onClick={()=>{setLevel(item);setStage('concept');}}>
    <small>ETAPA {i+1}</small><strong>{levels[item].replace(/^\d+\. /,'')}</strong>
   </button>)}
  </div>
  <nav className="k-classroom-stages" aria-label="Partes da etapa">
   {stages.map((item,i)=><button key={item.id} type="button" aria-pressed={stage===item.id}
    className={stage===item.id?'is-current':''} onClick={()=>setStage(item.id)}>
    <span>{i+1}</span>{item.label}
   </button>)}
  </nav>
  <div className="k-classroom-stage" key={section.level+'-'+stage}>
   {stage==='concept'&&<>
    <span className="k-classroom-eyebrow">CONCEITO · {levels[section.level]}</span>
    <h4>{section.title}</h4>
    <p className="k-classroom-readable">{section.explanation}</p>
    <div className="k-classroom-note"><Lightbulb size={18} aria-hidden="true"/>
     <p><strong>Conexão com a aula:</strong> avance para visualizar a explicação passo a passo e aplicar este conceito.</p>
    </div>
   </>}
   {stage==='example'&&<>
    <span className="k-classroom-eyebrow">EXEMPLO GUIADO</span>
    <h4>Resolva uma etapa de cada vez</h4>
    <p>Os passos abaixo pertencem ao exemplo desta aula. Revele-os gradualmente antes de conferir a resolução.</p>
    <ol className="k-classroom-revealed">
     {section.steps.slice(0,shown).map((step,i)=><li key={i}><span>{i+1}</span><p>{step}</p></li>)}
    </ol>
    {shown<section.steps.length?<button type="button" className="k-classroom-reveal" onClick={()=>setStepsShown(v=>({...v,[section.level]:shown+1}))}>
     <Eye size={16} aria-hidden="true"/> Revelar passo {shown+1} de {section.steps.length}
    </button>:<div className="k-classroom-example">
     <strong><CheckCircle2 size={17} aria-hidden="true"/> Exemplo resolvido</strong>
     <p className="k-classroom-readable">{section.example}</p>
    </div>}
    <div className="k-classroom-pitfall"><strong>Atenção ao erro comum:</strong><p>{section.pitfall}</p></div>
   </>}
   {stage==='exercise'&&<>
    <span className="k-classroom-eyebrow">ATIVIDADE DA AULA · {levels[section.level]}</span>
    <h4>Agora é sua vez</h4>
    {tasks.map((task,i)=>{
     const id=section.level+'-'+i;
     return <div className="k-classroom-task" key={id}>
      <p className="k-classroom-prompt">{task.prompt}</p>
      <label htmlFor={'k-course-draft-'+id}>Seu raciocínio</label>
      <textarea id={'k-course-draft-'+id} value={drafts[id]??''} onChange={e=>setDrafts(v=>({...v,[id]:e.target.value}))}
       placeholder="Resolva aqui com suas palavras. Este rascunho não é enviado nem corrigido automaticamente." rows={4}/>
      <div className="k-classroom-task-buttons">
       <button type="button" aria-expanded={Boolean(hint[id])} onClick={()=>setHint(v=>({...v,[id]:!v[id]}))}>
        <Lightbulb size={16} aria-hidden="true"/> {hint[id]?'Ocultar pista':'Mostrar pista'}
       </button>
       <button type="button" aria-expanded={Boolean(solution[id])} onClick={()=>setSolution(v=>({...v,[id]:!v[id]}))}>
        <Eye size={16} aria-hidden="true"/> {solution[id]?'Ocultar resolução':'Conferir resolução'}
       </button>
      </div>
      {hint[id]&&<div className="k-classroom-hint"><strong>Pista</strong><p>{task.hint}</p></div>}
      {solution[id]&&<div className="k-classroom-solution"><strong>Resolução comentada</strong><p>{task.solution}</p></div>}
     </div>;
    })}
    <p className="k-classroom-privacy"><PenLine size={14} aria-hidden="true"/> Rascunho e pistas ficam apenas nesta tela. Para registrar acertos e evolução, use “Praticar mais 10 questões” no painel Evolução da habilidade.</p>
    {onTutor&&<button type="button" className="k-classroom-tutor" onClick={onTutor}>Pedir uma explicação ao Kog <ArrowRight size={16} aria-hidden="true"/></button>}
   </>}
  </div>
  <footer className="k-classroom-navigation">
   <button type="button" disabled={atBeginning} onClick={previous}><ArrowLeft size={15} aria-hidden="true"/> Voltar</button>
   <span>{grades.indexOf(level)*3+stages.findIndex(s=>s.id===stage)+1} de 9 partes</span>
   <button type="button" disabled={atEnd} onClick={next}>{atEnd?'Concluído':'Continuar'} <ArrowRight size={15} aria-hidden="true"/></button>
  </footer>
 </section>;
}
