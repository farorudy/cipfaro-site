'use client'

import { useState, type FormEvent } from 'react'
import { Field, fieldClass, FormSuccess, PrivacyConsent, formFallbackMessage } from '@/components/form-ui'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSending(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const response = await fetch('/api/formulaires', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', ...data }) })
    const result = await response.json()
    setSending(false)
    if (!response.ok) return setError(formFallbackMessage(result.error || 'Le formulaire est temporairement indisponible.'))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Message envoyé"
        message="Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-5">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
      </div>

      <Field label="Sujet" htmlFor="subject" required>
        <input id="subject" name="subject" type="text" required className={fieldClass} />
      </Field>

      <Field label="Message" htmlFor="message" required>
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </Field>

      <PrivacyConsent />
      {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {sending ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
    </form>
  )
}
