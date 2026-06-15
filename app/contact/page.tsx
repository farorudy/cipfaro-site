import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question, un besoin de formation ou une demande d'accompagnement ? Contactez CIP FARO."
        primaryHref="mailto:contact@cipfaro.com"
        primaryLabel="Envoyer un email"
        secondaryHref="/devis"
        secondaryLabel="Demander un devis"
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow">Coordonnees</p>
              <h2 className="section-title">Nous vous recontactons rapidement.</h2>
              <p className="lead">
                Utilisez le formulaire ou envoyez directement un message. Ajoutez le
                maximum de details pour faciliter la reponse.
              </p>
              <div className="card" style={{ marginTop: 24 }}>
                <h3>CIP FARO</h3>
                <p>Email : contact@cipfaro.com</p>
                <p>Telephone : a renseigner</p>
                <p>Adresse : a renseigner</p>
              </div>
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
