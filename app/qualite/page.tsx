import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'
export const metadata = { title: 'Qualité, certification et résultats' }
export default function Page() { return <LegalPage title="Qualité, certification et résultats" updated="7 octobre 2026" reviewNotice={false}>
<h2>Certification de l’organisme</h2><p>Le certificat ICPF B04066 couvre les actions de formation. Il est valide du 31 mars 2025 au 30 mars 2028. La certification qualité a été délivrée au titre de la catégorie « actions de formation ».</p>
<p><a href={site.certificatePdf}>Consulter le certificat</a> · <a href={site.certificate}>Vérifier la fiche ICPF</a></p>
<p>Qualiopi porte sur la qualité des processus de formation. Elle ne garantit ni l’obtention d’un titre, ni un emploi, ni un financement individuel.</p>
<h2>Résultats des formations</h2><p>État au 7 octobre 2026 : les résultats consolidés ne sont pas publiés. Aucun taux ne peut être présenté comme vérifié à ce jour sur cette page.</p>
<div className="overflow-x-auto"><table className="w-full border-collapse text-left"><caption className="sr-only">Disponibilité des indicateurs de résultats</caption><thead><tr><th className="border p-3">Indicateur</th><th className="border p-3">État de publication</th></tr></thead><tbody>{['Nombre de bénéficiaires et de répondants','Satisfaction','Assiduité et abandons','Présentation à l’examen','Obtention totale et par CCP','Insertion professionnelle à 3 ou 6 mois'].map(label=><tr key={label}><td className="border p-3">{label}</td><td className="border p-3">Non publié — données à consolider</td></tr>)}</tbody></table></div>
<p>Lors de leur publication, les résultats préciseront le parcours, la période étudiée, l’effectif concerné, la méthode de calcul et la date de mise à jour. Les petits effectifs seront présentés sans identifier les personnes.</p>
<h2>Informations avant inscription</h2><p>Consultez le programme du parcours choisi : objectifs, public, prérequis, durée, tarif, modalités d’accès, moyens pédagogiques et évaluations. Les dates et modalités personnalisées doivent être confirmées avant engagement.</p>
<p><Link href="/formations/tp-cip">Programme TP CIP</Link> · <Link href="/formations/tp-fpa">Projet de parcours FPA</Link> · <Link href="/formations/initiation-ia">Programme initiation IA</Link></p>
<h2>Accessibilité et réclamations</h2><p><Link href="/accessibilite">Besoins d’adaptation et handicap</Link> · <Link href="/reclamation">Déposer une réclamation</Link></p>
<p>Pour une information ou un retour sur une formation : <a href={site.phoneHref}>{site.phone}</a> ou <a href={site.emailHref}>{site.email}</a>.</p>
</LegalPage> }
