'use client'

import { useState, type FormEvent } from 'react'
import { Field, fieldClass, FormSuccess } from '@/components/form-ui'
import { formations } from '@/lib/formations'

export function PreInscriptionForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
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

      <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 size-4 rounded border-input accent-[var(--primary)]" />
        <span>
          J&apos;accepte que mes informations soient utilisées pour traiter ma
          demande de pré-inscription.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Envoyer ma pré-inscription
      </button>
    </form>
  )
}
