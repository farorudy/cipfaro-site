import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const fieldClass =
  'mt-1.5 block w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

export function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
    </div>
  )
}

export function FormSuccess({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl border border-primary/30 bg-secondary/50 p-8 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>
    </div>
  )
}

export function PrivacyConsent({ id = 'consent' }: { id?: string }) {
  return (
    <label htmlFor={id} className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <input id={id} name="consent" type="checkbox" required className="mt-1 size-4 rounded border-input accent-[var(--primary)]" />
      <span>
        J&apos;accepte l&apos;utilisation de mes informations pour traiter ma demande,
        conformément à la <a href="/confidentialite" className="font-medium text-primary underline">politique de confidentialité</a>.
      </span>
    </label>
  )
}

export { cn }
