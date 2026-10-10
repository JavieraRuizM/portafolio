import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';

test('Las categorías filtran correctamente y los enlaces de etiqueta no se anidan', async () => {
  const server = await createServer({server:{middlewareMode:true,ws:false,hmr:false},optimizeDeps:{noDiscovery:true,include:[]},appType:'custom',ssr:{resolve:{externalConditions:['node','module-sync']}}});
  try {
    const {default:App} = await server.ssrLoadModule('/src/App.tsx');
    const {categories,projects,categoryPath} = await server.ssrLoadModule('/src/data/projects.ts');
    for(const category of categories){
      const html=renderToStaticMarkup(React.createElement(MemoryRouter,{initialEntries:[categoryPath(category.title)]},React.createElement(App)));
      const expected=projects.filter(p=>p.categories.includes(category.title));
      assert.equal((html.match(/class="project-card /g)||[]).length,expected.length,category.title);
      for(const project of expected) assert.ok(html.includes(`data-project="${project.slug}"`));
      let open=false;
      for(const tag of html.matchAll(/<\/?a(?:\s[^>]*|)>/g)){
        if(tag[0].startsWith('</')){assert.ok(open);open=false;}
        else {assert.ok(!open,'No debe haber enlaces dentro de otros enlaces');open=true;}
      }
      assert.equal(open,false);
    }
    const catalog=renderToStaticMarkup(React.createElement(MemoryRouter,{initialEntries:['/proyectos']},React.createElement(App)));
    assert.equal((catalog.match(/class="project-card /g)||[]).length,9);
    assert.ok(!catalog.includes('data-project="publicacion-escalas-de-confort"'));
    const home=renderToStaticMarkup(React.createElement(MemoryRouter,{initialEntries:['/']},React.createElement(App)));
    assert.ok(!home.includes('data-project="publicacion-escalas-de-confort"'));
    assert.ok(catalog.includes('data-project="accessibility-subjective-thermal-comfort"'));
    assert.ok(home.includes('data-project="accessibility-subjective-thermal-comfort"'));
    const cv=renderToStaticMarkup(React.createElement(MemoryRouter,{initialEntries:['/cv']},React.createElement(App)));
    assert.match(cv,/<span class="name-line">Javiera<\/span><span class="name-line">Ruiz Mayer<\/span>/);
    assert.ok(cv.indexOf('cv-profession')>cv.indexOf('name-line'));
    assert.equal((cv.match(/class="course-year"/g)||[]).length,13);
    assert.match(cv, /aria-expanded="false" aria-controls="assistant-courses-panel"/);
    assert.match(cv, /id="assistant-courses-panel"[^>]*aria-hidden="true"[^>]*inert=""/);
    assert.equal((cv.match(/>About(?:<|$)/g)||[]).length,2);
    assert.ok(cv.includes('Tuxpan'));
    assert.ok(cv.includes('2023–2026'));
    assert.ok(!cv.includes('Antecedentes de formación por incorporar'));
    assert.ok(cv.includes('aria-haspopup="dialog"'));
    assert.ok(cv.includes('Javiera Ruiz Mayer 2026'));
    const detail=renderToStaticMarkup(React.createElement(MemoryRouter,{initialEntries:['/proyectos/web-artefactos-relacionales']},React.createElement(App)));
    assert.ok(!detail.includes('Proyecto 01 / 09'));
    assert.ok(!detail.includes('02 / 02'));
    assert.match(detail,/<h1[^>]*>Web Artefactos Relacionales<\/h1><span class="tags">/);
  } finally {await server.close();}
});
