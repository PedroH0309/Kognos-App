import {test} from 'node:test';
import assert from 'node:assert/strict';
import {safeOfficialUrl,parseImportSubmission,validateExtractedTopics,sourceFingerprint,editorAuthorized,matchApprovedTopic} from './syllabus-sources.ts';
import {visibleCatalog} from './syllabus-catalog.ts';
import {validateGenerationRequest} from './exam-blueprints.ts';

const source='A matriz inclui: Matemática e suas Tecnologias. Resolver situações-problema envolvendo porcentagem e proporção no cotidiano. ';
const evidence='Resolver situações-problema envolvendo porcentagem e proporção no cotidiano.';
const id='d9cb53d2-2c17-49d1-80f3-7b3598e79941';
const sourceId='b1da3441-edf9-4a55-b219-ceeac848dbcd';
test('only institutional HTTPS source hosts and paths are allowed',()=>{
 assert.equal(safeOfficialUrl('https://www.gov.br/inep/pt-br/matrizes'),'https://www.gov.br/inep/pt-br/matrizes');
 assert.ok(safeOfficialUrl('https://www.fuvest.br/wp-content/uploads/fuvest2027-programa-vestibular.pdf'));
 for(const url of ['http://www.gov.br/file','https://www.gov.br.evil.com','https://fuvest.br.evil.org/a','https://127.0.0.1','file:///etc/passwd','https://a@www.gov.br/path','https://www.gov.br:444/a','https://www.gov.br%2eevil.org/a','https://localhost/a']){
  assert.equal(safeOfficialUrl(url),null,url);
 }
});
test('imports require a plausible official URL and a substantive manual transcript',()=>{
 const base={institution:'enem',edition:'Matriz 2026',sourceTitle:'Matriz ENEM oficial',sourceUrl:'https://www.gov.br/inep',method:'manual_transcript',transcript:source.repeat(5)};
 assert.equal(parseImportSubmission(base)?.institution,'enem');
 assert.equal(parseImportSubmission({...base,transcript:'texto curto'}),null);
 assert.equal(parseImportSubmission({...base,sourceUrl:'https://fake.example/matriz'}),null);
 assert.equal(parseImportSubmission({...base,method:'official_html',transcript:''})?.method,'official_html');
});
test('literal evidence validation prevents hallucinated or unsupported curricular topics',()=>{
 const raw=JSON.stringify({topics:[
  {subject:'Matemática',topic:'Porcentagem e proporção',evidence},
  {subject:'Matemática',topic:'Porcentagem e proporção',evidence},
  {subject:'Física',topic:'Matéria escura',evidence:'A prova de Física contém matéria escura'},
  {subject:'Artes Cênicas',topic:'Porcentagem e proporção',evidence}
 ]});
 assert.deepEqual(validateExtractedTopics(raw,source,'enem'),[{subject:'Matemática',topic:'Porcentagem e proporção',evidence}]);
 assert.deepEqual(validateExtractedTopics(JSON.stringify({topics:[]}),source,'enem'),[]);
 assert.throws(()=>validateExtractedTopics('não é JSON',source,'enem'));
});
test('fingerprint preserves source version and detects changed content',()=>{
 assert.equal(sourceFingerprint('texto   de\nmatriz'),sourceFingerprint('texto de matriz'));
 assert.notEqual(sourceFingerprint('texto de matriz'),sourceFingerprint('texto de edital'));
 assert.match(sourceFingerprint('texto'),/^[a-f0-9]{64}$/);
});
test('editor permission requires explicit authenticated UUID allowlist',()=>{
 assert.equal(editorAuthorized(id,id),true);
 assert.equal(editorAuthorized(id,sourceId),false);
 assert.equal(editorAuthorized('user-name',id),false);
 assert.equal(editorAuthorized(id,undefined),false);
});
test('only approved source and topic rows become public catalog items',()=>{
 const src={id:sourceId,institution:'enem' as const,edition:'Matriz 2026',source_title:'Matriz ENEM oficial',source_url:'https://www.gov.br/inep',source_method:'official_html' as const,review_status:'approved' as const,created_at:'2026-11-01'};
 const topic={id,source_id:sourceId,subject:'Matemática',topic:'Porcentagem e proporção',evidence_excerpt:evidence,review_status:'approved' as const};
 assert.equal(visibleCatalog([src],[topic]).length,1);
 assert.equal(visibleCatalog([{...src,review_status:'pending'}],[topic]).length,0);
 assert.equal(visibleCatalog([src],[{...topic,review_status:'pending'}]).length,0);
 assert.equal(matchApprovedTopic(visibleCatalog([src],[topic]),{id,institution:'enem',subject:'Matemática',topic:topic.topic})?.sourceId,sourceId);
 assert.equal(matchApprovedTopic(visibleCatalog([src],[topic]),{id,institution:'fuvest',subject:'Matemática',topic:topic.topic}),null);
});
test('generation does not permit arbitrary topics without a matching source ID',()=>{
 const base={institution:'enem',subject:'Matemática',topic:'Assunto que não existe nos mapas',difficulty:'basic',count:2};
 assert.equal(validateGenerationRequest(base),null);
 assert.equal(validateGenerationRequest({...base,sourceTopicId:id})?.sourceTopicId,id);
 assert.equal(validateGenerationRequest({...base,sourceTopicId:'not-a-uuid'}),null);
});