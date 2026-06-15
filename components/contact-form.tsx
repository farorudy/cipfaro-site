'use client'

import { useState, type FormEvent } from 'react'
import { Field, fieldClass, FormSuccess } from '@/components/form-ui'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
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

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Envoyer le message
      </button>
    </form>
  )
}
