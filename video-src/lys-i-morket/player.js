// Avspilling uten lyd: en enkel klokke styrer renderFrame(t), så pause/søk/omspill er eksakt.
const el=id=>document.getElementById(id);let playing=false,t0=0,pos=0,raf=0;
const now=()=>playing?Math.min(30,pos+(performance.now()-t0)/1000):pos;
function draw(t){renderFrame(t);el('seek').value=t;el('time').textContent='0:'+String(Math.floor(t)).padStart(2,'0')+' / 0:30';}
function tick(){const t=now();draw(t);if(t>=30){playing=false;pos=30;state();return;}if(playing)raf=requestAnimationFrame(tick);}
function state(){el('start').disabled=playing;el('pause').disabled=!playing;}
function play(){if(pos>=30)pos=0;t0=performance.now();playing=true;state();tick();}
el('start').onclick=play;el('pause').onclick=()=>{pos=now();playing=false;cancelAnimationFrame(raf);draw(pos);state();};
el('replay').onclick=()=>{pos=0;cancelAnimationFrame(raf);play();};
el('seek').oninput=()=>{pos=Number(el('seek').value);if(playing)t0=performance.now();draw(pos);};
const media=matchMedia('(max-width:600px) and (orientation:portrait)');let fmt=null;
function format(){const v=el('format').value,w=v==='auto'?(media.matches?'mobile':'wide'):v;if(w!==fmt){setFilmFormat(w);fmt=w;document.body.classList.toggle('mobile',w==='mobile');draw(now());}}
{const q=new URLSearchParams(location.search).get('fmt');if(q)el('format').value=q;}
el('format').onchange=format;media.addEventListener('change',format);addEventListener('resize',()=>{if(window.animationReady)format();});
el('view').onchange=()=>{setView(el('view').value);draw(now());};
if(new URLSearchParams(location.search).get('cam')==='top')el('view').value='top';
(function ready(){if(window.animationReady){format();draw(0);['start','replay','seek'].forEach(i=>el(i).disabled=false);el('status').textContent='Klar.';window.testReady=true;}else if(window.animationError)el('status').textContent=window.animationError;else requestAnimationFrame(ready);})();
