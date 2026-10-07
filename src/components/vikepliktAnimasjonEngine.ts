// @ts-nocheck
// Vikeplikt-animasjonen (canvas). Portert fra den frittstående filen
// vikeplikt_1.html med minst mulig endring: id-ene har fått prefikset «vpa-»,
// og koden jobber bare innenfor elementet den monteres i.
// Typesjekk er slått av fordi dette er ren JavaScript fra originalfilen.

export function mountVikepliktAnimasjon(root) {
'use strict';
let raf = 0, stopped = false;
// Automatisk visning: situasjonene vises etter tur til brukeren selv velger noe.
// Slås av for brukere som har bedt om redusert bevegelse.
let auto = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
let endTs = null, onScreen = true;
const io = ('IntersectionObserver' in window) ? new IntersectionObserver((e) => { onScreen = e[0].isIntersecting; lastTs = null; }) : null;
if (io) io.observe(root);
const AUTO_PAUSE_MS = 2200;   // pause med svaret synlig før neste situasjon
/* ---------- Geometri og simulering (ren JS, ingen DOM) ---------- */
const DT=0.01, O=1.75;               // O = avstand fra veimidte til midt i kjørefelt (m)
const LEN_CAR=4.5, WID_CAR=1.8;
const VIEW_X=31.25, VIEW_Y=15;   // synlig halvvidde i bildet (m)

// Kommandoer: ['M',x,y] ['L',x,y,navn?] ['Q',cx,cy,x,y,navn?] ['A',cx,cy,r,a0,a1,navn?]
function buildPath(cmds){
  const pts=[], marks=[]; let cx=0, cy=0;
  const mark=(name)=>{ if(typeof name==='string') marks.push([name,pts.length-1]); };
  for(const c of cmds){
    if(c[0]==='M'){ cx=c[1]; cy=c[2]; pts.push([cx,cy]); }
    else if(c[0]==='L'){
      const dx=c[1]-cx, dy=c[2]-cy, n=Math.max(1,Math.ceil(Math.hypot(dx,dy)/0.5));
      for(let i=1;i<=n;i++) pts.push([cx+dx*i/n, cy+dy*i/n]);
      cx=c[1]; cy=c[2]; mark(c[3]);
    }else if(c[0]==='Q'){
      const n=36;
      for(let i=1;i<=n;i++){
        const t=i/n, u=1-t;
        pts.push([u*u*cx+2*u*t*c[1]+t*t*c[3], u*u*cy+2*u*t*c[2]+t*t*c[4]]);
      }
      cx=c[3]; cy=c[4]; mark(c[5]);
    }else if(c[0]==='A'){
      const [,mx,my,r,a0,a1]=c, n=Math.max(2,Math.ceil(Math.abs(a1-a0)/2));
      for(let i=1;i<=n;i++){
        const a=(a0+(a1-a0)*i/n)*Math.PI/180;
        pts.push([mx+r*Math.cos(a), my+r*Math.sin(a)]);
      }
      cx=pts[pts.length-1][0]; cy=pts[pts.length-1][1]; mark(c[6]);
    }
  }
  const s=[0];
  for(let i=1;i<pts.length;i++) s.push(s[i-1]+Math.hypot(pts[i][0]-pts[i-1][0], pts[i][1]-pts[i-1][1]));
  const m={}; for(const [k,i] of marks) m[k]=s[i];
  return {pts,s,len:s[s.length-1],marks:m};
}
function rawAt(P,sv){
  sv=Math.max(0,Math.min(P.len,sv));
  let lo=0, hi=P.s.length-1;
  while(hi-lo>1){ const mid=(lo+hi)>>1; if(P.s[mid]<=sv) lo=mid; else hi=mid; }
  const seg=P.s[hi]-P.s[lo] || 1, f=(sv-P.s[lo])/seg;
  return [P.pts[lo][0]+(P.pts[hi][0]-P.pts[lo][0])*f, P.pts[lo][1]+(P.pts[hi][1]-P.pts[lo][1])*f];
}
function pathAt(P,sv){
  const p=rawAt(P,sv), a=rawAt(P,sv-0.9), b=rawAt(P,sv+0.9);
  return {x:p[0], y:p[1], ang:Math.atan2(b[1]-a[1], b[0]-a[0])};
}

// Rundkjøring: bane inn fra arm ae, ut i arm ax (vinkler i grader, skjermkoordinater: 0=øst, 90=sør, 180=vest, 270=nord)
// Kjøreretning mot klokka sett ovenfra = avtakende vinkel.
function rbPath(ae, ax, Rc, opt){
  opt=opt||{};
  const rad=d=>d*Math.PI/180, L=70, near=Rc+6;
  const dE=[Math.cos(rad(ae)),Math.sin(rad(ae))], hE=[-dE[0],-dE[1]];
  const OO=opt.off||O;
  const offE=[-hE[1]*OO, hE[0]*OO];                       // høyre side av kjøreretningen
  const P0=[dE[0]*L+offE[0], dE[1]*L+offE[1]];
  const P1=[dE[0]*near+offE[0], dE[1]*near+offE[1]];
  const aj=ae-22, J=[Rc*Math.cos(rad(aj)), Rc*Math.sin(rad(aj))];
  const tj=[Math.sin(rad(aj)), -Math.cos(rad(aj))];
  // skjæring mellom innkjøringslinje (P1 + hE*u) og tangent (J + tj*w)
  const solve=(p,d,q,e)=>{ const det=d[0]*(-e[1])-d[1]*(-e[0]); const rx=q[0]-p[0], ry=q[1]-p[1];
    const u=(rx*(-e[1])-ry*(-e[0]))/det; return [p[0]+d[0]*u, p[1]+d[1]*u]; };
  const C1=solve(P1,hE,J,tj);
  const dX=[Math.cos(rad(ax)),Math.sin(rad(ax))];
  const offX=[-dX[1]*OO, dX[0]*OO];
  const Q0=[dX[0]*near+offX[0], dX[1]*near+offX[1]];
  const Q1=[dX[0]*L+offX[0], dX[1]*L+offX[1]];
  const al=ax+22, K=[Rc*Math.cos(rad(al)), Rc*Math.sin(rad(al))];
  const tk=[Math.sin(rad(al)), -Math.cos(rad(al))];
  const C2=solve(K,tk,Q0,dX);
  let span=((aj-al)%360+360)%360;                        // hvor mye vi dreier (avtakende)
  const cmds=[['M',...P0],['L',P1[0]-hE[0]*3.4,P1[1]-hE[1]*3.4,'stop'],['L',...P1],
              ['Q',C1[0],C1[1],J[0],J[1]]];
  if(opt.markAt!==undefined){
    const am=((aj-opt.markAt)%360+360)%360;              // hvor langt inn i buen
    cmds.push(['A',0,0,Rc,aj,aj-am,'clear'],['A',0,0,Rc,aj-am,aj-span]);
  }else cmds.push(['A',0,0,Rc,aj,aj-span]);
  cmds.push(['Q',C2[0],C2[1],Q0[0],Q0[1]],['L',...Q1]);
  return cmds;
}

/* ---------- Simulering ---------- */
function simulate(sc){
  const N=Math.round(sc.T/DT);
  const cars=sc.cars.map(c=>{
    const P=buildPath(c.path);
    const st=c.stop? {s:P.marks[c.stop.mark], ...c.stop} : null;
    return {...c, P, st, s:c.s0||0, v:c.v0!==undefined?c.v0:c.vc, released:false, relT:null};
  });
  const idx={}; cars.forEach((c,i)=>idx[c.id]=i);
  const out={N, cars:cars.map(()=>({s:new Float32Array(N+1), v:new Float32Array(N+1)}))};
  for(let i=0;i<=N;i++){
    const t=i*DT;
    cars.forEach((c,k)=>{ out.cars[k].s[i]=c.s; out.cars[k].v[i]=c.v; });
    for(const c of cars){
      let vmax=c.vc;
      if(c.st && !c.released){
        if(c.relT===null){
          if(c.st.waitFor){
            const o=cars[idx[c.st.waitFor.car]];
            if(o.s>=o.P.marks[c.st.waitFor.mark]) c.relT=t+(c.st.delay||0.6);
          }else if(c.st.until!==undefined && t>=c.st.until) c.relT=t;
        }
        if(c.relT!==null && t>=c.relT) c.released=true;
        else{
          const dist=c.st.s-c.s;
          vmax=Math.min(vmax, dist<0.15?0:Math.sqrt(2*(c.dec||2.6)*dist));
        }
      }
      if(c.v<vmax) c.v=Math.min(vmax, c.v+(c.acc||2.2)*DT);
      else c.v=Math.max(vmax, c.v-(c.dec||2.6)*1.7*DT);
      c.s=Math.min(c.P.len, c.s+c.v*DT);
      if(c.st && !c.released && c.s>c.st.s) c.s=c.st.s;
    }
  }
  out.paths=cars.map(c=>c.P);
  // spørsmålet stilles første gang alle bilene er synlige i bildet (Sx/Sy = synlig halvvidde i meter, med litt luft)
  out.tQ=null;
  for(let i=0;i<=N&&out.tQ===null;i+=2){
    let all=true;
    for(let k=0;k<cars.length;k++){
      const p=pathAt(cars[k].P,out.cars[k].s[i]);
      if(Math.abs(p.x-((sc.cam&&sc.cam.x)||0))>500/(sc.S||16)-1.5||Math.abs(p.y-((sc.cam&&sc.cam.y)||0))>240/(sc.S||16)-1.5){all=false;break;}
    }
    if(all) out.tQ=i*DT;
  }
  out.tQ=Math.max(sc.tQmin||0.4, out.tQ===null?1:out.tQ);
  return out;
}

/* ---------- Situasjoner ---------- */
const COL={blue:'#1b6ef3', green:'#2fa84f', red:'#d9382c', yellow:'#f0a020'};
const NAMES={blue:'Blå bil', green:'Grønn bil', red:'Rød bil'};

// Felles baner (høyrekjøring, 0,0 er midt i krysset, y peker nedover)
const fromSouthLeft = ()=>[['M',O,70],['L',O,8.4,'stop'],['L',O,5],['Q',O,-O,-5,-O,'clear'],['L',-70,-O]];
const fromSouthRight= ()=>[['M',O,70],['L',O,8.4,'stop'],['L',O,5],['Q',O,O,5,O,'clear'],['L',70,O]];
const westToEast    = (stopX)=>[['M',-70,O],['L',stopX,O,'stop'],['L',6.5,O,'clear'],['L',70,O]];

const T_ROAD={arms:{W:1,E:1,S:1,N:0}};
const X_ROAD={arms:{W:1,E:1,S:1,N:1}};

const SC={
 hoyre:{
  cam:{x:0,y:6}, name:'Høyreregelen', T:14, decider:4, road:{...T_ROAD, center:'none'},
  setup:'Umerket T-kryss. Det er ingen skilt, lys eller oppmerking som sier noe annet.',
  why:'Blå bil kommer fra høyre for grønn bil, og ingenting annet avgjør vikeplikten. Da gjelder høyreregelen: grønn bil viker for blå bil. Hvor stor veien er, har ingen betydning.',
  first:'blue', order:['blue','green'],
  cars:[
   {id:'blue', path:fromSouthLeft(), vc:5, s0:53, blink:{side:'L',a:['stop',-8],b:['clear',2]}},
   {id:'green',path:westToEast(-6.5), vc:7, s0:46, stop:{mark:'stop',waitFor:{car:'blue',mark:'clear'},delay:0.5}}
  ],
  signs:[], lines:[], lights:[]
 },
 vikeplikt:{
  cam:{x:0,y:6}, name:'Vikepliktskilt', T:15, decider:2, road:{...T_ROAD, center:'dashed'},
  setup:'Samme kryss, men nå har blå bil vikepliktskilt (202) og vikelinje.',
  why:'Skiltet går foran høyreregelen. Blå bil har vikeplikt for kjørende fra begge retninger, og venter derfor til grønn bil har passert.',
  first:'green', order:['green','blue'],
  cars:[
   {id:'green',path:westToEast(-6.5), vc:7, s0:46},
   {id:'blue', path:fromSouthLeft(), vc:5, s0:53, blink:{side:'L',a:['stop',-8],b:['clear',2]},
          stop:{mark:'stop',waitFor:{car:'green',mark:'clear'},delay:0.6}}
  ],
  signs:[{type:'202',x:6.2,y:9.5}], lines:[{type:'yield',x1:0.2,y1:5.3,x2:2.8,y2:5.3}], lights:[]
 },
 stopp:{
  cam:{x:0,y:6}, name:'Stoppskilt', T:16, decider:2, road:{...T_ROAD, center:'dashed'},
  setup:'Blå bil har stoppskilt (204) og kommer først fram til krysset.',
  why:'Blå bil må stanse helt, selv om den kom først. Stoppskiltet gir vikeplikt for all trafikk på vegen den skal inn på.',
  first:'green', order:['green','blue'],
  cars:[
   {id:'green',path:westToEast(-6.5), vc:7, s0:40},
   {id:'blue', path:fromSouthLeft(), vc:5, s0:53, blink:{side:'L',a:['stop',-8],b:['clear',2]},
          stop:{mark:'stop',waitFor:{car:'green',mark:'clear'},delay:0.8}}
  ],
  signs:[{type:'204',x:6.2,y:9.5}], lines:[{type:'stop',x1:0.2,y1:5.3,x2:2.8,y2:5.3}], lights:[]
 },
 forkjor:{
  cam:{x:0,y:6}, name:'Forkjørsveg', T:15, decider:2, road:{...T_ROAD, center:'dashed'},
  setup:'Grønn bil kjører på en forkjørsveg (206). Blå bil kommer fra sidevegen og skal til høyre.',
  why:'På en forkjørsveg har trafikken fra sideveiene vikeplikt. Blå bil venter til grønn bil har passert, og kjører så ut etter den.',
  first:'green', order:['green','blue'],
  cars:[
   {id:'green',path:westToEast(-6.5), vc:7, s0:44},
   {id:'blue', path:fromSouthRight(), vc:5, s0:53, blink:{side:'R',a:['stop',-8],b:['clear',2]},
          stop:{mark:'stop',waitFor:{car:'green',mark:'clear'},delay:0.6}}
  ],
  signs:[{type:'206',x:-19,y:6.6},{type:'206',x:19,y:-6.8},{type:'202',x:6.2,y:9.5}],
  labels:[{x:-9,y:-6.4,text:'Forkjørsveg'}], lines:[{type:'yield',x1:0.2,y1:5.3,x2:2.8,y2:5.3}], lights:[]
 },
 venstre:{
  name:'Venstresving', T:15, decider:3, road:{...X_ROAD, center:'dashed'},
  setup:'Blå bil skal svinge til venstre. Rød bil kommer imot og skal rett fram.',
  why:'Den som svinger til venstre, viker for møtende kjøretøy. Blå bil venter til rød bil har passert.',
  first:'red', order:['red','blue'],
  cars:[
   {id:'red', path:[['M',70,-O],['L',-3,-O,'clear'],['L',-70,-O]], vc:7, s0:40},
   {id:'blue',path:[['M',-70,O],['L',-7.5,O,'stop'],['L',-5,O],['Q',O,O,O,-5,'clear'],['L',O,-70]], vc:6.5, s0:44,
          blink:{side:'L',a:['stop',-10],b:['clear',2]},
          stop:{mark:'stop',waitFor:{car:'red',mark:'clear'},delay:0.4}}
  ],
  signs:[], lines:[], lights:[]
 },
 rundkjoring:{
  name:'Rundkjøring', T:18, decider:2, tQmin:1.6, S:13, road:{...X_ROAD, center:'none', rb:9.5, rw:4},
  setup:'Blå bil skal inn i rundkjøringen. Rød bil er allerede inne i rundkjøringen.',
  why:'Foran rundkjøringen står det vikepliktskilt og vikelinje. Blå bil har vikeplikt for trafikken som allerede er inne i rundkjøringen.',
  first:'red', order:['red','blue'],
  cars:[
   {id:'red', path:rbPath(270,90,9.5,{markAt:130,off:2.0}), vc:4.5, s0:53},
   {id:'blue',path:rbPath(180,0,9.5,{off:2.0}), vc:5.5, s0:37,
          stop:{mark:'stop',waitFor:{car:'red',mark:'clear'},delay:0.5}}
  ],
  signs:[{type:'202',x:-19.5,y:6.9}], lines:[{type:'yield',x1:-15.8,y1:0.5,x2:-15.8,y2:3.2,vertical:true}], lights:[]
 },
 parkering:{
  cam:{x:0,y:5}, name:'Utkjøring', T:15, decider:3, road:{arms:{W:1,E:1,S:0,N:0}, center:'dashed', lot:true},
  setup:'Blå bil kjører ut fra en parkeringsplass. Rød bil kommer på vegen.',
  why:'Den som kjører ut fra en parkeringsplass, garasje eller eiendom, viker for trafikken på vegen. Blå bil venter til rød bil har passert.',
  first:'red', order:['red','blue'],
  cars:[
   {id:'red', path:[['M',-70,O],['L',9,O,'clear'],['L',70,O]], vc:7, s0:44},
   {id:'blue',path:[['M',0.9,28],['L',0.9,6.8,'stop'],['L',0.9,5],['Q',0.9,O,5,O],['L',70,O]], vc:4, s0:11,
          blink:{side:'R',a:['stop',-9],b:['stop',12]},
          stop:{mark:'stop',waitFor:{car:'red',mark:'clear'},delay:0.5}}
  ],
  signs:[], lines:[], lights:[]
 },
 lys:{
  name:'Trafikklys', T:14, decider:1, road:{...X_ROAD, center:'dashed'},
  setup:'Blå bil har vikepliktskilt, men også grønt lys. Grønn bil har rødt lys.',
  why:'Så lenge trafikklyset er i drift, gjelder lyset foran vikepliktskiltet. Blå bil har grønt og kjører først. Grønn bil stopper for rødt.',
  first:'blue', order:['blue','green'],
  cars:[
   {id:'blue', path:[['M',O,70],['L',O,-70]], vc:7, s0:54},
   {id:'green',path:westToEast(-8.3), vc:6.5, s0:40, stop:{mark:'stop',until:6.2}}
  ],
  signs:[{type:'202',x:6.2,y:11.5}], lines:[{type:'stop',x1:0.2,y1:5.3,x2:2.8,y2:5.3},{type:'stop',x1:-5.3,y1:0.2,x2:-5.3,y2:2.8,vertical:true}],
  lights:[
   {x:5.8,y:6.8,rot:0,  states:[[0,'green'],[4.0,'amber'],[5.2,'red']]},
   {x:-6.6,y:5.8,rot:90,states:[[0,'red'],[5.7,'redamber'],[6.2,'green']]}
  ]
 }
};
const ORDER=['hoyre','vikeplikt','stopp','forkjor','venstre','rundkjoring','parkering','lys'];

/* ---------- Tegning ---------- */
const W=1000, H=480, CX=W/2, CYY=H/2;
let S=16, SK=1.55;                         // skala (px per meter) – kan settes per situasjon
let camX=0, camY=0;                       // kamera (m), settes per situasjon
const sx=x=>CX+(x-camX)*S, sy=y=>CYY+(y-camY)*S;
const cv=root.querySelector('#vpa-cv'), ctx=cv.getContext('2d');
function fit(){const r=Math.min(window.devicePixelRatio||1,2);cv.width=W*r;cv.height=H*r;ctx.setTransform(r,0,0,r,0,0);}
fit();

function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function rect(x1,y1,x2,y2){ctx.fillRect(sx(x1),sy(y1),(x2-x1)*S,(y2-y1)*S);}
function wheel(x,y,w,h){ctx.fillStyle='#12161b';rr(x-w/2,y-h/2,w,h,1.5);ctx.fill();}

function car(px,py,ang,color,left,right,on){
  const f=S/11, L=LEN_CAR*11, Wd=WID_CAR*11;
  ctx.save();ctx.translate(px,py);ctx.rotate(ang);ctx.scale(f,f);
  ctx.fillStyle='rgba(0,0,0,.30)';rr(-L/2+2,-Wd/2+4,L,Wd,8);ctx.fill();
  [-0.29,0.29].forEach(f=>{wheel(L*f,-Wd/2,10,3);wheel(L*f,Wd/2,10,3);});
  rr(-L/2,-Wd/2,L,Wd,7);ctx.fillStyle=color;ctx.fill();
  const g=ctx.createLinearGradient(0,-Wd/2,0,Wd/2);
  g.addColorStop(0,'rgba(255,255,255,.34)');g.addColorStop(.45,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(0,0,0,.28)');
  ctx.fillStyle=g;ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1;ctx.stroke();
  ctx.fillStyle='#17202a';rr(-L*0.31,-Wd/2+2.5,L*0.53,Wd-5,5);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(L*0.14,-Wd/2+3.5,2,Wd-7);
  ctx.fillStyle=color;rr(-L*0.20,-Wd/2+3.5,L*0.30,Wd-7,4);ctx.fill();
  ctx.fillStyle=g;ctx.fill();
  ctx.fillStyle=color;ctx.fillRect(L*0.15,-Wd/2-2.5,4,3);ctx.fillRect(L*0.15,Wd/2-0.5,4,3);
  ctx.fillStyle='#fff6bf';ctx.fillRect(L/2-2,-Wd/2+2,3,4);ctx.fillRect(L/2-2,Wd/2-6,3,4);
  ctx.fillStyle='#d32f2f';ctx.fillRect(-L/2-1,-Wd/2+2,2,4);ctx.fillRect(-L/2-1,Wd/2-6,2,4);
  if(on){
    ctx.fillStyle='#ffa000';ctx.shadowColor='#ffa000';ctx.shadowBlur=12;
    const sides=[];if(left)sides.push(-1);if(right)sides.push(1);
    for(const sd of sides){const yy=sd*(Wd/2);
      ctx.beginPath();ctx.arc(L/2-3,yy,3.6,0,7);ctx.fill();
      ctx.beginPath();ctx.arc(-L/2+3,yy,3.6,0,7);ctx.fill();}
  }
  ctx.restore();
}

function tag(text,x,y,col){
  ctx.save();ctx.font='700 18px system-ui,sans-serif';const w=ctx.measureText(text).width+18;
  rr(x-w/2,y-13,w,26,13);ctx.fillStyle=col;ctx.fill();
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,x,y+0.5);ctx.restore();
}

/* ----- skilt (sett rett forfra, som i forbikjøring-animasjonen) ----- */
function sign(type,x,y){
  ctx.save();ctx.translate(sx(x),sy(y));ctx.scale(SK,SK);const px=0, py=0;
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.beginPath();ctx.ellipse(px+3,py+13,10,4,0,0,7);ctx.fill();
  ctx.fillStyle='#8a8f96';ctx.fillRect(px-1.5,py,3,14);
  const cy=py-4;
  if(type==='202'){                       // vikeplikt: trekant med spissen ned
    ctx.beginPath();ctx.moveTo(px-17,cy-13);ctx.lineTo(px+17,cy-13);ctx.lineTo(px,cy+17);ctx.closePath();
    ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=5;ctx.lineJoin='round';ctx.strokeStyle='#d32f2f';ctx.stroke();
  }else if(type==='204'){                 // stopp: rød åttekant
    ctx.beginPath();for(let k=0;k<8;k++){const a=Math.PI/8+k*Math.PI/4;ctx.lineTo(px+17*Math.cos(a),cy+17*Math.sin(a));}
    ctx.closePath();ctx.fillStyle='#d32f2f';ctx.fill();ctx.lineWidth=1.5;ctx.strokeStyle='#fff';ctx.stroke();
    ctx.fillStyle='#fff';ctx.font='800 9.5px system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('STOPP',px,cy+0.5);
  }else if(type==='206'){                 // forkjørsveg: gul rute med hvit og svart kant
    ctx.save();ctx.translate(px,cy);ctx.rotate(Math.PI/4);
    ctx.fillStyle='#111';rr(-13.5,-13.5,27,27,2);ctx.fill();
    ctx.fillStyle='#fff';rr(-11.5,-11.5,23,23,1.5);ctx.fill();
    ctx.fillStyle='#f6c400';rr(-8.5,-8.5,17,17,1);ctx.fill();
    ctx.restore();
  }
  ctx.restore();
}

/* ----- trafikklys ----- */
function light(l,t){
  let st=l.states[0][1]; for(const [t0,c] of l.states) if(t>=t0) st=c;
  const px=sx(l.x), py=sy(l.y);
  ctx.save();ctx.translate(px,py);ctx.scale(SK,SK);ctx.rotate(l.rot*Math.PI/180);
  ctx.fillStyle='rgba(0,0,0,.25)';rr(-6,-17,16,40,5);ctx.fill();
  ctx.fillStyle='#1b1f24';rr(-7,-20,14,40,5);ctx.fill();
  const cols={red:'#ff3b30',amber:'#ffb300',green:'#2ee66b'};
  [['red',-12],['amber',0],['green',12]].forEach(([k,yy])=>{
    const on=(k===st)||(st==='redamber'&&(k==='red'||k==='amber'));
    ctx.beginPath();ctx.arc(0,yy,4.6,0,7);
    ctx.fillStyle=on?cols[k]:'#3a4047';
    if(on){ctx.shadowColor=cols[k];ctx.shadowBlur=14;}
    ctx.fill();ctx.shadowBlur=0;
  });
  ctx.restore();
}

/* ----- vei ----- */
function dashedH(x1,x2,y,col){ // gul stiplet midtlinje (3 m strek, 9 m gap)
  ctx.fillStyle=col;
  for(let x=Math.ceil(x1/12)*12; x<x2; x+=12) ctx.fillRect(sx(x),sy(y)-1.6,3*S,3.2);
}
function dashedV(y1,y2,x,col){
  ctx.fillStyle=col;
  for(let y=Math.ceil(y1/12)*12; y<y2; y+=12) ctx.fillRect(sx(x)-1.6,sy(y),3.2,3*S);
}

const FR=3.4;   // radius på hjørneavrunding i kryss (m)
function filletPath(sg,sh,Rline,Cd){
  const rad=Cd-Rline, Cx=sg*Cd, Cy=sh*Cd;
  ctx.beginPath();ctx.moveTo(sx(sg*Rline),sy(sh*Rline));ctx.lineTo(sx(Cx),sy(sh*Rline));
  for(let k=0;k<=18;k++){const th=k/18*Math.PI/2;
    ctx.lineTo(sx(Cx+rad*(-sg)*Math.sin(th)), sy(Cy+rad*(-sh)*Math.cos(th)));}
  ctx.closePath();ctx.fill();
}
function corners(a){ const out=[]; for(const sg of [-1,1]) for(const sh of [-1,1]) if((sg<0?a.W:a.E)&&(sh<0?a.N:a.S)) out.push([sg,sh]); return out; }

const ARMS=[{k:'N',ux:0,uy:-1,vx:1,vy:0},{k:'S',ux:0,uy:1,vx:1,vy:0},{k:'W',ux:-1,uy:0,vx:0,vy:1},{k:'E',ux:1,uy:0,vx:0,vy:1}];
const RFIL=2.8;   // avrundingsradius der armene møter rundkjøringen
function rbGeom(RW,Ro,rf,pad){
  const rho=rf-pad, RWp=RW+pad, Rop=Ro+pad;
  return {rho,RWp,Rop,h:Math.sqrt((Rop+rho)**2-(RWp+rho)**2)};
}
function rbFillets(a,RW,Ro,rf,pad,col){
  const g=rbGeom(RW,Ro,rf,pad), nrm=d=>{while(d>Math.PI)d-=2*Math.PI;while(d<-Math.PI)d+=2*Math.PI;return d;};
  ctx.fillStyle=col;
  for(const arm of ARMS){ if(!a[arm.k]) continue;
    for(const sg of [-1,1]){
      const Cx=arm.ux*g.h+arm.vx*sg*(g.RWp+g.rho), Cy=arm.uy*g.h+arm.vy*sg*(g.RWp+g.rho), Cl=Math.hypot(Cx,Cy);
      const T1=[arm.ux*g.h+arm.vx*sg*g.RWp, arm.uy*g.h+arm.vy*sg*g.RWp];
      const T2=[Cx*g.Rop/Cl, Cy*g.Rop/Cl];
      const q=Math.sqrt(g.Rop*g.Rop-g.RWp*g.RWp), I=[arm.ux*q+arm.vx*sg*g.RWp, arm.uy*q+arm.vy*sg*g.RWp];
      const a1=Math.atan2(T1[1]-Cy,T1[0]-Cx), da=nrm(Math.atan2(T2[1]-Cy,T2[0]-Cx)-a1);
      const b1=Math.atan2(T2[1],T2[0]), db=nrm(Math.atan2(I[1],I[0])-b1);
      ctx.beginPath();ctx.moveTo(sx(T1[0]),sy(T1[1]));
      for(let k=1;k<=20;k++){const an=a1+da*k/20;ctx.lineTo(sx(Cx+g.rho*Math.cos(an)),sy(Cy+g.rho*Math.sin(an)));}
      for(let k=1;k<=20;k++){const an=b1+db*k/20;ctx.lineTo(sx(g.Rop*Math.cos(an)),sy(g.Rop*Math.sin(an)));}
      ctx.closePath();ctx.fill();
    }}
}
function rbEdgeArcs(a,RW,Ro,rf,ec,ew){
  const g=rbGeom(RW,Ro,rf,0), nrm=d=>{while(d>Math.PI)d-=2*Math.PI;while(d<-Math.PI)d+=2*Math.PI;return d;};
  ctx.strokeStyle='#f4f4f4';ctx.lineWidth=ew*S;
  for(const arm of ARMS){ if(!a[arm.k]) continue;
    for(const sg of [-1,1]){
      const Cx=arm.ux*g.h+arm.vx*sg*(RW+rf), Cy=arm.uy*g.h+arm.vy*sg*(RW+rf), Cl=Math.hypot(Cx,Cy);
      const T1=[arm.ux*g.h+arm.vx*sg*RW, arm.uy*g.h+arm.vy*sg*RW], T2=[Cx*Ro/Cl, Cy*Ro/Cl];
      const a1=Math.atan2(T1[1]-Cy,T1[0]-Cx), da=nrm(Math.atan2(T2[1]-Cy,T2[0]-Cx)-a1), rad=rf+ec;
      ctx.beginPath();
      for(let k=0;k<=20;k++){const an=a1+da*k/20;const px=sx(Cx+rad*Math.cos(an)),py=sy(Cy+rad*Math.sin(an));k?ctx.lineTo(px,py):ctx.moveTo(px,py);}
      ctx.stroke();
    }}
  // kantlinje langs selve rundkjøringen, mellom armene
  const dl=Math.atan2(RW+rf,g.h);
  for(let k=0;k<4;k++){
    ctx.beginPath();ctx.arc(sx(0),sy(0),(Ro-ec)*S,k*Math.PI/2+dl,(k+1)*Math.PI/2-dl);ctx.stroke();
  }
}
function splitter(arm,Ro){ // liten fordelingsøy midt i armen
  const b0=Ro+0.3, b1=Ro+5.5, w=0.5;
  const P=(d,l)=>[sx(arm.ux*d+arm.vx*l), sy(arm.uy*d+arm.vy*l)];
  ctx.beginPath();ctx.moveTo(...P(b0,-w));ctx.lineTo(...P(b1,0));ctx.lineTo(...P(b0,w));ctx.closePath();
  ctx.fillStyle='#cfc8b6';ctx.fill();ctx.strokeStyle='#f4f4f4';ctx.lineWidth=1.6;ctx.stroke();
}

function drawScenery(sc){
  const a=sc.road.arms, rb=sc.road.rb, lot=sc.road.lot;
  const XM=CX/S+1+Math.abs(camX), YM=CYY/S+1+Math.abs(camY);            // synlig halvvidde (m)
  // gress
  const gg=ctx.createLinearGradient(0,0,0,H);
  gg.addColorStop(0,'#5c9e55');gg.addColorStop(.5,'#68ad60');gg.addColorStop(1,'#5a9b53');
  ctx.fillStyle=gg;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.04)';
  for(let k=-8;k<8;k++) if(k%2===0) ctx.fillRect(sx(k*8),0,8*S,H);

  // trær (faste posisjoner)
  for(let k=0;k<120;k++){
    const x=((k*53)%97)-48.5+camX*0, y=((k*37)%61)-30.5, r=(9+(k*13)%8)*1.5;
    if(Math.abs(y)<7.5 && (a.W||a.E)) continue;
    if(Math.abs(x)<7.5 && ((y>0&&a.S)||(y<0&&a.N))) continue;
    if(Math.abs(x)<7.5 && Math.abs(y)<7.5) continue;
    if(rb && Math.hypot(x,y)<20) continue;
    if(lot && y>5) continue;
    if(Math.abs(x-camX)>CX/S||Math.abs(y-camY)>CYY/S) continue;
    const px=sx(x), py=sy(y), spruce=(k%3===0);
    ctx.fillStyle='rgba(0,0,0,.20)';ctx.beginPath();ctx.ellipse(px+r*.35,py+r*.5,r,r*.9,0,0,7);ctx.fill();
    const rg=ctx.createRadialGradient(px-r*.3,py-r*.3,1,px,py,r*1.05);
    if(spruce){rg.addColorStop(0,'#2e7b4b');rg.addColorStop(1,'#14452a');}
    else{rg.addColorStop(0,'#58b36c');rg.addColorStop(.65,'#2f8a4b');rg.addColorStop(1,'#1f6a38');}
    ctx.fillStyle=rg;ctx.beginPath();ctx.arc(px,py,r,0,7);ctx.fill();
    if(spruce){ctx.strokeStyle='rgba(255,255,255,.10)';ctx.lineWidth=1;for(let q=r*0.7;q>2;q-=r*0.28){ctx.beginPath();ctx.arc(px,py,q,0,7);ctx.stroke();}}
    else{ctx.fillStyle='rgba(255,255,255,.10)';ctx.beginPath();ctx.arc(px-r*.3,py-r*.3,r*.45,0,7);ctx.fill();}
  }

  const RW=sc.road.rw||3.5;                 // halv veibredde
  // skulder (grus)
  ctx.fillStyle='#cfc8b6';
  if(a.W) rect(-XM,-RW-0.8,0,RW+0.8); if(a.E) rect(0,-RW-0.8,XM,RW+0.8);
  if(a.N) rect(-RW-0.8,-YM,RW+0.8,0); if(a.S) rect(-RW-0.8,0,RW+0.8,YM);
  rect(-RW-0.8,-RW-0.8,RW+0.8,RW+0.8);
  if(rb){ctx.beginPath();ctx.arc(sx(0),sy(0),(rb+3.5+0.8)*S,0,7);ctx.fill();}
  if(!rb) for(const [sg,sh] of corners(a)) filletPath(sg,sh,RW+0.8,RW+FR);
  if(rb) rbFillets(a,RW,rb+3.5,RFIL,0.8,'#cfc8b6');
  // parkeringsplass
  if(lot){
    ctx.fillStyle='#cfc8b6';rect(-3.8,3,3.8,11);rect(-35.8,9.2,35.8,YM);
    ctx.fillStyle='#4a515a';rect(-3,3,3,10.2);rect(-35,10,35,YM);
    ctx.fillStyle='rgba(255,255,255,.55)';
    for(let x=-33;x<=33;x+=6.5){ if(Math.abs(x)<6.2) continue; rect(x-0.12,11,x+0.12,17); rect(x-0.12,17,x+0.12,23); }
  }
  // asfalt
  const ag=(x0,y0,x1,y1)=>{const g=ctx.createLinearGradient(sx(x0),sy(y0),sx(x1),sy(y1));g.addColorStop(0,'#454c55');g.addColorStop(.5,'#3c434b');g.addColorStop(1,'#464d56');return g;};
  if(a.W){ctx.fillStyle=ag(0,-RW,0,RW);rect(-XM,-RW,0,RW);}
  if(a.E){ctx.fillStyle=ag(0,-RW,0,RW);rect(0,-RW,XM,RW);}
  if(a.N){ctx.fillStyle=ag(-RW,0,RW,0);rect(-RW,-YM,RW,0);}
  if(a.S){ctx.fillStyle=ag(-RW,0,RW,0);rect(-RW,0,RW,YM);}
  ctx.fillStyle='#3f464e';rect(-RW,-RW,RW,RW);
  if(!rb){ctx.fillStyle='#3f464e';for(const [sg,sh] of corners(a)) filletPath(sg,sh,RW,RW+FR);}
  if(rb) rbFillets(a,RW,rb+3.5,RFIL,0,'#3f464e');
  if(rb){
    ctx.fillStyle='#3f464e';ctx.beginPath();ctx.arc(sx(0),sy(0),(rb+3.5)*S,0,7);ctx.fill();
    ctx.fillStyle='#cfc8b6';ctx.beginPath();ctx.arc(sx(0),sy(0),(rb-3.5)*S,0,7);ctx.fill();
    const g=ctx.createRadialGradient(sx(0)-8,sy(0)-8,4,sx(0),sy(0),(rb-4.3)*S);
    g.addColorStop(0,'#6fb865');g.addColorStop(1,'#4f9a53');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(sx(0),sy(0),(rb-4.3)*S,0,7);ctx.fill();
    // lite tre på øya
    const rg=ctx.createRadialGradient(sx(0)-5,sy(0)-6,1,sx(0),sy(0),24);rg.addColorStop(0,'#58b36c');rg.addColorStop(.7,'#2f8a4b');rg.addColorStop(1,'#1f6a38');
    ctx.fillStyle='rgba(0,0,0,.2)';ctx.beginPath();ctx.arc(sx(0)+6,sy(0)+8,22,0,7);ctx.fill();
    ctx.fillStyle=rg;ctx.beginPath();ctx.arc(sx(0),sy(0),22,0,7);ctx.fill();
  }
  // kantlinjer
  ctx.fillStyle='#f4f4f4';const e=0.35, ew=0.28, ec=e+ew/2;
  const gapR=rb? rb+3.5 : RW;
  if(rb){
    const edgeH=(x1,x2)=>{rect(x1,-RW+e,x2,-RW+e+ew);rect(x1,RW-e-ew,x2,RW-e);};
    const edgeV=(y1,y2)=>{rect(-RW+e,y1,-RW+e+ew,y2);rect(RW-e-ew,y1,RW-e,y2);};
    const hE=rbGeom(RW,rb+3.5,RFIL,0).h;
    if(a.W) edgeH(-XM,-hE); if(a.E) edgeH(hE,XM);
    if(a.N) edgeV(-YM,-hE); if(a.S) edgeV(hE,YM);
    rbEdgeArcs(a,RW,rb+3.5,RFIL,ec,ew);
  }else{
    const hor=a.W||a.E, ver=a.N||a.S;
    const cut=RW+FR;
    // horisontale kantlinjer (nord/sør for vegen vest–øst)
    if(hor) for(const sh of [-1,1]){
      const y=sh*(RW-ec), perp=(sh<0?a.N:a.S);
      const x1=a.W?-XM:-RW, x2=a.E?XM:RW;
      const wy=y-ew/2;
      if(!perp) rect(x1,wy,x2,wy+ew);
      else{ if(a.W) rect(x1,wy,-cut,wy+ew); if(a.E) rect(cut,wy,x2,wy+ew); }
    }
    // vertikale kantlinjer (vest/øst for vegen nord–sør)
    if(ver) for(const sg of [-1,1]){
      const x=sg*(RW-ec), perp=(sg<0?a.W:a.E);
      const y1=a.N?-YM:-RW, y2=a.S?YM:RW;
      const wx0=x-ew/2;
      if(!perp) rect(wx0,y1,wx0+ew,y2);
      else{ if(a.N) rect(wx0,y1,wx0+ew,-cut); if(a.S) rect(wx0,cut,wx0+ew,y2); }
    }
    // buede kantlinjer i hjørnene
    ctx.strokeStyle='#f4f4f4';ctx.lineWidth=ew*S;
    for(const [sg,sh] of corners(a)){
      const Cx=sg*(RW+FR), Cy=sh*(RW+FR), rad=FR+ec;
      ctx.beginPath();
      for(let k=0;k<=18;k++){const th=k/18*Math.PI/2;
        const px=sx(Cx+rad*(-sg)*Math.sin(th)), py=sy(Cy+rad*(-sh)*Math.cos(th));
        if(k===0)ctx.moveTo(px,py); else ctx.lineTo(px,py);}
      ctx.stroke();
    }
  }
  if(lot){ // ingen kantlinje foran avkjørselen
    ctx.fillStyle='#454c55';rect(-3,RW-ec-ew/2-0.05,3,RW+0.05);
  }
  // midtlinjer (gule)
  const mid=sc.road.center==='dashed'? '#f2c230' : null;
  if(mid){
    if(a.W) dashedH(-XM,-gapR-1,0,mid); if(a.E) dashedH(gapR+1,XM,0,mid);
    if(a.N&&a.S){ dashedV(-YM,-gapR-1,0,mid); dashedV(gapR+1,YM,0,mid); }
  }
  if(rb) for(const arm of ARMS) if(a[arm.k]) splitter(arm,rb+3.5);
  // stopp- og vikelinjer
  for(const l of sc.lines){
    ctx.fillStyle='#f4f4f4';
    if(l.type==='stop'){
      if(l.vertical) rect(l.x1-0.25,l.y1,l.x1+0.25,l.y2); else rect(l.x1,l.y1-0.25,l.x2,l.y1+0.25);
    }else{ // vikelinje: rad med trekanter som peker mot den som kommer
      const n=3, len=(l.vertical? l.y2-l.y1 : l.x2-l.x1), w=len/n;   // tenner peker mot den som kommer
      for(let k=0;k<n;k++){
        ctx.beginPath();
        if(l.vertical){const y=l.y1+k*w, x=l.x1; ctx.moveTo(sx(x+0.55),sy(y+0.1));ctx.lineTo(sx(x+0.55),sy(y+w-0.1));ctx.lineTo(sx(x-0.55),sy(y+w/2));}
        else{const x=l.x1+k*w, y=l.y1; ctx.moveTo(sx(x+0.1),sy(y-0.55));ctx.lineTo(sx(x+w-0.1),sy(y-0.55));ctx.lineTo(sx(x+w/2),sy(y+0.55));}
        ctx.closePath();ctx.fill();
      }
    }
  }
  // stolper langs veien
  ctx.fillStyle='#f4f4f4';
}

