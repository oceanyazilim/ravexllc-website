'use client'

import * as React from 'react'

export function Cursor() {
  const dotRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    // Skip on touch / coarse pointers
    if (window.matchMedia?.('(pointer: coarse)')?.matches) return

    const dot = dotRef.current
    if (!dot) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let active = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      if (!active) {
        active = true
        dot.classList.add('is-active')
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const hover = target?.closest?.('[data-cursor="hover"]')
      dot.classList.toggle('is-hover', !!hover)
    }

    const onLeaveWindow = () => {
      active = false
      dot.classList.remove('is-active')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeaveWindow)
    }
  }, [])

  return <div className="cursor" ref={dotRef} aria-hidden="true" />
}
