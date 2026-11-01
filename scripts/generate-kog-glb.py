"""Generate the distributable Kog mascot 3D asset (GLB) from original primitives.

Optional asset-export utility, not used by the Next.js runtime.
Install for regeneration: python -m pip install trimesh numpy
Run: python scripts/generate-kog-glb.py
"""
from pathlib import Path
import math
import numpy as np
import trimesh

SCENE=trimesh.Scene()

def add(name, pos, scale, hex_color, resolution=2):
    m=trimesh.creation.icosphere(subdivisions=resolution)
    m.apply_scale(scale)
    m.apply_translation(pos)
    m.visual.vertex_colors=np.tile(np.array(hex_color,dtype=np.uint8), (len(m.vertices),1))
    SCENE.add_geometry(m,node_name=name)

def line(name,p0,p1,r,color):
    a=np.asarray(p0,dtype=float);b=np.asarray(p1,dtype=float)
    d=b-a
    if np.linalg.norm(d)<1e-5:return
    mesh=trimesh.creation.cylinder(radius=r,height=np.linalg.norm(d),sections=10)
    T=trimesh.geometry.align_vectors([0,0,1],d)
    mesh.apply_transform(T)
    mesh.apply_translation((a+b)/2)
    mesh.visual.vertex_colors=np.tile(np.array(color,dtype=np.uint8), (len(mesh.vertices),1))
    SCENE.add_geometry(mesh,node_name=name)

white=[239,239,255,255]; pale=[203,213,252,255];purple=[91,77,227,255];dark=[18,25,44,255];cyan=[56,205,229,255]
add('torso',[0,-.62,0],[.84,.9,.55],pale)
add('chest',[0,-.83,.46],[.44,.42,.14],purple)
add('helmet',[0,.73,0],[1.2,.95,.76],white)
add('faceplate',[0,.79,.59],[.97,.66,.265],dark)
for side in [-1,1]:
    add(f'ear_{side}',[side*1.18,.61,.01],[.27,.43,.36],purple)
    add(f'earlight_{side}',[side*1.34,.65,.1],[.1,.24,.22],cyan)
    add(f'arm_{side}',[side*.96,-.55,.05],[.32,.56,.31],pale)
    add(f'hand_{side}',[side*1.13,-.98,.16],[.27,.28,.27],white)
    add(f'boot_{side}',[side*.45,-1.52,.18],[.34,.23,.49],purple)
    add(f'bootCap_{side}',[side*.42,-1.44,.2],[.26,.19,.39],white)
    points=[[side*.32-.18,.87,.835],[side*.32-.09,1,.855],[side*.32,1.035,.866],[side*.32+.10,.97,.846],[side*.32+.18,.86,.825]]
    for i,(a,b) in enumerate(zip(points,points[1:])):line(f'eye_{side}_{i}',a,b,.055,cyan)
for i,(a,b) in enumerate(zip([[-.16,.49,.849],[0,.40,.862]],[[0,.40,.862],[.16,.49,.849]])):line(f'smile_{i}',a,b,.035,cyan)
add('chest_emblem',[0,-.64,.615],[.33,.33,.04],dark)
# Abstract geometric K on the emblem.
for i,(a,b) in enumerate([([-.10,-.87,.658],[-.10,-.41,.658]),([-.07,-.65,.658],[.14,-.44,.658]),([-.07,-.64,.658],[.14,-.87,.658])]):line(f'chest_K_{i}',a,b,.041,cyan)
line('antenna',[0,1.68,0],[0,1.84,0],.055,purple)
add('antennaTip',[0,1.88,0],[.13,.13,.13],cyan)

out=Path(__file__).resolve().parents[1]/'apps/web/public/brand/kog-3d.glb'
out.parent.mkdir(parents=True,exist_ok=True)
out.write_bytes(SCENE.export(file_type='glb'))
assert out.stat().st_size>1000
verify=trimesh.load(out,force='scene')
assert len(verify.geometry)>10
print(f'Exported {out}: {out.stat().st_size} bytes, {len(verify.geometry)} mesh primitives')