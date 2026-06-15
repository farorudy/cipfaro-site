import Link from "next/link";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/tp-cip", label: "TP CIP" },
  { href: "/preinscription", label: "Pré-inscription" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">⌂</span>
          <span>
            <strong>CIP FARO Rudy</strong>
            <small>Organisme de formation</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={link.href === "/" ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="moodle-button" href={SITE.moodle} target="_blank" rel="noopener noreferrer">
          Accéder à Moodle <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
