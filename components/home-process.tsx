const steps = [
  {
    n: '01',
    title: 'Prise de contact',
    text: 'Échangez avec notre équipe pour définir votre projet, vos objectifs et le financement possible.',
  },
  {
    n: '02',
    title: 'Pré-inscription',
    text: 'Complétez votre pré-inscription en ligne. Nous étudions votre candidature et votre positionnement.',
  },
  {
    n: '03',
    title: 'Formation',
    text: 'Suivez votre parcours en présentiel et à distance, avec un accompagnement pédagogique continu.',
  },
  {
    n: '04',
    title: 'Certification & emploi',
    text: 'Validez votre certification et bénéficiez d’un appui pour votre insertion professionnelle.',
  },
]

export function HomeProcess() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Votre parcours
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            De la première prise de contact à l&apos;emploi
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-6">
              <span className="font-heading text-3xl font-semibold text-accent">
                {s.n}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
