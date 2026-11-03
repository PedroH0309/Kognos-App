import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('interactive workspaces are only created after first visit and survive navigation',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 const core=read('apps/web/src/lib/retained-study-views.ts');
 for(const view of ['learn','trails','questions','simulados']){
  assert.ok(app.includes(`retainedViews.includes('${view}')`),view);
  assert.ok(app.includes(`hidden={view!=='${view}'}`),view);
 }
 assert.match(app,/setRetainedViews\(previous=>rememberStudyView\(previous,view\)\)/);
 assert.match(app,/isRetainedStudyView\(view\)/);
 assert.match(core,/RETAINED_STUDY_VIEWS=\['learn','trails','questions','simulados'\]/);
 assert.ok(!core.includes('localStorage'), 'Live drafts must never be serialized by the cache');
});
test('account and sign-out events clear session-only mounted screens',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(app,/if\(!sameAccount\)setRetainedViews\(\[\]\)/);
 assert.match(app,/setAssistantInitialized\(false\);setRetainedViews\(\[\]\)/);
 assert.match(app,/key=\{\`\$\{user\.id\}-questions-/);
 assert.match(app,/key=\{\`\$\{user\.id\}-simulados\`\}/);
 const css=read('apps/web/src/app/kognos-clean-ui.css');
 assert.match(css,/\.k-retained-workspace\[hidden\]\{display:none!important\}/);
});
test('hidden workspaces do not overwrite the visible tutor context',()=>{
 const practice=read('apps/web/src/components/PracticeSpace.tsx');
 const lessons=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(practice,/active=true/);
 assert.match(lessons,/active=true/);
 assert.match(practice,/if\(!active\)return/);
 assert.match(lessons,/if\(!active\)return/);
 assert.match(practice,/onContextChange=\{visibleContext\}/);
 assert.match(practice,/if\(aiFocusLessonId\)setQuestionSource\('ai'\)/);
 assert.match(lessons,/visibleContext\(lesson&&lesson.subject===subject/);
});
test('critical exercise modules remain lazy loaded on the dashboard',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(app,/const PracticeSpace=dynamic\(\(\)=>import\('\.\/PracticeSpace'\),\{loading:/);
 assert.match(app,/const LearningTrails=dynamic\(\(\)=>import\('\.\/LearningTrails'\),\{loading:/);
 assert.match(app,/<AnimatedPage page=\{view\} disabled=\{disableAnimations\}>/);
 assert.match(app,/view==='performance'\?<PracticeSpace/);
});
