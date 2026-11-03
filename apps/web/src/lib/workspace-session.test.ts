import {test} from 'node:test';
import assert from 'node:assert/strict';
import {isSameAuthenticatedAccount,readWorkspaceView,saveWorkspaceView} from './workspace-session.ts';

test('same-account SIGNED_IN is not a new login',()=>{
 assert.equal(isSameAuthenticatedAccount('abc','abc'),true);
 assert.equal(isSameAuthenticatedAccount(null,'abc'),false);
 assert.equal(isSameAuthenticatedAccount('abc','def'),false);
 assert.equal(isSameAuthenticatedAccount('abc',null),false);
});
test('restores per-user navigation and keeps separate tabs independent',()=>{
 const values=new Map<string,string>();
 const storage={getItem:(k:string)=>values.get(k)??null,setItem:(k:string,v:string)=>{values.set(k,v);}};
 saveWorkspaceView(storage,'student-a','questions');
 saveWorkspaceView(storage,'student-b','plans');
 assert.equal(readWorkspaceView(storage,'student-a'),'questions');
 assert.equal(readWorkspaceView(storage,'student-b'),'plans');
 assert.equal(readWorkspaceView(storage,'student-c'),'dashboard');
 saveWorkspaceView(storage,'student-a','not-a-page');
 assert.equal(readWorkspaceView(storage,'student-a'),'questions');
});
test('invalid and restricted browser storage fail safely',()=>{
 const storage={getItem:()=> 'deleted-view',setItem:()=>{throw new Error('restricted');}};
 assert.equal(readWorkspaceView(storage,'abc'),'dashboard');
 assert.doesNotThrow(()=>saveWorkspaceView(storage,'abc','questions'));
 assert.equal(readWorkspaceView({getItem:()=>{throw new Error('blocked');}},'abc'),'dashboard');
});
