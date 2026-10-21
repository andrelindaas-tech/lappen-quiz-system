// Bakkekontroll: node audit.cjs  → lister alt som flyter (>5 cm) eller er under bakken (<-3 cm)
const path=require('path'),{pathToFileURL}=require('url'),{chromium}=require('playwright'),fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage();
await p.goto(pathToFileURL(path.join(__dirname,'index.html')).href);await p.waitForFunction(()=>window.testReady||window.animationError,null,{timeout:120000});
const T=JSON.parse(fs.readFileSync(path.join(__dirname,'timing.json'))).duration;const bad=[];let n=0;
for(let t=.25;t<T;t+=.5){const r=await p.evaluate(t=>auditGround(t),t);n+=r.length;for(const x of r)if(x.under>.03||x.over>.05)bad.push({t:+t.toFixed(2),...x});}
console.log('kontrollert',n,'plasseringer; avvik:',bad.length);const g={};for(const x of bad){const k=x.name;(g[k]||(g[k]=[])).push(x.t+':'+(x.under>.03?'under '+x.under:'over '+x.over));}for(const k in g)console.log(k,g[k].length,g[k].slice(0,8).join(' '));await b.close();})();
