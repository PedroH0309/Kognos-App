'use client';
import {useState} from 'react';
import type {ReactNode} from 'react';
import {sourceStatus,validateChoice,type LanguageExercise,type LanguageLabKind} from '@/lib/language-labs';

export function LanguageStage({subject,title,description,kind,children}:{
 subject:string;title:string;description:string;kind:LanguageLabKind;children:ReactNode;
}){
 return <section className="k-language-lab" aria-label={title}>
  <header className="k-language-head"><span className="overline">OFICINA INTERATIVA · {subject.toLocaleUpperCase('pt-BR')}</span><h3>{title}</h3><p>{description}</p></header>
  {children}
  <p className="k-language-disclaimer">{sourceStatus(kind)}. As respostas e rascunhos desta oficina não são enviados ao servidor e não alteram a evolução da habilidade. A prática avaliada continua em “Praticar mais 10 questões”.</p>
 </section>;
}
export function ExerciseDeck({exercises,language='pt'}:{exercises:readonly LanguageExercise[];language?:'pt'|'en'}){
 const [selected,setSelected]=useState(0);
 const [choice,setChoice]=useState<number|null>(null);
 const [review,setReview]=useState(false);
 const exercise=exercises[selected];
 const feedback=choice===null?null:validateChoice(exercise,choice);
 const switchTo=(index:number)=>{setSelected(index);setChoice(null);setReview(false);};
 return <div className="k-language-exercises">
  <nav className="k-language-exercise-nav" aria-label={language==='en'?'Choose exercise':'Escolha um exercício'}>
   {exercises.map((item,i)=><button type="button" key={item.id} onClick={()=>switchTo(i)} aria-pressed={selected===i}>{i+1}. {item.tag}</button>)}
  </nav>
  <div className="k-language-exercise-card" key={exercise.id}>
   <span className="k-language-eyebrow">{language==='en'?'ORIGINAL PRACTICE TEXT':'TEXTO AUTORAL DE PRÁTICA'}</span>
   <blockquote lang={language==='en'?'en':'pt-BR'}>{exercise.text}</blockquote>
   <h4 lang={language==='en'?'en':'pt-BR'}>{exercise.question}</h4>
   <div className="k-language-options" role="group" aria-label={language==='en'?'Answer options':'Alternativas'}>
    {exercise.options.map((label,i)=><button type="button" key={i}
     aria-pressed={choice===i} onClick={()=>{setChoice(i);setReview(false);}}>
      <span>{String.fromCharCode(65+i)}</span><span lang={language==='en'?'en':'pt-BR'}>{label}</span>
    </button>)}
   </div>
   <button className="k-language-primary" type="button" disabled={choice===null} onClick={()=>setReview(true)}>
    {language==='en'?'Check with evidence':'Conferir com evidência'}
   </button>
   {review&&feedback&&<div className="k-language-feedback" role="status">
    <strong>{feedback.correct?language==='en'?'Correct reasoning':'Resposta compatível com o texto':language==='en'?'Review the evidence':'Revise a evidência textual'}</strong>
    <p lang={language==='en'?'en':'pt-BR'}>{feedback.explanation}</p>
   </div>}
  </div>
  <p className="k-language-mini-note">{language==='en'?'Feedback applies only to this original practice exercise, not your academic grade.':'A conferência é válida apenas para o exemplo autoral apresentado, não para sua proficiência oficial.'}</p>
 </div>;
}
export function WritingField({label,value,onChange,placeholder='',rows=3}:{
 label:string;value:string;onChange:(value:string)=>void;placeholder?:string;rows?:number;
}){
 return <label className="k-language-writing-field">{label}
  <textarea rows={rows} value={value} onChange={e=>onChange(e.target.value)}
   placeholder={placeholder} maxLength={4000}/>
 </label>;
}
