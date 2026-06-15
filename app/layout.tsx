import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'CIP FARO Rudy — Organisme de formation en Guadeloupe',
    template: '%s | CIP FARO Rudy',
  },
  description:
    "Organisme de formation professionnelle en Guadeloupe. Formez-vous au Titre Professionnel Conseiller en Insertion Professionnelle (CIP) et à nos parcours certifiants. Pré-inscription et devis en ligne.",
  generator: 'v0.app',
  keywords: [
    'CIP FARO Rudy',
    'formation Guadeloupe',
    'Conseiller en Insertion Professionnelle',
    'Titre Professionnel CIP',
    'organisme de formation',
    'Les Abymes',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0e6e7a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`light ${inter.variable} ${fraunces.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
