import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryHref = "/preinscription",
  primaryLabel = "Se preinscrire",
  secondaryHref = "/formations",
  secondaryLabel = "Voir les formations",
}: HeroProps) {
  return (
    <section className="hero">
      <div className="container hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button-row">
          <Link className="button" href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className="button secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
