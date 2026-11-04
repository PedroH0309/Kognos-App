'use client';
import dynamic from 'next/dynamic';
import type {ComponentType} from 'react';
import {resolveLanguageLab,type LanguageLabKind,type LanguageTopic} from '@/lib/language-labs';

/** The selected authored exercise runs locally, with no scores or external AI calls.
 * Only relevant drills are loaded. Unmatched subjects retain general exploration.
 */
const labs={
 'pt-reading':dynamic(()=>import('./PortugueseLabs').then(m=>m.PortugueseReadingLab)),
 'pt-grammar':dynamic(()=>import('./PortugueseLabs').then(m=>m.PortugueseGrammarLab)),
 'pt-cohesion':dynamic(()=>import('./PortugueseLabs').then(m=>m.PortugueseCohesionLab)),
 'en-reading':dynamic(()=>import('./EnglishLabs').then(m=>m.EnglishReadingLab)),
 'en-modals':dynamic(()=>import('./EnglishLabs').then(m=>m.EnglishModalLab)),
 'en-reference':dynamic(()=>import('./EnglishLabs').then(m=>m.EnglishReferenceLab)),
 'essay-theme':dynamic(()=>import('./WritingLabs').then(m=>m.EssayThemeLab)),
 'essay-structure':dynamic(()=>import('./WritingLabs').then(m=>m.EssayStructureLab)),
 'essay-cohesion':dynamic(()=>import('./WritingLabs').then(m=>m.EssayCohesionLab)),
 'essay-intervention':dynamic(()=>import('./WritingLabs').then(m=>m.EssayInterventionLab))
} satisfies Record<LanguageLabKind,ComponentType>;

export default function LanguageLabPanel(topic:LanguageTopic){
 const kind=resolveLanguageLab(topic);
 if(!kind)return null;
 const Lab=labs[kind];
 return <div className="k-language-workspace" data-language-lab={kind}><Lab/></div>;
}
