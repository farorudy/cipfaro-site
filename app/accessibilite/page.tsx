import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'
export const metadata = { title: 'Accessibilité et handicap' }
export default function Page() { return <LegalPage title="Accessibilité et handicap" updated="7 octobre 2026" reviewNotice={false}>
<h2>Signaler un besoin avant l’entrée en formation</h2><p>Vous pouvez contacter C.I.P FARO pour étudier vos besoins pédagogiques, numériques, matériels ou organisationnels : <a href={site.phoneHref}>{site.phone}</a> ou <a href={site.emailHref}>{site.email}</a>. Précisez la formation et les difficultés d’accès rencontrées. Aucun diagnostic médical n’est demandé dans les formulaires publics.</p>
<h2>Étudier les adaptations possibles</h2><p>Un échange permet d’examiner les supports, les consignes, le rythme, les outils numériques et les conditions d’accueil. Les adaptations effectivement possibles doivent être confirmées avec l’organisme avant inscription. Si un besoin dépasse les moyens disponibles, les possibilités d’orientation ou d’appui spécialisé sont à examiner avec vous.</p>
<h2>Accessibilité des locaux</h2><p>Les conditions d’accès au lieu pédagogique et les équipements nécessaires sont à vérifier avant votre venue. Une accessibilité intégrale des locaux n’est pas attestée par cette page.</p>
<h2>Un problème sur le site ?</h2><p>Indiquez la page concernée et la difficulté rencontrée par téléphone ou par e-mail. Une solution de contact directe reste disponible si un formulaire ne fonctionne pas. L’amélioration de la navigation et du contraste ne constitue pas une déclaration de conformité RGAA.</p>
</LegalPage> }
