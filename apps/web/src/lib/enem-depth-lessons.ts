import {deepEnemLesson as batch01} from './enem-depth-batch01.ts';
import {deepEnemFoundationsLesson} from './enem-depth-batch02.ts';
import type {CurriculumTopic} from './curriculum-catalog.ts';

/** Authored sources retain their historical IDs and review status. */
export function deepEnemLesson(topic:CurriculumTopic){
 return batch01(topic)??deepEnemFoundationsLesson(topic);
}
