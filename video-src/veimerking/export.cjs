// Kontroll og eksport. Bruk:  node export.cjs --stills | node export.cjs [--mobile]
// Miljø: CHROME (Chromium/Chrome) og FFMPEG. NODE_PATH må peke på node_modules med playwright og pngjs.
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {spawn}=require('node:child_process'),{once}=require('node:events'),{chromium}=require('playwright');
const {PNG}=require('pngjs');
const timing=JSON.parse(fs.readFileSync(path.join(__dirname,'timing.json'),'utf8'));
const mobile=process.argv.includes('--mobile'),stillsOnly=process.argv.includes('--stills'),mode=mobile?'mobile':'wide';
const FPS=30,TOTAL=timing.duration,FRAMES=Math.round(TOTAL*FPS);
function sameFrame(a,b){if(a.equals(b))return true;const x=PNG.sync.read(a),y=PNG.sync.read(b);if(x.width!==y.width||x.height!==y.height)return false;let changed=0;for(let i=0;i<x.data.length;i++){const d=Math.abs(x.data[i]-y.data[i]);if(d>1)return false;if(d)changed++;}return changed/(x.width*x.height)<.001;}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME,args:['--enable-unsafe-swiftshader','--use-angle=swiftshader','--autoplay-policy=no-user-gesture-required']});
 try{
  const page=await browser.newPage({viewport:{width:1360,height:1050}}),errors=[];
  page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.waitForFunction(()=>window.testReady||window.animationError,{},{timeout:180000});
  const err=await page.evaluate(()=>window.animationError);if(err)throw Error(err);
  const frame=async(t,format='jpeg')=>Buffer.from(await page.evaluate(({t,format})=>{renderFrame(t);return document.getElementById('film').toDataURL('image/'+format,.95).split(',')[1]},{t,format}),'base64');
  if(stillsOnly){
   const shotDir=path.join(__dirname,'kontrollbilder');fs.mkdirSync(shotDir,{recursive:true});
   const report={geometry:await page.evaluate(()=>auditRoadGeometry()),stills:[],speed:[]};
   for(const g of Object.values(report.geometry))if(g.violations)throw Error('Terrain above road '+JSON.stringify(report.geometry));
   // Ett bilde midt i hver setning, begge formater.
   const times=[];const only=(process.argv.find(x=>x.startsWith('--only='))||'').slice(7).split(',').filter(Boolean);timing.chapters.filter(c=>!only.length||only.includes(String(c.chapter))).forEach(c=>c.sentences.forEach((s,k)=>{const next=k+1<c.sentences.length?c.sentences[k+1]:c.audio;times.push({t:c.speech+(s+next)/2,name:`k${c.chapter}-s${k+1}`});}));
   times.push({t:TOTAL-.5,name:'slutt'});
   for(const format of ['wide','mobile']){
    await page.selectOption('#format',{value:format});
    for(const {t,name} of times){
     const png=await frame(t,'png');const info=await page.evaluate(()=>({layout:infoLayout,frame:frameInfo}));
     if(!info.frame.endCard){
      if(info.layout.bounds.some(b=>b.x+b.width>info.layout.width-40||b.y<info.layout.sceneHeight||b.y+b.height>info.layout.height-20))throw Error('Text clipped '+format+' '+name);
      const [x,y]=info.frame.blueScreen;if(x<40||x>info.layout.width-40||y<40||y>info.layout.sceneHeight-20)report.stills.push({warning:'car near edge',format,name,x,y});
     }
     fs.writeFileSync(path.join(shotDir,`${format}-${name}.png`),png);
    }
   }
   // Reproduserbarhet etter vilkårlig søking.
   await page.selectOption('#format',{value:'wide'});
   for(const t of [5,47,90,121,150]){const a=await frame(t,'png');await frame(t+33);const b=await frame(t,'png');if(!sameFrame(a,b))throw Error('Frame changed after seek '+t);}
   // Fartsprofil: kjørt avstand per sekund for blå bil, per kapittel.
   const speeds=await page.evaluate(({chapters,dur})=>{const out=[];for(const c of chapters){let prev=null,vals=[];for(let t=c.start+.05;t<c.end-.05;t+=.25){renderFrame(t);const d=frameInfo.routeDistance;if(prev&&prev.env===frameInfo.environment)vals.push({t:+t.toFixed(2),v:+((d-prev.d)/.25).toFixed(2)});prev={d,env:frameInfo.environment};}out.push({chapter:c.chapter,min:Math.min(...vals.map(v=>v.v)),max:Math.max(...vals.map(v=>v.v)),samples:vals});}return out;},{chapters:timing.chapters,dur:TOTAL});
   report.speed=speeds.map(({chapter,min,max})=>({chapter,min,max}));
   // Spiller: start, pause, søk, formatbytte.
   await page.bringToFront();await page.evaluate(()=>play());await page.waitForTimeout(2500);const rafOk=await page.evaluate(()=>new Promise(r=>{let n=0;const f=()=>{if(++n>3)r(true);else requestAnimationFrame(f)};requestAnimationFrame(f);setTimeout(()=>r(false),5000)}));console.log('raf',rafOk);
   const running=await page.evaluate(()=>({paused:document.getElementById('voice').paused,time:document.getElementById('voice').currentTime,frame:frameInfo.t}));
   if(running.paused||running.time<.2||running.frame<.3||Math.abs(running.time-running.frame)>1)throw Error('Audio clock failed '+JSON.stringify(running));
   await page.evaluate(()=>voice.pause());
   await page.evaluate(()=>{const s=document.getElementById('seek');s.value=95;s.dispatchEvent(new Event('input'));});
   if(await page.evaluate(()=>Math.abs(frameInfo.t-95)>.05||frameInfo.chapter!==5))throw Error('Seek failed');
   await page.selectOption('#format',{value:'mobile'});if(await page.evaluate(()=>Math.abs(frameInfo.t-95)>.05))throw Error('Format change moved playhead');
   for(const viewport of [{width:390,height:844},{width:844,height:390},{width:1360,height:1050}]){
    await page.selectOption('#format',{value:'auto'});await page.setViewportSize(viewport);await page.waitForTimeout(200);
    const m=await page.evaluate(()=>{draw(50);const c=document.getElementById('film');return {overflow:document.documentElement.scrollWidth>innerWidth,mode:filmFormat,fontPx:+(infoLayout.bounds[0].fontSize*c.getBoundingClientRect().width/c.width).toFixed(1)};});
    if(m.overflow)throw Error('Horizontal overflow '+JSON.stringify(viewport));
    report.stills.push({viewport,...m});
    await page.screenshot({path:path.join(shotDir,'forhandsvisning-'+viewport.width+'.png'),fullPage:true});
   }
   if(errors.length)throw Error(errors.join('\n'));
   fs.writeFileSync(path.join(__dirname,'verification.json'),JSON.stringify(report,null,1));
   fs.writeFileSync(path.join(__dirname,'fartsprofil.json'),JSON.stringify(speeds,null,1));
   console.log(JSON.stringify(report.speed),JSON.stringify(report.stills.filter(s=>s.warning||s.viewport)));
   return;
  }
  await page.selectOption('#format',{value:mode});
  const output=path.join(__dirname,mobile?'veimerking-mobil.mp4':'veimerking-bredformat.mp4');
  const enc=spawn(process.env.FFMPEG||'ffmpeg',['-y','-f','image2pipe','-vcodec','mjpeg','-framerate',String(FPS),'-i','pipe:0','-i',path.join(__dirname,'fortelling.wav'),'-map','0:v:0','-map','1:a:0','-vf','scale=in_range=pc:out_range=tv:out_color_matrix=bt709','-color_range','tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709','-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-ar','48000','-t',String(TOTAL),'-movflags','+faststart',output],{stdio:['pipe','ignore','pipe']});
  let log='';enc.stderr.on('data',x=>log=(log+x).slice(-8000));enc.stdin.on('error',()=>{});
  const done=new Promise((res,rej)=>{enc.on('error',rej);enc.on('close',c=>c===0?res():rej(Error(log)));});
  const t0=Date.now();
  for(let n=0;n<FRAMES;n++){if(enc.exitCode!==null)throw Error(log);if(!enc.stdin.write(await frame(n/FPS)))await once(enc.stdin,'drain');if(n%300===0)console.log(mode+' '+n+'/'+FRAMES+' '+((Date.now()-t0)/1000).toFixed(0)+'s');}
  enc.stdin.end();await done;if(errors.length)throw Error(errors.join('\n'));console.log('Finished '+output);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
