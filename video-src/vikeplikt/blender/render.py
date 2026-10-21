import bpy, sys, math
from mathutils import Vector
bpy.ops.wm.open_mainfile(filepath=sys.argv[-3])
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.samples=16; sc.cycles.device='CPU'; w=bpy.data.worlds.new('w'); sc.world=w; w.color=(.8,.85,.9)
sc.render.resolution_x=640; sc.render.resolution_y=480
import bpy
sun=bpy.data.lights.new('s','SUN'); sun.energy=4; so=bpy.data.objects.new('s',sun); sc.collection.objects.link(so); so.rotation_euler=(.6,.3,.5)
pt=bpy.data.lights.new('p','POINT'); pt.energy=150; po=bpy.data.objects.new('p',pt); sc.collection.objects.link(po); po.location=(-.2,.6,1.5)
w.use_nodes=True; w.node_tree.nodes['Background'].inputs[0].default_value=(.75,.8,.9,1); w.node_tree.nodes['Background'].inputs[1].default_value=.8
cam=bpy.data.cameras.new('c'); co=bpy.data.objects.new('c',cam); sc.collection.objects.link(co); sc.camera=co
views=eval(sys.argv[-2]); out=sys.argv[-1]
for k,(eye,tgt,lens) in enumerate(views):
    co.location=eye; d=Vector(tgt)-Vector(eye); co.rotation_euler=d.to_track_quat('-Z','Y').to_euler(); cam.lens=lens
    sc.render.filepath=f'{out}_{k}.png'; bpy.ops.render.render(write_still=True)
