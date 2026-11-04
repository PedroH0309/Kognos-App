'use client';
import {useState} from 'react';
import {evidenceExamples,evaluateEvidence,indicatorPercentage,presenceChecklist,type EvidenceCategory} from '@/lib/humanities-labs';
import {HumanitiesStage,HumanitiesSlider,HumanitiesField,ChoiceRow} from './HumanitiesLabCommon';

const workSituations=[
 {id:'formal',title:'Emprego formal (caso hipotético)',scenario:'Uma pessoa é contratada por uma empresa, com jornada registrada, remuneração acordada e representação coletiva disponível.',
  questions:['Como analisar jornada e segurança do trabalho?','Qual papel de instituições e sindicatos?','Como as condições variam entre setores?']},
 {id:'platform',title:'Trabalho por plataforma (caso hipotético)',scenario:'Uma pessoa realiza entregas mediadas por aplicativo, decide quando se conectar e não tem garantia de demanda em cada turno.',
  questions:['Como a plataforma influencia ritmo e remuneração?','Quais custos e riscos recaem sobre o trabalhador?','Que dados seriam necessários para avaliar condições reais?']},
 {id:'cooperative',title:'Cooperativa (caso hipotético)',scenario:'Um grupo organiza uma atividade produtiva por decisões compartilhadas, definindo critérios de participação e distribuição dos resultados.',
  questions:['Quem participa das decisões?','Como avaliar distribuição dos resultados?','O que diferencia o caso de uma empresa convencional?']}
] as const;
export function SociologyWorkLab(){
 const [index,setIndex]=useState(0),[factors,setFactors]=useState<string[]>([]);
 const [notes,setNotes]=useState('');
 const caseData=workSituations[index];
 const factorsList=['Renda','Jornada','Proteção social','Poder de decisão','Riscos','Representação coletiva'];
 const toggle=(factor:string)=>setFactors(prev=>prev.includes(factor)?prev.filter(v=>v!==factor):[...prev,factor]);
 return <HumanitiesStage subject="Sociologia" kind="sociology-work" title="Organização social do trabalho"
  description="Compare arranjos produtivos fictícios sem supor que uma única experiência descreva todos os trabalhadores de um setor.">
  <label className="k-humanities-select">Situação para estudo
   <select value={index} onChange={e=>{setIndex(Number(e.target.value));setFactors([]);setNotes('');}}>
    {workSituations.map((x,i)=><option key={x.id} value={i}>{x.title}</option>)}</select></label>
  <div className="k-humanities-insight"><small>CENÁRIO SIMULADO · SEM DADOS DE PESSOAS REAIS</small>
   <p>{caseData.scenario}</p></div>
  <h4>Dimensões que merecem investigação</h4>
  <div className="k-humanities-checks">{factorsList.map(factor=><label key={factor}>
   <input type="checkbox" checked={factors.includes(factor)} onChange={()=>toggle(factor)}/>{factor}</label>)}</div>
  <div className="k-humanities-question-list">{caseData.questions.map((question,i)=><p key={i}><strong>{i+1}.</strong> {question}</p>)}</div>
  <HumanitiesField label="Que evidência ou comparação ajudaria a compreender essa relação de trabalho?" value={notes} onChange={setNotes}/>
  <p className="k-humanities-subtext">{factors.length} de {factorsList.length} dimensões selecionadas. Essa contagem não mede conhecimento ou qualidade da análise.</p>
 </HumanitiesStage>;
}

const culturalCases=[
 {id:'ethnocentrism',text:'Uma pessoa afirma que uma comunidade deve abandonar todos os seus costumes apenas porque são diferentes dos da própria pessoa.',
  key:'etnocentrismo',explanation:'A afirmação toma os costumes de um grupo como padrão superior para julgar outro, sem investigação contextual.'},
 {id:'context',text:'Antes de interpretar uma celebração desconhecida, uma pesquisadora pergunta aos participantes o que ela significa em seu próprio contexto.',
  key:'escuta contextual',explanation:'A investigação procura compreender sentidos atribuídos pelos próprios participantes, sem dispensar análise crítica de direitos e relações de poder.'},
 {id:'stereotype',text:'Uma publicação atribui a todas as pessoas de um bairro a mesma característica negativa, sem apresentar dados.',
  key:'estereótipo',explanation:'A publicação generaliza uma característica sem fundamento sobre uma população heterogênea.'}
] as const;
export function SociologyCultureLab(){
 const [selected,setSelected]=useState(0),[answer,setAnswer]=useState('');
 const [reflection,setReflection]=useState('');
 const current=culturalCases[selected];
 return <HumanitiesStage subject="Sociologia" kind="sociology-culture" title="Cultura, identidades e estereótipos"
  description="Identifique julgamentos etnocêntricos, escuta contextual e generalizações indevidas em cenários autorais.">
  <label className="k-humanities-select">Situação para interpretar
   <select value={selected} onChange={e=>{setSelected(Number(e.target.value));setAnswer('');setReflection('');}}>
    {culturalCases.map((v,i)=><option key={v.id} value={i}>Cenário {i+1}</option>)}</select></label>
  <blockquote className="k-humanities-insight">{current.text}</blockquote>
  <h4>Qual conceito ajuda a interpretar a situação?</h4>
  <ChoiceRow label="Conceitos de análise sociológica" value={answer} onChange={setAnswer}
   items={[{value:'etnocentrismo',label:'Etnocentrismo'},{value:'escuta contextual',label:'Escuta contextual'},{value:'estereótipo',label:'Estereótipo'}]}/>
  {answer&&<p className="k-humanities-feedback" role="status">
   {answer===current.key?'Interpretação compatível com o cenário.':'Revise a situação e compare os sentidos dos conceitos.'} {current.explanation}</p>}
  <HumanitiesField label="Que informação adicional evitaria uma conclusão precipitada?" value={reflection} onChange={setReflection}
   placeholder="Identifique interlocutores, dados relevantes e limites de generalizações."/>
  <p className="k-humanities-subtext">O objetivo é analisar padrões de raciocínio, não classificar pessoas reais ou atribuir características a grupos sociais.</p>
 </HumanitiesStage>;
}

