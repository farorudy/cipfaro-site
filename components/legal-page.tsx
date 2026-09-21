import type { ReactNode } from 'react'
import { PageHero } from '@/components/page-hero'

export function LegalPage({ title, updated = '20 septembre 2026', children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <main>
      <PageHero eyebrow="Informations" title={title} description={`Dernière mise à jour : ${updated}`} />
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Document de référence mis à jour pour information. Avant toute publication définitive, ce texte doit être relu et validé par un conseiller juridique ou un accompagnement de soutien aux entreprises, afin d&apos;aligner le contenu avec le cadre contractuel réel de l&apos;organisme.
          </div>
        </div>
        <div className="prose prose-slate mx-auto max-w-4xl px-4 pb-14 leading-relaxed text-muted-foreground sm:px-6 [&_a]:text-primary [&_a]:underline [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:mt-2 [&_p]:mt-4">
          {children}
        </div>
      </section>
    </main>
  )
}
