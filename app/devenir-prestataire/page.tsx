import Link from 'next/link';
import type { Metadata } from 'next';
import { PrestataireForm } from './prestataire-form';

export const metadata: Metadata = {
  title: 'Devenir prestataire · Rejoindre Full Conciergerie Nevers',
  description:
    "Vous cherchez des missions à Nevers pour arrondir vos fins de mois ? Rejoignez notre réseau de prestataires indépendants. Ménage, espaces verts, petits travaux, livraisons. Inscription en quelques minutes.",
  alternates: { canonical: '/devenir-prestataire' },
  openGraph: {
    title: 'Devenir prestataire — Full Conciergerie Nevers',
    description:
      "Travaillez quand vous voulez, gagnez en plus. Nous gérons l'administratif.",
    url: '/devenir-prestataire',
  },
};

export default function DevenirPrestatairePage() {
  return (
    <>
      {/* ─────────── Hero ─────────── */}
      <section className="bg-charbon" style={{ paddingTop: 'calc(var(--pad-section) * 0.7)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px' }}>
          <p className="eyebrow"><span className="or-mark">◆</span> Recrutement — Réseau prestataires</p>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: '1.02', fontFamily: 'var(--serif)', fontWeight: 400 }}>
            Des missions près de chez vous,
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>quand vous voulez.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '60ch', fontSize: '20px', lineHeight: 1.55 }}>
            Vous cherchez à arrondir vos fins de mois&nbsp;? Travailler quand vous le
            souhaitez&nbsp;? Découvrir un nouveau métier sans quitter le vôtre&nbsp;? Full
            Conciergerie Nevers recrute des indépendant·e·s motivé·e·s pour rejoindre son
            réseau de prestataires locaux.
          </p>
          <div className="hero-actions" style={{ marginTop: '8px' }}>
            <a href="#postuler" className="btn btn-gold">
              <span className="cta-label">Postuler en 3 minutes</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#comment" className="btn btn-ghost-light">
              <span className="cta-label">Comment ça marche</span>
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
              <p className="trust-num" style={{ fontSize: '64px' }}>
                100<span className="suffix">%</span>
              </p>
              <p className="trust-label">Flexible — Vos jours, vos créneaux, vos missions. Aucun engagement de durée.</p>
            </div>
            <div className="trust-item center">
              <span className="gold-rule" aria-hidden="true" />
              <p className="trust-num" style={{ fontSize: '64px' }}>
                0<span className="suffix">€</span>
              </p>
              <p className="trust-label">Admin à votre charge — Facturation, paiements, planning, communication client : on s&apos;occupe de tout.</p>
            </div>
            <div className="trust-item end">
              <span className="gold-rule" aria-hidden="true" />
              <p className="trust-num" style={{ fontSize: '64px' }}>
                7<span className="suffix">j</span>
              </p>
              <p className="trust-label">Paiements rapides — Règlement sous 7 jours après chaque mission validée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Profils recherchés ─────────── */}
      <section className="bg-ivoire">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span className="or-mark">◆</span> 01 — Profils recherchés</p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Plusieurs métiers,
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>plusieurs niveaux.</em>
            </h2>
            <p className="lede">
              Que vous soyez débutant·e ou expert·e, il y a probablement une mission pour
              vous dans notre réseau local.
            </p>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div className="services-grid" style={{ marginTop: '64px' }}>
            <ProfileCard
              num="01"
              title="Ménage / Entretien"
              text="Logements meublés entre voyageurs. Standard hôtelier exigé."
            />
            <ProfileCard
              num="02"
              title="Petits travaux"
              text="Plomberie, électricité légère, ameublement, peinture."
            />
            <ProfileCard
              num="03"
              title="Espaces verts"
              text="Tonte, taille, désherbage, arrosage. Saisonnier ou régulier."
            />
            <ProfileCard
              num="04"
              title="Entretien piscine"
              text="Nettoyage, traitement de l'eau, ouverture / fermeture saisonnière."
            />
            <ProfileCard
              num="05"
              title="Conciergerie d'entreprise"
              text="Services aux salariés en entreprise : pressing, courses, gardiennage."
            />
            <ProfileCard
              num="06"
              title="Livraisons & courses"
              text="Petits-déjeuners voyageurs, paniers locaux, courses sur demande."
            />
          </div>
        </div>
      </section>

      {/* ─────────── Comment ça marche (vert) ─────────── */}
      <section className="processus" id="comment">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" style={{ color: 'rgba(245,241,232,0.55)' }}>
              <span className="or-mark">◆</span> 02 — Comment ça marche
            </p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Trois étapes,
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>zéro friction.</em>
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div className="steps" style={{ marginTop: '64px' }}>
            <div className="step">
              <p className="step-num">01</p>
              <p className="step-meta">Étape 1 — Candidature</p>
              <h3 className="step-title">Vous postulez en 3 minutes</h3>
              <p className="step-body">
                Vous remplissez le formulaire ci-dessous. Aucun engagement. On garde votre
                profil même si on n&apos;a pas de mission tout de suite.
              </p>
            </div>
            <div className="step">
              <p className="step-num">02</p>
              <p className="step-meta">Étape 2 — Échange</p>
              <h3 className="step-title">On vous rappelle sous 48h</h3>
              <p className="step-body">
                Par téléphone ou WhatsApp. On valide votre profil ensemble, vos
                disponibilités, votre zone d&apos;intervention.
              </p>
            </div>
            <div className="step">
              <p className="step-num">03</p>
              <p className="step-meta">Étape 3 — Mission</p>
              <h3 className="step-title">Première mission</h3>
              <p className="step-body">
                On vous propose des missions qui collent à vos disponibilités. Vous
                acceptez, on vous brief, vous y allez. Paiement sous 7 jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Parrainage ─────────── */}
      <section className="bg-sable">
        <div className="container">
          <div className="section-head" style={{ maxWidth: '900px' }}>
            <p className="eyebrow"><span className="or-mark">◆</span> 03 — Programme de parrainage</p>
            <h2 className="title" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              50&nbsp;€ offerts
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>
                pour chaque filleul·e qui démarre.
              </em>
            </h2>
            <p className="lede" style={{ fontSize: '18px' }}>
              Vous connaissez quelqu&apos;un qui pourrait nous rejoindre&nbsp;? Pour chaque
              personne que vous nous recommandez et qui valide sa première mission, vous
              touchez <strong>50&nbsp;€ en bon d&apos;achat ou virement</strong>. Cumulable, sans
              limite.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--texte-mute)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
              Demandez à votre filleul·e d&apos;indiquer votre nom dans le champ
              «&nbsp;Qui vous a recommandé&nbsp;?&nbsp;» du formulaire. C&apos;est tout.
            </p>
            <span className="gold-rule" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ─────────── Formulaire ─────────── */}
      <section className="bg-ivoire" id="postuler">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span className="or-mark">◆</span> 04 — Candidature</p>
            <h2 className="title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Postulez
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--or)' }}>maintenant.</em>
            </h2>
            <p className="lede">5 à 10 minutes pour remplir. On vous recontacte sous 48h.</p>
            <span className="gold-rule" aria-hidden="true" />
          </div>

          <div style={{ marginTop: '48px' }}>
            <PrestataireForm />
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
                q="Faut-il être auto-entrepreneur pour postuler ?"
                a="Pas obligatoirement à l'inscription. Si vous ne l'êtes pas encore, on vous accompagne dans les démarches (très simples, 100% en ligne, environ 15 minutes)."
              />
              <FaqItem
                q="À quelle fréquence pourrai-je travailler ?"
                a="Ça dépend de votre disponibilité et des missions à pourvoir. Certains prestataires font 2-3h par semaine, d'autres font des temps pleins. Vous choisissez."
              />
              <FaqItem
                q="Comment suis-je rémunéré·e ?"
                a="Vous nous facturez vos missions (mensuellement ou à la mission, selon vos préférences). Paiement sous 7 jours après validation."
              />
              <FaqItem
                q="Vous travaillez dans quelle zone ?"
                a="Nevers et 30 km autour : Magny-Cours, Pougues-les-Eaux, La Charité-sur-Loire, Imphy, Decize, etc. Plus la zone autour de votre domicile est large, plus vous aurez d'opportunités."
              />
              <FaqItem
                q="Combien je peux espérer gagner ?"
                a="Dépend du profil et du volume. Indicatif : 15-25 €/h en ménage, 20-40 €/h en petits travaux, selon votre statut et expérience. On en parle au téléphone."
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
            Parlons-en
            {' '}
            <em>directement.</em>
          </h2>
          <p>
            Préférez-vous nous appeler ou nous écrire ? Nous sommes joignables tous les
            jours, de 8h à 20h.
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

function ProfileCard({
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
