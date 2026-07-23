'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroCanvas = dynamic(() => import('./hero-canvas'), {
  ssr: false,
  loading: () => null,
})

export function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="sr-only">RAVEX — Electronic, Pop &amp; Cover Label</h1>
      <div className="hero__canvas">
        <HeroCanvas />
      </div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <p className="hero__tag mono">ELECTRONIC ✦ POP ✦ COVER</p>
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
