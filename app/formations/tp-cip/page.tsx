import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  BarChart3,
  MonitorSmartphone,
  Award,
  CheckCircle2,
  Briefcase,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { tpCipBlocs } from '@/lib/formations'

export const metadata: Metadata = {
  title: 'TP Conseiller en Insertion Professionnelle (CIP)',
  description:
    "Préparez le Titre Professionnel Conseiller en Insertion Professionnelle (niveau 5, Bac+2) avec CIP FARO Rudy en Guadeloupe. Programme, blocs de compétences, débouchés et inscription.",
}

const infos = [
  { icon: Award, label: 'Certification', value: 'Titre Professionnel — Niveau 5 (Bac+2)' },
  { icon: Clock, label: 'Durée', value: '7 à 12 mois selon le parcours' },
  { icon: BarChart3, label: 'Prérequis', value: 'Niveau Bac ou expérience équivalente' },
  { icon: MonitorSmartphone, label: 'Modalités', value: 'Présentiel et distanciel (Moodle)' },
]

const debouches = [
  'Conseiller(ère) en insertion professionnelle',
  'Chargé(e) d’accompagnement social et professionnel',
  'Conseiller(ère) emploi / référent(e) de parcours',
  'Chargé(e) de relations entreprises',
  'Accompagnateur(rice) à l’emploi en structure d’insertion',
]

const publics = [
  'Demandeurs d’emploi en reconversion',
  'Salariés du secteur social et médico-social',
  'Personnes souhaitant exercer un métier de l’accompagnement',
]

export default function TpCipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Titre Professionnel"
        title="Conseiller en Insertion Professionnelle (CIP)"
        description="Un métier au cœur de l'accompagnement humain : aidez les publics à construire et réussir leur parcours d'insertion sociale et professionnelle."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/conseiller-insertion.png"
                alt="Conseiller en insertion professionnelle accompagnant une personne en recherche d'emploi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
              Présentation de la formation
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Le conseiller en insertion professionnelle accompagne des personnes
              rencontrant des difficultés d&apos;insertion ou de reconversion. Il
              analyse leur situation, co-construit un parcours adapté et facilite
              l&apos;accès à l&apos;emploi ou à la formation, tout en développant
              des relations avec les employeurs du territoire.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cette formation certifiante alterne apports théoriques, mises en
              situation pratiques et période en entreprise, pour une montée en
              compétences progressive et opérationnelle.
            </p>

            <h2 className="mt-12 font-heading text-2xl font-semibold text-foreground">
              Programme &amp; blocs de compétences
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {tpCipBlocs.map((bloc) => (
                <div key={bloc.code} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {bloc.code}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {bloc.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {bloc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-heading text-2xl font-semibold text-foreground">
              Débouchés professionnels
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {debouches.map((d) => (
                <li key={d} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4 text-sm text-foreground">
                  <Briefcase className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  Informations clés
                </h2>
                <dl className="mt-4 flex flex-col gap-4">
                  {infos.map((info) => (
                    <div key={info.label} className="flex gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <info.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {info.label}
                        </dt>
                        <dd className="text-sm font-medium text-foreground">{info.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/pre-inscription"
                    className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Se pré-inscrire
                  </Link>
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  Public concerné
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {publics.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
