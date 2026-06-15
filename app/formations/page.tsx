import Link from "next/link";
import Hero from "@/components/Hero";

const programs = [
  {
    title: "Insertion et accompagnement",
    text: "Developper les methodes d'accueil, de diagnostic, de suivi et d'orientation des publics.",
  },
  {
    title: "Communication professionnelle",
    text: "Renforcer la posture, l'ecoute active, la reformulation et la gestion des situations sensibles.",
  },
  {
    title: "Ingenierie de parcours",
    text: "Concevoir des sequences, formaliser des objectifs et evaluer les acquis de facon exploitable.",
  },
  {
    title: "Techniques de recherche d'emploi",
    text: "Structurer CV, entretiens, argumentaires et strategies de mise en relation avec les employeurs.",
  },
  {
    title: "Bureautique et outils numeriques",
    text: "Gagner en autonomie sur les outils essentiels pour produire, organiser et presenter l'information.",
  },
  {
    title: "Formation sur mesure",
    text: "Construire un programme adapte a votre equipe, votre calendrier et vos contraintes operationnelles.",
  },
];

export default function FormationsPage() {
  return (
    <>
      <Hero
        eyebrow="Catalogue"
        title="Formations professionnelles"
        description="Des formations concues pour transformer les competences en gestes professionnels observables, avec des objectifs simples a suivre."
        primaryHref="/devis"
        primaryLabel="Demander un devis"
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Parcours</p>
          <h2 className="section-title">Choisissez un programme adapte a votre besoin.</h2>
          <div className="grid grid-3" style={{ marginTop: 34 }}>
            {programs.map((program) => (
              <article className="card" key={program.title}>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
          <div className="button-row">
            <Link className="button" href="/contact">
              Echanger avec nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
