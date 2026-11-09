/**
 * Curated and growing authorial depth library for specific Provão Paulista syllabus items.
 * Content is original and academically motivated, not yet certified by a teacher.
 * Never infer deep lesson coverage from shared words or a broad keyword.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseSection,CourseTask} from './course-content.ts';
import {findProvaoTopic} from './provao-paulista.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {provaoDepthScienceAndHistory} from './provao-depth-science-history.ts';
import {provaoDepthHumanitiesAndLanguage} from './provao-depth-humanities-language.ts';
import {provaoDepthBatch02Science} from './provao-depth-batch02-science.ts';
import {provaoDepthBatch02MathHumanities} from './provao-depth-batch02-math-humanities.ts';
import {provaoDepthBatch02LanguagesSociety} from './provao-depth-batch02-languages-society.ts';
import {provaoDepthBatch03Science} from './provao-depth-batch03-science.ts';
import {provaoDepthBatch03HistoryGeography} from './provao-depth-batch03-history-geography.ts';
import {provaoDepthBatch04Core} from './provao-depth-batch04-core.ts';
import {provaoDepthBatch05Stem} from './provao-depth-batch05-stem.ts';
import {provaoDepthBatch06MechanicsMath} from './provao-depth-batch06-mechanics-math.ts';
import {provaoDepthBatch06ScienceHistory} from './provao-depth-batch06-science-history.ts';
import {provaoDepthBatch07Sciences} from './provao-depth-batch07-sciences.ts';
import {provaoDepthBatch07MathHistory} from './provao-depth-batch07-math-history.ts';
import {provaoDepthBatch08Languages} from './provao-depth-batch08-languages.ts';
import {provaoDepthBatch09Humanities} from './provao-depth-batch09-humanities.ts';
import {provaoDepthBatch10GeoEthics} from './provao-depth-batch10-geo-ethics.ts';
import {provaoDepthBatch11Core} from './provao-depth-batch11-core.ts';

import {provaoDepthBatch12StemHistory} from './provao-depth-batch12-stem-history.ts';
import {provaoDepthBatch13Core} from './provao-depth-batch13-core.ts';
import {provaoDepthBatch14Core} from './provao-depth-batch14-core.ts';
import {provaoDepthBatch15Core} from './provao-depth-batch15-core.ts';
import {provaoDepthBatch16Core} from './provao-depth-batch16-core.ts';
import {provaoDepthBatch17Core} from './provao-depth-batch17-core.ts';
import {provaoDepthBatch18Core} from './provao-depth-batch18-core.ts';
import {provaoDepthBatch19Core} from './provao-depth-batch19-core.ts';
import {provaoDepthBatch20Core} from './provao-depth-batch20-core.ts';
import {provaoDepthBatch21Core} from './provao-depth-batch21-core.ts';
import {provaoDepthBatch22Core} from './provao-depth-batch22-core.ts';
import {provaoDepthBatch23Core} from './provao-depth-batch23-core.ts';
import {provaoDepthBatch24Core} from './provao-depth-batch24-core.ts';
import {provaoDepthBatch25Core} from './provao-depth-batch25-core.ts';
import {provaoDepthBatch26Core} from './provao-depth-batch26-core.ts';
import {provaoDepthBatch27Optics} from './provao-depth-batch27-optics.ts';
import {provaoDepthBatch27Waves} from './provao-depth-batch27-waves.ts';
import {provaoDepthBatch27Investigation} from './provao-depth-batch27-investigation.ts';
import {provaoDepthBatch27Destiny} from './provao-depth-batch27-destiny.ts';
import {provaoDepthBatch27Monopolies} from './provao-depth-batch27-monopolies.ts';
import {provaoDepthBatch28Thermochemistry} from './provao-depth-batch28-thermochemistry.ts';
import {provaoDepthBatch28HeatEngines} from './provao-depth-batch28-heat-engines.ts';
import {provaoDepthBatch28Conservation} from './provao-depth-batch28-conservation.ts';
import {provaoDepthBatch28Nationalism} from './provao-depth-batch28-nationalism.ts';
import {provaoDepthBatch28Labour} from './provao-depth-batch28-labour.ts';
import {provaoDepthBatch29Water} from './provao-depth-batch29-water.ts';
import {provaoDepthBatch29GasWork} from './provao-depth-batch29-gas-work.ts';
import {provaoDepthBatch29Nutrition} from './provao-depth-batch29-nutrition.ts';
import {provaoDepthBatch29Coffee} from './provao-depth-batch29-coffee.ts';
import {provaoDepthBatch29SocialIdeas} from './provao-depth-batch29-social-ideas.ts';
import {provaoDepthBatch29Isomerism} from './provao-depth-batch29-isomerism.ts';
import {provaoDepthBatch29Eclipses} from './provao-depth-batch29-eclipses.ts';
import {provaoDepthBatch29Virology} from './provao-depth-batch29-virology.ts';
import {provaoDepthBatch30Organics} from './provao-depth-batch30-organics.ts';
import {provaoDepthBatch30Dispersion} from './provao-depth-batch30-dispersion.ts';
import {provaoDepthBatch31Faraday} from './provao-depth-batch31-faraday.ts';
import {provaoDepthBatch31Capacitors} from './provao-depth-batch31-capacitors.ts';
import {provaoDepthBatch31ProtozoaFungi} from './provao-depth-batch31-protozoa-fungi.ts';
import {provaoDepthBatch31AbolitionImmigration} from './provao-depth-batch31-abolition-immigration.ts';
import {provaoDepthBatch31Imperialism} from './provao-depth-batch31-imperialism.ts';
import {provaoDepthBatch32Core} from './provao-depth-batch32-core.ts';
import {provaoDepthBatch34LanguageGenetics} from './provao-depth-batch34-language-genetics.ts';
import {provaoDepthBatch34PhysicsHistory} from './provao-depth-batch34-physics-history.ts';
import {provaoDepthBatch35Sciences} from './provao-depth-batch35-sciences.ts';
import {provaoDepthBatch35HistoryMixtures} from './provao-depth-batch35-history-mixtures.ts';
import {provaoDepthBatch36Science} from './provao-depth-batch36-science.ts';
import {provaoDepthBatch36History} from './provao-depth-batch36-history.ts';
import {provaoDepthBatch37Core} from './provao-depth-batch37-core.ts';

export type DeepTopicSpec={
 subject:string;
 topicStart:string;
 objective:string;
 prerequisites:string[];
 sections:CourseSection[];
 tasks:CourseTask[];
};
const all:readonly DeepTopicSpec[]=[...provaoDepthScienceAndHistory,...provaoDepthHumanitiesAndLanguage,...provaoDepthBatch02Science,...provaoDepthBatch02MathHumanities,...provaoDepthBatch02LanguagesSociety,...provaoDepthBatch03Science,...provaoDepthBatch03HistoryGeography,...provaoDepthBatch04Core,...provaoDepthBatch05Stem,...provaoDepthBatch06MechanicsMath,...provaoDepthBatch06ScienceHistory,...provaoDepthBatch07Sciences,...provaoDepthBatch07MathHistory,...provaoDepthBatch08Languages,...provaoDepthBatch09Humanities,...provaoDepthBatch10GeoEthics,...provaoDepthBatch11Core,...provaoDepthBatch12StemHistory,...provaoDepthBatch13Core,...provaoDepthBatch14Core,...provaoDepthBatch15Core,...provaoDepthBatch16Core,...provaoDepthBatch17Core,...provaoDepthBatch18Core,...provaoDepthBatch19Core,...provaoDepthBatch20Core,...provaoDepthBatch21Core,...provaoDepthBatch22Core,...provaoDepthBatch23Core,...provaoDepthBatch24Core,...provaoDepthBatch25Core,...provaoDepthBatch26Core,...provaoDepthBatch27Optics,...provaoDepthBatch27Waves,...provaoDepthBatch27Investigation,...provaoDepthBatch27Destiny,...provaoDepthBatch27Monopolies,...provaoDepthBatch28Thermochemistry,...provaoDepthBatch28HeatEngines,...provaoDepthBatch28Conservation,...provaoDepthBatch28Nationalism,...provaoDepthBatch28Labour,...provaoDepthBatch29Water,...provaoDepthBatch29GasWork,...provaoDepthBatch29Nutrition,...provaoDepthBatch29Coffee,...provaoDepthBatch29SocialIdeas,...provaoDepthBatch29Isomerism,...provaoDepthBatch29Eclipses,...provaoDepthBatch29Virology,...provaoDepthBatch30Organics,...provaoDepthBatch30Dispersion,...provaoDepthBatch31Faraday,...provaoDepthBatch31Capacitors,...provaoDepthBatch31ProtozoaFungi,...provaoDepthBatch31AbolitionImmigration,...provaoDepthBatch31Imperialism,...provaoDepthBatch32Core,...provaoDepthBatch34LanguageGenetics,...provaoDepthBatch34PhysicsHistory,...provaoDepthBatch35Sciences,...provaoDepthBatch35HistoryMixtures,...provaoDepthBatch36Science,...provaoDepthBatch36History,...provaoDepthBatch37Core];
export const deepProvaoTopicKeys=all.map(spec=>spec.subject+' · '+spec.topicStart);

export function deepProvaoLesson(topic:CurriculumTopic):CourseLesson|null{
 const registered=findProvaoTopic(topic.subject,topic.topic);
 if(!registered)return null;
 // Prefer an exact official syllabus label over older, broader prefix matches.
 const spec=all.find(item=>item.subject===topic.subject&&registered.topic===item.topicStart)
  ??all.find(item=>item.subject===topic.subject&&registered.topic.startsWith(item.topicStart));
 if(!spec)return null;
 const sourceUrls=[...new Set(topic.exams
  .map(exam=>examBlueprints[exam]?.sourceUrl)
  .filter((url):url is string=>Boolean(url?.startsWith('https://'))))];
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:spec.objective,prerequisites:spec.prerequisites,
  sections:spec.sections,tasks:spec.tasks,videos:[],
  authorship:'Kognos — aula autoral aprofundada e específica; revisão docente pendente; sem homologação docente',
  license:'Material preparatório autoral Kognos; não oficial do Provão Paulista',
  sourceUrls,syllabusScope:registered.description,review:'introductory'
 };
}
export function hasDeepProvaoLesson(topic:CurriculumTopic){
 const ref=findProvaoTopic(topic.subject,topic.topic);
 return Boolean(ref&&all.some(s=>s.subject===topic.subject&&ref.topic.startsWith(s.topicStart)));
}
