'use client';
import {AlertCircle,ArrowRight,RefreshCw,Settings2} from 'lucide-react';
import {integrationState,integrationTitle} from '@/lib/integration-feedback';
import {useServerReadiness} from '@/lib/use-server-readiness';

/** Non-sensitive provider readiness notice shared with the AI question generator. */
export default function IntegrationSetupNotice({readiness}:{readiness:ReturnType<typeof useServerReadiness>}){
 const {status,loading,error,refresh}=readiness;
 const state=status?integrationState(status):null;
 if(loading&&!status)return <p className="k-integration-check" role="status"><RefreshCw size={14}/> Verificando a conexão de IA…</p>;
 if(state==='ready')return null;
 return <section className="k-integration-notice" role="status" aria-label="Configuração da IA">
  <div className="k-integration-summary">
   <span className="k-integration-icon"><AlertCircle size={18}/></span>
   <div className="k-integration-copy"><strong>{state?integrationTitle(state):'Não foi possível conferir a conexão'}</strong>
    <p>{error||'A geração ficará disponível depois que o servidor encontrar as credenciais. Seu banco de questões existente não será apagado.'}</p>
   </div>
   <button type="button" className="k-integration-retry" disabled={loading} onClick={()=>void refresh()}><RefreshCw size={14}/> {loading?'Verificando…':'Verificar novamente'}</button>
  </div>
  <details className="k-integration-details"><summary><Settings2 size={14}/> Como configurar no VS Code</summary>
   <div><p>Preencha <code>apps/web/.env.local</code> com as variáveis privadas que faltam e reinicie <code>npm run dev</code>.</p>
    <div className="k-integration-variable-list">
     {(!status||!status.supabaseServerConfigured)&&<span><strong>Supabase:</strong> <code>SUPABASE_URL</code>, <code>SUPABASE_PUBLISHABLE_KEY</code>, <code>SUPABASE_SECRET_KEY</code>, <code>SUPABASE_JWKS_URL</code></span>}
     {(!status||!status.nvidiaKeyConfigured)&&<span><strong>NVIDIA:</strong> <code>NVIDIA_API_KEY</code></span>}
    </div>
    <p>Não envie chaves privadas pelo chat ou GitHub. Este teste confirma apenas a presença das variáveis, não a validade das chaves.</p>
    <a href="https://github.com/PedroH0309/Kognos-App/blob/main/apps/web/.env.example" target="_blank" rel="noopener noreferrer">Ver modelo de configuração <ArrowRight size={13}/></a>
   </div>
  </details>
 </section>;
}