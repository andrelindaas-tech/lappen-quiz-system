import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';

import {modes, usage} from './content.js';
const $=s=>document.querySelector(s), viewport=$('#viewport');
let renderer, car, selected='drl', enabled=true, night=true, disposed=false;
const lights=[], beams=[], groups=new Set();
const scene=new THREE.Scene();scene.background=new THREE.Color('#172125');
const camera=new THREE.PerspectiveCamera(37,1,.1,100);camera.position.set(5.0,2.65,6.8);
try{renderer=new THREE.WebGLRenderer({antialias:true});}catch(e){$('#loading').textContent='3D-visningen krever WebGL. Prøv en nettleser med maskinvareakselerasjon.';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;viewport.append(renderer.domElement);renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();renderer.setAnimationLoop(null);$('#loading').hidden=false;$('#loading').textContent='3D-visningen ble avbrutt. Last siden på nytt for å starte den igjen.';});
const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
const bloom=new UnrealBloomPass(new THREE.Vector2(800,600),.32,.28,2.2);composer.addPass(bloom);composer.addPass(new OutputPass());
const pmrem=new THREE.PMREMGenerator(renderer), room=new RoomEnvironment();const env=pmrem.fromScene(room,.04);scene.environment=env.texture;scene.environmentIntensity=.25;room.dispose();pmrem.dispose();
const hemi=new THREE.HemisphereLight(0xc3dcf2,0x273228,.9);scene.add(hemi);
const key=new THREE.DirectionalLight(0xe6f2ff,2.5);key.position.set(-3,7,5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.1,far:25});key.shadow.bias=-.0003;key.shadow.normalBias=.025;scene.add(key);
const fill=new THREE.DirectionalLight(0xb5d4ff,1.7);fill.position.set(4,3,-4);scene.add(fill);
const plateLight=new THREE.SpotLight(0xe7efff,1.2,.5,.9,.6,1);plateLight.position.set(0,.66,-2.04);plateLight.target.position.set(0,.55,-1.97);scene.add(plateLight,plateLight.target);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:0x253336,roughness:.85}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);scene.fog=new THREE.Fog(scene.background,17,45);
const ring=new THREE.Mesh(new THREE.RingGeometry(3.20,3.21,128),new THREE.MeshBasicMaterial({color:0x647576,transparent:true,opacity:.25,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.005;scene.add(ring);
// Soft contact shadow grounded under the chassis and each tyre.
const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=128;
const contactCtx=contactCanvas.getContext('2d');const contactGradient=contactCtx.createRadialGradient(64,64,5,64,64,64);
contactGradient.addColorStop(0,'rgba(0,0,0,.65)');contactGradient.addColorStop(.55,'rgba(0,0,0,.30)');contactGradient.addColorStop(1,'rgba(0,0,0,0)');
contactCtx.fillStyle=contactGradient;contactCtx.fillRect(0,0,128,128);
const contactTexture=new THREE.CanvasTexture(contactCanvas);
function contact(x,z,w,h,opacity){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:contactTexture,transparent:true,depthWrite:false,opacity}));m.rotation.x=-Math.PI/2;m.position.set(x,.007,z);scene.add(m);}
contact(0,0,2.2,4.1,.7);for(const x of [-.87,.87])for(const z of [-1.18,1.25])contact(x,z,.54,.78,.85);
window.addEventListener('pagehide',()=>contactTexture.dispose(),{once:true});
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.8,0);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=4;controls.maxDistance=14;controls.maxPolarAngle=Math.PI/2-.025;
const views={front:new THREE.Vector3(5.0,2.65,6.8),rear:new THREE.Vector3(-5.0,2.65,-6.8),side:new THREE.Vector3(7.5,2.2,.2)};
let destination=null;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function fittedView(id){const p=views[id].clone();if(id==='side'&&selected==='right')p.x=-8;return p.sub(controls.target).multiplyScalar(Math.max(1,1.15/camera.aspect)).add(controls.target);}
function view(id){destination=fittedView(id);if(reducedMotion.matches){camera.position.copy(destination);destination=null;controls.update();}}

