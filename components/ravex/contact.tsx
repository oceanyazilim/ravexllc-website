'use client'

import * as React from 'react'
import { SOCIALS, CONTACT_EMAIL } from './data'

export function Contact() {
  const mailto = `mailto:${CONTACT_EMAIL.toLowerCase()}?subject=RAVEX%20Demo%20Submission`
  return (
    <section className="contact" id="contact">
      <h2 className="sr-only">Send us an email for demos</h2>
      <div className="contact__glow" aria-hidden="true" />
      <span className="section-head__index mono">05 — DEMOS</span>
      <a className="contact__cta" data-cursor="hover" href={mailto}>
        <span className="contact__line">FOR DEMOS</span>
        <span className="contact__line contact__line--outline">SEND US</span>
        <span className="contact__line">EMAIL</span>
      </a>
      <p className="contact__mail mono">
        <a href={mailto} data-cursor="hover">
          <span suppressHydrationWarning>{CONTACT_EMAIL}</span>
        </a>
      </p>
      <ul className="contact__socials mono">
        {SOCIALS?.map?.((s) => (
          <li key={s?.name}>
            <a href={s?.url} data-cursor="hover" target="_blank" rel="noopener">
              {s?.name} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
