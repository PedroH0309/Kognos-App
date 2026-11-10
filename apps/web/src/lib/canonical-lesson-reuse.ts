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


/** No non-exact semantic alias is approved until BOTH real catalog entries,
 * their deep source and equivalent curricular scope have been verified.
 * The earlier rationalism/empiricism alias referenced a nonexistent target.
 */
export const reviewedSemanticAliases: readonly {
  subject:string;targetTitle:string;sourceTitle:string;rationale:string;
}[] = [];

export function reviewedCanonicalAliasForExam(exam:ExamId,topic:CurriculumTopic){
  if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic))return null;
  const alias=reviewedSemanticAliases.find(item=>item.subject===topic.subject&&item.targetTitle===topic.topic);
  if(!alias)return null;
  const source=curriculumTopics.find(item=>item.subject===alias.subject&&item.topic===alias.sourceTitle);
  if(!source)return null;
  const lesson=deepProvaoLesson(source);
  if(!lesson)return null;
  return {canonicalId:source.id,examTopicId:topic.id,lesson,scope:alias.rationale};
}

/** Preserve the historical curriculum topic ID and lesson content object.
 * Non-exact aliases are deliberately not guessed here.
 */
export function canonicalLessonForExam(exam:ExamId,topic:CurriculumTopic){
  if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic))return null;
  return deepProvaoLesson(topic)??reviewedCanonicalAliasForExam(exam,topic)?.lesson??null;
}

/** Exact per-exam coverage is measured against the actual registered blueprint.
 * One canonical topic may be counted in several exams, but is authored once.
 * No fuzzy/partial association is promoted to a completed deep lesson.
 */
export function canonicalCoverageByExam(){
  return Object.fromEntries((Object.keys(examBlueprints) as ExamId[]).map(exam=>{
    const topics=curriculumTopics.filter(topic=>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)
    );
    const deep=topics.filter(topic=>Boolean(canonicalLessonForExam(exam,topic)));
    const missing=topics.filter(topic=>!canonicalLessonForExam(exam,topic));
    return [exam,{
      total:topics.length,
      deep:deep.length,
      missing:missing.length,
      canonicalIds:[...new Set(deep.map(topic=>canonicalLessonForExam(exam,topic)!.id))],
      missingTopicIds:missing.map(topic=>topic.id)
    }];
  })) as Record<ExamId,{
    total:number;deep:number;missing:number;
    canonicalIds:string[];missingTopicIds:string[];
  }>;
}

export function canonicalReuseAudit(){
  const links=verifiedCanonicalLessonLinks();
  const coverageByExam=canonicalCoverageByExam();
  const examEntries=Object.fromEntries(
    (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
      exam,Object.values(examBlueprints[exam].subjects).reduce((sum,topics)=>sum+topics.length,0)
    ])
  );
  return {
    examEntries,
    coverageByExam,
    allUniqueDeepCanonicalIds:[...new Set(curriculumTopics.map(topic=>deepProvaoLesson(topic)?.id).filter((id):id is string=>Boolean(id)))].length,
    distinctCurriculumTitles:curriculumTopics.length,
    verifiedExactScopeGroups:links.length,
    canonicalDeepLessons:links.length,
    verifiedExamLessonLinks:links.reduce((sum,link)=>sum+link.exams.length,0),
    avoidedDeepLessonCopies:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    /** Counts represent shared references, not deleted or migrated database rows. */
    actualPersistedDuplicatesRemoved:0,
    potentialCopiesAvoidedByReference:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    uniqueExactTitlesByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,new Set(Object.entries(examBlueprints[exam].subjects)
          .flatMap(([subject,titles])=>titles.map(title=>subject+'\\0'+title))).size
      ])
    ),
    verifiedLinksByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,links.filter(link=>link.exams.includes(exam)).length
      ])
    ),
    /** Counts only confirmed deep-lesson references; no introductory outlines. */
    deepCurriculumTopics:curriculumTopics.filter(topic=>Boolean(deepProvaoLesson(topic))).length,
    missingDeepCurriculumTopics:curriculumTopics.filter(topic=>!deepProvaoLesson(topic)).length,
    /** Unreviewed semantic overlaps must not be reported as full coverage. */
    approvedPartialAssociations:0,
    /** No automated fuzzy matching is accepted as pedagogical equivalence. */
    unresolvedSemanticCandidates:0,
    /** No differently titled semantic aliases have yet been certified. */
    reviewedNonExactAliases:reviewedSemanticAliases.filter(alias=>curriculumTopics.some(t=>t.subject===alias.subject&&t.topic===alias.targetTitle)&&curriculumTopics.some(t=>t.subject===alias.subject&&t.topic===alias.sourceTitle&&deepProvaoLesson(t))).length
  };
}
