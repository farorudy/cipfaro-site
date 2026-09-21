# CIP FARO

Site vitrine Next.js pour CIP FARO.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Envoi des formulaires

Copier `.env.example` vers `.env.local`, puis renseigner la clé Resend et une
adresse d'expédition appartenant à un domaine vérifié. Le domaine du `FORM_FROM_EMAIL`
doit être strictement aligné sur le domaine de production, par exemple
`contact@cipfaro.com`.

Sans cette configuration, les formulaires affichent un message d'indisponibilité
et ne simulent pas un envoi réussi.

## Cookies et tracking

Un bandeau de consentement ne s'affiche que si un tracker est activé. Garder
`NEXT_PUBLIC_ANALYTICS_ENABLED=false` tant qu'aucun outil de mesure d'audience
n'est configurationnellement activé.
