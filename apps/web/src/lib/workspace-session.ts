/** Workspace navigation is tab-scoped and user-scoped.
 * Credential refreshes must not reinitialize an already authenticated account. */
const PREFIX='kognos_workspace_view_v1:';
export const RESTORABLE_WORKSPACE_VIEWS=[
  'dashboard','learn','trails','subjects','questions','simulados','sources',
  'diagnostic','plans','reviews','calendar','performance','achievements','profile','settings'
] as const;
export type RestorableWorkspaceView=typeof RESTORABLE_WORKSPACE_VIEWS[number];
export function isSameAuthenticatedAccount(currentId:string|null,nextId:string|null):boolean {
 return currentId!==null && nextId!==null && currentId===nextId;
}
export function readWorkspaceView(storage:Pick<Storage,'getItem'>,userId:string):RestorableWorkspaceView {
 try{
  const value=storage.getItem(PREFIX+userId);
  return RESTORABLE_WORKSPACE_VIEWS.find(v=>v===value)??'dashboard';
 }catch{return 'dashboard';}
}
export function saveWorkspaceView(storage:Pick<Storage,'setItem'>,userId:string,view:string):void {
 if(!RESTORABLE_WORKSPACE_VIEWS.some(v=>v===view))return;
 try{storage.setItem(PREFIX+userId,view);}catch{/* Private mode or restricted storage. */}
}
