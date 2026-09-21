import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Conditions générales de vente' }

export default function CgvPage() {
  return <LegalPage title="Conditions générales de vente">
    <p>Les présentes conditions s’appliquent aux prestations de formation professionnelle proposées par C.I.P FARO. Les conditions particulières figurant au devis, à la convention ou au contrat de formation complètent ces dispositions.</p>
    <h2>Inscription et contractualisation</h2>
    <p>L’inscription devient définitive après validation des prérequis, accord sur le financement et signature des documents contractuels. Pour un particulier finançant lui-même sa formation, le contrat précise le délai légal de rétractation et l’échéancier applicable.</p>
    <h2>Prix et paiement</h2>
    <p>Les prix sont indiqués en euros sur le devis. Les modalités et délais de paiement sont précisés dans le contrat ou la convention. En cas de financement par un tiers, le bénéficiaire s’assure de la prise en charge avant le démarrage.</p>
    <h2>Annulation, report et abandon</h2>
    <p>Toute annulation doit être signalée par écrit. Les conséquences financières d’une annulation, d’un abandon ou d’une absence sont celles prévues au contrat ou à la convention. C.I.P FARO peut reporter une session en cas d’effectif insuffisant ou de force majeure et propose alors une nouvelle date.</p>
    <h2>Accessibilité et réclamation</h2>
    <p>Les besoins d’aménagement sont étudiés avant l’entrée en formation. Toute réclamation peut être adressée à <a href={site.emailHref}>{site.email}</a> ou au moyen de la page <a href="/reclamation">Réclamation</a>.</p>
    <h2>Différend</h2>
    <p>Une solution amiable est recherchée en priorité. Lorsqu’un médiateur de la consommation est compétent, ses coordonnées sont communiquées au client particulier dans les documents contractuels avant la conclusion du contrat.</p>
  </LegalPage>
}
