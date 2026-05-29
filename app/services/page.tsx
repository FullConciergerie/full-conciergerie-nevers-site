import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos services — Full Conciergerie Nevers',
  description:
    "Découvrez tous nos services de conciergerie à Nevers : accueil voyageurs 7j/7, optimisation des tarifs, ménage hôtelier, photos pro, blanchisserie en interne, petites interventions.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos services — Full Conciergerie Nevers',
    description:
      'Une gestion complète de votre Airbnb à Nevers : accueil, optimisation, ménage, photos pro, linge.',
    url: '/services',
  },
};

const SERVICES = [
  {
    num: '01',
    title: 'Accueil voyageurs',
    tagline: 'Vous ne décrochez plus jamais le téléphone.',
    body: 'Toute la communication voyageur, de la première question avant réservation jusqu\'aux instructions de départ. Nous parlons en votre nom, dans le ton de votre logement.',
    items: [
      { label: 'Communication 7j/7', detail: 'Réponse rapide à toute heure, en français et en anglais.' },
      { label: 'Instructions d\'arrivée automatisées', detail: 'Envoyées la veille du check-in avec photos, code WiFi et accès.' },
      { label: 'Check-in flexible', detail: 'Boîte à clés sécurisée ou remise en main propre selon vos préférences.' },
      { label: 'Suivi proactif', detail: 'Message de bienvenue, gestion des imprévus, check à mi-séjour.' },
    ],
  },
  {
    num: '02',
    title: 'Optimisation tarifaire',
    tagline: 'Les bons prix au bon moment, automatiquement.',
    body: 'Analyse du marché nivernais et ajustement des tarifs en continu : saisonnalité, événements locaux (Magny-Cours, Pèlerinage de Sainte-Bernadette, salons), jours fériés.',
    items: [
      { label: 'Tarification dynamique quotidienne', detail: 'Basée sur la demande réelle et la concurrence locale.' },
      { label: 'Calendrier événements intégré', detail: 'Vos prix montent automatiquement les jours forts.' },
      { label: 'Promotions dernière minute', detail: 'Plutôt qu\'un week-end vide, on baisse de 10–15% intelligemment.' },
      { label: 'Rapport mensuel détaillé', detail: 'Revenus, taux d\'occupation, comparatif marché — en clair.' },
    ],
  },
  {
    num: '03',
    title: 'Ménage hôtelier',
    tagline: 'Comme dans un 4 étoiles. Vraiment.',
    body: 'Notre équipe assure un ménage irréprochable entre chaque voyageur. Standard hôtelier strict, vérifié par photo-rapport après chaque passage.',
    items: [
      { label: 'Ménage complet en moins de 3h', detail: 'Sols, sanitaires, cuisine, dépoussiérage, aération.' },
      { label: 'Lits faits, linge propre', detail: 'Le voyageur trouve un logement prêt-à-vivre.' },
      { label: 'Consommables vérifiés à chaque passage', detail: 'Savon, papier, café — rien ne manque.' },
      { label: 'Photo-rapport après chaque mission', detail: 'Traçabilité totale, partage instantané avec vous.' },
    ],
  },
  {
    num: '04',
    title: 'Blanchisserie & linge',
    tagline: 'Pas de stock à gérer. Du linge premium, toujours prêt.',
    body: 'Nous vous louons du linge de qualité hôtelière et gérons tout le cycle : récupération, lavage en interne, livraison propre. Vous n\'achetez plus de linge, vous ne le stockez plus.',
    items: [
      { label: 'Linge de qualité hôtelière', detail: 'Draps coton percale, serviettes éponge épaisses — renouvellement inclus.' },
      { label: 'Blanchisserie en interne', detail: 'Lavage à 60°C dans nos locaux. Coûts maîtrisés, qualité constante.' },
      { label: 'Récupération et livraison incluses', detail: 'Entre chaque séjour, sans surcoût caché.' },
      { label: 'Aucun stock à gérer', detail: 'Plus de placards qui débordent, plus de linge à racheter.' },
    ],
  },
  {
    num: '05',
    title: 'Photos professionnelles',
    tagline: 'Un logement bien photographié se loue 30% plus cher.',
    body: 'Shooting photo HDR + retouche professionnelle. Mise en valeur de chaque pièce et mise en ligne sur toutes vos plateformes.',
    items: [
      { label: 'Shooting complet toutes les pièces', detail: 'Reflex full-frame, trépied, éclairage si besoin.' },
      { label: 'Retouche professionnelle', detail: 'Balance des blancs, exposition, perspective — finition magazine.' },
      { label: 'Mise en ligne sur Airbnb, Booking…', detail: 'Avec descriptions optimisées pour la recherche.' },
      { label: 'Mise à jour annuelle incluse', detail: 'Vos photos restent fraîches, votre logement aussi.' },
    ],
  },
  {
    num: '06',
    title: 'Petites interventions',
    tagline: 'Un partenaire pour chaque besoin du logement.',
    body: 'Notre réseau local couvre tout ce qui peut arriver : un robinet qui fuit, un voyageur qui veut un panier petit-déjeuner, une haie à tailler avant le printemps.',
    items: [
      { label: 'Dépannages urgents', detail: 'Plomberie, électricité, serrurerie — intervention sous 24h.' },
      { label: 'Entretien des espaces verts', detail: 'Tonte, taille, arrosage selon votre fréquence.' },
      { label: 'Extras voyageurs sur demande', detail: 'Paniers locaux, petits-déjeuners, location de vélos.' },
      { label: 'Coordination de travaux', detail: 'Devis multi-artisans, suivi de chantier en votre absence.' },
    ],
  },
];

