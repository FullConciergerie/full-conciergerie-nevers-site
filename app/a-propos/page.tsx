import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos — Notre équipe nivernaise',
  description:
    "Découvrez l'équipe de Full Conciergerie Nevers : Delil Torgursul, fondateur, et ses prestataires locaux de confiance pour gérer votre Airbnb à Nevers.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — Full Conciergerie Nevers',
    description:
      'Une équipe nivernaise au service des propriétaires de logements en location courte durée.',
    url: '/a-propos',
  },
};

const EQUIPE = [
  {
    initiale: 'M',
    name: 'Marc',
    role: 'Blanchisserie interne',
    description:
      'Pilote notre atelier en interne. Le linge revient toujours impeccable, lavé à 60°C, plié et livré à l\'heure.',
  },
  {
    initiale: 'S',
    name: 'Sophie',
    role: 'Prestataire ménage',
    description:
      'L\'œil expert qui repère le moindre détail. Standard hôtelier garanti à chaque passage.',
  },
  {
    initiale: 'T',
    name: 'Thomas',
    role: 'Prestataire ménage',
    description:
      'Réactif, fiable, attentif aux instructions. Idéal pour les logements à haute rotation.',
  },
  {
    initiale: 'L',
    name: 'Léa',
    role: 'Prestataire ménage',
    description:
      'Discrète et méticuleuse. Apprécie particulièrement les beaux logements de caractère.',
  },
  {
    initiale: 'É',
    name: 'Émilie',
    role: 'Prestataire ménage',
    description:
      'Polyvalente, intervient sur tous types de logements avec la même rigueur et le même soin.',
  },
  {
    initiale: '+',
    name: 'Et bien d\'autres…',
    role: 'Partenaires locaux',
    description:
      'Restaurateurs, loueurs de vélos, artisans locaux : un réseau qui s\'étoffe pour vos voyageurs.',
  },
];

