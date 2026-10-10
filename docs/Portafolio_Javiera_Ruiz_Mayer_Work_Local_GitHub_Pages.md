# Prompt maestro para ChatGPT Work

## Portafolio Javiera Ruiz Mayer — desarrollo local primero; GitHub Pages solo con autorización

> **Instrucción de uso:** adjuntar a ChatGPT Work este documento, **`Proyectos Portafolio.zip`** y **`referencia diseño.mp4`**. Los nombres de archivos pueden contener tildes o Unicode descompuesto. Si Work ya puede acceder a los adjuntos de la conversación, reutilizarlos. **Este encargo autoriza únicamente la ETAPA 1 (desarrollo local y revisión). La ETAPA 2 (publicación exclusiva por GitHub Pages) requiere una nueva autorización explícita de la autora después de revisar el resultado local.**

---

## 0. Condición prioritaria e innegociable: dos etapas con aprobación humana

**No publiques el sitio al comenzar ni cuando termines de programarlo.** El proceso se divide en dos etapas:

- **ETAPA 1 — AHORA, autorizada:** revisar adjuntos, diseñar, desarrollar, optimizar medios, generar código completo, ejecutar el servidor de desarrollo local, ejecutar build de producción, probar la versión local en navegador, corregir errores y entregar un proyecto **descargable, reproducible y listo para revisar**. Preparar la configuración para GitHub Pages **en archivos locales**, sin tocar repositorios remotos.
- **PUNTO DE CONTROL OBLIGATORIO — detenerse y esperar:** mostrar el sitio **en vista previa local/entorno de trabajo** si está disponible, capturas de escritorio y móvil, instrucciones `npm install`, `npm run dev`, `npm run build`, `npm run preview`, carpeta o ZIP con fuentes, README y checklist de pruebas. Explicar brevemente qué falta o se dejó provisional. **Preguntar: «¿Autorizas que publique esta versión en GitHub Pages?»** No asumir que el encargo original constituye esa autorización.
- **ETAPA 2 — SOLO si yo respondo afirmativamente a esa pregunta en un turno posterior:** conectar o usar GitHub con mi permiso, confirmar cuenta, propietario y repositorio de destino, subir el código, configurar GitHub Pages, desplegar, esperar el resultado y comprobar la URL pública. **GitHub Pages es el único destino autorizado**, no Vercel, Netlify ni hosting alternativo.

**Antes de la autorización no puedes crear repositorios remotos, hacer `git push`, subir archivos a GitHub, activar GitHub Pages, disparar GitHub Actions de despliegue ni exponer una URL pública mediante un servicio externo.** Puedes preparar Git, scripts y workflows **localmente**. Si Work ejecuta el sitio en su propio computador remoto, entiende «local» como ese entorno de desarrollo más una copia descargable que yo pueda ejecutar en mi Mac; no afirmes que corre en mi computador si no se ha instalado allí. Si no puedes facilitar una vista previa local en directo, entrega capturas verificables y el proyecto portable.

**Si dejo de responder, el resultado debe quedar terminado en ETAPA 1, sin ninguna publicación.**

---

## 1. Rol, objetivo y forma de trabajo

Actúa como un equipo senior de **diseño de interacción, diseño visual y desarrollo frontend**. Quiero que **dejes hoy el portafolio completamente implementado, ejecutable y validado de forma local**, no solo un mockup o un plan. Debes **inspeccionar los insumos, construir el sitio, probarlo, corregirlo y dejar preparada la configuración para GitHub Pages**. Publicar está prohibido hasta que yo autorice expresamente la etapa posterior.

**Título exacto del sitio:** `Portafolio Javiera Ruiz Mayer`.

**Idioma de toda la interfaz:** español.

**Identidad:** minimalista, editorial, precisa, contemporánea; el protagonismo pertenece a los proyectos, sus imágenes y sus videos. **No añadas slogans, subtítulos pomposos ni textos de marketing**. Evita el aspecto de plantilla genérica de UX/UI.

