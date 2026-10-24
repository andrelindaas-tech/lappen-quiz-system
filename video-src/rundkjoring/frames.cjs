// Tegn enkeltbilder fra filmen: node frames.cjs <mappe> <format> t1 t2 ...  (format: mobile|wide)
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
(async()=>{
 const [out,fmt,...ts]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});
 const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const p=await b.newPage({viewport:{width:1300,height:1400}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
 await p.waitForFunction(()=>window.testReady||window.animationError,null,{timeout:180000});
 const e=await p.evaluate(()=>window.animationError);if(e){console.log(e);process.exit(1);}
 await p.evaluate(f=>setFilmFormat(f),fmt);
 for(const t of ts){const r=await p.evaluate(t=>{const isShot=isNaN(Number(t));if(isShot)renderShot(t);else renderFrame(Number(t));return {url:document.getElementById('film').toDataURL('image/jpeg',.9),info:isShot?null:{ch:frameInfo.chapter,b:infoLayout.bounds.map(x=>Math.round(x.x+x.width)),blue:frameInfo.blue}}},t);
  fs.writeFileSync(path.join(out,`${fmt}-${String(t).padStart(6,'0')}.jpg`),Buffer.from(r.url.split(',')[1],'base64'));console.log(t,JSON.stringify(r.info));}
 if(errs.length)console.log('FEIL',errs.join('\n'));await b.close();
})();
