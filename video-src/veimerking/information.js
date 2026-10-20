// Ett fast informasjonsfelt nederst. Ett kort poeng om gangen, knyttet til
// setningsstartene i timing.json (sekunder fra starten av hvert opptak).
// Fortellerteksten (det som sies) står i fortellertekst.txt.
export const chapters = [
 {label:'01 · FARGER',points:[
  ['Veimerkingen viser','hvordan veien brukes'],
  ['Fargen forteller','hva merkingen betyr'],
  ['Gult skiller','motgående retninger'],
  ['Hvit oppmerking','har flere oppgaver'],
  ['Hvitt kan skille felt','i samme retning'],
  ['Kantlinjen markerer','kjørebanens ytterkant'],
  ['Utenfor kjørebanen:','veiskulder eller veikant'],
  ['Gangfelt er også','hvit oppmerking']]},
 {label:'02 · KJØREFELTLINJE',points:[
  ['Kjørefeltlinje'],
  ['Korte streker,','lange mellomrom'],
  ['Kan krysses for å skifte','felt eller kjøre forbi'],
  ['Bare når det er','trygt og lovlig']]},
 {label:'03 · VARSELLINJE',points:[
  ['Lange streker,','korte mellomrom'],
  ['Motsatt av','kjørefeltlinjen'],
  ['Gul: for kort sikt til','vanlig forbikjøring'],
  ['Hvit: fare ved','å skifte felt'],
  ['Brutt linje betyr ikke','at det er trygt']]},
 {label:'04 · SPERRELINJE',points:[
  ['Hvit sperrelinje mellom','felt i samme retning'],
  ['Ikke kjør på','eller over'],
  ['Dobbel gul','sperrelinje'],
  ['Begge retninger har','sperrelinje nærmest'],
  ['Samme forbud:','ikke på eller over']]},
 {label:'05 · KOMBINERTE LINJER',points:[
  ['Brutt og heltrukken','side om side'],
  ['Linjen nærmest','deg gjelder'],
  ['Brutt linje nærmest:','forbikjøring når trygt'],
  ['Møtende trafikk har','sperrelinjen nærmest'],
  ['Retur til høyre','side er tillatt']]},
 {label:'06 · SPERREOMRÅDE',points:[
  ['Sperreområde'],
  ['Skrå striper og','heltrukken kant'],
  ['Ikke kjør','inn i det'],
  ['Følg kjørefeltet','videre']]},
 {label:'07 · KJØREFELTPILER',points:[
  ['Pilene viser hvilket','felt du skal bruke'],
  ['Velg felt','i god tid'],
  ['Sperrelinje og pil:','kjør dit pilen viser']]},
 {label:'08 · SKILLELINJE',points:[
  ['Skiller vanlig felt','fra kollektivfelt'],
  ['Like lange streker','og mellomrom'],
  ['Skiltene viser hvem','som kan bruke feltet']]},
 {label:'09 · KANTLINJE',points:[
  ['Kantlinjen viser hvor','kjørebanen slutter'],
  ['Heltrukken kantlinje','er ikke sperrelinje'],
  ['Smal vei uten midtlinje:','brutt kantlinje'],
  ['Se på farge','og mønster'],
  ['Da forstår du hva','linjen betyr']]},
];

// Layout per format. Mindre tekst og lavere felt enn i kapittel 1-piloten.
export const layout={
 wide:{W:1920,H:1080,sceneH:850,pad:64,font:62,line:74,label:28,logo:28,labelY:46,firstY:118},
 mobile:{W:1080,H:1350,sceneH:1090,pad:56,font:52,line:64,label:26,logo:26,labelY:44,firstY:114},
};

export function information(ctx,L,timing,chapterIndex,speechTime,globalTime){
 const {W,H,sceneH,pad,font,line}=L,c=chapters[chapterIndex],starts=timing.chapters[chapterIndex].sentences;
 let k=0;for(let i=0;i<starts.length;i++)if(speechTime>=starts[i]-.15)k=i;
 const lines=c.points[Math.min(k,c.points.length-1)];
 ctx.save();ctx.fillStyle='#14363f';ctx.fillRect(0,sceneH,W,H-sceneH);
 ctx.fillStyle='#e6c65e';ctx.fillRect(pad,sceneH+L.labelY-L.label-8,40,4);
 ctx.textBaseline='alphabetic';ctx.textAlign='left';ctx.fillStyle='#a9c2c4';ctx.font=`600 ${L.label}px Arial`;
 ctx.fillText(c.label,pad,sceneH+L.labelY);
 ctx.textAlign='right';ctx.fillStyle='#dce8e7';ctx.font=`700 ${L.logo}px Arial`;ctx.fillText('teori-test.no',W-pad,sceneH+L.labelY);
 ctx.textAlign='left';ctx.fillStyle='#ffffff';ctx.font=`700 ${font}px Arial`;
 // Kort fade når et nytt poeng kommer, så teksten ikke «hopper».
 const since=speechTime-(starts[k]-.15);ctx.globalAlpha=Math.min(1,.35+since/.25);
 const bounds=lines.map((txt,i)=>{const y=sceneH+L.firstY+i*line,width=ctx.measureText(txt).width;ctx.fillText(txt,pad,y);return {text:txt,x:pad,y:y-font,width,height:font*1.25,fontSize:font};});
 ctx.globalAlpha=1;
 // Fremdrift for hele filmen, med kapittelmerker.
 const total=timing.duration,barY=H-16,barW=W-pad*2;
 ctx.fillStyle='#ffffff22';ctx.fillRect(pad,barY,barW,4);
 ctx.fillStyle='#e6c65e';ctx.fillRect(pad,barY,barW*Math.max(0,Math.min(1,globalTime/total)),4);
 ctx.fillStyle='#14363f';for(const ch of timing.chapters.slice(1))ctx.fillRect(pad+barW*ch.start/total-1,barY,3,4);
 ctx.restore();
 return {point:lines.join(' '),bounds,sceneHeight:sceneH,width:W,height:H};
}
