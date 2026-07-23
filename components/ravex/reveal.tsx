'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

const EASE = [0.19, 1, 0.22, 1] as const

type Line = { text: React.ReactNode; outline?: boolean }

export function RevealTitle({
  lines,
  ariaLabel,
  align = 'start',
}: {
  lines: Line[]
  ariaLabel: string
  align?: 'start' | 'center'
}) {
  return (
    <span aria-label={ariaLabel} style={{ display: 'block' }}>
      {lines?.map?.((line, i) => (
        <span
          key={i}
          className="line-mask-mask"
          aria-hidden="true"
          style={{ textAlign: align }}
        >
          <motion.span
            className="line-mask"
            style={{ textAlign: align }}
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
          >
            {line?.outline ? <em>{line?.text}</em> : line?.text}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
