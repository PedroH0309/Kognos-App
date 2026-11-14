'use client';
import {AlertCircle, ArrowRight, RefreshCw, Settings2} from 'lucide-react';
import {integrationState, integrationTitle} from '@/lib/integration-feedback';
import {useServerReadiness} from '@/lib/use-server-readiness';

/** Compact status for the bank's actual generation/review pipeline.
 * Server-only names are documentation; no environment values are sent here.
 */
export default function IntegrationSetupNotice({readiness}: {readiness: ReturnType<typeof useServerReadiness>}) {
 const {status, loading, error, refresh} = readiness;
 const state = status ? integrationState(status) : null;
 if (loading && !status) return <p className="k-integration-check" role="status"><RefreshCw size={14}/> Verificando a configuração do servidor…</p>;
 if (state === 'ready') return null;
 const needsDatabase = !status || !status.supabaseServerConfigured;
 const needsProvider = !status || !status.generatorCredentialsConfigured;
 return (
  <section className="k-integration-notice ks-card" role="status" aria-label="Configuração de IA e banco de dados">
    <div className="k-integration-summary">
     <span className="k-integration-icon ks-badge ks-badge-warning"><AlertCircle size={18}/></span>
     <div className="k-integration-copy">
      <strong>{state ? integrationTitle(state) : 'Não foi possível consultar a configuração do servidor'}</strong>
      <p>{error || 'A geração de questões está temporariamente indisponível. Isto não significa que as questões existentes foram apagadas.'}</p>
     </div>
     <button type="button" className="ks-button ks-button-secondary ks-button-sm" disabled={loading} onClick={() => void refresh()}>
      <RefreshCw size={14}/> {loading ? 'Verificando…' : 'Verificar novamente'}
     </button>
    </div>
    <details className="k-integration-details">
     <summary className="ks-flex ks-items-center ks-gap-2 ks-text-sm ks-cursor-pointer ks-text-muted">
      <Settings2 size={14}/> Como configurar no VS Code
     </summary>
     <div className="ks-mt-3 ks-space-y-2">
      <p className="ks-text-sm">No ambiente local, coloque as credenciais em <code>apps/web/.env.local</code> e reinicie <code>npm run dev</code>. No site publicado, configure as mesmas variáveis privadas no painel da hospedagem e faça uma nova implantação.</p>
      <div className="k-integration-variable-list ks-space-y-1 ks-text-sm">
       {needsDatabase && <span className="ks-flex ks-items-start ks-gap-2"><strong>Supabase:</strong> <code>SUPABASE_URL</code>, <code>SUPABASE_PUBLISHABLE_KEY</code>, <code>SUPABASE_SECRET_KEY</code> e <code>SUPABASE_JWKS_URL</code>.</span>}
       {needsProvider && (status?.freeOnlyMode !== false
        ? <span className="ks-flex ks-items-start ks-gap-2"><strong>IA em modo gratuito:</strong> configure <code>GROQ_API_KEY</code> ou <code>GEMINI_API_KEY</code>. Você pode configurar ambas para habilitar alternativas em caso de limite temporário. <code>NVIDIA_API_KEY</code> não é obrigatória neste modo.</span>
        : <span className="ks-flex ks-items-start ks-gap-2"><strong>IA em modo configurável:</strong> confira <code>AI_GENERATE_PROVIDER</code> e <code>AI_REVIEW_PROVIDER</code> e a chave correspondente ao provedor escolhido (<code>GROQ_API_KEY</code>, <code>GEMINI_API_KEY</code>, <code>NVIDIA_API_KEY</code> ou <code>OPENAI_API_KEY</code>).</span>)}
      </div>
      <p className="ks-text-sm ks-text-muted">Este diagnóstico confirma apenas que as variáveis necessárias estão preenchidas. Ele não testa autenticação, limites, funcionamento dos modelos ou acesso às tabelas. Nunca envie chaves privadas no chat ou no GitHub.</p>
      <a href="https://github.com/PedroH0309/Kognos-App/blob/main/apps/web/.env.example" target="_blank" rel="noopener noreferrer" className="ks-link ks-text-sm"><ArrowRight size={13}/> Ver modelo de configuração</a>
     </div>
    </details>
   </section>
 );
}