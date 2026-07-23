'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Sparkle } from './sparkle'
import { ThemeToggle } from './theme-concept'
import { NAV_LINKS, SOCIALS } from './data'

export function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="footer">
      <div className="footer__grid mono">
        <nav className="footer__col" aria-label="Footer">
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
        <ul className="footer__col">
          {SOCIALS?.map?.((s) => (
            <li key={s?.name}>
              <a href={s?.url} data-cursor="hover" target="_blank" rel="noopener">
                {s?.name} ↗
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__col footer__col--meta">
          <span>© MMXXVI RAVEX RECORDS</span>
          <ThemeToggle id="theme-toggle-footer" />
        </div>
      </div>
      <div className="footer__mark" aria-hidden="true">
        <motion.span
          className="footer__mark-row"
          initial={{ y: '46%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          STAY R<Sparkle className="footer__spark" />VEX
        </motion.span>
      </div>
    </footer>
  )
}
