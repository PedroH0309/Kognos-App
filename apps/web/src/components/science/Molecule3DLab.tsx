'use client';
import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {atomStyle,molecules,type Molecule3D} from '@/lib/native-molecule-models';
import {ScienceStage} from './ScienceLabCommon';

export default function Molecule3DLab(){
 const [index,setIndex]=useState(0);
 const [selectedAtom,setSelectedAtom]=useState(0);
 const [webglError,setWebglError]=useState(false);
 const stage=useRef<HTMLDivElement|null>(null);
 const reset=useRef<(()=>void)|null>(null);
 const rerenderScene=useRef<(()=>void)|null>(null);
 const sphereHandles=useRef<THREE.Mesh[]>([]);
 const molecule:Molecule3D=molecules[index];
 useEffect(()=>{
  const host=stage.current;
  if(!host)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
  catch{setWebglError(true);return;}
  setWebglError(false);
  renderer.setPixelRatio(Math.min(typeof window==='undefined'?1:window.devicePixelRatio||1,1.7));
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.domElement.setAttribute('aria-label','Molécula tridimensional. Arraste para girar e use dois dedos para ampliar.');
  renderer.domElement.style.width='100%';
  renderer.domElement.style.height='100%';
  renderer.domElement.style.display='block';
  host.appendChild(renderer.domElement);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  camera.position.set(0,0,10);
  scene.add(new THREE.AmbientLight(0xffffff,2.1));
  const light=new THREE.DirectionalLight(0xffffff,3.3);
  light.position.set(4,6,7);scene.add(light);
  const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=false;
  controls.enablePan=false;
  controls.minDistance=3.4;
  controls.maxDistance=18;
  controls.enableZoom=true;
  controls.enableRotate=true;
  controls.target.set(0,0,0);
  controls.update();

  const spheres:THREE.Mesh[]=[];
  const spheresGeometry=new THREE.SphereGeometry(1,28,22);
  const bondMaterial=new THREE.MeshStandardMaterial({color:0xb5bfce,metalness:.15,roughness:.35});
  const bondGeometry=new THREE.CylinderGeometry(.095,.095,1,10);
  const bonds:THREE.Mesh[]=[];
  for(const [first,second] of molecule.bonds){
   const start=new THREE.Vector3(...molecule.atoms[first].at);
   const end=new THREE.Vector3(...molecule.atoms[second].at);
   const offset=end.clone().sub(start);
   const mesh=new THREE.Mesh(bondGeometry,bondMaterial);
   mesh.position.copy(start.add(end).multiplyScalar(.5));
   mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),offset.clone().normalize());
   mesh.scale.y=offset.length();
   scene.add(mesh);bonds.push(mesh);
  }
  molecule.atoms.forEach((atom,atomIndex)=>{
   const style=atomStyle[atom.element];
   const material=new THREE.MeshStandardMaterial({
    color:style.color,metalness:.1,roughness:.34,
    emissive:atomIndex===0?0x253d92:0x000000,
    emissiveIntensity:atomIndex===0?.36:0
   });
   const sphere=new THREE.Mesh(spheresGeometry,material);
   sphere.position.set(...atom.at);
   sphere.scale.setScalar(style.radius);
   sphere.userData.index=atomIndex;
   sphere.name=style.label+' '+(atomIndex+1);
   scene.add(sphere);spheres.push(sphere);
  });

  const render=()=>renderer.render(scene,camera);
  rerenderScene.current=render;
  sphereHandles.current=spheres;
  const onResize=()=>{
   const {width,height}=host.getBoundingClientRect();
   if(width<=0||height<=0)return;
   camera.aspect=width/height;
   camera.updateProjectionMatrix();
   renderer.setSize(width,height,false);
   render();
  };
  const observer=new ResizeObserver(onResize);
  observer.observe(host);
  onResize();
  controls.addEventListener('change',render);
  const raycaster=new THREE.Raycaster(),cursor=new THREE.Vector2();
  let down:{x:number;y:number}|null=null;
  const downHandler=(event:PointerEvent)=>{down={x:event.clientX,y:event.clientY};};
  const upHandler=(event:PointerEvent)=>{
   if(!down||Math.hypot(event.clientX-down.x,event.clientY-down.y)>7){down=null;return;}
   down=null;
   const rect=renderer.domElement.getBoundingClientRect();
   cursor.x=((event.clientX-rect.left)/rect.width)*2-1;
   cursor.y=-((event.clientY-rect.top)/rect.height)*2+1;
   raycaster.setFromCamera(cursor,camera);
   const hit=raycaster.intersectObjects(spheres,false)[0];
   if(hit){setSelectedAtom(hit.object.userData.index as number);}
  };
  renderer.domElement.addEventListener('pointerdown',downHandler);
  renderer.domElement.addEventListener('pointerup',upHandler);
  reset.current=()=>{
   camera.position.set(0,0,10);controls.target.set(0,0,0);controls.update();render();
  };
  return()=>{
   reset.current=null;rerenderScene.current=null;sphereHandles.current=[];
   renderer.domElement.removeEventListener('pointerdown',downHandler);
   renderer.domElement.removeEventListener('pointerup',upHandler);
   observer.disconnect();
   controls.removeEventListener('change',render);
   controls.dispose();
   for(const sphere of spheres)(sphere.material as THREE.Material).dispose();
   spheresGeometry.dispose();bondMaterial.dispose();bondGeometry.dispose();
   renderer.dispose();
   if(host.contains(renderer.domElement))host.removeChild(renderer.domElement);
  };
 },[molecule]);
 useEffect(()=>{
  sphereHandles.current.forEach((mesh,i)=>{
   const material=mesh.material as THREE.MeshStandardMaterial;
   material.emissive.setHex(i===selectedAtom?0x253d92:0x000000);
   material.emissiveIntensity=i===selectedAtom?.36:0;
  });
  rerenderScene.current?.();
 },[selectedAtom,molecule]);
 const atom=molecule.atoms[selectedAtom]??molecule.atoms[0];
 const selectedName=atomStyle[atom.element].label;
 return <ScienceStage subject="Química" title="Moléculas em 3D — laboratório livre"
  description="Gire uma molécula com o mouse ou dedo, aproxime usando a roda ou pinça e toque em cada átomo para inspecioná-lo.">
  <div className="k-molecule-choices" role="group" aria-label="Escolha uma molécula">
   {molecules.map((item,i)=><button key={item.id} type="button" aria-pressed={index===i}
    onClick={()=>{setIndex(i);setSelectedAtom(0);}}>{item.formula} · {item.name}</button>)}
  </div>
  <div ref={stage} className="k-molecule-3d-canvas"
   role="group" aria-label={'Visualizador tridimensional de '+molecule.name}>
   {webglError&&<p role="status">Este dispositivo não conseguiu abrir WebGL. Use a lista de átomos abaixo ou o simulador externo, se disponível.</p>}
  </div>
  <div className="k-molecule-controls">
   <button type="button" onClick={()=>reset.current?.()}>Reiniciar visão</button>
   <span>Arraste para girar · pinça ou roda para ampliar</span>
  </div>
  <div className="k-molecule-atoms" role="group" aria-label="Selecione um átomo por teclado">
   {molecule.atoms.map((part,i)=><button type="button" key={i} aria-pressed={selectedAtom===i}
    onClick={()=>setSelectedAtom(i)}>{atomStyle[part.element].label} {i+1}</button>)}
  </div>
  <div className="k-molecule-inspector" aria-live="polite">
   <span>ESTRUTURA MOLECULAR · {molecule.formula}</span>
   <h4>{molecule.geometry}</h4>
   <p><strong>Ângulo característico:</strong> {molecule.angle}</p>
   <p>{molecule.explanation}</p>
   <p><strong>Átomo selecionado:</strong> {selectedName} ({atom.element})</p>
  </div>
  <p className="k-science-note">Representação esférica idealizada (bola-e-vareta), sem escala física. A geometria visual é aproximada, não mostra os elétrons nem os comprimentos ou ângulos experimentais exatos; consulte materiais de química estrutural para detalhes.</p>
 </ScienceStage>;
}
