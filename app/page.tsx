'use client';

import { useEffect } from 'react';

/**
 * Structured data Schema.org — LocalBusiness.
 * Permet à Google d'afficher la fiche "business card" dans les résultats
 * de recherche (adresse, téléphone, horaires, note, image…).
 *
 * À tester sur https://search.google.com/test/rich-results
 */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://full-nevers-conciergerie.fr/#business',
  name: 'Full Conciergerie Nevers',
  legalName: 'Full Nevers Conciergerie',
  description:
    "Conciergerie haut de gamme à Nevers. Gestion complète d'Airbnb : ménage, accueil voyageurs, photos professionnelles, optimisation des tarifs, location de linge et blanchisserie en interne.",
  url: 'https://full-nevers-conciergerie.fr',
  telephone: '+33-3-76-15-02-29',
  email: 'contact@full-nevers-conciergerie.fr',
  image: 'https://full-nevers-conciergerie.fr/opengraph-image.jpg',
  logo: 'https://full-nevers-conciergerie.fr/logo.jpg',
  priceRange: '€€',
  founder: {
    '@type': 'Person',
    name: 'Delil Torgursul',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Quai de Mantoue',
    addressLocality: 'Nevers',
    postalCode: '58000',
    addressRegion: 'Bourgogne-Franche-Comté',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.9911,
    longitude: 3.1626,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Nevers',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Nièvre',
    },
  ],
  serviceType: [
    'Conciergerie Airbnb',
    'Gestion location courte durée',
    'Ménage professionnel',
    'Accueil voyageurs',
    'Optimisation tarifaire',
    'Location de linge',
    'Blanchisserie',
  ],
  openingHours: 'Mo-Su 09:00-19:00',
  sameAs: [
    // À compléter quand les réseaux sociaux seront créés
    // 'https://www.facebook.com/fullconciergerienevers',
    // 'https://www.instagram.com/fullconciergerienevers',
  ],
};

/**
 * JSON-LD complémentaire — WebSite avec SearchAction.
 * Permet à Google d'afficher un encart "Searchbox" dans les résultats
 * (utilisateur peut chercher directement depuis Google sans cliquer).
 */
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://full-nevers-conciergerie.fr/#website',
  url: 'https://full-nevers-conciergerie.fr',
  name: 'Full Conciergerie Nevers',
  inLanguage: 'fr-FR',
  publisher: {
    '@id': 'https://full-nevers-conciergerie.fr/#business',
  },
};

