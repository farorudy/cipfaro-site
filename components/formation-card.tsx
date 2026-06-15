import Link from 'next/link'
import { ArrowRight, Clock, BarChart3, MonitorSmartphone } from 'lucide-react'
import type { Formation } from '@/lib/formations'

export function FormationCard({ formation }: { formation: Formation }) {
  const content = (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
        {formation.category}
      </span>
      <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-foreground">
        {formation.shortTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {formation.summary}
      </p>

      <dl className="mt-5 grid grid-cols-1 gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <dt className="sr-only">Niveau</dt>
          <dd>{formation.level}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <dt className="sr-only">Durée</dt>
          <dd>{formation.duration}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MonitorSmartphone className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <dt className="sr-only">Format</dt>
          <dd>{formation.format}</dd>
        </div>
      </dl>

      {formation.href ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          En savoir plus
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      ) : (
        <Link
          href="/devis"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Demander un devis
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </article>
  )

  if (formation.href) {
    return (
      <Link href={formation.href} className="block h-full">
        {content}
      </Link>
    )
  }
  return content
}
