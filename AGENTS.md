# AGENTS.md

Guida per sviluppatori e agenti AI che lavorano su questo progetto.

## Panoramica del Progetto

Sito di presentazione elettorale per la lista **"Radici per il Futuro"** — elezioni amministrative 24–25 maggio 2026, Comune di Cappadocia (AQ). È una single-page application con navigazione ad ancoraggio e contenuto completamente in italiano.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Typography | Cormorant Garamond + Source Serif 4 (Google Fonts) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
├── simbolo.png                  # Simbolo della lista elettorale
├── fabio-de-angelis.jpg         # Candidato sindaco
├── alessandro-tamilia.jpg       # Candidati consiglieri (8 foto)
├── benedetto-pensa.jpg
├── calisto-luca-rossi.jpg
├── claudio-masotti.jpg
├── cristiano-satariano.jpg
├── cristina-calcagni.jpg
├── gaetano-santarelli.jpg
└── giuseppe-di-giacomo.jpg
src/
├── routes/
│   ├── __root.tsx               # Shell HTML: lang="it", titolo SEO
│   └── index.tsx                # TUTTA la pagina (dati + componenti inline)
└── styles.css                   # Tailwind + Google Fonts + CSS vars + utility classes
```

## Architettura della Pagina

`src/routes/index.tsx` contiene tutti i dati e tutti i componenti in un unico file:

### Dati inline
- `programmaSezioni` — array con le 7 aree del programma elettorale
- `consiglieri` — array con i dati di ciascun candidato consigliere

### Componenti (in ordine nella pagina)
| Componente | Sezione | Note |
|-----------|---------|------|
| `Navbar` | Navigazione sticky | Anchor links; mobile dropdown con useState |
| `Hero` | Prima schermata | Full-height, animazioni CSS staggered |
| `Visione` | Visione | Testo + citazione |
| `Programma` | Programma accordéon | `AccordionItem` con useState; sfondo forest |
| `CandidatoSindaco` | Sindaco | Layout foto + bio |
| `CandidatiConsiglieri` | Consiglieri | CSS grid auto-fill minmax 260px |
| `Vignette` | Vignette | Placeholder da completare con vere immagini |
| `ComeVotare` | Come si vota | 4 passi per comuni < 15.000 abitanti |
| `Footer` | Footer | Simbolo, slogan, info |

## Palette Colori (CSS Variables in `src/styles.css`)

| Variabile | Valore | Uso |
|-----------|--------|-----|
| `--forest` | `#1a3a28` | Sfondi sezioni scure |
| `--forest-deep` | `#0f2419` | Hero, navbar, footer |
| `--parchment` | `#f0e9d2` | Sfondi caldi alternati |
| `--cream` | `#faf8f2` | Sfondo base |
| `--gold` | `#c49a2e` | Accento principale, dividers |
| `--gold-light` | `#e8c96a` | Testo dorato su scuro |
| `--bark` | `#4a2e1a` | Sezione Vignette |

## Come Aggiornare la Sezione Vignette

1. Aggiungere immagini in `public/` (es. `vignetta-1.jpg`)
2. Nel componente `Vignette` in `src/routes/index.tsx` sostituire il placeholder grid con `<img>` tag

## Come Aggiungere un Candidato Consigliere

1. Copiare la foto in `public/nome-cognome.jpg`
2. Aggiungere un oggetto all'array `consiglieri` in `src/routes/index.tsx`

## Convenzioni

- Tutto il testo è in **italiano**
- Nessun componente UI esterno: solo CSS custom + Tailwind utilities
- Animazioni solo su `transform` e `opacity`, mai su `top/left/width/height`
- CSS custom classes in `src/styles.css`, non come Tailwind plugin
- TypeScript strict mode; usare `type` per import di soli tipi

## Development Commands

```bash
npm run dev      # Dev server su porta 3000
npm run build    # Build di produzione
netlify dev      # Dev con emulazione Netlify (porta 8888)
```

## Configuration Files

| File | Scopo |
|------|-------|
| `vite.config.ts` | Vite + TanStack Start + Netlify plugin + Tailwind |
| `tsconfig.json` | TypeScript config con alias `@/*` per `src/*` |
| `netlify.toml` | Build command, output `dist/client`, dev server |
| `src/styles.css` | Tailwind + Google Fonts + CSS custom properties |
