'use client'

import * as React from 'react'

type Concept = 'mono' | 'blood'

type Ctx = { concept: Concept; setConcept: (c: Concept) => void }

const ThemeConceptContext = React.createContext<Ctx>({ concept: 'mono', setConcept: () => {} })

export function ThemeConceptProvider({ children }: { children: React.ReactNode }) {
  const [concept, setConcept] = React.useState<Concept>('mono')

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', concept)
    }
  }, [concept])

  return (
    <ThemeConceptContext.Provider value={{ concept, setConcept }}>
      {children}
    </ThemeConceptContext.Provider>
  )
}

export function useThemeConcept() {
  return React.useContext(ThemeConceptContext)
}

export function ThemeToggle({ id }: { id?: string }) {
  const { concept, setConcept } = useThemeConcept()
  return (
    <button
      className="theme-toggle mono"
      id={id}
      data-cursor="hover"
      aria-label="Switch color concept"
      onClick={() => setConcept(concept === 'mono' ? 'blood' : 'mono')}
    >
      <span className={`theme-toggle__opt${concept === 'mono' ? ' is-on' : ''}`}>MONO</span>
      <span className="theme-toggle__sep">/</span>
      <span className={`theme-toggle__opt${concept === 'blood' ? ' is-on' : ''}`}>BLOOD</span>
    </button>
  )
}
