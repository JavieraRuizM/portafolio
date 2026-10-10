from pathlib import Path
import sys,subprocess,shutil,json,tempfile

from PIL import Image,ImageOps
ff=shutil.which('ffmpeg')
if not ff: raise SystemExit('Instala FFmpeg para regenerar los recursos.')
root=Path(__file__).resolve().parents[1];src=root/'originales';out=root/'public/media'
report=[]
def img(p,name):
 im=ImageOps.exif_transpose(Image.open(p)).convert('RGB')
 for width in [720,1440,2200]:
  copy=im.copy();copy.thumbnail((width,round(width*im.height/im.width)))
  copy.save(out/f'{name}-{width}.webp',quality=86,method=6)
 report.append({'original':str(p.relative_to(src)) if p.is_relative_to(src) else p.name,'web':name,'width':im.width,'height':im.height})
for p in sorted(src.rglob('*')):
 if not p.is_file():continue
 name=p.name.lower();folder=p.parent.name.lower()
 if p.suffix.lower() in ['.png','.jpg','.webp']:
  if folder.startswith('expos'): dest='expo-'+name.split(' ')[2].split('.')[0]
  elif folder=='memento':dest='memento-'+('1' if 'principal' in name else name.split(' ')[1].split('.')[0])
  else:dest='libu-1'
  img(p,dest)
 elif p.suffix=='.mov':
  if folder.startswith('web'):dest='artefactos-'+name.split(' ')[1];seconds=3 if '1' in name else 5
  elif folder.startswith('visual'):dest='visualizacion-1';seconds=5
  elif folder.startswith('explor'):dest='generativas-1';seconds=2
  elif folder=='ol salud':dest='oi-salud-1';seconds=.7
  else:dest='precotizados-1';seconds=1
  print('Convirtiendo',dest,flush=True)
  subprocess.run([ff,'-y','-i',str(p),'-vf','scale=1600:-2,fps=30','-c:v','libx264','-preset','slow','-crf','24','-pix_fmt','yuv420p','-an','-movflags','+faststart',str(out/f'{dest}.mp4')],capture_output=True,check=True)
  poster=Path(tempfile.gettempdir())/f'{dest}-poster.png'
  subprocess.run([ff,'-y','-ss',str(seconds),'-i',str(p),'-frames:v','1',str(poster)],capture_output=True,check=True)
  img(poster,dest)
 elif p.suffix=='.pdf':
  dest='memento-arquitectura.pdf' if folder=='memento' else 'libu-navegacion.pdf';shutil.copy2(p,out/dest)
(root/'scripts/media-inventory.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print('Originales MB',sum(p.stat().st_size for p in src.rglob('*') if p.is_file())/1e6)
print('Web MB',sum(p.stat().st_size for p in out.iterdir())/1e6)
