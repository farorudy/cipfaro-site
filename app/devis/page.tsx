import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

const details = [
  "Nombre de participants ou profil du candidat.",
  "Formation ou accompagnement souhaite.",
  "Lieu, format, dates envisagees et contraintes.",
  "Objectifs attendus et niveau de personnalisation.",
];

export default function DevisPage() {
  return (
    <>
      <Hero
        eyebrow="Tarification"
        title="Demande de devis"
        description="Recevez une proposition adaptee a votre besoin de formation, d'accompagnement ou d'intervention sur mesure."
        primaryHref="/contact"
        primaryLabel="Envoyer une demande"
        secondaryHref="/formations"
        secondaryLabel="Explorer les formations"
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow">Informations utiles</p>
              <h2 className="section-title">Pour un devis plus precis.</h2>
              <p className="lead">
                Quelques elements permettent d'estimer rapidement le format, la duree
                et les modalites d'intervention.
              </p>
              <div className="card" style={{ marginTop: 24 }}>
                <ul>
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
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
