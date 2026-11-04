'use client';
import {useState} from 'react';
import {argumentSchemes,checkArgument,presenceChecklist} from '@/lib/humanities-labs';
import {HumanitiesStage,HumanitiesField,ChoiceRow} from './HumanitiesLabCommon';

export function PhilosophyLogicLab(){
 const [index,setIndex]=useState(0),[choice,setChoice]=useState<string|null>(null);
 const current=argumentSchemes[index];
 const verdict=choice===null?null:checkArgument(current.id,choice==='valid');
 return <HumanitiesStage subject="Filosofia" kind="philosophy-logic" title="Laboratório de argumentos e inferências"
  description="Reconstrua premissas e conclusão para identificar validade FORMAL; não confunda argumento válido com premissas verdadeiras.">
  <label className="k-humanities-select">Estrutura argumentativa
   <select value={index} onChange={e=>{setIndex(Number(e.target.value));setChoice(null);}}>
    {argumentSchemes.map((scheme,i)=><option value={i} key={scheme.id}>Exemplo {i+1}</option>)}</select></label>
  <div className="k-humanities-logic-flow">
   {current.premises.map((item,i)=><div key={i}><small>PREMISSA {i+1}</small><p>{item}</p></div>)}
   <div className="k-humanities-logic-conclusion"><small>CONCLUSÃO</small><p>{current.conclusion}</p></div>
  </div>
  <h4>A conclusão decorre necessariamente das premissas?</h4>
  <ChoiceRow label="Verifique a validade formal" value={choice??''} onChange={setChoice}
   items={[{value:'valid',label:'Argumento válido'},{value:'invalid',label:'Inferência inválida'}]}/>
  {verdict&&<div className="k-humanities-feedback" role="status">
   <strong>{verdict.correct?'Classificação correta':'Revise a estrutura lógica'}</strong>
   <p>{verdict.explanation}</p></div>}
  <p className="k-humanities-subtext">Esta ferramenta avalia quatro esquemas formais conhecidos, e não corrige automaticamente argumentos livres nem decide a veracidade das premissas.</p>
 </HumanitiesStage>;
}
const methods=[
 {id:'ordinary',label:'Senso comum',example:'Uma pessoa percebe que uma estratégia de estudo parece funcionar para ela.',
  question:'O relato permite uma generalização sobre todos os estudantes?',answer:'Não. Um caso pessoal pode gerar perguntas, mas não estabelece efeito geral.'},
 {id:'rational',label:'Raciocínio lógico',example:'Se todas as pessoas de um grupo têm a propriedade P e Joana pertence ao grupo, então Joana tem P.',
  question:'De onde vem a conclusão, supondo as premissas verdadeiras?',answer:'Da relação lógica entre premissas e conclusão. A validade não prova as premissas.'},
 {id:'empirical',label:'Investigação empírica',example:'Um grupo propõe comparar dois métodos de estudo, com registros, critérios e condições de observação.',
  question:'O que seria necessário para sustentar a hipótese?',answer:'Definir variáveis, coletar evidências, avaliar vieses e permitir revisão crítica do procedimento.'}
] as const;
export function PhilosophyKnowledgeLab(){
 const [method,setMethod]=useState(0),[revealed,setRevealed]=useState(false),[limit,setLimit]=useState('');
 const item=methods[method];
 return <HumanitiesStage subject="Filosofia" kind="philosophy-knowledge" title="Conhecimento: razões e evidências"
  description="Compare senso comum, análise racional e investigação empírica sem apresentar essas categorias como totalmente isoladas.">
  <ChoiceRow label="Abordagem do conhecimento" value={item.id} onChange={v=>{setMethod(Math.max(0,methods.findIndex(x=>x.id===v)));setRevealed(false);setLimit('');}}
   items={methods.map(x=>({value:x.id,label:x.label}))}/>
  <div className="k-humanities-insight">
   <small>EXEMPLO AUTORAL</small><p>{item.example}</p>
   <h4>{item.question}</h4>
   <button className="k-humanities-primary" type="button" onClick={()=>setRevealed(v=>!v)}>{revealed?'Ocultar análise':'Examinar raciocínio'}</button>
   {revealed&&<p className="k-humanities-feedback" role="status">{item.answer}</p>}
  </div>
  <HumanitiesField label="Que limite ou pressuposto desse modo de conhecer você identificaria?" value={limit} onChange={setLimit}
   placeholder="Registre dúvidas, critérios de verificação e interpretações possíveis."/>
  <p className="k-humanities-subtext">Racionalismo e empirismo são tradições filosóficas complexas. Os cenários ilustram procedimentos, não substituem leitura de autores nem afirmam que ciência e lógica sejam opostas.</p>
 </HumanitiesStage>;
}
const dilemmas=[
 {id:'privacy',title:'Privacidade e interesse coletivo',scenario:'Uma escola avalia publicar dados sobre frequência dos alunos para investigar evasão escolar. O relatório poderia incluir informações que permitam identificar estudantes.',
  stakeholders:['Estudantes','Famílias','Equipe escolar','Pesquisadores'],questions:['Que informação realmente precisa ser divulgada?','Como reduzir riscos à privacidade?','Quem participaria da decisão?']},
 {id:'access',title:'Acesso e distribuição de recursos',scenario:'Uma biblioteca tem recursos limitados para estender o horário e precisa decidir quais turnos e grupos devem ser atendidos primeiro.',
  stakeholders:['Trabalhadores','Estudantes','Equipe da biblioteca','Comunidade'],questions:['Quais critérios seriam transparentes?','Como ouvir grupos com horários diferentes?','Que efeitos não intencionais precisam ser considerados?']}
] as const;
export function PhilosophyEthicsLab(){
 const [index,setIndex]=useState(0),[considered,setConsidered]=useState<string[]>([]);
 const [principle,setPrinciple]=useState(''),[response,setResponse]=useState('');
 const scenario=dilemmas[index];
 const toggle=(value:string)=>setConsidered(items=>items.includes(value)?items.filter(x=>x!==value):[...items,value]);
 const checklist=presenceChecklist({principle,response});
 return <HumanitiesStage subject="Filosofia" kind="philosophy-ethics" title="Decisões éticas e perspectivas"
  description="Examine consequências, direitos e responsabilidades em dilemas fictícios, sem declarar uma única resposta moral automática.">
  <label className="k-humanities-select">Dilema autoral
   <select value={index} onChange={e=>{setIndex(Number(e.target.value));setConsidered([]);setPrinciple('');setResponse('');}}>
    {dilemmas.map((x,i)=><option key={x.id} value={i}>{x.title}</option>)}</select></label>
  <div className="k-humanities-insight"><p>{scenario.scenario}</p></div>
  <h4>Quem pode ser afetado?</h4>
  <div className="k-humanities-checks">
   {scenario.stakeholders.map(name=><label key={name}><input type="checkbox" checked={considered.includes(name)} onChange={()=>toggle(name)}/>{name}</label>)}
  </div>
  <div className="k-humanities-question-list">{scenario.questions.map((q,i)=><p key={q}><strong>{i+1}.</strong> {q}</p>)}</div>
  <HumanitiesField label="Que princípio ético você considera mais relevante e por quê?" value={principle} onChange={setPrinciple}/>
  <HumanitiesField label="Como justificaria uma decisão e examinaria uma objeção possível?" value={response} onChange={setResponse}/>
  <p className="k-humanities-subtext">{considered.length} de {scenario.stakeholders.length} grupos considerados; {checklist.done.length} de 2 campos escritos. O preenchimento não equivale a qualidade argumentativa nem a nota.</p>
 </HumanitiesStage>;
}
