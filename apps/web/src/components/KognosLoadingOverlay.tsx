'use client';

/** Visual loading affordance shared by lazy workspaces and asynchronous study flows.
 * Its text is only in the accessible name, not a blocking banner saying "Carregando".
 */
export default function KognosLoadingOverlay({label='Carregando conteúdo',inline=false}:{
 label?:string;inline?:boolean;
}){
 return <div className={'k-ui-loading-layer'+(inline?' k-ui-loading-inline':'')} role="status" aria-live="polite" aria-label={label}>
  <span className="k-ui-loading-spinner" aria-hidden="true"/>
  <span className="k-ui-loading-sr">Aguarde, preparando o conteúdo.</span>
 </div>;
}
