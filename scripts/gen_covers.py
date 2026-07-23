#!/usr/bin/env python3
"""Generate RAVEX release cover SVGs in the reference style:
dark grainy bg, centered chrome 4-point star, small 'RAVEX ✦' top-right,
big letter mark bottom-left, 'ARTIST — YEAR' below it."""
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'covers')
os.makedirs(OUT, exist_ok=True)

STAR = "M50 0 C54 33 67 46 100 50 C67 54 54 67 50 100 C46 67 33 54 0 50 C33 46 46 33 50 0 Z"
X = "\u00d7"  # multiplication sign

# index, filename, big mark, artist, year, star-rotation(deg), star-scale, bg hex
COVERS = [
    (1,  'release-1',  'GF',  'MOONSHINE',       '2026',  0,   4.6, '#0b0a0c'),
    (2,  'release-2',  'CD',  'MOONSHINE',       '2026', -6,   4.8, '#0a0a0b'),
    (3,  'release-3',  'IK',  'MOONSHINE',       '2026',  8,   4.7, '#090a0b'),
    (4,  'release-4',  'FR',  'ZESUNA',          '2026', -4,   4.9, '#0b0b0d'),
    (5,  'release-5',  'IR',  'ARCIANA',         '2026', 12,   4.5, '#0a0909'),
    (6,  'release-6',  'LH',  'ARCIANA',         '2025',  4,   5.0, '#090a0c'),
    (7,  'release-7',  '18',  'ARCIANA',         '2025', -8,   4.7, '#0a0b0c'),
    (8,  'release-8',  'TT',  'ARCIANA',         '2025',  6,   4.9, '#0b0a0b'),
    (9,  'release-9',  'IM',  'ARCIANA',         '2024', -3,   4.5, '#090909'),
    (10, 'release-10', 'EFN', 'VRIGGER',         '2025', 10,   4.6, '#0a0a0c'),
    (11, 'release-11', 'RW',  'WIATRA ' + X + ' ARCIANA', '2025', -7, 5.0, '#0b0a0c'),
    (12, 'release-12', 'WD',  'WIATRA ' + X + ' ARCIANA', '2024',  5, 4.7, '#090a0a'),
    (13, 'release-13', 'AB',  'WIATRA',          '2026', -5,   4.8, '#0a0b0b'),
    (14, 'release-14', 'DL',  'WIATRA',          '2026',  9,   4.6, '#0b0b0d'),
    (15, 'release-15', 'WP',  'ZESUNA',          '2025', -6,   4.9, '#090a0b'),
    (16, 'release-16', 'TS',  'HYPERBAITER',     '2025',  7,   4.8, '#0a0a0b'),
]


def big_font_size(mark):
    n = len(mark)
    if n <= 2:
        return 150
    if n == 3:
        return 110
    return 90


def artist_font_size(artist, year):
    line = f"{artist} — {year}"
    if len(line) <= 16:
        return 22, 6
    if len(line) <= 22:
        return 20, 4
    return 17, 3


def make_svg(mark, artist, year, rot, scale, bg):
    bfs = big_font_size(mark)
    afs, als = artist_font_size(artist, year)
    big_y = 690
    sub_y = big_y + 58
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
<defs>
<linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#f4f4f6"/><stop offset="0.45" stop-color="#9a9aa4"/>
  <stop offset="0.6" stop-color="#e8e8ec"/><stop offset="1" stop-color="#4a4a52"/>
</linearGradient>
<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.14"/></feComponentTransfer>
<feComposite operator="over" in2="SourceGraphic"/></filter>
<radialGradient id="vig" cx="0.5" cy="0.42" r="0.75">
  <stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.7"/>
</radialGradient>
</defs>
<rect width="800" height="800" fill="{bg}"/>
<g transform="translate(400 360) rotate({rot}) scale({scale}) translate(-50 -50)"><path d="{STAR}" fill="url(#silver)"/></g>
<g transform="translate(640 140) rotate(0) scale(1.1) translate(-50 -50)"><path d="{STAR}" fill="none" stroke="#55555c" stroke-width="3"/></g>
<text x="48" y="{big_y}" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="{bfs}" fill="#f0efec">{mark}</text>
<text x="48" y="{sub_y}" font-family="Courier New, monospace" font-size="{afs}" letter-spacing="{als}" fill="#8a8a90" text-anchor="start">{artist} — {year}</text>
<text x="752" y="88" font-family="Courier New, monospace" font-size="22" letter-spacing="6" fill="#8a8a90" text-anchor="end">RAVEX ✦</text>
<rect width="800" height="800" fill="url(#vig)"/>
<rect width="800" height="800" filter="url(#grain)" opacity="0.5"/>
</svg>'''


for idx, fname, mark, artist, year, rot, scale, bg in COVERS:
    svg = make_svg(mark, artist, year, rot, scale, bg)
    with open(os.path.join(OUT, fname + '.svg'), 'w', encoding='utf-8') as f:
        f.write(svg)
    print('wrote', fname)

print('done')