export default function HomePage() {
  // ---------- NAV scroll state ----------
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    let lastY = -1;
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      if ((y > 40) !== (lastY > 40)) {
        nav!.classList.toggle('scrolled', y > 40);
      }
      lastY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---------- Scroll reveal ----------
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  // ---------- Parallax léger sur hero ----------
  useEffect(() => {
    const bg = document.querySelector<HTMLElement>('[data-parallax]');
    if (!bg) return;
    let ticking = false;
    function update() {
      const y = window.scrollY || 0;
      if (y < window.innerHeight * 1.2) {
        bg!.style.transform =
          'translate3d(0,' + y * 0.18 + 'px,0) scale(' + (1 + y * 0.0002) + ')';
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---------- FAQ accordéon ----------
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.faq-item');
    const handlers: Array<{ btn: HTMLElement; fn: () => void }> = [];
    items.forEach((item) => {
      const btn = item.querySelector<HTMLElement>('.faq-q');
      if (!btn) return;
      const fn = () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll<HTMLElement>('.faq-item.open').forEach((other) => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      };
      btn.addEventListener('click', fn);
      handlers.push({ btn, fn });
    });
    return () => {
      handlers.forEach(({ btn, fn }) => btn.removeEventListener('click', fn));
    };
  }, []);

  // ---------- Smooth anchor scroll ----------
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handlers: Array<{ a: HTMLAnchorElement; fn: (e: Event) => void }> = [];
    anchors.forEach((a) => {
      const fn = (e: Event) => {
        const id = a.getAttribute('href');
        if (!id || id.length < 2) return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        const top = (t as HTMLElement).getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      };
      a.addEventListener('click', fn);
      handlers.push({ a, fn });
    });
    return () => {
      handlers.forEach(({ a, fn }) => a.removeEventListener('click', fn));
    };
  }, []);

  const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <>
      {/* Structured data JSON-LD pour Google — LocalBusiness + WebSite */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />

      {/* ============ NAV ============ */}
      <nav className="nav" id="nav" data-screen-label="01 Nav">
        <a href="#" className="logo" aria-label="Full Conciergerie Nevers — accueil">
          {/* Vrai logo (en remplacement du placeholder F) */}
          <span className="logo-img-wrap">
            <img src="/logo.jpg" alt="Full Conciergerie Nevers" className="logo-img" />
          </span>
          <span className="logo-text">
            Full Conciergerie
            <small>Nevers</small>
          </span>
        </a>
        <div className="nav-menu" role="navigation">
          <a href="/logements">Nos logements</a>
          <a href="#services">Services</a>
          <a href="#histoire">À propos</a>
          <a href="#temoignages">Avis</a>
          <a href="#faq">FAQ</a>
          <a href="/devenir-prestataire">Recrutement</a>
          <a href="/lancer-une-conciergerie">Entrepreneurs</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <a href="/contact" className="btn btn-gold-outline">
            <span className="cta-label">Devis gratuit</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
          <button className="nav-burger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <header className="hero" data-screen-label="02 Hero">
        <div className="hero-bg placeholder dark" data-parallax>
          <img
            className="fill-image"
            src="/nevers-pont-vue.jpg"
            alt="Pont de Loire et vieille ville de Nevers"
            onError={hideOnError}
          />
          <div className="stripes"></div>
        </div>

        <div className="container hero-content">
          <span className="hero-eyebrow eyebrow">À votre service à Nevers</span>
          <h1 className="serif">
            Confiez la gestion<br/>
            de votre Airbnb à<br/>
            <span className="or-word">des professionnels</span><br/>
            locaux.
          </h1>
          <p className="lede">
            De l&apos;accueil voyageur au ménage professionnel, en passant par l&apos;optimisation des tarifs
            et la communication avec les plateformes — nous prenons tout en charge pour que vous
            profitiez sereinement de vos revenus locatifs.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-gold">
              Demander un devis gratuit
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#services" className="btn btn-ghost-light">
              Découvrir nos services
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <span className="gold-rule"></span>
          <span>Nevers · 47°N</span>
          <span>Des services Full Options</span>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Découvrir</span>
          <span className="line"></span>
        </div>
      </header>

      {/* ============ TRUST ============ */}
      <section className="trust" data-screen-label="03 Trust band">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item reveal">
              <span className="trust-num serif">30<span className="suffix">+</span></span>
              <span className="trust-label">Logements gérés à Nevers et alentours</span>
            </div>
            <div className="trust-item center reveal reveal-delay-1">
              <span className="trust-num serif">100<span className="suffix">%</span></span>
              <span className="trust-label">Autonomie pour vous — vous ne touchez à rien</span>
            </div>
            <div className="trust-item end reveal reveal-delay-2">
              <span className="trust-num serif">800<span className="suffix">+</span></span>
              <span className="trust-label">Commentaires plateformes (Airbnb &amp; Booking)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FONDATEUR ============ */}
      <section id="histoire" className="founder bg-ivoire" data-screen-label="04 Fondateur">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-photo reveal">
              <div className="placeholder">
                <img
                  className="fill-image"
                  src="/delil-portrait.jpg"
                  alt="Delil Torgursul, fondateur de Full Conciergerie Nevers"
                  onError={hideOnError}
                />
                <div className="stripes"></div>
                <div className="frame"></div>
              </div>
            </div>
            <div className="founder-text reveal reveal-delay-1">
              <span className="eyebrow">02 — <span className="or-mark">Qui sommes-nous ?</span></span>
              <h2 className="founder-name serif">
                <small>Le fondateur</small>
                Delil Torgursul
              </h2>
              <span className="gold-rule"></span>
              <div className="founder-bio">
                <p>
                  Fondée par Delil Torgursul, Full Conciergerie · Nevers accompagne les propriétaires de
                  logements en location courte durée de la région nivernaise. Notre engagement :
                  une qualité de service irréprochable, des prestataires locaux fiables, et une
                  transparence totale sur la gestion de votre bien.
                </p>
                <p>
                  Que vous soyez propriétaire d&apos;un appartement de centre-ville ou d&apos;une maison de
                  caractère, nous adaptons notre prestation à votre logement et à vos voyageurs.
                </p>
              </div>
              <blockquote className="founder-quote">
                Chaque logement que je gère, je le traite comme s&apos;il était le mien.
              </blockquote>
              <div className="founder-rating">
                <span className="src">— Plus de 800 commentaires voyageurs sur Airbnb &amp; Booking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="services bg-sable" data-screen-label="05 Services">
        <div className="container">
          <div className="services-head">
            <div className="section-head reveal">
              <span className="eyebrow">03 — <span className="or-mark">Nos services</span></span>
              <h2 className="title serif">Une gestion complète, sans aucun souci.</h2>
              <span className="gold-rule"></span>
            </div>
            <p
              className="lede reveal reveal-delay-1"
              style={{ maxWidth: '36ch', color: 'var(--texte-mute)', fontSize: '17px' }}
            >
              De l&apos;arrivée du voyageur à son départ, nous orchestrons chaque étape pour vous
              offrir une tranquillité totale.
            </p>
          </div>

          <div className="services-grid">
            {/* 1 */}
            <article className="service-card reveal">
              <span className="service-num">— 01</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M8 36 L8 22 L22 12 L36 22 L36 36 Z"/>
                <path d="M8 36 L36 36"/>
                <path d="M18 36 L18 26 L26 26 L26 36"/>
                <path d="M14 18 L14 14"/>
              </svg>
              <h3 className="service-title">Ménage professionnel</h3>
              <p className="service-body">Une équipe de prestataires expérimentés assure le ménage après chaque départ, avec un standard hôtelier.</p>

            </article>
            {/* 2 */}
            <article className="service-card reveal reveal-delay-1">
              <span className="service-num">— 02</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M6 12 H38 V30 H22 L14 36 V30 H6 Z"/>
                <path d="M14 19 H30 M14 24 H26"/>
              </svg>
              <h3 className="service-title">Accueil voyageurs</h3>
              <p className="service-body">Communication 7j/7, instructions claires, support pendant le séjour. Vous ne décrochez plus jamais le téléphone.</p>

            </article>
            {/* 3 */}
            <article className="service-card reveal reveal-delay-2">
              <span className="service-num">— 03</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M6 32 L16 22 L22 28 L36 12"/>
                <path d="M28 12 L36 12 L36 20"/>
                <path d="M6 36 L38 36"/>
              </svg>
              <h3 className="service-title">Optimisation des tarifs</h3>
              <p className="service-body">Analyse du marché local et ajustement des prix selon la saison pour maximiser vos revenus.</p>

            </article>
            {/* 4 */}
            <article className="service-card reveal">
              <span className="service-num">— 04</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <rect x="6" y="12" width="32" height="22"/>
                <circle cx="22" cy="23" r="6"/>
                <path d="M16 12 L18 8 H26 L28 12"/>
                <circle cx="32" cy="17" r="0.8" fill="currentColor"/>
              </svg>
              <h3 className="service-title">Photos professionnelles</h3>
              <p className="service-body">Mise en valeur de votre logement avec des photos qui attirent les meilleurs voyageurs.</p>

            </article>
            {/* 5 */}
            <article className="service-card reveal reveal-delay-1">
              <span className="service-num">— 05</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M10 14 C10 10, 14 8, 22 8 C30 8, 34 10, 34 14 L34 30 C34 34, 30 36, 22 36 C14 36, 10 34, 10 30 Z"/>
                <path d="M10 14 C10 18, 14 20, 22 20 C30 20, 34 18, 34 14"/>
                <path d="M22 20 L22 36"/>
              </svg>
              <h3 className="service-title">Linge &amp; blanchisserie</h3>
              <p className="service-body">Linge de qualité hôtelière en location, blanchisserie en interne pour maîtriser les coûts. Plus de stock à gérer.</p>

            </article>
            {/* 6 */}
            <article className="service-card reveal reveal-delay-2">
              <span className="service-num">— 06</span>
              <svg className="service-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M14 30 L30 14 M12 32 L8 36 M28 12 L32 8 L36 12 L32 16"/>
                <path d="M28 12 L20 20 L24 24 L32 16"/>
              </svg>
              <h3 className="service-title">Petites interventions</h3>
              <p className="service-body">Espaces verts, dépannage, livraison d&apos;extras voyageurs — nos partenaires s&apos;occupent de tout.</p>

            </article>
          </div>
        </div>
      </section>

      {/* ============ TERRITOIRE ============ */}
      <section className="territoire bg-ivoire" data-screen-label="06 Territoire">
        <div className="container">
          <div className="territoire-grid">
            <div className="territoire-text reveal">
              <span className="eyebrow">04 — <span className="or-mark">Notre territoire</span></span>
              <h2 className="territoire-title serif">
                <em>Nevers</em>, perle ligerienne<br/>au cœur de la Nièvre.
              </h2>
              <span className="gold-rule"></span>
              <p>
                Cité d&apos;art et d&apos;histoire au bord de la Loire, Nevers séduit toute l&apos;année —
                pèlerins de Sainte-Bernadette, cyclistes de la Loire à Vélo, amateurs de
                patrimoine, week-ends gastronomiques.
              </p>
              <p>
                Une destination idéale pour la location courte durée, et un terrain de jeu rêvé
                pour vos voyageurs. Notre équipe vit ici, connaît chaque rue, chaque quartier,
                chaque adresse qu&apos;on glisse dans le livret d&apos;accueil.
              </p>
              <div className="quartiers" aria-label="Atouts du territoire">
                <span className="quartier gold">Patrimoine UNESCO</span>
                <span className="quartier">Loire à Vélo</span>
                <span className="quartier">Sanctuaire Ste-Bernadette</span>
                <span className="quartier">Magny-Cours</span>
                <span className="quartier">Vignoble Pouilly</span>
              </div>
            </div>
            <div className="territoire-photo reveal reveal-delay-1">
              <div className="placeholder">
                <img
                  className="fill-image"
                  src="/nevers-pont-cathedrale.jpg"
                  alt="Pont sur la Loire et cathédrale Saint-Cyr-et-Sainte-Julitte à Nevers"
                  onError={hideOnError}
                />
                <div className="stripes"></div>
                <div className="frame"></div>
                <div className="corner-mark">06 · Nevers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESSUS ============ */}
      <section className="processus" data-screen-label="07 Processus">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">05 — <span className="or-mark">Comment ça se passe</span></span>
            <h2 className="title serif" style={{ color: 'var(--ivoire)' }}>
              Quatre étapes,<br/>et vous n&apos;y pensez plus.
            </h2>
            <span className="gold-rule"></span>
            <p className="lede" style={{ maxWidth: '60ch' }}>
              De la première discussion jusqu&apos;à votre premier voyageur, nous avons balisé chaque
              étape pour que vous sachiez exactement à quoi vous attendre. Et quand.
            </p>
          </div>

          <div className="steps">
            <div className="step reveal">
              <span className="step-num">01</span>
              <h3 className="step-title">Premier échange</h3>
              <p className="step-body">Un appel ou une visio de vingt minutes. Vous nous racontez votre logement, nous vous disons ce qu&apos;on peut en faire.</p>
              <span className="step-meta">20 min · gratuit</span>
            </div>
            <div className="step reveal reveal-delay-1">
              <span className="step-num">02</span>
              <h3 className="step-title">Visite du logement</h3>
              <p className="step-body">On passe sur place. Audit complet, photos, recommandations concrètes pour augmenter les revenus.</p>
              <span className="step-meta">1 h · sans engagement</span>
            </div>
            <div className="step reveal reveal-delay-2">
              <span className="step-num">03</span>
              <h3 className="step-title">Mise en route</h3>
              <p className="step-body">Création des annonces, installation du livret d&apos;accueil, prise des photos. On démarre dans la semaine.</p>
              <span className="step-meta">5 à 7 jours</span>
            </div>
            <div className="step reveal reveal-delay-3">
              <span className="step-num">04</span>
              <h3 className="step-title">Vous percevez vos revenus</h3>
              <p className="step-body">Airbnb et Booking versent directement vos revenus sur votre compte après chaque séjour. De notre côté, vous recevez une facture mensuelle claire avec le détail des prestations.</p>
              <span className="step-meta">Versés par les plateformes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section id="temoignages" className="temoignages" data-screen-label="08 Témoignages">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">06 — <span className="or-mark">Ce qu&apos;ils en disent</span></span>
            <h2 className="title serif">Des voyageurs comblés,<br/>des propriétaires sereins.</h2>
            <span className="gold-rule"></span>
            <p className="lede" style={{ color: 'var(--texte-mute)', marginTop: '16px' }}>
              Plus de 800 commentaires sur Airbnb et Booking. Voici quelques retours récents de
              voyageurs ayant séjourné dans nos logements.
            </p>
          </div>

          <div className="temoignages-grid">
            <article className="temoignage reveal">
              <span className="stars">★★★★★</span>
              <blockquote>
                Jolie maison décorée avec goût et bien équipée. Les instructions pour accéder
                sont claires. Très bon relationnel avec le propriétaire.
              </blockquote>
              <div className="temoignage-author">
                <div className="author-photo">
                  <div className="placeholder" style={{ background: '#7d8b78' }}>
                    <div className="stripes"></div>
                  </div>
                </div>
                <div className="author-info">
                  <span className="author-name serif">David</span>
                  <span className="author-meta">Mai 2026 · Airbnb</span>
                </div>
              </div>
            </article>

            <article className="temoignage reveal reveal-delay-1">
              <span className="stars">★★★★★</span>
              <blockquote>
                Très disponible, a cherché une solution pour le stationnement des vélos et du
                véhicule. Merci beaucoup !
              </blockquote>
              <div className="temoignage-author">
                <div className="author-photo">
                  <div className="placeholder" style={{ background: '#6e7d68' }}>
                    <div className="stripes"></div>
                  </div>
                </div>
                <div className="author-info">
                  <span className="author-name serif">Manuela</span>
                  <span className="author-meta">Suisse · Mai 2026 · Airbnb</span>
                </div>
              </div>
            </article>

            <article className="temoignage reveal reveal-delay-2">
              <span className="stars">★★★★★</span>
              <blockquote>
                Logement impeccable. Accueil chaleureux, communication fluide du début à la fin.
                Je recommande sans hésiter à toute personne de passage à Nevers.
              </blockquote>
              <div className="temoignage-author">
                <div className="author-photo">
                  <div className="placeholder" style={{ background: '#5f6f58' }}>
                    <div className="stripes"></div>
                  </div>
                </div>
                <div className="author-info">
                  <span className="author-name serif">Benoit</span>
                  <span className="author-meta">France · Mai 2026 · Airbnb</span>
                </div>
              </div>
            </article>
          </div>

          <div style={{ marginTop: '56px', textAlign: 'center' }} className="reveal">
            <span className="eyebrow">
              Plus de 800 commentaires voyageurs sur Airbnb &amp; Booking
            </span>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="faq bg-ivoire" data-screen-label="09 FAQ">
        <div className="container">
          <div className="faq-grid">
            <div className="reveal">
              <span className="eyebrow">07 — <span className="or-mark">Questions fréquentes</span></span>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.05,
                  marginTop: '24px',
                  marginBottom: '24px',
                }}
              >
                Tout ce que vous vous demandez — sans tourner autour du pot.
              </h2>
              <span className="gold-rule"></span>
              <p style={{ marginTop: '24px', color: 'var(--texte-mute)', fontSize: '16px' }}>
                Vous ne trouvez pas votre réponse ?{' '}
                <a
                  href="#contact"
                  style={{ color: 'var(--or)', borderBottom: '1px solid var(--or)', paddingBottom: '2px' }}
                >
                  Contactez-nous directement
                </a>
                .
              </p>
            </div>

            <div className="faq-list reveal reveal-delay-1">
              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Combien ça coûte ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Nous nous rémunérons uniquement sur les nuitées effectivement réalisées. Pas
                  d&apos;abonnement, pas de frais cachés. Si votre logement ne se loue pas, on ne
                  facture rien. Le pourcentage exact dépend de votre logement — on vous le
                  confirme après la visite.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Vous gérez aussi les check-in tardifs ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Oui, sans surcoût pour vous. Notre équipe peut accueillir un voyageur jusqu&apos;à 23 h,
                  et au-delà nous mettons en place un système de boîtes à clés sécurisées avec code
                  temporaire envoyé au voyageur.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Que se passe-t-il en cas de dégradation ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Nous réalisons un état des lieux photo après chaque départ. En cas de dégradation,
                  nous déclenchons la garantie Airbnb / Booking dans les 24 h et suivons le dossier
                  jusqu&apos;au remboursement. Vous n&apos;avez rien à faire — nous vous tenons informé.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Sur quelles plateformes vous publiez ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Airbnb, Booking, et notre channel manager qui synchronise les calendriers.
                  Pas de double réservation, pas de période bloquée inutilement.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Combien de temps pour démarrer ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Entre cinq et sept jours ouvrés à partir de la signature. Le temps de faire les
                  photos, rédiger les annonces, installer le livret d&apos;accueil et faire un audit
                  complet du logement.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Je peux récupérer mon logement quand je veux ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Bien sûr. Il suffit de nous prévenir par téléphone, WhatsApp ou email — on bloque
                  vos dates sur les plateformes pour les vacances, la famille, ou simplement par
                  envie. Aucun préavis minimum, aucune pénalité.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Vous travaillez avec des LMNP / LMP ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Oui, nous avons l&apos;habitude. Nous fournissons le récapitulatif comptable mensuel et
                  annuel, compatible avec votre expert-comptable. Si vous n&apos;en avez pas, nous avons un
                  partenaire à Nevers que nous pouvons vous recommander.
                </div></div>
              </div>

              <div className="faq-item">
                <button className="faq-q" aria-expanded="false">
                  <span>Le contrat est sur quelle durée ?</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">
                  Sans engagement minimum. Vous pouvez arrêter à tout moment avec un préavis d&apos;un
                  mois. On préfère que vous restiez parce que vous êtes satisfait, pas parce que vous
                  êtes coincé.
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section id="devis" className="final-cta" data-screen-label="10 CTA final">
        <div className="bg placeholder dark">
          <img
            className="fill-image"
            src="/nevers-loire.jpg"
            alt="Bord de Loire à Nevers — paysage du Centre-Val de Loire"
            onError={hideOnError}
          />
          <div className="stripes"></div>
        </div>
        <div className="container" id="contact">
          <span className="eyebrow reveal" style={{ color: 'var(--or)' }}>
            — Prêt à nous confier votre logement ?
          </span>
          <h2 className="serif reveal reveal-delay-1">
            Discutons de <em>votre projet.</em>
          </h2>
          <span className="gold-rule"></span>
          <p className="reveal reveal-delay-2">
            Devis gratuit et sans engagement. Réponse sous 24 h.
          </p>
          <div className="actions reveal reveal-delay-3">
            <a href="/contact" className="btn btn-gold">
              Demander un devis
              <span className="arrow">→</span>
            </a>
            <a href="tel:+33376150229" className="btn btn-ghost-light">
              03 76 15 02 29
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer" data-screen-label="11 Footer">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* Marque typographique propre — pas de F en placeholder pour éviter le collage "FFull" */}
            <p className="footer-brand-name">
              Full Conciergerie
              <br />
              <span className="footer-brand-italic">Nevers</span>
            </p>
            <span className="footer-rule" aria-hidden="true" />
            <p className="footer-tagline">Des services Full Options</p>
            <p className="footer-pitch">
              Conciergerie à Nevers et en région. Confiez votre Airbnb à des
              professionnels locaux passionnés.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+33376150229">03 76 15 02 29</a></li>
              <li><a href="https://wa.me/33661753738">WhatsApp</a></li>
              <li><a href="mailto:contact@full-nevers-conciergerie.fr">contact@full-nevers-conciergerie.fr</a></li>
              <li>16 Quai de Mantoue<br/>58000 Nevers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/logements">Nos logements →</a></li>
              <li><a href="#services">Nos services</a></li>
              <li><a href="#histoire">À propos</a></li>
              <li><a href="#temoignages">Avis</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="/contact">Devis gratuit</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Autres services</h4>
            <ul>
              <li><a href="/devenir-prestataire">Devenir prestataire →</a></li>
              <li><a href="/lancer-une-conciergerie">Lancer votre conciergerie →</a></li>
              <li><a href="/services">Détail des services</a></li>
              <li><a href="/a-propos">Notre histoire</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <small>
            © 2026 SAS Full Nevers Conciergerie · SIREN 915&nbsp;379&nbsp;226 · RCS Nevers ·{' '}
            <a href="/cgv" style={{ textDecoration: 'underline' }}>Mentions légales / CGV</a>
          </small>
          <small className="made">— Des services Full Options</small>
        </div>
      </footer>
    </>
  );
}
