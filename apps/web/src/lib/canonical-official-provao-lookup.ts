/** Exact official Provão leaf lookup. Never infer grade membership from title similarity.
 * The returned lesson is the canonical authored object, not a copy or user state.
 */
import {officialProvaoCanonicalGradeMappings} from './canonical-lesson-reuse.ts';

export function canonicalOfficialProvaoLesson(
 grade:1|2|3, subject:string, officialCode:string, officialTitle:string
){
 const mapping=officialProvaoCanonicalGradeMappings().find(item=>
  item.grade===grade&&item.subject===subject&&
  item.officialCode===officialCode&&item.officialTitle===officialTitle);
 return mapping??null;
}
