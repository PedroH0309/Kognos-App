import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch41Core} from './provao-depth-batch41-core.ts';

/** Original Kognos editorial regression: examples must have specific reproducible steps. */
test('batch 41 has fifteen distinct topic-specific worked walkthroughs',()=>{
 assert.equal(provaoDepthBatch41Core.length,5);
 const allSteps:string[]=[];
 for(const spec of provaoDepthBatch41Core){
  assert.equal(spec.sections.length,3, spec.topicStart);
  for(const section of spec.sections){
   assert.equal(section.steps?.length,3, spec.topicStart+' / '+section.title);
   for(const step of section.steps??[]){
    assert.ok(step.length>=55, 'Short worked step: '+section.title);
    assert.doesNotMatch(step,/Identifique os conceitos e os dados do exemplo|Execute a comparação, cálculo ou interpretação|Verifique as condições de validade e a conclusão/);
    allSteps.push(step);
   }
  }
 }
 assert.equal(new Set(allSteps).size,45,'No worked step may be reused across chapters');
});
