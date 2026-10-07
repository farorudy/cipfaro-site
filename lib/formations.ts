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
  actionLabel?: string
}

export const formations: Formation[] = [
  {
    slug: 'tp-cip',
    title: 'Titre Professionnel Conseiller en Insertion Professionnelle',
    shortTitle: 'TP Conseiller en Insertion Professionnelle',
    level: 'Niveau 5 (Bac+2)',
    duration: '880 h (495 h centre + 385 h entreprise)',
    format: 'Présentiel & distanciel',
    category: 'Titre Professionnel',
    summary:
      "Accompagnez les publics dans leur parcours d'insertion sociale et professionnelle. Une formation certifiante et reconnue par l'État.",
    featured: true,
    href: '/formations/tp-cip',
  },
  {
    slug: 'tp-fpa', title: 'Titre professionnel Formateur professionnel d’adultes',
    shortTitle: 'TP Formateur professionnel d’adultes', level: 'Parcours à définir après positionnement',
    duration: 'Durée précisée dans le devis', format: 'Modalités à confirmer', category: 'Formation de formateurs',
    summary: 'Préparez votre projet pour concevoir, animer et évaluer des formations pour adultes. Un entretien permet de préciser votre parcours.',
    href: '/formations/tp-fpa', actionLabel: 'Découvrir le parcours FPA',
  },
  {
    slug: 'initiation-ia', title: 'Initiation à l’intelligence artificielle', shortTitle: 'Initiation à l’intelligence artificielle',
    level: 'Initiation', duration: '21 heures', format: 'Exercices accompagnés et tutorat', category: 'Numérique & IA',
    summary: 'Découvrez les usages de l’IA au quotidien et au travail : exercices accompagnés, tutorat et quiz corrigés. 590 € par participant. Dates et modalités confirmées avant inscription.',
    href: '/formations/initiation-ia', actionLabel: 'Consulter le programme IA',
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
  { code: 'CCP 1', title: "Accueillir pour analyser la demande des personnes et poser les bases d’un diagnostic partagé", items: [
    'Informer sur les ressources en insertion et les services dématérialisés',
    'Analyser la demande et poser les bases d’un diagnostic partagé',
    'Exercer une veille informationnelle, technique et prospective',
    'Travailler en équipe, en réseau et dans un cadre partenarial',
    'Réaliser le traitement administratif et les écrits professionnels numériques',
  ] },
  { code: 'CCP 2', title: "Accompagner les personnes dans leur parcours d’insertion sociale et professionnelle", items: [
    'Contractualiser et suivre le parcours d’insertion professionnelle',
    'Accompagner l’élaboration du projet professionnel',
    'Accompagner la réalisation des projets professionnels',
    'Concevoir des ateliers thématiques favorisant l’insertion',
    'Préparer et animer les ateliers thématiques',
    'Analyser sa pratique professionnelle',
  ] },
  { code: 'CCP 3', title: "Mettre en œuvre une offre de services auprès des employeurs pour favoriser l’insertion professionnelle", items: [
    'Déployer des actions de prospection avec les employeurs du territoire',
    'Apporter un appui technique en matière de recrutement',
    'Faciliter l’intégration et le maintien du salarié dans son environnement professionnel',
    'Inscrire ses actes professionnels dans une démarche de développement durable et inclusive',
  ] },
]
