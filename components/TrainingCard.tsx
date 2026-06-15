import Link from "next/link";

type TrainingCardProps = {
  title: string;
  description: string;
  badge?: string;
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function TrainingCard({
  title,
  description,
  badge,
  featured = false,
  ctaLabel = "En savoir plus",
  ctaHref,
}: TrainingCardProps) {
  return (
    <article className={`training-card ${featured ? "featured" : ""}`}>
      {badge ? <span className="badge">{badge}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {ctaHref ? (
        <Link className="text-link" href={ctaHref}>
          {ctaLabel} <span aria-hidden="true">-&gt;</span>
        </Link>
      ) : null}
    </article>
  );
}
