import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import ts from 'typescript';
const code=ts.transpileModule(await readFile(new URL('../src/data/projects.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {projects}=await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const root=new URL('../',import.meta.url);
test('Los 10 proyectos tienen slugs únicos, orden estable y la selección de investigación prevista',()=>{
 assert.equal(projects.length,10);assert.equal(new Set(projects.map(p=>p.slug)).size,10);
 assert.deepEqual(projects.map(p=>p.order),[1,2,3,4,5,6,7,8,9,10]);
 assert.deepEqual(projects.filter(p=>p.categories.includes('Investigación')).map(p=>p.title),['Memento','Escalas de confort térmico accesibles: Revisión de seis casos','Accessibility of Subjective Thermal Comfort Assessment Instruments: A Literature Review']);
 assert.deepEqual(projects.filter(p=>p.categories.includes('Accesibilidad')).map(p=>p.slug),['memento','publicacion-escalas-de-confort','accessibility-subjective-thermal-comfort']);
 for (const p of projects.slice(8)) {assert.equal(p.description.split('\n\n').length,4);assert.ok(p.description.endsWith('Katherine Exss es la investigadora responsable del proyecto y Javiera Ruiz Mayer participa como coautora del artículo.'));assert.ok(p.description.includes('044.756/2026'));}
 assert.equal(projects[8].status,'pendiente');assert.equal(projects[8].cover,null);
});
test('Todos los medios, posters y documentos referenciados existen y tienen formato válido',async()=>{
 for(const p of projects){
  for(const m of p.media){
   for(const n of [720,1440,2200]){
    const b=await readFile(new URL(`public/media/${m.file}-${n}.webp`,root));assert.equal(b.toString('ascii',8,12),'WEBP');
   }
   if(m.type==='video'){const b=await readFile(new URL(`public/media/${m.file}.mp4`,root));assert.equal(b.toString('ascii',4,8),'ftyp');}
  }
  for(const d of p.documents||[]){const b=await readFile(new URL(`public/media/${d.file}`,root));assert.equal(b.toString('ascii',0,4),'%PDF');}
 }
});
test('El build es portable, incluye los medios y excluye originales y rutas del computador',async()=>{
 const index=await readFile(new URL('dist/index.html',root),'utf8');assert.match(index,/lang="es"/);assert.match(index,/\.\/assets\//);
 const files=await readdir(new URL('dist/media/',root));assert.equal(files.filter(f=>f.endsWith('.mp4')).length,6);assert.equal(files.filter(f=>f.endsWith('.pdf')).length,2);assert.ok(!files.some(f=>f.endsWith('.mov')));
 for(const file of await readdir(new URL('dist/assets/',root))){if(!/\.(js|css)$/.test(file))continue;const data=await readFile(new URL('dist/assets/'+file,root),'utf8');assert.ok(!data.includes('/Users/'));}
 await assert.rejects(stat(new URL('dist/originales',root)));
});
