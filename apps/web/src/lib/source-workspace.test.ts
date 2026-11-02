import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getSourceWorkspaceState,sourceWorkspaceMetrics} from './source-workspace.ts';

test('a guest sees a login action, not a fake empty synced catalog',()=>{
 assert.equal(getSourceWorkspaceState({authenticated:false,loading:false,loaded:false,error:'',editor:false}),'guest');
});
test('pending requests never display stale editor access or stale counts',()=>{
 assert.equal(getSourceWorkspaceState({authenticated:true,loading:true,loaded:true,error:'',editor:true}),'loading');
 assert.equal(getSourceWorkspaceState({authenticated:true,loading:false,loaded:false,error:'Connection failed',editor:true}),'error');
});
test('editor status is only displayed after successful server-confirmed load',()=>{
 assert.equal(getSourceWorkspaceState({authenticated:true,loading:false,loaded:true,error:'',editor:true}),'editor');
 assert.equal(getSourceWorkspaceState({authenticated:true,loading:false,loaded:true,error:'',editor:false}),'reader');
});
test('summary counts source IDs only once and recognizes distinct institutions',()=>{
 assert.deepEqual(sourceWorkspaceMetrics([{institution:'enem'},{institution:'enem'},{institution:'fuvest'}],[{id:'t1'},{id:'t2'}],[{id:'s1'},{id:'s1'},{id:'s2'}]),{approved:3,sources:2,pending:2,institutions:2});
});