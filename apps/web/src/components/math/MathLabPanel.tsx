'use client';
import dynamic from 'next/dynamic';
import type {ComponentType} from 'react';
import {resolveMathLab,type MathLabKind,type MathTopic} from '@/lib/math-labs';

/** Only the selected topic's simulation is downloaded. No server requests,
 * persistent scores or modifications to AI practice data are performed. */
const labs={
 scientific:dynamic(()=>import('./ScientificNotationLab')),
 percentage:dynamic(()=>import('./PercentageExplorer')),
 equations:dynamic(()=>import('./EquationWorkbench')),
 functions:dynamic(()=>import('./FunctionGraphLab')),
 geometry:dynamic(()=>import('./GeometryWorkbench')),
 probability:dynamic(()=>import('./ProbabilityLab')),
 statistics:dynamic(()=>import('./StatisticsLab')),
 trigonometry:dynamic(()=>import('./TrigonometryLab'))
} satisfies Record<MathLabKind,ComponentType>;
export default function MathLabPanel(topic:MathTopic){
 const kind=resolveMathLab(topic);
 if(!kind)return null;
 const Lab=labs[kind];
 return <div className="k-math-workspace" data-math-lab={kind}>
  <Lab/>
 </div>;
}
