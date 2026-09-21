import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Mentions légales' }

export default function MentionsLegalesPage() {
  return <LegalPage title="Mentions légales">
    <h2>Éditeur du site</h2>
    <p>{site.legalName}<br />SIRET : {site.siret}<br />Adresse : {site.address}<br />Téléphone : <a href={site.phoneHref}>{site.phone}</a><br />Email : <a href={site.emailHref}>{site.email}</a></p>
    <p>Directeur de la publication : {site.director}.</p>
    <h2>Organisme de formation</h2>
    <p>Déclaration d’activité enregistrée sous le numéro {site.nda} auprès du préfet de région de Guadeloupe. Cet enregistrement ne vaut pas agrément de l’État.</p>
    <h2>Hébergement</h2>
    <p>Le site est hébergé par Vercel Inc., 440 N Barranca Avenue, Suite 4133, Covina, CA 91723, États-Unis. Le traitement des données recueillies par les formulaires est décrit dans notre politique de confidentialité.</p>
    <h2>Propriété intellectuelle</h2>
    <p>Les textes, éléments graphiques, photographies et documents publiés sur ce site sont protégés. Toute reproduction ou réutilisation nécessite l’autorisation préalable de C.I.P FARO, sauf disposition légale contraire.</p>
  </LegalPage>
}
