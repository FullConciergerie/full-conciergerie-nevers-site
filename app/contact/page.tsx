import type { Metadata } from 'next';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact · Devis gratuit',
  description:
    "Confiez votre logement à Full Conciergerie Nevers. Devis gratuit sous 24h. Téléphone : 03 76 15 02 29 — Email : contact@full-nevers-conciergerie.fr",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Full Conciergerie Nevers',
    description: 'Devis gratuit sous 24h pour la gestion de votre Airbnb à Nevers.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ─────────── Hero ─────────── */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'calc(var(--pad-section) * 0.7)', paddingBottom: 'calc(var(--pad-section) * 0.55)' }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            maxWidth: '900px',
          }}
        >
          <p className="eyebrow">
            <span className="or-mark">◆</span> Contact — Devis gratuit
          </p>
          <h1
            style={{
              fontSize: 'clamp(44px, 6.5vw, 88px)',
              lineHeight: '1.02',
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              letterSpacing: '-0.015em',
            }}
          >
            Discutons de{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>votre projet.</em>
          </h1>
          <span className="gold-rule"></span>
          <p
            className="lede"
            style={{ maxWidth: '60ch', fontSize: '19px', lineHeight: 1.55 }}
          >
            Que vous souhaitiez nous confier la gestion de votre logement ou simplement
            obtenir un devis, on est là pour vous répondre. Premier échange{' '}
            <strong style={{ color: 'var(--or)' }}>gratuit et sans engagement</strong>{' '}
            — réponse sous 24 h ouvrées.
          </p>
        </div>
      </section>

      {/* ─────────── Contenu principal ─────────── */}
      <section className="bg-ivoire" style={{ paddingTop: 'calc(var(--pad-section) * 0.8)' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gap: 'clamp(48px, 6vw, 88px)',
            gridTemplateColumns: '1fr',
          }}
        >
          <div
            className="contact-grid"
            style={{
              display: 'grid',
              gap: 'clamp(48px, 6vw, 88px)',
            }}
          >
            {/* ── Coordonnées ── */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <p className="eyebrow">
                  <span className="or-mark">◆</span> Nos coordonnées
                </p>
                <h2
                  className="serif"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    lineHeight: '1.1',
                    color: 'var(--vert-deep)',
                  }}
                >
                  Joignez-nous directement.
                </h2>
                <span className="gold-rule"></span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <li>
                  <p
                    className="eyebrow"
                    style={{ fontSize: '10px', marginBottom: '6px' }}
                  >
                    Téléphone
                  </p>
                  <a
                    href="tel:+33376150229"
                    className="serif"
                    style={{
                      fontSize: 'clamp(24px, 2.4vw, 32px)',
                      color: 'var(--vert-deep)',
                      display: 'inline-block',
                      borderBottom: '1px solid var(--or)',
                      paddingBottom: '2px',
                    }}
                  >
                    03 76 15 02 29
                  </a>
                </li>

                <li>
                  <p
                    className="eyebrow"
                    style={{ fontSize: '10px', marginBottom: '6px' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:contact@full-nevers-conciergerie.fr"
                    className="serif"
                    style={{
                      fontSize: 'clamp(18px, 1.6vw, 22px)',
                      color: 'var(--vert-deep)',
                      wordBreak: 'break-all',
                    }}
                  >
                    contact@full-nevers-conciergerie.fr
                  </a>
                </li>

                <li>
                  <p
                    className="eyebrow"
                    style={{ fontSize: '10px', marginBottom: '6px' }}
                  >
                    Adresse
                  </p>
                  <p
                    className="serif"
                    style={{ fontSize: '20px', color: 'var(--vert-deep)' }}
                  >
                    16 Quai de Mantoue
                    <br />
                    58000 Nevers
                  </p>
                </li>

                <li>
                  <p
                    className="eyebrow"
                    style={{ fontSize: '10px', marginBottom: '6px' }}
                  >
                    Horaires
                  </p>
                  <p style={{ fontSize: '15px', color: 'var(--texte-mute)', lineHeight: 1.7 }}>
                    Lundi — Samedi : 9 h — 19 h
                    <br />
                    Dimanche : sur rendez-vous
                  </p>
                </li>
              </ul>

              {/* Encart "appel direct" */}
              <div
                style={{
                  marginTop: '8px',
                  padding: '24px 26px',
                  border: '1px solid var(--ligne)',
                  borderLeft: '3px solid var(--or)',
                  background: 'rgba(201, 168, 104, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <p
                  className="serif"
                  style={{ fontSize: '20px', color: 'var(--vert-deep)' }}
                >
                  Vous préférez un appel direct&nbsp;?
                </p>
                <p style={{ fontSize: '14px', color: 'var(--texte-mute)', lineHeight: 1.6 }}>
                  Appelez-nous au{' '}
                  <a
                    href="tel:+33376150229"
                    style={{ color: 'var(--vert-deep)', borderBottom: '1px solid var(--or)' }}
                  >
                    03 76 15 02 29
                  </a>{' '}
                  — on prend le temps de discuter de votre logement et de vos attentes.
                </p>
              </div>
            </aside>

            {/* ── Formulaire ── */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  marginBottom: '32px',
                }}
              >
                <p className="eyebrow">
                  <span className="or-mark">◆</span> Ou laissez-nous un message
                </p>
                <h2
                  className="serif"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    lineHeight: '1.1',
                    color: 'var(--vert-deep)',
                  }}
                >
                  Écrivez-nous.
                </h2>
                <span className="gold-rule"></span>
                <p style={{ color: 'var(--texte-mute)', fontSize: '15px', maxWidth: '52ch' }}>
                  Réponse sous 24 h ouvrées, gratuite et sans engagement.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Petite media query inline pour passer en 2 colonnes sur desktop */}
      <style>{`
        @media (min-width: 980px) {
          .contact-grid {
            grid-template-columns: minmax(280px, 360px) 1fr !important;
            align-items: start;
          }
        }
      `}</style>
    </>
  );
}
