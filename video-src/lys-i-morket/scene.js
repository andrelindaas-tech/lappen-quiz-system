import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {carData} from './car-data.js';

// «To biler møtes i mørket» – 30 s testanimasjon for teori-test.no.
// Eneste inndata er tid i sekunder: renderFrame(t) gjenskaper ethvert bilde.
const DURATION=30;
// Layout per format. Mobil 4:5 har lavere tekst og eget kamera.
const LAYOUT={wide:{W:1920,H:1080,SCENE_H:850,pad:64,label:28,head:54,body:34,headY:122,bodyY:172,bodyLH:42,wrap:1380,fov:38},
 mobile:{W:1080,H:1350,SCENE_H:1090,pad:56,label:26,head:46,body:30,headY:108,bodyY:156,bodyLH:38,wrap:968,fov:48}};
let L=LAYOUT.wide,W=L.W,H=L.H,SCENE_H=L.SCENE_H;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>{v=clamp(v);return v*v*(3-2*v)};
const mix=(a,b,t)=>a+(b-a)*t;
let seed=4021;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};

// ---------- Tidsplan ----------
const HIGH_I=Number(new URLSearchParams(location.search).get('hi')||400000),LOW_I=Number(new URLSearchParams(location.search).get('lo')||9000);
let TOP=new URLSearchParams(location.search).get('cam')==='top';
const DIP_BLUE=7.6,DIP_RED=8.0;
// Blå bil: jevn fart, rolig nedbremsing med nærlys, gradvis opp igjen etter fjernlys.
function blueSpeed(t){return 9-3.5*ease((t-13)/4.5)+2*ease((t-20.5)/6);}
function integrate(f,t){let d=0;const n=Math.ceil(t/.005);const h=t/Math.max(1,n);for(let i=0;i<n;i++)d+=f((i+.5)*h)*h;return d;}
const blueDist=t=>integrate(blueSpeed,t);
const MEET=19.0,RED_V=8,RED0=blueDist(MEET)+RED_V*MEET;
const redDist=t=>RED0-RED_V*t;
const CAR_LEN=4.1;
// Blend opp når det er omtrent to billengder mellom bilene (front mot front), som i vanlig opplæring.
const HIGH_AGAIN=(()=>{let t=10;while(redDist(t)-blueDist(t)>3*CAR_LEN)t+=.01;return +t.toFixed(2);})();
// Regler: trafikkreglene § 15 nr. 2 (fjernlys må ikke blende annen trafikant), nr. 3 (ellers nærlys), § 13 nr. 1 (kunne stanse på oversiktlig strekning).
const TEXTS=[
 [0,'Fjernlys på mørk vei','Fjernlyset lyser langt frem og gir best oversikt når veien er fri.'],
 [6.3,'Blend ned i god tid','Senest når lyskjeglene møtes. Fjernlyset må ikke blende andre trafikanter.'],
 [12.5,'Nærlys gir kortere sikt','Senk farten, så du rekker å reagere og bremse.'],
 [15.3,'Se mot høyre kantlinje','Ikke se inn i lysene til den møtende.'],
 [HIGH_AGAIN,'Blend opp igjen','Når dere er ca. to billengder fra hverandre, blender ikke fjernlyset lenger.'],
 [22.5,'Fjernlys når veien er fri','Blend ned igjen for møtende, og når du kjører bak andre.']];

