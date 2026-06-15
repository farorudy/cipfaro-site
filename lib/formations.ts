export type Formation = {
  slug: string
  title: string
  shortTitle: string
  level: string
  duration: string
  format: string
  category: string
  summary: string
  featured?: boolean
  href?: string
}

export const formations: Formation[] = [
  {
    slug: 'tp-cip',
    title: 'Titre Professionnel Conseiller en Insertion Professionnelle',
    shortTitle: 'TP Conseiller en Insertion Professionnelle',
    level: 'Niveau 5 (Bac+2)',
    duration: '7 à 12 mois',
    format: 'Présentiel & distanciel',
    category: 'Titre Professionnel',
    summary:
      "Accompagnez les publics dans leur parcours d'insertion sociale et professionnelle. Une formation certifiante et reconnue par l'État.",
    featured: true,
    href: '/formations/tp-cip',
  },
  {
    slug: 'bureautique',
    title: 'Bureautique & outils numériques professionnels',
    shortTitle: 'Bureautique & numérique',
    level: 'Tous niveaux',
    duration: '35 à 70 h',
    format: 'Présentiel & distanciel',
    category: 'Compétences numériques',
    summary:
      'Maîtrisez les outils essentiels du quotidien professionnel : traitement de texte, tableurs, messagerie et collaboration en ligne.',
  },
  {
    slug: 'techniques-recherche-emploi',
    title: "Techniques de recherche d'emploi",
    shortTitle: "Techniques de recherche d'emploi",
    level: 'Tous niveaux',
    duration: '21 à 35 h',
    format: 'Présentiel',
    category: 'Insertion',
    summary:
      "CV, lettre de motivation, entretien, réseau : structurez une démarche de recherche d'emploi efficace et ciblée.",
  },
  {
    slug: 'accompagnement-vae',
    title: "Accompagnement à la VAE",
    shortTitle: 'Accompagnement VAE',
    level: 'Tous niveaux',
    duration: 'Sur mesure',
    format: 'Présentiel & distanciel',
    category: 'Certification',
    summary:
      "Valorisez votre expérience pour obtenir une certification grâce à un accompagnement personnalisé tout au long de votre parcours VAE.",
  },
  {
    slug: 'preparation-concours',
    title: 'Préparation aux concours du secteur social',
    shortTitle: 'Préparation aux concours',
    level: 'Tous niveaux',
    duration: '70 à 140 h',
    format: 'Présentiel',
    category: 'Préparation',
    summary:
      'Préparez les épreuves écrites et orales des concours du secteur social et médico-social avec un suivi individualisé.',
  },
  {
    slug: 'formation-formateurs',
    title: 'Formation de formateurs',
    shortTitle: 'Formation de formateurs',
    level: 'Professionnels',
    duration: '35 à 70 h',
    format: 'Présentiel & distanciel',
    category: 'Pédagogie',
    summary:
      'Concevez, animez et évaluez des actions de formation pour adultes en vous appuyant sur des méthodes pédagogiques actives.',
  },
]

export const tpCipBlocs = [
  {
    code: 'CCP 1',
    title: "Accueillir pour analyser la demande et poser un diagnostic",
    items: [
      'Recevoir la personne et identifier ses besoins',
      'Analyser la demande et la situation de la personne',
      'Coopérer au sein du réseau de partenaires',
    ],
  },
  {
    code: 'CCP 2',
    title: "Accompagner les personnes dans leur parcours d'insertion",
    items: [
      'Accompagner la personne dans la construction de son parcours',
      "Mettre en œuvre une démarche de placement vers l'emploi",
      "Faciliter l'intégration et le maintien dans l'emploi",
    ],
  },
  {
    code: 'CCP 3',
    title: "Mettre en œuvre une offre de services auprès des employeurs",
    items: [
      'Déployer des actions de prospection auprès des employeurs',
      'Apporter un appui technique aux employeurs',
      'Concevoir et animer des ateliers thématiques',
    ],
  },
]
