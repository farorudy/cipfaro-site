import { Users, Award, MapPin, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Formations certifiantes',
    text: "Des parcours reconnus par l'État, dont le Titre Professionnel Conseiller en Insertion Professionnelle (niveau 5).",
  },
  {
    icon: Users,
    title: 'Accompagnement humain',
    text: 'Un suivi individualisé du premier contact à la certification, avec des formateurs experts de terrain.',
  },
  {
    icon: MapPin,
    title: 'Ancré en Guadeloupe',
    text: 'Une offre pensée pour les réalités du territoire et les besoins des employeurs locaux.',
  },
  {
    icon: HeartHandshake,
    title: 'Tourné vers l’emploi',
    text: 'Des méthodes actives orientées vers une insertion durable et la réussite professionnelle.',
  },
]

export function HomeWhy() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Pourquoi CIP FARO Rudy
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un organisme de formation à taille humaine, exigeant et bienveillant
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
