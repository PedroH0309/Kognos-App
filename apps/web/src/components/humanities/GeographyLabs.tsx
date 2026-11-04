'use client';
import {useState} from 'react';
import {fictionalMap,groundKilometers,indicatorPercentage,layerValue,type SpatialLayer} from '@/lib/humanities-labs';
import {HumanitiesStage,HumanitiesSlider,HumanitiesField,ChoiceRow} from './HumanitiesLabCommon';

const number=(x:number)=>x.toLocaleString('pt-BR',{maximumFractionDigits:3});
export function GeographyCartographyLab(){
 const [denominator,setDenominator]=useState(100000),[length,setLength]=useState(4);
 const [interpretation,setInterpretation]=useState('');
 const distance=groundKilometers(length,denominator);
 return <HumanitiesStage subject="Geografia" kind="geography-cartography" title="Cartografia e escalas"
  description="Converta uma distância medida num mapa fictício em uma distância real usando uma escala numérica.">
  <div className="k-humanities-controls">
   <HumanitiesSlider label="Denominador da escala 1:n" value={denominator} min={25000} max={1000000} step={25000} onChange={setDenominator}/>
   <HumanitiesSlider label="Medida no mapa" value={length} min={0.5} max={20} step={0.5} unit=" cm" onChange={setLength}/>
  </div>
  <div className="k-humanities-map-sketch" role="img" aria-label={'Esquema fictício de duas localidades separadas por '+length+' centímetros no mapa'}>
   <div className="k-humanities-map-roads" aria-hidden="true"/>
   <div className="k-humanities-map-route">
    <span className="k-humanities-map-point">A</span>
    <span className="k-humanities-map-distance">{length} cm no mapa</span>
    <span className="k-humanities-map-point">B</span>
   </div>
   <small>Mapa esquemático fictício · não corresponde a municípios reais</small>
  </div>
  <div className="k-humanities-results">
   <div><span>Escala</span><strong>1:{number(denominator)}</strong></div>
   <div><span>Distância calculada</span><strong>{distance===null?'Inválida':number(distance)+' km'}</strong></div>
  </div>
  <p className="k-humanities-subtext">A escala 1:n significa que 1 cm no mapa representa n cm no terreno. Distância em km = distância no mapa (cm) × n / 100.000. O resultado é uma distância cartográfica, não uma rota de ruas.</p>
  <HumanitiesField label="Quando um mapa com escala menor pode ser mais útil?" value={interpretation} onChange={setInterpretation}
   placeholder="Compare o nível de detalhe e a extensão representada."/>
 </HumanitiesStage>;
}
const layers:{value:SpatialLayer;label:string;legend:string}[]=[
 {value:'relief',label:'Altitudes relativas',legend:'0 = área baixa; 4 = área alta'},
 {value:'green',label:'Cobertura vegetal',legend:'0 = pouca; 4 = muita vegetação'},
 {value:'services',label:'Acesso a serviços',legend:'0 = menor acesso; 4 = maior acesso'}
];
export function GeographyLandscapeLab(){
 const [layer,setLayer]=useState<SpatialLayer>('green');
 const [selected,setSelected]=useState(0);
 const [hypothesis,setHypothesis]=useState('');
 const active=layers.find(entry=>entry.value===layer)??layers[0];
 const cell=fictionalMap[selected];
 return <HumanitiesStage subject="Geografia" kind="geography-landscape" title="Leitura de camadas de um território"
  description="Alterne as camadas de uma grade territorial INVENTADA para examinar padrões espaciais sem confundi-los com dados reais.">
  <ChoiceRow label="Camada temática"
   value={layer} items={layers.map(entry=>({value:entry.value,label:entry.label}))}
   onChange={value=>setLayer(value as SpatialLayer)}/>
  <div className="k-humanities-map-grid" role="group" aria-label={'Grade didática fictícia; camada '+active.label}>
   {fictionalMap.map((item,i)=>{
    const value=layerValue(item,layer);
    return <button type="button" key={item.id} aria-pressed={selected===i}
     aria-label={'Quadrícula '+item.id+', índice '+value+' de 4'} onClick={()=>setSelected(i)}
     style={{backgroundColor:layer==='relief'?['#eef2fb','#b9c6ec','#8da3de','#627fc4','#3b5ba7'][value]:
      layer==='green'?['#e3ebdb','#c7dfb2','#94c28b','#4e956b','#256e50'][value]:
      ['#eaf0fa','#cbd8f0','#9bb3e3','#627fc4','#335ca7'][value]}}>
      <span>{item.id}</span><small>{value}/4</small>
    </button>;
   })}
  </div>
  <p className="k-humanities-subtext"><strong>Legenda:</strong> {active.legend}. Índices e quadrículas foram criados pelo Kognos apenas para treino; não representam relevo, cobertura vegetal ou infraestrutura de lugar algum.</p>
  <div className="k-humanities-results">
   <div><span>Área selecionada</span><strong>{cell.id}</strong></div>
   <div><span>Índice da camada</span><strong>{layerValue(cell,layer)} de 4</strong></div>
  </div>
  <HumanitiesField label="Que hipótese espacial poderia ser investigada usando mais dados?" value={hypothesis} onChange={setHypothesis}
   placeholder="Compare quadrículas com diferentes valores; explique que dados adicionais precisariam ser coletados."/>
 </HumanitiesStage>;
}
export function GeographyIndicatorsLab(){
 const [population,setPopulation]=useState(200),[users,setUsers]=useState(80);
 const [area,setArea]=useState(10),[claim,setClaim]=useState<string|null>(null);
 const used=Math.min(users,population);
 const percentage=indicatorPercentage(used,population);
 const density=population/area;
 return <HumanitiesStage subject="Geografia" kind="geography-indicators" title="Indicadores demográficos e socioespaciais"
  description="Compare proporções e densidade com um bairro HIPOTÉTICO. Aprenda a distinguir um indicador numérico de uma conclusão sobre desigualdade real.">
  <div className="k-humanities-controls">
   <HumanitiesSlider label="População fictícia" min={100} max={2000} step={100} value={population} onChange={setPopulation}/>
   <HumanitiesSlider label="Pessoas com acesso a um serviço" min={0} max={population} step={10} value={used} onChange={setUsers}/>
   <HumanitiesSlider label="Área do bairro hipotético" min={1} max={20} value={area} onChange={setArea} unit=" km²"/>
  </div>
  <div className="k-humanities-proportion" role="progressbar" aria-label="Percentual com acesso ao serviço" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage??0}>
   <span style={{width:(percentage??0)+'%'}}/>
  </div>
  <div className="k-humanities-results">
   <div><span>Proporção com acesso</span><strong>{number(percentage??0)}%</strong></div>
   <div><span>Densidade</span><strong>{number(density)} hab./km²</strong></div>
   <div><span>Sem acesso declarado</span><strong>{population-used} pessoas</strong></div>
  </div>
  <h4>É possível concluir que o bairro existe e tem essa situação?</h4>
  <ChoiceRow label="Validade de uma inferência sobre o mundo real" value={claim??''}
   items={[{value:'yes',label:'Sim, o gráfico comprova'},{value:'no',label:'Não, os números são simulados'}]}
   onChange={setClaim}/>
  {claim&&<p role="status" className="k-humanities-feedback">{claim==='no'?'Correto: os cálculos são válidos para os dados criados, mas nenhuma observação real foi feita.':'Revise: todos os números foram inventados para esta atividade. Precisamos de fontes reais e representativas para descrever um município.'}</p>}
  <p className="k-humanities-subtext">Densidade demográfica = habitantes / km². Percentual de acesso = usuários / população × 100. Estes indicadores não demonstram causas, distribuição interna ou qualidade dos serviços.</p>
 </HumanitiesStage>;
}
