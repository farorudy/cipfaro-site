import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Qualité et résultats' }

export default function QualitePage() {
  return <LegalPage title="Qualité et résultats">
    <p>C.I.P FARO est certifié Qualiopi pour la catégorie « actions de formation ». La certification est valide du 31 mars 2025 au 30 mars 2028.</p>
    <h2>Indicateurs 2026</h2>
    <p>Les données consolidées ne sont pas encore disponibles ou ne sont pas suffisamment significatives en raison de l’effectif concerné. La première publication interviendra à l’issue de la session 2026, sans publication de taux lorsque l’effectif ne permet pas une lecture fiable.</p>
    <p>Les indicateurs publiés porteront sur la satisfaction, l’assiduité, les abandons, la présentation à l’examen, la réussite totale et par CCP, ainsi que l’insertion professionnelle à 3 ou 6 mois. Le nombre de bénéficiaires sera indiqué pour chaque résultat.</p>
    <h2>Amélioration continue</h2>
    <p>Les questionnaires de satisfaction, évaluations, réclamations, retours des financeurs et résultats aux certifications sont analysés afin d’améliorer les contenus, l’accompagnement et l’organisation des formations.</p>
  </LegalPage>
}
