import type { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '../components/BookingWidget';

export const metadata: Metadata = {
  title: 'Nos logements à Nevers — Réservez en direct',
  description:
    "Découvrez et réservez directement nos logements à Nevers et en Nièvre. Appartements et maisons de standing, -10% par rapport à Airbnb, paiement sécurisé, contact direct avec l'équipe.",
  alternates: { canonical: '/logements' },
  openGraph: {
    title: 'Nos logements à Nevers — Réservation directe',
    description:
      'Réservez directement nos logements à Nevers. Meilleur prix garanti, sans commission plateforme.',
    url: '/logements',
  },
};

export default function LogementsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          BANDEAU INTRO — compact, juste ce qu'il faut
      ══════════════════════════════════════════════════════════ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(72px, 10vw, 100px)', paddingBottom: 32 }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '12px 40px',
            }}
          >
            {/* Titre */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>
                <span className="or-mark">✦</span>&nbsp; Réservation directe · -10% vs Airbnb
              </p>
              <h1
                className="serif"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  lineHeight: 1.08,
                  color: 'var(--ivoire)',
                  margin: 0,
                }}
              >
                Nos logements <em>à Nevers</em>
              </h1>
            </div>

            {/* Chips avantages — ligne droite à droite sur desktop */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                alignItems: 'center',
              }}
            >
              {[
                { icon: '🏷️', label: 'Meilleur prix garanti' },
                { icon: '🔒', label: 'Paiement sécurisé' },
                { icon: '💬', label: 'Contact direct' },
                { icon: '✅', label: 'Confirmation immédiate' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    border: '1px solid rgba(201,168,104,0.3)',
                    color: 'var(--ivoire)',
                    fontSize: 12,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WIDGET DE RÉSERVATION — au premier plan, immédiatement
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--vert-sauge-soft)',
          paddingTop: 32,
          paddingBottom: 'clamp(48px, 6vw, 80px)',
        }}
      >
        <div className="container">
          {/* Widget SuperHote — hauteur auto via postMessage */}
          <div
            style={{
              background: 'white',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 2px 32px rgba(15,38,37,0.1)',
              border: '1px solid var(--ligne)',
            }}
          >
            <BookingWidget />
          </div>

          {/* Mention sécurité */}
          <p
            style={{
              marginTop: 16,
              textAlign: 'center',
              fontSize: 12,
              color: 'var(--texte-mute)',
              letterSpacing: '0.03em',
            }}
          >
            🔒 Paiement sécurisé par Stripe · Confirmation instantanée · Taxe de séjour incluse
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          AVANTAGES — bande horizontale compacte
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-ivoire" style={{ paddingTop: 'clamp(40px, 5vw, 64px)', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(20px, 3vw, 40px)',
            }}
          >
            {[
              {
                num: '01',
                title: 'Prix bas garanti',
                text: "Sans les frais Airbnb (jusqu'à 15%) ni Booking — nos tarifs directs sont toujours les meilleurs.",
              },
              {
                num: '02',
                title: 'Flexibilité maximale',
                text: 'Lit bébé, arrivée tardive, panier local… Parlez-nous directement, on s\'adapte.',
              },
              {
                num: '03',
                title: 'Équipe locale',
                text: 'Basés à Nevers. En cas de besoin, vous appelez une vraie personne qui connaît les lieux.',
              },
            ].map(({ num, title, text }) => (
              <div key={num} className="reveal" style={{ display: 'flex', gap: 16 }}>
                <span
                  className="serif"
                  style={{
                    fontSize: 13,
                    color: 'var(--or)',
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {num}
                </span>
                <div>
                  <h2
                    className="serif"
                    style={{
                      fontSize: 'clamp(16px, 1.6vw, 20px)',
                      marginBottom: 8,
                      color: 'var(--vert-deep)',
                    }}
                  >
                    {title}
                  </h2>
                  <p style={{ color: 'var(--texte-mute)', lineHeight: 1.65, fontSize: 14, margin: 0 }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-charbon" style={{ paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 24,
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            <span className="gold-rule" />
            <h2
              className="serif reveal"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: 'var(--ivoire)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Une question sur un logement ?
            </h2>
            <p
              className="reveal"
              style={{
                color: 'rgba(245,241,232,0.68)',
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Notre équipe répond 7j/7 — disponibilités, tarifs spéciaux, accueil personnalisé.
            </p>
            <div
              className="reveal"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
            >
              <Link href="/contact" className="btn btn-gold">
                Nous contacter
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href="tel:+33376150229" className="btn btn-ghost-light">
                📞 03 76 15 02 29
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
