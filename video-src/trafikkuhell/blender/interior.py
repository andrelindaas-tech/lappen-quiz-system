import bpy, bmesh, math
from mathutils import Vector, Matrix
bpy.ops.wm.read_factory_settings(use_empty=True)
col = bpy.data.collections.new('Interior'); bpy.context.scene.collection.children.link(col)
def srgb(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    return tuple(x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c)
def mat(name, hexc, rough=.7, metal=0):
    m=bpy.data.materials.new(name); m.use_nodes=True; b=m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value=(*srgb(hexc),1); b.inputs['Roughness'].default_value=rough; b.inputs['Metallic'].default_value=metal; return m
DASH=mat('Dash','#33383d',.75); SOFT=mat('Soft','#4a5157',.85); TRIM=mat('Trim','#8d969c',.6); SEAT=mat('Seat','#2a2e33',.95)
CARPET=mat('Teppe','#24282c',1); CHROME=mat('Chrome','#b8bec2',.3,.8); VEST=mat('VestI','#d8f046',.6); REFL=mat('ReflI','#d5dadd',.3); WHEEL=mat('Ratt','#1e2226',.6)
def finish(name, bm, m, M=Matrix(), bevel=0):
    me=bpy.data.meshes.new(name); bm.to_mesh(me); bm.free(); me.materials.append(m)
    o=bpy.data.objects.new(name, me); col.objects.link(o); o.matrix_world=M
    if bevel: md=o.modifiers.new('B','BEVEL'); md.width=bevel; md.segments=2; md.limit_method='ANGLE'
    return o
def box(name, x0,x1,y0,y1,z0,z1, m, bevel=.008, M=None):
    bm=bmesh.new(); bmesh.ops.create_cube(bm,size=1)
    for v in bm.verts: v.co.x=(x0+x1)/2+v.co.x*(x1-x0); v.co.y=(y0+y1)/2+v.co.y*(y1-y0); v.co.z=(z0+z1)/2+v.co.z*(z1-z0)
    return finish(name,bm,m,M or Matrix(),bevel)
# Koordinater: Z opp, -Y fremover, førersiden er -X. Gulvets overside z=0.30.
box('Gulv',-.95,.95,-1.05,1.05,.26,.30,CARPET,0)
box('Spjeldvegg',-.95,.95,-1.08,-1.0,.26,.66,DASH,0)            # tett mellom gulv og dashbord
# Dashbord: profil ekstrudert på tvers
bm=bmesh.new(); prof=[(-.52,.62),(-1.02,.62),(-1.06,.98),(-.92,1.12),(-.64,1.09),(-.52,.97)]
L=[bm.verts.new((-.95,y,z)) for y,z in prof]; R=[bm.verts.new((.95,y,z)) for y,z in prof]; n=len(prof)
for i in range(n): bm.faces.new((L[i],L[(i+1)%n],R[(i+1)%n],R[i]))
bm.faces.new(L[::-1]); bm.faces.new(R); finish('Dashbord',bm,DASH,bevel=.025)
box('Instrumenthus',-.6,-.16,-.72,-.56,1.06,1.17,SOFT,.02)
# Midtstabel med knapp for nødblink, vendt mot føreren (mot +Y), tiltet 15° bakover
T=Matrix.Translation((0,-.47,.93))@Matrix.Rotation(math.radians(-15),4,'X')
box('Midtstabel',-.16,.16,-.04,.02,-.15,.15,SOFT,.012,T)
box('Knapp',-.032,.032,.02,.035,-.032,.032,DASH,.004,Matrix.Translation((0,-.47,.95)) @ Matrix.Rotation(math.radians(-15),4,'X') @ Matrix.Translation((0,0,0)))
box('Midtkonsoll',-.15,.15,-1.0,-.25,.30,.66,DASH,.03)
box('Girspak',-.025,.025,-.62,-.57,.66,.8,TRIM,.01)
# Ratt: krans, tre eiker og nav i samme plan; rattstamme langs normalen inn i dashbordet.
C=Vector((-.38,-.40,1.0)); W=Matrix.Translation(C)@Matrix.Rotation(math.radians(-68),4,'X')   # lokal Z = rattets akse mot føreren
bm=bmesh.new(); bmesh.ops.create_circle(bm,cap_ends=False,radius=.19,segments=32)
ring=finish('RattkransBase',bm,WHEEL,W)
md=ring.modifiers.new('S','SCREW'); bpy.data.objects.remove(ring, do_unlink=True)
bpy.ops.mesh.primitive_torus_add(major_radius=.19,minor_radius=.022,major_segments=36,minor_segments=10)
t=bpy.context.active_object; t.name='Rattkrans'; t.data.materials.append(WHEEL); t.matrix_world=W
for c in t.users_collection: c.objects.unlink(t)
col.objects.link(t)
def cyl(name,r,z0,z1,m,M,segs=16):
    bm=bmesh.new(); bmesh.ops.create_cone(bm,cap_ends=True,segments=segs,radius1=r,radius2=r,depth=z1-z0)
    for v in bm.verts: v.co.z+=(z0+z1)/2
    return finish(name,bm,m,M)
cyl('Rattnav',.06,-.03,.035,WHEEL,W,20)
cyl('Rattstamme',.035,-.36,-.02,DASH,W,12)
for k,ang in enumerate((0,180,270)):
    Ms=W@Matrix.Rotation(math.radians(ang),4,'Z')
    box('Eike%d'%k,.05,.18,-.018,.018,-.012,.012,WHEEL,.006,Ms)
# A-stolper og takkant
for x in (-.9,.9): box('Astolpe%+d'%int(x*10),x-.035,x+.035,-.035,.035,-.38,.38,TRIM,.015,Matrix.Translation((x,-.78,1.42))@Matrix.Rotation(math.radians(-38),4,'X'))
box('Takkant',-.95,.95,-.62,-.28,1.69,1.75,TRIM,.015)
# Førerdør: panel fra gulvet og opp, terskel tett mot gulvet, armlene, dørlomme med vesten
box('Dorpanel',-.99,-.92,-.65,.75,.26,1.12,SOFT,.02)
box('Terskel',-.95,-.86,-.65,.75,.26,.36,TRIM,.015)
box('Armlene',-.92,-.80,-.25,.32,.86,.92,TRIM,.015)
box('Dorhandtak',-.925,-.9,-.3,-.18,.96,1.0,CHROME,.006)
box('LommeBunn',-.92,-.80,-.32,.42,.36,.40,DASH,.008)
box('LommeKant',-.82,-.79,-.32,.42,.36,.49,DASH,.008)
box('VestBrettet',-.905,-.825,-.27,.33,.40,.6,VEST,.02)
for k,y in enumerate((-.1,.16)): box('VestRefleks%d'%k,-.907,-.823,y-.025,y+.025,.40,.602,REFL,.004)
# Førersete
box('Sete',-.70,-.14,.08,.62,.30,.50,SEAT,.05)
box('Seterygg',-.70,-.14,.58,.72,.48,1.18,SEAT,.05,Matrix.Translation((0,.65,.83))@Matrix.Rotation(math.radians(12),4,'X')@Matrix.Translation((0,-.65,-.83)))
box('Nakkestotte',-.56,-.28,.66,.76,1.22,1.4,SEAT,.04,Matrix.Translation((0,.65,.83))@Matrix.Rotation(math.radians(12),4,'X')@Matrix.Translation((0,-.65,-.83)))
bpy.context.view_layer.update()
# Venstrestyrt bil: speil alt om X, så førersiden blir +X (venstre når en ser fremover mot -Y).
import bmesh as _bm
for o in list(col.objects):
    dg=bpy.context.evaluated_depsgraph_get(); me=bpy.data.meshes.new_from_object(o.evaluated_get(dg)); me.transform(o.matrix_world)
    b=_bm.new(); b.from_mesh(me)
    for v in b.verts: v.co.x=-v.co.x
    _bm.ops.reverse_faces(b, faces=b.faces); b.to_mesh(me); b.free()
    for m in o.data.materials: me.materials.append(m) if m.name not in [x.name for x in me.materials] else None
    o.modifiers.clear(); o.data=me; o.matrix_world=Matrix()
bpy.context.view_layer.update()
def center(n):
    o=bpy.data.objects[n]; bb=[o.matrix_world@Vector(c) for c in o.bound_box]; return [round(sum(v[i] for v in bb)/8,3) for i in range(3)]
print('KNAPP', center('Knapp'), 'VEST', center('VestBrettet'), 'NAV', center('Rattnav'))
# Kontroll: knappen synlig fra førerens øyepunkt (ingen andre flater i veien)
from mathutils.bvhtree import BVHTree
dg=bpy.context.evaluated_depsgraph_get()
eye=Vector((.38,.45,1.33)); kn=Vector(center('Knapp'))+Vector((0,.03,0))
hits=[]
for o in col.objects:
    if o.name in ('Knapp','Midtstabel'): continue
    e=o.evaluated_get(dg); me=e.to_mesh(); me.transform(o.matrix_world); t=BVHTree.FromPolygons([v.co.copy() for v in me.vertices],[p.vertices[:] for p in me.polygons]); e.to_mesh_clear()
    d=(kn-eye); h=t.ray_cast(eye,d.normalized(),d.length)
    if h[0] is not None: hits.append(o.name)
print('BLOKKERER KNAPPEN:', hits)
bpy.ops.wm.save_as_mainfile(filepath='/home/claude/blend/interior.blend')
bpy.ops.export_scene.gltf(filepath='/home/claude/blend/interior.glb', export_format='GLB', export_apply=True, export_yup=True)