Toma el video de referencia como pauta prioritaria para el **comportamiento de la landing horizontal**, los espacios en blanco, la escala y sucesión de las piezas, y la discreción de la interfaz. **No copies marcas, nombres de proyectos, identidades ni imágenes de terceros visibles en la referencia.** Adapta el lenguaje visual al contenido de Javiera.

### Prioridades, en orden
1. Que las 4 páginas principales y las páginas individuales de proyecto existan, se naveguen y funcionen sin errores.
2. Fidelidad a la composición y lógica de scroll horizontal del video de referencia.
3. Uso correcto, optimizado y elegante de **los medios reales entregados**, con portadas visibles.
4. Tipografía, jerarquía y detalles visuales refinados; responsive y accesibilidad.
5. Microinteracciones cuidadas, sin comprometer velocidad ni usabilidad.
6. Build de producción comprobado, vista previa local revisable, proyecto portable y configuración preparada para GitHub Pages (sin publicar).

**Procede autónomamente con decisiones menores durante la ETAPA 1.** Solicita mi intervención únicamente si no puedes acceder a un archivo indispensable o si hace falta una decisión realmente bloqueante. **No me pidas acceso a GitHub durante la ETAPA 1**; eso corresponde a la etapa autorizada posteriormente. Si los recursos o el tiempo son limitados, prioriza una versión **local, funcional y revisable** antes que microinteracciones secundarias. No sustituyas trabajo de implementación por una descripción de lo que harías.

## 2. Insumos verificados e inventario

El ZIP contiene **8 carpetas de proyectos**, con **10 imágenes (PNG/JPG/WebP), 6 videos `.mov` y 2 PDFs**. El ZIP también incluye carpetas `__MACOSX`, `.DS_Store` y archivos de recursos `._*`; **ignóralos**. Los videos originales suman muchos MB y tienen resolución alta: **no usar `.mov` sin optimizar en producción**.

**Importante:** el proyecto `Publicación Escalas de Confort` **no tiene carpeta ni medios en el ZIP**, pero **sí debe aparecer** en la navegación y en la lista de investigación como proyecto pendiente, con un tratamiento editorial sobrio, sin imagen inventada.

**Correspondencias entre nombres de presentación y carpetas del ZIP** (no crear proyectos duplicados):

| Orden | Nombre exacto visible | Categorías visibles | Carpeta / medios disponibles | Recurso principal sugerido |
|---|---|---|---|---|
| 01 | Web Artefactos Relacionales | Desarrollo Web | `Web Artefactos Relacionales/` · `video 1 artefactos.mov`, `video 2 artefactos.mov` | Primer video; poster extraído de fotograma |
| 02 | Exposición IA e[ad] | Diseño de Información | `Exposición IA e[ad]/` · `Expo IA 1.webp`, `Expo IA 2.png`, `Expo IA 3.png`, `Expo IA 4.png`, `Expo IA 5.png`, `Expo IA 6.png` | `Expo IA 1.webp` |
| 03 | Visualización Interactiva IA e[ad] | Diseño de Información · Generativo | `Visualización Interactiva IA e[ad]/` · `Visualización digital.mov` | Video con poster de fotograma |
| 04 | Memento | Diseño UX/UI · Investigación | `Memento/` · `Imagen Principal.png`, `Imagen 2.jpg`, `Imagen 3.jpg`, `Arquitectura de Informaciom.pdf` | `Imagen Principal.png` |
| 05 | Web App Libu | Diseño UX/UI | Carpeta real `Libu/` · `Imagen principal.png`, `Mapa Navegacion LIBU .pdf` | `Imagen principal.png` |
| 06 | OI Salud | Diseño UX/UI | Carpeta real `OL Salud/` · `OL 1.mov` | Video con poster de fotograma |
| 07 | Precotizados | Diseño UX/UI | `Precotizados/` · `Precotizados 1.mov` | Video con poster de fotograma |
| 08 | Exploraciones Visuales Generativas | Generativo | `Exploraciones Visuales Generativas/` · `Touch Designer 1.mov` | Video con poster de fotograma |
| 09 | Publicación Escalas de Confort | Investigación | **Sin carpeta, sin multimedia** | Placeholder tipográfico discreto |

