import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { TrainingCard } from "@/components/TrainingCard";
import { SITE } from "@/lib/site";

const advantages = [
  {
    icon: "👥",
    title: "Accompagnement personnalisé",
    text: "Un suivi individualisé tout au long de votre parcours pour favoriser votre réussite.",
  },
  {
    icon: "✓",
    title: "Formations professionnelles",
    text: "Des cursus reconnus et orientés vers l'emploi et l'insertion durable.",
  },
  {
    icon: "⌖",
    title: "Ancrage local en Guadeloupe",
    text: "Une équipe au coeur du territoire, proche des besoins des stagiaires et des employeurs.",
  },
  {
    icon: "▣",
    title: "Plateforme Moodle dédiée",
    text: "Un espace numérique pour apprendre, échanger et progresser à votre rythme.",
  },
];

const ctaCards = [
  {
    icon: "✎",
    title: "Pré-inscription",
    text: "Réservez votre place en quelques minutes.",
    href: "/preinscription",
    cta: "Se pré-inscrire",
  },
  {
    icon: "☷",
    title: "Demande de devis",
    text: "Obtenez une proposition adaptée à votre projet.",
    href: "/devis",
    cta: "Demander un devis",
  },
  {
    icon: "↗",
    title: "Accès Moodle",
    text: "Connectez-vous à votre plateforme de formation.",
    href: SITE.moodle,
    cta: "Accéder à Moodle",
    external: true,
  },
];

const assurances = [
  "Réponse rapide sous 48h",
  "Devis personnalisé et gratuit",
  "Financement CPF, OPCO, France Travail",
  "Accompagnement de A à Z",
];

const certificatePoints = [
  "Document visible dès la page d'accueil",
  "Présentation claire pour les stagiaires et partenaires",
  "Mise en avant de l'engagement qualité de l'organisme",
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="hero-kicker">Organisme de formation • Guadeloupe</span>
            <h1>Formez-vous aux métiers de l'insertion professionnelle avec CIP FARO Rudy</h1>
            <p>
              Un organisme de formation en Guadeloupe engagé dans l'accompagnement,
              la montée en compétences et la réussite professionnelle.
            </p>
            <div className="button-row">
              <Link className="button accent" href="/preinscription">
                Se pré-inscrire <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link className="button light" href="/devis">
                Demander un devis
              </Link>
            </div>
          </div>
          <div className="home-hero-panel" aria-label="Stagiaires en formation">
            <Image
              src="/hero-formation.png"
              alt="Stagiaires en formation avec un conseiller en insertion professionnelle"
              width={592}
              height={442}
              priority
            />
          </div>
        </div>
      </section>

      <section className="container cta-overlap">
        <div className="grid grid-3">
          {ctaCards.map((card) => {
            const content = (
              <article className="action-card">
                <span className="icon-badge">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="text-link">
                  {card.cta} <span aria-hidden="true">-&gt;</span>
                </div>
              </article>
            );

            return card.external ? (
              <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link key={card.title} href={card.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Notre engagement"
            title="Pourquoi choisir CIP FARO Rudy ?"
            subtitle="Quatre piliers qui font la différence pour votre parcours de formation."
          />
          <div className="grid grid-4 section-gap">
            {advantages.map((advantage) => (
              <article className="card" key={advantage.title}>
                <span className="icon-badge soft">{advantage.icon}</span>
                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <SectionTitle
            eyebrow="Nos parcours"
            title="Nos parcours de formation"
            subtitle="Une formation phare et des parcours complémentaires pour l'insertion et l'évolution professionnelle."
          />
          <div className="grid grid-3 section-gap">
            <TrainingCard
              featured
              badge="Formation phare"
              title="TP Conseiller en Insertion Professionnelle"
              description="Formation qualifiante préparant aux missions d'accueil, d'accompagnement et de relation avec les entreprises."
              ctaLabel="Découvrir"
              ctaHref="/tp-cip"
            />
            <TrainingCard
              title="Bureautique & numérique"
              description="Maîtrisez les outils essentiels du quotidien professionnel : Word, Excel et communication numérique."
            />
            <TrainingCard
              title="Accompagnement à la création d'entreprise"
              description="Construisez votre projet entrepreneurial avec un accompagnement structuré et adapté."
            />
          </div>
          <div className="centered-action">
            <Link className="button secondary" href="/formations">
              Voir toutes nos formations <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container certificate-section">
          <div>
            <p className="eyebrow">Certificat</p>
            <h2 className="section-title">Un document de confiance mis en avant.</h2>
            <p className="lead">
              Le certificat CIP FARO Rudy est intégré à la page d'accueil pour
              rassurer les visiteurs, les stagiaires et les partenaires dès leur
              arrivée sur le site.
            </p>
            <ul className="certificate-list">
              {certificatePoints.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="button-row">
              <a className="button secondary" href={SITE.certificate} target="_blank" rel="noopener noreferrer">
                Vérifier sur ICPF <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="button secondary" href={SITE.certificatePdf} target="_blank" rel="noopener noreferrer">
                Ouvrir le PDF <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
          <div className="certificate-frame">
            <object
              className="certificate-pdf"
              data={SITE.certificatePdf}
              type="application/pdf"
              aria-label="Certificat officiel CIP FARO Rudy"
            >
              <Image
                src="/certificat-cip-faro.svg"
                alt="Certificat CIP FARO Rudy"
                width={900}
                height={640}
              />
            </object>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-cta">
            <div>
              <h2>Démarrez votre projet de formation</h2>
              <p>
                Que vous soyez salarié, demandeur d'emploi ou employeur, nos équipes
                vous accompagnent pour bâtir un parcours adapté à vos objectifs.
              </p>
              <div className="button-row">
                <Link className="button accent" href="/preinscription">
                  Se pré-inscrire
                </Link>
                <Link className="button light" href="/devis">
                  Demander un devis
                </Link>
              </div>
            </div>
            <ul className="check-list">
              {assurances.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container moodle-band">
        <div>
          <p className="eyebrow">Espace stagiaire</p>
          <h2>Accédez à votre plateforme Moodle</h2>
          <p>Suivez vos cours, ressources et activités en ligne, 24h/24.</p>
        </div>
        <a className="button accent" href={SITE.moodle} target="_blank" rel="noopener noreferrer">
          Accéder à Moodle
        </a>
      </section>
    </>
  );
}
