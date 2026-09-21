import { NextResponse } from 'next/server'

const allowedTypes = ['contact', 'pre-inscription', 'devis'] as const
type FormType = (typeof allowedTypes)[number]

function clean(value: unknown, max = 3000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const type = clean(body.type, 30) as FormType
    const email = clean(body.email, 254)

    if (!allowedTypes.includes(type) || !email || !isEmail(email)) {
      return NextResponse.json({ error: 'Données obligatoires invalides.' }, { status: 400 })
    }

    // Champ invisible anti-robot : une valeur indique un envoi automatisé.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true })
    }

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.FORM_FROM_EMAIL
    const to = process.env.FORM_TO_EMAIL || 'contact@cipfaro.com'

    if (!apiKey || !from) {
      return NextResponse.json(
        { error: "Le service d'envoi est temporairement indisponible. Contactez-nous par téléphone ou par email." },
        { status: 503 },
      )
    }

    const labels: Record<string, string> = {
      firstName: 'Prénom', lastName: 'Nom', name: 'Nom complet', contactName: 'Nom du contact',
      email: 'Email', phone: 'Téléphone', subject: 'Sujet', profil: 'Profil',
      organisation: 'Organisation', formation: 'Formation', participants: 'Participants',
      situation: 'Situation', financement: 'Financement', message: 'Message',
    }
    const rows = Object.entries(body)
      .filter(([key, value]) => labels[key] && clean(value))
      .map(([key, value]) => `<tr><th align="left" style="padding:6px 12px 6px 0">${labels[key]}</th><td style="padding:6px 0">${clean(value).replace(/[<>&]/g, '')}</td></tr>`)
      .join('')

    const titles: Record<FormType, string> = {
      contact: 'Nouveau message depuis le site',
      'pre-inscription': 'Nouvelle demande de pré-inscription',
      devis: 'Nouvelle demande de devis',
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `${titles[type]} — ${email}`,
        html: `<h1>${titles[type]}</h1><table>${rows}</table><p>Message transmis depuis cipfaro.site.</p>`,
      }),
    })

    if (!response.ok) throw new Error('Email provider error')
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "La demande n'a pas pu être envoyée. Réessayez ou contactez-nous directement." },
      { status: 500 },
    )
  }
}
