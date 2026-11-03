/** Workspaces with potentially in-progress student work.
 * They mount only after first use and stay mounted across internal navigation.
 * This cache is React memory only: it is cleared on account changes, sign-out
 * and full reload, and does not replace persisted, server-graded exam attempts.
 */
export const RETAINED_STUDY_VIEWS=['learn','trails','questions','simulados'] as const;
export type RetainedStudyView=typeof RETAINED_STUDY_VIEWS[number];

export function isRetainedStudyView(view:string):view is RetainedStudyView{
 return (RETAINED_STUDY_VIEWS as readonly string[]).includes(view);
}
export function rememberStudyView(
 previous:readonly RetainedStudyView[],view:string
):readonly RetainedStudyView[]{
 if(!isRetainedStudyView(view)||previous.includes(view))return previous;
 return [...previous,view];
}
