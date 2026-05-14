import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Radici per il Futuro — Comune di Cappadocia' },
      { name: 'description', content: 'Lista elettorale "Radici per il Futuro" per le elezioni amministrative del 24-25 maggio 2026 nel Comune di Cappadocia. Candidato sindaco: Fabio De Angelis.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
