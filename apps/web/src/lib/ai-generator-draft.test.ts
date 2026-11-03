import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseGeneratorDraft,readGeneratorDraft,saveGeneratorDraft} from './ai-generator-draft.ts';
const original={institution:'enem',subject:'Matemática',topic:'Porcentagem e razão',difficulty:'intermediate',count:'1',bankScope:'topic'};
test('restore only a complete, supported generator draft',()=>{
 assert.deepEqual(parseGeneratorDraft(original),original);
 assert.equal(parseGeneratorDraft({...original,topic:'Não existe'}),null);
 assert.equal(parseGeneratorDraft({...original,subject:'Outro'}),null);
 assert.equal(parseGeneratorDraft({...original,count:'1000'}),null);
 assert.equal(parseGeneratorDraft({...original,bankScope:'private'}),null);
});
test('drafts are scoped by user and never store arbitrary data',()=>{
 const map=new Map<string,string>();
 const storage={getItem:(k:string)=>map.get(k)??null,setItem:(k:string,v:string)=>{map.set(k,v);}};
 saveGeneratorDraft(storage,'a',original as any);
 assert.deepEqual(readGeneratorDraft(storage,'a'),original);
 assert.equal(readGeneratorDraft(storage,'b'),null);
 saveGeneratorDraft(storage,'a',{...original,topic:'Invalid'} as any);
 assert.deepEqual(readGeneratorDraft(storage,'a'),original);
});
test('storage failure leaves valid defaults available',()=>{
 assert.equal(readGeneratorDraft({getItem:()=>{throw Error('blocked');}},'a'),null);
 assert.doesNotThrow(()=>saveGeneratorDraft({setItem:()=>{throw Error('blocked');}},'a',original as any));
});