function drawParked(sc){
  if(!sc.road.lot) return;
  const cols=['#8d99a6','#c9ced4','#6b7480','#a8b0b9','#7d6f64'];
  let k=0;
  for(const y of [14.2]) for(let x=-29.5;x<=29.5;x+=6.5){
    if(Math.abs(x)<6.2){continue;}
    k++; if((k*7)%5===0) continue;
    car(sx(x),sy(y),-Math.PI/2,cols[k%cols.length],false,false,false);
  }
}

/* ---------- Tilstand ---------- */
const STEPS=['Dirigerer politiet trafikken?','Er det trafikklys?','Finnes det skilt eller oppmerking?','Hva skal hver trafikant gjøre?','Høyreregelen (brukes sist)'];
let curId=ORDER[0], sc=SC[curId], sim=null;
let mode='watch';            // 'watch' | 'quiz'
let tcur=0, playing=true, speed=1, lastTs=null;
let answered=false, picked=null, lastKey='';

const $=id=>root.querySelector('#vpa-'+id);

function blinkOn(c,k,s){
  if(!c.blink) return [false,false];
  const P=sim.paths[k], b=c.blink;
  const f=(a)=>(typeof a[0]==='number')?a[0]:(P.marks[a[0]]+a[1]);
  const on = s>=f(b.a) && s<=f(b.b);
  return [on&&b.side==='L', on&&b.side==='R'];
}

