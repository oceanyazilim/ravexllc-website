'use client'

import * as React from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { STATS, Stat } from './data'

function StatCard({
  stat,
  index,
  total,
  progress,
}: {
  stat: Stat
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const band = 1 / total
  const start = index * band
  const end = (index + 1) * band
  const isFirst = index === 0
  const isLast = index === total - 1

  const inA = isFirst ? -1 : start
  const inB = start + band * 0.18
  const inC = end - band * 0.18
  const inD = isLast ? 2 : end

  const opacity = useTransform(progress, [inA, inB, inC, inD], [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0])
  const y = useTransform(progress, [start, end], [70, -70])
  const scale = useTransform(progress, [inA, inB, inC, inD], [0.86, 1, 1, 1.12])

  return (
    <motion.div className="achv-card" style={{ opacity }} aria-hidden="true">
      <motion.div style={{ y, scale }}>
        <div className={`achv-value metal-${stat?.metal}`}>{stat?.value}</div>
        <div className="achv-label">{stat?.label}</div>
      </motion.div>
    </motion.div>
  )
}

export function Proof() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const total = STATS?.length ?? 1

  return (
    <section className="achievements" id="achievements" ref={ref}>
      <h2 className="sr-only">Proof — label achievements</h2>
      <ul className="sr-only">
        {STATS?.map?.((s) => (
          <li key={s?.label}>{`${s?.value} — ${s?.label}`}</li>
        ))}
      </ul>
      <div className="achievements__sticky">
        <header className="achievements__head">
          <span className="section-head__index mono">02 — PROOF</span>
        </header>
        <div className="achievements__stage">
          {STATS?.map?.((s, i) => (
            <StatCard key={s?.label} stat={s} index={i} total={total} progress={scrollYProgress} />
          ))}
        </div>
        <div className="achievements__hint mono" aria-hidden="true">
          SCROLL ✦ PROOF
        </div>
      </div>
    </section>
  )
}
