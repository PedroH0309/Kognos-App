import { test } from 'node:test';
import assert from 'node:assert/strict';
import { quickPromptForView, subjectForView } from './kog-context.ts';

test('suggestions adapt to question and planning contexts without personal data',()=>{
  assert.match(quickPromptForView('questions','enem').join(' '),/questão/);
  assert.match(quickPromptForView('plans','school').join(' '),/tempo de estudo/);
  assert.equal(subjectForView('simulados'),'Geral');
});
test('global assistant has prompts for every product section',()=>{
  for(const section of ['dashboard','learn','trails','subjects','questions','simulados','plans','reviews','calendar','performance','achievements','profile','settings','tutor'] as const){
    const options=quickPromptForView(section,'enem');
    assert.equal(options.length,3);
    assert.ok(options.every(text=>text.length>8 && text.length<180));
  }
});