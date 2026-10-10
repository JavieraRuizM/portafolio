# Estado y pruebas — 10 de octubre de 2026

## Cambios aprobados

- Menú About en escritorio y móvil; ruta `/cv` conservada.
- Introducción reemplazada por los tres párrafos exactos entregados.
- Nombre de About en Semibold, en dos líneas.
- Cuatro títulos principales con idéntico tamaño y peso, tomando Docencia como referencia.
- Secciones principales sin líneas divisorias, con espacios consistentes; líneas internas preservadas.
- Docencia mantiene proporciones de columnas: cinco asignaturas encargadas y ocho ayudantías en desplegable inicialmente cerrado.
- Accesibilidad agregada a Memento y ambos artículos desde los datos centrales.
- Nueva atribución a Katherine Exss y Javiera Ruiz Mayer al final de ambos artículos, sin alterar los demás párrafos.
- Portada tipográfica repetida retirada del detalle de ambos artículos; mantenida en las tarjetas.
- Etiquetas alineadas a la derecha exclusivamente en la landing.

## Validaciones

Build de producción correcto y cuatro pruebas automatizadas aprobadas: estructura de diez proyectos, recursos disponibles, build portable y rutas/categorías sin enlaces anidados. Las pruebas comprueban también las trece asignaturas y el estado inicial accesible del desplegable.

Revisión visual en navegador integrado a 1440 × 1000 y 393 × 852: About sin desbordamientos, nombre con peso 600, títulos uniformes (52 px en escritorio y 32 px en móvil), columnas consistentes, intro de 16 px. Desplegable abre con Enter y clic y cierra con Espacio; muestra ocho ayudantías. Menú móvil About enlaza a `#/cv` y se cierra después de su transición.

Filtro Accesibilidad devuelve los tres proyectos previstos. Ambos artículos muestran cuatro párrafos y la atribución completa con código 044.756/2026; no tienen bloque `.pending` en el detalle. Landing comprobada con etiquetas a la derecha, paso circular primero → último por teclado y video en reproducción silenciada, loop y sin controles. Modal Contacto abre y cierra con Escape. Sin errores ni advertencias de consola en esta revisión.

La revisión previa de esta misma versión verificó diez fichas, portadas compartidas, videos de detalle, menú y modal con gestión de foco, tres columnas en escritorio, dos en tablet y una en móvil, preferencia de movimiento reducido con posters y carga bajo una subcarpeta de prueba. Se conserva el código de la galería, medios, footer y modal; los últimos ajustes no sustituyen esos componentes.

Las pruebas móviles usan viewport de navegador de escritorio, no hardware iOS/Android físico. No constituyen una auditoría formal de accesibilidad ni de todos los navegadores.

## Archivos modificados en la actualización puntual

- `src/App.tsx`
- `src/styles.css`
- `src/data/projects.ts`
- `src/data/cv.ts`
- `tests/assets.test.mjs`
- `tests/routes.test.mjs`
- `README.md`
- `docs/ESTADO-Y-PRUEBAS.md`
- `docs/verificacion-actualizacion-puntual.json`
- `dist/` regenerado y `capturas/about-final/` actualizado.

Para publicación se añadió `.github/workflows/pages.yml`. La especificación Markdown original y los recursos originales se conservan.

## Publicación

La autora autorizó expresamente GitHub Pages el 10 de octubre de 2026. La configuración está preparada; falta acceso autenticado a GitHub para completar la publicación. No se ha confirmado todavía una URL pública.
