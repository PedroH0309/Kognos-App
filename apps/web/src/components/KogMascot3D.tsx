'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * A genuine realtime WebGL 3D mascot built from Three.js meshes.
 * It does not fetch any external model or execute third-party scripts.
 * Rendering starts only when mounted and respects reduced-motion settings.
 */
export default function KogMascot3D({ small = false }: { small?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!canvas.getContext('webgl2') && !canvas.getContext('webgl')) {
      setFallback(true);
      return;
    }
    let disposed = false;
    let teardown: (() => void) | undefined;
    (async () => {
      try {
        const THREE = await import('three');
        if (disposed) return;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.45;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
        camera.position.set(0, 0.5, 8.9);
        camera.lookAt(0, 0.35, 0);
        scene.add(new THREE.HemisphereLight(0xeef4ff, 0x4b417d, 2.5));
        const key = new THREE.DirectionalLight(0xfdfdff, 3.5); key.position.set(-3, 5, 6); scene.add(key);
        const rim = new THREE.PointLight(0x38cde5, 28, 12); rim.position.set(4, 2, -2); scene.add(rim);
        const purple = new THREE.PointLight(0x9b75ff, 18, 10); purple.position.set(-4, -1, 4); scene.add(purple);

        const lavender = new THREE.MeshStandardMaterial({ color: 0xf1efff, metalness: 0.18, roughness: 0.28 });
        const white = new THREE.MeshStandardMaterial({ color: 0xcbd5fc, metalness: 0.25, roughness: 0.32 });
        const purpleMat = new THREE.MeshStandardMaterial({ color: 0x5b4de3, metalness: 0.35, roughness: 0.28 });
        const accent = new THREE.MeshStandardMaterial({ color: 0x38cde5, emissive: 0x159db5, emissiveIntensity: 0.55, metalness: 0.1, roughness: 0.22 });
        const visor = new THREE.MeshPhysicalMaterial({ color: 0x12192c, metalness: 0.45, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.13 });
        const eye = new THREE.MeshBasicMaterial({ color: 0x74f1ff, toneMapped: false });
        const shadow = new THREE.MeshBasicMaterial({ color: 0x261d4b, transparent: true, opacity: 0.22, depthWrite: false });
        const robot = new THREE.Group(); scene.add(robot);
        const addEllipsoid = (parent: InstanceType<typeof THREE.Group>, material: InstanceType<typeof THREE.Material>, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
          const obj = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), material);
          obj.position.set(x, y, z); obj.scale.set(sx, sy, sz); parent.add(obj); return obj;
        };
        // Torso, neck, head shell, face visor and ear-cups.
        addEllipsoid(robot, white, 0, -0.62, 0, 0.84, 0.9, 0.55);
        addEllipsoid(robot, purpleMat, 0, -0.83, 0.46, 0.44, 0.42, 0.14);
        addEllipsoid(robot, lavender, 0, 0.73, 0, 1.2, 0.95, 0.76);
        addEllipsoid(robot, visor, 0, 0.79, 0.59, 0.97, 0.66, 0.265);
        for (const side of [-1, 1]) {
          addEllipsoid(robot, purpleMat, side * 1.18, 0.61, 0.01, 0.27, 0.43, 0.36);
          addEllipsoid(robot, accent, side * 1.34, 0.65, 0.10, 0.10, 0.24, 0.22);
          const arm = addEllipsoid(robot, white, side * 0.96, -0.55, 0.05, 0.32, 0.56, 0.31);
          arm.rotation.z = side * 0.34;
          addEllipsoid(robot, lavender, side * 1.13, -0.98, 0.16, 0.27, 0.28, 0.27);
          addEllipsoid(robot, purpleMat, side * 0.45, -1.52, 0.18, 0.34, 0.23, 0.49);
          addEllipsoid(robot, lavender, side * 0.42, -1.44, 0.20, 0.26, 0.19, 0.39);
        }
        // Curved expressive eye marks and friendly smile, assembled as real 3D tubes.
        const tube = (points: [number, number, number][], colorMaterial: InstanceType<typeof THREE.Material>, radius: number) => {
          const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
          robot.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 20, radius, 7, false), colorMaterial));
        };
        for (const side of [-1, 1]) {
          tube([
            [side * 0.32 - 0.18, 0.87, 0.837],
            [side * 0.32 - 0.09, 1.0, 0.857],
            [side * 0.32, 1.035, 0.866],
            [side * 0.32 + 0.10, 0.97, 0.849],
            [side * 0.32 + 0.18, 0.86, 0.823],
          ], eye, 0.055);
        }
        tube([[-0.16, 0.49, 0.849], [0, 0.40, 0.862], [0.16, 0.49, 0.849]], eye, 0.032);
        // K chest emblem: physical textured disk in the 3D scene, not a 2D overlay.
        const emblem = document.createElement('canvas'); emblem.width = emblem.height = 256;
        const ctx = emblem.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#30246b'; ctx.beginPath(); ctx.arc(128, 128, 113, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = '#38cde5'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(128, 128, 108, 0, Math.PI * 2); ctx.stroke();
          ctx.font = 'bold 160px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#f6f6ff'; ctx.fillText('K', 128, 144);
        }
        const texture = new THREE.CanvasTexture(emblem); texture.colorSpace = THREE.SRGBColorSpace;
        const emblemMesh = new THREE.Mesh(new THREE.CircleGeometry(0.39, 48), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
        emblemMesh.position.set(0, -0.64, 0.612); robot.add(emblemMesh);
        // Small antenna for a distinctive silhouette.
        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.25, 12), purpleMat); stalk.position.set(0, 1.72, 0); robot.add(stalk);
        addEllipsoid(robot, accent, 0, 1.88, 0, 0.13, 0.13, 0.13);
        const stage = new THREE.Mesh(new THREE.CircleGeometry(1.5, 64), shadow);
        stage.rotation.x = -Math.PI / 2; stage.position.y = -1.84; scene.add(stage);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.018, 8, 80), accent);
        ring.rotation.x = Math.PI / 2; ring.position.y = -1.82; scene.add(ring);

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let drag = false, lastX = 0, manualRotation = 0, raf = 0;
        let visible = true;
        const pointerDown = (e: PointerEvent) => { drag = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); };
        const pointerMove = (e: PointerEvent) => { if (!drag) return; manualRotation += (e.clientX - lastX) * 0.01; lastX = e.clientX; };
        const pointerUp = () => { drag = false; };
        canvas.addEventListener('pointerdown', pointerDown);
        canvas.addEventListener('pointermove', pointerMove);
        canvas.addEventListener('pointerup', pointerUp);
        canvas.addEventListener('pointercancel', pointerUp);
        const resize = () => {
          if (!canvas.parentElement) return;
          const { width, height } = canvas.parentElement.getBoundingClientRect();
          if (width < 1 || height < 1) return;
          renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
        };
        const observer = new ResizeObserver(resize); observer.observe(canvas.parentElement || canvas); resize();
        const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        intersection.observe(canvas);
        const clock = new THREE.Clock();
        const draw = () => {
          if (disposed) return;
          if (visible) {
            const time = clock.getElapsedTime();
            robot.rotation.y = manualRotation + (reducedMotion.matches ? 0 : Math.sin(time * 0.42) * 0.18);
            robot.position.y = reducedMotion.matches ? 0 : Math.sin(time * 1.4) * 0.055;
            renderer.render(scene, camera);
          }
          raf = requestAnimationFrame(draw);
        };
        draw();
        teardown = () => {
          cancelAnimationFrame(raf); observer.disconnect(); intersection.disconnect();
          canvas.removeEventListener('pointerdown', pointerDown); canvas.removeEventListener('pointermove', pointerMove);
          canvas.removeEventListener('pointerup', pointerUp); canvas.removeEventListener('pointercancel', pointerUp);
          scene.traverse(object => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              const mats = Array.isArray(object.material) ? object.material : [object.material];
              for (const mat of mats) mat.dispose();
            }
          });
          texture.dispose(); renderer.dispose(); renderer.forceContextLoss();
        };
      } catch {
        if (!disposed) setFallback(true);
      }
    })();
    return () => { disposed = true; teardown?.(); };
  }, []);
  return <div className={`kog-3d ${small ? 'kog-3d-small' : ''}`}>
    {fallback ? <Image src="/brand/kog-mascot.svg" fill sizes="(max-width: 640px) 180px, 260px" alt="Kog, o mascote do Kognos"/> :
      <canvas ref={canvasRef} role="img" aria-label="Modelo tridimensional interativo de Kog, o robô tutor do Kognos. Arraste para girar."/>}
  </div>;
}