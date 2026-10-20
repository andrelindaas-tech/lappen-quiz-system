// node export.cjs  -> to-biler-i-morket.mp4 (1920x1080, 30 fps, H.264, uten lyd)
const fs=require('fs'),path=require('path'),{pathToFileURL}=require('url'),{spawn}=require('child_process'),{once}=require('events'),{chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME,args:['--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{const p=await b.newPage({viewport:{width:1300,height:900}});const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.goto(pathToFileURL(path.join(__dirname,'index.html')).href+(process.argv.includes('--top')?'?cam=top':''));await p.waitForFunction(()=>window.testReady||window.animationError,{},{timeout:120000});
const e=await p.evaluate(()=>window.animationError);if(e)throw Error(e);
const top=process.argv.includes('--top');const out=path.join(__dirname,top?'to-biler-i-morket-ovenfra.mp4':'to-biler-i-morket.mp4');
const enc=spawn(process.env.FFMPEG||'ffmpeg',['-y','-f','image2pipe','-vcodec','mjpeg','-framerate','30','-i','pipe:0','-vf','scale=in_range=pc:out_range=tv:out_color_matrix=bt709','-color_range','tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709','-c:v','libx264','-preset','slow','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart',out],{stdio:['pipe','ignore','pipe']});
let log='';enc.stderr.on('data',x=>log=(log+x).slice(-6000));const done=new Promise((res,rej)=>enc.on('close',c=>c===0?res():rej(Error(log))));
const t0=Date.now();for(let n=0;n<900;n++){const jpg=Buffer.from(await p.evaluate(t=>{renderFrame(t);return document.getElementById('film').toDataURL('image/jpeg',.96).split(',')[1]},n/30),'base64');if(!enc.stdin.write(jpg))await once(enc.stdin,'drain');if(n%150===0)console.log(n,((Date.now()-t0)/1000).toFixed(0)+'s');}
enc.stdin.end();await done;if(errs.length)throw Error(errs.join('\n'));console.log('Ferdig',out);}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});