**Normalización de nombres:** en el ZIP las carpetas `Exposición` y `Visualización` pueden leerse con caracteres combinados o mojibake (`Exposicio╠ün`, `Visualizacio╠ün`). Usa una asociación tolerante a tildes, espacios y variantes Unicode, **sin alterar los nombres visibles**. `OI Salud` es el nombre visible especificado por la autora, aunque la carpeta dice `OL Salud`. `Web App Libu` es el nombre visible, aunque la carpeta dice `Libu`.

El material de los PDFs **sirve como recurso de referencia/documentación** de cada proyecto. No conviertas automáticamente todas las páginas PDF en héroes ni obligues a insertar un visor incrustado; si es útil, ofrece un enlace discreto para consultarlos y confirma que funciona.

## 3. Arquitectura y rutas

Implementa la siguiente estructura de **rutas lógicas** (en desarrollo local, y en GitHub Pages cuando se autorice), con navegación interna, botón atrás funcional y transiciones que no rompan el historial. **GitHub Pages no ofrece rewrites SPA nativos; ver sección 9 para compatibilidad de rutas y base path:**

- `/` — **Inicio**: landing con galería horizontal de los 9 proyectos en el orden anterior.
- `/proyectos` — **Proyectos**: catálogo con los mismos 9 proyectos en cuadrícula de **3 columnas en escritorio**, 2 en tablet y 1 en móvil. Mantener el orden de la tabla. No excluir el proyecto sin imágenes.
- `/investigacion` — **Investigación**: misma gramática visual de tarjetas/cuadrícula; **mostrar exactamente Memento y Publicación Escalas de Confort**, ya que ambos tienen la etiqueta Investigación.
- `/cv` — **CV**: presentación personal, experiencia profesional, **docencia destacada**, formación y un espacio para investigación/publicaciones. Los detalles aún no aportados deben poder reemplazarse fácilmente sin tocar componentes.
- `/proyectos/:slug` — **Página individual** para cada uno de los 9 proyectos: título, categorías, breve introducción, medios proporcionados ordenados y navegación al proyecto anterior/siguiente. Cada URL debe funcionar desde el catálogo y desde la landing. Para el proyecto sin medios, mostrar «Contenido visual por incorporar» de forma elegante; no producir una página rota.

Usa una **fuente de datos central** para los 9 proyectos (por ejemplo `src/data/projects.ts` o JSON), con título, slug, categorías, descripción provisional, portada, listado de medios, estado de contenido y orden. La galería, la grilla, la página de investigación y las páginas detalle deben leer **la misma fuente de datos**, sin copias difíciles de mantener. Mantén los textos editables en un lugar evidente.

### Menú principal

Una **cápsula negra flotante y fija**, centrada en la parte inferior, con 4 accesos: `Inicio`, `Proyectos`, `Investigación`, `CV`. Inspirarse en la presencia discreta de la navegación inferior del video; debe mantenerse legible y no tapar información en móvil. Estado activo sutil y animado. En la esquina superior izquierda ubicar el nombre del sitio de manera contenida: **`Portafolio Javiera Ruiz Mayer`**, sin gran hero con eslogan.

## 4. Diseño visual

- **Fondo:** blanco cálido casi neutro `#F7F7F5` (puedes ajustar mínimamente a la referencia). Alternativa puntual blanco `#FFFFFF`.
- **Texto, líneas prioritarias y botones:** `#111111` / negro suave.
- **Bordes y divisores:** `#DADAD7`, grises suaves.
- **Fuente:** **Work Sans**, preferentemente vía fuente web optimizada. Pesos 400, 500 y 600, evitando proliferación de estilos.
- **Jerarquía:** enfoque editorial con pocos tamaños, espacio en blanco generoso, etiquetas pequeñas, títulos precisos. Sin sombras grandes, fondos de colores gratuitos, neumorfismo, degradados llamativos ni elementos decorativos ajenos al material original.
- **Botones y etiquetas:** discretos, negros/blancos, píldoras simples o tipografía alineada, con estados hover/focus consistentes.
- **Imágenes:** no aplicar un recorte arbitrario que destruya interfaces, infografías o diagramas; usar contenedores proporcionales y `object-fit: contain` cuando corresponda. Las obras deben ser protagonistas.
- **Responsive real:** probar anchos aproximados de 375, 768 y 1440 px. Conservar elegancia en todos ellos.

