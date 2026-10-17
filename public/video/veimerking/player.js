// Innebygd avspiller for teori-test.no. Lydklokken styrer bildet, så pause/søk holder synk.
// Format velges etter bredden på rammen: under 600 px = mobil (4:5), ellers 16:9.
const el=id=>document.getElementById(id),voice=el('voice');
let raf=0,active=null,total=162,lastDraw=0;
const mmss=t=>Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');
function draw(t){
 lastDraw=performance.now();renderFrame(t);el('seek').value=t;el('time').textContent=mmss(t)+' / '+mmss(total);
 const c=String(frameInfo.endCard?chapterTimes.length:frameInfo.chapter);if(el('chapter').value!==c)el('chapter').value=c;
}
function format(){
 if(!window.animationReady)return;
 const wanted=innerWidth<600?'mobile':'wide';
 if(wanted!==active){setFilmFormat(wanted);active=wanted;draw(voice.currentTime);}
}
function tick(){draw(voice.currentTime);if(!voice.paused)raf=requestAnimationFrame(tick);}
async function play(){if(voice.currentTime>=total-.05)voice.currentTime=0;try{await voice.play();}catch(e){}}
function state(){const p=voice.paused;el('toggle').textContent=p?'Spill':'Pause';el('toggle').setAttribute('aria-label',p?'Spill av':'Pause');el('bigstart').hidden=!p||voice.currentTime>.1;}
voice.onplay=()=>{cancelAnimationFrame(raf);state();tick();};
voice.onpause=()=>{cancelAnimationFrame(raf);draw(voice.currentTime);state();};
voice.onended=()=>{draw(total);state();};
voice.ontimeupdate=()=>{if(!voice.paused&&performance.now()-lastDraw>300)draw(voice.currentTime);};
el('toggle').onclick=()=>voice.paused?play():voice.pause();
el('bigstart').onclick=play;
el('seek').oninput=()=>{voice.currentTime=Number(el('seek').value);draw(voice.currentTime);state();};
el('chapter').onchange=()=>{const c=chapterTimes[Number(el('chapter').value)-1];voice.currentTime=c.start;draw(c.start);state();};
addEventListener('resize',format);
(function ready(){
 if(window.animationReady){
  total=filmDuration;el('seek').max=total;
  chapterTimes.forEach(c=>el('chapter').append(new Option(c.chapter+' · '+c.title,c.chapter)));
  format();draw(0);['toggle','seek'].forEach(id=>el(id).disabled=false);el('bigstart').hidden=false;
 }else if(!window.animationError)requestAnimationFrame(ready);
})();
