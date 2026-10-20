const el=id=>document.getElementById(id),voice=el('voice');
let raf=0,activeFormat=null,total=160;
const media=matchMedia('(max-width:600px) and (orientation:portrait)');
const mmss=t=>Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');
function draw(t){
 renderFrame(t);el('seek').value=t;el('time').textContent=mmss(t)+' / '+mmss(total);
 const cur=frameInfo.chapter;document.querySelectorAll('#chapters button').forEach((b,i)=>b.classList.toggle('active',i+1===cur&&!frameInfo.endCard));
}
function format(){
 if(!window.animationReady)return;
 const selected=el('format').value,wanted=selected==='auto'?(media.matches?'mobile':'wide'):selected;
 if(wanted!==activeFormat){setFilmFormat(wanted);activeFormat=wanted;el('player').classList.toggle('mobile',wanted==='mobile');draw(voice.currentTime);}
}
function state(){el('start').disabled=!voice.paused;el('pause').disabled=voice.paused;}
function tick(){lastDraw=performance.now();draw(voice.currentTime);if(!voice.paused)raf=requestAnimationFrame(tick);}
async function play(){if(voice.currentTime>=total-.02)voice.currentTime=0;try{await voice.play();}catch(e){el('status').textContent='Kunne ikke spille lyd: '+e.message;}}
voice.onplay=()=>{cancelAnimationFrame(raf);state();tick();};
voice.onpause=()=>{cancelAnimationFrame(raf);draw(voice.currentTime);state();};
voice.onended=()=>{draw(total);state();};
// Reserve: tegn også ved timeupdate i tilfelle nettleseren struper requestAnimationFrame.
let lastDraw=0;const drawNow=t=>{lastDraw=performance.now();draw(t);};voice.ontimeupdate=()=>{if(!voice.paused&&performance.now()-lastDraw>300)drawNow(voice.currentTime);};voice.onseeked=()=>draw(voice.currentTime);
el('start').onclick=play;el('pause').onclick=()=>voice.pause();el('replay').onclick=()=>{voice.currentTime=0;play();};
el('seek').oninput=()=>{voice.currentTime=Number(el('seek').value);draw(voice.currentTime);};
el('format').onchange=format;media.addEventListener('change',format);addEventListener('resize',format);
(function ready(){
 if(window.animationReady){
  total=filmDuration;el('seek').max=total;
  chapterTimes.forEach(c=>{const b=document.createElement('button');b.textContent=c.chapter+' · '+c.title;b.onclick=()=>{voice.currentTime=c.start;draw(c.start);};el('chapters').append(b);});
  format();draw(0);['start','replay','seek'].forEach(id=>el(id).disabled=false);el('status').textContent='Klar. Trykk Start for å se og høre filmen.';window.testReady=true;
 }else if(window.animationError){el('status').textContent=window.animationError;}else requestAnimationFrame(ready);
})();
