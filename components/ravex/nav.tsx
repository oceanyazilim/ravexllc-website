'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Sparkle } from './sparkle'
import { ThemeToggle } from './theme-concept'
import { NAV_LINKS } from './data'

export function Nav({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <motion.header
      className="nav"
      id="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
    >
      <a
        className="nav__logo"
        href="#top"
        data-cursor="hover"
        aria-label="RAVEX — home"
        onClick={(e) => {
          e.preventDefault()
          onNavigate('top')
        }}
      >
        <Sparkle className="nav__star" />
        <span>RAVEX</span>
      </a>
      <nav className="nav__links mono" aria-label="Main">
        {NAV_LINKS?.map?.((l) => (
          <a
            key={l?.id}
            href={`#${l?.id}`}
            data-cursor="hover"
            onClick={(e) => {
              e.preventDefault()
              onNavigate(l?.id)
            }}
          >
            {l?.label}
          </a>
        ))}
      </nav>
      <ThemeToggle id="theme-toggle" />
    </motion.header>
  )
}
