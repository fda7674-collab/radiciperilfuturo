import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── Data ────────────────────────────────────────────────────────────────────

const programmaSezioni = [
  {
    id: 'comune-efficiente',
    titolo: 'Un Comune Efficiente al Servizio del Cittadino',
    punti: [
      { label: 'Trasparenza', testo: 'Creeremo il "Piano Fondi Cappadocia 2026-2028", un elenco pubblico dei bandi a cui parteciperemo. Saprete sempre quanti fondi abbiamo chiesto, quanti ne abbiamo ottenuti e come vengono spesi.' },
      { label: 'Rafforzamento Amministrativo', testo: 'Parteciperemo ai Piani di Rafforzamento Amministrativo (PRA) per potenziare le competenze e l\'efficienza dell\'amministrazione.' },
      { label: 'Amministrazione Condivisa', testo: 'Coinvolgeremo gli abitanti nelle scelte attraverso incontri periodici e democrazia partecipativa, comunicando costantemente le attività del Consiglio e le modalità di utilizzo delle risorse pubbliche.' },
      { label: 'Manutenzione Ordinaria', testo: 'Programmeremo manutenzioni costanti su strade e marciapiedi per prevenire il degrado e risparmiare nel lungo periodo.' },
      { label: 'Illuminazione Pubblica', testo: 'Censimento dei punti luce, interventi immediati sulle zone buie e pericolose, poi passaggio a sistema LED per ridurre i costi.' },
      { label: 'Toponomastica e Segnaletica', testo: 'Vie e numeri civici leggibili e chiari, per i residenti, i turisti e i mezzi di soccorso.' },
      { label: 'Contrasto allo Spopolamento', testo: 'Piano locale di recupero abitativo e agevolazioni comunali annuali per chi sceglie di vivere e lavorare a Cappadocia.' },
      { label: 'Servizi alla Persona', testo: 'Potenziamento dell\'assistenza domiciliare per anziani e persone fragili.' },
      { label: 'Turismo Sostenibile e Religioso', testo: 'Salvaguardia dell\'ambiente, valorizzazione dei corsi d\'acqua, investimento nel turismo religioso legato al Santuario della Santissima Trinità e ampliamento dei cammini esistenti.' },
    ],
  },
  {
    id: 'patrimonio',
    titolo: 'Riorganizzazione del Patrimonio Comunale',
    punti: [
      { label: 'Censimento e Valorizzazione', testo: 'Ricognizione di tutti gli immobili e terreni comunali per capire quali valorizzare, recuperare e mettere a disposizione della comunità.' },
      { label: 'Recupero degli Spazi Pubblici', testo: 'Immobili comunali trasformati in centri servizi, presidi sanitari, centri di aggregazione sociale e spazi per il co-working, per attrarre nuovi residenti.' },
      { label: 'Efficienza Energetica', testo: 'Piano di riqualificazione per ridurre i costi di gestione degli edifici pubblici, reinvestendo i risparmi in servizi per i cittadini.' },
    ],
  },
  {
    id: 'sicura',
    titolo: 'Dossier "Cappadocia Sicura"',
    punti: [
      { label: 'Monitoraggio h24', testo: 'Ampliamento della rete di videosorveglianza su tutto il territorio comunale, con attenzione agli accessi principali di Cappadocia, Verrecchie, Petrella Liri e Camporotondo.' },
      { label: 'Presidio e Prevenzione', testo: 'Rafforzamento della collaborazione con le forze dell\'ordine e sistema per segnalare criticità in merito alla sicurezza pubblica.' },
      { label: 'Messa in Sicurezza del Territorio', testo: 'Interventi mirati contro il dissesto idrogeologico, piano neve potenziato e ricerca di fondi per la messa in sicurezza degli edifici pubblici.' },
    ],
  },
  {
    id: 'proloco',
    titolo: 'Il Ruolo Centrale delle Pro Loco',
    punti: [
      { label: 'Collaborazione e Contributi', testo: 'Programmazione coordinata degli eventi, fondi per la realizzazione di iniziative dietro specifica rendicontazione, con piena trasparenza.' },
      { label: 'Semplificazioni', testo: 'Supporto nella gestione delle pratiche amministrative e dei piani di sicurezza per le manifestazioni.' },
      { label: 'Turismo delle Radici', testo: 'Riscoperta e mantenimento delle tradizioni artigianali e gastronomiche, trasformando gli eventi in occasioni di sviluppo economico per i commercianti locali.' },
    ],
  },
  {
    id: 'capoluogo',
    titolo: 'Cappadocia: Il Cuore dei Servizi',
    punti: [
      { label: 'Centro di Accoglienza', testo: 'Cappadocia come hub logistico per il turismo: potenziamento del servizio informazioni e della segnaletica per chi arriva nel territorio.' },
      { label: 'Sostegno agli Eventi', testo: 'Mercatini, percorsi enogastronomici, eventi culturali coordinati con le frazioni, per offrire svago e servizi di qualità.' },
      { label: 'Decoro Urbano', testo: 'Interventi organici su illuminazione, toponomastica e arredo urbano per rendere il centro storico più accogliente e attrattivo.' },
    ],
  },
  {
    id: 'camporotondo',
    titolo: 'Camporotondo: Montagna Tutto l\'Anno',
    punti: [
      { label: 'Turismo Estivo', testo: 'Sviluppo di attività estive: percorsi mountain bike (downhill ed e-bike), aree trekking e percorsi in quota per una stazione viva 12 mesi l\'anno.' },
      { label: 'Innevamento Artificiale', testo: 'Ricerca di finanziamenti pubblici per il completamento della stazione sciistica attraverso l\'innevamento artificiale.' },
      { label: 'Polo degli Eventi', testo: 'Grandi eventi annuali di richiamo interregionale, sfruttando gli ampi spazi e i parcheggi disponibili.' },
    ],
  },
  {
    id: 'frazioni',
    titolo: 'Verrecchie e Petrella Liri',
    punti: [
      { label: 'Verrecchie — Natura e Cammini', testo: 'Punto di riferimento per il "turismo lento": chiusura delle buche stradali, pulizia del fiume e manutenzione dei sentieri esistenti. Valorizzazione per il turismo slow.' },
      { label: 'Petrella Liri — Sport Outdoor', testo: 'Valorizzazione delle attività in ambiente naturale, con attenzione alle esperienze in roccia e all\'arrampicata, mappatura delle aree e segnaletica informativa.' },
    ],
  },
]

