'use client'

import { useState, type FormEvent } from 'react'
import { Field, fieldClass, FormSuccess } from '@/components/form-ui'
import { formations } from '@/lib/formations'

export function DevisForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Demande de devis envoyée"
        message="Merci ! Nous avons bien reçu votre demande de devis. Notre équipe vous transmettra une proposition personnalisée dans les meilleurs délais."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field label="Vous êtes" htmlFor="profil" required>
        <select id="profil" name="profil" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Sélectionnez
          </option>
          <option>Un particulier</option>
          <option>Une entreprise</option>
          <option>Une collectivité / structure d&apos;insertion</option>
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom du contact" htmlFor="contactName" required>
          <input id="contactName" name="contactName" type="text" required className={fieldClass} />
        </Field>
        <Field label="Organisation (le cas échéant)" htmlFor="organisation">
          <input id="organisation" name="organisation" type="text" className={fieldClass} />
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

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Formation concernée" htmlFor="formation" required>
          <select id="formation" name="formation" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Sélectionnez une formation
            </option>
            {formations.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.shortTitle}
              </option>
            ))}
            <option value="sur-mesure">Formation sur mesure</option>
          </select>
        </Field>
        <Field label="Nombre de participants" htmlFor="participants">
          <input id="participants" name="participants" type="number" min={1} className={fieldClass} placeholder="Ex. 1" />
        </Field>
      </div>

      <Field label="Détails de votre besoin" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
          placeholder="Objectifs, dates souhaitées, modalités, financement…"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Demander mon devis
      </button>
    </form>
  )
}
