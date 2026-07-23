export type Release = {
  index: string
  title: string
  artist: string
  year: string
  streams?: string
  tag?: string
  cover: string
}

export const RELEASES: Release[] = [
  { index: '01', title: 'GUCCI FLIP FLOPS × CARELESS WHISPER', artist: 'MOONSHINE', year: '2026', streams: '47.4M', tag: 'OUT NOW', cover: '/covers/release-1.svg' },
  { index: '02', title: 'CARAMELLDANSEN', artist: 'MOONSHINE', year: '2026', tag: 'NEW', cover: '/covers/release-2.svg' },
  { index: '03', title: "I DON'T KNOW", artist: 'MOONSHINE', year: '2026', tag: 'NEW', cover: '/covers/release-3.svg' },
  { index: '04', title: 'FREAKS', artist: 'ZESUNA', year: '2026', tag: 'NEW', cover: '/covers/release-4.svg' },
  { index: '05', title: "IT'S RAINING", artist: 'ARCIANA', year: '2026', tag: 'NEW', cover: '/covers/release-5.svg' },
  { index: '06', title: 'I LOVE/HATE MYSELF', artist: 'ARCIANA', year: '2025', streams: '11.5M', cover: '/covers/release-6.svg' },
  { index: '07', title: 'EIGHTEEN — NIGHTCORE', artist: 'ARCIANA', year: '2025', streams: '10.5M', cover: '/covers/release-7.svg' },
  { index: '08', title: 'TONGUE TWISTER — SPEED UP', artist: 'ARCIANA', year: '2025', streams: '9.5M', cover: '/covers/release-8.svg' },
  { index: '09', title: 'I MISS U', artist: 'ARCIANA', year: '2024', streams: '8.6M', cover: '/covers/release-9.svg' },
  { index: '10', title: 'EFN', artist: 'VRIGGER', year: '2025', streams: '5.0M', cover: '/covers/release-10.svg' },
  { index: '11', title: 'ROCKIN’ ALL OVER THE WORLD', artist: 'WIATRA × ARCIANA', year: '2025', streams: '4.3M', cover: '/covers/release-11.svg' },
  { index: '12', title: 'I WANNA DANCE WITH SOMEBODY', artist: 'WIATRA × ARCIANA', year: '2024', streams: '2.3M', cover: '/covers/release-12.svg' },
  { index: '13', title: 'ACHY BREAKY HEART', artist: 'WIATRA', year: '2026', streams: '1.2M', cover: '/covers/release-13.svg' },
  { index: '14', title: 'DON’T LET GO', artist: 'WIATRA', year: '2026', streams: '0.8M', cover: '/covers/release-14.svg' },
  { index: '15', title: 'WE ARE THE PEOPLE', artist: 'ZESUNA', year: '2025', cover: '/covers/release-15.svg' },
  { index: '16', title: 'TOP SPEED', artist: 'HYPERBAITER', year: '2025', cover: '/covers/release-16.svg' },
]

export type Stat = { value: string; label: string; metal: 'chrome' | 'platinum' | 'gold' }

export const STATS: Stat[] = [
  { value: '250M+', label: 'TOTAL STREAMS', metal: 'chrome' },
  { value: '47.4M', label: 'GUCCI FLIP FLOPS × CARELESS WHISPER — MOONSHINE', metal: 'platinum' },
  { value: '#1', label: 'VIRAL 50 — IN 13 COUNTRIES', metal: 'gold' },
  { value: '9', label: 'ARTISTS SIGNED', metal: 'chrome' },
  { value: '150+', label: 'RELEASES', metal: 'platinum' },
  { value: '∞', label: 'IN THE VOID', metal: 'gold' },
]

export type Artist = { name: string; role: string; thumb: string; url: string }

export const ARTISTS: Artist[] = [
  { name: 'Moonshine', role: 'ELECTRONIC', thumb: '/covers/artist-moonshine.svg', url: 'https://open.spotify.com/artist/2qP5HGgkMImWuXyCfMaF7w' },
  { name: 'arciana', role: 'POP', thumb: '/covers/artist-arciana.svg', url: 'https://open.spotify.com/artist/2h67sFNxd1hskTs2NGFpAM' },
  { name: 'wiatra', role: 'COVER', thumb: '/covers/artist-wiatra.svg', url: 'https://open.spotify.com/artist/6lFfwOIFlFgQ8EGIa0SyAB' },
  { name: 'VRIGGER', role: 'ELECTRONIC', thumb: '/covers/artist-vrigger.svg', url: 'https://open.spotify.com/artist/2bvgNc6kfNK2ped493nZ91' },
  { name: 'Hyperbaiter', role: 'ELECTRONIC', thumb: '/covers/artist-hyperbaiter.svg', url: 'https://open.spotify.com/artist/32RaA7TgQ8WDXFG7xYBxXE' },
  { name: 'Sukagawa', role: 'COVER', thumb: '/covers/artist-sukagawa.svg', url: 'https://open.spotify.com/artist/7DEbzuEu1oPlxpco55gfve' },
  { name: 'zesuna', role: 'POP', thumb: '/covers/artist-zesuna.svg', url: 'https://open.spotify.com/artist/5weTIBzHYXEFzDkYHNs0sH' },
  { name: 'Ian Daly', role: 'POP', thumb: '/covers/artist-iandaly.svg', url: 'https://open.spotify.com/artist/2eLPl0EITBELsMEkiQfqN1' },
  { name: 'yli', role: 'COVER', thumb: '/covers/artist-yli.svg', url: 'https://open.spotify.com/artist/44oN8fgK6dnVbFG3VI9kKU' },
]

export type ArchiveTile = { title: string; year: string; cover: string }

export const ARCHIVE: ArchiveTile[] = RELEASES.map((r) => ({ title: r.title, year: r.year, cover: r.cover }))

export type Social = { name: string; url: string }

export const SOCIALS: Social[] = [
  { name: 'SPOTIFY', url: 'https://open.spotify.com/user/31kq7loqe72pc7easphb7jff6joy' },
  { name: 'INSTAGRAM', url: 'https://instagram.com/ravexmg' },
]

export const MARQUEE_WORDS = ['RAVEX', 'ELECTRONIC', 'POP', 'COVER', '808', 'STAY RAVEX']

export const NAV_LINKS: { label: string; id: string }[] = [
  { label: 'RELEASES', id: 'releases' },
  { label: 'PROOF', id: 'achievements' },
  { label: 'ARTISTS', id: 'artists' },
  { label: 'CONTACT', id: 'contact' },
]

export const MANIFESTO =
  'We are the RAVEX ones. Born in the static between São Paulo baile and Memphis tape hiss. We press distortion into diamonds. We sign the sound your algorithm is afraid of.'

export const CONTACT_EMAIL = 'hello@ravexllc.com'
