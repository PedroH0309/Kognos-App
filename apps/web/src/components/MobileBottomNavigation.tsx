'use client';

import {useEffect,useRef,useState} from 'react';
import {Clock3,House,PieChart,Search,UserRound} from 'lucide-react';
import {motion,useReducedMotion} from 'motion/react';

/** Same destinations as the previous mobile bar: only presentation changes.
 * Mobile icons and expanding selection follow the supplied dark pill reference.
 * Motion reuses the existing dependency instead of adding animate-ui/Tailwind.
 */
export const mobileQuickItems=[
 {view:'dashboard',label:'Início',Icon:House},
 {view:'learn',label:'Estudar',Icon:Search},
 {view:'questions',label:'Questões',Icon:PieChart},
 {view:'calendar',label:'Calendário',Icon:Clock3},
 {view:'profile',label:'Perfil',Icon:UserRound}
] as const;
export type MobileQuickView=(typeof mobileQuickItems)[number]['view'];

export default function MobileBottomNavigation({
 view,onNavigate,disableAnimations
}:{
 view:string;
 onNavigate:(destination:MobileQuickView)=>void;
 disableAnimations:boolean;
}){
 const reduce=Boolean(useReducedMotion())||disableAnimations;
 const [minimized,setMinimized]=useState(false);
 const previousScroll=useRef(0);
 useEffect(()=>{
  const main=document.querySelector('.app-main');
  function scrollPosition(target:EventTarget|null){
   if(target===window)return window.scrollY;
   return target instanceof HTMLElement?target.scrollTop:window.scrollY;
  }
  function onScroll(event:Event){
   const value=scrollPosition(event.currentTarget);
   const delta=value-previousScroll.current;
   if(Math.abs(delta)<18)return;
   setMinimized(value>130&&delta>0);
   previousScroll.current=value;
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  main?.addEventListener('scroll',onScroll,{passive:true});
  return ()=>{window.removeEventListener('scroll',onScroll);main?.removeEventListener('scroll',onScroll);};
 },[]);
 return <nav className="mobile-bottom-nav k-animated-mobile-nav"
   data-minimized={minimized?'true':'false'} aria-label="Navegação rápida">
  <div className="k-mobile-nav-pill">
   {mobileQuickItems.map(({view:destination,label,Icon})=>{
    const selected=view===destination;
    return <button key={destination} type="button"
      className={selected?'k-mobile-nav-button active':'k-mobile-nav-button'}
      aria-current={selected?'page':undefined}
      aria-label={label}
      title={label}
      onClick={()=>onNavigate(destination)}>
      {selected&&(reduce?
        <span className="k-mobile-nav-highlight" aria-hidden="true"/>:
        <motion.span layoutId="kognos-mobile-bottom-highlight"
          className="k-mobile-nav-highlight" aria-hidden="true"
          transition={{type:'spring',stiffness:390,damping:34,mass:.75}}/>)}
      <span className="k-mobile-nav-icon" aria-hidden="true">
       <Icon size={22} strokeWidth={selected?2.25:1.85}/>
      </span>
      <span className="k-mobile-nav-label">{label}</span>
     </button>;
   })}
  </div>
 </nav>;
}