function carPose(k,i){ return pathAt(sim.paths[k], sim.cars[k].s[i]); }

function draw(t){
  const i=Math.min(sim.N,Math.round(t/DT));
  ctx.clearRect(0,0,W,H);
  drawScenery(sc);
  for(const s of sc.signs) sign(s.type,s.x,s.y);
  for(const l of (sc.labels||[])) tag(l.text,sx(l.x),sy(l.y),'rgba(40,40,40,.88)');
  drawParked(sc);
  for(const l of sc.lights) light(l,i*DT);

  const blink=(Math.floor(i*DT*3)%2===0);
  const asking = (mode==='quiz' && !answered && i*DT>=sim.tQ-0.001);
  const showOrder = (mode==='watch' && i*DT>=sim.tQ) || (mode==='quiz' && answered);
  const poses=sc.cars.map((c,k)=>carPose(k,i));
  sc.cars.forEach((c,k)=>{
    const p=poses[k];
    const [l,r]=blinkOn(c,k,sim.cars[k].s[i]);
    car(sx(p.x),sy(p.y),p.ang,COL[c.id],l,r,blink);
  });
  // markering av valgbare biler når vi spør
  if(asking){
    ctx.save();ctx.lineWidth=2.5;ctx.setLineDash([6,5]);ctx.strokeStyle='#fff';ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=4;
    sc.cars.forEach((c,k)=>{ const p=poses[k]; ctx.beginPath();ctx.arc(sx(p.x),sy(p.y),54,0,7);ctx.stroke(); });
    ctx.restore();
  }
  // rekkefølge
  if(showOrder){
    sc.order.forEach((id,n)=>{
      const k=sc.cars.findIndex(c=>c.id===id), p=poses[k];
      const txt=(n+1)+(n===0?' – først':' – viker');
      tag(txt,sx(p.x),sy(p.y)-46,n===0?'#1e9e5a':'#d98a00');
    });
  }
  // panel
  $('time').textContent=(i*DT).toFixed(1).replace('.',',')+' s';
  $('scrub').value=Math.round(i*DT/sc.T*1000);
  updatePanel(i*DT, asking, showOrder);
}

