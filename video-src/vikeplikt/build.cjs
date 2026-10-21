const fs=require('node:fs'),path=require('node:path');const root=__dirname;
const b64=f=>fs.readFileSync(path.join(root,f)).toString('base64');
const signs={};for(const k of ['s202','s212','s214','s548','s50','s70','s512','s552'])signs[k]='data:image/png;base64,'+b64('assets/'+k+'.png');
const assets={car:b64('bil_lowpoly.glb'),person:b64('person.glb'),bus:b64('buss.glb'),bike:b64('sykkel.glb'),font:'data:font/woff2;base64,'+b64('../../public/fonts/ibm-plex-sans-latin-wght-normal.woff2'),signs};
fs.writeFileSync(path.join(root,'assets-data.js'),'export const assets='+JSON.stringify(assets)+';\n');
require('esbuild').buildSync({entryPoints:[path.join(root,'scene.js')],bundle:true,format:'iife',target:'es2020',outfile:path.join(root,'bundle.js'),minify:true,legalComments:'eof'});
console.log('bygget');
