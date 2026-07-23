'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ARCHIVE } from './data'

const EASE = [0.19, 1, 0.22, 1] as const

export function Archive() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [maxX, setMaxX] = React.useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  React.useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track || typeof window === 'undefined') return
      const distance = track.scrollWidth - window.innerWidth
      setMaxX(distance > 0 ? distance + 32 : 0)
    }
    measure()
    window.addEventListener('resize', measure)
    const t = setTimeout(measure, 400)
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(t)
    }
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX])

  return (
    <section className="archive" id="archive" ref={sectionRef}>
      <h2 className="sr-only">Archive — selected covers</h2>
      <div className="archive__sticky">
        <span className="archive__label mono">ARCHIVE ✦ MMXXIV — MMXXVI</span>
        <motion.div className="archive__track" ref={trackRef} style={{ x }}>
          {ARCHIVE?.map?.((tile, i) => (
            <motion.figure
              className="archive__tile"
              key={i}
              data-cursor="hover"
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.06 }}
            >
              <img src={tile?.cover} alt={`${tile?.title} cover`} loading="lazy" />
              <figcaption className="mono">
                <span>{tile?.title}</span>
                <span>{tile?.year}</span>
              </figcaption>
            </motion.figure>
          ))}
          <div className="archive__tile archive__tile--end">
            <span>
              MORE
              <br />
              IN THE
              <br />
              VOID
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
