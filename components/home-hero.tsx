import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

const points = [
  'Organisme de formation déclaré en Guadeloupe',
  'Parcours certifiants reconnus par l’État',
  'Accompagnement individualisé vers l’emploi',
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Formation professionnelle · Guadeloupe
          </span>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Formez-vous. Accompagnez. Réussissez votre insertion.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            CIP FARO Rudy est votre organisme de formation aux Abymes. Nous
            préparons aux métiers de l&apos;insertion professionnelle et
            proposons des parcours certifiants adaptés à chaque projet.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pre-inscription"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Se pré-inscrire
            </Link>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Demander un devis
            </Link>
            <a
              href={site.moodle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Accéder aux formations en ligne
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-formation.png"
              alt="Apprenants et formateur en session de formation chez CIP FARO Rudy"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-5 shadow-md sm:block">
            <p className="font-heading text-3xl font-semibold text-primary">100%</p>
            <p className="mt-1 text-sm text-muted-foreground">
              centré sur votre réussite
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
