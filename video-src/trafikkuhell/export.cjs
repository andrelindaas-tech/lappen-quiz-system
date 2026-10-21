// Kontroll og eksport for «Forbikjøring».  node export.cjs --stills [--only=2,4] | node export.cjs [--mobile]
// Miljø: CHROME (valgfri, standard /opt/pw-browsers/chromium), FFMPEG. NODE_PATH må peke på node_modules med playwright og pngjs.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {spawn}=require('node:child_process'),{once}=require('node:events'),{chromium}=require('playwright');
const {PNG}=require('pngjs');
const timing=JSON.parse(fs.readFileSync(path.join(__dirname,'timing.json'),'utf8'));
const mobile=process.argv.includes('--mobile'),stillsOnly=process.argv.includes('--stills'),mode=mobile?'mobile':'wide';
const FPS=30,TOTAL=timing.duration,FRAMES=Math.round(TOTAL*FPS);
function sameFrame(a,b){if(a.equals(b))return true;const x=PNG.sync.read(a),y=PNG.sync.read(b);if(x.width!==y.width||x.height!==y.height)return false;let changed=0;for(let i=0;i<x.data.length;i++){const d=Math.abs(x.data[i]-y.data[i]);if(d>2)return false;if(d)changed++;}return changed/(x.width*x.height)<.002;}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME||'/opt/pw-browsers/chromium',args:['--enable-unsafe-swiftshader','--use-angle=swiftshader','--ignore-gpu-blocklist','--autoplay-policy=no-user-gesture-required']});
 try{
  const page=await browser.newPage({viewport:{width:1360,height:1050}}),errors=[];
  page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.waitForFunction(()=>window.testReady||window.animationError,{},{timeout:180000});
  const err=await page.evaluate(()=>window.animationError);if(err)throw Error(err);
  const frame=async(t,format='jpeg')=>Buffer.from(await page.evaluate(({t,format})=>{renderFrame(t);return document.getElementById('film').toDataURL('image/'+format,.95).split(',')[1]},{t,format}),'base64');
  if(stillsOnly){
   const shotDir=path.join(__dirname,'kontrollbilder');fs.mkdirSync(shotDir,{recursive:true});
   const report={stills:[],speed:[]};
   const times=[];const only=(process.argv.find(x=>x.startsWith('--only='))||'').slice(7).split(',').filter(Boolean);
   timing.chapters.filter(c=>!only.length||only.includes(String(c.chapter))).forEach(c=>c.sentences.forEach((s,k)=>{const next=k+1<c.sentences.length?c.sentences[k+1]:c.audio;times.push({t:c.speech+(s+next)/2,name:`k${c.chapter}-s${k+1}`});}));
   times.push({t:TOTAL-.5,name:'slutt'});
   for(const format of (process.argv.includes('--skip-images')?[]:['wide','mobile'])){
    await page.evaluate(f=>setFilmFormat(f),format);
    for(const {t,name} of times){
     const png=await frame(t,'png');const info=await page.evaluate(()=>({layout:infoLayout,frame:frameInfo}));
     const L=info.layout;if(L.bounds.some(b=>b.x+b.width>L.width-40||b.y<L.sceneHeight||b.y+b.height>L.height-20))throw Error('Tekst utenfor feltet '+format+' '+name);
     if(info.frame.blueScreen){const [x,y]=info.frame.blueScreen;if(x<40||x>L.width-40||y<40||y>L.sceneHeight-20)report.stills.push({advarsel:'blå bil nær kanten',format,name,x:Math.round(x),y:Math.round(y)});}
     fs.writeFileSync(path.join(shotDir,`${format}-${name}.png`),png);
    }
   }
   // Samme bilde etter vilkårlig hopp (ingen akkumulert tilstand).
   await page.evaluate(()=>setFilmFormat('wide'));
   for(const t of [5,30,47,57,70,85,100]){const a=await frame(t,'png');await frame(t+23);const b=await frame(t,'png');if(!sameFrame(a,b))throw Error('Bildet endret seg etter hopp ved '+t);}
   // Fartsprofil for blå bil (m/s) per kapittel – ingen hopp inne i en situasjon.
   report.speed=await page.evaluate(chs=>{const out=[];for(const c of chs){let prev=null,vals=[];for(let t=c.start+.05;t<c.end-.05;t+=.5){renderFrame(t);const d=frameInfo.blueS,env=frameInfo.environment;if(prev&&d!=null&&prev.d!=null&&prev.env===env)vals.push(+((d-prev.d)/.5).toFixed(2));prev={d,env};}out.push({kapittel:c.chapter,min:Math.min(...vals),maks:Math.max(...vals)});}return out;},timing.chapters);
   // Avspiller: start, lydklokke, hopp, formatbytte, ingen vannrett rulling.
   await page.bringToFront();await page.evaluate(()=>{document.getElementById('bigstart').click();});await page.waitForTimeout(3000);
   let running;for(let k=0;k<4;k++){running=await page.evaluate(()=>({paused:document.getElementById('voice').paused,time:document.getElementById('voice').currentTime,frame:frameInfo.t}));if(running.frame>.3)break;await page.waitForTimeout(1500);}
   if(running.paused||running.time<.2||running.frame<.3||running.frame>running.time+.05||running.time-running.frame>2.5)throw Error('Lydklokken styrer ikke bildet '+JSON.stringify(running));
   await page.evaluate(()=>document.getElementById('voice').pause());
   await page.evaluate(()=>{const s=document.getElementById('seek');s.value=70;s.dispatchEvent(new Event('input'));});
   if(await page.evaluate(()=>Math.abs(frameInfo.t-70)>.05||frameInfo.chapter!==4))throw Error('Hopp feilet');
   for(const viewport of [{width:360,height:740},{width:390,height:844},{width:1280,height:800}]){
    await page.setViewportSize(viewport);await page.waitForTimeout(250);
    const m=await page.evaluate(()=>{const c=document.getElementById('film');return {rulling:document.documentElement.scrollWidth>innerWidth,format:filmFormat,tekstPx:+(infoLayout.bounds[0].fontSize*c.getBoundingClientRect().width/c.width).toFixed(1)};});
    if(m.rulling)throw Error('Vannrett rulling ved '+viewport.width);
    report.stills.push({viewport:viewport.width,...m});
    await page.screenshot({path:path.join(shotDir,'avspiller-'+viewport.width+'.png'),fullPage:true});
   }
   if(errors.length)throw Error(errors.join('\n'));
   fs.writeFileSync(path.join(__dirname,'verification.json'),JSON.stringify(report,null,1));
   console.log(JSON.stringify(report,null,1));return;
  }
  await page.evaluate(m=>setFilmFormat(m),mode);
  const output=path.join(__dirname,mobile?'forbikjoring-mobil.mp4':'forbikjoring-bredformat.mp4');
  const enc=spawn(process.env.FFMPEG||'ffmpeg',['-y','-f','image2pipe','-vcodec','mjpeg','-framerate',String(FPS),'-i','pipe:0','-i',path.join(__dirname,'fortelling.wav'),'-map','0:v:0','-map','1:a:0','-vf','scale=in_range=pc:out_range=tv:out_color_matrix=bt709','-color_range','tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709','-c:v','libx264','-preset','medium','-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-ar','48000','-t',String(TOTAL),'-movflags','+faststart',output],{stdio:['pipe','ignore','pipe']});
  let log='';enc.stderr.on('data',x=>log=(log+x).slice(-8000));enc.stdin.on('error',()=>{});
  const done=new Promise((res,rej)=>{enc.on('error',rej);enc.on('close',c=>c===0?res():rej(Error(log)));});
  const t0=Date.now();
  for(let n=0;n<FRAMES;n++){if(enc.exitCode!==null)throw Error(log);if(!enc.stdin.write(await frame(n/FPS)))await once(enc.stdin,'drain');if(n%300===0)console.log(mode+' '+n+'/'+FRAMES+' '+((Date.now()-t0)/1000).toFixed(0)+'s');}
  enc.stdin.end();await done;if(errors.length)throw Error(errors.join('\n'));console.log('Ferdig '+output);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
