'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { RevealTitle } from './reveal'
import { MANIFESTO } from './data'

const EASE = [0.19, 1, 0.22, 1] as const

export function Manifesto() {
  const words = React.useMemo(() => MANIFESTO?.split?.(' ') ?? [], [])
  return (
    <section className="manifesto" id="manifesto">
      <div className="video-slot manifesto__video" aria-hidden="true" />
      <div className="manifesto__glow" aria-hidden="true" />
      <div className="manifesto__inner">
        <h2 className="sr-only">Manifesto</h2>
        <span className="section-head__index mono">04 — MANIFESTO</span>
        <p className="manifesto__text" aria-label={MANIFESTO}>
          {words?.map?.((w, i) => (
            <React.Fragment key={i}>
              <motion.span
                className="word"
                aria-hidden="true"
                initial={{ opacity: 0.14 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.5, ease: 'linear', delay: i * 0.04 }}
              >
                {w}
              </motion.span>{' '}
            </React.Fragment>
          ))}
        </p>
        <p className="manifesto__punch">
          <RevealTitle ariaLabel="STAY RAVEX." lines={[{ text: 'STAY RAVEX.' }]} />
        </p>
      </div>
    </section>
  )
}
