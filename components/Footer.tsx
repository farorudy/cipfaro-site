import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>CIP FARO</strong>
          <div>Accompagnement, formation et professionnalisation.</div>
        </div>
        <div>
          <Link href="/contact">Nous contacter</Link>
        </div>
      </div>
    </footer>
  );
}
