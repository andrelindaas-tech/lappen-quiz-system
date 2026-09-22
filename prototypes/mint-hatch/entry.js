import {modes, usage} from './content.js';
if(new URLSearchParams(location.search).has('embed')){
 document.documentElement.classList.add('embedded');
 window.addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==parent||event.data?.type!=='car-lights-theme')return;
  if(event.data.theme==='dark'||event.data.theme==='light')document.documentElement.dataset.theme=event.data.theme;
 });
 new ResizeObserver(()=>parent.postMessage({type:'car-lights-height',height:Math.ceil(document.querySelector('main').getBoundingClientRect().height)},location.origin)).observe(document.querySelector('main'));
}
function fallback(){
 document.querySelector('#loading').textContent='3D-visningen kunne ikke startes. Du kan fortsatt lese om alle lysene nedenfor. Prøv å laste siden på nytt.';
 document.querySelectorAll('.stage button,.comparison button').forEach(b=>b.disabled=true);
 const buttons=document.querySelector('#modes');buttons.replaceChildren();
 for(const mode of modes){const b=document.createElement('button');b.textContent=mode[1];b.onclick=()=>{document.querySelector('#title').textContent=mode[1];document.querySelector('#description').textContent=mode[2];document.querySelector('#usage').textContent=usage[mode[0]];document.querySelector('#tip').textContent=mode[3];for(const child of buttons.children)child.setAttribute('aria-pressed',String(child===b));};buttons.append(b);}
 buttons.firstElementChild.click();document.querySelector('#light-status').textContent='3D utilgjengelig';
}
import('./main.js').catch(fallback);
