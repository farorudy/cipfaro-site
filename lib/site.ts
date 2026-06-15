export const site = {
  name: 'CIP FARO Rudy',
  legalName: 'CIP FARO Rudy',
  tagline: 'Organisme de formation professionnelle',
  siret: '429 168 727 00080',
  address: 'Chemin Coulee Zebsi, Beausoleil - 97139 Les Abymes, Guadeloupe',
  phone: '0690 57 08 46',
  phoneHref: 'tel:+590690570846',
  email: 'contact@cipfaro.com',
  emailHref: 'mailto:contact@cipfaro.com',
  moodle: 'https://farorudy.fr/my/',
  certificate: 'https://certif-icpf.org/certifies/rudy-faro',
  certificatePdf: '/certificat-B04066-2025.pdf',
  certificateDownload: 'https://farorudy.fr/certificat-B04066-2025-03-30T22_00_00Z.pdf',
} as const

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos formations', href: '/formations' },
  { label: 'TP Conseiller en Insertion Pro.', href: '/formations/tp-cip' },
  { label: 'Pre-inscription', href: '/pre-inscription' },
  { label: 'Devis', href: '/devis' },
  { label: 'Contact', href: '/contact' },
] as const
