/** Derived access presentation only: all editor authorization remains on the API server. */
export type SourceWorkspaceState = 'guest' | 'loading' | 'error' | 'reader' | 'editor';

export function getSourceWorkspaceState(input:{authenticated:boolean;loading:boolean;loaded:boolean;error:string;editor:boolean}):SourceWorkspaceState{
 if(!input.authenticated)return 'guest';
 if(input.loading)return 'loading';
 if(input.error)return 'error';
 if(!input.loaded)return 'loading';
 return input.editor?'editor':'reader';
}

/** Counts reflect rows returned by the current authenticated catalog request only. */
export function sourceWorkspaceMetrics(
 approved:readonly {institution:string}[],
 pending:readonly {id:string}[],
 sources:readonly {id:string}[]
){
 return {
  approved:approved.length,
  sources:new Set(sources.map(x=>x.id)).size,
  pending:pending.length,
  institutions:new Set(approved.map(x=>x.institution)).size,
 };
}