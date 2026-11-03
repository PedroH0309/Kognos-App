'use client';

import type {ReactNode} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';

/** Animations are deliberately small and transform/opacity-only.
 * The operating-system reduced-motion preference and Kognos' accessibility
 * adaptation both disable movement. No timers or animation loops are used.
 */
export function AnimatedPage({page,disabled,children}:{
 page:string;disabled:boolean;children:ReactNode
}){
 const prefersReducedMotion=useReducedMotion();
 const skip=disabled||Boolean(prefersReducedMotion);
 return <motion.div
  key={page}
  className="k-motion-page"
  initial={skip?false:{opacity:0,y:11}}
  animate={{opacity:1,y:0}}
  transition={{duration:skip?0:0.26,ease:[0.22,1,0.36,1]}}
 >
  {children}
 </motion.div>;
}

/** Preserve the mobile drawer's existing click-away and ARIA behavior. */
export function AnimatedSidebarScrim({open,disabled,onClose}:{
 open:boolean;disabled:boolean;onClose:()=>void
}){
 const prefersReducedMotion=useReducedMotion();
 const skip=disabled||Boolean(prefersReducedMotion);
 return <AnimatePresence initial={false}>
  {open&&<motion.button
   key="sidebar-scrim"
   type="button"
   className="mobile-sidebar-scrim"
   aria-label="Fechar menu lateral"
   onClick={onClose}
   initial={skip?false:{opacity:0}}
   animate={{opacity:1}}
   exit={skip?{opacity:0,transition:{duration:0}}:{opacity:0}}
   transition={{duration:skip?0:0.19,ease:'easeOut'}}
  />}
 </AnimatePresence>;
}

/** A single layoutId creates an animated selection marker across mobile tabs.
 * In reduced-motion mode it is an ordinary nonanimated element.
 */
export function MobileTabIndicator({disabled}:{disabled:boolean}){
 const prefersReducedMotion=useReducedMotion();
 if(disabled||prefersReducedMotion)return <span className="k-tab-active-line" aria-hidden="true"/>;
 return <motion.span
  layoutId="kognos-mobile-active-tab"
  className="k-tab-active-line"
  aria-hidden="true"
  transition={{type:'spring',stiffness:470,damping:38,mass:0.7}}
 />;
}
