import Link from 'next/link';
import type { Metadata } from 'next';
import { EntrepreneurForm } from './entrepreneur-form';

export const metadata: Metadata = {
  title: 'Lancer votre conciergerie · Avec accompagnement Full Conciergerie',
  description:
    "Vous voulez lancer une conciergerie dans votre ville ? Nous vous accompagnons : méthode, outils, marque, prestataires. De la prospection au premier client en moins de 3 mois.",
  alternates: { canonical: '/lancer-une-conciergerie' },
  openGraph: {
    title: 'Lancez votre conciergerie — Full Conciergerie',
    description:
      'Accompagnement complet pour ouvrir votre conciergerie locale, sur le modèle qui marche à Nevers.',
    url: '/lancer-une-conciergerie',
  },
};

export default function LancerConciergerioePage() {
  return (
    <>
      {/* ─────────── Hero ─────────── */}
      <section className="bg-charbon" style={{ paddingTop: 'calc(var(--pad-section) * 0.7)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px' }}>
          <p className="eyebrow"><span className="or-mark">◆</span> Entrepreneurs — Licence de marque</p>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: '1.02', fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Lancez votre conciergerie
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>dans votre ville.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '60ch', fontSize: '20px', lineHeight: 1.55 }}>
            La location courte durée explose partout en France. Chaque ville moyenne a un
            besoin réel d&apos;une conciergerie locale, professionnelle, qui simplifie la
            vie des propriétaires. Nous avons construit le modèle à Nevers — clients fidèles,
            équipe stable, méthode rodée. Nous accompagnons désormais les entrepreneur·e·s
            qui veulent répliquer ce modèle dans leur ville.
          </p>
          <div className="hero-actions" style={{ marginTop: '8px' }}>
            <a href="#postuler" className="btn btn-gold">
              <span className="cta-label">Demander un appel</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#methode" className="btn btn-ghost-light">
              <span className="cta-label">Notre méthode</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── 3 promesses (trust band) ─────────── */}
      <section className="trust" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="gold-rule" aria-hidden="true" />
              <p className="trust-num" style={{ fontSize: '52px' }}>
                Méthode
              </p>
              <p className="trust-label">Prouvée — Le playbook complet : acquisition clients, gestion prestataires, tarification, outils tech.</p>
            </div>
            <div className="trust-item center">
              <span className="gold-rule" aria-hidden="true" />
              <p className="trust-num" style={{ fontSize: '52px' }}>
                Marque
              </p>
              <p className="trust-label">+ crédibilité — Vous bénéficiez de la marque Full Conciergerie et de notre track record dès le 1ᵉʳ rendez-vous.</p>
            </div>
            <div className="trust-item end">
              <span className="gold-rule" aria-hidden="true" />
              <p className="trust-num" style={{ fontSize: '52px' }}>
                Mentorat
              </p>
              <p className="trust-label">Réel — Pas un PDF. De vrais points hebdo, du mentorat opérationnel, et des outils mutualisés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Ce que nous apportons ─────────── */}
      <section className="bg-ivoire" id="methode">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span className="or-mark">◆</span> 01 — Ce que nous apportons</p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Du projet
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>à la première mission.</em>
            </h2>
            <p className="lede">
              Tout ce qu&apos;il faut pour passer de l&apos;idée à la première mission en
              quelques semaines.
            </p>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div className="services-grid" style={{ marginTop: '64px' }}>
            <BenefitCard
              num="01"
              title="Marque & identité"
              text="Vous opérez sous Full Conciergerie [Votre Ville]. Charte graphique, site, supports."
            />
            <BenefitCard
              num="02"
              title="Outils tech"
              text="Notre plateforme de gestion des prestations et des plannings, déjà rodée."
            />
            <BenefitCard
              num="03"
              title="Process opérationnels"
              text="Onboarding propriétaires, contrôle qualité, gestion linge, communication voyageurs."
            />
            <BenefitCard
              num="04"
              title="Grille tarifaire"
              text="Pricing testé sur le terrain, calculateur de devis, modèles de contrats."
            />
            <BenefitCard
              num="05"
              title="Acquisition clients"
              text="Stratégie de prospection locale, scripts éprouvés, contenus pour Google."
            />
            <BenefitCard
              num="06"
              title="Mentorat 1:1"
              text="Points hebdomadaires les 3 premiers mois, puis mensuels. Accès direct à Delil."
            />
          </div>
        </div>
      </section>

      {/* ─────────── Profil idéal ─────────── */}
      <section className="bg-sable">
        <div className="container">
          <div className="section-head" style={{ maxWidth: '900px' }}>
            <p className="eyebrow"><span className="or-mark">◆</span> 02 — Profil recherché</p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Nous sélectionnons
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>nos partenaires.</em>
            </h2>
            <p className="lede">
              Pas par snobisme — pour maximiser nos chances communes de réussite.
            </p>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div
            style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px 64px',
            }}
          >
            <Criterion
              num="01"
              title="Ancré·e localement"
              text="Vous vivez (ou souhaitez vous installer) dans la ville visée. Réseau local = avantage clé."
            />
            <Criterion
              num="02"
              title="Sens du service"
              text="Vous comprenez que ce métier, c'est avant tout de la relation humaine."
            />
            <Criterion
              num="03"
              title="Capacité à exécuter"
              text="Vous êtes prêt·e à vous retrousser les manches les premiers mois."
            />
            <Criterion
              num="04"
              title="Investissement modéré"
              text="Budget réaliste pour démarrer (de l'ordre de 5 à 20 k€ selon la formule)."
            />
          </div>
        </div>
      </section>

      {/* ─────────── Comment ça se passe (vert) ─────────── */}
      <section className="processus">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" style={{ color: 'rgba(245,241,232,0.55)' }}>
              <span className="or-mark">◆</span> 03 — Notre processus
            </p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Quatre étapes,
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>trois mois.</em>
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div className="steps" style={{ marginTop: '64px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="step">
              <p className="step-num">01</p>
              <p className="step-meta">30 min — Gratuit</p>
              <h3 className="step-title">Appel découverte</h3>
              <p className="step-body">
                On apprend à se connaître. On cadre votre projet et votre marché local.
              </p>
            </div>
            <div className="step">
              <p className="step-num">02</p>
              <p className="step-meta">Étude — 1 semaine</p>
              <h3 className="step-title">Faisabilité</h3>
              <p className="step-body">
                Analyse de votre marché local. Aller / ne pas y aller — décision honnête.
              </p>
            </div>
            <div className="step">
              <p className="step-num">03</p>
              <p className="step-meta">Onboarding — 2 à 4 sem.</p>
              <h3 className="step-title">Formation intensive</h3>
              <p className="step-body">
                Formation opérationnelle + ouverture officielle de votre conciergerie.
              </p>
            </div>
            <div className="step">
              <p className="step-num">04</p>
              <p className="step-meta">Long terme</p>
              <h3 className="step-title">Accompagnement</h3>
              <p className="step-body">
                Points hebdo 3 mois, puis mensuels. Communauté entre conciergeries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Formulaire ─────────── */}
      <section className="bg-ivoire" id="postuler">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span className="or-mark">◆</span> 04 — Candidature</p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Postulez pour
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>un appel découverte.</em>
            </h2>
            <p className="lede">
              5 minutes à remplir. On revient vers vous sous 48h pour caler un premier
              échange de 30 minutes (gratuit, sans engagement).
            </p>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div style={{ marginTop: '48px' }}>
            <EntrepreneurForm />
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="bg-ivoire" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="faq-grid">
            <div className="section-head" style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
              <p className="eyebrow"><span className="or-mark">◆</span> 05 — FAQ</p>
              <h2 className="title" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
                Questions
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>fréquentes.</em>
              </h2>
              <span className="gold-rule" aria-hidden="true" />
            </div>

            <div className="faq-list">
              <FaqItem
                q="C'est une franchise ?"
                a="Pas au sens juridique strict. Plutôt un partenariat avec licence de marque et accompagnement. Plus souple, moins coûteux qu'une vraie franchise — mais avec les mêmes bénéfices opérationnels."
              />
              <FaqItem
                q="Combien ça coûte ?"
                a="Cela dépend de la formule choisie. On définit ensemble lors de l'appel découverte. Ordre d'idée : un investissement de démarrage entre 5 000 et 20 000 €, puis une part variable proportionnelle à votre activité."
              />
              <FaqItem
                q="Faut-il être déjà entrepreneur ?"
                a="Non. Beaucoup de candidats viennent du salariat ou sont en reconversion. Ce qui compte : votre profil humain, votre énergie, et votre connaissance du marché local."
              />
              <FaqItem
                q="Vous prenez combien de partenaires par an ?"
                a="Volontairement peu — 4 à 8 maximum. Nous voulons maintenir la qualité de l'accompagnement et garder une vraie communauté entre conciergeries."
              />
              <FaqItem
                q="Et si la ville est déjà couverte ?"
                a="Une seule conciergerie Full par zone. Premier·ère arrivé·e, premier·ère servi·e. Plus vous candidatez tôt, plus vous avez de chances que votre ville soit disponible."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA final ─────────── */}
      <section className="final-cta">
        <div className="container">
          <p className="eyebrow" style={{ color: 'rgba(245,241,232,0.55)' }}>
            <span className="or-mark">◆</span> Une question avant de postuler&nbsp;?
          </p>
          <h2>
            Parlons de
            {' '}
            <em>votre projet.</em>
          </h2>
          <p>
            Préférez-vous nous appeler ou nous écrire ? Premier échange gratuit, sans
            engagement.
          </p>
          <span className="gold-rule" aria-hidden="true" />
          <div className="actions">
            <a href="tel:+33376150229" className="btn btn-gold">
              <span className="cta-label">📞 03 76 15 02 29</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="https://wa.me/33661753738"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <span className="cta-label">WhatsApp</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <Link href="/contact" className="btn btn-ghost-light">
              <span className="cta-label">Contact</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────── helpers ───────── */

function BenefitCard({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <article className="service-card">
      <p className="service-num">{num}</p>
      <h3 className="service-title">{title}</h3>
      <p className="service-body">{text}</p>
    </article>
  );
}

function Criterion({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'var(--or)',
          textTransform: 'uppercase',
        }}
      >
        {num}
      </p>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '28px', lineHeight: 1.15 }}>
        {title}
      </h3>
      <p style={{ color: 'var(--texte-mute)', fontSize: '15px', lineHeight: 1.55 }}>
        {text}
      </p>
      <span
        aria-hidden="true"
        style={{ width: '32px', height: '1px', background: 'var(--or)', marginTop: '4px' }}
      />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item" style={{ padding: '24px 0' }}>
      <summary
        className="faq-q"
        style={{ listStyle: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
      >
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true" />
      </summary>
      <div className="faq-a-inner" style={{ paddingTop: '16px' }}>{a}</div>
    </details>
  );
}