controls.addEventListener('start',()=>destination=null);
function resize(){const w=viewport.clientWidth,h=viewport.clientHeight;if(!w||!h)return;renderer.setSize(w,h);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();controls.maxDistance=Math.max(14,12/camera.aspect);view(modes.find(m=>m[0]===selected)[4]);}const observer=new ResizeObserver(resize);observer.observe(viewport);resize();
// Independent groups exported from Blender. Strength changes happen in the browser.
function activeGroups(){if(!enabled||selected==='off')return [];const base=['drl','tail','plate'];switch(selected){case'low':return [...base,'low'];case'high':return [...base,'low','high'];case'parking':return base;case'tail':return base;case'brake':return [...base,'brake'];case'fog':return [...base,'low','fog'];case'fog_front':return [...base,'fog_front'];case'left':return ['indicator_left'];case'right':return ['indicator_right'];case'hazard':return ['indicator_left','indicator_right'];default:return [selected];}}
function updateLights(t){const active=activeGroups(),blink=(t%800)<400;for(const o of lights){const g=o.userData.lightGroup;let on=active.includes(g);if(g.startsWith('indicator'))on=on&&blink;let power=({tail:2.5,brake:13,drl:10,low:12,high:18,fog:12,fog_front:10,plate:5,reverse:10})[g]??12;if(g==='drl'&&selected!=='drl')power=1.5;o.material.emissiveIntensity=on?power:0;o.material.color.copy(o.userData.lensColor).multiplyScalar(on?1:.09);}
 for(const b of beams){const isFog=selected==='fog_front';const on=enabled&&['low','high','fog','fog_front'].includes(selected);b.spot.visible=on;b.patch.visible=on;b.spot.position.y=isFog?.48:1.0;b.spot.intensity=selected==='high'?85:isFog?15:30;b.spot.angle=selected==='high'?.23:isFog?.65:.4;b.spot.target.position.z=selected==='high'?15:isFog?4:8;b.patch.scale.set(isFog?3.5:2.0,selected==='high'?9:isFog?2.5:4,1);b.patch.position.z=selected==='high'?8:isFog?3.7:5.5;}
 plateLight.visible=active.includes('plate');}
function select(id,move=true){selected=id;enabled=id!=='off';const m=modes.find(m=>m[0]===id);$('#title').textContent=m[1];$('#description').textContent=m[2];$('#tip').textContent=m[3];$('#usage').textContent=usage[id];syncStatus();$('#number').textContent=id==='off'?'LYSENE ER AV':String(modes.indexOf(m)+1).padStart(2,'0')+' / '+(modes.length-1);document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===id)));if(move&&id!=='off')view(m[4]);if(move&&matchMedia('(max-width:1050px)').matches){if(parent!==window)parent.postMessage({type:'car-lights-show'},location.origin);else $('.stage').scrollIntoView({block:'start',behavior:'instant'});}updateLights(performance.now());}
function syncStatus(){
 const on=enabled&&selected!=='off', blinking=on&&['left','right','hazard'].includes(selected);
 const status=on?(blinking?'Blinker':'På'):'Av';
 $('#mode-tag').textContent=modes.find(m=>m[0]===selected)[1]+' · '+status;
 $('#mode-tag').dataset.active=String(on);
 $('#light-status').textContent=status;
 $('#light-toggle').setAttribute('aria-pressed',String(on));
 $('#light-toggle').disabled=selected==='off';
 $('#toggle-label').textContent=on?'Slå av lysene':'Slå på lysene';$('#stage-toggle').textContent=on?'Slå av':'Slå på';$('#stage-toggle').setAttribute('aria-pressed',String(on));$('#stage-toggle').disabled=selected==='off';
}
$('#light-toggle').onclick=toggleLights;$('#stage-toggle').onclick=toggleLights;function toggleLights(){enabled=!enabled;syncStatus();updateLights(performance.now());}
for(const m of modes){const b=document.createElement('button');b.dataset.mode=m[0];b.textContent=m[1];b.setAttribute('aria-pressed','false');b.onclick=()=>select(m[0]);$('#modes').append(b);}select('drl',false);
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>view(b.dataset.view));
function setDay(isDay){night=!isDay;$('.stage').classList.toggle('day',isDay);$('#day').setAttribute('aria-pressed',String(isDay));$('#night').setAttribute('aria-pressed',String(!isDay));scene.background.set(isDay?'#cbd5cd':'#172125');scene.fog.color.copy(scene.background);floor.material.color.set(isDay?'#a6b5aa':'#253336');scene.environmentIntensity=isDay?.45:.25;hemi.intensity=isDay?2:.9;}
$('#day').onclick=()=>setDay(true);$('#night').onclick=()=>setDay(false);$('#reset').onclick=()=>{setDay(false);select('drl');};
function zoom(f){destination=null;const offset=camera.position.clone().sub(controls.target);offset.setLength(THREE.MathUtils.clamp(offset.length()*f,4,14));camera.position.copy(controls.target).add(offset);controls.update();}
$('#zoom-in').onclick=()=>zoom(.85);$('#zoom-out').onclick=()=>zoom(1.18);
viewport.addEventListener('keydown',e=>{if(e.key==='+'||e.key==='='){zoom(.85);e.preventDefault();}if(e.key==='-'){zoom(1.18);e.preventDefault();}if(['ArrowLeft','ArrowRight'].includes(e.key)){destination=null;const v=camera.position.clone().sub(controls.target);v.applyAxisAngle(new THREE.Vector3(0,1,0),e.key==='ArrowLeft'?.15:-.15);camera.position.copy(controls.target).add(v);e.preventDefault();}});
new GLTFLoader().load('/models/mint-hatch/mint-hatch.glb?v=rear9',gltf=>{if(disposed)return;car=gltf.scene;car.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=false;if(o.material){o.material.roughness=Math.max(o.material.roughness,.45);o.material.envMapIntensity=.35;}if(o.userData.lightGroup){o.material=o.material.clone();o.userData.lensColor=o.material.color.clone();o.material.envMapIntensity=0;o.material.roughness=.65;o.material.emissive.setRGB(...o.userData.lightColor);lights.push(o);groups.add(o.userData.lightGroup);}}});scene.add(car);
 const registration=car.getObjectByName('Registration_plate.001') || car.children.find(o=>o.name.startsWith('Registration_plate')&&new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()).z<0);
 if(registration){const c=new THREE.Box3().setFromObject(registration).getCenter(new THREE.Vector3());plateLight.position.copy(c).add(new THREE.Vector3(0,.12,-.08));plateLight.target.position.copy(c);}
 $('#loading').hidden=true;updateLights(performance.now());},undefined,e=>{$('#loading').textContent='Kunne ikke laste bilmodellen. Last siden på nytt.';console.error(e);});
