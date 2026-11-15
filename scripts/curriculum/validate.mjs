import {readFileSync} from 'node:fs';
import {authoredLessonQualityIssues,authoredLessonMetrics} from '../../apps/web/src/lib/authored-lesson-quality.ts';

try{
 const lesson=JSON.parse(readFileSync(0,'utf8'));
 process.stdout.write(JSON.stringify({issues:authoredLessonQualityIssues(lesson),metrics:authoredLessonMetrics}));
}catch{
 process.stdout.write(JSON.stringify({issues:['lesson: JSON inválido']}));
 process.exitCode=1;
}
