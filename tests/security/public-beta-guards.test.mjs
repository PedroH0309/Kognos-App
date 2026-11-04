import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const read = relative => readFile(new URL('../../'+relative,import.meta.url),'utf8');

test('editorial admin API checks authorization on every method',async()=>{
 const route=await read('apps/web/src/app/api/content/admin/route.ts');
 assert.equal((route.match(/await contentAdmin\(request\)/g)||[]).length,2,
  'Both GET and POST must verify the server-side admin membership');
 const server=await read('apps/web/src/lib/content-server.ts');
 assert.match(server,/db\.auth\.getUser\(token\)/);
 assert.match(server,/\.from\('kognos_content_admins'\)/);
 assert.match(server,/status|403/);
 assert.doesNotMatch(server,/userId:identity\.user\.id/);
});

test('Tutor Kog must reserve a database quota before every provider request',async()=>{
 const route=await read('apps/web/src/app/api/tutor/route.ts');
 const reservation=route.indexOf("rpc('reserve_ai_quota'");
 const paidCall=route.indexOf("await requestAI('tutor'");
 assert.ok(reservation>=0,'Quota reservation is missing');
 assert.ok(paidCall>reservation,'Provider invoked before quota reservation');
 assert.match(route,/if\(quotaError\)return jsonError/);
 assert.match(route,/if\(!reserved\)return jsonError/);
 assert.match(route,/if \(!isAIJobConfigured\('tutor'\)\)/);
});
