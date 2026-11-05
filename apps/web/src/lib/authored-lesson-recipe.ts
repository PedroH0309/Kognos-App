/** Etapa 19: author once, render through shared lesson schema.
 * This is a static editorial authoring convenience, not a text generator.
 * Every chapter explicitly supplies its theory, example, question and corrections.
 */
import type {LessonBlueprint,BlueprintChapter,BlueprintLink} from './authored-lesson-blueprint.ts';

export type AuthoredChapterSeed=readonly [
 title:string, explanation:string, example:string,
 misconception:string, question:string, hint:string,
 workedSolution:string, correction:string
];
export type AuthoredLessonSeed={
 subject:string;topic:string;objective:string;
 chapters:readonly [AuthoredChapterSeed,AuthoredChapterSeed,AuthoredChapterSeed];
 situation:readonly [context:string,question:string,solution:string];
 links:readonly [BlueprintLink,BlueprintLink];
};
export function expandAuthoredLesson(seed:AuthoredLessonSeed):LessonBlueprint{
 const chapters=seed.chapters.map((c):BlueprintChapter=>[
  c[0],c[1],c[2],c[3],
  'Reproduza a análise do exemplo "'+c[0]+'" e explique por que a regra não confirma a afirmação: '+c[3],
  c[4],c[5],c[6],c[7]
 ]) as unknown as LessonBlueprint['chapters'];
 return {subject:seed.subject,topic:seed.topic,objective:seed.objective,chapters,situation:seed.situation,links:seed.links};
}
