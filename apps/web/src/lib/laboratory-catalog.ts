/** Pure routing for the independent Kognos Lab Hub.
 * Specialized labs must remain topic-specific; a generic mind map is never
 * advertised as a physics experiment or as a completed lesson.
 */
import {resolveMathLab} from './math-labs.ts';
import {resolveScienceLab} from './science-labs.ts';
import {resolveLanguageLab} from './language-labs.ts';
import {resolveHumanitiesLab} from './humanities-labs.ts';
import {simulationForTopic} from './third-party-simulations.ts';
import type {CurriculumTopic} from './curriculum-catalog.ts';

export type LaboratoryStatus='specialized'|'general';
export type LaboratoryKind='math'|'science'|'language'|'humanities'|'concept';
export type LaboratoryCard={status:LaboratoryStatus;kind:LaboratoryKind;description:string;models:number};
export function describeLaboratory(topic:Pick<CurriculumTopic,'subject'|'topic'> & {description?:string;unit?:string}):LaboratoryCard{
 const ref={subject:topic.subject,topic:topic.topic,description:topic.description,unit:topic.unit};
 const phet=simulationForTopic(ref).length;
 const math=resolveMathLab(ref);
 const science=resolveScienceLab(ref);
 const language=resolveLanguageLab(ref);
 const humanities=resolveHumanitiesLab(ref);
 if(math||phet&&topic.subject==='Matemática'){
  return {status:'specialized',kind:'math',
   description:math?'Modelo matemático manipulável'+(phet?' e simulação PhET complementar':''):'Simulação PhET de Matemática',
   models:Number(Boolean(math))+phet};
 }
 if(science||phet&&topic.subject==='Química'){
  return {status:'specialized',kind:'science',
   description:science?'Simulador de Ciências'+(phet?' e experiência PhET opcional':''):'Simulação PhET de Química',
   models:Number(Boolean(science))+phet};
 }
 if(language)return {status:'specialized',kind:'language',description:'Oficina interativa de Linguagens',models:1};
 if(humanities)return {status:'specialized',kind:'humanities',description:'Investigação interativa de Ciências Humanas',models:1};
 return {status:'general',kind:'concept',description:'Mapa visual de investigação e referências curriculares',models:1};
}
