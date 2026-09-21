import Link from 'next/link'
import { GraduationCap, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { nav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-semibold text-foreground">
              CIP FARO Rudy
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Organisme de formation professionnelle en Guadeloupe, dédié à
            l&apos;insertion, la qualification et la réussite de chacun.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Espace apprenant</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Accédez à vos cours et ressources en ligne.
          </p>
          <a
            href={site.moodle}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Accéder aux formations en ligne
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <nav aria-label="Informations légales" className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-foreground">Confidentialité</Link>
            <Link href="/conditions-generales" className="hover:text-foreground">Conditions générales de vente</Link>
            <Link href="/qualite" className="hover:text-foreground">Qualité et résultats</Link>
            <Link href="/reclamation" className="hover:text-foreground">Réclamation</Link>
          </nav>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} — SIRET {site.siret}
          </p>
          <p>Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
