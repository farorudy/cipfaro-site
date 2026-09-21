import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Politique de confidentialité' }

export default function ConfidentialitePage() {
  return <LegalPage title="Politique de confidentialité">
    <h2>Responsable du traitement</h2>
    <p>C.I.P FARO, représenté par Rudy FARO. Pour toute question relative à vos données : <a href={site.emailHref}>{site.email}</a>.</p>
    <h2>Données collectées et finalités</h2>
    <p>Les formulaires peuvent recueillir vos nom, prénom, email, téléphone, situation, projet, besoin de formation et informations nécessaires au devis. Ces données servent uniquement à répondre à votre demande, étudier votre projet, préparer une inscription ou établir un devis.</p>
    <h2>Base légale et destinataires</h2>
    <p>Le traitement repose sur votre consentement et, lorsqu’un devis ou une inscription est demandé, sur les mesures précontractuelles prises à votre demande. Les données sont accessibles uniquement aux personnes habilitées de C.I.P FARO et à ses prestataires techniques nécessaires à l’hébergement et à l’acheminement des messages.</p>
    <h2>Durée de conservation</h2>
    <p>Les demandes sans suite sont conservées au maximum 3 ans après le dernier contact. Les pièces liées à une relation contractuelle sont conservées pendant les durées légales applicables. Les données ne sont ni vendues ni cédées à des fins commerciales.</p>
    <h2>Vos droits</h2>
    <p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données, ainsi que leur portabilité lorsqu’elle s’applique, en écrivant à <a href={site.emailHref}>{site.email}</a>. Vous pouvez également saisir la CNIL sur <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">cnil.fr</a>.</p>
    <h2>Cookies</h2>
    <p>Le site utilise uniquement les traceurs techniques nécessaires à son fonctionnement et, le cas échéant, une mesure d’audience respectueuse de la vie privée. Aucun cookie publicitaire n’est déposé par C.I.P FARO.</p>
  </LegalPage>
}
