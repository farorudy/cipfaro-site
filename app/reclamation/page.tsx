import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Déposer une réclamation' }

export default function ReclamationPage() {
  return <LegalPage title="Réclamation et signalement">
    <p>Une difficulté, une insatisfaction ou un désaccord peut être signalé à C.I.P FARO. Chaque demande est enregistrée, examinée et suivie jusqu’à sa clôture.</p>
    <h2>Comment nous écrire ?</h2>
    <p>Adressez votre demande à <a href={site.emailHref}>{site.email}</a>, par courrier à {site.address}, ou utilisez notre <Link href="/contact">formulaire de contact</Link> en indiquant « Réclamation » dans le sujet.</p>
    <p>Précisez votre identité, la formation concernée, les faits, la date et la solution attendue. Un accusé de réception est adressé sous 5 jours ouvrés et une réponse motivée est apportée, dans la mesure du possible, sous 30 jours.</p>
    <h2>Confidentialité et recours</h2>
    <p>Les réclamations sont traitées confidentiellement et sans conséquence défavorable sur l’accompagnement. Si la réponse ne permet pas de résoudre le différend, les voies de recours applicables sont communiquées au demandeur.</p>
  </LegalPage>
}