async function init(){
 const canvas=document.getElementById('film');canvas.width=W;canvas.height=H;
 const ctx=canvas.getContext('2d',{alpha:false});
 const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
 renderer.setSize(W,SCENE_H);renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
 const scene=new THREE.Scene();
 {const c=document.createElement('canvas');c.width=4;c.height=256;const k=c.getContext('2d'),g=k.createLinearGradient(0,0,0,256);g.addColorStop(0,'#040812');g.addColorStop(.7,'#0c1726');g.addColorStop(1,'#16243a');k.fillStyle=g;k.fillRect(0,0,4,256);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;scene.background=t;}
 scene.fog=new THREE.Fog('#0d1724',140,620);
 const camera=new THREE.PerspectiveCamera(38,W/SCENE_H,.1,900);
 // Svakt måneskinn: nok til at veien og terrenget kan følges, men lyktene gjør jobben.
 scene.add(new THREE.HemisphereLight('#5d7396','#10160f',.55));
 const moon=new THREE.DirectionalLight('#9fb4d8',.32);moon.position.set(-60,80,-40);scene.add(moon);

 const std=(color,o={})=>new THREE.MeshStandardMaterial({color,roughness:.9,...o});
 const asphalt=std('#3e444a',{roughness:.85}),shoulder=std('#6d6c62'),grass=std('#3f5a33',{flatShading:true});
 // Oppmerking er belyst materiale (ikke selvlysende), med litt høyere refleks enn asfalten.
 const whiteM=std('#f2f1e8',{roughness:.45}),yellowM=std('#f2c230',{roughness:.45});
 const mesh=(g,m,p=scene)=>{const o=new THREE.Mesh(g,m);o.receiveShadow=true;p.add(o);return o;};
 // Rett vei langs -z. s = avstand langs veien, x = sideforskyvning (høyre = +x i kjøreretningen).
 function strip(s0,s1,x,w,m,y){const g=new THREE.PlaneGeometry(w,s1-s0,1,Math.max(1,Math.ceil((s1-s0)/4)));g.rotateX(-Math.PI/2);const o=mesh(g,m);o.position.set(x,y,-(s0+s1)/2);return o;}
 const HALF=3.7,LANE=1.85;
 strip(-80,700,0,HALF*2+1.6,shoulder,.01);strip(-80,700,0,HALF*2,asphalt,.03);
 for(const s of [-1,1])strip(-80,700,s*(HALF-.2),.15,whiteM,.045);
 for(let s=-80;s<700;s+=12)strip(s,s+3,0,.15,yellowM,.045); // gul kjørefeltlinje (midtlinje)
 // Lave åser, flat korridor langs veien.
 {const pos=[],cell=6;const h=(x,s)=>{const off=Math.abs(x),flat=ease((off-9)/18);return -.1+flat*(1.2+1.6*Math.sin(s*.021+x*.03)+2.4*Math.sin(x*.012-s*.008));};
  for(let s=-100;s<720;s+=cell)for(let x=-220;x<220;x+=cell)for(const tri of [[[x,s],[x+cell,s],[x,s+cell]],[[x+cell,s],[x+cell,s+cell],[x,s+cell]]])for(const [a,b] of tri)pos.push(a,h(a,b),-b);
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.computeVertexNormals();mesh(g,grass);
  // Få, enkle trær.
  const trunkM=std('#4a3f2e'),leafM=std('#2f4a2c',{flatShading:true}),N=70;
  const tr=new THREE.InstancedMesh(new THREE.CylinderGeometry(.15,.2,1,5),trunkM,N),cr=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,6),leafM,N),d=new THREE.Object3D();
  for(let i=0;i<N;i++){const s=-40+rnd()*680,side=i%2?1:-1,x=side*(10+rnd()*45),y=h(x,s),ht=4+rnd()*4;
   d.position.set(x,y+ht*.15,-s);d.scale.set(1,ht*.3,1);d.updateMatrix();tr.setMatrixAt(i,d.matrix);
   d.position.set(x,y+ht*.6,-s);d.scale.set(ht*.28,ht*.8,ht*.28);d.updateMatrix();cr.setMatrixAt(i,d.matrix);}
  tr.castShadow=cr.castShadow=true;tr.receiveShadow=cr.receiveShadow=true;scene.add(tr,cr);
  // Fjerne åssilhuetter.
  for(let i=0;i<10;i++){const m=mesh(new THREE.ConeGeometry(60+rnd()*50,30+rnd()*40,5),std('#0f1a22',{flatShading:true}));m.position.set(-300+i*70,0,-760-rnd()*80);}
 }

 // ---------- Lyskjegler: formet med lysbilde (SpotLight.map) ----------
 // Nærlys: skarp, nedoverrettet avskjæring, litt høyere til høyre (høyretrafikk).
 // Fjernlys: bredt, rundt lysbilde som når langt frem.
 function beamTexture(kind){
  const S=256,c=document.createElement('canvas');c.width=c.height=S;const k=c.getContext('2d');k.fillStyle='#000';k.fillRect(0,0,S,S);
  if(kind==='low'){
   const cut=S*.524; // like under midten = like under horisonten
   k.save();k.beginPath();k.moveTo(0,cut);k.lineTo(S*.52,cut);k.lineTo(S*.64,cut-S*.035);k.lineTo(S,cut-S*.035);k.lineTo(S,S);k.lineTo(0,S);k.closePath();k.clip();
   k.translate(S*.56,cut);k.scale(1.25,.8);const g=k.createRadialGradient(0,0,0,0,0,S*.42);g.addColorStop(0,'#fff');g.addColorStop(.5,'#bbb');g.addColorStop(1,'#000');k.fillStyle=g;k.fillRect(-S,-S,2*S,2*S);k.restore();
  }else{
   const g=k.createRadialGradient(S/2,S*.5,0,S/2,S*.5,S*.5);g.addColorStop(0,'#fff');g.addColorStop(.3,'#d0d0d0');g.addColorStop(.7,'#444');g.addColorStop(1,'#000');k.fillStyle=g;k.fillRect(0,0,S,S);
   // Svakere nedre del: fjernlyset skal nå langt, ikke bare gi en lysere flekk foran bilen.
   const v=k.createLinearGradient(0,S*.5,0,S);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(.35,'rgba(0,0,0,.55)');v.addColorStop(1,'rgba(0,0,0,.85)');k.fillStyle=v;k.fillRect(0,S*.5,S,S*.5);
  }
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
 }
 const lowTex=beamTexture('low'),highTex=beamTexture('high');
 const glowTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const k=c.getContext('2d'),g=k.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,250,235,1)');g.addColorStop(.18,'rgba(255,240,210,.85)');g.addColorStop(.5,'rgba(255,220,170,.18)');g.addColorStop(1,'rgba(255,220,170,0)');k.fillStyle=g;k.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);})();

 const bytes=Uint8Array.from(atob(carData),c=>c.charCodeAt(0));const model=(await new GLTFLoader().parseAsync(bytes.buffer,'')).scene;
 function makeCar(color){
  const obj=model.clone(true),wheels=[];
  obj.traverse(o=>{if(o.name.startsWith('Hjul_'))wheels.push(o);if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.material=o.material.clone();
   if(o.material.name==='Lakk'){o.material.color.set(color);o.material.emissive=new THREE.Color(color);o.material.emissiveIntensity=.28;}
   if(o.material.name==='Frontlys'){o.material.emissive=new THREE.Color('#fff4dc');o.material.emissiveIntensity=2;}
   if(o.material.name==='Baklys'){o.material.emissive=new THREE.Color('#ff2a1a');o.material.emissiveIntensity=1.4;}}});
  const spot=new THREE.SpotLight('#fff3dd',0,0,.62,.35,2);spot.position.set(0,.68,2.0);spot.castShadow=true;spot.shadow.mapSize.set(2048,2048);spot.shadow.camera.near=1;spot.shadow.camera.far=140;spot.shadow.bias=-.0015;spot.shadow.normalBias=.06;spot.shadow.radius=3;
  const target=new THREE.Object3D();obj.add(spot,target);spot.target=target;
  // Glød rundt lyktene: synlig for den som ser lyset rett imot (blending), ikke en kjegle i lufta.
  const glows=[-.58,.58].map(x=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true,fog:false}));s.position.set(x,.68,2.12);obj.add(s);return s;});
  scene.add(obj);return {obj,wheels,spot,target,glows};
 }
 const blue=makeCar('#1e93db'),red=makeCar('#d4483b');
 function setBeam(car,high){
  car.spot.map=high?highTex:lowTex;
  if(high){car.spot.intensity=HIGH_I;car.spot.angle=.34;car.spot.distance=115;car.target.position.set(0,.68-.6,100);}
  else{car.spot.intensity=LOW_I;car.spot.angle=.55;car.spot.distance=70;car.target.position.set(0,.68,60);}
 }
 function place(car,d,x,heading,t){car.obj.position.set(x,.065,heading>0?-d:-d);car.obj.rotation.y=heading>0?Math.PI:0;car.wheels.forEach(w=>w.rotation.x=d/.34*(heading>0?1:-1));}

 // ---------- 2D-grafikk ----------
 function lampIcon(x,y,high,on){ // dashbordsymbol: blått fjernlys / grønt nærlys
  ctx.save();ctx.globalAlpha=on?1:.22;ctx.strokeStyle=ctx.fillStyle=high?'#4aa3ff':'#41d17a';ctx.lineWidth=4;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(x+14,y-18);ctx.quadraticCurveTo(x+40,y-18,x+40,y);ctx.quadraticCurveTo(x+40,y+18,x+14,y+18);ctx.closePath();ctx.stroke();
  for(let i=-1;i<=1;i++){ctx.beginPath();if(high){ctx.moveTo(x+6,y+i*11);ctx.lineTo(x-16,y+i*11);}else{ctx.moveTo(x+6,y+i*11-2);ctx.lineTo(x-14,y+i*11+6);}ctx.stroke();}
  ctx.restore();
 }
 function panel(t){
  ctx.fillStyle='#14363f';ctx.fillRect(0,SCENE_H,W,H-SCENE_H);
  const P=L.pad,mob=H>W;
  ctx.fillStyle='#e6c65e';ctx.fillRect(P,SCENE_H+16,40,4);
  ctx.textAlign='left';ctx.fillStyle='#a9c2c4';ctx.font=`600 ${L.label}px Arial`;ctx.fillText('LYS OG SIKT',P,SCENE_H+50);
  ctx.textAlign='right';ctx.fillStyle='#dce8e7';ctx.font=`700 ${L.label}px Arial`;ctx.fillText('teori-test.no',W-P,SCENE_H+50);
  let cur=TEXTS[0];for(const tx of TEXTS)if(t>=tx[0])cur=tx;const since=t-cur[0];
  ctx.textAlign='left';ctx.globalAlpha=Math.min(1,.3+since/.3);
  ctx.fillStyle='#fff';ctx.font=`700 ${L.head}px Arial`;ctx.fillText(cur[1],P,SCENE_H+L.headY);
  // Forklaringslinje, brytes ved behov (maks to linjer).
  ctx.fillStyle='#d4e4e4';ctx.font=`400 ${L.body}px Arial`;const words=cur[2].split(' '),lines=[];let line='';
  for(const w of words){const n=line?line+' '+w:w;if(ctx.measureText(n).width>L.wrap&&line){lines.push(line);line=w;}else line=n;}lines.push(line);
  lines.slice(0,2).forEach((l,i)=>ctx.fillText(l,P,SCENE_H+L.bodyY+i*L.bodyLH));ctx.globalAlpha=1;
  // Blå bils lysvalg.
  const high=t<DIP_BLUE||t>=HIGH_AGAIN;ctx.textAlign='right';ctx.fillStyle='#a9c2c4';ctx.font='600 24px Arial';const iy=mob?SCENE_H+L.headY-16:SCENE_H+142,ix=W-P;
  ctx.font=`600 ${mob?22:24}px Arial`;ctx.fillText('Blå bil',ix-186,iy+8);
  lampIcon(ix-141,iy,true,high);lampIcon(ix-56,iy,false,!high);
  ctx.fillStyle='#ffffff22';ctx.fillRect(P,H-16,W-2*P,4);ctx.fillStyle='#e6c65e';ctx.fillRect(P,H-16,(W-2*P)*clamp(t/DURATION),4);
 }

 window.renderFrame=function(seconds){
  const t=clamp(Number(seconds)||0,0,DURATION);
  const db=blueDist(t),dr=redDist(t);
  place(blue,db,LANE,1,t);place(red,dr,-LANE,-1,t);
  const blueHigh=t<DIP_BLUE||t>=HIGH_AGAIN,redHigh=t<DIP_RED||t>=HIGH_AGAIN;
  setBeam(blue,blueHigh);setBeam(red,redHigh);
  // Glød sett forfra: større med fjernlys. Blå bils glød sees ikke bakfra.
  red.glows.forEach(g=>{const k=TOP?(redHigh?2.6:1):(redHigh?clamp(Math.abs(dr-db)*.035,1.8,8):1.6);g.scale.set(k,k,1);g.material.opacity=redHigh?1:.75;});
  blue.glows.forEach(g=>{g.visible=!TOP;g.scale.set(1.2,1.2,1);g.material.opacity=.6;});
  // Stabilt kamera litt over og bak den blå bilen.
  if(TOP){
   // Oversikt: begge biler og hele strekningen mellom dem i bildet, veien på skrå.
   // Høyden følger avstanden mellom bilene, så kameraet zoomer rolig inn og ut.
   const mob=H>W,gap=Math.abs(dr-db),CAP=mob?240:1e9;let span=Math.max(44,gap+34),mid=(db+dr)/2;
   // Mobil: zoom ikke ut mer enn CAP. Den blå bilen holdes i bildet, den møtende kommer inn ovenfra.
   if(span>CAP){span=CAP;mid=(dr>db?db+(CAP-34)/2:db-(CAP-34)/2);}
   const Hc=(mob?.95:.72)*span+(mob?8:10),ang=mob?.75:1.1;
   camera.near=Hc*.4;camera.far=Hc*4+300;camera.updateProjectionMatrix();
   camera.up.set(-Math.sin(ang),0,-Math.cos(ang));camera.position.set(0,Hc,-mid+Hc*.12);camera.lookAt(0,0,-mid);camera.up.set(0,1,0);
  }
  else{const mob=H>W;camera.near=.5;camera.far=900;camera.updateProjectionMatrix();camera.position.set(LANE*(mob?.4:.55),mob?5.4:4.3,-(db-(mob?12.5:11.5)));camera.lookAt(LANE*(mob?.05:.15),.4,-(db+(mob?24:26)));}
  renderer.render(scene,camera);
  ctx.reset();ctx.drawImage(renderer.domElement,0,0,W,SCENE_H);
  if(TOP){// Turkis puls rundt bilene i det lyset skiftes (forklaringsgrafikk).
   const pulse=(car,t0)=>{const u=(t-t0)/1.1;if(u<0||u>1)return;const p=car.obj.position.clone();p.y=.1;const q=p.project(camera);const x=(q.x+1)*W/2,y=(1-q.y)*SCENE_H/2;
    ctx.save();ctx.strokeStyle=`rgba(111,231,234,${(1-u)*.9})`;ctx.lineWidth=4;ctx.shadowColor='#6fe7ea';ctx.shadowBlur=10;ctx.beginPath();ctx.arc(x,y,22+u*46,0,7);ctx.stroke();ctx.restore();};
   pulse(blue,DIP_BLUE);pulse(red,DIP_RED);pulse(blue,HIGH_AGAIN);pulse(red,HIGH_AGAIN);
  }
  {// To billengder: turkise omriss mellom frontene i det fjernlyset slås på igjen.
   const u=(t-HIGH_AGAIN+.7)/1.3;if(u>=0&&u<=1&&dr-db>3){const a=Math.sin(Math.PI*clamp(u))*.95;
    const f0=db+CAR_LEN/2,proj=(s,x)=>{const q=new THREE.Vector3(x,.12,-s).project(camera);return [(q.x+1)*W/2,(1-q.y)*SCENE_H/2,q.z];};
    ctx.save();ctx.strokeStyle=`rgba(111,231,234,${a})`;ctx.lineWidth=3;ctx.shadowColor='#6fe7ea';ctx.shadowBlur=8;
    for(let k=0;k<2;k++){const s0=f0+k*CAR_LEN+.25,s1=s0+CAR_LEN-.5,pts=[[s0,-.85],[s1,-.85],[s1,.85],[s0,.85]].map(([s,x])=>proj(s,x));
     if(pts.some(p=>p[2]>1))continue;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.stroke();}
    ctx.restore();}}
  panel(t);
  const gap=dr-db;
  window.frameInfo={t,blueDistance:db,redDistance:dr,gap,blueSpeed:blueSpeed(t),blueHigh,redHigh,bluePos:blue.obj.position.toArray(),redPos:red.obj.position.toArray()};
  return canvas;
 };
 window.filmDuration=DURATION;
 window.setFilmFormat=f=>{L=LAYOUT[f==='mobile'?'mobile':'wide'];W=L.W;H=L.H;SCENE_H=L.SCENE_H;canvas.width=W;canvas.height=H;renderer.setSize(W,SCENE_H);camera.aspect=W/SCENE_H;camera.fov=L.fov;camera.updateProjectionMatrix();window.filmFormat=f;};window.setView=v=>{TOP=v==='top';};window.renderFrame(0);window.animationReady=true;
}
init().catch(e=>{window.animationError=String(e);console.error(e)});
