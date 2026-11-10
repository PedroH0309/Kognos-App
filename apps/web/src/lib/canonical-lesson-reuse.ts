/** Verified exact-scope cross-exam canonical lesson registry.
 * Exam blueprints are editorial orientations, not official equivalence certificates.
 * This registry never infers equivalence from shared tokens or a broad subject.
 * Historical topic IDs and persisted progress remain untouched.
 */
import {curriculumTopics, type CurriculumTopic} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';

export type CanonicalLessonLink={
  canonicalId:string;
  subject:string;
  title:string;
  exams:readonly ExamId[];
  topicIds:readonly string[];
  /** Multiple exam-topic references point to one authored lesson, not cloned lessons. */
  lesson:NonNullable<ReturnType<typeof deepProvaoLesson>>;
};

/** Only identical subject + full syllabus title can be automatically shared.
 * Semantically similar but differently scoped labels require an explicit human-reviewed alias.
 */
export function verifiedCanonicalLessonLinks():CanonicalLessonLink[]{
  const links:CanonicalLessonLink[]=[];
  for(const topic of curriculumTopics){
    const exams=(Object.keys(examBlueprints) as ExamId[]).filter(
      exam=>examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)
    );
    if(exams.length<2)continue;
    const lesson=deepProvaoLesson(topic);
    if(!lesson)continue;
    links.push({
      canonicalId:topic.id,subject:topic.subject,title:topic.topic,
      exams,topicIds:exams.map(()=>topic.id),lesson
    });
  }
  return links;
}

/** Preserve the historical curriculum topic ID and lesson content object.
 * Non-exact aliases are deliberately not guessed here.
 */
export function canonicalLessonForExam(exam:ExamId,topic:CurriculumTopic){
  if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic))return null;
  return deepProvaoLesson(topic);
}

export function canonicalReuseAudit(){
  const links=verifiedCanonicalLessonLinks();
  const examEntries=Object.fromEntries(
    (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
      exam,Object.values(examBlueprints[exam].subjects).reduce((sum,topics)=>sum+topics.length,0)
    ])
  );
  return {
    examEntries,
    distinctCurriculumTitles:curriculumTopics.length,
    verifiedExactScopeGroups:links.length,
    canonicalDeepLessons:links.length,
    verifiedExamLessonLinks:links.reduce((sum,link)=>sum+link.exams.length,0),
    avoidedDeepLessonCopies:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    /** No differently titled semantic aliases have yet been certified. */
    reviewedNonExactAliases:0
  };
}
