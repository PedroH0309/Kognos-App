import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {canonicalLessonForExam,canonicalExamTopicMappings,verifiedCanonicalLessonLinks} from './canonical-lesson-reuse.ts';

// A canonical audit must reference the same authored object exposed to readers.
// This prevents an inventory from silently rebuilding copies of the lesson.
test('shared cross-exam inventory reuses the runtime canonical lesson instance',()=>{
  const mappings=canonicalExamTopicMappings();
  const links=verifiedCanonicalLessonLinks();
  assert.ok(links.length>0,'expected at least one verified shared exact-scope lesson');
  for(const link of links){
    assert.ok(link.exams.length>=2);
    for(const exam of link.exams){
      const mapping=mappings.find(item=>item.exam===exam&&item.examTopicId===link.canonicalId);
      assert.ok(mapping,`missing registered mapping for ${exam}/${link.canonicalId}`);
      assert.strictEqual(mapping.lesson,link.lesson);
      const topic=curriculumTopics.find(item=>item.id===link.canonicalId);
      assert.ok(topic);
      assert.strictEqual(canonicalLessonForExam(exam,topic),link.lesson);
    }
  }
});
