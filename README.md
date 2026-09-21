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
adresse d'expédition appartenant à un domaine vérifié. Sans cette configuration,
les formulaires affichent un message d'indisponibilité et ne simulent pas un
envoi réussi.
