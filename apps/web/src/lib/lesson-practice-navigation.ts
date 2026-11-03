import {learningLessons,type LearningLesson} from './learning-catalog.ts';

/** Route older demo-focused entry points to the exact authored lesson.
 * A subject/topic match alone is deliberately insufficient: this must be
 * the same canonical demonstration question attached to that lesson.
 */
export function lessonForPracticeFocus(
 focus:{subject:string;topic:string;questionId:string}
):LearningLesson|null {
 return learningLessons.find(lesson=>lesson.questionId===focus.questionId
  &&lesson.subject===focus.subject&&lesson.topic===focus.topic)??null;
}