## 5. Landing horizontal — requisito distintivo

Debe ser una **galería horizontal a altura de viewport**, reconociblemente cercana a la experiencia del video entregado: fondo claro, proyectos alineados horizontalmente, un proyecto principal más visible al centro y partes de proyectos vecinos en los extremos. Evitar un slider genérico de ecommerce.

Cada tarjeta integra: **medio visual (imagen o video), título exacto, etiquetas de categorías y número pequeño opcional**. El texto puede situarse cerca de la pieza según la referencia, en vez de superponerse si eso mejora la legibilidad. La composición general, el ritmo y el espacio entre piezas deben sentirse diseñados, no como una fila rígida de tarjetas idénticas con bordes.

### Entrada y desplazamiento

- En escritorio, la **rueda vertical del mouse** debe poder avanzar horizontalmente **solo cuando el usuario esté en la landing**, sin bloquear la navegación global ni producir saltos bruscos.
- Soportar scroll horizontal nativo de trackpad y **arrastre táctil/swipe** en móvil. Si implementas drag de mouse, distinguir drag de click, sin abrir accidentalmente el proyecto.
- Implementar `scroll-snap` o sistema equivalente robusto, con una **inercia delicada**; sin scroll-jacking agresivo y sin librerías pesadas innecesarias.
- Proyecto enfocado con ligera transición de escala/opacidad; tarjetas vecinas visibles, nunca invisibilizar información clave.
- Permitir **teclas de flecha izquierda/derecha** cuando la galería tenga foco y tabulación de todas las tarjetas.
- Contador `01 / 09` o línea de progreso fina y discreta, actualizada correctamente.
- Cada tarjeta abre su ruta individual.

### Videos e imágenes en portada

- Para proyectos con `.mov`, convertir a **MP4 H.264 comprimido, compatible con navegadores**, sin audio en las versiones de presentación si el audio no es necesario; mantener los originales sin modificar en los archivos fuente, no publicarlos indiscriminadamente. Opcional: WebM solo si mejora el resultado y no retrasa la publicación.
- Extraer **poster real** (fotograma claro y representativo) de cada video, sin generar material ficticio. Optimizar posters a WebP/JPG.
- Autoplay **muted + loop + playsInline** únicamente en el **video visible/enfocado** de la landing, si el navegador lo permite. Pausar el resto para no saturar CPU, red o memoria.
- Priorizar posters estáticos en redes lentas, `prefers-reduced-motion` y condiciones de ahorro de datos.
- Mostrar posters inmediatos y evitar tarjetas vacías o negras mientras carga el video.
- Para tarjetas de imagen, aprovechar el medio entregado sin inventar variantes.

## 6. Microinteracciones

Implementa estas mejoras de forma subordinada al contenido:

1. **Enfoque e inercia:** cambio suave de protagonismo de una tarjeta a otra, asociado al scroll.
2. **Cursor contextual en escritorio:** indicador pequeño «Ver proyecto» al hover de cada medio, sin entorpecer el click ni tapar su contenido; oculto en dispositivos táctiles.
3. **Indicador de progreso:** posición real dentro de los nueve proyectos, con animación muy ligera.
4. **Transición entre tarjeta y página individual:** si es viable, continuidad visual del medio mediante view transitions o técnica equivalente; si compromete compatibilidad, usar fade breve y limpio. No sacrificar navegación por este efecto.
5. **Cápsula inferior:** transición pequeña del estado seleccionado y hover/focus finos.
6. **Entrada de elementos:** aparición contenida en páginas de grilla y CV, nunca secuencias largas ni bloqueos que impidan leer o interactuar.

Respetar `prefers-reduced-motion: reduce`: transiciones desactivadas o reducidas, video sin reproducción automática y navegación plenamente operativa. Evitar efectos parallax y scroll complejos sin beneficio claro.

## 7. Proyectos individuales y descripciones provisionales

