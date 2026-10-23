import sys
from PIL import Image, ImageDraw
d, fmt, out = sys.argv[1], sys.argv[2], sys.argv[3]
ids = sys.argv[4].split(',')
ims = [Image.open(f'{d}/{fmt}-{i}.png') for i in ids]
cols = 4; w, h = ims[0].size; s = 0.36
tw, th = int(w*s), int(h*s); rows = (len(ims)+cols-1)//cols
sheet = Image.new('RGB', (cols*tw + (cols+1)*12, rows*(th+40) + 12), '#e2e8f0')
dr = ImageDraw.Draw(sheet)
for k, (i, im) in enumerate(zip(ids, ims)):
    x = 12 + (k%cols)*(tw+12); y = 12 + (k//cols)*(th+40)
    sheet.paste(im.resize((tw, th)), (x, y+28)); dr.text((x, y+8), i, fill='#0f172a')
sheet.save(out)
