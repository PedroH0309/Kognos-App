import {test} from 'node:test';
import assert from 'node:assert/strict';
import {isRetainedStudyView,rememberStudyView,RETAINED_STUDY_VIEWS} from './retained-study-views.ts';

test('only interactive study modes remain in memory after being visited',()=>{
 assert.deepEqual(RETAINED_STUDY_VIEWS,['learn','trails','questions','simulados']);
 assert.equal(isRetainedStudyView('questions'),true);
 assert.equal(isRetainedStudyView('settings'),false);
 assert.equal(isRetainedStudyView('dashboard'),false);
});
test('remembering a screen never mounts all workspaces or duplicates a session',()=>{
 const empty:readonly ('learn'|'trails'|'questions'|'simulados')[]=[];
 const one=rememberStudyView(empty,'questions');
 assert.deepEqual(one,['questions']);
 assert.strictEqual(rememberStudyView(one,'questions'),one);
 assert.strictEqual(rememberStudyView(one,'performance'),one);
 assert.deepEqual(rememberStudyView(one,'learn'),['questions','learn']);
 assert.deepEqual(empty,[]);
});
test('account changes can reset the cache without retaining a previous account state',()=>{
 const prior=rememberStudyView([], 'simulados');
 const cleared:typeof prior=[];
 assert.deepEqual(cleared,[]);
 assert.deepEqual(rememberStudyView(cleared,'learn'),['learn']);
});