Cada detalle debe incluir:

- Cabecera editorial con nombre, categorías y descripción breve (1–2 párrafos como máximo en la primera versión).
- Medio principal bien proporcionado y galería de los medios de la carpeta respectiva.
- Si hay dos videos, incluir ambos en la ficha; si hay varias imágenes, mostrarlas de forma clara, con ritmo y espacios generosos.
- Si hay PDFs, enlace funcional secundario de documentación, con una etiqueta como `Ver arquitectura de información` o `Ver mapa de navegación`.
- Acceso al siguiente y anterior proyecto; navegación superior y menú principal consistente.
- Una estructura adaptada a la diversidad de proyectos, sin exigir las secciones «problema, proceso, solución» ni adjudicar métricas inexistentes.

**Textos de trabajo, expresamente provisionales** (se debe poder modificar cada uno en un archivo de datos, sin intervención de componentes):

**01 · Web Artefactos Relacionales.** «Exploración de una experiencia web interactiva en la que el recorrido digital se construye mediante imágenes, movimiento y relaciones entre elementos visuales. El proyecto investiga otras formas de navegar y descubrir contenido en pantalla.»

**02 · Exposición IA e[ad].** «Propuesta de diseño de información para una exposición sobre inteligencia artificial en el contexto de la e[ad]. Reúne piezas gráficas y visualizaciones que organizan datos y contenidos para su lectura en un espacio expositivo.»

**03 · Visualización Interactiva IA e[ad].** «Visualización digital interactiva que utiliza agrupaciones de partículas y recursos generativos para explorar información vinculada al uso de inteligencia artificial en la comunidad académica.»

**04 · Memento.** «Propuesta de experiencia móvil dedicada a explorar, registrar y compartir recuerdos asociados a lugares. Su interfaz articula memoria personal, recorridos y recursos de realidad aumentada.»

**05 · Web App Libu.** «Diseño de una experiencia digital para Libu, con una interfaz móvil enfocada en la organización y exploración de servicios, compras y beneficios de cashback.»

**06 · OI Salud.** «Diseño de interfaz para explorar y gestionar servicios vinculados a seguros de salud desde un entorno digital. La propuesta pone atención en la claridad de los flujos y la organización de la información.»

**07 · Precotizados.** «Propuesta de interfaz digital para presentar ofertas y cotizaciones personalizadas. El proyecto explora cómo comunicar información financiera y acompañar la toma de decisiones mediante flujos legibles.»

**08 · Exploraciones Visuales Generativas.** «Serie de experimentaciones visuales realizadas con TouchDesigner. A través de partículas, variaciones de forma y movimiento, se exploran posibilidades compositivas de los sistemas generativos en tiempo real.»

**09 · Publicación Escalas de Confort.** «Investigación sobre instrumentos de evaluación subjetiva del confort térmico y las posibilidades de hacerlos más accesibles. La publicación revisa adaptaciones de escalas y cuestionarios para diferentes perfiles de participantes.» **Sin inventar imágenes ni afirmar detalles bibliográficos de una publicación definitiva.**

**Regla de veracidad:** estas descripciones son borradores basados en los nombres y materiales visibles. No inventes clientes, encargos, fechas, roles, resultados, herramientas, publicaciones efectivas, coautorías ni cifras si no están verificadas en los archivos o proporcionadas por mí. No atribuyas como producto implementado lo que solo se muestra como prototipo. Puedes mejorar redacción, pero deja el carácter preliminar claramente documentado en el archivo de contenido o en un README; no agregues «texto provisional» repetidamente en la interfaz pública si perjudica la presentación.

## 8. Página CV — contenido editable, sin currículum ficticio

### Propuesta de apertura

**Javiera Ruiz Mayer**

«Soy diseñadora y mi trabajo se desarrolla entre el diseño de interacción, la creación de experiencias digitales y la investigación. Me interesa explorar cómo el diseño y la tecnología pueden proponer nuevas formas de relacionarnos con la información, los espacios y otras personas. Complemento mi práctica proyectual con la docencia universitaria y la experimentación visual.»

### Estructura

