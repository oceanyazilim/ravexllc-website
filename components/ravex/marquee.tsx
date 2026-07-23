'use client'

import * as React from 'react'
import { Sparkle } from './sparkle'
import { MARQUEE_WORDS } from './data'

function Chunk() {
  return (
    <span className="marquee__chunk">
      {MARQUEE_WORDS?.map?.((w, i) => (
        <React.Fragment key={i}>
          {w}
          <Sparkle />
        </React.Fragment>
      ))}
    </span>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Chunk />
        <Chunk />
      </div>
      <div className="marquee__track marquee__track--alt">
        <Chunk />
        <Chunk />
      </div>
    </div>
  )
}
