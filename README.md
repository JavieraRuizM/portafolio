# Portafolio Javiera Ruiz Mayer

Portafolio en React, TypeScript y Vite, con Work Sans local. Versión aprobada para publicación en el repositorio `portafolio` mediante GitHub Pages. La publicación aún requiere completar la conexión con GitHub.

## Ejecutar localmente

Requiere Node.js 20 o posterior; el flujo de publicación utiliza Node.js 22.

```sh
npm ci
npm run dev
```

Para revisar el resultado de producción:

```sh
npm run build
npm test
npm run preview
```

Vite indica la URL local; normalmente desarrollo usa http://127.0.0.1:5173 y preview http://127.0.0.1:4173. Mantener el servidor abierto. No abrir el HTML mediante doble clic.

## Contenido y edición

- `src/data/projects.ts`: fuente única de los diez proyectos, categorías, textos y medios.
- `src/data/cv.ts`: introducción de About, contactos, experiencia, docencia y formación.
- `src/App.tsx`: rutas y componentes; About conserva la ruta `#/cv`.
- `src/styles.css`: estilos responsive, movimiento reducido y ajustes locales.
- `public/media/`: imágenes WebP, videos MP4 y documentos optimizados.
- `originales/`: recursos originales preservados, excluidos de Git y del sitio publicado.

La landing y el catálogo general muestran nueve proyectos. Escalas de confort térmico accesibles se mantiene en Investigación, sus categorías y su detalle. Investigación contiene tres proyectos. Accesibilidad se agrega a Memento y ambos artículos.

Las tarjetas de los artículos mantienen sus portadas tipográficas; las páginas individuales muestran sus textos sin repetir la portada. Los materiales gráficos definitivos de estos artículos siguen pendientes y pueden añadirse en los datos centralizados.

## Especificación y revisión

`docs/Portafolio_Javiera_Ruiz_Mayer_Work_Local_GitHub_Pages.md` conserva la especificación original. Las indicaciones posteriores de la autora tienen prioridad. Ver `docs/ESTADO-Y-PRUEBAS.md` para cambios, pruebas y archivos modificados.

Las capturas de esta entrega están en `capturas/about-final/`. Las otras carpetas de capturas corresponden a revisiones anteriores.

## GitHub Pages

Repositorio previsto: `portafolio`, rama `main`. En Settings → Pages, seleccionar GitHub Actions. `.github/workflows/pages.yml` instala dependencias, compila, ejecuta las pruebas y publica únicamente `dist/`. Los recursos usan base relativa y rutas con hash para funcionar bajo `/portafolio/`.

El flujo se ejecuta al subir cambios a `main` o manualmente. El ZIP local también conserva originales y capturas; no deben subirse al sitio público. No contiene credenciales.