1. **Perfil**: título, descripción y campos de contacto **solo cuando haya datos reales** (no inventar correo, teléfono, LinkedIn, Instagram ni URL).
2. **Experiencia profesional**: componente flexible para organización, cargo, fechas, resumen; si no hay información validada, mostrar un texto neutral o marcadores controlados por datos, sin empresas/cargos ficticios.
3. **Docencia**: sección destacada, preparada para asignaturas, instituciones, responsabilidades y periodos, **sin fechas o nombres de cursos inventados**. Puede usarse el encabezado y una descripción general provisional de su práctica docente.
4. **Formación**: estructura para grado, universidad, años, programas; si faltan datos, no imprimir credenciales falsas.
5. **Investigación / publicaciones**: sección breve vinculada a proyectos pertinentes, sin afirmar publicación formal cuando aún no ha sido confirmada.

La página debe verse terminada visualmente incluso con información parcial. Los campos vacíos no deben renderizar guiones, «undefined» ni texto `Lorem ipsum`. Documenta exactamente dónde sustituir el contenido una vez reciba el CV real.

## 9. Tecnología e implementación

**Preferencia técnica:** React + Vite + TypeScript + CSS bien organizado (o equivalente ligero si justificas un beneficio claro). Puedes usar una librería de animación pequeña únicamente donde sea realmente necesaria. Priorizo mantenibilidad, fluidez, accesibilidad y tiempo de entrega. Evitar dependencias innecesarias, frameworks de efectos pesados y plantillas sobrecargadas.

Implementar:

- Componentes reutilizables: `SiteHeader`, `FloatingNav`, `ProjectCard`, `HorizontalGallery`, `ProjectGrid`, `ProjectDetail`, `MediaDisplay`, `ProjectProgress`, `CVSection`.
- Contenido centralizado de proyectos y CV, nombres canónicos, slugs estables y asociaciones a archivos.
- Manejo robusto de rutas, acceso directo por URL y vuelta atrás.
- Recursos servidos localmente por la web; no depender de rutas a mi computador para que funcione después del despliegue.
- Compresión/resoluciones adecuadas: imágenes responsive cuando convenga y videos web optimizados. No bloquear primera pintura con toda la galería.
- `alt` significativo en imágenes; para videos, descripción accesible o etiqueta contextual.
- Foco visible, controles utilizables con teclado, contraste, botones de al menos ~44 px en móvil cuando sea factible.
- Evitar animaciones que den náuseas o desplacen elementos mientras se lee.
- Títulos de página, descripción SEO sobria, idioma HTML `es`, favicon simple **solo si puede realizarse sin inventar un símbolo de marca**.
- **Compatibilidad real con GitHub Pages:** no depender de rewrites de servidor que GitHub Pages no proporciona. Preferir una estrategia que permita navegar y recargar sin errores: por ejemplo `HashRouter` (URLs `/#/proyectos` o `/nombre-repo/#/proyectos/...`) o una solución de rutas limpias mediante generación estática/pre-render por ruta o fallback de `404.html` correctamente probado. **No afirmar que existe un rewrite nativo de GitHub Pages.** Si se usa HashRouter, las rutas enumeradas en sección 3 son rutas lógicas y el hash visible es aceptable.
- **Base path del repositorio:** parametrizar Vite (`base`), referencias a imágenes, vídeos, PDFs y router para admitir tanto el sitio de usuario `https://usuario.github.io/` como el sitio de proyecto `https://usuario.github.io/nombre-repo/`. No fijar la cuenta ni el nombre del repositorio sin haberlos confirmado. Documentar cómo establecerlos **solo al llegar a ETAPA 2**.
- **Preparación sin publicación:** dejar opcionalmente `.github/workflows/deploy.yml`, script de build y guía de GitHub Pages en el proyecto **local**, pero no subirlos ni ejecutar despliegues. Tener en cuenta que un futuro push del workflow a un repositorio con Pages habilitado puede desencadenar publicación: hacerlo exclusivamente tras mi autorización.

## 10. Pruebas obligatorias para entregar la versión local

