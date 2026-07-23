'use client'

import * as React from 'react'
import type Lenis from 'lenis'
import { ThemeConceptProvider } from './theme-concept'
import { Cursor } from './cursor'
import { Nav } from './nav'
import { Hero } from './hero'
import { Marquee } from './marquee'
import { Releases } from './releases'
import { Proof } from './proof'
import { Roster } from './roster'
import { Manifesto } from './manifesto'
import { Archive } from './archive'
import { Contact } from './contact'
import { Footer } from './footer'

export function Landing() {
  const lenisRef = React.useRef<Lenis | null>(null)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduce) return

    let lenis: Lenis | null = null
    let raf = 0
    let cancelled = false

    import('lenis')
      .then(({ default: LenisCtor }) => {
        if (cancelled) return
        lenis = new LenisCtor({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        })
        lenisRef.current = lenis
        const loop = (time: number) => {
          lenis?.raf(time)
          raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)
      })
      .catch(() => {
        lenis = null
      })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      try {
        lenis?.destroy()
      } catch {}
      lenisRef.current = null
    }
  }, [])

  const handleNavigate = React.useCallback((id: string) => {
    if (typeof document === 'undefined') return
    if (id === 'top') {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.2 })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -60, duration: 1.2 })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <ThemeConceptProvider>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Nav onNavigate={handleNavigate} />
      <main id="top">
        <Hero />
        <Marquee />
        <Releases />
        <Proof />
        <Roster />
        <Manifesto />
        <Archive />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </ThemeConceptProvider>
  )
}
