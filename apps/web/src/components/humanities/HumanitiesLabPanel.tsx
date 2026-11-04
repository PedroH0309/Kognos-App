'use client';
import dynamic from 'next/dynamic';
import type {ComponentType} from 'react';
import {resolveHumanitiesLab,type HumanitiesKind,type HumanitiesTopic} from '@/lib/humanities-labs';

/** Strict subject/topic matches prevent a plausible-looking but irrelevant lab.
 * Simulation modules are loaded only for the selected curriculum topic.
 */
const labs={
 'history-timeline':dynamic(()=>import('./HistoryLabs').then(m=>m.HistoryTimelineLab)),
 'history-evidence':dynamic(()=>import('./HistoryLabs').then(m=>m.HistorySourcesLab)),
 'history-causality':dynamic(()=>import('./HistoryLabs').then(m=>m.HistoryCausalityLab)),
 'geography-cartography':dynamic(()=>import('./GeographyLabs').then(m=>m.GeographyCartographyLab)),
 'geography-landscape':dynamic(()=>import('./GeographyLabs').then(m=>m.GeographyLandscapeLab)),
 'geography-indicators':dynamic(()=>import('./GeographyLabs').then(m=>m.GeographyIndicatorsLab)),
 'philosophy-logic':dynamic(()=>import('./PhilosophyLabs').then(m=>m.PhilosophyLogicLab)),
 'philosophy-knowledge':dynamic(()=>import('./PhilosophyLabs').then(m=>m.PhilosophyKnowledgeLab)),
 'philosophy-ethics':dynamic(()=>import('./PhilosophyLabs').then(m=>m.PhilosophyEthicsLab)),
 'sociology-work':dynamic(()=>import('./SociologyLabs').then(m=>m.SociologyWorkLab)),
 'sociology-culture':dynamic(()=>import('./SociologyLabs').then(m=>m.SociologyCultureLab)),
 'sociology-citizenship':dynamic(()=>import('./SociologyLabs').then(m=>m.SociologyCitizenshipLab))
} satisfies Record<HumanitiesKind,ComponentType>;

export default function HumanitiesLabPanel(topic:HumanitiesTopic){
 const kind=resolveHumanitiesLab(topic);
 if(!kind)return null;
 const Lab=labs[kind];
 return <div className="k-humanities-workspace" data-humanities-lab={kind}><Lab/></div>;
}
