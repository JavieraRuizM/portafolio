import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { projects, catalogProjects, categories, categoryPath, mediaUrl, number, type Media, type Project } from './data/projects';
import { cv, type CVEntry } from './data/cv';

const Arrow = ({ direction = 'right' }: {direction?: 'left' | 'right' | 'up'}) => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" style={{transform: direction === 'left' ? 'rotate(180deg)' : direction === 'up' ? 'rotate(-45deg)' : undefined}}><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.3" /></svg>;
function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & {connection?: {saveData?: boolean; effectiveType?: string; addEventListener?: Function; removeEventListener?: Function}}).connection;
    const update = () => setAllowed(!query.matches && !connection?.saveData && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType || ''));
    update(); query.addEventListener('change', update); connection?.addEventListener?.('change', update);
    return () => { query.removeEventListener('change', update); connection?.removeEventListener?.('change', update); };
  }, []);
  return allowed;
}
function RichInline({text}: {text: string}) {
  return <>{text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part,i) => part.startsWith('**') ? <strong key={i}>{part.slice(2,-2)}</strong> : part.startsWith('*') ? <em key={i}>{part.slice(1,-1)}</em> : part)}</>;
}
function Paragraphs({text, className = ''}: {text: string; className?: string}) { return <div className={`prose ${className}`}>{text.split('\n\n').map((p,i) => <p key={i}><RichInline text={p} /></p>)}</div>; }
function ContactLinks() { return <div className="contacts">{cv.contacts.map(c => <a key={c.href} href={c.href}>{c.label}<Arrow direction="up" /></a>)}</div>; }
// Native modal dialogs provide focus trapping and an inert background. The fixed
// body preserves the page position on mobile Safari as well as desktop browsers.
function Overlay({open, onClose, title, className, children}: {open: boolean; onClose: () => void; title: string; className: string; children: (close: () => void) => ReactNode}) {
  const ref=useRef<HTMLDialogElement>(null);
  const timer=useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [closing,setClosing]=useState(false);
  const close=() => { if(timer.current) return; setClosing(true); timer.current=setTimeout(() => {timer.current=undefined;onClose();},180); };
  useEffect(() => {
    const dialog=ref.current!;
    if(!open) return;
    setClosing(false);
    const opener=document.activeElement as HTMLElement;
    const scroll=window.scrollY, hash=window.location.hash;
    const previous={position:document.body.style.position,top:document.body.style.top,width:document.body.style.width,overflow:document.body.style.overflow};
    document.body.style.position='fixed';document.body.style.top=`-${scroll}px`;document.body.style.width='100%';document.body.style.overflow='hidden';
    dialog.showModal();
    return () => {clearTimeout(timer.current);timer.current=undefined;dialog.close();Object.assign(document.body.style,previous);window.scrollTo(0,hash===window.location.hash?scroll:0);if(hash===window.location.hash && opener?.isConnected) opener.focus({preventScroll:true});else (document.querySelector('h1[tabindex]') as HTMLElement)?.focus({preventScroll:true});};
  },[open]);
  return <dialog id={className} ref={ref} className={`overlay ${className} ${closing?'is-closing':''}`} aria-label={title} aria-modal="true" onKeyDown={e=>{if(e.key!=='Tab')return;const targets=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]')).filter(el=>el.offsetParent!==null);const first=targets[0],last=targets[targets.length-1];if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}}} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget) close();}}><div className="overlay-panel"><button className={`overlay-close ${className==='mobile-menu'?'menu-toggle is-open':''}`} aria-label={className==='mobile-menu'?'Cerrar menú':'Cerrar contacto'} onClick={close}>{className==='mobile-menu'?<><span/><span/></>:<span aria-hidden="true">×</span>}</button>{children(close)}</div></dialog>;
}
function SiteHeader() {
  const [open,setOpen]=useState(false);
  useEffect(()=>{const query=matchMedia('(min-width: 761px)');const resize=()=>{if(query.matches)setOpen(false);};query.addEventListener('change',resize);return()=>query.removeEventListener('change',resize);},[]);
  return <header className="site-header"><Link className="wordmark" to="/"><span className="wordmark-light">Portafolio</span> Javiera Ruiz Mayer</Link><MainNav /><button className="menu-toggle" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}><span/><span/></button><Overlay open={open} onClose={()=>setOpen(false)} title="Menú de navegación" className="mobile-menu">{close=><nav aria-label="Navegación móvil">{[['/','Inicio'],['/proyectos','Proyectos'],['/investigacion','Investigación'],['/cv','About']].map(([to,label])=><NavLink key={to} to={to} end={to==='/'} onClick={close}>{label}<Arrow direction="up" /></NavLink>)}</nav>}</Overlay></header>;
}
function SiteFooter() {
  const [open,setOpen]=useState(false);
  return <><footer className="site-footer"><span>Javiera Ruiz Mayer 2026</span><button className="contact-button" onClick={()=>setOpen(true)} aria-haspopup="dialog">Contacto</button></footer><Overlay open={open} onClose={()=>setOpen(false)} title="Contacto" className="contact-modal">{()=> <><h2>Contacto</h2><ContactLinks /></>}</Overlay></>;
}
function MainNav() {
  return <nav className="main-nav" aria-label="Navegación principal">{[['/', 'Inicio'], ['/proyectos', 'Proyectos'], ['/investigacion', 'Investigación'], ['/cv', 'About']].map(([to, label]) => <NavLink key={to} end={to === '/'} to={to}>{label}</NavLink>)}</nav>;
}
function Tags({project, duplicate = false}: {project: Project; duplicate?: boolean}) { return <span className="tags">{project.categories.map(c => <Link key={c} to={categoryPath(c)} tabIndex={duplicate ? -1 : undefined} aria-label={`Ver proyectos de ${c}`}>{c}</Link>)}</span>; }
function Pending({project,compact = false}: {project: Project; compact?: boolean}) {
  return <div className={`pending ${compact ? 'compact' : ''}`}><span className="eyebrow">Investigación</span><span className="pending-title">{project.coverTitle || project.title}</span><span className="pending-note">{project.researchOnly ? 'Revisión de seis casos' : 'A Literature Review'}<span aria-hidden="true">↗</span></span></div>;
}
function MediaDisplay({media, active, detail = false, priority = false}: {media: Media; active?: boolean; detail?: boolean; priority?: boolean}) {
  const ref=useRef<HTMLDivElement>(null), video=useRef<HTMLVideoElement>(null);
  const [visible,setVisible]=useState(false), [ready,setReady]=useState(false), [error,setError]=useState(false), [manualPause,setManualPause]=useState(false);
  const motion=useMotionAllowed();
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.15});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
  const shouldPlay=motion && !manualPause && (active===undefined?visible:active);
  useEffect(()=>{
    const element=video.current;if(!element)return;
    const update=()=>{if(shouldPlay && document.visibilityState==='visible') element.play().catch(()=>setReady(false));else element.pause();};
    update();document.addEventListener('visibilitychange',update);return()=>{element.pause();document.removeEventListener('visibilitychange',update);};
  },[shouldPlay]);
  const poster=mediaUrl(`${media.file}-1440.webp`);
  return <div ref={ref} className={`media-display ${detail?'detail-media':''} ${media.type==='video'?'video-media':''} ${media.portrait?'portrait':''}`}>
    <img src={poster} srcSet={[720,1440,2200].map(n=>`${mediaUrl(`${media.file}-${n}.webp`)} ${n}w`).join(', ')} sizes={detail?'(max-width: 700px) 90vw, 1280px':'(max-width: 600px) 80vw, (max-width: 1000px) 60vw, 680px'} alt={media.alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" />
    {media.type==='video' && shouldPlay && !error && <video ref={video} className={ready?'ready':''} src={mediaUrl(`${media.file}.mp4`)} poster={poster} aria-label={media.alt} autoPlay muted playsInline loop preload="metadata" onPlaying={()=>setReady(true)} onError={()=>setError(true)} />}
    {detail && media.type==='video' && motion && <button className="media-pause" onClick={()=>setManualPause(p=>!p)}>{manualPause?'Reproducir animación':'Pausar animación'}</button>}
  </div>;
}
function ProjectCard({project, gallery = false, focused = false, playing, duplicate = false, onFocus}: {project: Project; gallery?: boolean; focused?: boolean; playing?: boolean; duplicate?: boolean; onFocus?: () => void}) {
  const [cursor, setCursor] = useState({x: 0, y: 0});
  const [hover, setHover] = useState(false);
  const path = `/proyectos/${project.slug}`;
  return <article className={`project-card ${gallery ? 'gallery-card' : 'grid-card'} ${focused ? 'is-focused' : ''} ${!project.cover ? 'text-card' : ''}`} data-project={project.slug} aria-hidden={duplicate || undefined} onFocusCapture={onFocus}>
    <Link to={path} tabIndex={duplicate ? -1 : undefined} className="project-link" aria-label={`Ver proyecto: ${project.title}`}>
      {gallery && <div className="gallery-title"><h2>{project.title}</h2><Arrow direction="up" /></div>}
      <div className="cover" onPointerEnter={e => {if(e.pointerType === 'mouse') setHover(true);}} onPointerLeave={() => setHover(false)} onPointerMove={e => {const rect=e.currentTarget.getBoundingClientRect(); setCursor({x: e.clientX-rect.left, y: e.clientY-rect.top});}}>
        {project.cover ? <MediaDisplay media={project.cover} active={gallery ? playing : undefined} priority={!duplicate && project.order < 3} /> : <Pending project={project} compact />}
        {hover && <span className="context-cursor" aria-hidden="true" style={{left: cursor.x, top: cursor.y}}>Ver proyecto ↗</span>}
      </div>
    </Link>
    <div className="card-meta">{!gallery && <span className="project-number">{number(project.order)}</span>}<div>{!gallery && <h2><Link to={path}>{project.title}</Link></h2>}<Tags project={project} duplicate={duplicate} /></div>{!gallery && <Arrow direction="up" />}</div>
  </article>;
}
let galleryPosition = 0;
const visualProjects = catalogProjects;
const count = visualProjects.length;
// Three visual copies preserve native scrolling. Only the middle copy is exposed
// to keyboard/assistive navigation. Recentring keeps the same pixels on screen.
const galleryItems = [...visualProjects, ...visualProjects, ...visualProjects];
function HorizontalGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visualIndex, setVisualIndex] = useState(count + galleryPosition);
  const [paused, setPaused] = useState(false);
  const motion = useMotionAllowed();
  const visualRef = useRef(visualIndex);
  const index = visualIndex % count;
  const go = (position: number, instant = false) => {
    const root = ref.current;
    const target = Math.max(0, Math.min(galleryItems.length - 1, position));
    const card = root?.children[target] as HTMLElement | undefined;
    if (root && card) root.scrollTo({left: card.offsetLeft - (root.clientWidth-card.offsetWidth)/2, behavior: motion && !instant ? 'smooth' : 'instant'});
  };
  useLayoutEffect(() => {go(count + galleryPosition, true);}, []);
  useEffect(() => {
    const root=ref.current!;
    let frame=0, restoreFrame=0;
    let wheelTimer: ReturnType<typeof setTimeout>, settleTimer: ReturnType<typeof setTimeout>;
    const nearest = () => {
      const center = root.scrollLeft + root.clientWidth/2;
      let closest=0, distance=Infinity;
      Array.from(root.children).forEach((el,i) => {
        const card=el as HTMLElement;
        const d=Math.abs(card.offsetLeft+card.offsetWidth/2-center);
        if(d<distance){closest=i;distance=d;}
      });
      return closest;
    };
    const record = (n: number) => {visualRef.current=n;setVisualIndex(n);galleryPosition=n%count;};
    const recenter = () => {
      const current=nearest();
      if(current >= count && current < count*2) return;
      const central=count+(current%count);
      const source=root.children[current] as HTMLElement;
      const target=root.children[central] as HTMLElement;
      const delta=target.offsetLeft-source.offsetLeft;
      root.style.scrollSnapType='none';
      root.scrollTo({left:root.scrollLeft+delta,behavior:'instant'});
      record(central);
      restoreFrame=requestAnimationFrame(() => {root.style.scrollSnapType='';});
    };
    const update = () => {
      cancelAnimationFrame(frame);clearTimeout(settleTimer);
      frame=requestAnimationFrame(() => record(nearest()));
      settleTimer=setTimeout(recenter,180);
    };
    const wheel = (e: WheelEvent) => {
      if(e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      e.preventDefault();clearTimeout(wheelTimer);root.style.scrollSnapType='none';
      root.scrollLeft+=e.deltaY*(e.deltaMode===1 ? 20 : e.deltaMode===2 ? root.clientWidth : 1);
      wheelTimer=setTimeout(() => {root.style.scrollSnapType='';go(nearest());},130);
    };
    const resize = () => go(count+galleryPosition,true);
    root.addEventListener('wheel',wheel,{passive:false});root.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',resize);
    return () => {clearTimeout(wheelTimer);clearTimeout(settleTimer);cancelAnimationFrame(frame);cancelAnimationFrame(restoreFrame);root.removeEventListener('wheel',wheel);root.removeEventListener('scroll',update);window.removeEventListener('resize',resize);};
  }, [motion]);
  return <main id="main" className="home-page"><h1 className="sr-only">Portafolio Javiera Ruiz Mayer — Proyectos</h1><div ref={ref} className="horizontal-gallery" role="region" aria-label={`Galería circular de ${count} proyectos. Usa las flechas izquierda y derecha para explorar.`} tabIndex={0} onKeyDown={e => {
    if(e.key===' ' && e.target===e.currentTarget){e.preventDefault();setPaused(p => !p);}
    if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();go(e.key==='Home'?count:e.key==='End'?count*2-1:visualRef.current+(e.key==='ArrowRight'?1:-1));}
  }}>
    {galleryItems.map((p,i) => <ProjectCard key={i} project={p} gallery duplicate={i<count || i>=count*2} focused={i===visualIndex} playing={motion && !paused && i===visualIndex} onFocus={() => go(i)} />)}
  </div><span className="sr-only" aria-live="polite">{visualProjects[index].title}. Proyecto {index+1} de {count}.</span>{motion && <button className="accessible-motion-control" onClick={() => setPaused(!paused)}>{paused ? 'Reproducir animación' : 'Pausar animación'}</button>}</main>;
}
function CategoryFilters({selected}: {selected?: string}) {
  return <nav className="category-filters" aria-label="Filtrar proyectos por etiqueta"><Link to="/proyectos" aria-current={!selected ? 'page' : undefined}>Todos</Link>{categories.map(c => <Link key={c.slug} to={categoryPath(c.title)} aria-current={selected === c.title ? 'page' : undefined}>{c.title}</Link>)}</nav>;
}
function ProjectGrid({research = false, category}: {research?: boolean; category?: string}) {
  const filter = category || (research ? 'Investigación' : undefined);
  const list = filter ? projects.filter(p => p.categories.includes(filter)) : visualProjects;
  return <main id="main" className="page catalog-page"><div className="page-heading"><h1 tabIndex={-1}>{category || (research ? 'Investigación' : 'Proyectos')}</h1><span className="eyebrow">{category ? 'Proyectos por categoría' : research ? 'Diseño e investigación' : 'Índice de proyectos'}</span></div>{!research && <CategoryFilters selected={category} />}<div className="project-grid">{list.map(p => <ProjectCard key={p.slug} project={p} />)}</div></main>;
}
function CategoryPage() {
  const {categorySlug}=useParams();
  const category=categories.find(c => c.slug===categorySlug);
  return category ? <ProjectGrid category={category.title} /> : <NotFound />;
}
function ProjectDetail() {
  const {slug}=useParams(); const project=projects.find(p => p.slug===slug);
  if(!project) return <NotFound />;
  const sequence=project.researchOnly ? projects.filter(p => p.categories.includes('Investigación')) : visualProjects;
  const position=sequence.findIndex(p => p.slug===project.slug);
  const previous=sequence[(position+sequence.length-1)%sequence.length]; const next=sequence[(position+1)%sequence.length];
  return <main id="main" className="page detail-page"><Link to="/proyectos" className="text-link back-link"><Arrow direction="left" />Todos los proyectos</Link><div className="detail-heading"><div><h1 tabIndex={-1}>{project.title}</h1><Tags project={project} /></div><div className="detail-intro"><Paragraphs text={project.description} />{project.documents?.map(d => <a className="text-link document-link" href={mediaUrl(d.file)} key={d.file} target="_blank" rel="noreferrer">{d.title}<span className="filetype">PDF</span><Arrow direction="up" /><span className="sr-only"> (abre en una pestaña nueva)</span></a>)}</div></div>
    {project.media.length ? <div className="detail-gallery">{project.media.map((m,i) => <figure key={m.file} className={m.portrait ? 'figure-portrait' : 'figure-wide'}><MediaDisplay media={m} detail priority={i===0}/><figcaption><span>{m.alt}</span>{m.type==='image' && <a href={mediaUrl(`${m.file}-2200.webp`)} target="_blank" rel="noreferrer" aria-label={`Ampliar imagen: ${m.alt} (abre en una pestaña nueva)`}><Arrow direction="up" /></a>}</figcaption></figure>)}</div> : null}
    <div className="project-pagination"><Link to={`/proyectos/${previous.slug}`}><span className="eyebrow"><Arrow direction="left" />Anterior</span><span>{previous.title}</span></Link><Link to={`/proyectos/${next.slug}`}><span className="eyebrow">Siguiente<Arrow /></span><span>{next.title}</span></Link></div>
  </main>;
}
function CVSection({title, entries}: {title: string; entries: CVEntry[]}) {
  return <section className="cv-section"><h2>{title}</h2><div>{entries.map((e,i)=><div className="cv-entry" key={i}><div><h3>{e.title}</h3>{e.organization && <p><RichInline text={e.organization} /></p>}</div>{e.period && <span className="eyebrow">{e.period}</span>}</div>)}</div></section>;
}
type Course = {title: string; year: string; type: string};
function CourseList({courses}: {courses: Course[]}) {
  return <ul className="course-list">{courses.map((course,i)=><li key={i}><span>{course.title}<small>{course.type}</small></span><span className="course-year">{course.year}</span></li>)}</ul>;
}
function AssistantCourses() {
  const [open,setOpen]=useState(false);
  return <div className="assistant-courses"><h3><button id="assistant-courses-title" className="assistant-toggle" aria-expanded={open} aria-controls="assistant-courses-panel" onClick={()=>setOpen(value=>!value)}>Asignaturas como profesora ayudante<span aria-hidden="true">{open?'−':'+'}</span></button></h3><div id="assistant-courses-panel" className={`assistant-panel ${open?'is-open':''}`} role="region" aria-labelledby="assistant-courses-title" aria-hidden={!open} inert={!open}><div><CourseList courses={cv.teachingGroups[1].courses} /></div></div></div>;
}
function CV() {
  return <main id="main" className="page cv-page"><section className="cv-profile"><div><h1 tabIndex={-1} aria-label={cv.name}>{cv.nameLines.map(line=><span className="name-line" key={line}>{line}</span>)}</h1><span className="eyebrow cv-profession">{cv.profession}</span><ContactLinks /></div><Paragraphs text={cv.profile} /></section>
    <CVSection title="Experiencia Profesional" entries={cv.experience} /><section className="cv-section teaching-section"><div className="teaching-heading"><h2>Docencia</h2><p>{cv.teachingRole}</p></div><div className="teaching-content"><CourseList courses={cv.teachingGroups[0].courses} /><AssistantCourses /></div></section>
    <CVSection title="Formación" entries={cv.education} /><section className="cv-section"><h2>Investigación y publicaciones</h2><div>{projects.filter(p=>p.categories.includes('Investigación')).map(p=><Link className="research-link" key={p.slug} to={`/proyectos/${p.slug}`}>{p.title}<Arrow direction="up" /></Link>)}</div></section>
  </main>;
}
function NotFound() { return <main id="main" className="page not-found"><span className="eyebrow">404</span><h1 tabIndex={-1}>Página no encontrada</h1><Link className="text-link" to="/proyectos">Volver a proyectos<Arrow /></Link></main>; }
function RouteEffects() {
  const {pathname}=useLocation(); const initial=useRef(true);
  useLayoutEffect(() => {
    const p=projects.find(p=> pathname===`/proyectos/${p.slug}`);
    const category=categories.find(c => pathname===`/proyectos/categoria/${c.slug}`);
    const title=category?.title || p?.title || ({'/proyectos':'Proyectos','/investigacion':'Investigación','/cv':'CV'} as Record<string,string>)[pathname];
    document.title=title ? `${title} | Portafolio Javiera Ruiz Mayer` : 'Portafolio Javiera Ruiz Mayer';
    window.scrollTo(0,0);
    if(!initial.current) (document.querySelector('h1[tabindex]') as HTMLElement)?.focus({preventScroll:true});
    initial.current=false;
  }, [pathname]); return null;
}
export default function App() {
  const {pathname}=useLocation();
  return <><a className="skip-link" href="#main" onClick={e => {e.preventDefault(); const main=document.getElementById('main');main?.setAttribute('tabindex','-1');main?.focus();}}>Saltar al contenido</a><SiteHeader /><RouteEffects /><div key={pathname} className="route-content"><Routes><Route path="/" element={<HorizontalGallery />} /><Route path="/proyectos" element={<ProjectGrid />} /><Route path="/investigacion" element={<ProjectGrid research />} /><Route path="/cv" element={<CV />} /><Route path="/proyectos/categoria/:categorySlug" element={<CategoryPage />} /><Route path="/proyectos/:slug" element={<ProjectDetail />} /><Route path="*" element={<NotFound />} /></Routes></div><SiteFooter /></>;
}
