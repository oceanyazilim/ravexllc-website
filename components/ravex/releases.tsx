'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Sparkle } from './sparkle'
import { RevealTitle } from './reveal'
import { RELEASES } from './data'

const EASE = [0.19, 1, 0.22, 1] as const

export function Releases() {
  return (
    <section className="releases" id="releases">
      <header className="section-head">
        <span className="section-head__index mono">01</span>
        <h2 className="section-head__title">
          <RevealTitle
            ariaLabel="LATEST RELEASES"
            lines={[{ text: 'LATEST' }, { text: 'RELEASES', outline: true }]}
          />
        </h2>
      </header>

      <ol className="releases__list">
        {RELEASES?.map?.((r, i) => (
          <li className="release" key={r?.index}>
            <motion.a
              className="release__link"
              href="#"
              data-cursor="hover"
              onClick={(e) => e.preventDefault()}
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.05 }}
            >
              <span className="release__index mono">{r?.index}</span>
              <img className="release__thumb" src={r?.cover} alt="" loading="lazy" />
              <span className="release__main">
                <Sparkle className="release__star" />
                <span className="release__title">{r?.title}</span>
              </span>
              <span className="release__artist mono">{r?.artist}</span>
              <span className="release__meta mono">
                <span>{r?.year}</span>
                {r?.streams ? <span>{r?.streams}</span> : null}
                {r?.tag ? <span className="release__tag">{r?.tag}</span> : null}
              </span>
            </motion.a>
          </li>
        ))}
      </ol>
    </section>
  )
}