const consiglieri: Array<{ nome: string; foto: string; bio: string; fotoContain?: boolean }> = [
  {
    nome: 'Alessandro Tamilia',
    foto: '/alessandro-tamilia.jpg',
    bio: 'Ex funzionario di banca e libero professionista per oltre 40 anni, oggi pensionato con la voglia di restituire alla propria comunità ciò che ha ricevuto. Conosce bene le problematiche del territorio e vuole migliorare l\'accoglienza turistica, agevolare la vita degli anziani e integrare i servizi essenziali.',
  },
  {
    nome: 'Benedetto Pensa',
    foto: '/benedetto-pensa.jpg',
    fotoContain: true,
    bio: '67 anni, nato e cresciuto a Petrella Liri. Per 40 anni in ANAS come sorvegliante, occupandosi di sicurezza stradale, sgombero neve e dissesto idrogeologico, con contatti diretti con sindaci, carabinieri, forestali e vigili del fuoco. Crede in una politica fatta di ascolto e azioni concrete.',
  },
  {
    nome: 'Calisto Luca Rossi',
    foto: '/calisto-luca-rossi.jpg',
    bio: 'Candidato consigliere con profondo legame al territorio di Cappadocia. Porta avanti i valori fondanti della lista: radici, comunità e visione per il futuro del Comune.',
  },
  {
    nome: 'Claudio Masotti',
    foto: '/claudio-masotti.jpg',
    bio: '72 anni di esperienza e radici profonde a Cappadocia. Per 40 anni dirigente d\'azienda, ha gestito relazioni commerciali a livello direzionale per multinazionali dell\'informatica — Google, Oracle, Digital, Siemens, Atos Origin — verso la Pubblica Amministrazione locale e centrale. Competenze preziose per accedere alle risorse regionali, nazionali ed europee.',
  },
  {
    nome: 'Cristiano Satariano',
    foto: '/cristiano-satariano.jpg',
    bio: 'Architetto dal 1992, fondatore dello studio ANOTHER LINE a Roma. Ha dedicato la propria carriera al dialogo con la Pubblica Amministrazione per lo sviluppo sostenibile del territorio. Si candida per mettere al servizio della comunità vent\'anni di legame profondo con Cappadocia e combattere lo spopolamento.',
  },
  {
    nome: 'Cristina Calcagni',
    foto: '/cristina-calcagni.jpg',
    bio: 'Classe 1966, radici a Cappadocia da quattro generazioni. 15 anni in una multinazionale americana per l\'outsourcing IT nella PA (Ministero del Tesoro, Agricoltura, Pubblica Istruzione). Ex assessore a Orvieto, vicepresidente del Centro Pari Opportunità della Regione Umbria. Un\'esperienza istituzionale ampia messa al servizio del territorio.',
  },
  {
    nome: 'Gaetano Santarelli',
    foto: '/gaetano-santarelli.jpg',
    bio: 'Medico Veterinario, marito e padre. I suoi antenati erano i Sarti del Colle di Cappadocia, figure che hanno vestito per generazioni la popolazione del territorio. Porta con sé la storia di questo luogo e il desiderio di restituirgli l\'antico prestigio.',
  },
  {
    nome: 'Giuseppe Di Giacomo',
    foto: '/giuseppe-di-giacomo.jpg',
    bio: 'Nato e cresciuto a Verrecchie, da oltre 20 anni lavora a Roma nel trasporto pubblico. Ex vicesindaco con assessorato allo sport e al sociale, conosce le esigenze di tutti i paesi del Comune. Promotore della cicloturistica e della GranSimbruini, crede nel turismo sportivo e naturalistico come motore di sviluppo.',
  },
  {
    nome: 'Pamela Di Croce',
    foto: '/pamela-di-croce.jpg',
    bio: '40 anni, educatrice da 10 anni nella scuola dell\'infanzia. Persona seria, responsabile e legata al territorio. Si candida per una politica vicina alle persone, capace di ascoltare le esigenze di tutti e trasformarle in azioni reali. Vuole investire nella sicurezza, nella valorizzazione degli spazi pubblici e nella preservazione delle bellezze naturalistiche e montane.',
  },
  {
    nome: 'Veronica Pellegrini',
    foto: '/veronica-pellegrini.jpg',
    bio: 'Nata a Roma nel 1977, insegnante di arti applicate, diplomata al liceo artistico e all\'Accademia delle Belle Arti di Roma. Presidente dell\'associazione culturale Antichi Mestieri, attiva nel rinnovamento del territorio di Camporotondo. Con la sua esperienza associativa e culturale, vuole fare di più per la comunità sostenendo iniziative di aggregazione e valorizzazione del territorio.',
  },
]

