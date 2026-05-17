'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * Header global du site Full Conciergerie Nevers.
 *
 * Desktop (≥ md) : nav inline + CTA "Devis gratuit"
 * Mobile (< md)  : hamburger menu qui ouvre un drawer avec les liens
 */

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-sand-50/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Full Conciergerie Nevers — Accueil"
          onClick={close}
        >
          <Image
            src="/logo.jpg"
            alt="Full Conciergerie Nevers"
            width={120}
            height={120}
            className="h-14 w-14 object-contain mix-blend-multiply sm:h-16 sm:w-16"
            priority
          />
          <span className="sr-only">Full Conciergerie Nevers</span>
        </Link>

        {/* Liens de navigation — desktop */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-brand-800 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? 'text-brand-700 underline underline-offset-8 decoration-2 decoration-brand-700/50'
                      : 'hover:text-brand-600'
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-brand-700 px-5 py-2 text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600 md:inline-block"
        >
          Devis gratuit
        </Link>

        {/* Bouton hamburger — mobile uniquement */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-700 transition-colors hover:bg-brand-100 md:hidden"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Drawer mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-brand-100 bg-sand-50 px-6 pb-8 pt-4 sm:px-8 md:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={
                      'block rounded-xl px-4 py-3 text-lg font-medium transition-colors ' +
                      (isActive
                        ? 'bg-brand-100/60 text-brand-700'
                        : 'text-brand-800 hover:bg-brand-100/40 hover:text-brand-700')
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA mobile */}
          <Link
            href="/contact"
            onClick={close}
            className="mt-5 block rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600"
          >
            Demander un devis gratuit
          </Link>

          {/* Téléphone mobile — accessible direct */}
          <a
            href="tel:+33376150229"
            className="mt-3 block rounded-full border-2 border-brand-700 px-6 py-3 text-center text-sm font-medium text-brand-700 hover:bg-brand-700 hover:text-sand-50"
            onClick={close}
          >
            📞 03 76 15 02 29
          </a>
        </div>
      )}
    </header>
  );
}
