import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PreInscriptionForm } from '@/components/pre-inscription-form'

export const metadata: Metadata = {
  title: 'Pré-inscription',
  description:
    'Pré-inscrivez-vous en ligne aux formations de CIP FARO Rudy en Guadeloupe. Démarche simple et sans engagement.',
}

const steps = [
  'Complétez le formulaire de pré-inscription',
  'Un conseiller étudie votre demande',
  'Entretien de positionnement et de financement',
  'Confirmation de votre inscription',
]

export default function PreInscriptionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pré-inscription"
        title="Réservez votre place en quelques minutes"
        description="La pré-inscription est gratuite et sans engagement. Elle nous permet d'étudier votre projet et de vous accompagner dans le choix de votre formation et de son financement."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Formulaire de pré-inscription
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Les champs marqués d&apos;un astérisque (*) sont obligatoires.
              </p>
              <div className="mt-6">
                <PreInscriptionForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Comment ça se passe&nbsp;?
              </h2>
              <ol className="mt-5 flex flex-col gap-4">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 border-t border-border pt-6">
                <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  Accessibilité : nos formations sont ouvertes aux personnes en
                  situation de handicap. Contactez notre référent pour un parcours
                  adapté.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
