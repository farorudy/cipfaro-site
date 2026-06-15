import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export default function PreinscriptionPage() {
  return (
    <>
      <Hero
        eyebrow="Inscription"
        title="Preinscription"
        description="Envoyez vos informations pour etre recontacte et confirmer le parcours le plus adapte a votre situation."
        primaryHref="/contact"
        primaryLabel="Nous contacter"
        secondaryHref="/formations"
        secondaryLabel="Voir les parcours"
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow">Demande</p>
              <h2 className="section-title">Votre projet de formation commence ici.</h2>
              <p className="lead">
                Precisez la formation souhaitee, votre disponibilite et votre objectif.
                L'equipe CIP FARO vous recontactera pour verifier les modalites.
              </p>
            </div>
            <div className="card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
