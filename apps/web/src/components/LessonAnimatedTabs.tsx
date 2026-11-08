'use client';

import {useEffect,useId,useRef} from 'react';
import {motion,useReducedMotion} from 'motion/react';

export const lessonNavigationTabs=[
 {id:'lesson',label:'Aula em texto'},
 {id:'activities',label:'Atividades'},
 {id:'explanations',label:'Explicações'},
 {id:'materials',label:'Materiais'},
 {id:'evolution',label:'Evolução'}
] as const;
export type LessonNavigationTab=(typeof lessonNavigationTabs)[number]['id'];

/** Pill-style highlighted tabs; the reader's existing content stays mounted,
 * and only the selected value/visual treatment is changed.
 */
export default function LessonAnimatedTabs({
 value,onChange,subject
}:{
 value:LessonNavigationTab;
 onChange:(next:LessonNavigationTab)=>void;
 subject:string;
}){
 const navRef=useRef<HTMLElement|null>(null);
 const uid=useId().replace(/:/g,'');
 const reducedMotion=Boolean(useReducedMotion());
 useEffect(()=>{
  const nav=navRef.current;
  if(!nav)return;
  const chosen=nav.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
  if(!chosen)return;
  const left=Math.max(0,chosen.offsetLeft-(nav.clientWidth-chosen.clientWidth)/2);
  nav.scrollTo({left,behavior:reducedMotion?'instant':'smooth'});
 },[value,reducedMotion]);
 return <nav ref={navRef} className="k-curriculum-tabs k-lesson-pane-tabs k-animated-lesson-tabs"
  aria-label={'Seções da aula de '+subject}>
  {lessonNavigationTabs.map(tab=>{
   const active=tab.id===value;
   return <button key={tab.id} type="button" aria-pressed={active}
    className={active?'k-animated-lesson-tab is-selected':'k-animated-lesson-tab'}
    onClick={()=>onChange(tab.id)}>
    {active&&(reducedMotion?
     <span className="k-animated-lesson-highlight" aria-hidden="true"/>:
     <motion.span layoutId={'kognos-lesson-highlight-'+uid}
      className="k-animated-lesson-highlight" aria-hidden="true"
      transition={{type:'spring',stiffness:470,damping:38,mass:.7}}/>)}
    <span className="k-animated-lesson-label">{tab.label}</span>
   </button>;
  })}
 </nav>;
}
