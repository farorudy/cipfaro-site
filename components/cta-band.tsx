import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            Prêt à construire votre parcours de formation&nbsp;?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
            Pré-inscrivez-vous en quelques minutes ou demandez un devis adapté à
            votre projet. Notre équipe vous accompagne à chaque étape.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pre-inscription"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Se pré-inscrire
          </Link>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Demander un devis
          </Link>
          <a
            href={site.moodle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Se connecter à la plateforme
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
