import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {carData} from './car-data.js';
import timing from './timing.json';
import {information,layout,chapters} from './information.js';

// Seconds are the only animation input. No accumulated motion, random frame state,
// network requests or animation mixers: arbitrary seeks and export use this same API.
let L=layout.wide,W=L.W,H=L.H,sceneH=L.sceneH;const DURATION=timing.duration;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>{v=clamp(v);return v*v*v*(v*(v*6-15)+10)};
const mix=(a,b,t)=>a+(b-a)*t;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const standard=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.95,...extra});
const paint=color=>new THREE.MeshBasicMaterial({color,toneMapped:false,side:THREE.DoubleSide});
// Fast, seedet støy: samme tekstur hver gang (deterministisk).
function noiseTexture(size,base,spread,specks,seedValue){
 const c=document.createElement('canvas');c.width=c.height=size;const k=c.getContext('2d'),img=k.createImageData(size,size);let r=seedValue;
 const rnd=()=>{r=(Math.imul(r,1664525)+1013904223)>>>0;return r/4294967296};
 for(let i=0;i<size*size;i++){let v=base+(rnd()-.5)*spread;if(rnd()<specks)v+=(rnd()<.5?-1:1)*spread*1.6;v=Math.max(0,Math.min(255,v));img.data.set([v,v,v,255],i*4);}
 k.putImageData(img,0,0);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;
}
const yellow=paint('#ffd342'),white=paint('#faf8ed');
const asphalt=standard('#6b757d',{map:noiseTexture(256,212,34,.05,7)}),shoulder=standard('#cfcfbd',{map:noiseTexture(128,205,60,.12,11)});
const materials={yellow,white};
let seed=17921;function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}