const ENGAGEMENTS = [
  {
    num: '01',
    title: 'Transparence totale',
    body: 'Rapports détaillés, photos après chaque mission, accès permanent à votre planning. Aucune surprise.',
  },
  {
    num: '02',
    title: 'Réactivité 7j/7',
    body: 'Réponse en moins de 2h en journée. Présents pour vos voyageurs à toute heure, tous les jours.',
  },
  {
    num: '03',
    title: 'Qualité hôtelière',
    body: 'Le même standard pour tous les logements, qu\'il s\'agisse d\'un studio ou d\'une maison de caractère.',
  },
  {
    num: '04',
    title: 'Ancrage local',
    body: 'Notre équipe vit et travaille à Nevers. Nous connaissons chaque quartier, chaque artisan, chaque route.',
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}
      >
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <p className="eyebrow reveal">
              <span className="or-mark">✦</span>&nbsp; Qui sommes-nous
            </p>
            <h1
              className="serif reveal"
              style={{ fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.04, marginTop: 20, color: 'var(--ivoire)' }}
            >
              Une équipe locale,
              <br />
              <em>passionnée.</em>
            </h1>
            <p
              className="reveal"
              style={{ marginTop: 24, fontSize: 'clamp(17px, 1.4vw, 20px)', color: 'rgba(245,241,232,0.72)', maxWidth: '52ch', lineHeight: 1.65 }}
            >
              Fondée à Nevers par des Nivernais, Full Conciergerie est une
              équipe de terrain — pas une franchise ni un algorithme.
              Chaque logement est géré avec le même soin que si c'était le nôtre.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FONDATEUR ══ */}
      <section
        className="bg-ivoire"
        style={{ paddingTop: 'clamp(64px, 10vw, 112px)', paddingBottom: 'clamp(64px, 10vw, 112px)' }}
      >
        <div className="container">
          <div className="about-founder-grid">
            {/* Photo */}
            <div className="reveal" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image
                src="/delil-portrait.jpg"
                alt="Delil Torgursul, fondateur de Full Conciergerie Nevers"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(min-width: 960px) 40vw, 100vw"
              />
              {/* Encadrement doré */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(201,168,104,0.3)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Texte */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
              <div>
                <span className="serif" style={{ fontSize: 12, color: 'var(--or)', letterSpacing: '0.12em', display: 'block', marginBottom: 12 }}>Fondateur</span>
                <span className="gold-rule" style={{ display: 'block', marginBottom: 20 }} />
                <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--vert-deep)', lineHeight: 1.1 }}>
                  Delil Torgursul
                </h2>
              </div>

              <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.8, color: 'var(--texte-mute)' }}>
                Originaire de Nevers, Delil a fondé Full Conciergerie avec une conviction simple :
                la location courte durée doit rester un plaisir pour les propriétaires, pas une corvée.
              </p>
              <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.8, color: 'var(--texte-mute)' }}>
                Fort de plusieurs années d'expérience dans l'hospitalité et la gestion locative,
                il a constitué un réseau de prestataires locaux fiables et exigeants.
                Chaque membre partage la même conviction : offrir aux voyageurs une expérience
                irréprochable et aux propriétaires une tranquillité totale.
              </p>
              <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.8, color: 'var(--texte-mute)' }}>
                Au-delà de la gestion, c'est aussi l'envie de faire rayonner Nevers et sa région
                auprès des voyageurs qui anime l'équipe au quotidien.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <Link href="/contact" className="btn btn-gold">
                  Travailler ensemble
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a href="tel:+33376150229" className="btn btn-vert">
                  03 76 15 02 29
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NOS ENGAGEMENTS ══ */}
      <section
        style={{ background: 'var(--vert-sauge-soft)', paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}
      >
        <div className="container">
          <div className="reveal" style={{ marginBottom: 56, maxWidth: 560 }}>
            <p className="eyebrow">
              <span className="or-mark">✦</span>&nbsp; Ce qui nous définit
            </p>
            <h2
              className="serif"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--vert-deep)', lineHeight: 1.1, marginTop: 16 }}
            >
              Nos engagements
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'clamp(24px, 3vw, 40px)',
            }}
          >
            {ENGAGEMENTS.map(({ num, title, body }) => (
              <div
                key={num}
                className="reveal"
                style={{
                  padding: 'clamp(24px, 3vw, 36px)',
                  background: 'var(--ivoire)',
                  borderTop: '2px solid var(--or)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span className="serif" style={{ fontSize: 11, color: 'var(--or)', letterSpacing: '0.12em' }}>{num}</span>
                <h3 className="serif" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', color: 'var(--vert-deep)', lineHeight: 1.2, margin: 0 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--texte-mute)', lineHeight: 1.7, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ L'ÉQUIPE ══ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}
      >
        <div className="container">
          <div className="reveal" style={{ marginBottom: 56, textAlign: 'center' }}>
            <p className="eyebrow">
              <span className="or-mark">✦</span>&nbsp; L'équipe en coulisses
            </p>
            <h2
              className="serif"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--ivoire)', lineHeight: 1.1, marginTop: 16 }}
            >
              Ceux qui font le travail
            </h2>
            <p
              style={{
                marginTop: 16,
                color: 'rgba(245,241,232,0.65)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.65,
                maxWidth: '52ch',
                margin: '16px auto 0',
              }}
            >
              Des prestataires de confiance, sélectionnés sur leurs résultats,
              qui travaillent main dans la main pour votre logement.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(16px, 2vw, 24px)',
            }}
          >
            {EQUIPE.map(({ initiale, name, role, description }) => (
              <div
                key={name}
                className="reveal"
                style={{
                  padding: 'clamp(20px, 2.5vw, 28px)',
                  border: '1px solid rgba(201,168,104,0.18)',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                {/* Monogramme */}
                <div
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid rgba(201,168,104,0.4)',
                    color: 'var(--or)',
                  }}
                >
                  <span className="serif" style={{ fontSize: 18 }}>{initiale}</span>
                </div>
                <div>
                  <p className="serif" style={{ fontSize: 17, color: 'var(--ivoire)', marginBottom: 2 }}>{name}</p>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--or)',
                      marginBottom: 10,
                      fontFamily: 'var(--mono)',
                    }}
                  >
                    {role}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(245,241,232,0.6)', lineHeight: 1.65 }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section
        className="bg-ivoire"
        style={{ paddingTop: 'clamp(56px, 8vw, 96px)', paddingBottom: 'clamp(56px, 8vw, 96px)' }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 24,
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            <span className="gold-rule" />
            <h2
              className="serif reveal"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--vert-deep)', lineHeight: 1.1, margin: 0 }}
            >
              Discutons de votre projet
            </h2>
            <p
              className="reveal"
              style={{ color: 'var(--texte-mute)', fontSize: 16, lineHeight: 1.7, margin: 0 }}
            >
              Devis gratuit, réponse sous 24h, sans engagement.
              Chaque logement est différent — parlons-en.
            </p>
            <div
              className="reveal"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
            >
              <Link href="/contact" className="btn btn-gold">
                Demander un devis gratuit
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href="tel:+33376150229" className="btn btn-vert">
                03 76 15 02 29
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
