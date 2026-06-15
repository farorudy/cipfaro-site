import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Building2, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez CIP FARO Rudy, organisme de formation aux Abymes en Guadeloupe. Adresse, téléphone, email et formulaire de contact.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet de formation"
        description="Une question sur nos formations, le financement ou votre inscription ? Notre équipe vous répond avec plaisir."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Building2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    {site.legalName}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">SIRET&nbsp;: {site.siret}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-base font-semibold text-foreground">Adresse</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href={site.phoneHref} className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-base font-semibold text-foreground">Téléphone</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{site.phone}</p>
                  </div>
                </a>
                <a href={site.emailHref} className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-base font-semibold text-foreground">Email</h2>
                    <p className="mt-1 break-all text-sm text-muted-foreground">{site.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/campus-guadeloupe.png"
                alt="Centre de formation CIP FARO Rudy en Guadeloupe"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <a
              href={site.moodle}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Se connecter à la plateforme
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Envoyez-nous un message
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Les champs marqués d&apos;un astérisque (*) sont obligatoires.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
