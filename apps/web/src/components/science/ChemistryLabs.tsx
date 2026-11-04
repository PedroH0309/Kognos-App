'use client';
import {useState} from 'react';
import {atomModel,waterStoichiometry,dilutionModel,phProperties} from '@/lib/science-labs';
import {ScienceStage,ScienceSlider,ScienceOutput,fmt} from './ScienceLabCommon';

export function AtomLab(){
 const [atomicNumber,setAtomicNumber]=useState(6),[neutrons,setNeutrons]=useState(6),[charge,setCharge]=useState(0);
 const atom=atomModel(atomicNumber,neutrons,charge);
 return <ScienceStage subject="Química" title="Número atômico, massa e íons" description="Monte um átomo hipotético com prótons, nêutrons e elétrons para compreender Z, A e carga elétrica.">
  <div className="k-science-controls">
   <ScienceSlider label="Número atômico (Z)" min={1} max={18} value={atomicNumber} onChange={setAtomicNumber}/>
   <ScienceSlider label="Nêutrons (N)" min={0} max={22} value={neutrons} onChange={setNeutrons}/>
   <ScienceSlider label="Carga do íon" min={-2} max={2} value={charge} onChange={setCharge}/>
  </div>
  <div className="k-science-visual"><svg viewBox="0 0 340 160" role="img" aria-label={'Diagrama contábil de partículas com '+atomicNumber+' prótons e '+neutrons+' nêutrons'}>
   <rect x="19" y="25" width="144" height="112" rx="12" fill="#5B4DE31B" stroke="#5B4DE3" strokeWidth="2"/>
   <rect x="180" y="25" width="144" height="112" rx="12" fill="#38CDE51D" stroke="#0AAFC7" strokeWidth="2"/>
   <text x="91" y="51" fill="currentColor" fontSize="12" textAnchor="middle">Núcleo</text>
   <text x="91" y="85" fill="#5B4DE3" fontSize="27" textAnchor="middle">{atomicNumber}+{neutrons}</text>
   <text x="91" y="112" fill="currentColor" fontSize="11" textAnchor="middle">prótons + nêutrons</text>
   <text x="252" y="51" fill="currentColor" fontSize="12" textAnchor="middle">Elétrons</text>
   <text x="252" y="92" fill="#0A9AAC" fontSize="29" textAnchor="middle">{atom?.electrons??'—'}</text>
  </svg></div>
  <div className="k-science-grid"><ScienceOutput label="Prótons (Z)">{atom?.protons??'Inválido'}</ScienceOutput>
   <ScienceOutput label="Número de massa (A = Z + N)">{atom?.massNumber??'Inválido'}</ScienceOutput>
   <ScienceOutput label="Elétrons">{atom?.electrons??'Inválido'}</ScienceOutput>
   <ScienceOutput label="Carga elétrica">{charge>0?'+'+charge:charge}</ScienceOutput></div>
  <p className="k-science-note">A contagem de partículas é exata para o modelo selecionado; estabilidade nuclear e configurações eletrônicas não são avaliadas. O desenho é um esquema, não uma imagem realista de orbitais.</p>
 </ScienceStage>;
}
export function StoichiometryLab(){
 const [hydrogen,setHydrogen]=useState(4),[oxygen,setOxygen]=useState(3);
 const result=waterStoichiometry(hydrogen,oxygen);
 return <ScienceStage subject="Química" title="Estequiometria e reagente limitante" description="Modele apenas no papel a reação 2 H₂ + O₂ → 2 H₂O, variando as quantidades em mol.">
  <div className="k-science-controls">
   <ScienceSlider label="H₂ disponível" min={0} max={10} value={hydrogen} step={0.5} onChange={setHydrogen} unit=" mol"/>
   <ScienceSlider label="O₂ disponível" min={0} max={10} value={oxygen} step={0.5} onChange={setOxygen} unit=" mol"/>
  </div>
  <div className="k-science-reaction" aria-label="Equação simbólica balanceada">
   <strong>2 H₂</strong><span>+</span><strong>O₂</strong><span>→</span><strong>2 H₂O</strong>
  </div>
  <div className="k-science-grid"><ScienceOutput label="Água formada">{fmt(result?.waterMoles??NaN,2)} mol</ScienceOutput>
   <ScienceOutput label="H₂ restante">{fmt(result?.hydrogenRemaining??NaN,2)} mol</ScienceOutput>
   <ScienceOutput label="O₂ restante">{fmt(result?.oxygenRemaining??NaN,2)} mol</ScienceOutput></div>
  <p className="k-science-note">A proporção estequiométrica é 2:1:2. Quantidades e conversões representam um modelo numérico ideal com reação completa, sem cinética, segurança de laboratório ou instruções de mistura de gases. Não tente executar a reação com substâncias reais.</p>
 </ScienceStage>;
}
export function SolutionsLab(){
 const [initialConcentration,setInitialConcentration]=useState(2);
 const [initialVolume,setInitialVolume]=useState(100);
 const [finalVolume,setFinalVolume]=useState(500);
 const result=dilutionModel(initialConcentration,initialVolume,finalVolume);
 return <ScienceStage subject="Química" title="Concentração e diluição" description="Aumente o volume de uma solução ideal sem alterar a quantidade de soluto.">
  <div className="k-science-controls">
   <ScienceSlider label="Concentração inicial" min={0.1} max={4} step={0.1} value={initialConcentration} unit=" mol/L" onChange={setInitialConcentration}/>
   <ScienceSlider label="Volume inicial" min={50} max={400} step={25} value={initialVolume} unit=" mL" onChange={setInitialVolume}/>
   <ScienceSlider label="Volume final" min={500} max={1000} step={25} value={finalVolume} unit=" mL" onChange={setFinalVolume}/>
  </div>
  <div className="k-science-solutions" role="img" aria-label={'Esquema com solução inicial de '+initialVolume+' mL e final de '+finalVolume+' mL'}>
   <div><div className="k-science-beaker"><span style={{height:Math.min(96,100*initialVolume/400)+'%',opacity:.8}}/></div><small>Inicial: {initialVolume} mL</small></div>
   <div className="k-science-arrow" aria-hidden="true">→</div>
   <div><div className="k-science-beaker"><span style={{height:Math.min(96,100*finalVolume/1000)+'%',opacity:.45}}/></div><small>Final: {finalVolume} mL</small></div>
  </div>
  <div className="k-science-grid"><ScienceOutput label="Quantidade de soluto">{fmt(result?.soluteMillimoles??NaN,3)} mmol</ScienceOutput>
   <ScienceOutput label="Nova concentração">{fmt(result?.finalMolarity??NaN,4)} mol/L</ScienceOutput></div>
  <p className="k-science-note">C₁V₁ = C₂V₂; ao adicionar solvente idealmente, a quantidade de soluto é conservada. Não modela reação química, contração de volume nem solubilidade máxima.</p>
 </ScienceStage>;
}
export function PhLab(){
 const [targetPh,setTargetPh]=useState(7);
 const concentration=10**(-targetPh);
 const properties=phProperties(concentration);
 const color=targetPh<7?'#E07D67':targetPh>7?'#5B4DE3':'#1A9C80';
 return <ScienceStage subject="Química" title="Escala de pH e pOH" description="Altere a concentração idealizada de H⁺ e veja sua relação logarítmica com pH e pOH.">
  <div className="k-science-controls">
   <ScienceSlider label="pH ilustrativo" min={0} max={14} value={targetPh} step={0.5} onChange={setTargetPh}/>
  </div>
  <div className="k-science-ph-track" role="img" aria-label={'Escala de pH de 0 a 14 com indicador em '+targetPh}>
   <div className="k-science-ph-gradient"/>
   <span style={{left:(100*targetPh/14)+'%',borderColor:color}}/>
   <div className="k-science-ph-axis"><small>0 · ácido</small><small>7 · neutro</small><small>14 · básico</small></div>
  </div>
  <div className="k-science-grid"><ScienceOutput label="pH">{fmt(properties?.ph??NaN,2)}</ScienceOutput>
   <ScienceOutput label="pOH">{fmt(properties?.poh??NaN,2)}</ScienceOutput>
   <ScienceOutput label="[H⁺] (aproximação)">{concentration.toExponential(2)} mol/L</ScienceOutput>
   <ScienceOutput label="Classificação">{targetPh<7?'Ácido':targetPh>7?'Básico':'Neutro'}</ScienceOutput></div>
  <p className="k-science-note">Modelo ideal para soluções aquosas diluídas a 25 °C: pH = −log₁₀[H⁺] e pH + pOH ≈ 14. A relação rigorosa usa atividade química; a escala visual não representa uma medição experimental.</p>
 </ScienceStage>;
}
