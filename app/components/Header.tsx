'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header global du site — version design v2 (vert profond + or, typo serif).
 *
 * - Sur la home `/` : on retourne null, la home a sa propre nav inline custom.
 * - Sur les autres pages : header sticky avec le même look que la nav home.
 *
 * Desktop : nav inline + CTA "Devis gratuit" doré
 * Mobile : burger menu qui ouvre un drawer plein écran
 */

const NAV_LINKS = [
  { href: '/logements', label: 'Nos logements' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/devenir-prestataire', label: 'Recrutement' },
  { href: '/lancer-une-conciergerie', label: 'Entrepreneurs' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // La home utilise sa propre nav inline (cf. app/page.tsx).
  // Header global affiché uniquement sur les autres routes.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/') return null;

  const close = () => setIsOpen(false);

  return (
    <>
      <header className={`global-nav ${scrolled ? 'scrolled' : ''}`}>
        <Link
          href="/"
          className="global-nav-logo"
          aria-label="Full Conciergerie Nevers — accueil"
          onClick={close}
        >
          <span className="global-nav-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="" />
          </span>
          <span className="global-nav-logo-text">
            Full Conciergerie
            <small>Nevers</small>
          </span>
        </Link>

        <nav className="global-nav-menu" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'is-active' : ''}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="global-nav-cta">
          <Link href="/contact" className="btn btn-gold-outline">
            <span className="cta-label">Devis gratuit</span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            className="global-nav-burger"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Drawer mobile plein écran */}
      {isOpen && (
        <div className="global-nav-drawer" onClick={close}>
          <div
            className="global-nav-drawer-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fermer le menu"
              className="global-nav-drawer-close"
            >
              ✕
            </button>
            <ul>
              <li>
                <Link href="/" onClick={close}>Accueil</Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={close}
              className="btn btn-gold drawer-cta"
            >
              Demander un devis gratuit
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href="tel:+33376150229"
              onClick={close}
              className="drawer-tel"
            >
              📞 03 76 15 02 29
            </a>
          </div>
        </div>
      )}
    </>
  );
}
