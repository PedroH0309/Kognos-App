import type { QuestionAttempt } from './demo-questions';

/** Separate demo tables keep client-graded sample questions away from official, server-graded assessments. */
export type StudyTask = {
  id: string;
  date: string;
  title: string;
  minutes: number;
  done: boolean;
  kind: 'manual' | 'suggested';
  subject: string;
  /** Optional local HH:mm. Legacy and AI-suggested tasks remain unscheduled. */
  startTime?: string;
};

export type TaskRow = {
  id: string; user_id: string; task_date: string; title: string;
  duration_minutes: number; done: boolean; kind: 'manual' | 'suggested'; subject: string;
  start_time?: string | null;
};

export type AttemptRow = {
  id: string; user_id: string; question_id: string; subject: string;
  answer_index: number; correct: boolean; mode: 'practice' | 'mock'; created_at: string;
};

export function taskFromRow(row: TaskRow): StudyTask {
  return {id:row.id, date:row.task_date, title:row.title, minutes:row.duration_minutes,
    done:row.done, kind:row.kind, subject:row.subject,
    ...(typeof row.start_time==='string'&&/^\\d{2}:\\d{2}/.test(row.start_time)?{startTime:row.start_time.slice(0,5)}:{})};
}
export function taskToRow(task: StudyTask, userId: string): TaskRow {
  return {id:task.id, user_id:userId, task_date:task.date, title:task.title,
    duration_minutes:task.minutes, done:task.done, kind:task.kind, subject:task.subject,
    ...(task.startTime?{start_time:task.startTime}:{} )};
}
export function attemptFromRow(row: AttemptRow): QuestionAttempt {
  return {questionId:row.question_id,subject:row.subject,correct:row.correct,
    answerIndex:row.answer_index,createdAt:row.created_at,mode:row.mode};
}
export function attemptToRow(attempt: QuestionAttempt, userId: string, id: string): AttemptRow {
  return {id,user_id:userId,question_id:attempt.questionId,subject:attempt.subject,
    answer_index:attempt.answerIndex,correct:attempt.correct,mode:attempt.mode,created_at:attempt.createdAt};
}
