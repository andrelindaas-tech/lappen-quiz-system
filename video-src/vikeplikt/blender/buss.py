# Bybuss (12 m) og sykkel for vikepliktfilmen. Z opp, fronten mot -Y (blir +z i three, som bilmodellen).
import bpy, bmesh, math
from mathutils import Matrix, Vector
bpy.ops.wm.read_factory_settings(use_empty=True)
def srgb(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    return tuple(x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c)
def mat(n,hx,r=.5,m=0):
    M=bpy.data.materials.new(n); M.use_nodes=True; b=M.node_tree.nodes['Principled BSDF']; b.inputs['Base Color'].default_value=(*srgb(hx),1); b.inputs['Roughness'].default_value=r; b.inputs['Metallic'].default_value=m; return M
def coll(n):
    c=bpy.data.collections.new(n); bpy.context.scene.collection.children.link(c); return c
def box(c,name,x0,x1,y0,y1,z0,z1,m,bev=.02,M=None):
    bm=bmesh.new(); bmesh.ops.create_cube(bm,size=1)
    for v in bm.verts: v.co.x=(x0+x1)/2+v.co.x*(x1-x0); v.co.y=(y0+y1)/2+v.co.y*(y1-y0); v.co.z=(z0+z1)/2+v.co.z*(z1-z0)
    me=bpy.data.meshes.new(name); bm.to_mesh(me); bm.free(); me.materials.append(m)
    o=bpy.data.objects.new(name,me); c.objects.link(o)
    if M: o.matrix_world=M
    if bev: d=o.modifiers.new('B','BEVEL'); d.width=bev; d.segments=2
    return o
def cyl(c,name,r,depth,m,M,segs=18):
    bm=bmesh.new(); bmesh.ops.create_cone(bm,cap_ends=True,segments=segs,radius1=r,radius2=r,depth=depth)
    me=bpy.data.meshes.new(name); bm.to_mesh(me); bm.free(); me.materials.append(m)
    o=bpy.data.objects.new(name,me); c.objects.link(o); o.matrix_world=M; return o
BODY=mat('BussLakk','#2f6f8f',.4); ROOF=mat('BussTak','#e9edee',.5); GLASS=mat('BussGlass','#1b2730',.12,.4); DARK=mat('BussMork','#1d2124',.7)
TYRE=mat('BussDekk','#141618',.9); RIM=mat('BussFelg','#b9bfc3',.4,.6); LIGHT=mat('BussLykt','#fff6d8',.2); RED=mat('BussRod','#c3262c',.4); SKILT=mat('BussSkilt','#ffb000',.3)
b=coll('Buss')
L,W,H=12.0,2.55,3.0; y0,y1=-L/2,L/2
box(b,'Kropp',-W/2,W/2,y0,y1,.95,H,BODY,.12)
# nedre del med hjulbuer: kassen går ned til .3 mellom og foran/bak hjulene
for a,c2 in ((y0,y0+1.95),(y0+3.25,y1-3.95),(y1-2.65,y1)): box(b,'Nedre',-W/2,W/2,a,c2,.3,1.0,BODY,.05)
for a,c2 in ((y0+1.95,y0+3.25),(y1-3.95,y1-2.65)): box(b,'Hjulbue',-W/2+.02,W/2-.02,a,c2,1.02,1.08,DARK,.01)
box(b,'Tak',-W/2+.05,W/2-.05,y0+.3,y1-.3,H-.05,H+.12,ROOF,.06)
for s in (-1,1): box(b,'Vinduer%+d'%s,s*W/2-.03,s*W/2+.03,y0+1.4,y1-.4,1.35,2.6,GLASS,.02) if s>0 else None
box(b,'VinduerV',W/2-.03,W/2+.02,y0+1.3,y1-.5,1.35,2.6,GLASS,.02)
# høyre side (-X): vinduer mellom dørene, to dører
box(b,'VinduH1',-W/2-.02,-W/2+.03,y0+2.4,y0+5.6,1.35,2.6,GLASS,.02)
box(b,'VinduH2',-W/2-.02,-W/2+.03,y0+6.9,y1-.5,1.35,2.6,GLASS,.02)
for k,(a,c2) in enumerate(((y0+.25,y0+1.55),(y0+5.7,y0+6.8))):
    box(b,'Dor%d'%k,-W/2-.025,-W/2+.03,a,c2,.45,2.75,GLASS,.02)
    box(b,'Dorlist%d'%k,-W/2-.035,-W/2+.0,(a+c2)/2-.025,(a+c2)/2+.025,.45,2.75,DARK,0)
box(b,'Frontrute',-W/2+.08,W/2-.08,y0-.03,y0+.02,1.1,2.75,GLASS,.04)
box(b,'Linjeskilt',-.85,.85,y0-.05,y0,2.5,2.75,SKILT,.01)
box(b,'Bakrute',-W/2+.25,W/2-.25,y1-.02,y1+.03,1.7,2.6,GLASS,.03)
box(b,'Stotfanger',-W/2,W/2,y0-.12,y0+.05,.3,.6,DARK,.04)
box(b,'StotfangerB',-W/2,W/2,y1-.05,y1+.12,.3,.6,DARK,.04)
for x in (-.95,.95):
    box(b,'Lykt%+d'%x,x-.2,x+.2,y0-.05,y0,.75,.92,LIGHT,.02)
    box(b,'Baklys%+d'%x,x-.12,x+.12,y1,y1+.04,.7,1.2,RED,.01)
for y in (y0+2.6,y1-3.3):
    for x in (-1.1,1.1):
        M=Matrix.Translation((x,y,.5))@Matrix.Rotation(math.radians(90),4,'Y')
        cyl(b,'Hjul',.5,.32,TYRE,M,22); cyl(b,'Felg',.28,.34,RIM,M,16)
# Sykkel (hjulavstand ca 1,05 m), fronten mot -Y
s=coll('Sykkel'); FR=mat('Ramme','#c0392b',.4,.3); BL=mat('Sort','#1a1c1e',.6)
for y in (-.53,.53):
    bpy.ops.mesh.primitive_torus_add(major_radius=.33,minor_radius=.025,major_segments=32,minor_segments=8,location=(0,y,.35),rotation=(0,math.radians(90),0))
    t=bpy.context.active_object; t.data.materials.append(BL); [c.objects.unlink(t) for c in t.users_collection]; s.objects.link(t)
def tube(c,name,a,b2,r,m):
    a=Vector(a); b2=Vector(b2); d=b2-a; M=Matrix.Translation((a+b2)/2)@d.to_track_quat('Z','Y').to_matrix().to_4x4()
    return cyl(c,name,r,d.length,m,M,10)
P={'bak':(0,.53,.35),'front':(0,-.53,.35),'krank':(0,.05,.32),'sete':(0,.28,.82),'styre':(0,-.38,.92)}
tube(s,'Kjede',P['krank'],P['bak'],.018,FR); tube(s,'Setestag',P['bak'],(0,.25,.75),.018,FR)
tube(s,'Seterør',P['krank'],P['sete'],.024,FR); tube(s,'Overrør',(0,.25,.75),(0,-.36,.8),.024,FR); tube(s,'Skrårør',P['krank'],(0,-.36,.78),.026,FR)
tube(s,'Gaffel',(0,-.36,.82),P['front'],.02,FR); tube(s,'Styrestamme',(0,-.36,.8),P['styre'],.02,BL)
tube(s,'Styre',(-.26,-.38,.93),(.26,-.38,.93),.016,BL)
box(s,'Sete',-.07,.07,.2,.36,.82,.87,BL,.02)
bpy.ops.wm.save_as_mainfile(filepath='/home/claude/blend/buss.blend')
for n,f in (('Buss','buss.glb'),('Sykkel','sykkel.glb')):
    bpy.ops.object.select_all(action='DESELECT')
    for o in bpy.data.collections[n].objects: o.select_set(True)
    bpy.ops.export_scene.gltf(filepath='/home/claude/blend/'+f, use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
print('ok')
