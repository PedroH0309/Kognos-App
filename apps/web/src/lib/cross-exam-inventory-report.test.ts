import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, canonicalCoverageByExam,
  partialCoverageByExam, semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/** Reproducible editorial inventory; NOT an official Inep skill mapping. */
test('cross-exam canonical inventory reconciles every exam and reports shared sources', () => {
  const links = canonicalExamTopicMappings();
  const coverage = canonicalCoverageByExam();
  const partial = partialCoverageByExam();
  const queue = semanticReviewQueue();
  const exams = Object.keys(examBlueprints) as ExamId[];
  const report = exams.map(exam => {
    const subjects = Object.entries(examBlueprints[exam].subjects).map(([subject, titles]) => {
      const ids = titles.map(title => {
        const topic = curriculumTopics.find(t => t.subject === subject && t.topic === title);
        assert.ok(topic, 'Missing editorial topic: ' + exam + '/' + subject + '/' + title);
        return topic.id;
      });
      assert.equal(new Set(ids).size, ids.length, 'Duplicate historical topic in ' + exam + '/' + subject);
      const deep = links.filter(link => link.exam === exam && ids.includes(link.examTopicId));
      const advisories = partial[exam].filter(link => ids.includes(link.examTopicId));
      for (const advisory of advisories) {
        assert.equal(advisory.fullyCovered, false);
        assert.ok(advisory.missingScope.trim());
      }
      return {subject, entries: ids.length, distinctTitles: new Set(titles).size,
        deepLinks: deep.length, partialAdvisories: advisories.length,
        gaps: ids.length - deep.length};
    });
    const total = subjects.reduce((sum, s) => sum + s.entries, 0);
    const deep = subjects.reduce((sum, s) => sum + s.deepLinks, 0);
    assert.equal(total, coverage[exam].total);
    assert.equal(deep, coverage[exam].deep);
    assert.equal(total - deep, coverage[exam].missing);
    return {exam, total, distinctTitlesBySubject: subjects.reduce((sum, s) => sum + s.distinctTitles, 0),
      deepLinks: deep, uniqueCanonicalIds: new Set(links.filter(l => l.exam === exam).map(l => l.canonicalId)).size,
      partialAdvisories: subjects.reduce((sum, s) => sum + s.partialAdvisories, 0),
      gaps: total - deep, subjects};
  });
  const groups = new Map<string, Set<ExamId>>();
  for (const link of links) {
    const examsForSource = groups.get(link.canonicalId) ?? new Set<ExamId>();
    examsForSource.add(link.exam);
    groups.set(link.canonicalId, examsForSource);
  }
  const sharedCanonicalSources = [...groups].filter(([, exams]) => exams.size > 1).length;
  const totalLinks = links.length;
  assert.ok(sharedCanonicalSources <= groups.size);
  assert.ok(totalLinks >= groups.size);
  process.stdout.write('KOGNOS_CROSS_EXAM_INVENTORY ' + JSON.stringify({
    provenance: 'Kognos editorial blueprints; no official Inep skill certification',
    totalExamTopicLinks: totalLinks, uniqueCanonicalSources: groups.size,
    sharedCanonicalSources, reusedLinksBeyondUniqueSources: totalLinks - groups.size,
    semanticReviewQueueItems: queue.length,
    // This is source reuse, not a claim that duplicate authored texts were deleted.
    authoredDuplicatesRemoved: null,
    exams: report
  }) + '\n');
});
