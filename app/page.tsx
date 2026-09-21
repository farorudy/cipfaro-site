import Link from 'next/link'
import { ArrowRight, CheckCircle2, Download, ExternalLink } from 'lucide-react'
import { HomeHero } from '@/components/home-hero'
import { HomeWhy } from '@/components/home-why'
import { HomeProcess } from '@/components/home-process'
import { FormationCard } from '@/components/formation-card'
import { CtaBand } from '@/components/cta-band'
import { formations } from '@/lib/formations'
import { site } from '@/lib/site'

export default function Page() {
  const highlighted = formations.slice(0, 3)

  return (
    <main>
      <HomeHero />
      <HomeWhy />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Nos formations
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Des parcours pour se qualifier et accompagner les autres
              </h2>
            </div>
            <Link
              href="/formations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Voir toutes les formations
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlighted.map((f) => (
              <FormationCard key={f.slug} formation={f} />
            ))}
          </div>
        </div>
      </section>

      <HomeProcess />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Certification
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Organisme certifié Qualiopi
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              C.I.P FARO est certifié pour les actions de formation. Cette
              certification atteste de la qualité du processus mis en œuvre
              pour le développement des compétences.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              Validité : du 31/03/2025 au 30/03/2028
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Consulter la fiche ICPF
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
              <a
                href={site.certificateDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Télécharger le certificat
                <Download className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm">
            <object
              className="h-[520px] w-full rounded-xl bg-background"
              data={site.certificatePdf}
              type="application/pdf"
              aria-label="Certificat officiel CIP FARO Rudy"
            >
              <a
                href={site.certificateDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-80 items-center justify-center rounded-xl bg-secondary p-8 text-center font-semibold text-primary"
              >
                Ouvrir le certificat officiel
              </a>
            </object>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
