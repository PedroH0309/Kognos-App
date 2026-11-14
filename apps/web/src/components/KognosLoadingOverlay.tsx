'use client';

/** Visual loading affordance shared by lazy workspaces and asynchronous study flows.
 * Its text is only in the accessible name, not a blocking banner saying "Carregando".
 * Uses kognos-kit skeleton primitives.
 */
export default function KognosLoadingOverlay({label = 'Carregando conteúdo', inline = false}: {
  label?: string;
  inline?: boolean;
}) {
  return (
    <div
      className={'ks-skeleton ks-skeleton-card' + (inline ? ' ks-inline' : ' ks-fixed ks-inset-0 ks-z-50')}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="ks-flex ks-items-center ks-justify-center ks-h-full" aria-label={label}>
        <div className="ks-flex ks-flex-col ks-items-center ks-gap-4 ks-p-6 ks-bg-surface-raised ks-rounded-lg ks-shadow-lg ks-w-64">
          <div className="ks-skeleton ks-skeleton-circle ks-w-12 ks-h-12 ks-animate-spin" aria-hidden="true" />
          <div className="ks-skeleton ks-skeleton-text ks-w-48 ks-h-5" aria-hidden="true" />
          <span className="ks-sr-only">Aguarde, preparando o conteúdo.</span>
        </div>
      </div>
    </div>
  );
}