const articoli = [
  {
    titolo: 'Tour di presentazione',
    descrizione: 'Leggi l\'articolo sull\'avvio del tour di presentazione della lista.',
    href: 'https://marsicalive.it/al-via-a-cappadocia-il-tour-di-presentazione-della-lista-radici-per-il-futuro/',
  },
  {
    titolo: 'Bilancio degli incontri',
    descrizione: 'Leggi il resoconto del fine settimana di incontri con Fabio De Angelis.',
    href: 'https://marsicalive.it/fine-settimana-di-incontri-per-radici-per-il-futuro-il-bilancio-del-tour-di-fabio-de-angelis/',
  },
]

const vignette = [
  { src: '/vignetta-1.png', alt: 'Vignetta 1' },
  { src: '/vignetta-2.jpg', alt: 'Vignetta 2' },
  { src: '/vignetta-3.png', alt: 'Vignetta 3' },
  { src: '/vignetta-4.png', alt: 'Vignetta 4' },
]

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { href: '#visione', label: 'Visione' },
    { href: '#programma', label: 'Programma' },
    { href: '#sindaco', label: 'Sindaco' },
    { href: '#consiglieri', label: 'Consiglieri' },
    { href: '#vignette', label: 'Vignette' },
    { href: '#link', label: 'Link' },
    { href: '#come-votare', label: 'Come si vota' },
  ]
  return (
    <nav
      style={{ background: 'rgba(15,36,25,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(196,154,46,0.2)' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
          <img src="/simbolo.png" alt="Simbolo Radici per il Futuro" className="h-9 w-9 object-contain" style={{ filter: 'drop-shadow(0 1px 6px rgba(196,154,46,0.4))' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--parchment)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.2 }}>
            Radici per il Futuro
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--parchment)', transition: 'opacity 0.2s' }} />
          ))}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: 'var(--forest-deep)', borderTop: '1px solid rgba(196,154,46,0.15)' }} className="md:hidden px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setMobileOpen(false)} style={{ fontSize: '1rem', padding: '0.25rem 0' }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="top"
      style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 55%, #2a5040 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(196,154,46,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(181,82,46,0.06) 0%, transparent 50%)',
      }} />
      {/* Decorative lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div className="text-center px-6 py-32 relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up" style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            border: '1px solid rgba(196,154,46,0.5)',
            borderRadius: '2px',
            padding: '0.3rem 1.2rem',
            fontFamily: 'Source Serif 4, serif',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
          }}>
            Elezioni Amministrative · 24–25 maggio 2026 · Comune di Cappadocia
          </span>
        </div>

        {/* Simbolo */}
        <div className="animate-scale-in flex justify-center mb-8">
          <img
            src="/simbolo.png"
            alt="Simbolo della lista Radici per il Futuro"
            className="simbolo-glow"
            style={{ width: 'min(180px, 40vw)', height: 'auto' }}
          />
        </div>

        {/* Title */}
        <h1
          className="hero-title animate-fade-up-delay-1"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.0,
            margin: '0 0 1rem',
            letterSpacing: '-0.01em',
          }}
        >
          Radici per
          <br />
          <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>il Futuro</em>
        </h1>

        <p
          className="hero-subtitle animate-fade-up-delay-2"
          style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: 'rgba(240,233,210,0.8)',
            marginBottom: '2.5rem',
            fontWeight: 300,
            letterSpacing: '0.06em',
          }}
        >
          Candidato Sindaco: <strong style={{ color: 'var(--parchment)', fontWeight: 500 }}>Fabio De Angelis</strong>
        </p>

        {/* Quote */}
        <blockquote
          className="animate-fade-up-delay-3"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'rgba(240,233,210,0.65)',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '1.25rem',
            textAlign: 'left',
          }}
        >
          "Fate come l'albero, che cambia le foglie e conserva le radici. Cambiate le vostre idee e conservate i principi."
        </blockquote>

        <div className="animate-fade-up-delay-4 flex flex-wrap gap-4 justify-center">
          <a
            href="#programma"
            style={{
              background: 'var(--gold)',
              color: 'var(--forest-deep)',
              padding: '0.75rem 2rem',
              fontFamily: 'Source Serif 4, serif',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 500,
              borderRadius: '2px',
              transition: 'background 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
          >
            Il Programma
          </a>
          <a
            href="#consiglieri"
            style={{
              border: '1px solid rgba(240,233,210,0.4)',
              color: 'var(--parchment)',
              padding: '0.75rem 2rem',
              fontFamily: 'Source Serif 4, serif',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'border-color 0.2s',
              display: 'inline-block',
            }}
          >
            I Candidati
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ color: 'rgba(240,233,210,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scorri</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(196,154,46,0.6), transparent)' }} />
      </div>
    </section>
  )
}

