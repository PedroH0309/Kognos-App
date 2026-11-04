'use client';
import dynamic from 'next/dynamic';
import type {ComponentType} from 'react';
import {resolveScienceLab,type ScienceKind,type ScienceTopic} from '@/lib/science-labs';

/** Only the selected science lab is downloaded. No network calls, user scores,
 * experiment uploads or inferred learning outcomes are generated. */
const labs={
 'cell-anatomy':dynamic(()=>import('./CellAnatomyLab')),
 'molecules-3d':dynamic(()=>import('./Molecule3DLab')),
 motion:dynamic(()=>import('./PhysicsLabs').then(m=>m.MotionLab)),
 waves:dynamic(()=>import('./PhysicsLabs').then(m=>m.WavesLab)),
 circuits:dynamic(()=>import('./PhysicsLabs').then(m=>m.CircuitsLab)),
 thermal:dynamic(()=>import('./PhysicsLabs').then(m=>m.ThermalLab)),
 atom:dynamic(()=>import('./ChemistryLabs').then(m=>m.AtomLab)),
 stoichiometry:dynamic(()=>import('./ChemistryLabs').then(m=>m.StoichiometryLab)),
 solutions:dynamic(()=>import('./ChemistryLabs').then(m=>m.SolutionsLab)),
 ph:dynamic(()=>import('./ChemistryLabs').then(m=>m.PhLab)),
 genetics:dynamic(()=>import('./BiologyLabs').then(m=>m.GeneticsLab)),
 trophic:dynamic(()=>import('./BiologyLabs').then(m=>m.TrophicLab)),
 population:dynamic(()=>import('./BiologyLabs').then(m=>m.PopulationLab)),
 'cell-cycle':dynamic(()=>import('./BiologyLabs').then(m=>m.CellCycleLab))
} satisfies Record<ScienceKind,ComponentType>;

export default function ScienceLabPanel(topic:ScienceTopic){
 const kind=resolveScienceLab(topic);
 if(!kind)return null;
 const Lab=labs[kind];
 return <div className="k-science-workspace" data-science-lab={kind}>
  <Lab/>
 </div>;
}
