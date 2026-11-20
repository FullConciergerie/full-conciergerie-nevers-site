import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site full-nevers-conciergerie.fr : éditeur, directeur de la publication, hébergeur, protection des données personnelles et mesure d'audience.",
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions légales — Full Conciergerie - Nevers',
    description: 'Éditeur, hébergeur et données personnelles du site full-nevers-conciergerie.fr.',
    url: '/mentions-legales',
  },
};

const EMAIL = 'contact@full-nevers-conciergerie.fr';

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px', padding: '14px 0', borderBottom: '1px solid var(--ligne)' }}>
      <dt style={{ flex: '0 0 200px', fontSize: 13, letterSpacing: '0.04em', color: 'var(--texte-mute)' }}>{label}</dt>
      <dd style={{ flex: '1 1 240px', minWidth: 0, margin: 0, fontSize: 15, color: 'var(--vert-deep)', lineHeight: 1.6 }}>{children}</dd>
    </div>
  );
}

function Block({ num, title, children, alt = false }: { num: string; title: string; children: ReactNode; alt?: boolean }) {
  return (
    <section style={{ background: alt ? 'var(--vert-sauge-soft)' : 'var(--ivoire)', paddingTop: 'clamp(48px, 7vw, 80px)', paddingBottom: 'clamp(48px, 7vw, 80px)' }}>
      <div className="container">
        <div className="service-section-grid">
          <div className="service-col-sticky" style={{ position: 'sticky', top: 96 }}>
            <span className="serif" style={{ fontSize: 12, color: 'var(--or)', letterSpacing: '0.12em', display: 'block', marginBottom: 12 }}>{num}</span>
            <span className="gold-rule" style={{ display: 'block', marginBottom: 20 }} />
            <h2 className="serif" style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', color: 'var(--vert-deep)', lineHeight: 1.1 }}>{title}</h2>
          </div>
          <div style={{ minWidth: 0 }}>{children}</div>
        </div>
      </div>
    </section>
  );
}

const text = { fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75, color: 'var(--texte-mute)', margin: '0 0 16px' } as const;

export default function MentionsLegalesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="bg-charbon"
        style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(56px, 9vw, 110px)' }}
      >
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <p className="eyebrow">
              <span className="or-mark">✦</span>&nbsp; Informations légales
            </p>
            <h1
              className="serif"
              style={{ fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.04, marginTop: 20, color: 'var(--ivoire)' }}
            >
              Mentions <em>légales</em>
            </h1>
            <p style={{ marginTop: 24, fontSize: 'clamp(17px, 1.4vw, 20px)', color: 'rgba(245,241,232,0.72)', maxWidth: '52ch', lineHeight: 1.65 }}>
              Site full-nevers-conciergerie.fr, édité par la SAS Full Nevers Conciergerie.
            </p>
          </div>
        </div>
      </section>

      <Block num="01" title="Éditeur du site">
        <dl style={{ margin: 0 }}>
          <Row label="Éditeur">SAS Full Nevers Conciergerie</Row>
          <Row label="Forme juridique">Société par actions simplifiée (SAS) au capital de 1 000 €</Row>
          <Row label="Siège social">16 quai de Mantoue, 58000 Nevers</Row>
          <Row label="SIRET">915 379 226 00029</Row>
          <Row label="RCS">RCS Nevers 915 379 226</Row>
          <Row label="TVA intracommunautaire">FR81 915 379 226</Row>
          <Row label="Bureau et accueil">23 faubourg de Lyon, 58000 Nevers</Row>
          <Row label="Téléphone">
            <a href="tel:+33376150229" style={{ color: 'var(--vert-deep)' }}>03 76 15 02 29</a>
          </Row>
          <Row label="Email">
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--vert-deep)', overflowWrap: 'anywhere' }}>{EMAIL}</a>
          </Row>
        </dl>
      </Block>

      <Block num="02" title="Directeur de la publication" alt>
        <p style={text}>M. Delil Torgursul, Président.</p>
      </Block>

      <Block num="03" title="Hébergeur">
        <dl style={{ margin: 0 }}>
          <Row label="Hébergeur">Vercel Inc.</Row>
          <Row label="Adresse">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</Row>
        </dl>
      </Block>

      <Block num="04" title="Données personnelles" alt>
        <p style={text}>
          Les formulaires du site (demande de devis, contact, estimation, candidature prestataire)
          recueillent les informations que vous saisissez : nom, adresse email, téléphone,
          informations sur votre logement et votre message.
        </p>
        <p style={text}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Finalité.</strong> Ces données servent
          uniquement à répondre à votre demande : vous recontacter, établir un devis ou étudier
          votre candidature. Elles ne sont ni vendues ni cédées à des tiers. Seuls nos prestataires
          techniques (hébergement du site, envoi des emails) y ont accès, pour le compte de la SAS
          Full Nevers Conciergerie.
        </p>
        <p style={text}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Durée de conservation.</strong> Elles sont
          conservées le temps nécessaire au traitement de votre demande et, si vous devenez client,
          à la durée de notre relation commerciale.
        </p>
        <p style={text}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Vos droits.</strong> Conformément au
          Règlement général sur la protection des données (RGPD), vous pouvez demander à accéder à
          vos données, à les rectifier ou à les supprimer en écrivant à{' '}
          <a href={`mailto:${EMAIL}`} style={{ color: 'var(--vert-deep)', overflowWrap: 'anywhere' }}>{EMAIL}</a>.
          Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).
        </p>
        <p style={{ ...text, marginBottom: 0 }}>
          Les conditions de vente de nos prestations figurent dans nos{' '}
          <Link href="/cgv" style={{ color: 'var(--vert-deep)', textDecoration: 'underline' }}>conditions générales</Link>.
        </p>
      </Block>

      <Block num="05" title="Mesure d'audience">
        <p style={text}>
          Pour savoir d&apos;où viennent nos visiteurs et quelles pages sont consultées, le site utilise
          l&apos;outil de mesure d&apos;audience PostHog, dont les données sont hébergées dans l&apos;Union
          européenne, ainsi que les statistiques de fréquentation de notre hébergeur Vercel.
        </p>
        <p style={text}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Sans cookie.</strong> Cette mesure ne
          dépose aucun cookie et n&apos;enregistre rien sur votre appareil. Vous n&apos;êtes pas reconnu
          d&apos;une visite à l&apos;autre, ni suivi sur d&apos;autres sites.
        </p>
        <p style={text}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Ce qui est mesuré.</strong> Les pages
          consultées, le site d&apos;où vous venez, le type d&apos;appareil et de navigateur, une
          localisation approximative (pays, ville), les clics vers notre application et le fait
          qu&apos;un formulaire a bien été envoyé. Le contenu des formulaires n&apos;est jamais transmis à
          l&apos;outil de mesure, et votre navigation n&apos;est pas enregistrée en vidéo.
        </p>
        <p style={{ ...text, marginBottom: 0 }}>
          <strong style={{ color: 'var(--vert-deep)', fontWeight: 600 }}>Adresse IP.</strong> Votre adresse IP
          sert uniquement, à la réception, à estimer cette localisation approximative. Elle n&apos;est
          pas conservée. Ces statistiques ne servent ni à la publicité ni à la revente de données.
        </p>
      </Block>
    </>
  );
}