// Soft ground pools illustrate spread, not a photometric simulation.
const texCanvas=document.createElement('canvas');texCanvas.width=texCanvas.height=128;const ctx=texCanvas.getContext('2d');const grad=ctx.createRadialGradient(64,64,0,64,64,64);grad.addColorStop(0,'rgba(220,239,255,.5)');grad.addColorStop(1,'rgba(220,239,255,0)');ctx.fillStyle=grad;ctx.fillRect(0,0,128,128);const beamTexture=new THREE.CanvasTexture(texCanvas);
for(const x of [-.59,.59]){const spot=new THREE.SpotLight(0xdcefff,30,24,.4,.8,1.2);spot.position.set(x,1.0,2.055);spot.target.position.set(x,.04,8);scene.add(spot,spot.target);const patch=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:beamTexture,transparent:true,depthWrite:false,opacity:.65}));patch.rotation.x=-Math.PI/2;patch.position.set(x,.009,5.5);scene.add(patch);beams.push({spot,patch});}
// Clicking a lamp opens the corresponding explanation; drags remain orbit gestures.
let down=null;const ray=new THREE.Raycaster();renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5||!car)return;const rect=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);const hit=ray.intersectObject(car,true)[0];const g=hit?.object.userData.lightGroup;if(g)select(({indicator_left:'left',indicator_right:'right'})[g]||g,false);});
let inView=true;const visibilityObserver=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;});visibilityObserver.observe(viewport);
let last=performance.now();renderer.setAnimationLoop(t=>{if(document.hidden||!inView)return;const dt=Math.min((t-last)/1000,.1);last=t;if(destination){const a=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));const b=new THREE.Spherical().setFromVector3(destination.clone().sub(controls.target));const f=1-Math.exp(-dt*6);const angle=THREE.MathUtils.euclideanModulo(b.theta-a.theta+Math.PI,Math.PI*2)-Math.PI;a.theta+=angle*f;a.phi=THREE.MathUtils.lerp(a.phi,b.phi,f);a.radius=THREE.MathUtils.lerp(a.radius,b.radius,f);camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(a));if(camera.position.distanceTo(destination)<.01)destination=null;}controls.update();updateLights(t);composer.render();});
window.addEventListener('pagehide',()=>{disposed=true;renderer.setAnimationLoop(null);observer.disconnect();visibilityObserver.disconnect();controls.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.material)for(const m of(Array.isArray(o.material)?o.material:[o.material]))m.dispose();});beamTexture.dispose();env.dispose();composer.passes.forEach(p=>p.dispose?.());composer.dispose();renderer.dispose();},{once:true});









window.addEventListener('pageshow',e=>{if(e.persisted&&disposed)location.reload();});
