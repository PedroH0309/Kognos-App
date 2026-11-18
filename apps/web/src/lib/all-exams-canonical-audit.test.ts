import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/** Reproducible cross-exam editorial inventory. No official Inep competency
 * identifiers are inferred from Kognos titles or from syllabus similarity.
 */
test('audit all registered exam memberships without inflating semantic reuse', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const mappings = canonicalExamTopicMappings();
  const partials = semanticReviewQueue();
  const byExam = exams.map(exam => {
    const topics = curriculumTopics.filter(topic =>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
    const links = mappings.filter(link => link.exam === exam);
    const advisory = partials.filter(ref => ref.exam === exam);
    const topicIds = new Set(topics.map(topic => topic.id));
    const linkedIds = new Set(links.map(link => link.examTopicId));
    assert.equal(topicIds.size, topics.length, 'Repeated historical topic ID');
    assert.equal(linkedIds.size, links.length, 'Duplicate integral mapping');
    for (const link of links) {
      assert.ok(topicIds.has(link.examTopicId), 'Mapping outside exam');
      assert.equal(link.lesson.id, link.canonicalId);
    }
    for (const ref of advisory) {
      assert.ok(topicIds.has(ref.targetTopicId), 'Advisory outside exam');
      assert.equal(ref.eligibleForFullAlias, false);
      assert.ok(ref.missingScope.trim());
    }
    const bySubject = [...new Set(topics.map(t => t.subject))].sort().map(subject => {
      const entries = topics.filter(t => t.subject === subject);
      const subjectLinks = links.filter(link => link.subject === subject);
      const subjectPartials = advisory.filter(ref => ref.subject === subject);
      return {
        subject, entries: entries.length,
        exactTitles: new Set(entries.map(t => t.topic)).size,
        integralLinks: subjectLinks.length,
        canonicalDeepLessons: new Set(subjectLinks.map(link => link.canonicalId)).size,
        partialReferences: subjectPartials.length,
        partialOnlyTargets: new Set(subjectPartials.filter(ref =>
          !linkedIds.has(ref.targetTopicId)).map(ref => ref.targetTopicId)).size,
        gaps: entries.length - subjectLinks.length,
      };
    });
    assert.equal(bySubject.reduce((n, row) => n + row.entries, 0), topics.length);
    assert.equal(bySubject.reduce((n, row) => n + row.integralLinks, 0), links.length);
    return {
      exam, entries: topics.length,
      distinctExactTitles: new Set(topics.map(t => t.topic)).size,
      integralLinks: links.length,
      canonicalDeepLessons: new Set(links.map(link => link.canonicalId)).size,
      reviewedSemanticLinks: links.filter(link => link.mappingKind === 'reviewed-semantic').length,
      partialReferences: advisory.length,
      partialOnlyTargets: new Set(advisory.filter(ref =>
        !linkedIds.has(ref.targetTopicId)).map(ref => ref.targetTopicId)).size,
      gaps: topics.length - links.length,
      bySubject,
    };
  });
  const uniqueCanonicalIds = new Set(mappings.map(link => link.canonicalId));
  const crossExamCanonicalIds = [...uniqueCanonicalIds].filter(id =>
    new Set(mappings.filter(link => link.canonicalId === id).map(link => link.exam)).size > 1);
  for (const id of crossExamCanonicalIds) {
    const shared = mappings.filter(link => link.canonicalId === id);
    for (const link of shared) assert.strictEqual(link.lesson, shared[0].lesson);
  }
  const report = {
    provenance: 'Kognos editorial blueprints; not the official Inep competency matrix',
    exams: byExam,
    totalExamTopicLinks: mappings.length,
    uniqueCanonicalDeepLessonsAcrossExams: uniqueCanonicalIds.size,
    verifiedCrossExamCanonicalGroups: crossExamCanonicalIds.length,
    repeatedExamLessonReferences: mappings.length - uniqueCanonicalIds.size,
    // This is reference reuse, NOT a measured count of deleted duplicate texts.
    removedDuplicateLessonCopiesVerified: null,
  };
  assert.equal(byExam.reduce((n, row) => n + row.integralLinks, 0), mappings.length);
  process.stdout.write('KOGNOS_ALL_EXAMS_EDITORIAL_AUDIT ' + JSON.stringify(report) + '\n');
});
