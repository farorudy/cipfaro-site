import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'
export const metadata = { title: 'Qualité, certification et résultats' }
export default function Page() { return <LegalPage title="Qualité, certification et résultats" updated="9 novembre 2026" reviewNotice={false}>
<h2>Certification de l’organisme</h2><p>Le certificat ICPF B04066 couvre les actions de formation. Il est valide du 31 mars 2025 au 30 mars 2028. La certification qualité a été délivrée au titre de la catégorie « actions de formation ».</p>
<p><a href={site.certificatePdf}>Consulter le certificat</a> · <a href={site.certificate}>Vérifier la fiche ICPF</a></p>
<p>Qualiopi porte sur la qualité des processus de formation. Elle ne garantit ni l’obtention d’un titre, ni un emploi, ni un financement individuel.</p>
<h2 id="resultats">Résultats des formations</h2>
<h3>Évaluations des bénéficiaires — TP Conseiller en insertion professionnelle</h3>
<p><strong>Note moyenne : 4,25/5 sur 4 avis Mon Compte Formation.</strong> Ces résultats concernent uniquement l’action Conseiller en insertion professionnelle, RNCP37274, référence 42916872700080_TPCIP37274.</p>
<div className="overflow-x-auto"><table className="w-full border-collapse text-left"><caption className="text-left">Notes des bénéficiaires — export EDOF du 9 novembre 2026</caption><thead><tr><th scope="col" className="border p-3">Critère</th><th scope="col" className="border p-3">Note sur 5</th></tr></thead><tbody>{[
['Accueil', '4,25'],
['Contenu de la formation', '3,75'],
['Équipe de formateurs', '4,50'],
['Moyens mis à disposition', '4,25'],
['Accompagnement', '4,50'],
['Note globale exportée', '4,25'],
].map(([label, note]) => <tr key={label}><th scope="row" className="border p-3 font-normal">{label}</th><td className="border p-3">{note}</td></tr>)}</tbody></table></div>
<p><strong>Source et méthode :</strong> export EDOF « Export_Evaluations_42916872700080_20261109.csv » du 9 novembre 2026. Les moyennes et le nombre de 4 avis sont repris directement du fichier, sans recalcul ni conversion en pourcentage de satisfaction. Le dispositif Mon Compte Formation recueille des notes de 1 à 5 sur cinq critères.</p>
<p><strong>Périmètre et limites :</strong> le fichier ne précise ni les dates des sessions évaluées, ni la période de collecte, ni le nombre de personnes sollicitées. Le taux de réponse ne peut donc pas être calculé. Ces quatre avis ne représentent pas nécessairement l’ensemble des bénéficiaires de C.I.P FARO et ne mesurent ni la réussite à la certification, ni l’insertion professionnelle.</p>
<h3>Autres indicateurs</h3>
<div className="overflow-x-auto"><table className="w-full border-collapse text-left"><caption className="sr-only">Disponibilité des autres indicateurs de résultats</caption><thead><tr><th scope="col" className="border p-3">Indicateur</th><th scope="col" className="border p-3">État de publication</th></tr></thead><tbody>{['Nombre total de bénéficiaires et taux de réponse','Assiduité et abandons','Présentation à l’examen','Obtention totale et par CCP','Insertion professionnelle à 3 ou 6 mois','Résultats des autres formations'].map(label=><tr key={label}><th scope="row" className="border p-3 font-normal">{label}</th><td className="border p-3">Non publié — données à consolider</td></tr>)}</tbody></table></div>
<p>Ces indicateurs seront publiés après vérification des données, en précisant le parcours, la période étudiée, les effectifs, les modalités de calcul et la date de mise à jour. Une absence de résultat publié ne signifie pas un résultat nul. Les petits effectifs seront présentés sans identifier les personnes.</p>
<h2>Informations avant inscription</h2><p>Consultez le programme du parcours choisi : objectifs, public, prérequis, durée, tarif, modalités d’accès, moyens pédagogiques et évaluations. Les dates et modalités personnalisées doivent être confirmées avant engagement.</p>
<p><Link href="/formations/tp-cip">Programme TP CIP</Link> · <Link href="/formations/tp-fpa">Projet de parcours FPA</Link> · <Link href="/formations/initiation-ia">Programme initiation IA</Link></p>
<h2>Accessibilité et réclamations</h2><p><Link href="/accessibilite">Besoins d’adaptation et handicap</Link> · <Link href="/reclamation">Déposer une réclamation</Link></p>
<p>Pour une information ou un retour sur une formation : <a href={site.phoneHref}>{site.phone}</a> ou <a href={site.emailHref}>{site.email}</a>.</p>
</LegalPage> }
