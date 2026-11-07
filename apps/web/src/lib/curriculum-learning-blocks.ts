import {findProvaoTopic} from './provao-paulista.ts';
import type {CurriculumListTopic} from './curriculum-navigation.ts';

export type LearningBlock<T extends CurriculumListTopic>={id:string;title:string;subject:string;topics:T[];source:'curricular'|'general'};

/** Only group by a real registered curricular unit when the data exists.
 * Missing units are grouped transparently instead of invented by AI.
 * Preserve the subject's original lesson order and topic identities. */
export function groupLearningBlocks<T extends CurriculumListTopic>(
 topics:readonly T[],subject:string
):LearningBlock<T>[]{
 const groups=new Map<string,LearningBlock<T>>();
 for(const topic of topics){
  const unit=findProvaoTopic(topic.subject,topic.topic)?.unit?.trim();
  const title=unit||'Outros conteúdos de '+subject;
  const id=(unit?'unit:':'other:')+title;
  let group=groups.get(id);
  if(!group){
   group={id,title,subject,topics:[],source:unit?'curricular':'general'};
   groups.set(id,group);
  }
  group.topics.push(topic);
 }
 return [...groups.values()];
}