const INCLUS = [
  'Assurance dégâts voyageurs',
  'Rapport mensuel détaillé',
  'Accès permanent au planning',
  'Aucun engagement de durée',
];

export default function ServicesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}
      >
        <div className="container">
          <div style={{ maxWidth: 780 }}>
            <p className="eyebrow reveal">
              <span className="or-mark">✦</span>&nbsp; Conciergerie à Nevers
            </p>
            <h1
              className="serif reveal"
              style={{ fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.04, marginTop: 20, color: 'var(--ivoire)' }}
            >
              Vous touchez
              <br />
              <em>vos revenus.</em>
            </h1>
            <p
              className="reveal"
              style={{ marginTop: 24, fontSize: 'clamp(17px, 1.4vw, 20px)', color: 'rgba(245,241,232,0.72)', maxWidth: '52ch', lineHeight: 1.65 }}
            >
              Nous gérons tout le reste — de la première photo jusqu'au
              dernier départ voyageur. Une prestation 100% locale, assurée
              par notre équipe nivernaise.
            </p>

            {/* Stats */}
            <div
              className="reveal"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, marginTop: 48, border: '1px solid rgba(201,168,104,0.2)' }}
            >
              {[
                { n: '+15–30%', l: 'de revenus en plus grâce à l\'optimisation' },
                { n: '4,9 / 5', l: 'note moyenne sur les plateformes' },
                { n: '< 2h', l: 'de délai de réponse, 7j/7' },
              ].map(({ n, l }) => (
                <div
                  key={n}
                  style={{ padding: 'clamp(20px,3vw,32px)', borderRight: '1px solid rgba(201,168,104,0.2)', textAlign: 'center' }}
                >
                  <p className="serif" style={{ fontSize: 'clamp(28px,3.5vw,40px)', color: 'var(--or)', lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: 13, color: 'rgba(245,241,232,0.55)', marginTop: 8, lineHeight: 1.5 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      {SERVICES.map((s, i) => (
        <section
          key={s.num}
          style={{
            background: i % 2 === 0 ? 'var(--ivoire)' : 'var(--vert-sauge-soft)',
            paddingTop: 'clamp(56px, 8vw, 96px)',
            paddingBottom: 'clamp(56px, 8vw, 96px)',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(220px, 28%, 320px) 1fr',
                gap: 'clamp(32px, 6vw, 80px)',
                alignItems: 'start',
              }}
            >
              {/* Colonne gauche — titre sticky */}
              <div className="reveal" style={{ position: 'sticky', top: 96 }}>
                <span className="serif" style={{ fontSize: 12, color: 'var(--or)', letterSpacing: '0.12em', display: 'block', marginBottom: 12 }}>{s.num}</span>
                <span className="gold-rule" style={{ display: 'block', marginBottom: 20 }} />
                <h2 className="serif" style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', color: 'var(--vert-deep)', lineHeight: 1.1, marginBottom: 12 }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--or)', lineHeight: 1.5 }}>{s.tagline}</p>
              </div>

              {/* Colonne droite — contenu */}
              <div className="reveal">
                <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75, color: 'var(--texte-mute)', marginBottom: 32 }}>
                  {s.body}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {s.items.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        gap: 16,
                        paddingBottom: 20,
                        borderBottom: '1px solid var(--ligne)',
                      }}
                    >
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--or)', marginTop: 7 }} />
                      <div>
                        <p style={{ fontWeight: 500, color: 'var(--vert-deep)', fontSize: 15, marginBottom: 4 }}>{item.label}</p>
                        <p style={{ fontSize: 13, color: 'var(--texte-mute)', lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ══ TOUJOURS INCLUS ══ */}
      <section className="bg-charbon" style={{ paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">
              <span className="or-mark">✦</span>&nbsp; Toujours inclus, sans surcoût
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
            }}
          >
            {INCLUS.map((titre) => (
              <div
                key={titre}
                className="reveal"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '20px 24px',
                  border: '1px solid rgba(201,168,104,0.25)',
                }}
              >
                <span style={{ color: 'var(--or)', fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ color: 'var(--ivoire)', fontSize: 14, lineHeight: 1.4 }}>{titre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: 'var(--vert-sauge-soft)', paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 24,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            <span className="gold-rule" />
            <h2
              className="serif reveal"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--vert-deep)', lineHeight: 1.1, margin: 0 }}
            >
              Un logement à nous confier ?
            </h2>
            <p
              className="reveal"
              style={{ color: 'var(--texte-mute)', fontSize: 16, lineHeight: 1.7, margin: 0 }}
            >
              Devis gratuit, réponse sous 24h, sans engagement.
              Chaque logement est différent — parlons-en.
            </p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-gold">
                Demander un devis
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
