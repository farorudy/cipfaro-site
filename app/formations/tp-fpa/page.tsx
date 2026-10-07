import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'
export const metadata = { title: 'TP Formateur professionnel d’adultes — FPA' }
export default function Page() { return <LegalPage title="Formateur professionnel d’adultes" updated="7 octobre 2026" reviewNotice={false}>
<p>Le projet de parcours prépare au titre professionnel FPA, RNCP37275, niveau 5. La fiche officielle est enregistrée du 29 avril 2023 au 29 avril 2028 ; le certificateur est le ministère chargé du Travail.</p>
<h2>Objectifs et blocs de compétences</h2><ul><li>Concevoir une progression, un scénario et des activités d’apprentissage.</li><li>Animer une formation, évaluer les acquis et remédier aux difficultés.</li><li>Accompagner les apprenants, individualiser les parcours et tutorer à distance.</li><li>Inscrire sa pratique dans une démarche de qualité et de responsabilité sociale.</li></ul>
<h2>Votre parcours après positionnement</h2><p>Les personnes souhaitant développer un projet de formation d’adultes peuvent présenter leur expérience, leur domaine de spécialité et leurs disponibilités. Les prérequis, la durée en centre et en entreprise, le tarif, le calendrier, les modalités d’accès et le délai d’entrée ne sont pas confirmés sur cette page. Ils doivent être précisés dans un programme personnalisé et un devis avant inscription.</p>
<h2>Méthodes et évaluations</h2><p>Les méthodes pédagogiques, les moyens d’encadrement et les évaluations du parcours C.I.P FARO restent à préciser dans le programme remis avant engagement. La fiche RNCP décrit les épreuves du titre : mise en situation, entretien technique, questionnement à partir de productions et entretien final.</p>
<h2>Certification, blocs et débouchés</h2><p>Le titre comporte quatre CCP. La préparation d’un ou plusieurs blocs, les correspondances, les passerelles et les conditions de présentation à l’examen doivent être examinées avec l’organisme et la fiche officielle. Les métiers visés relèvent de la formation d’adultes et de l’accompagnement des apprentissages.</p>
<p><a href="https://www.francecompetences.fr/recherche/rncp/37275/">Fiche officielle RNCP37275</a> · <Link href="/accessibilite">Accessibilité</Link> · <Link href="/qualite">Résultats</Link></p>
<p>Présenter votre projet : <a href={site.phoneHref}>{site.phone}</a> ou <a href={site.emailHref}>{site.email}</a>. Une demande ne vaut ni admission, ni accord de financement.</p>
</LegalPage> }
