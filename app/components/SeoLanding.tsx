import Link from 'next/link';

/**
 * Gabarit des pages d'atterrissage SEO (une page = une recherche Google ciblée).
 * Contenu visible + JSON-LD (fil d'Ariane, Service, FAQ) cohérents entre eux.
 */
export type SeoSection = { title: string; body: string; items: { label: string; detail: string }[] };
export type SeoFaq = { q: string; a: string };

export function SeoLanding({
  slug,
  breadcrumb,
  eyebrow,
  h1,
  h1Em,
  intro,
  serviceName,
  serviceDescription,
  sections,
  faq,
  links,
}: {
  slug: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  h1Em: string;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  sections: SeoSection[];
  faq: SeoFaq[];
  links: { href: string; label: string }[];
}) {
  const url = `https://full-nevers-conciergerie.fr/${slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://full-nevers-conciergerie.fr' },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      url,
      provider: { '@id': 'https://full-nevers-conciergerie.fr/#business' },
      areaServed: [
        { '@type': 'City', name: 'Nevers' },
        { '@type': 'AdministrativeArea', name: 'Nièvre' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      {jsonLd.map((j, i) => (
        // eslint-disable-next-line react/no-danger
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      {/* HERO */}
      <section className="bg-charbon" style={{ paddingTop: 'clamp(100px, 16vw, 180px)', paddingBottom: 'clamp(56px, 9vw, 110px)' }}>
        <div className="container">
          <div style={{ maxWidth: 800 }}>
            <nav aria-label="Fil d'Ariane" style={{ fontSize: 13, color: 'rgba(245,241,232,0.55)', marginBottom: 20 }}>
              <Link href="/" style={{ color: 'inherit' }}>Accueil</Link> <span aria-hidden="true">›</span> {breadcrumb}
            </nav>
            <p className="eyebrow reveal">
              <span className="or-mark">✦</span>&nbsp; {eyebrow}
            </p>
            <h1 className="serif reveal" style={{ fontSize: 'clamp(40px, 6.4vw, 80px)', lineHeight: 1.05, marginTop: 20, color: 'var(--ivoire)' }}>
              {h1}
              <br />
              <em>{h1Em}</em>
            </h1>
            <p className="reveal" style={{ marginTop: 24, fontSize: 'clamp(17px, 1.4vw, 20px)', color: 'rgba(245,241,232,0.75)', maxWidth: '60ch', lineHeight: 1.65 }}>
              {intro}
            </p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
              <Link href="/estimation" className="btn btn-gold">
                Estimer mes revenus
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href="tel:+33376150229" className="btn btn-vert">03 76 15 02 29</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {sections.map((s, i) => (
        <section
          key={s.title}
          style={{
            background: i % 2 === 0 ? 'var(--ivoire)' : 'var(--vert-sauge-soft)',
            paddingTop: 'clamp(48px, 7vw, 88px)',
            paddingBottom: 'clamp(48px, 7vw, 88px)',
          }}
        >
          <div className="container">
            <div className="service-section-grid">
              <div className="reveal service-col-sticky" style={{ position: 'sticky', top: 96 }}>
                <span className="gold-rule" style={{ display: 'block', marginBottom: 20 }} />
                <h2 className="serif" style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', color: 'var(--vert-deep)', lineHeight: 1.12 }}>{s.title}</h2>
              </div>
              <div className="reveal">
                <p style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.75, color: 'var(--texte-mute)', marginBottom: 28 }}>{s.body}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {s.items.map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 16, paddingBottom: 18, borderBottom: '1px solid var(--ligne)' }}>
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--or)', marginTop: 7 }} />
                      <div>
                        <h3 style={{ fontWeight: 500, color: 'var(--vert-deep)', fontSize: 15, marginBottom: 4 }}>{item.label}</h3>
                        <p style={{ fontSize: 14, color: 'var(--texte-mute)', lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="bg-charbon" style={{ paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal"><span className="or-mark">✦</span>&nbsp; Questions fréquentes</p>
          <h2 className="serif reveal" style={{ fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--ivoire)', marginTop: 16, marginBottom: 32 }}>
            Vos questions, nos réponses
          </h2>
          {faq.map((f) => (
            <details key={f.q} className="reveal" style={{ borderTop: '1px solid rgba(201,168,104,0.25)', padding: '18px 0' }}>
              <summary style={{ cursor: 'pointer', color: 'var(--ivoire)', fontSize: 17, fontWeight: 500 }}>{f.q}</summary>
              <p style={{ color: 'rgba(245,241,232,0.72)', lineHeight: 1.7, marginTop: 12 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* LIENS + CTA */}
      <section style={{ background: 'var(--vert-sauge-soft)', paddingTop: 'clamp(56px,8vw,96px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 680 }}>
          <span className="gold-rule" />
          <h2 className="serif reveal" style={{ fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--vert-deep)', lineHeight: 1.1, margin: '20px 0 16px' }}>
            Un logement à Nevers à nous confier&nbsp;?
          </h2>
          <p className="reveal" style={{ color: 'var(--texte-mute)', fontSize: 16, lineHeight: 1.7 }}>
            Estimation gratuite de vos revenus, réponse sous 48&nbsp;h, sans engagement.
          </p>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <Link href="/estimation" className="btn btn-gold">Estimer mes revenus <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/contact" className="btn btn-vert">Nous contacter</Link>
          </div>
          <p style={{ marginTop: 32, fontSize: 14, color: 'var(--texte-mute)' }}>
            À lire aussi :{' '}
            {links.map((l, i) => (
              <span key={l.href}>
                {i > 0 && ' · '}
                <Link href={l.href} style={{ textDecoration: 'underline' }}>{l.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
