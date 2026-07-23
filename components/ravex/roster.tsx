'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { RevealTitle } from './reveal'
import { ARTISTS } from './data'

const EASE = [0.19, 1, 0.22, 1] as const

export function Roster() {
  return (
    <section className="artists" id="artists">
      <header className="section-head">
        <span className="section-head__index mono">03</span>
        <h2 className="section-head__title">
          <RevealTitle ariaLabel="THE ROSTER" lines={[{ text: 'THE' }, { text: 'ROSTER', outline: true }]} />
        </h2>
      </header>

      <div className="artists__list">
        {ARTISTS?.map?.((a, i) => {
          const fromLeft = i % 2 === 0
          return (
            <motion.div
              className="artist"
              key={a?.name}
              initial={{ opacity: 0.15, x: fromLeft ? '-8%' : '8%' }}
              whileInView={{ opacity: 1, x: '0%' }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <img className="artist__thumb" src={a?.thumb} alt="" loading="lazy" />
              <a href={a?.url} data-cursor="hover" target="_blank" rel="noopener">
                <span className="artist__name">{a?.name}</span>
              </a>
              <span className="artist__role mono">{a?.role}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
