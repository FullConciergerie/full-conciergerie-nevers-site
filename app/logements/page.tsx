import type { Metadata } from 'next';
import Link from 'next/link';

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

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * WEBKEY SUPERHOTE
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Connecte-toi sur app.superhote.com
 * 2. Va dans Notifications → onglet "Shortcodes personnalisés"
 *    (ou Paramètres → Profil utilisateur selon la version)
 * 3. Cherche la valeur "SH WebKey" ou "Webkey"
 * 4. Remplace la valeur ci-dessous par ta clé
 * ─────────────────────────────────────────────────────────────────────────────
 */
const SUPERHOTE_WEBKEY = '5WubL6qaur36Xr4JaYFQNiW9e';

const BOOKING_URL = `https://app.superhote.com/#/get-available-rentals/${SUPERHOTE_WEBKEY}`;

export default function LogementsPage() {
  const webkeyMissing = SUPERHOTE_WEBKEY === 'TON_WEBKEY_ICI';

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — fond vert profond
      ══════════════════════════════════════════════════════════ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}
      >
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <p className="eyebrow reveal">
              <span className="or-mark">✦</span>&nbsp; Réservation directe
            </p>
            <h1
              className="serif reveal"
              style={{
                fontSize: 'clamp(44px, 7vw, 88px)',
                lineHeight: 1.04,
                marginTop: 20,
                color: 'var(--ivoire)',
              }}
            >
              Nos logements
              <br />
              <em>à Nevers</em>
            </h1>
            <p
              className="reveal"
              style={{
                marginTop: 24,
                fontSize: 'clamp(16px, 1.3vw, 19px)',
                color: 'rgba(245,241,232,0.72)',
                maxWidth: '52ch',
                lineHeight: 1.65,
              }}
            >
              Réservez directement sans passer par Airbnb ou Booking.
              Vous économisez les frais de service plateforme et vous
              traitez en direct avec notre équipe à Nevers.
            </p>

            {/* Chips avantages */}
            <div
              className="reveal"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                marginTop: 36,
              }}
            >
              {[
                { icon: '🏷️', label: 'Meilleur prix garanti' },
                { icon: '🔒', label: 'Paiement 100% sécurisé' },
                { icon: '💬', label: 'Contact direct avec l\'équipe' },
                { icon: '✅', label: 'Confirmation immédiate' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 16px',
                    border: '1px solid rgba(201,168,104,0.3)',
                    color: 'var(--ivoire)',
                    fontSize: 13,
                    letterSpacing: '0.02em',
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
          AVANTAGES — 3 colonnes ivoire
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-ivoire">
        <div className="container">
          <p className="eyebrow reveal" style={{ marginBottom: 48 }}>
            <span className="or-mark">✦</span>&nbsp; Pourquoi réserver en direct
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
            }}
          >
            {[
              {
                num: '01',
                title: 'Prix bas garanti',
                text: 'En réservant directement, vous bénéficiez de nos meilleurs tarifs — sans les frais de service Airbnb (jusqu\'à 15%) ni Booking.',
              },
              {
                num: '02',
                title: 'Flexibilité maximale',
                text: 'Des demandes spéciales ? Un lit bébé, une arrivée tardive, un panier local à l\'accueil ? Parlez-nous directement, on s\'adapte.',
              },
              {
                num: '03',
                title: 'Une équipe locale',
                text: 'Nous sommes basés à Nevers. En cas de besoin pendant votre séjour, vous appelez une vraie personne qui connaît les lieux.',
              },
            ].map(({ num, title, text }) => (
              <div key={num} className="reveal">
                <span
                  className="serif"
                  style={{
                    fontSize: 13,
                    color: 'var(--or)',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: 16,
                  }}
                >
                  {num}
                </span>
                <span
                  className="gold-rule"
                  style={{ marginBottom: 20, display: 'block' }}
                />
                <h2
                  className="serif"
                  style={{
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    marginBottom: 14,
                    color: 'var(--vert-deep)',
                  }}
                >
                  {title}
                </h2>
                <p style={{ color: 'var(--texte-mute)', lineHeight: 1.7, fontSize: 15 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MOTEUR DE RÉSERVATION — widget SuperHote
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--vert-sauge-soft)',
          paddingTop: 'var(--pad-section)',
          paddingBottom: 'var(--pad-section)',
        }}
      >
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">
              <span className="or-mark">✦</span>&nbsp; Disponibilités en temps réel
            </p>
            <h2 className="serif title" style={{ color: 'var(--vert-deep)' }}>
              Choisissez vos dates,
              <br />
              <em>réservez en 2 minutes</em>
            </h2>
            <p className="lede">
              Sélectionnez vos dates d&apos;arrivée et de départ, le nombre
              de voyageurs, et consultez nos logements disponibles. Paiement
              sécurisé directement en ligne.
            </p>
          </div>

          {/* Widget SuperHote */}
          <div
            style={{
              background: 'white',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 2px 24px rgba(15,38,37,0.08)',
              border: '1px solid var(--ligne)',
            }}
          >
            {webkeyMissing ? (
              /* ── Placeholder visible tant que la Webkey n'est pas configurée ── */
              <div
                style={{
                  padding: 'clamp(48px, 8vw, 96px) clamp(24px, 6vw, 64px)',
                  textAlign: 'center',
                  background: 'var(--ivoire-2)',
                }}
              >
                <p
                  className="serif"
                  style={{ fontSize: 28, color: 'var(--vert-deep)', marginBottom: 16 }}
                >
                  Widget de réservation
                </p>
                <p style={{ color: 'var(--texte-mute)', maxWidth: '48ch', margin: '0 auto 24px', fontSize: 15 }}>
                  Pour activer ce module, remplace{' '}
                  <code
                    style={{
                      background: 'rgba(15,38,37,0.08)',
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 13,
                    }}
                  >
                    TON_WEBKEY_ICI
                  </code>{' '}
                  par ta Webkey SuperHote dans{' '}
                  <code style={{ fontSize: 13 }}>app/logements/page.tsx</code>.
                </p>
                <p style={{ color: 'var(--texte-mute)', fontSize: 13 }}>
                  📍 SuperHote → Notifications → Shortcodes personnalisés → cherche{' '}
                  <strong>SH WebKey</strong>
                </p>
              </div>
            ) : (
              <iframe
                id="bookingengine"
                src={BOOKING_URL}
                width="100%"
                height="3879"
                style={{ display: 'block', border: 'none' }}
                allowFullScreen
                sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-top-navigation"
                title="Moteur de réservation — Full Conciergerie Nevers"
                loading="lazy"
              />
            )}
          </div>

          {/* Note sous le widget */}
          <p
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontSize: 12,
              color: 'var(--texte-mute)',
              letterSpacing: '0.03em',
            }}
          >
            🔒 Paiement sécurisé par Stripe · Confirmation instantanée ·
            Taxe de séjour incluse
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL — fond vert profond
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-charbon">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 28,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            <span className="gold-rule" />
            <h2
              className="serif reveal"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: 'var(--ivoire)',
                lineHeight: 1.1,
              }}
            >
              Une question sur un logement ?
            </h2>
            <p
              className="reveal"
              style={{
                color: 'rgba(245,241,232,0.68)',
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Notre équipe répond 7j/7. Disponibilités, tarifs spéciaux,
              accueil personnalisé — on s&apos;adapte à vos besoins.
            </p>
            <div
              className="reveal"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}
            >
              <Link href="/contact" className="btn btn-gold">
                Nous contacter
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a
                href="tel:+33376150229"
                className="btn btn-ghost-light"
              >
                📞 03 76 15 02 29
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
