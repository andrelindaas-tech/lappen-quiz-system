# Kontaktark: python3 sheet2.py <mappe> <ut.png> [kolonner] [bredde] [filter]
import sys,glob,os
from PIL import Image,ImageDraw
d,out=sys.argv[1],sys.argv[2];cols=int(sys.argv[3]) if len(sys.argv)>3 else 4;tw=int(sys.argv[4]) if len(sys.argv)>4 else 400;flt=sys.argv[5] if len(sys.argv)>5 else ''
fs=sorted(f for f in glob.glob(os.path.join(d,'*.jpg'))+glob.glob(os.path.join(d,'*.png')) if flt in os.path.basename(f))
ims=[Image.open(f).convert('RGB') for f in fs];th=max(round(im.height*tw/im.width) for im in ims)
rows=(len(ims)+cols-1)//cols;S=Image.new('RGB',(cols*(tw+12)+12,rows*(th+34)+12),(226,232,240));dr=ImageDraw.Draw(S)
for i,(f,im) in enumerate(zip(fs,ims)):
  x=12+(i%cols)*(tw+12);y=12+(i//cols)*(th+34);dr.text((x,y),os.path.basename(f).split('.')[0],fill=(15,23,42));S.paste(im.resize((tw,round(im.height*tw/im.width))),(x,y+18))
S.save(out);print(out,S.size)
