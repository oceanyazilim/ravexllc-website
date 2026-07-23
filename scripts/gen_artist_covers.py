#!/usr/bin/env python3
"""Generate portrait RAVEX artist thumbnails matching the release-cover style:
dark grainy bg, centered chrome star, 'RAVEX ✦' top-right, artist name + role bottom-left."""
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'covers')
os.makedirs(OUT, exist_ok=True)

STAR = "M50 0 C54 33 67 46 100 50 C67 54 54 67 50 100 C46 67 33 54 0 50 C33 46 46 33 50 0 Z"

# filename, display name (upper), role, rot, scale, bg
ARTISTS = [
    ('artist-moonshine',   'MOONSHINE',   'ELECTRONIC',  0,  4.6, '#0a0a0b'),
    ('artist-arciana',     'ARCIANA',     'POP',         7,  4.8, '#0b0a0c'),
    ('artist-wiatra',      'WIATRA',      'COVER',      -6,  4.5, '#090a0b'),
    ('artist-vrigger',     'VRIGGER',     'ELECTRONIC',  9,  4.7, '#0a0909'),
    ('artist-hyperbaiter', 'HYPERBAITER', 'ELECTRONIC', -4,  4.6, '#0a0b0c'),
    ('artist-sukagawa',    'SUKAGAWA',    'COVER',       5,  4.8, '#0b0b0d'),
    ('artist-zesuna',      'ZESUNA',      'POP',        -8,  4.5, '#090909'),
    ('artist-iandaly',     'IAN DALY',    'POP',         6,  4.7, '#0a0a0c'),
    ('artist-yli',         'YLI',         'COVER',      -3,  4.9, '#0b0a0b'),
]


def name_font(name):
    n = len(name)
    if n <= 6:
        return 96
    if n <= 8:
        return 76
    return 58


def make_svg(name, role, rot, scale, bg):
    nfs = name_font(name)
    name_y = 880
    role_y = name_y + 48
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
<defs>
<linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#f4f4f6"/><stop offset="0.45" stop-color="#9a9aa4"/>
  <stop offset="0.6" stop-color="#e8e8ec"/><stop offset="1" stop-color="#4a4a52"/>
</linearGradient>
<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.14"/></feComponentTransfer>
<feComposite operator="over" in2="SourceGraphic"/></filter>
<radialGradient id="vig" cx="0.5" cy="0.4" r="0.78">
  <stop offset="0.5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.72"/>
</radialGradient>
</defs>
<rect width="800" height="1000" fill="{bg}"/>
<g transform="translate(400 420) rotate({rot}) scale({scale}) translate(-50 -50)"><path d="{STAR}" fill="url(#silver)"/></g>
<g transform="translate(650 150) rotate(0) scale(1.1) translate(-50 -50)"><path d="{STAR}" fill="none" stroke="#55555c" stroke-width="3"/></g>
<text x="48" y="{name_y}" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="{nfs}" fill="#f0efec">{name}</text>
<text x="52" y="{role_y}" font-family="Courier New, monospace" font-size="22" letter-spacing="6" fill="#8a8a90" text-anchor="start">{role}</text>
<text x="752" y="92" font-family="Courier New, monospace" font-size="22" letter-spacing="6" fill="#8a8a90" text-anchor="end">RAVEX ✦</text>
<rect width="800" height="1000" fill="url(#vig)"/>
<rect width="800" height="1000" filter="url(#grain)" opacity="0.5"/>
</svg>'''


for fname, name, role, rot, scale, bg in ARTISTS:
    with open(os.path.join(OUT, fname + '.svg'), 'w', encoding='utf-8') as f:
        f.write(make_svg(name, role, rot, scale, bg))
    print('wrote', fname)

print('done')
