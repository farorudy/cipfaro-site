import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Download, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nos domaines de formation',
  description:
    "Des parcours professionnalisants, certifiants et adaptes aux besoins du territoire : insertion, numerique, IA, bureautique, entrepreneuriat et formation de formateurs.",
}

const domains = [
  {
    title: 'Insertion professionnelle',
    description:
      "Formations orientees accompagnement, insertion, mediation et developpement de l'employabilite.",
    courses: [
      ['Conseiller en insertion professionnelle', 'https://farorudy.fr/course/view.php?id=2'],
      [
        "Facilitateur numerique de l'insertion professionnelle",
        'https://farorudy.fr/course/view.php?id=ID_FNIP',
      ],
      ['Mediateur Numerique', 'https://farorudy.fr/course/view.php?id=ID_MN'],
    ],
  },
  {
    title: 'Numerique & IA',
    description:
      "Montez en competence sur les outils numeriques, l'intelligence artificielle et la transformation digitale.",
    courses: [
      ["Decouverte de l'IA", 'https://farorudy.fr/course/view.php?id=ID_IA_DECOUVERTE'],
      [
        "Conseiller en mediation digitale et de l'IA",
        'https://farorudy.fr/course/view.php?id=ID_MEDIATION_IA',
      ],
      ['Microsoft Teams', 'https://farorudy.fr/course/view.php?id=ID_TEAMS'],
      [
        'Digitalisation des entreprises',
        'https://farorudy.fr/course/view.php?id=ID_DIGITALISATION',
      ],
      ['Marketing digital', 'https://farorudy.fr/course/view.php?id=ID_MARKETING'],
    ],
  },
  {
    title: 'Bureautique',
    description:
      'Developpez vos competences operationnelles en bureautique et outils de productivite.',
    courses: [
      ['Initiation a la bureautique', 'https://farorudy.fr/course/view.php?id=ID_BUREAUTIQUE'],
      ["Excel pour createurs d'entreprise", 'https://farorudy.fr/course/view.php?id=ID_EXCEL'],
      [
        'Preparation a la certification Microsoft Office Specialist',
        'https://farorudy.fr/course/view.php?id=ID_MOS',
      ],
    ],
  },
  {
    title: 'Entrepreneuriat',
    description:
      "Concevez, structurez et developpez votre projet d'entreprise avec une approche concrete.",
    courses: [
      ["Je deviens chef d'entreprise", 'https://farorudy.fr/course/view.php?id=ID_CHEF_ENTREPRISE'],
      [
        'Concevoir et developper un projet entrepreneurial',
        'https://farorudy.fr/course/view.php?id=ID_PROJET_ENTREPRENEURIAL',
      ],
      [
        'Action de formation pour createurs et repreneurs',
        'https://farorudy.fr/course/view.php?id=ID_CREATEURS_REPRENEURS',
      ],
      [
        "Preparation a la certification Entrepreneur de la TPE",
        'https://farorudy.fr/course/view.php?id=ID_TPE',
      ],
    ],
  },
  {
    title: 'Formation de formateurs',
    description:
      "Professionnalisez vos pratiques pedagogiques et d'animation de formation.",
    courses: [
      ['TP - Formateur professionnel d adultes', 'https://farorudy.fr/course/view.php?id=11'],
    ],
  },
  {
    title: 'Audiovisuel & cohesion',
    description:
      'Formations techniques et humaines pour renforcer les competences transversales et collaboratives.',
    courses: [
      [
        "Maitrisez les techniques de l'image et du son",
        'https://farorudy.fr/course/view.php?id=ID_IMAGE_SON',
      ],
      ["Cohesion d'equipes", 'https://farorudy.fr/course/view.php?id=ID_COHESION'],
      ['Sauveteur Secouriste du Travail', 'https://farorudy.fr/course/view.php?id=ID_SST'],
    ],
  },
] as const

export default function FormationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nos domaines de formation"
        title="Des parcours professionnalisants, certifiants et adaptes au territoire"
        description="Insertion professionnelle, numerique, IA, bureautique, entrepreneuriat, formation de formateurs et competences transversales : nos parcours repondent aux besoins des stagiaires, entreprises et partenaires."
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
                Organisme certifie Qualiopi
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
                CIP RUDY FARO est certifie pour les actions de formation.
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Cette certification atteste de la qualite du processus mis en
                oeuvre pour le developpement des competences.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                Validite : du 31/03/2025 au 30/03/2028
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
                Telecharger le certificat
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
