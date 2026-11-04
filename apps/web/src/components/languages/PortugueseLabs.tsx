'use client';
import {useState} from 'react';
import {readingExercises,grammarExercises,orderedParagraph} from '@/lib/language-labs';
import {LanguageStage,ExerciseDeck,WritingField} from './LanguageLabCommon';

export function PortugueseReadingLab(){
 const [evidence,setEvidence]=useState('');
 return <LanguageStage subject="Português" title="Interpretação com evidências" kind="pt-reading"
  description="Identifique informações explícitas, inferências justificadas e sentidos figurados em textos curtos, inteiramente autorais.">
  <ExerciseDeck exercises={readingExercises}/>
  <div className="k-language-reflection">
   <h4>Construa sua própria inferência</h4>
   <p>Escolha uma afirmação dos textos anteriores e registre que expressão comprova sua interpretação.</p>
   <WritingField label="Evidência e justificativa" value={evidence} onChange={setEvidence}
    placeholder="No texto, a expressão ... permite concluir ... porque ..."/>
   <p className="k-language-mini-note">A justificativa escrita é um rascunho local. O Kognos não atribui nota automaticamente a essa resposta livre.</p>
  </div>
 </LanguageStage>;
}
export function PortugueseGrammarLab(){
 const [highlight,setHighlight]=useState<'subject'|'verb'>('subject');
 const [sentence,setSentence]=useState<'singular'|'plural'>('plural');
 return <LanguageStage subject="Português" title="Oficina de gramática contextual" kind="pt-grammar"
  description="Identifique a função das palavras e observe a concordância na frase antes de conferir as alternativas.">
  <div className="k-language-reflection">
   <h4>Explore sujeito e verbo</h4>
   <div className="k-language-choice" role="group" aria-label="Número do sujeito">
    <button type="button" aria-pressed={sentence==='singular'} onClick={()=>setSentence('singular')}>Sujeito singular</button>
    <button type="button" aria-pressed={sentence==='plural'} onClick={()=>setSentence('plural')}>Sujeito plural</button>
   </div>
   <div className="k-language-sentence" aria-label="Exemplo de concordância">
    <mark className={highlight==='subject'?'is-active':''}>{sentence==='plural'?'Os estudantes':'O estudante'}</mark>{' '}
    <mark className={highlight==='verb'?'is-active':''}>{sentence==='plural'?'apresentaram':'apresentou'}</mark>{' '}o projeto.
   </div>
   <div className="k-language-choice" role="group" aria-label="Identifique o termo">
    <button type="button" aria-pressed={highlight==='subject'} onClick={()=>setHighlight('subject')}>Destacar sujeito</button>
    <button type="button" aria-pressed={highlight==='verb'} onClick={()=>setHighlight('verb')}>Destacar verbo</button>
   </div>
   <p className="k-language-mini-note">Ao alterar o número do sujeito, a forma do verbo é ajustada para manter a concordância.</p>
  </div>
  <ExerciseDeck exercises={grammarExercises}/>
 </LanguageStage>;
}
const originalParagraphs=[
 'A escola recebeu novos livros para a biblioteca.',
 'Com isso, os estudantes passaram a encontrar mais opções de leitura.',
 'Dessa forma, o acervo ampliado contribuiu para as atividades de pesquisa.'
];
export function PortugueseCohesionLab(){
 const [connector,setConnector]=useState<'therefore'|'contrast'|'cause'>('therefore');
 const [order,setOrder]=useState([2,0,1]);
 const [show,setShow]=useState(false);
 const options={
  therefore:{label:'Consequência',text:'Por isso, a turma reorganizou o horário.',description:'O conectivo “por isso” apresenta uma consequência.'},
  contrast:{label:'Contraste',text:'Entretanto, a turma manteve o horário original.',description:'“Entretanto” introduz uma informação de oposição.'},
  cause:{label:'Causa',text:'Porque a turma precisava estudar, a escola abriu mais cedo.',description:'“Porque” introduz uma relação causal neste período.'}
 };
 const arrange=(position:number,move:number)=>{
  const next=position+move;if(next<0||next>=order.length)return;
  setOrder(current=>{const result=[...current];[result[position],result[next]]=[result[next],result[position]];return result;});
  setShow(false);
 };
 const reordered=orderedParagraph(originalParagraphs,order)??[];
 const isCorrect=order.every((v,i)=>v===i);
 return <LanguageStage subject="Português" title="Coesão e conectivos" kind="pt-cohesion"
  description="Observe o valor semântico dos conectivos e reorganize três períodos autorais em uma progressão coerente.">
  <div className="k-language-reflection">
   <h4>Qual relação o conectivo estabelece?</h4>
   <div className="k-language-choice" role="group" aria-label="Relação semântica">
    {(Object.entries(options) as [typeof connector,typeof options[keyof typeof options]][]).map(([id,item])=>
     <button type="button" key={id} aria-pressed={connector===id} onClick={()=>setConnector(id)}>{item.label}</button>)}
   </div>
   <blockquote className="k-language-example">{options[connector].text}</blockquote>
   <p>{options[connector].description}</p>
  </div>
  <div className="k-language-reflection">
   <h4>Reorganize os períodos</h4>
   <p>Use as setas para reconstruir a sequência de contexto, consequência e síntese.</p>
   <ol className="k-language-sort">
    {reordered.map((block,index)=><li key={order[index]}><span>{block}</span><div>
     <button type="button" aria-label={'Mover período '+(index+1)+' para cima'} disabled={index===0} onClick={()=>arrange(index,-1)}>↑</button>
     <button type="button" aria-label={'Mover período '+(index+1)+' para baixo'} disabled={index===order.length-1} onClick={()=>arrange(index,1)}>↓</button>
    </div></li>)}
   </ol>
   <button type="button" className="k-language-primary" onClick={()=>setShow(true)}>Conferir sequência-modelo</button>
   {show&&<p role="status" className="k-language-feedback">{isCorrect?'Sequência igual ao exemplo editorial.':'A ordem difere da sequência-modelo. Verifique como “com isso” e “dessa forma” retomam a ideia anterior.'} Não é uma correção automática de todas as ordens linguisticamente possíveis.</p>}
  </div>
 </LanguageStage>;
}
