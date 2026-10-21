# Teppe formet over en liggende person (Z opp, +Y mot hodet). Dekker skuldre til knær, hodet fritt.
import bpy, bmesh, math
bpy.ops.wm.read_factory_settings(use_empty=True)
def srgb(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    return tuple(x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c)
def mat(n,hx,r=1):
    m=bpy.data.materials.new(n); m.use_nodes=True; b=m.node_tree.nodes['Principled BSDF']; b.inputs['Base Color'].default_value=(*srgb(hx),1); b.inputs['Roughness'].default_value=r; return m
WOOL=mat('Ull','#5d708c'); EDGE=mat('Ullkant','#3f4e66')
L, Wd, nu, nv = 1.15, 1.05, 46, 34
bm=bmesh.new(); vs=[]
def body_h(v, u):
    # u: 0 ved knærne, 1 ved skuldrene. Kroppen er bredest og høyest ved brystet.
    half = .2 + .03*u; top = .15 + .07*min(1,u*1.3)
    a=abs(v)
    if a < half: return top*math.sqrt(max(0,1-(a/half)**2))**.7 + .015
    return .015
for i in range(nu+1):
    u=i/nu; y=(u-.5)*L; row=[]
    for j in range(nv+1):
        v=(j/nv-.5)*Wd
        h=body_h(v,u)
        # draperi: kanten faller fra kroppen ned mot bakken i en myk kurve
        half=.2+.03*u; a=abs(v)
        if a>half: h=max(.012, (.15+.07*min(1,u*1.3))*math.exp(-((a-half)/.07)**2)*.6+.012)
        h+= .008*math.sin(9*u+3*v)+.005*math.sin(23*u-11*v)   # små folder
        row.append(bm.verts.new((v,y,h)))
    vs.append(row)
for i in range(nu):
    for j in range(nv):
        f=bm.faces.new((vs[i][j],vs[i][j+1],vs[i+1][j+1],vs[i+1][j]))
        f.material_index = 1 if (j<2 or j>=nv-2 or i<2 or i>=nu-2) else 0
me=bpy.data.meshes.new('Teppe'); bm.to_mesh(me); bm.free(); me.materials.append(WOOL); me.materials.append(EDGE)
for p in me.polygons: p.use_smooth=True
o=bpy.data.objects.new('Teppe',me); bpy.context.scene.collection.objects.link(o)
s=o.modifiers.new('S','SOLIDIFY'); s.thickness=.012; s.offset=1
bpy.ops.wm.save_as_mainfile(filepath='/home/claude/blend/teppe.blend')
bpy.ops.export_scene.gltf(filepath='/home/claude/blend/teppe.glb', export_format='GLB', export_apply=True, export_yup=True)
print('ok')
