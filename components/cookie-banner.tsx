'use client'

import { useState } from 'react'

const STORAGE_KEY = 'cipfaro-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'true') return false
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(STORAGE_KEY) !== 'accepted'
  })

  const accept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'accepted')
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Ce site peut utiliser des cookies techniques et, si vous l&apos;activez, des outils de mesure d&apos;audience
          pour améliorer l&apos;expérience. Vous pouvez accepter ou refuser les cookies non essentiels.
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Accepter
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Continuer sans tracker
          </button>
        </div>
      </div>
    </div>
  )
}