const participationMethods=[
 {id:'council',title:'Conselho escolar',purpose:'Debater propostas com representantes da comunidade escolar e registrar decisões e justificativas.'},
 {id:'consultation',title:'Consulta pública',purpose:'Coletar opiniões e argumentos com transparência sobre quem participou e quem ficou de fora.'},
 {id:'petition',title:'Abaixo-assinado',purpose:'Apresentar uma demanda coletiva a uma instituição; número de assinaturas não demonstra consenso universal.'}
] as const;
export function SociologyCitizenshipLab(){
 const [participants,setParticipants]=useState(80),[support,setSupport]=useState(48);
 const [method,setMethod]=useState(0);
 const [example,setExample]=useState(0),[category,setCategory]=useState('');
 const [proposal,setProposal]=useState('');
 const current=evidenceExamples[example];
 const selected=participationMethods[method];
 const validSupport=Math.min(support,participants);
 const fraction=indicatorPercentage(validSupport,participants)??0;
 const feedback=category?evaluateEvidence(current.id,category as EvidenceCategory):null;
 return <HumanitiesStage subject="Sociologia" kind="sociology-citizenship" title="Participação, cidadania e dados sociais"
  description="Interprete resultados de uma consulta fictícia e separe observação, hipótese e interpretação antes de formular uma proposta coletiva.">
  <div className="k-humanities-controls">
   <HumanitiesSlider label="Participantes da consulta simulada" value={participants} min={20} max={200} step={10} onChange={setParticipants}/>
   <HumanitiesSlider label="Participantes favoráveis" value={validSupport} min={0} max={participants} step={2} onChange={setSupport}/>
  </div>
  <div className="k-humanities-proportion" role="progressbar" aria-label="Percentual favorável na amostra fictícia"
   aria-valuemin={0} aria-valuemax={100} aria-valuenow={fraction}><span style={{width:fraction+'%'}}/></div>
  <div className="k-humanities-results">
   <div><span>Favoráveis nesta amostra</span><strong>{fraction.toLocaleString('pt-BR',{maximumFractionDigits:1})}%</strong></div>
   <div><span>Demais participantes</span><strong>{participants-validSupport}</strong></div></div>
  <p className="k-humanities-subtext">Dados inteiramente fictícios. Uma consulta não representa automaticamente toda uma cidade; seriam necessários método amostral, contexto e outras evidências.</p>
  <h4>Observação, hipótese ou interpretação?</h4>
  <label className="k-humanities-select">Afirmação didática
   <select value={example} onChange={e=>{setExample(Number(e.target.value));setCategory('');}}>
    {evidenceExamples.map((item,i)=><option value={i} key={item.id}>Afirmação {i+1}</option>)}
   </select></label>
  <div className="k-humanities-insight"><p>{current.text}</p></div>
  <ChoiceRow label="Natureza da afirmação" value={category} onChange={setCategory}
   items={[{value:'observacao',label:'Observação'},{value:'hipotese',label:'Hipótese'},{value:'interpretacao',label:'Interpretação'}]}/>
  {feedback&&<p className="k-humanities-feedback" role="status">
   {feedback.correct?'Classificação coerente.':'Revise o que foi observado e o que ainda requer verificação.'} {feedback.explanation}</p>}
  <h4>Planeje uma participação coletiva</h4>
  <label className="k-humanities-select">Mecanismo de participação<select value={method} onChange={e=>setMethod(Number(e.target.value))}>
   {participationMethods.map((v,i)=><option value={i} key={v.id}>{v.title}</option>)}</select></label>
  <p className="k-humanities-subtext">{selected.purpose}</p>
  <HumanitiesField label="Qual questão pública seria investigada e como ouvir opiniões divergentes?" value={proposal} onChange={setProposal}/>
  <p className="k-humanities-subtext">A atividade não organiza um processo político real, não coleta dados reais e não recomenda posicionamento partidário.</p>
 </HumanitiesStage>;
}
