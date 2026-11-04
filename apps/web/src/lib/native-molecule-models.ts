/** Simplified ball-and-stick geometry for interactive, ungraded chemistry.
 * Coordinates are illustrative vectors, not experimental molecular coordinates.
 * H2O ~104.5°, CO2 180°, CH4 109.5°, NH3 ~107°.
 */
export type ElementSymbol='H'|'C'|'N'|'O';
export type Atom3D={element:ElementSymbol;at:readonly [number,number,number]};
export type Molecule3D={
 id:'water'|'carbon-dioxide'|'methane'|'ammonia';
 name:string;formula:string;geometry:string;angle:string;explanation:string;
 atoms:readonly Atom3D[];bonds:readonly (readonly [number,number])[];
};
export const molecules:readonly Molecule3D[]=[
 {id:'water',name:'Água',formula:'H₂O',geometry:'Angular',angle:'≈ 104,5°',
  explanation:'O oxigênio possui dois pares de elétrons não ligantes. A geometria molecular é angular; pares isolados influenciam o ângulo das ligações.',
  atoms:[{element:'O',at:[0,0,0]},{element:'H',at:[1.2,.93,0]},{element:'H',at:[-1.2,.93,0]}],
  bonds:[[0,1],[0,2]]},
 {id:'carbon-dioxide',name:'Dióxido de carbono',formula:'CO₂',geometry:'Linear',angle:'180°',
  explanation:'O carbono central apresenta dois domínios de ligação, representados por dois oxigênios em posições opostas. As ligações reais são duplas.',
  atoms:[{element:'C',at:[0,0,0]},{element:'O',at:[1.85,0,0]},{element:'O',at:[-1.85,0,0]}],
  bonds:[[0,1],[0,2]]},
 {id:'methane',name:'Metano',formula:'CH₄',geometry:'Tetraédrica',angle:'≈ 109,5°',
  explanation:'Quatro ligações C–H se distribuem aproximadamente como os vértices de um tetraedro ao redor do carbono central.',
  atoms:[{element:'C',at:[0,0,0]},{element:'H',at:[1.12,1.12,1.12]},{element:'H',at:[1.12,-1.12,-1.12]},{element:'H',at:[-1.12,1.12,-1.12]},{element:'H',at:[-1.12,-1.12,1.12]}],
  bonds:[[0,1],[0,2],[0,3],[0,4]]},
 {id:'ammonia',name:'Amônia',formula:'NH₃',geometry:'Piramidal trigonal',angle:'≈ 107°',
  explanation:'O nitrogênio forma três ligações N–H e possui um par isolado. A distribuição de elétrons é aproximadamente tetraédrica, mas a forma molecular é piramidal.',
  atoms:[{element:'N',at:[0,.35,0]},{element:'H',at:[1.3,-.17,0]},{element:'H',at:[-.65,-.17,1.126]},{element:'H',at:[-.65,-.17,-1.126]}],
  bonds:[[0,1],[0,2],[0,3]]}
];
export const atomStyle:Record<ElementSymbol,{label:string;color:number;radius:number}>={
 H:{label:'Hidrogênio',color:0xe9f5fd,radius:.26},
 C:{label:'Carbono',color:0x596779,radius:.50},
 N:{label:'Nitrogênio',color:0x557deb,radius:.48},
 O:{label:'Oxigênio',color:0xf06c77,radius:.48}
};
export function moleculeById(id:string):Molecule3D|undefined{
 return molecules.find(m=>m.id===id);
}