No termines al ejecutar `npm run dev`. Verifica el sitio en navegador real, ejecuta compilación de producción sin errores y prueba también con `npm run preview`. Estas comprobaciones son parte de la **ETAPA 1** y **no autorizan el despliegue**. Antes de marcar la versión local como lista, revisa la compatibilidad prevista para una URL de GitHub Pages bajo subcarpeta (base path) sin tocar servicios remotos.

Lista mínima de aceptación:

- [ ] `/` renderiza la galería horizontal de **9** proyectos, en el orden definido.
- [ ] Scroll con mouse/trackpad, swipe en móvil, flechas de teclado y clicks funcionan correctamente.
- [ ] Portadas/posters aparecen sin esperar a que carguen videos.
- [ ] Videos reproducen sin sonido cuando corresponde, sin diez reproducciones simultáneas.
- [ ] `/proyectos` tiene cuadrícula de 3/2/1 columnas según el ancho y 9 proyectos.
- [ ] `/investigacion` contiene **solo Memento y Publicación Escalas de Confort**.
- [ ] `/cv` ofrece perfil y estructura editable con **docencia destacada**, sin inventar datos.
- [ ] Los **9** detalles de proyecto abren individualmente y muestran sus medios reales, o un estado pendiente correcto para la publicación sin archivos.
- [ ] Los 2 PDFs están disponibles como enlaces secundarios, si se incluyeron.
- [ ] Menú inferior y navegación atrás funcionan en todas las rutas.
- [ ] No hay videos pesados originales insertados directamente ni rutas rotas a archivos locales.
- [ ] No aparecen textos en inglés, títulos incorrectos, assets de la referencia, `Lorem ipsum`, errores de consola ni medios faltantes.
- [ ] Revisar con capturas o inspección visual en **móvil (~375px), tablet (~768px) y escritorio (~1440px)**.
- [ ] `prefers-reduced-motion` está implementado.
- [ ] `npm install`, `npm run dev`, `npm run build` y `npm run preview` se ejecutan correctamente en el entorno disponible.
- [ ] Proyecto empaquetado para transferirse y ejecutarse fuera de Work, sin dependencias de rutas absolutas del entorno.
- [ ] Rutas y assets son compatibles con base path de GitHub Pages; documentar estrategia de rutas profundas.
- [ ] No se ha creado ningún repositorio remoto, hecho push ni iniciado un despliegue público.

## 11. Flujo de entrega local, aprobación y publicación exclusiva por GitHub Pages

### Etapa 1 — desarrollo local y entrega para revisión (ejecutar ahora)

1. Extraer el ZIP, identificar recursos y desarrollar todas las páginas y componentes indicados.
2. Optimizar medios (sin destruir los originales) y generar posters reales de los videos. No incluir `.mov` pesados originales en el build.
3. Ejecutar las dependencias y el servidor de desarrollo **local del entorno disponible**, abriendo la web en navegador real para comprobarla y corregir problemas.
4. Ejecutar `npm run build` y `npm run preview`; revisar la versión compilada. Hacer pruebas de navegación, medios, teclado y responsive.
5. Preparar una **carpeta de proyecto descargable o archivo ZIP** (fuentes, `package.json`, lockfile, assets optimizados, README, configuración preparada para GitHub Pages, y opcionalmente capturas). **No incluir `node_modules`, credenciales, tokens ni carpetas de caché.** El build `dist/` puede entregarse adicionalmente si es viable.
6. Incluir en README instrucciones explícitas para ejecutar en **macOS**, por ejemplo:

   ```bash
   npm install
   npm run dev
   # Abrir la dirección localhost que indique Vite
   npm run build
   npm run preview
   ```

7. Mostrar **capturas de pantalla del resultado en escritorio y móvil**, junto con una vista previa local si el entorno la admite. Indicar dónde editar los nueve proyectos y el CV.
8. Entregar un resumen breve de lo terminado, lo provisional y las pruebas hechas. **DETENERSE AQUÍ y solicitar aprobación explícita.** No avanzar hacia GitHub sin respuesta afirmativa posterior.

**Criterio de término de ETAPA 1:** el sitio está completamente implementado y comprobado localmente, y yo puedo revisar y descargar el proyecto sin necesitar un repositorio ni una URL pública.

