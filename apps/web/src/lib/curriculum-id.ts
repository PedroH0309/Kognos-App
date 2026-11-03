// Topic identity is content-derived and stable when the syllabus is reordered.
export function courseId(subject:string,topic:string){
 let hash=2166136261;for(const c of `${subject}\0${topic}`){hash^=c.codePointAt(0)!;hash=Math.imul(hash,16777619);}
 return `course-${(hash>>>0).toString(16).padStart(8,'0')}`;
}
