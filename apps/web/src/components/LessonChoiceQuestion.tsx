'use client';

import {useState} from 'react';
import {CheckCircle2,Lightbulb,RotateCcw} from 'lucide-react';
import type {LessonChoice} from '@/lib/lesson-multiple-choice';

const letters=['A','B','C','D'] as const;

/** Formative, locally checked multiple-choice question. Not a graded exam attempt. */
export default function LessonChoiceQuestion({choice,onAnswer,compact=false}:{
 choice:LessonChoice;
 onAnswer?:(correct:boolean)=>void;
 compact?:boolean;
}){
 const [selected,setSelected]=useState<number|null>(null);
 const [hintVisible,setHintVisible]=useState(false);
 const correct=selected===choice.correctIndex;
 function choose(index:number){setSelected(index);onAnswer?.(index===choice.correctIndex);}
 return <div className={'k-lesson-mcq'+(compact?' is-compact':'')}>
  <p className="k-lesson-mcq-prompt">{choice.prompt}</p>
  <p className="k-lesson-mcq-instruction">{choice.instruction}</p>
  <div className="k-lesson-mcq-options" role="group" aria-label="Alternativas da questão">
   {choice.options.map((option,index)=><button key={index} type="button"
    aria-pressed={selected===index} onClick={()=>choose(index)}
    className={'k-lesson-mcq-option'+(selected===index?(correct?' is-correct':' is-incorrect'):'')}>
    <span className="k-lesson-mcq-letter">{letters[index]}</span>
    <span>{option}</span>
   </button>)}
  </div>
  {choice.hint&&! (selected!==null)&&<button className="k-lesson-mcq-hint-button" type="button" aria-expanded={hintVisible} onClick={()=>setHintVisible(v=>!v)}>
   <Lightbulb size={15} aria-hidden="true"/>{hintVisible?'Ocultar dica':'Ver dica'}
  </button>}
  {hintVisible&&selected===null&&choice.hint&&<p className="k-lesson-mcq-hint">{choice.hint}</p>}
  {selected!==null&&<div className="k-lesson-mcq-feedback" role="status">
   <strong>{correct?<><CheckCircle2 size={16} aria-hidden="true"/> Alternativa correta</>:<><RotateCcw size={16} aria-hidden="true"/> Revise esta questão</>}</strong>
   {!correct&&<p>Resposta de referência: <strong>{letters[choice.correctIndex]}</strong>. A alternativa escolhida não corresponde à resolução desta atividade.</p>}
   <p>{choice.explanation}</p>
   {choice.source==='resolution_matching'&&<small>Associação entre enunciado e resolução original. As demais alternativas usam outras resoluções do material; isto não substitui uma questão autoral revisada com distratores específicos.</small>}
   {choice.source==='example_matching'&&<small>Reconhecimento do exemplo original. Esta atividade introdutória não comprova domínio do assunto.</small>}
   <small>Feedback formativo imediato. Esta resposta não é registrada como nota nem no mapa de domínio.</small>
  </div>}
 </div>;
}
