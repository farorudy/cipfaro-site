import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Download, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nos domaines de formation',
  description:
    "Des parcours professionnalisants, certifiants et adaptés aux besoins du territoire : insertion, numérique, IA, bureautique, entrepreneuriat et formation de formateurs.",
}

const domains = [
  {
    title: 'Insertion professionnelle',
    description:
      "Formations orientées accompagnement, insertion, médiation et développement de l'employabilité.",
    courses: [
      ['Conseiller en insertion professionnelle', 'https://farorudy.fr/course/view.php?id=2'],
      [
        "Facilitateur numérique de l'insertion professionnelle",
        '/contact',
      ],
      ['Médiateur numérique', '/contact'],
    ],
  },
  {
    title: 'Numérique & IA',
    description:
      "Montez en compétence sur les outils numériques, l'intelligence artificielle et la transformation digitale.",
    courses: [
      ["Découverte de l'IA", '/contact'],
      [
        "Conseiller en médiation digitale et de l'IA",
        '/contact',
      ],
      ['Microsoft Teams', '/contact'],
      [
        'Digitalisation des entreprises',
        '/contact',
      ],
      ['Marketing digital', '/contact'],
    ],
  },
  {
    title: 'Bureautique',
    description:
      'Développez vos compétences opérationnelles en bureautique et outils de productivité.',
    courses: [
      ['Initiation à la bureautique', '/contact'],
      ["Excel pour créateurs d'entreprise", '/contact'],
      [
        'Préparation à la certification Microsoft Office Specialist',
        '/contact',
      ],
    ],
  },
  {
    title: 'Entrepreneuriat',
    description:
      "Concevez, structurez et developpez votre projet d'entreprise avec une approche concrete.",
    courses: [
      ["Je deviens chef d'entreprise", '/contact'],
      [
        'Concevoir et developper un projet entrepreneurial',
        '/contact',
      ],
      [
        'Action de formation pour createurs et repreneurs',
        '/contact',
      ],
      [
        "Préparation à la certification Entrepreneur de la TPE",
        '/contact',
      ],
    ],
  },
  {
    title: 'Formation de formateurs',
    description:
      "Professionnalisez vos pratiques pédagogiques et d'animation de formation.",
    courses: [
      ["TP – Formateur professionnel d'adultes", 'https://farorudy.fr/course/view.php?id=11'],
    ],
  },
  {
    title: 'Audiovisuel & cohésion',
    description:
      'Formations techniques et humaines pour renforcer les compétences transversales et collaboratives.',
    courses: [
      [
        "Maîtrisez les techniques de l'image et du son",
        '/contact',
      ],
      ["Cohésion d'équipes", '/contact'],
      ['Sauveteur secouriste du travail', '/contact'],
    ],
  },
] as const

export default function FormationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nos domaines de formation"
        title="Des parcours professionnalisants, certifiants et adaptés au territoire"
        description="Insertion professionnelle, numérique, IA, bureautique, entrepreneuriat, formation de formateurs et compétences transversales : nos parcours répondent aux besoins des stagiaires, entreprises et partenaires."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {domains.map((domain) => (
              <article
                key={domain.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {domain.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {domain.description}
                </p>
                <div className="mt-6 grid gap-3">
                  {domain.courses.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-secondary/35 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-accent/10"
                    >
                      <span>{label}</span>
                      <ArrowRight
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/35">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Organisme certifié Qualiopi
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
                C.I.P FARO est certifié pour les actions de formation.
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Cette certification atteste de la qualité du processus mis en
                œuvre pour le développement des compétences.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                Validité : du 31/03/2025 au 30/03/2028
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
