import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resourceSnapshot,runResourceRequest,type ResourceResult} from './async-resource.ts';

test('a troca de conta ou saída nunca mostra os dados da conta anterior',()=>{
 const result={key:'alice',revision:0,data:{attempts:12},error:''};
 assert.deepEqual(resourceSnapshot('bob',0,result),{data:null,error:'',loading:true});
 assert.deepEqual(resourceSnapshot(null,0,result),{data:null,error:'',loading:false});
 assert.deepEqual(resourceSnapshot('alice',0,result),{data:{attempts:12},error:'',loading:false});
});

test('atualizar preserva os dados da mesma conta e remove o erro da consulta anterior',()=>{
 assert.deepEqual(resourceSnapshot('alice',1,{key:'alice',revision:0,data:42,error:'anterior'}),
  {data:42,error:'',loading:true});
});

test('uma resposta antiga é descartada mesmo quando o carregador ignora o cancelamento',async()=>{
 const first=new AbortController(),second=new AbortController();
 const published:ResourceResult<string>[]=[];
 let finish!:(value:string)=>void;
 const old=runResourceRequest('alice',0,()=>new Promise<string>(resolve=>{finish=resolve;}),first.signal,result=>published.push(result),'Falha');
 first.abort();
 await runResourceRequest('bob',0,async()=> 'bob',second.signal,result=>published.push(result),'Falha');
 finish('alice');
 await old;
 assert.deepEqual(published,[{key:'bob',revision:0,data:'bob',error:''}]);
});

test('o cancelamento de uma falha não apaga a consulta mais recente',async()=>{
 const controller=new AbortController();
 const published:ResourceResult<string>[]=[];
 let fail!:(reason:Error)=>void;
 const pending=runResourceRequest('alice',0,()=>new Promise<string>((_,reject)=>{fail=reject;}),controller.signal,result=>published.push(result),'Falha');
 controller.abort();fail(new Error('antiga'));
 await pending;
 assert.deepEqual(published,[]);
});

test('uma consulta já cancelada não começa nem publica estado',async()=>{
 const controller=new AbortController();controller.abort();
 await runResourceRequest('alice',0,async()=>{assert.fail('Não deve consultar');},controller.signal,()=>assert.fail('Não deve publicar'),'Falha');
});

test('o tempo limite cancela a requisição e publica um erro recuperável',async()=>{
 let signal:AbortSignal|undefined;
 const published:ResourceResult<string>[]=[];
 await runResourceRequest('alice',0,async(_,requestSignal)=>{
  signal=requestSignal;return new Promise<string>(()=>{});
 },new AbortController().signal,result=>published.push(result),'Tente novamente',10);
 assert.equal(signal?.aborted,true);
 assert.deepEqual(published,[{key:'alice',revision:0,data:null,error:'Tente novamente'}]);
});

test('erros desconhecidos usam uma mensagem pública e uma nova consulta pode recuperar',async()=>{
 const published:ResourceResult<number>[]=[];
 const scope=new AbortController();
 await runResourceRequest('alice',0,async()=>{throw {internal:'private'};},scope.signal,result=>published.push(result),'Falha ao consultar');
 await runResourceRequest('alice',1,async()=>7,scope.signal,result=>published.push(result),'Falha ao consultar');
 assert.equal(published[0].error,'Falha ao consultar');
 assert.deepEqual(published[1],{key:'alice',revision:1,data:7,error:''});
});
