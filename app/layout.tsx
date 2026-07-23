import type { Metadata } from 'next'
import './globals.css'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: process.env.NEXTAUTH_URL ? new URL(process.env.NEXTAUTH_URL) : undefined,
  title: 'RAVEX — Electronic, Pop & Cover Label',
  description:
    'RAVEX is an independent electronic, pop & cover label. Sound of the underground. Stay RAVEX.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'RAVEX — Sound of the Underground',
    description: 'Independent electronic, pop & cover label.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mono" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
      </head>
      <body suppressHydrationWarning>
        {children}
        <ChunkLoadErrorHandler />
      </body>
    </html>
  )
}
