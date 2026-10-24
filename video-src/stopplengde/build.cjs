const fs=require('node:fs'),path=require('node:path');const root=__dirname;
const b64=f=>fs.readFileSync(path.join(root,f)).toString('base64');
const fontRel=['../../public/fonts/ibm-plex-sans-latin-wght-normal.woff2','../public/fonts/ibm-plex-sans-latin-wght-normal.woff2'].find(f=>fs.existsSync(path.join(root,f)));
const assets={car:b64('bil_lowpoly.glb'),font:'data:font/woff2;base64,'+b64(fontRel)};
fs.writeFileSync(path.join(root,'assets-data.js'),'export const assets='+JSON.stringify(assets)+';\n');
require('esbuild').buildSync({entryPoints:[path.join(root,'scene.js')],bundle:true,format:'iife',target:'es2020',outfile:path.join(root,'bundle.js'),minify:true,legalComments:'eof'});
console.log('bygget');