### Punto de control — autorización obligatoria

Al terminar la etapa local, comunicar de forma clara:

> «La versión local del portafolio está lista para que la revises. Te dejo la vista previa/capturas, el código descargable y las instrucciones para ejecutarlo. **¿Autorizas que publique esta versión en GitHub Pages?** No haré ningún push ni despliegue hasta que me lo confirmes».

Si solicito cambios, **realizarlos y volver a entregar una versión local revisable**. La solicitud de cambios **no equivale** a autorización para publicar. Una aprobación de diseño por sí sola tampoco: confirmar expresamente la publicación en GitHub Pages.

### Etapa 2 — solo tras autorización expresa de la autora

Una vez que yo diga de forma inequívoca que **autorizo publicar en GitHub Pages**:

1. Solicitar acceso/conexión a GitHub solo si es necesario y comprobar los permisos reales. No pedir ni manipular contraseñas o tokens en texto libre.
2. Confirmar **cuenta, repositorio de destino, nombre público del repositorio y visibilidad**. Si no existe un repositorio, consultar antes de crear uno. Un repositorio público supone exponer su código y recursos; explicarlo cuando corresponda.
3. Adaptar la ruta base de Vite y la estrategia de routing al destino elegido (`usuario.github.io` o `usuario.github.io/nombre-repo`); verificar videos, posters, imágenes, PDFs y navegación al refrescar URLs.
4. Subir el código al repositorio autorizado y **configurar exclusivamente GitHub Pages**, mediante Actions o el mecanismo documentado actual que resulte compatible. Hacer push/desplegar **solo en este momento**.
5. Esperar a que finalice el despliegue, abrir y probar la **URL pública real** en páginas principales y detalles de proyectos, incluidos accesos directos y recarga.
6. Informar URL publicada, repositorio, commit/versión y cualquier limitación comprobada. **No afirmar éxito si no verificaste la URL pública**.

Si en ETAPA 2 faltan permisos o la plataforma no permite completar un paso, especificar exactamente el bloqueo y entregar los comandos/instrucciones para que yo pueda completarlo. **No elegir otro hosting como alternativa sin consultarme**.

## 12. Entregables requeridos

### Al terminar ETAPA 1 (ahora, sin publicar)

1. **Proyecto web completo en una carpeta o ZIP descargable**, con todos los archivos necesarios para ejecutarlo localmente y medios optimizados.
2. **Vista previa local accesible si está disponible** y capturas verificables en escritorio y móvil; indicar explícitamente si la vista previa vive en el computador de Work y no en el mío.
3. **README** que explique requisitos (Node/npm), `npm install`, `npm run dev`, `npm run build`, `npm run preview` y resolución de problemas frecuentes.
4. **Guía de edición**: archivo y campos para títulos, descripciones, categorías, portadas, videos, imágenes, proyectos de investigación y CV.
5. **Preparación documentada para GitHub Pages** (base path y routing), sin repositorio remoto creado ni despliegue ejecutado.
6. **Informe breve de estado y pruebas**, con pendientes (principalmente `Publicación Escalas de Confort` y datos reales del CV).
7. **Solicitud expresa de autorización para ETAPA 2**. Esperar mi respuesta; no publicar automáticamente.

### Solamente si apruebo ETAPA 2

1. Enlace al **repositorio de GitHub autorizado**.
2. **URL pública real de GitHub Pages**, comprobada en navegador.
3. Confirmación de pruebas de navegación, carga de medios y funcionamiento de rutas profundas en la URL publicada.
4. Guía corta para publicar futuras actualizaciones.

### Criterio final de este encargo

Quiero un **portafolio real, minimalista, fluido, editorial, rápido y comprobado localmente**, cuyo rasgo central sea la navegación horizontal de inicio y la presentación cuidada de los proyectos. **El trabajo actual termina con una versión local revisable y lista para publicar, no con la publicación.** La publicación exclusiva mediante GitHub Pages será una segunda etapa que debes esperar a que yo autorice de forma explícita. No quiero una plantilla genérica ni una propuesta conceptual sin implementación.