/* ---------- Panel ---------- */
function updatePanel(t,asking,showOrder){
  const key=[curId,mode,answered,asking,showOrder,picked].join('|');
  if(key===lastKey) return; lastKey=key;
  // sjekkliste
  const lis=root.querySelectorAll('#vpa-steps li');
  lis.forEach((li,n)=>{
    li.className = !showOrder? '' : (n<sc.decider?'done':n===sc.decider?'now':'later');
  });
  // tekst
  const cap=$('cap'), q=$('quiz'), fb=$('fb');
  q.hidden=!(mode==='quiz'&&!answered&&asking);
  fb.hidden=!(mode==='quiz'&&answered);
  const v=$('verdict');
  if(showOrder){
    v.className='verdict ok'; v.textContent=mode==='watch'? (NAMES[sc.first]||'')+' kjører først.' : '';
    cap.textContent=sc.why;
  }else{
    v.className='verdict'; v.textContent='';
    cap.textContent = asking? 'Hvem må vike? Velg under, eller klikk på en bil.' : sc.setup;
  }
  if(mode==='quiz'&&answered){
    const right=picked===sc.first;
    fb.className='fb '+(right?'ok':'bad');
    fb.textContent=right? 'Riktig!' : 'Ikke helt – '+NAMES[sc.first]+' kjører først.';
  }
}

