import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import postcss from 'postcss';

const root=fileURLToPath(new URL('../apps/web/src/',import.meta.url));
function files(directory){
 return readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?files(join(directory,entry.name)):[join(directory,entry.name)]);
}

test('os tokens não podem se invalidar com uma referência a si mesmos',()=>{
 const css=postcss.parse(readFileSync(join(root,'app/kognos-tokens.css'),'utf8'));
 css.walkDecls(declaration=>{
  if(declaration.prop.startsWith('--'))assert.ok(!declaration.value.includes(`var(${declaration.prop})`),`${declaration.prop} invalida seu próprio valor`);
 });
});

test('as classes estáticas do kit utilizadas pelos componentes possuem regras de estilo',()=>{
 const defined=new Set();
 for(const file of files(root).filter(file=>file.endsWith('.css'))){
  postcss.parse(readFileSync(file,'utf8')).walkRules(rule=>{
   for(const match of rule.selector.matchAll(/\.(ks-[\w-]+)/g))defined.add(match[1]);
  });
 }
 const missing=[];
 for(const file of files(root).filter(file=>file.endsWith('.tsx'))){
  for(const match of readFileSync(file,'utf8').matchAll(/\bks-[\w-]+/g)){
   if(!defined.has(match[0]))missing.push(`${match[0]} em ${file.slice(root.length)}`);
  }
 }
 assert.deepEqual([...new Set(missing)],[]);
});
