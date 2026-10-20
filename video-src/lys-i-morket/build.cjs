const fs=require('node:fs'),path=require('node:path');
const root=__dirname;
fs.writeFileSync(path.join(root,'car-data.js'),'export const carData='+JSON.stringify(fs.readFileSync(path.join(root,'bil_lowpoly.glb')).toString('base64'))+';\n');
require('esbuild').buildSync({entryPoints:[path.join(root,'scene.js')],bundle:true,format:'iife',target:'es2020',outfile:path.join(root,'bundle.js'),nodePaths:require.resolve.paths('three'),minify:true,legalComments:'eof'});
console.log('Built offline Canvas player.');