/* ---------- Oppsett ---------- */
function mkStatic(){
  const ol=$('steps'); ol.innerHTML='';
  STEPS.forEach(s=>{const li=document.createElement('li');li.textContent=s;ol.appendChild(li);});
  const tabs=$('tabs');
  ORDER.forEach(id=>{
    const b=document.createElement('button');b.type='button';b.dataset.id=id;b.textContent=SC[id].name;
    b.addEventListener('click',()=>{auto=false;setScenario(id);});tabs.appendChild(b);
  });
}
function mkQuizButtons(){
  const q=$('qbtns'); q.innerHTML='';
  sc.cars.forEach(c=>{
    const b=document.createElement('button');b.type='button';b.className='qb';
    b.innerHTML='<i style="background:'+COL[c.id]+'"></i>'+NAMES[c.id]+' kjører først';
    b.addEventListener('click',()=>answer(c.id));q.appendChild(b);
  });
}
function setScenario(id){
  curId=id; sc=SC[id]; sim=simulate(sc); S=sc.S||16; SK=S/10.3; camX=(sc.cam&&sc.cam.x)||0; camY=(sc.cam&&sc.cam.y)||0;
  tcur=0; playing=true; answered=false; picked=null; lastKey=''; lastTs=null;
  root.querySelectorAll('#vpa-tabs button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===id)));
  mkQuizButtons(); updPlay(); draw(0);
}
function setMode(m){
  mode=m;
  root.querySelectorAll('#vpa-modes button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===m)));
  setScenario(curId);
}
function answer(id){
  if(answered) return;
  answered=true; picked=id; lastKey='';
  playing=true; lastTs=null; updPlay();
  draw(tcur);
}
function updPlay(){
  const end=tcur>=sc.T-DT;
  $('play').textContent=end?'▶ Spill på nytt':(playing?'⏸ Pause':'▶ Spill');
}

$('play').addEventListener('click',()=>{
  auto=false;
  if(tcur>=sc.T-DT){ setScenario(curId); return; }
  if(mode==='quiz'&&!answered&&tcur>=sim.tQ-0.001) return;   // først svar på spørsmålet
  playing=!playing; lastTs=null; updPlay();
});
$('restart').addEventListener('click',()=>{auto=false;setScenario(curId);});
$('spd').addEventListener('change',e=>{speed=parseFloat(e.target.value);});
$('scrub').addEventListener('input',e=>{
  auto=false;
  playing=false; let t=e.target.value/1000*sc.T;
  if(mode==='quiz'&&!answered) t=Math.min(t,sim.tQ);
  tcur=t; updPlay(); draw(tcur);
});
cv.addEventListener('click',e=>{
  if(!(mode==='quiz'&&!answered&&tcur>=sim.tQ-0.001)) return;
  const r=cv.getBoundingClientRect(), mx=(e.clientX-r.left)/r.width*W, my=(e.clientY-r.top)/r.height*H;
  const i=Math.min(sim.N,Math.round(tcur/DT));
  let best=null, bd=1e9;
  sc.cars.forEach((c,k)=>{const p=carPose(k,i);const d=Math.hypot(sx(p.x)-mx,sy(p.y)-my);if(d<bd){bd=d;best=c.id;}});
  if(bd<70) answer(best);
});
root.querySelectorAll('#vpa-modes button').forEach(b=>b.addEventListener('click',()=>{auto=false;setMode(b.dataset.m);}));

function loop(ts){
  if(!onScreen){ if(!stopped) raf=requestAnimationFrame(loop); return; }
  if(playing){
    if(lastTs!==null) tcur=Math.min(sc.T,tcur+Math.min(0.1,(ts-lastTs)/1000)*speed);
    if(mode==='quiz'&&!answered&&tcur>=sim.tQ){ tcur=sim.tQ; playing=false; updPlay(); }
    if(tcur>=sc.T){ playing=false; updPlay(); }
    draw(tcur);
  }
  if(auto && mode==='watch' && !playing && tcur>=sc.T-DT){
    if(endTs===null) endTs=ts;
    else if(ts-endTs>AUTO_PAUSE_MS){ endTs=null; setScenario(ORDER[(ORDER.indexOf(curId)+1)%ORDER.length]); }
  } else endTs=null;
  lastTs=ts;
  if(!stopped) raf=requestAnimationFrame(loop);
}
mkStatic(); setScenario(curId);
raf=requestAnimationFrame(loop);
return ()=>{ stopped=true; cancelAnimationFrame(raf); if(io) io.disconnect(); };
}
