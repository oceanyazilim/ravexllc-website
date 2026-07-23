import * as React from 'react'

const PATH =
  'M50 0 C54 33 67 46 100 50 C67 54 54 67 50 100 C46 67 33 54 0 50 C33 46 46 33 50 0 Z'

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d={PATH} />
    </svg>
  )
}

export const SPARKLE_PATH = PATH
