export const domains = [
  {
    title: 'Insertion professionnelle',
    description:
      "Formations orientées accompagnement, insertion, médiation et développement de l'employabilité.",
    courses: [
      ['Conseiller en insertion professionnelle', '/formations/tp-cip'],
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
      ["Initiation à l’intelligence artificielle", "https://www.cipfaro-formation.org/initiation-ia"],
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

export const formationChoices = domains.flatMap(domain => domain.courses.map(([label]) => ({ slug: label, shortTitle: label })))
