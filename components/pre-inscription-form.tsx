'use client'

import { useState, type FormEvent } from 'react'
import { Field, fieldClass, FormSuccess, PrivacyConsent, formFallbackMessage } from '@/components/form-ui'
import { formations } from '@/lib/formations'

export function PreInscriptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSending(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const response = await fetch('/api/formulaires', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'pre-inscription', ...data }) })
    const result = await response.json()
    setSending(false)
    if (!response.ok) return setError(formFallbackMessage(result.error || 'La pré-inscription n’a pas pu être envoyée.'))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Pré-inscription envoyée"
        message="Merci ! Votre demande de pré-inscription a bien été prise en compte. Notre équipe vous recontactera rapidement pour la suite de votre parcours."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-5">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" htmlFor="firstName" required>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className={fieldClass} />
        </Field>
        <Field label="Nom" htmlFor="lastName" required>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className={fieldClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
        <Field label="Téléphone" htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </Field>
      </div>

      <Field label="Formation souhaitée" htmlFor="formation" required>
        <select id="formation" name="formation" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Sélectionnez une formation
          </option>
          {formations.map((f) => (
            <option key={f.slug} value={f.slug}>
              {f.shortTitle}
            </option>
          ))}
          <option value="autre">Autre / je ne sais pas encore</option>
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Situation actuelle" htmlFor="situation">
          <select id="situation" name="situation" defaultValue="" className={fieldClass}>
            <option value="">Sélectionnez</option>
            <option>Demandeur d&apos;emploi</option>
            <option>Salarié(e)</option>
            <option>Étudiant(e)</option>
            <option>Autre</option>
          </select>
        </Field>
        <Field label="Mode de financement envisagé" htmlFor="financement">
          <select id="financement" name="financement" defaultValue="" className={fieldClass}>
            <option value="">Sélectionnez</option>
            <option>CPF</option>
            <option>France Travail</option>
            <option>Employeur / OPCO</option>
            <option>Financement personnel</option>
            <option>À déterminer</option>
          </select>
        </Field>
      </div>

      <Field label="Votre projet / message" htmlFor="message">
        <textarea id="message" name="message" rows={4} className={fieldClass} placeholder="Parlez-nous de votre projet professionnel…" />
      </Field>

      <PrivacyConsent />
      {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {sending ? 'Envoi en cours…' : 'Envoyer ma pré-inscription'}
      </button>
    </form>
  )
}
