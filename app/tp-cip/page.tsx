import Link from "next/link";
import Hero from "@/components/Hero";

const steps = [
  "Clarifier le referentiel et les attendus du titre professionnel.",
  "Identifier les experiences et preuves utiles au dossier professionnel.",
  "Structurer les activites types, competences et exemples de pratique.",
  "Preparer la presentation orale et les questions du jury.",
];

export default function TpCipPage() {
  return (
    <>
      <Hero
        eyebrow="Titre professionnel"
        title="Preparation TP CIP"
        description="Un accompagnement methodique pour les candidats au titre professionnel Conseiller en Insertion Professionnelle."
        primaryHref="/preinscription"
        primaryLabel="Me preinscrire"
        secondaryHref="/contact"
        secondaryLabel="Poser une question"
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Accompagnement</p>
          <h2 className="section-title">Une preparation centree sur le dossier et l'oral.</h2>
          <div className="grid grid-2" style={{ marginTop: 34 }}>
            <article className="card">
              <h3>Objectifs</h3>
              <p>
                Comprendre les attentes de certification, formaliser les pratiques
                professionnelles et s'entrainer a presenter son parcours avec precision.
              </p>
            </article>
            <article className="card">
              <h3>Format</h3>
              <p>
                Seances de travail guidees, relectures, corrections, simulations et
                conseils personnalises selon l'avancement du candidat.
              </p>
            </article>
          </div>
          <div className="card" style={{ marginTop: 22 }}>
            <h3>Etapes de travail</h3>
            <ul>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="button-row">
            <Link className="button" href="/preinscription">
              Commencer la preparation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
