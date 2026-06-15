import type { Metadata } from 'next'
import { Phone, Mail, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { DevisForm } from '@/components/devis-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Demander un devis',
  description:
    'Demandez un devis personnalisé pour une formation CIP FARO Rudy, en individuel ou pour votre organisation, en Guadeloupe.',
}

export default function DevisPage() {
  return (
    <main>
      <PageHero
        eyebrow="Devis"
        title="Recevez une proposition adaptée à votre projet"
        description="Que vous soyez un particulier, une entreprise ou une structure de l'insertion, nous établissons un devis sur mesure tenant compte de vos objectifs et de vos modalités de financement."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Formulaire de demande de devis
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Les champs marqués d&apos;un astérisque (*) sont obligatoires.
              </p>
              <div className="mt-6">
                <DevisForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Besoin d&apos;un échange direct&nbsp;?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Notre équipe est disponible pour étudier votre besoin et vous
                orienter vers la solution la plus adaptée.
              </p>
              <ul className="mt-5 flex flex-col gap-4 text-sm">
                <li>
                  <a href={site.phoneHref} className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-card text-primary">
                      <Phone className="size-4" aria-hidden="true" />
                    </span>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-card text-primary">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-card text-primary">
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  Réponse sous 48&nbsp;h ouvrées
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
