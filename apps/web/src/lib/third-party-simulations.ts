/** Curated third-party simulations.
 * PhET regular HTML sims are CC BY-NC 4.0 (as of 2026-11).
 * External iframes load ONLY after a deliberate click and ONLY when the
 * deployment explicitly permits non-commercial embeds.
 * URLs are fixed, verified official pt_BR HTML5 endpoints.
 * No PhET source or art is bundled in Kognos.
 */
export type SimulationSubject='Matemática'|'Química'|'Física'|'Biologia';
export type SimulationTopic={subject:string;topic:string;description?:string;unit?:string};
export type ExternalSimulation={
 id:string;subject:SimulationSubject;title:string;summary:string;url:string;
 learningGoal:string;license:'CC BY-NC 4.0';
};
const origin='https://phet.colorado.edu/sims/html/';
function simulation(id:string,subject:SimulationSubject,title:string,summary:string,learningGoal:string):ExternalSimulation{
 return {id,subject,title,summary,learningGoal,
  url:origin+id+'/latest/'+id+'_pt_BR.html',license:'CC BY-NC 4.0'};
}
export const verifiedPhETSimulations={
 quadratics:simulation('graphing-quadratics','Matemática','Gráfico de Quadráticas','Altere coeficientes e investigue vértice, raízes, concavidade e eixo de simetria.','Relação entre função quadrática e gráfico.'),
 area:simulation('area-builder','Matemática','Construtor de Área','Mova peças e construa figuras para comparar área, perímetro e arranjos.','Composição e decomposição de figuras.'),
 fractions:simulation('fractions-intro','Matemática','Frações: Intro','Monte frações visualmente e altere as partes do todo.','Representação e comparação de frações.'),
 atom:simulation('build-an-atom','Química','Monte um Átomo','Adicione e retire prótons, nêutrons e elétrons para observar as propriedades.','Número atômico, massa e espécies iônicas.'),
 balancing:simulation('balancing-chemical-equations','Química','Balanceamento de Equações Químicas','Manipule os coeficientes de equações químicas e compare quantidades de átomos.','Conservação de átomos e balanceamento.'),
 reagents:simulation('reactants-products-and-leftovers','Química','Reagentes, Produtos e Excesso','Altere quantidades moleculares e observe reagentes limitantes e excessos.','Estequiometria em modelos de partículas.'),
 molecule:simulation('molecule-shapes','Química','Geometria Molecular','Arraste ligações e explore modelos espaciais de moléculas.','Representações de ligações e geometria molecular.'),
 ph:simulation('ph-scale','Química','Escala de pH','Compare soluções aquosas em uma escala visual de acidez e basicidade.','Interpretação da escala logarítmica de pH.')
} as const;
const fold=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function simulationForTopic(topic:SimulationTopic):ExternalSimulation[]{
 const sub=fold(topic.subject).trim(),s=fold(topic.topic);
 const result:ExternalSimulation[]=[];
 if(sub==='matematica'){
  if(/func(ao|oes) (quadraticas?|do 2.? grau)|parabol|bhaskara|equac(ao|oes) do segundo grau|equac(ao|oes) quadraticas?/.test(s))
   result.push(verifiedPhETSimulations.quadratics);
  if(/areas? de figuras|area e perimetro|composic(ao|oes) de figuras|geometria plana|poligonos?/.test(s))
   result.push(verifiedPhETSimulations.area);
  if(/frac(ao|oes)|numeros? racionais?/.test(s))
   result.push(verifiedPhETSimulations.fractions);
 }
 if(sub==='quimica'){
  if(/geometria molecular|ligac(ao|oes) covalentes?|ligac(ao|oes) moleculares?|polaridade molecular/.test(s))
   result.push(verifiedPhETSimulations.molecule);
  if(/modelos? atomicos?|estrutura atomica|estrutura do atomo|numero atomico|numero de massa|isotop|eletrosfera/.test(s))
   result.push(verifiedPhETSimulations.atom);
  if(/balanceamento|equacoes? quimicas|lei de lavoisier|lei de proust/.test(s))
   result.push(verifiedPhETSimulations.balancing);
  if(/estequiometri|reagente limitante|aspectos quantitativos das transformacoes/.test(s))
   result.push(verifiedPhETSimulations.reagents);
  if(/escalas? de ph|escala de ph|produto ionico da agua|poh\b|acidez e basicidade/.test(s))
   result.push(verifiedPhETSimulations.ph);
 }
 return [...new Map(result.map(item=>[item.id,item])).values()];
}
/** Embeds are non-commercial only. Production deployments MUST opt in explicitly
 * after the owner has verified their usage rights. No premium monetization
 * is permitted without a separate license from the University.
 */
export function allowNonCommercialPhET(mode:string|undefined,isDevelopment:boolean){
 return isDevelopment || mode==='noncommercial-confirmed';
}
