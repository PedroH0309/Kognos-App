/** Stage 19 editorial data compacting: only structure is reused; facts are authored topic by topic.
 * No network requests, generated classes, credentials or AI lecture creation at reading time.
 */
import type {LessonBlueprint,BlueprintChapter} from './authored-lesson-blueprint.ts';

export type TopicChapterSeed=readonly [
 title:string, explanation:string, workedExample:string,
 commonMistake:string, question:string, hint:string,
 workedSolution:string, mistakeCorrection:string
];
export type TopicSeed={
 subject:string;topic:string;objective:string;
 chapters:readonly [TopicChapterSeed,TopicChapterSeed,TopicChapterSeed];
 situation:readonly [context:string,question:string,answer:string];
 links:readonly [readonly [string,string,string],readonly [string,string,string]];
};
export function expandTopicSeed(seed:TopicSeed):LessonBlueprint{
 const chapters=seed.chapters.map((c):BlueprintChapter=>[
  c[0],c[1],c[2],c[3],
  'Releia o caso específico: '+c[2]+' Identifique qual condição do conceito justifica o resultado.',
  c[4],c[5],c[6],c[7]
 ]) as unknown as LessonBlueprint['chapters'];
 return {subject:seed.subject,topic:seed.topic,objective:seed.objective,chapters,situation:seed.situation,links:seed.links};
}
