'use client';
import {useState} from 'react';
import {argumentChecklist,interventionChecklist} from '@/lib/language-labs';
import {LanguageStage,WritingField} from './LanguageLabCommon';

const themes=[
 {id:'libraries',topic:'A ampliação do acesso a espaços públicos de leitura',focus:'Acesso a bibliotecas e leitura em comunidades'},
 {id:'digital',topic:'O uso responsável das tecnologias digitais na educação',focus:'Tecnologias, aprendizagem e responsabilidade'},
 {id:'mobility',topic:'A importância da mobilidade urbana sustentável',focus:'Transportes, espaço urbano e sustentabilidade'}
] as const;
export function EssayThemeLab(){
 const [theme,setTheme]=useState(0),[angle,setAngle]=useState(''),[thesis,setThesis]=useState(''),[example,setExample]=useState('');
 const selected=themes[theme];
 return <LanguageStage subject="Redação" kind="essay-theme" title="Recorte e atendimento ao tema"
  description="Interprete uma proposta autoral e delimite o assunto antes de defender uma tese. Não é uma redação oficial.">
  <label className="k-language-writing-field">Proposta para treino
   <select value={theme} onChange={e=>{setTheme(Number(e.target.value));setAngle('');setThesis('');setExample('');}}>
    {themes.map((t,i)=><option key={t.id} value={i}>{t.topic}</option>)}
   </select></label>
  <div className="k-language-reflection">
   <span className="k-language-eyebrow">TEMA PROPOSTO — EXEMPLO AUTORAL</span>
   <blockquote className="k-language-example">{selected.topic}</blockquote>
   <p><strong>Eixo temático:</strong> {selected.focus}.</p>
   <WritingField label="Qual recorte específico você pretende analisar?" value={angle} onChange={setAngle}
    placeholder="Delimite o contexto, o público ou o problema que será discutido."/>
   <WritingField label="Que tese você defenderia?" value={thesis} onChange={setThesis}
    placeholder="Escreva uma posição debatível sobre o recorte escolhido."/>
   <WritingField label="Que evidência seria pertinente pesquisar?" value={example} onChange={setExample}
    placeholder="Descreva uma fonte confiável que você precisaria consultar; não invente estatísticas."/>
   <div className="k-language-checklist" aria-label="Campos preenchidos">
    <p><span>{angle.trim()?'✓':'○'}</span> Recorte preenchido</p>
    <p><span>{thesis.trim()?'✓':'○'}</span> Tese registrada</p>
    <p><span>{example.trim()?'✓':'○'}</span> Evidência a pesquisar</p>
   </div>
   <p className="k-language-mini-note">Os indicadores mostram apenas se há texto em cada campo. Não avaliam pertinência ao tema nem qualidade da argumentação.</p>
  </div>
 </LanguageStage>;
}
export function EssayStructureLab(){
 const [thesis,setThesis]=useState(''),[reason,setReason]=useState('');
 const [evidence,setEvidence]=useState(''),[connection,setConnection]=useState('');
 const [conclusion,setConclusion]=useState('');
 const status=argumentChecklist({thesis,reason,evidence,connection});
 return <LanguageStage subject="Redação" kind="essay-structure" title="Oficina de argumentos e parágrafos"
  description="Construa uma tese e organize a progressão lógica entre argumento, evidência, análise e conclusão.">
  <div className="k-language-reflection">
   <h4>Planejamento do texto dissertativo-argumentativo</h4>
   <div className="k-language-writing-grid">
    <WritingField label="1. Tese — o que defendo?" value={thesis} onChange={setThesis} placeholder="Minha posição central é..."/>
    <WritingField label="2. Argumento — por quê?" value={reason} onChange={setReason} placeholder="Uma razão para defender essa tese é..."/>
    <WritingField label="3. Evidência — como sustentar?" value={evidence} onChange={setEvidence} placeholder="Uma fonte ou exemplo verificável seria..."/>
    <WritingField label="4. Análise — como conectar?" value={connection} onChange={setConnection} placeholder="Essa evidência se relaciona à tese porque..."/>
    <WritingField label="5. Síntese ou conclusão" value={conclusion} onChange={setConclusion} placeholder="Portanto, o raciocínio apresentado indica..."/>
   </div>
   <h4>Prévia de estrutura</h4>
   <div className="k-language-preview" aria-live="polite">
    <p><strong>Tese:</strong> {thesis||'Ainda não registrada.'}</p>
    <p><strong>Desenvolvimento:</strong> {reason||'Argumento pendente.'} {evidence&&'Evidência proposta: '+evidence+'.'} {connection}</p>
    <p><strong>Conclusão:</strong> {conclusion||'Síntese pendente.'}</p>
   </div>
   <div className="k-language-checklist"><p>{status.present.length} de 4 campos argumentativos preenchidos.</p>
    <p>{conclusion.trim()?'Conclusão registrada.':'Inclua uma síntese para completar o planejamento.'}</p></div>
   <p className="k-language-mini-note">A prévia não transforma automaticamente fragmentos em uma redação corrigida; revise coesão, informações e progressão argumentativa.</p>
  </div>
 </LanguageStage>;
}
const options={
 contrast:{connector:'Entretanto',label:'Contraste',sample:'A leitura digital ampliou o acesso a textos. Entretanto, nem todos possuem conexão estável.',reason:'Entretanto introduz contraste.'},
 cause:{connector:'Porque',label:'Causa',sample:'A biblioteca permaneceu aberta porque houve colaboração da comunidade.',reason:'Porque explica uma causa.'},
 consequence:{connector:'Por isso',label:'Consequência',sample:'A escola ampliou o horário de funcionamento. Por isso, mais turmas puderam utilizar a biblioteca.',reason:'Por isso introduz uma consequência.'}
};
export function EssayCohesionLab(){
 const [relation,setRelation]=useState<keyof typeof options>('contrast');
 const [reviewed,setReviewed]=useState([false,false,false,false]);
 const [paragraph,setParagraph]=useState('');
 const checklist=['Os períodos estão conectados de maneira lógica.','Evitei repetições desnecessárias e referências ambíguas.','Revisei concordância, pontuação e ortografia.','Verifiquei se não há contradições entre parágrafos.'];
 return <LanguageStage subject="Redação" kind="essay-cohesion" title="Coesão, coerência e revisão" description="Compare conectivos e realize uma revisão editorial de um parágrafo próprio.">
  <div className="k-language-reflection">
   <h4>O sentido do conectivo</h4>
   <div className="k-language-choice" role="group" aria-label="Relação lógico-semântica">
    {(Object.entries(options) as [keyof typeof options,typeof options[keyof typeof options]][]).map(([id,item])=>
     <button type="button" key={id} aria-pressed={relation===id} onClick={()=>setRelation(id)}>{item.label}</button>)}
   </div>
   <blockquote className="k-language-example">{options[relation].sample}</blockquote>
   <p className="k-language-mini-note">{options[relation].reason} O conectivo não garante, por si só, coerência entre ideias.</p>
   <WritingField label="Parágrafo para revisar" rows={6} value={paragraph} onChange={setParagraph}
    placeholder="Escreva seu próprio parágrafo argumentativo..."/>
   <h4>Checklist de revisão manual</h4>
   <div className="k-language-review-list">{checklist.map((item,i)=><label key={item}>
    <input type="checkbox" checked={reviewed[i]} onChange={e=>setReviewed(current=>current.map((v,j)=>j===i?e.target.checked:v))}/>
    {item}</label>)}</div>
   <p role="status" className="k-language-mini-note">{reviewed.filter(Boolean).length} de 4 itens marcados por você. Essas marcações não significam que o texto passou por revisão automática.</p>
  </div>
 </LanguageStage>;
}
export function EssayInterventionLab(){
 const [agent,setAgent]=useState(''),[action,setAction]=useState('');
 const [means,setMeans]=useState(''),[effect,setEffect]=useState(''),[detail,setDetail]=useState('');
 const result=interventionChecklist({agent,action,means,effect,detail});
 const clear=()=>{setAgent('');setAction('');setMeans('');setEffect('');setDetail('');};
 return <LanguageStage subject="Redação" kind="essay-intervention" title="Construção de proposta de intervenção"
  description="Organize agente, ação, meio, finalidade e detalhamento para produzir uma proposta pertinente à tese.">
  <div className="k-language-reflection">
   <p>Exemplo autoral de contexto: <strong>ampliação do acesso à leitura em espaços públicos</strong>. Use o esquema para montar uma intervenção sua, sem inventar órgãos ou medidas oficiais.</p>
   <div className="k-language-writing-grid">
    <WritingField label="Quem executa? (agente)" value={agent} onChange={setAgent} placeholder="Instituição ou grupo responsável..."/>
    <WritingField label="O que será feito? (ação)" value={action} onChange={setAction} placeholder="A medida concreta proposta..."/>
    <WritingField label="Como será executada? (meio)" value={means} onChange={setMeans} placeholder="Instrumentos ou formas de execução..."/>
    <WritingField label="Para alcançar quê? (efeito)" value={effect} onChange={setEffect} placeholder="Mudança pretendida..."/>
    <WritingField label="Qual detalhe torna a proposta mais específica?" value={detail} onChange={setDetail} placeholder="Periodicidade, local, público-alvo ou outra condição..."/>
   </div>
   <h4>Esboço editável da proposta</h4>
   <div className="k-language-preview" aria-live="polite">
    <p>{agent||'[Agente]'} poderá {action||'[ação]'}, por meio de {means||'[meio]'}, com o objetivo de {effect||'[efeito]'}. {detail&&'Detalhamento: '+detail+'.'}</p>
   </div>
   <p role="status" className="k-language-mini-note">{result.present.length} de 5 elementos preenchidos. É necessário revisar pertinência, viabilidade, direitos humanos e relação com a tese; não há nota automática.</p>
   <button type="button" className="k-language-secondary" onClick={clear}>Limpar rascunho</button>
  </div>
 </LanguageStage>;
}
