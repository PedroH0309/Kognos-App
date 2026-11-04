'use client';
import {useState} from 'react';
import {englishExercises,modalExercises,referenceExercises} from '@/lib/language-labs';
import {LanguageStage,ExerciseDeck,WritingField} from './LanguageLabCommon';

export function EnglishReadingLab(){
 const [note,setNote]=useState('');
 return <LanguageStage subject="Inglês" kind="en-reading" title="Reading comprehension and evidence"
  description="Treine propósito textual, inferências e distinção entre fato e opinião em pequenos textos originais em inglês.">
  <ExerciseDeck exercises={englishExercises} language="en"/>
  <div className="k-language-reflection">
   <h4>Evidence-based reading</h4>
   <p lang="en">Choose one sentence from a text above. Explain what it proves and what it does not prove.</p>
   <WritingField label="Your evidence" value={note} onChange={setNote} placeholder="The phrase ... supports ... because ..."/>
   <p className="k-language-mini-note">Esta explicação escrita é um rascunho sem correção automática.</p>
  </div>
 </LanguageStage>;
}
export function EnglishModalLab(){
 const [modal,setModal]=useState<'must'|'may'|'should'>('may');
 const definitions={
  must:{function:'Obrigação forte',example:'Students must follow the safety rules.',meaning:'Regra ou exigência.'},
  may:{function:'Permissão',example:'Visitors may take photos in this room.',meaning:'Permissão neste contexto; em outras situações, may pode indicar possibilidade.'},
  should:{function:'Recomendação',example:'You should check the sources before sharing.',meaning:'Conselho ou expectativa, geralmente sem obrigação estrita.'}
 };
 return <LanguageStage subject="Inglês" kind="en-modals" title="Modal verbs and discourse markers"
  description="Compare obrigações, permissões, conselhos e conectivos no contexto, sem traduzir palavras isoladas de forma automática.">
  <div className="k-language-reflection">
   <h4>Meaning in context</h4>
   <div className="k-language-choice" role="group" aria-label="Choose a modal verb">
    {(['must','may','should'] as const).map(m=><button key={m} type="button" aria-pressed={modal===m} onClick={()=>setModal(m)}>{m}</button>)}
   </div>
   <blockquote lang="en" className="k-language-example">{definitions[modal].example}</blockquote>
   <p><strong>{definitions[modal].function}</strong> — {definitions[modal].meaning}</p>
  </div>
  <ExerciseDeck exercises={modalExercises} language="en"/>
 </LanguageStage>;
}
export function EnglishReferenceLab(){
 const [antecedent,setAntecedent]=useState<'volunteers'|'walls'|'courtyard'>('volunteers');
 const correct=antecedent==='volunteers';
 return <LanguageStage subject="Inglês" kind="en-reference" title="Pronoun and reference tracker"
  description="Identifique o antecedente dos pronomes e a informação retomada por marcadores coesivos.">
  <div className="k-language-reflection">
   <h4>Follow the reference</h4>
   <blockquote lang="en" className="k-language-example">
    The <mark>volunteers</mark> painted the <mark>school walls</mark> and cleaned the <mark>courtyard</mark>. <mark className="is-active">They</mark> finished before sunset.
   </blockquote>
   <p>Which expression is resumed by <strong lang="en">They</strong>?</p>
   <div className="k-language-choice" role="group" aria-label="Reference candidate">
    {([['volunteers','the volunteers'],['walls','the school walls'],['courtyard','the courtyard']] as const).map(([id,label])=>
     <button type="button" key={id} aria-pressed={antecedent===id} onClick={()=>setAntecedent(id)} lang="en">{label}</button>)}
   </div>
   <p role="status" className="k-language-mini-note">{correct?'Yes: “They” resumes the people who completed both actions.':'Consider which plural group could logically complete both actions in the sentence.'}</p>
  </div>
  <ExerciseDeck exercises={referenceExercises} language="en"/>
 </LanguageStage>;
}
