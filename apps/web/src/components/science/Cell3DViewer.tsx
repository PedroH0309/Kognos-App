'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {parts,type CellPart,type CellType} from '@/lib/visual-study-models';

/** Locally authored simplified 3D cell model. No Labster/third-party artwork. */
export default function Cell3DViewer({type,selected,onSelect}:{
 type:CellType;selected:CellPart;onSelect:(part:CellPart)=>void;
}){
 const host=useRef<HTMLDivElement|null>(null);
 const resetView=useRef<(()=>void)|null>(null);
 const redraw=useRef<(()=>void)|null>(null);
 const features=useRef<THREE.Mesh[]>([]);
 const selectionHandler=useRef(onSelect);
 selectionHandler.current=onSelect;
 const [unsupported,setUnsupported]=useState(false);
 useEffect(()=>{
  const container=host.current;
  if(!container)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
  catch{setUnsupported(true);return;}
  setUnsupported(false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  const canvas=renderer.domElement;
  canvas.style.width='100%';canvas.style.height='100%';canvas.style.display='block';
  canvas.setAttribute('aria-label','Modelo de célula em três dimensões: arraste para girar e amplie com dois dedos.');
  container.appendChild(canvas);
  const scene=new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff,2.25));
  const light=new THREE.DirectionalLight(0xffffff,3.6);light.position.set(5,7,9);scene.add(light);
  const camera=new THREE.PerspectiveCamera(43,1,.1,100);
  camera.position.set(4.1,2.5,9.7);
  const controls=new OrbitControls(camera,canvas);
  controls.enableDamping=false;controls.enablePan=false;controls.enableZoom=true;
  controls.minDistance=4.5;controls.maxDistance=19;
  controls.target.set(0,0,0);controls.update();
  const sphere=new THREE.SphereGeometry(1,28,20);
  const ownedGeometries:THREE.BufferGeometry[]=[sphere];
  const materials:THREE.Material[]=[];
  const clickable:THREE.Mesh[]=[];
  const allFeatures:THREE.Mesh[]=[];
  function add(part:CellPart,position:[number,number,number],scale:[number,number,number],
   color:number,opacity=1,pickable=true){
   const material=new THREE.MeshStandardMaterial({
    color,transparent:opacity<1,opacity,depthWrite:opacity>=1,
    roughness:.42,metalness:.06,emissive:0x000000
   });
   materials.push(material);
   const item=new THREE.Mesh(sphere,material);
   item.position.set(...position);item.scale.set(...scale);item.userData.part=part;
   scene.add(item);
   allFeatures.push(item);
   if(pickable)clickable.push(item);
   return item;
  }
  function outerWall(shape:'sphere'|'box',color:number,scale:[number,number,number],opacity:number){
   const material=new THREE.MeshStandardMaterial({color,transparent:true,opacity,
    side:THREE.DoubleSide,depthWrite:false,roughness:.6});
   materials.push(material);
   const geometry=shape==='box'?new THREE.BoxGeometry(1,1,1):sphere;
   if(shape==='box')ownedGeometries.push(geometry);
   const mesh=new THREE.Mesh(geometry,material);mesh.scale.set(...scale);
   mesh.renderOrder=20;
   scene.add(mesh);
  }
  if(type==='plant'){
   outerWall('box',0x65bb83,[6.4,4.5,4.1],.12);
   outerWall('box',0x43b3c5,[6.15,4.28,3.92],.13);
   add('cytoplasm',[0,0,0],[2.95,1.95,1.8],0x83d7e0,.12,false);
   add('vacuole',[.52,.12,0],[1.25,1.3,1.15],0x4fa7db,.31);
   add('nucleus',[-1.15,-.26,.75],[.58,.58,.58],0xe889bd);
   add('mitochondria',[1.65,-.85,.92],[.39,.21,.2],0x7e9ce5);
   add('chloroplast',[1.7,.87,1.0],[.52,.22,.25],0x3dba66);
   add('chloroplast',[-1.9,.87,-.78],[.5,.22,.25],0x3dba66);
  }else if(type==='animal'){
   outerWall('sphere',0x3fbbd1,[3.1,2.2,2.0],.14);
   add('cytoplasm',[0,0,0],[2.95,2.04,1.86],0x90bedf,.11,false);
   add('nucleus',[-.5,.25,.2],[.85,.82,.84],0xe889bd);
   add('mitochondria',[1.35,-.85,.7],[.55,.27,.24],0x7b91e3);
   add('mitochondria',[1.8,.65,-.4],[.43,.25,.26],0x7b91e3);
  }else{
   outerWall('sphere',0x72b879,[3.2,1.5,1.5],.20);
   outerWall('sphere',0x54b2c9,[3.05,1.4,1.4],.11);
   add('cytoplasm',[0,0,0],[2.88,1.28,1.27],0x8bbbd4,.10,false);
   const geometry=new THREE.TorusKnotGeometry(.72,.08,90,8,2,3);
   ownedGeometries.push(geometry);
   const material=new THREE.MeshStandardMaterial({color:0xa169d4,roughness:.4,emissive:0x000000});
   materials.push(material);
   const dna=new THREE.Mesh(geometry,material);
   dna.userData.part='dna';scene.add(dna);clickable.push(dna);allFeatures.push(dna);
  }
  const riboPos=type==='prokaryote'?[
   [-1.9,-.35,.6],[-1.5,.52,-.7],[-.9,-.73,.7],[.75,.65,.3],[1.35,-.38,.7],[1.95,.35,-.7]
  ]:[
   [-1.95,1.05,.2],[-1.45,-1.1,.2],[.75,1.25,1],[1.75,.15,.9],[-.25,-1.45,-.6]
  ];
  for(const position of riboPos)add('ribosomes',position as [number,number,number],
   [.12,.12,.12],0xf3b749);
  features.current=allFeatures;
  const draw=()=>renderer.render(scene,camera);redraw.current=draw;
  const size=()=>{
   const {width,height}=container.getBoundingClientRect();
   if(width<=0||height<=0)return;
   camera.aspect=width/height;camera.updateProjectionMatrix();
   renderer.setSize(width,height,false);draw();
  };
  const observer=new ResizeObserver(size);observer.observe(container);
  controls.addEventListener('change',draw);size();
  const raycaster=new THREE.Raycaster(),point=new THREE.Vector2();
  let press:[number,number]|null=null;
  const onDown=(event:PointerEvent)=>{press=[event.clientX,event.clientY];};
  const onUp=(event:PointerEvent)=>{
   if(!press||Math.hypot(event.clientX-press[0],event.clientY-press[1])>8){press=null;return;}
   press=null;
   const rect=canvas.getBoundingClientRect();
   point.set((event.clientX-rect.left)/rect.width*2-1,
    -((event.clientY-rect.top)/rect.height*2-1));
   raycaster.setFromCamera(point,camera);
   const hit=raycaster.intersectObjects(clickable,false)[0];
   if(hit)selectionHandler.current(hit.object.userData.part as CellPart);
  };
  canvas.addEventListener('pointerdown',onDown);
  canvas.addEventListener('pointerup',onUp);
  resetView.current=()=>{camera.position.set(4.1,2.5,9.7);controls.target.set(0,0,0);controls.update();draw();};
  return()=>{
   resetView.current=null;redraw.current=null;features.current=[];
   canvas.removeEventListener('pointerdown',onDown);
   canvas.removeEventListener('pointerup',onUp);
   controls.removeEventListener('change',draw);
   observer.disconnect();controls.dispose();
   for(const geometry of ownedGeometries)geometry.dispose();
   for(const material of materials)material.dispose();
   renderer.dispose();
   if(container.contains(canvas))container.removeChild(canvas);
  };
 },[type]);
 useEffect(()=>{
  for(const item of features.current){
   const material=item.material as THREE.MeshStandardMaterial;
   const active=item.userData.part===selected;
   material.emissive.setHex(active?0x5357bc:0x000000);
   material.emissiveIntensity=active?.42:0;
  }
  redraw.current?.();
 },[selected,type]);
 return <div className="k-cell-3d-experience">
  <div className="k-cell-3d-viewport" ref={host}
   role="group" aria-label={'Célula '+type+' em 3D, com organelas selecionáveis e zoom'}>
   {unsupported&&<p>Este navegador não conseguiu iniciar WebGL. Selecione “Esquema 2D” e utilize a lista de estruturas para estudar.</p>}
  </div>
  <div className="k-cell-3d-toolbar">
   <button type="button" onClick={()=>resetView.current?.()}>Reiniciar posição e zoom</button>
   <span>Arraste para girar · aproxime com pinça ou roda · toque em uma estrutura</span>
  </div>
  <p className="k-cell-3d-notice">Modelo 3D esquemático original do Kognos, criado com Three.js. A localização, quantidade, escala e organização dos componentes são simplificadas e não representam uma micrografia real.</p>
 </div>;
}