async function init(){
 const canvas=document.getElementById('film');canvas.width=W;canvas.height=H;
 const ctx=canvas.getContext('2d',{alpha:false,willReadFrequently:true});
 const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});
 renderer.setSize(W,sceneH);renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.03;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const scene=new THREE.Scene();{const c=document.createElement('canvas');c.width=4;c.height=256;const k=c.getContext('2d'),gr=k.createLinearGradient(0,0,0,256);gr.addColorStop(0,'#6ea6d4');gr.addColorStop(.55,'#a9cfe6');gr.addColorStop(1,'#dcebea');k.fillStyle=gr;k.fillRect(0,0,4,256);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;scene.background=t;}
 scene.fog=new THREE.Fog('#d3e4e4',120,430);
 const camera=new THREE.PerspectiveCamera(32,W/sceneH,.15,800);
 scene.add(new THREE.HemisphereLight('#d9ecff','#5c7745',1.55));
 const sun=new THREE.DirectionalLight('#ffe5bf',3.1);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
 Object.assign(sun.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:130});sun.shadow.bias=-.0004;sun.shadow.normalBias=.025;
 scene.add(sun,sun.target);

 function mesh(geometry,material,parent){const m=new THREE.Mesh(geometry,material);m.receiveShadow=true;parent.add(m);return m}
 function polygon(points,material,parent,y=.06){
  const shape=new THREE.Shape();points.forEach(([x,s],i)=>i?shape.lineTo(x,s):shape.moveTo(x,s));shape.closePath();
  const g=new THREE.ShapeGeometry(shape);g.rotateX(-Math.PI/2);const m=mesh(g,material,parent);m.position.y=y;return m;
 }
 function world(name,{curve=false,narrow=false,urban=false,fork=false,junction=false,combined=false}={}){
  const root=new THREE.Group();scene.add(root);root.visible=false;
  const center=s=>combined?-32+32*ease((s+15)/70):curve?38*ease((s-65)/95):0;
  const slope=s=>(center(s+.02)-center(s-.02))/.04;
  const road=(s,off=0,y=.06)=>{const d=slope(s),q=Math.hypot(1,d);return V(center(s)+off/q,y,-s+off*d/q)};
  // Arc-length parameterization keeps the car's world speed stable in curves.
  const arc=[0];for(let i=1;i<=5000;i++)arc.push(arc[i-1]+Math.hypot(.1,center(i*.1)-center((i-1)*.1)));
  function route(d){if(d<=0)return d;let a=0,b=arc.length-1;while(b-a>1){const m=(a+b)>>1;if(arc[m]<d)a=m;else b=m}return .1*(a+(d-arc[a])/(arc[b]-arc[a]));}
  function strip(start,end,offset,width,material,parent=root,y=.061){
   const n=Math.max(1,Math.ceil((end-start)/1.2)),p=[],ix=[],uv=[];
   for(let i=0;i<=n;i++){const s=mix(start,end,i/n),o=typeof offset==='function'?offset(s):offset,w=typeof width==='function'?width(s):width;
    for(const side of [-1,1]){const v=road(s,o+side*w/2,y);p.push(v.x,v.y,v.z);uv.push((o+side*w/2)/3,s/3)}
    if(i<n){const k=i*2;ix.push(k,k+1,k+2,k+1,k+3,k+2)}
   }
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeVertexNormals();return mesh(g,material,parent);
  }
  function dashed(parent,color,length,gap,offset=0,width=.15,start=-60,end=410){for(let s=start;s<end;s+=length+gap)strip(s,Math.min(s+length,end),offset,width,materials[color],parent);}
  function lineGroup(type,color='yellow'){
   const g=new THREE.Group();root.add(g);
   if(type==='dash')dashed(g,color,3,9);
   if(type==='warning')dashed(g,color,9,3);
   if(type==='solid')strip(-60,410,0,.15,materials[color],g);
   if(type==='double')for(const o of [-.15,.15])strip(-60,410,o,.15,materials[color],g);
   if(type==='combined'){
    // Northbound traffic has left the bend. Southbound traffic is approaching
    // the bend and its rock face: the restriction has a visible local context.
    dashed(g,'yellow',9,3,0,.15,-60,55);
    strip(55,245,-.15,.15,yellow,g);dashed(g,'yellow',3,9,.15,.15,55,245);
    dashed(g,'yellow',3,9,0,.15,245,410);
   }
   if(type==='bus')dashed(g,'white',2,2,0,.20);
   g.visible=false;return g;
  }
  const half=narrow?2.65:3.9;
  if(fork){
   // Two equal-direction branches separate around a closed, hatched white gore.
   strip(-60,150,0,s=>7.8+Math.max(0,s-70)*.16,shoulder,root,.01);
   strip(-60,150,0,s=>7.2+Math.max(0,s-70)*.16,asphalt,root,.035);
   for(const side of [-1,1]){
    strip(-60,150,s=>side*(3.3+Math.max(0,s-70)*.08),.15,white);
    const branch=s=>side*(8.2+(s-150)*.08);
    strip(150,410,branch,4.2,shoulder,root,.01);strip(150,410,branch,3.6,asphalt,root,.035);
    for(const offset of [-1.5,1.5])strip(150,410,s=>branch(s)+offset,.15,white);
   }
   const tip=70,end=150,edge=s=>Math.max(0,s-tip)*.08;
   for(const side of [-1,1])strip(tip,end,s=>side*edge(s),.15,white);
   polygon([[-edge(end),end],[edge(end),end],[edge(end),end+.15],[-edge(end),end+.15]],white,root);
   polygon([[0,tip],[-.5,tip+6.25],[.5,tip+6.25]],white,root);
   // V-shaped chevrons point upstream, contained entirely inside the border.
   for(let s=79;s<146;s+=4){const b=edge(s)-.12;polygon([[-b,s],[0,s-2],[b,s],[b,s+.5],[0,s-1.5],[-b,s+.5]],white,root);}
   dashed(root,'white',1,3,0,.15,-60,66);
  }else{
   strip(-60,410,0,half*2+.6,shoulder,root,.01);strip(-60,410,0,half*2,asphalt,root,.035);
   for(const side of [-1,1]){
    if(narrow)dashed(root,'white',3,3,side*(half-.25),.10);
    else if(junction&&side===1){strip(-60,108,3.62,.15,white);strip(124,410,3.62,.15,white);}
    else strip(-60,410,side*(half-.28),.15,white);
   }
  }
  const lines={dash:lineGroup('dash'),warning:lineGroup('warning'),double:lineGroup('double'),combined:lineGroup('combined'),whiteDash:lineGroup('dash','white'),whiteWarning:lineGroup('warning','white'),whiteSolid:lineGroup('solid','white'),bus:lineGroup('bus','white')};
  // Low-poly landscape: flatter verges keep the road legible; the curve's inner
  // hill actually occludes the road ahead instead of merely decorating a bend.
  const terrainMat=standard(urban?'#9cae7d':'#8eaf60',{flatShading:true,vertexColors:true,side:THREE.DoubleSide});
  function ground(x,s){
   if(urban||fork)return -.12;
   const off=(x-center(s))/Math.hypot(1,slope(s)),flat=ease((Math.abs(off)-9)/13);
   const hill=(curve||combined)?15*Math.exp(-(((s-(combined?20:112))/29)**2))*Math.exp(-(((off-18)/14)**2)):0;
   return -.12+flat*(.5+.6*Math.sin(s*.035+x*.02)+hill);
  }
  const pos=[],colors=[];
  // Fine cells plus a nine-metre flat corridor keep the actual triangles below
  // the road, including between sample vertices. Do not hide this with draw order.
  const cell=(curve||combined)?2:4;
  for(let s=-80;s<420;s+=cell)for(let x=-140;x<160;x+=cell){
   for(const tri of [[[x,s],[x+cell,s],[x,s+cell]],[[x+cell,s],[x+cell,s+cell],[x,s+cell]]]){const shade=.96+random()*.08,cx=tri[0][0],cs=tri[0][1];
    // Store flater: enger, kornåker og mørkere skogbunn gir variasjon uten å forstyrre veien.
    const n=urban?0:.5*Math.sin(cx*.045+cs*.013)+.5*Math.sin(cs*.031-cx*.022),dist=Math.abs(cx-center(cs));
    let rgb=n>.55&&dist>16?[1.13,1.07,.78]:n<-.5&&dist>14?[.8,.9,.8]:[1,1,1];
    if(!urban&&dist>8&&dist<11)rgb=[rgb[0]*.9,rgb[1]*.94,rgb[2]*.9];
    for(const [xx,ss]of tri){pos.push(xx,ground(xx,ss),-ss);colors.push(shade*rgb[0],shade*rgb[1],shade*rgb[2])}}
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();const terrain=mesh(geo,terrainMat,root);
  if(combined){
   const rock=mesh(new THREE.IcosahedronGeometry(1,1),standard('#82918a',{flatShading:true}),root);
   rock.position.copy(road(17,18,4.7));rock.scale.set(7,6,11);
  }
  const trunk=standard('#7b7052'),leaf=standard('#608858',{flatShading:true});
  const count=180,trunks=mesh(new THREE.CylinderGeometry(.14,.2,1,5),trunk,new THREE.Group()); // geometries shared by instancing
  const ti=new THREE.InstancedMesh(trunks.geometry,trunk,count),ci=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),leaf,count),dummy=new THREE.Object3D();
  for(let i=0;i<count;i++){
   let s=-40+random()*420;const side=i%2?-1:1;
   if(junction&&side===1&&s>95&&s<137)s+=55;
   const off=side*(fork?34+random()*60:12+random()*72),x=center(s)+off,y=ground(x,s),h=3+random()*3;
   dummy.position.set(x,y+h*.28,-s);dummy.scale.set(1,h*.56,1);dummy.updateMatrix();ti.setMatrixAt(i,dummy.matrix);
   dummy.position.set(x,y+h*.72,-s);dummy.scale.set(h*.31,h*.43,h*.31);dummy.rotation.y=random()*6;dummy.updateMatrix();ci.setMatrixAt(i,dummy.matrix);
   ci.setColorAt(i,new THREE.Color().setHSL(.25+random()*.045,.29+random()*.1,.36+random()*.1));
  }root.add(ti,ci);
  for(let i=0;i<8;i++){const m=mesh(new THREE.ConeGeometry(45+random()*30,50+random()*60,5),standard('#8eafb5',{flatShading:true}),root);m.position.set(-170+i*48,10,-330-random()*50)}
  {// Ekstra: gran, kantstolper, rekkverk og fjell med snø. Egen RNG, så eksisterende plassering ikke endres.
   let r=[...name].reduce((a,c)=>a*31+c.charCodeAt(0)>>>0,977);const rnd=()=>{r=(Math.imul(r,1664525)+1013904223)>>>0;return r/4294967296};
   const spruceMat=standard('#3d6643',{flatShading:true}),n=urban?40:150;
   const low=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,6),spruceMat,n),top=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,6),spruceMat,n),tr=new THREE.InstancedMesh(new THREE.CylinderGeometry(.12,.16,1,5),trunk,n);
   for(let i=0;i<n;i++){
    let s=-40+rnd()*440;const side=rnd()<.5?-1:1;if(junction&&side===1&&s>95&&s<137)s+=60;
    const off=side*(fork?36+rnd()*70:urban?26+rnd()*40:13+rnd()*85),x=center(s)+off,y=ground(x,s),h=4+rnd()*6,w=h*.24;
    dummy.rotation.set(0,rnd()*6,0);
    dummy.position.set(x,y+h*.12,-s);dummy.scale.set(1,h*.25,1);dummy.updateMatrix();tr.setMatrixAt(i,dummy.matrix);
    dummy.position.set(x,y+h*.45,-s);dummy.scale.set(w*1.15,h*.6,w*1.15);dummy.updateMatrix();low.setMatrixAt(i,dummy.matrix);
    dummy.position.set(x,y+h*.78,-s);dummy.scale.set(w*.75,h*.42,w*.75);dummy.updateMatrix();top.setMatrixAt(i,dummy.matrix);
    const c=new THREE.Color().setHSL(.36+rnd()*.04,.28+rnd()*.1,.22+rnd()*.08);low.setColorAt(i,c);top.setColorAt(i,c);
   }
   root.add(low,top,tr);
   if(!urban&&!fork){
    const posts=[];for(let s=-40;s<400;s+=40)for(const side of [-1,1])posts.push(road(s,side*(half+.75),0));
    const pm=new THREE.InstancedMesh(new THREE.BoxGeometry(.12,1,.12),standard('#f4f4ee'),posts.length),bm=new THREE.InstancedMesh(new THREE.BoxGeometry(.13,.22,.13),standard('#1d2224'),posts.length);
    posts.forEach((p,i)=>{dummy.rotation.set(0,0,0);dummy.scale.set(1,1,1);dummy.position.set(p.x,.38,p.z);dummy.updateMatrix();pm.setMatrixAt(i,dummy.matrix);dummy.position.set(p.x,.77,p.z);dummy.updateMatrix();bm.setMatrixAt(i,dummy.matrix);});
    pm.castShadow=bm.castShadow=true;root.add(pm,bm);
   }
   if(curve){
    // Rekkverk i ytterkant av kurven.
    const off=-(half+.65),p=[],ix=[];let k=0;
    for(let s=60;s<=170;s+=1.2){for(const y of [.5,.82]){const v=road(s,off,y);p.push(v.x,v.y,v.z);}if(s>60){ix.push(k-2,k-1,k,k-1,k+1,k);}k+=2;}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(ix);g.computeVertexNormals();
    const rail=mesh(g,standard('#b9c1c3',{metalness:.55,roughness:.4,side:THREE.DoubleSide}),root);rail.castShadow=true;
    const ps=[];for(let s=60;s<=170;s+=4)ps.push(road(s,off-.05,0));
    const pi=new THREE.InstancedMesh(new THREE.BoxGeometry(.09,.85,.09),standard('#8b9496'),ps.length);ps.forEach((v,i)=>{dummy.rotation.set(0,0,0);dummy.scale.set(1,1,1);dummy.position.set(v.x,.42,v.z);dummy.updateMatrix();pi.setMatrixAt(i,dummy.matrix);});root.add(pi);
   }
   if(!urban){for(let i=0;i<9;i++){const h=70+rnd()*80,rad=50+rnd()*45,x=-220+i*55+rnd()*20,z=-400-rnd()*60;
    const m=mesh(new THREE.ConeGeometry(rad,h,6),standard('#7f9aa6',{flatShading:true}),root);m.position.set(x,h/2-8,z);
    const cap=mesh(new THREE.ConeGeometry(rad*.3,h*.3,6),standard('#eef3f4',{flatShading:true}),root);cap.position.set(x,h-8-h*.15+.5,z);}}
  }
  if(urban){
   const pavement=standard('#d3d3c4');
   for(const side of [-1,1]){
    if(junction&&side===1){strip(-60,108,5.0,1.6,pavement,root,.10);strip(124,410,5.0,1.6,pavement,root,.10);}
    else strip(-60,410,side*5.0,1.6,pavement,root,.10);
   }
   for(let s=-15;s<320;s+=25)for(const side of [-1,1]){
    if(junction&&side===1&&s>90&&s<145)continue;
    const h=4+random()*7,b=mesh(new THREE.BoxGeometry(9,h,11),standard(['#c5d2ca','#d7ccb5','#a8bfc4'][Math.floor(random()*3)]),root);b.position.set(side*17,h/2,-s);b.castShadow=true;
    for(let y=1.6;y<h-1;y+=2.4)for(let z=-3;z<=3;z+=3){const win=mesh(new THREE.BoxGeometry(.03,.95,1.2),standard('#537d8a'),root);win.position.set(side*12.48,y,-s+z);}
   }
  }
  const crosswalk=new THREE.Group();root.add(crosswalk);for(let x=-3.5;x<3.6;x+=1)strip(65,69,x,.5,white,crosswalk);crosswalk.visible=false;
  if(junction){
   // An approach only: stop short of the intersection to avoid introducing priority.
   // A connected two-way side road to the right. The approach stops before
   // entering the intersection; the lesson remains about field choice.
   polygon([[3.3,108],[8,112],[145,112],[145,120],[8,120],[3.3,124]],asphalt,root,.04);
   for(const s of [112,120])polygon([[8,s-.075],[145,s-.075],[145,s+.075],[8,s+.075]],white,root);
   for(let x=13;x<145;x+=12)polygon([[x,115.925],[x+3,115.925],[x+3,116.075],[x,116.075]],yellow,root);
   for(const s of [110.8,121.2])polygon([[8,s-.8],[145,s-.8],[145,s+.8],[8,s+.8]],standard('#d3d3c4'),root,.10);
   // Rounded kerb/edge lines connect the main road to the side road.
   for(const upper of [false,true]){
    const pts=[];for(let i=0;i<=24;i++){const a=i/24*Math.PI/2,x=7.62-4*Math.cos(a),s=upper?124-4*Math.sin(a):108+4*Math.sin(a);pts.push([x,s]);}
    for(let i=0;i<pts.length-1;i++){const [x,s]=pts[i],[xx,ss]=pts[i+1];polygon([[x-.07,s],[x+.07,s],[xx+.07,ss],[xx-.07,ss]],white,root);}
   }
   for(const s of [50,75,98]){arrow(root,-1.8,s,false);arrow(root,1.8,s,true);}
   for(const g of Object.values(lines))g.visible=false;
   dashed(root,'white',1,3,0,.15,-60,62);strip(66,110,0,.15,white);
  }
  function markings(key){Object.entries(lines).forEach(([k,g])=>g.visible=k===key);}
  return {name,root,road,slope,route,strip,markings,crosswalk,half,terrain};
 }
 function arrow(parent,x,s,right){
  const coords=right?[[-.15,-3],[.15,-3],[.15,.4],[1,.4],[1,-.35],[2,1],[1,2.3],[1,1.5],[-.15,1.5]]:[[-.16,-3],[.16,-3],[.16,1],[.8,1],[0,3],[-.8,1],[-.16,1]];
  polygon(coords.map(([a,b])=>[x+a*(right?.65:1),s+b]),white,parent,.064);
 }
 const worlds={rural:world('Toveisvei'),curve:world('Toveisvei med kurve',{curve:true}),same:world('To felt i samme retning'),sameCurve:world('Samme retning gjennom kurve',{curve:true}),combined:world('Avgrenset sperrelinje ved kurve',{combined:true}),fork:world('Veideling',{fork:true}),junction:world('Feltvalg foran kryss',{urban:true,junction:true}),bus:world('Vanlig felt og kollektivfelt',{urban:true}),narrow:world('Smal toveisvei',{narrow:true})};

 // Simple, correctly oriented road text, painted on the surface.
 function roadText(parent,str,x,s){const c=document.createElement('canvas');c.width=512;c.height=256;const k=c.getContext('2d');k.fillStyle='#fffdf2';k.font='bold 100px Arial';k.textAlign='center';k.fillText(str,256,175);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const m=mesh(new THREE.PlaneGeometry(2.5,4),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false}),parent);m.rotation.x=-Math.PI/2;m.position.set(x,.07,-s);}
 for(let s=30;s<190;s+=30)roadText(worlds.bus.root,'BUSS',1.8,s);
 // A stylized bus-only 508.1 sign. No additional access categories are implied.
 const signCanvas=document.createElement('canvas');signCanvas.width=256;signCanvas.height=320;
 const sk=signCanvas.getContext('2d');sk.fillStyle='#1565aa';sk.fillRect(0,0,256,320);sk.strokeStyle='white';sk.lineWidth=10;sk.strokeRect(8,8,240,304);
 sk.fillStyle='white';sk.beginPath();sk.roundRect(64,64,128,160,16);sk.fill();sk.fillStyle='#1565aa';sk.fillRect(77,95,102,68);sk.fillRect(91,76,74,10);sk.fillRect(77,190,18,14);sk.fillRect(161,190,18,14);sk.fillStyle='white';sk.fillRect(74,219,20,27);sk.fillRect(162,219,20,27);
 const signTex=new THREE.CanvasTexture(signCanvas);signTex.colorSpace=THREE.SRGBColorSpace;
 const busSigns=[35,95,155].map(s=>{
  const sign=mesh(new THREE.PlaneGeometry(1.6,2.0),new THREE.MeshBasicMaterial({map:signTex,side:THREE.DoubleSide,toneMapped:false}),worlds.bus.root);sign.position.set(4.8,3.0,-s);
  const pole=mesh(new THREE.CylinderGeometry(.05,.05,2.6,6),standard('#85949a'),worlds.bus.root);pole.position.set(4.8,1.0,-s);return sign;});
 const bytes=Uint8Array.from(atob(carData),c=>c.charCodeAt(0));const model=(await new GLTFLoader().parseAsync(bytes.buffer,'')).scene;
 function makeCar(color){
  const obj=model.clone(true),wheels=[];
  obj.traverse(o=>{if(o.name.startsWith('Hjul_'))wheels.push(o);if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();for(const m of Array.isArray(o.material)?o.material:[o.material])if(m.name==='Lakk')m.color.set(color);}});
  const signals=[];for(const side of [-1,1])for(const z of [-1.85,1.85]){const light=new THREE.Mesh(new THREE.BoxGeometry(.19,.13,.06),new THREE.MeshBasicMaterial({color:'#ffb629',toneMapped:false}));light.position.set(side*.78,.65,z);obj.add(light);signals.push({light,side});}
  scene.add(obj);return {obj,wheels,signals};
 }
 const blue=makeCar('#1689c9'),gray=makeCar('#acb6b9'),red=makeCar('#c4473b');
 function placeCar(car,w,d,lane,turn=0,signal=0,t=0){const s=w.route(d);car.obj.position.copy(w.road(s,lane,.065));car.obj.rotation.y=Math.PI-Math.atan(w.slope(s))-turn;car.wheels.forEach(o=>o.rotation.x=d/.34);car.signals.forEach(({light,side})=>light.visible=side===-signal&&Math.floor(t*2.4)%2===0);}
 function follow(w,d,{height=11,behind=19,ahead=12,x=0}={}){camera.position.copy(w.road(w.route(d-behind),x,height));camera.lookAt(w.road(w.route(d+ahead*.4),0,.3));}
 function box(x,y,w,h,r,fill){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();}
 function text(str,x,y,size,color='#fff',weight=600){ctx.font=`${weight} ${size}px Arial,sans-serif`;ctx.fillStyle=color;ctx.fillText(str,x,y);}
 function direction(w,s,off,reverse=false){const a=w.road(s,off,.12).project(camera),b=w.road(s+(reverse?-9:9),off,.12).project(camera);const q=v=>Math.round(v*64)/64,x=q((a.x+1)*W/2),y=q((1-a.y)*sceneH/2),xx=q((b.x+1)*W/2),yy=q((1-b.y)*sceneH/2),angle=Math.atan2(yy-y,xx-x);ctx.strokeStyle='#79e5f0';ctx.fillStyle='#79e5f0';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(xx,yy);ctx.stroke();ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx-21*Math.cos(angle-.5),yy-21*Math.sin(angle-.5));ctx.lineTo(xx-21*Math.cos(angle+.5),yy-21*Math.sin(angle+.5));ctx.closePath();ctx.fill();}

 // ---------- Forklaringsgrafikk (ikke malt oppmerking) ----------
 const proj=(w,s,o)=>{const p=w.road(s,o,.11).project(camera);return [Math.round((p.x+1)*W*32)/64,Math.round((1-p.y)*sceneH*32)/64,p.z]};
 function outline(points,t,dashedLine=false){
  if(points.some(p=>p[2]>1||p[2]<-1))return;
  ctx.save();ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();
  ctx.strokeStyle=`rgba(111,231,234,${.62+.1*Math.sin(t*3)})`;ctx.lineWidth=H>W?4:4.5;ctx.lineJoin='round';
  if(dashedLine)ctx.setLineDash([10,8]);ctx.shadowColor='#6fe7ea';ctx.shadowBlur=10;ctx.stroke();ctx.restore();
 }
 // Rektangel langs veien: fra/til er avstand langs veien (meter), off = sideforskyvning.
 function band(w,from,to,off,width,t,dashedLine=false){
  const a=w.route(from),b=w.route(to);
  outline([[a,off-width/2],[b,off-width/2],[b,off+width/2],[a,off+width/2]].map(([s,o])=>proj(w,s,o)),t,dashedLine);
 }
 function gore(w,t){const e=s=>Math.max(0,s-70)*.08;outline([[70,0],[150,e(150)+.12],[150,-e(150)-.12]].map(([s,o])=>proj(w,s,o)),t);}
 function signBox(t,s){const c=[[-.75,-1],[.75,-1],[.75,1],[-.75,1]].map(([x,y])=>{const p=V(4.8+x*1.15,3.0+y*1.1,-s).project(camera);return [Math.round((p.x+1)*W/2),Math.round((1-p.y)*sceneH/2),p.z]});outline(c,t);}
 // Faste streker: velg én strek et stykke foran bilen når setningen starter, så markeringen følger veien.
 const dashAt=(ref,period=12,ahead=22)=>Math.ceil((ref+ahead)/period)*period;

 // ---------- Bevegelse: jevn fart, myk oppbremsing der bilen skal stoppe ----------
 const RURAL=7,URBAN=5;
 function cruiseStop(u,d0,v,uStop,T){const ub=uStop-T;if(u<=ub)return d0+v*u;const tau=Math.min(u-ub,T);return d0+v*ub+v*tau-v*tau*tau/(2*T);}

 // Ny tale (30.10.2026) har annen takt enn scenen ble laget for. Taletid -> scenetid, stykkevis lineært mellom setningsstartene.
 const knots=c=>{const n=[...(c.audioSentences||c.sentences),c.audio],o=[...c.sentences,c.sceneAudio||c.audio];return [n,o];};
 const mapT=(x,from,to)=>{if(x<=from[0])return to[0]+(x-from[0]);for(let k=1;k<from.length;k++)if(x<=from[k])return to[k-1]+(x-from[k-1])*(to[k]-to[k-1])/(from[k]-from[k-1]);return to.at(-1)+(x-from.at(-1));};
 const toScene=(i,a)=>{const [n,o]=knots(timing.chapters[i]);return mapT(a,n,o);};
 const toAudio=(i,a)=>{const [n,o]=knots(timing.chapters[i]);return mapT(a,o,n);};

 const chapterStarts=timing.chapters.map(c=>c.start);
 // Bildeskift (ny situasjon) inne i kapitler, i sekunder fra talestart.
 const innerCuts={0:[11.1],2:[11.15],3:[6.71],8:[6.45]};
 const cutTimes=[];timing.chapters.forEach((c,i)=>{if(i)cutTimes.push(c.start);(innerCuts[i]||[]).forEach(a=>cutTimes.push(c.speech+toAudio(i,a)));});
 const endStart=timing.chapters.at(-1).end;

 function chapterState(i,u,a){
  const st={oncoming:null,w:worlds.rural,d:0,lane:1.82,turn:0,signal:0,mark:'dash',cam:{height:13,behind:21,ahead:13},hl:[],dirs:[],crosswalk:false,gray:null,cameraD:null};
  const S=timing.chapters[i].sentences,inS=k=>a>=S[k]-.1&&(k+1>=S.length||a<S[k+1]-.1);
  if(i===0){
   st.cam=H>W?{height:14,behind:18,ahead:15}:{height:9,behind:14,ahead:12};
   if(a<11.1){
    st.d=20+RURAL*a;
    if(a>=7.2){const s=dashAt(20+RURAL*7.2,12,24);st.hl.push(['band',s,s+3,0,.55]);st.dirs=[[st.d+17,-1.8,true],[st.d+8,1.8,false]];}
   }else{
    st.w=worlds.same;st.mark='whiteDash';st.crosswalk=true;st.d=cruiseStop(a-11.1,-27,RURAL,13.9,3.5);
    if(a>=13.8&&a<17.35){const s=dashAt(-27+RURAL*2.7,12,22);st.hl.push(['band',s,s+3,0,.55]);st.dirs=[[st.d+16,-1.8,false],[st.d+9,1.8,false]];}
    else if(a>=17.35&&a<24.45)st.hl.push(['band',st.d+3,st.d+20,3.62,.55]);
    else if(a>=24.45)st.hl.push(['band',64.6,69.4,0,7.9]);
   }
  }
  if(i===1){
   st.d=20+RURAL*u;
   st.cam={height:10+14*ease((a-2.6)/1.6)-14*ease((a-6)/2),behind:20,ahead:13};
   if(inS(0)){const s=dashAt(20+RURAL*(S[0]+.5),12,24);st.hl.push(['band',s,s+3,0,.55]);}
   if(inS(1)){const s=dashAt(20+RURAL*(S[1]+.5),12,18);st.hl.push(['band',s,s+3,0,.55],['band',s+3,s+12,0,.55,true]);}
  }
  if(i===2){
   if(a<11.15){
    st.w=worlds.curve;st.mark='warning';st.d=40+RURAL*u;const low=ease((a-6.2)/2.5);
    st.cam={height:mix(10,3.4,low),behind:mix(18,13,low),ahead:19};if(a>=6.3)st.oncoming=150-8*(a-6.5);
    if(a<6.2){const s=dashAt(40+RURAL*(a<3.5?.5:4.1),12,24);st.hl.push(['band',s,s+9,0,.55],['band',s+9,s+12,0,.55,true]);}
   }else{
    st.w=worlds.sameCurve;st.mark='whiteWarning';st.d=56+RURAL*(a-11.15);st.cam={height:13,behind:22,ahead:16};
    st.dirs=[[st.d+20,-1.8,false],[st.d+12,1.8,false]];
    if(inS(3)){const s=dashAt(56,12,26);st.hl.push(['band',s,s+9,0,.55]);}
   }
  }
  if(i===3){
   st.cam={height:13,behind:21,ahead:12};
   if(a<6.71){st.w=worlds.same;st.mark='whiteSolid';st.d=20+RURAL*u;st.hl.push(['band',st.d+6,st.d+30,0,.5]);if(inS(0))st.dirs=[[st.d+20,-1.8,false],[st.d+12,1.8,false]];}
   else{
    st.mark='double';st.d=20+RURAL*(a-6.71);
    if(inS(3)){st.hl.push(['band',st.d+6,st.d+30,.15,.3],['band',st.d+6,st.d+30,-.15,.3]);st.dirs=[[st.d+22,-1.8,true],[st.d+12,1.8,false]];}
    else st.hl.push(['band',st.d+6,st.d+30,0,.75]);
   }
  }
  if(i===4){
   const w=st.w=worlds.combined;st.mark='combined';
   const laneAt=v=>1.82-3.64*ease((v-10.5)/2)+3.64*ease((v-16.2)/2);
   const sm=x=>{x=clamp(x);return x*x*(3-2*x)};const distAt=v=>65+6*(v+1.5)+30*sm((v-11)/5);
   st.lane=laneAt(a);st.d=distAt(a);const gd=79+6*u;st.gray=gd;
   const e=.005,vel=(distAt(a+e)-distAt(a-e))/(2*e);st.turn=Math.atan((laneAt(a+e)-laneAt(a-e))/(2*e)/vel);
   st.signal=a>=8.5&&a<12.5?-1:a>=15.2&&a<18.2?1:0;
   const intro=1-ease((u-.3)/2.7);st.cameraD=(st.d+gd)/2-28*intro;
   st.cam={height:40+45*intro,behind:9+33*intro,ahead:-9*intro};
   const c=st.cameraD,from=Math.max(56,c-4),to=Math.min(244,c+34);
   if(a>=-.1&&a<S[1]-.1)st.hl.push(['band',from,to,0,.7]);
   else if(a<S[3]-.1)st.hl.push(['band',from,to,.15,.28]);
   else if(a<S[4]-.1)st.hl.push(['band',from,to,-.15,.28]);
   else st.hl.push(['band',from,to,-.15,.28]);
  }
  if(i===5){
   st.w=worlds.fork;st.mark=null;st.d=40+RURAL*u;st.lane=1.8+Math.max(0,st.d-70)*.08;st.turn=Math.atan(st.d>70?.08:0);
   st.cam={height:28,behind:26,ahead:18};if(a<S[3]-.1)st.hl.push(['gore']);
  }
  if(i===6){
   st.w=worlds.junction;st.mark=null;st.d=cruiseStop(u,46.5,URBAN,12.2,3);st.cam={height:23,behind:24,ahead:19};st.signal=a>=5?1:0;
   if(inS(0))st.hl.push(['band',72,78.5,1.8,2.4],['band',72,78.5,-1.8,2.4],['band',95,101.5,1.8,2.4],['band',95,101.5,-1.8,2.4]);
   if(inS(2))st.hl.push(['band',66,110,0,.5],['band',95,101.5,1.8,2.4]);
  }
  if(i===7){
   st.w=worlds.bus;st.mark='bus';st.lane=-1.8;st.d=15+URBAN*u;{const low=ease((a-S[2]+.3)/1.6);st.cam={height:mix(15,24,ease((a-5.5)/2.5))-11*low,behind:23-6*low,ahead:17+4*low};}
   if(inS(0))st.hl.push(['band',st.d+8,st.d+30,0,.45]);
   if(inS(1)){const s=dashAt(15+URBAN*(S[1]+.5),4,24);st.hl.push(['band',s,s+2,0,.5],['band',s+2,s+4,0,.5,true],['band',s+4,s+6,0,.5],['band',s+6,s+8,0,.5,true]);}
   if(inS(2)){const s=[35,95,155].find(v=>v>st.d+8);if(s)st.hl.push(['sign',s]);}
  }
  if(i===8){
   if(a<6.45){st.d=25+RURAL*u;st.cam={height:13,behind:21,ahead:14};st.hl.push(['band',st.d+3,st.d+20,3.62,.55]);}
   else{
    st.w=worlds.narrow;st.mark=null;st.lane=1.25;st.d=20+5.5*(a-6.45);
    const rise=ease((a-10.2)/3);st.cam={height:mix(13,26,rise),behind:mix(21,28,rise),ahead:14};
    if(a<10.1)st.hl.push(['band',st.d+3,st.d+22,2.4,.45],['band',st.d+3,st.d+22,-2.4,.45]);
   }
  }
  if(H>W&&i!==0){st.cam={...st.cam,height:st.cam.height*1.3,behind:st.cam.behind*1.15,ahead:(st.cam.ahead||0)*1.1};}
  return st;
 }

 window.setFilmFormat=function(format){
  const portrait=format==='mobile';L=portrait?layout.mobile:layout.wide;W=L.W;H=L.H;sceneH=L.sceneH;
  canvas.width=W;canvas.height=H;renderer.setSize(W,sceneH);camera.aspect=W/sceneH;camera.fov=portrait?40:32;camera.updateProjectionMatrix();
  window.filmFormat=portrait?'mobile':'wide';return {width:W,height:H};
 };
 window.chapterTimes=timing.chapters.map(c=>({chapter:c.chapter,title:c.title,start:c.start}));
 window.filmDuration=DURATION;

 window.renderFrame=function(seconds){
  ctx.reset();
  const t=clamp(Number(seconds)||0,0,DURATION),endT=Math.max(0,t-endStart);
  const tc=Math.min(t,endStart-1e-3);let i=0;while(i<chapterStarts.length-1&&tc>=chapterStarts[i+1])i++;
  const ch=timing.chapters[i],a=toScene(i,tc-ch.speech),u=a+(ch.speech-ch.start);
  const st=chapterState(i,u,a),w=st.w;
  gray.obj.visible=st.gray!==null;Object.values(worlds).forEach(v=>{v.root.visible=false;v.crosswalk.visible=false;});
  w.root.visible=true;w.crosswalk.visible=st.crosswalk;w.markings(st.mark);
  placeCar(blue,w,st.d,st.lane,st.turn,st.signal,tc);red.obj.visible=st.oncoming!==null;if(st.oncoming!==null)placeCar(red,w,st.oncoming,-1.82,Math.PI,0,tc);if(st.gray!==null)placeCar(gray,w,st.gray,1.82,0,0,tc);
  follow(w,st.cameraD??st.d,st.cam);
  const target=w.road(w.route(st.d),0,0);sun.position.copy(target).add(V(-30,48,20));sun.target.position.copy(target);camera.updateMatrixWorld();
  renderer.render(scene,camera);ctx.drawImage(renderer.domElement,0,0,W,sceneH);
  {const g=ctx.createRadialGradient(W/2,sceneH*.55,Math.min(W,sceneH)*.45,W/2,sceneH*.55,Math.max(W,sceneH)*.85);g.addColorStop(0,'rgba(20,40,45,0)');g.addColorStop(1,'rgba(20,40,45,.16)');ctx.fillStyle=g;ctx.fillRect(0,0,W,sceneH);}
  for(const [type,...p] of st.hl){if(type==='band')band(w,p[0],p[1],p[2],p[3],tc,p[4]);if(type==='gore')gore(w,tc);if(type==='sign')signBox(tc,p[0]);}
  st.dirs.forEach(([dist,o,r])=>direction(w,w.route(dist),o,r));
  window.infoLayout=information(ctx,L,timing,i,a,t);
  let alpha=0;for(const c of cutTimes)if(t>=c&&t<c+.32)alpha=Math.max(alpha,1-(t-c)/.32);
  if(alpha){ctx.fillStyle=`rgba(17,41,51,${alpha*.85})`;ctx.fillRect(0,0,W,sceneH);}
  if(t>=endStart){
   const k=ease(endT/.7);ctx.fillStyle=`rgba(20,54,63,${k})`;ctx.fillRect(0,0,W,H);
   ctx.globalAlpha=ease((endT-.4)/.6);ctx.textAlign='center';ctx.fillStyle='#e6c65e';ctx.fillRect(W/2-30,H*.40,60,5);
   ctx.fillStyle='#fff';ctx.font=`700 ${H>W?74:84}px Arial`;ctx.fillText('teori-test.no',W/2,H*.40+(H>W?100:110));
   ctx.fillStyle='#b9ced0';ctx.font=`600 ${H>W?34:36}px Arial`;ctx.fillText('Øv på veimerking med gratis teoriprøver',W/2,H*.40+(H>W?160:175));ctx.globalAlpha=1;
  }
  const screen=obj=>{const p=obj.position.clone().add(V(0,.75,0)).project(camera);return [(p.x+1)*W/2,(1-p.y)*sceneH/2]};
  window.frameInfo={t,chapter:i+1,title:ch.title,speechTime:a,environment:w.name,marking:st.mark,laneOffset:st.lane,routeDistance:st.d,
   bluePosition:blue.obj.position.toArray(),grayPosition:st.gray!==null?gray.obj.position.toArray():null,blueScreen:screen(blue.obj),grayScreen:st.gray!==null?screen(gray.obj):null,
   signal:st.signal,crosswalkVisible:st.crosswalk,endCard:t>=endStart,point:window.infoLayout.point,duration:DURATION};
  return canvas;
 };
 window.auditRoadGeometry=function(){
  const result={},ray=new THREE.Raycaster(),down=V(0,-1,0);scene.updateMatrixWorld(true);
  for(const name of ['curve','sameCurve','combined']){
   const w=worlds[name];let maxHeight=-Infinity,violations=0,samples=0;
   for(let s=-10;s<=250;s+=3)for(const off of [-3.85,-2,0,2,3.85]){
    const point=w.road(s,off,50);ray.set(point,down);const hit=ray.intersectObject(w.terrain,false)[0];
    if(!hit)throw Error('Missing terrain at '+name+' '+s);
    maxHeight=Math.max(maxHeight,hit.point.y);if(hit.point.y>=.034)violations++;samples++;
   }result[name]={samples,maxHeight,violations};
  }
  return result;
 };
 window.renderFrame(0.5);window.animationReady=true;
}
init().catch(e=>{window.animationError=String(e);console.error(e)});
