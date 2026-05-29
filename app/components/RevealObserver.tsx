'use client';

/**
 * Observateur global pour les animations scroll-reveal.
 * Inclus dans le RootLayout → actif sur toutes les pages.
 *
 * Les éléments avec la classe `reveal` commencent à opacity:0 (cf. globals.css).
 * Quand ils entrent dans le viewport, on ajoute la classe `in` pour les afficher.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');

    // Navigateur sans support → tout afficher immédiatement
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]); // relancé à chaque changement de page

  return null;
}
