import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {reviewedPartialAssociations, provaoSourcedPartialReferences, provaoPartialReferencesByExam, canonicalLessonForExam, reviewedSemanticAliases} from './canonical-lesson-reuse.ts';

const titles=['Variação linguística e norma-padrão','Morfologia e classes de palavras','Concordância, regência e crase'];
test('three morphology and language overlaps remain explicitly partial, never full aliases',()=>{
  const entries=reviewedPartialAssociations.filter(row=>titles.includes(row.targetTitle));
  assert.equal(entries.length,3);
  for(const row of entries){
    assert.ok(row.coveredScope.length>30);
    assert.ok(row.missingScope.length>30);
    assert.ok(!reviewedSemanticAliases.some(alias=>alias.subject===row.subject&&alias.targetTitle===row.targetTitle));
  }
});
test('only registered exam memberships receive advisory references to existing deep sources',()=>{
  const references=provaoSourcedPartialReferences().filter(row=>titles.includes(row.targetTitle));
  const byExam=provaoPartialReferencesByExam();
  for(const ref of references){
    assert.equal(ref.fullyCovered,false);
    assert.equal(ref.lesson.id,ref.canonicalId);
    const target=curriculumTopics.find(row=>row.id===ref.targetTopicId);
    assert.ok(target);
    for(const exam of Object.keys(examBlueprints) as ExamId[]){
      const isMember:boolean=Boolean(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
      const matches:(typeof byExam)[ExamId]=byExam[exam].filter(row=>row.examTopicId===target.id&&row.canonicalId===ref.canonicalId);
      assert.equal(matches.length,isMember?1:0);
      if(matches.length){
        assert.strictEqual(matches[0].lesson,ref.lesson);
        assert.equal(matches[0].fullyCovered,false);
      }
    }
  }
});