function Visione() {
  return (
    <section id="visione" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          La nostra visione
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: 'var(--forest)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          Le radici ci danno la forza di protendere verso l'alto
        </h2>
        <div className="section-divider-left" />
        <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-mid)' }} className="space-y-5">
          <p>
            Come simbolo della nostra lista abbiamo scelto le radici di un albero di faggio che affondano nelle montagne innevate, sorvolate da un grifone. È un simbolo che racconta chi siamo: <strong style={{ color: 'var(--text-dark)' }}>metodo nella gestione, concretezza nel compimento delle opere, responsabilità verso ogni singolo abitante</strong>.
          </p>
          <p>
            Il territorio di Cappadocia è articolato: <strong style={{ color: 'var(--text-dark)' }}>Cappadocia, Petrella Liri, Verrecchie e Camporotondo</strong> non vanno viste come entità separate, ma come un unico corpo. Vogliamo un Comune capace di garantire il benessere di chi ci vive, chi ci lavora e chi ha voglia di villeggiarci.
          </p>
          <p>
            Crediamo nella partecipazione attiva. Punteremo sul dialogo continuo con i residenti, sulla cooperazione con i Comuni vicini e chiederemo con forza il sostegno della Regione per dare risposte concrete alle esigenze locali. Il futuro del nostro Comune non dipende solo dall'amministrazione — dipende dalla cura che ognuno di noi dedica ogni giorno al proprio territorio.
          </p>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--forest)', borderRadius: '4px', borderLeft: '4px solid var(--gold)' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--parchment)', margin: 0, lineHeight: 1.6 }}>
            "Non aspettate: facciamo squadra per un Comune di cui andare orgogliosi."
          </p>
          <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.85rem', color: 'var(--gold-light)', marginTop: '0.75rem', letterSpacing: '0.05em' }}>— Fabio De Angelis</p>
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ sezione }: { sezione: typeof programmaSezioni[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setOpen(v => !v)}>
        <span>{sezione.titolo}</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: 'var(--gold)' }}
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`accordion-content ${open ? 'open' : ''}`}
        style={{ maxHeight: open ? '600px' : '0' }}
      >
        <ul style={{ paddingBottom: '1.5rem', margin: 0, paddingLeft: 0, listStyle: 'none' }} className="space-y-3">
          {sezione.punti.map((p, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, marginTop: '0.3rem', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'block' }} />
              <span style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.95rem', color: 'rgba(240,233,210,0.85)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--gold-light)' }}>{p.label}: </strong>{p.testo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Programma() {
  return (
    <section
      id="programma"
      style={{ background: 'linear-gradient(170deg, var(--forest-deep), var(--forest) 80%, #1e4533)', padding: '6rem 1.5rem', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="max-w-3xl mx-auto">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          Mandato 2026–2031
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Il Programma Elettorale
        </h2>
        <div className="section-divider-left" />
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.95rem', color: 'rgba(240,233,210,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Sette assi di intervento per un Comune più efficiente, sicuro e vivo. Seleziona ogni area per leggere le misure concrete.
        </p>
        <div>
          {programmaSezioni.map(s => <AccordionItem key={s.id} sezione={s} />)}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
    </section>
  )
}

function CandidatoSindaco() {
  return (
    <section id="sindaco" style={{ background: 'var(--parchment)', padding: '6rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          Candidato Sindaco
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: 'var(--forest)', marginBottom: '2.5rem', lineHeight: 1.2 }}>
          Fabio De Angelis
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Photo */}
          <div style={{ flexShrink: 0, width: 'min(300px, 100%)' }}>
            <div style={{
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(26, 58, 40, 0.2)',
              border: '3px solid var(--mist)',
              position: 'relative',
            }}>
              <img
                src="/fabio-de-angelis.jpg"
                alt="Fabio De Angelis — Candidato Sindaco"
                style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,36,25,0.7), transparent)', padding: '1.5rem 1rem 0.75rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#fff', fontWeight: 500 }}>Fabio De Angelis</span>
              </div>
            </div>
            <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'var(--forest)', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
                Candidato Sindaco
              </span>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#fff', margin: '0.25rem 0 0', fontWeight: 500 }}>
                Lista "Radici per il Futuro"
              </p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ flex: 1 }}>
            <div className="section-divider-left" style={{ marginTop: '0' }} />
            <div style={{ fontFamily: 'Source Serif 4, serif', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-mid)' }} className="space-y-4">
              <p>
                Fabio De Angelis, 50 anni, nato ad Avezzano e coniugato a Petrella Liri.
              </p>
              <p>
                Ingegnere libero professionista ed ufficiale con grado di capitano ruolo tecnico dell’Arma dei Carabinieri (attualmente in congedo).
              </p>
              <p>
                 Ha esperienza nella gestione di progetti di opere pubbliche e infrastrutture strategiche, maturata in ambito militare, istituzionale e civile sia in Italia presso il Comando Generale dell’Arma dei Carabinieri, Direzione Lavori del Genio, sia all’estero (Giordania ed Israele) in collaborazione col Ministero dei Beni Culturali.
              </p>
              <p>
                Si presenta alla guida della lista <strong style={{ color: 'var(--forest)' }}>"Radici per il Futuro"</strong> con un progetto chiaro e preciso per il Comune di Cappadocia: valorizzare il territorio.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['Trasparenza', 'Partecipazione', 'Territorio', 'Sicurezza', 'Turismo', 'Comunità'].map(tag => (
                <span key={tag} style={{
                  border: '1px solid var(--forest)',
                  borderRadius: '2px',
                  padding: '0.3rem 0.9rem',
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--forest)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CandidatiConsiglieri() {
  return (
    <section id="consiglieri" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            La squadra
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            I Candidati Consiglieri
          </h2>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '1rem', color: 'var(--text-mid)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Dieci candidati con esperienze diverse, unite da un legame autentico con il territorio di Cappadocia.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {consiglieri.map((c) => (
            <article key={c.nome} className="candidate-card" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: 'var(--mist)' }}>
                <img
                  src={c.foto}
                  alt={c.nome}
                  style={{ width: '100%', height: '100%', objectFit: c.fotoContain ? 'contain' : 'cover', objectPosition: 'top', display: 'block', background: c.fotoContain ? 'var(--cream)' : undefined }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top, rgba(15,36,25,0.5), transparent)' }} />
              </div>
              <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)', margin: '0 0 0.25rem' }}>
                  {c.nome}
                </h3>
                <div style={{ width: '30px', height: '2px', background: 'var(--gold)', marginBottom: '0.75rem' }} />
                <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)', margin: 0 }}>
                  {c.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vignette() {
  const [zoomedVignetta, setZoomedVignetta] = useState<typeof vignette[number] | null>(null)

  return (
    <section
      id="vignette"
      style={{
        background: 'linear-gradient(160deg, var(--bark) 0%, #3a2010 100%)',
        padding: '6rem 1.5rem',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="max-w-4xl mx-auto text-center">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          Campagna elettorale
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
          Vignette
        </h2>
        <div className="section-divider" />
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '1rem', color: 'rgba(240,233,210,0.7)', marginBottom: '3rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 3rem' }}>
          Le vignette della campagna di <em>Radici per il Futuro</em> — immagini, humor e messaggi autentici dalla voce del territorio.
        </p>

        {/* Vignette grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {vignette.map(v => (
            <button
              key={v.src}
              type="button"
              onClick={() => setZoomedVignetta(v)}
              aria-label={`Ingrandisci ${v.alt}`}
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(196,154,46,0.25)',
                background: 'rgba(255,255,255,0.05)',
                padding: 0,
                cursor: 'zoom-in',
                boxShadow: '0 16px 36px rgba(15, 36, 25, 0.2)',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                Apri immagine ingrandita
              </span>
              <img
                src={v.src}
                alt={v.alt}
                style={{ width: '100%', aspectRatio: '3 / 4', height: 'auto', display: 'block', objectFit: 'contain', background: 'rgba(240,233,210,0.08)' }}
              />
              <span style={{ position: 'absolute', right: '0.75rem', bottom: '0.75rem', width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(15,36,25,0.78)', color: 'var(--gold-light)', display: 'grid', placeItems: 'center' }}>
                <ZoomIn size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        {zoomedVignetta && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={zoomedVignetta.alt}
            onClick={() => setZoomedVignetta(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 80,
              background: 'rgba(15,36,25,0.9)',
              padding: 'clamp(1rem, 4vw, 3rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
            }}
          >
            <button
              type="button"
              aria-label="Chiudi immagine ingrandita"
              onClick={() => setZoomedVignetta(null)}
              style={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                border: '1px solid rgba(232,201,106,0.5)',
                background: 'rgba(15,36,25,0.85)',
                color: 'var(--parchment)',
                fontSize: '1.5rem',
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              <X size={22} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <img
              src={zoomedVignetta.src}
              alt={zoomedVignetta.alt}
              onClick={(event) => event.stopPropagation()}
              style={{
                maxWidth: 'min(100%, 980px)',
                maxHeight: '92vh',
                objectFit: 'contain',
                borderRadius: '4px',
                boxShadow: '0 30px 90px rgba(0,0,0,0.45)',
                background: 'var(--cream)',
                cursor: 'default',
              }}
            />
          </div>
        )}

        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.85rem', color: 'rgba(240,233,210,0.45)', fontStyle: 'italic' }}>
          Le vignette della campagna elettorale di Radici per il Futuro.
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
    </section>
  )
}

function Link() {
  return (
    <section id="link" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          Rassegna stampa
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Link
        </h2>
        <div className="section-divider" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
          {articoli.map((articolo) => (
            <a
              key={articolo.href}
              href={articolo.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'left',
                padding: '1.25rem',
                borderRadius: '4px',
                border: '1px solid var(--mist)',
                background: 'var(--parchment)',
                color: 'var(--forest)',
                textDecoration: 'none',
                boxShadow: '0 10px 32px rgba(26,58,40,0.08)',
              }}
            >
              <span style={{ flexShrink: 0, width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: 'var(--forest)', color: 'var(--gold-light)', display: 'grid', placeItems: 'center' }}>
                <ExternalLink size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <strong style={{ display: 'block', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: 1.2 }}>{articolo.titolo}</strong>
                <span style={{ display: 'block', marginTop: '0.35rem', fontFamily: 'Source Serif 4, serif', fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-mid)' }}>{articolo.descrizione}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComeVotare() {
  const passi = [
    {
      n: '1',
      titolo: 'Ritira la scheda elettorale',
      testo: 'Recati al seggio con il tuo documento d\'identità e la tessera elettorale. Il Comune di Cappadocia ha meno di 15.000 abitanti: riceverai un\'unica scheda.',
    },
    {
      n: '2',
      titolo: 'Vota la lista',
      testo: 'Traccia un segno sul simbolo della lista "Radici per il Futuro". In questo modo esprimi il tuo voto sia per il candidato sindaco Fabio De Angelis sia per la lista.',
    },
    {
      n: '3',
      titolo: 'Esprimi la tua preferenza (facoltativa)',
      testo: 'Nei comuni fino a 15.000 abitanti puoi scrivere il cognome (o nome e cognome) di uno dei candidati consiglieri nell\'apposito spazio. La preferenza è facoltativa ma preziosa.',
    },
    {
      n: '4',
      titolo: 'Consegna la scheda e vota',
      testo: 'Piega la scheda come indicato, inseriscila nell\'urna e il giudice di gara timbrerà la tua tessera elettorale. Hai votato — grazie per aver partecipato.',
    },
  ]

  return (
    <section id="come-votare" style={{ background: 'var(--parchment)', padding: '6rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
          Istruzioni per il voto
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Come si vota
        </h2>
        <div className="section-divider-left" />
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '1rem', color: 'var(--text-mid)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Le elezioni si tengono il <strong style={{ color: 'var(--forest)' }}>24 e 25 maggio 2026</strong>. Per i Comuni con meno di 15.000 abitanti si vota in un unico turno e con un'unica scheda.
        </p>

        <div>
          {passi.map((p, i) => (
            <div key={i} className="voto-step">
              <div className="voto-step-num">{p.n}</div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)', margin: '0 0 0.4rem' }}>
                  {p.titolo}
                </h3>
                <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.95rem', color: 'var(--text-mid)', margin: 0, lineHeight: 1.7 }}>
                  {p.testo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--forest)', borderRadius: '4px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <svg style={{ flexShrink: 0, marginTop: '2px' }} width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9.5" stroke="var(--gold-light)" strokeWidth="1.2" />
            <path d="M11 10v5M11 7.5v.5" stroke="var(--gold-light)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <div>
            <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.9rem', color: 'rgba(240,233,210,0.85)', margin: 0, lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--gold-light)' }}>Orari dei seggi:</strong> sabato 24 maggio 7:00–23:00, domenica 25 maggio 7:00–15:00. Porta con te un documento d'identità valido e la tessera elettorale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        background: 'var(--forest-deep)',
        padding: '3rem 1.5rem',
        borderTop: '2px solid var(--gold)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/simbolo.png" alt="Simbolo" style={{ height: '50px', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(196,154,46,0.3))' }} />
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: '#fff', margin: 0 }}>Radici per il Futuro</p>
            <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.75rem', color: 'var(--gold-light)', margin: '0.2rem 0 0', letterSpacing: '0.08em' }}>Comune di Cappadocia · Elezioni 2026</p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontStyle: 'italic', color: 'rgba(240,233,210,0.6)', margin: 0 }}>
            "Le radici ci danno la forza di volare."
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.75rem', color: 'rgba(240,233,210,0.4)', margin: 0 }}>
            Candidato Sindaco
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'var(--parchment)', margin: '0.2rem 0 0' }}>
            Fabio De Angelis
          </p>
        </div>
      </div>
      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '0.7rem', color: 'rgba(240,233,210,0.3)', margin: 0, letterSpacing: '0.05em' }}>
          Materiale elettorale — Lista "Radici per il Futuro" · Elezioni Amministrative 24–25 maggio 2026 · Comune di Cappadocia (AQ)
        </p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Visione />
        <Programma />
        <CandidatoSindaco />
        <CandidatiConsiglieri />
        <Vignette />
        <Link />
        <ComeVotare />
      </main>
      <Footer />
    </>
  )
}
