// node stills.cjs 4,16,27  -> kontrollbilder/t-<sek>.png
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),{pathToFileURL}=require('url');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME,args:['--enable-unsafe-swiftshader','--use-angle=swiftshader']});
const p=await b.newPage({viewport:{width:1300,height:900}});const errs=[];p.on('pageerror',e=>errs.push(String(e)));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto(pathToFileURL(path.join(__dirname,'index.html')).href+(process.argv[4]||''));await p.waitForFunction(()=>window.testReady||window.animationError,{},{timeout:120000});
const e=await p.evaluate(()=>window.animationError);if(e)throw Error(e);
const dir=path.join(__dirname,'kontrollbilder');fs.mkdirSync(dir,{recursive:true});
for(const t of (process.argv[2]||'4,16,27').split(',').map(Number)){const d=await p.evaluate(t=>{renderFrame(t);return [document.getElementById('film').toDataURL('image/png').split(',')[1],frameInfo]},t);
fs.writeFileSync(path.join(dir,(process.argv[3]||'t-')+t+'.png'),Buffer.from(d[0],'base64'));console.log(t,JSON.stringify(d[1]));}
if(errs.length)console.log('ERR',errs);await b.close();})().catch(e=>{console.error(e);process.exit(1)});
