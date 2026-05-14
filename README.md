# Radici per il Futuro — Comune di Cappadocia

Sito web ufficiale della lista elettorale **"Radici per il Futuro"** per le elezioni amministrative del **24–25 maggio 2026** nel Comune di Cappadocia (AQ).

## Cosa contiene il sito

- **Hero section** con simbolo della lista, nome e data delle elezioni
- **La nostra visione** — presentazione del programma e dei valori della lista
- **Programma elettorale** — accordion interattivo diviso per aree tematiche
- **Candidato Sindaco** — Fabio De Angelis con foto e presentazione
- **Candidati Consiglieri** — griglia con foto, nome e bio di ciascun candidato
- **Vignette** — sezione per materiali visivi della campagna (placeholder, da completare)
- **Come si vota** — guida passo-passo per il voto nei comuni fino a 15.000 abitanti

## Tecnologie

| Layer | Tecnologia |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Tipografia | Cormorant Garamond + Source Serif 4 (Google Fonts) |
| Deploy | Netlify |

## Esecuzione in locale

```bash
npm install
npm run dev
```

Il server di sviluppo sarà disponibile su `http://localhost:3000`.

Per il deploy su Netlify con emulazione locale:

```bash
netlify dev
```

## Struttura delle immagini

Le foto dei candidati si trovano in `public/`:

- `simbolo.png` — simbolo della lista
- `fabio-de-angelis.jpg` — candidato sindaco
- `alessandro-tamilia.jpg`, `benedetto-pensa.jpg`, `calisto-luca-rossi.jpg`, `claudio-masotti.jpg`, `cristiano-satariano.jpg`, `cristina-calcagni.jpg`, `gaetano-santarelli.jpg`, `giuseppe-di-giacomo.jpg` — candidati consiglieri

## Aggiornamenti futuri

- Sezione **Vignette**: aggiungere le immagini in `public/` e aggiornare il componente `Vignette` in `src/routes/index.tsx`
