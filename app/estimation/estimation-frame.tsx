'use client';

import { useEffect, useRef, useState } from 'react';

const ORIGIN = 'https://fullconciergerie.systeme.io';
const SRC = `${ORIGIN}/estimation-gratuite?embed=1`;

export function EstimationFrame() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(2600);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== ORIGIN) return;
      const d = e.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === 'fc-embed-height' && typeof d.height === 'number' && d.height > 300) {
        setHeight(Math.ceil(d.height));
      }
      // Changement de page dans l'iframe (ex. après l'envoi du formulaire) : on remonte en haut.
      if (d.type === 'fc-embed-nav' && ref.current) {
        const top = ref.current.getBoundingClientRect().top + window.scrollY - 80;
        if (window.scrollY > top) window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <section className="bg-charbon" style={{ lineHeight: 0 }}>
      <iframe
        ref={ref}
        src={SRC}
        title="Estimation gratuite de vos revenus locatifs — Full Conciergerie Nevers"
        width="100%"
        height={height}
        style={{ display: 'block', border: 'none', width: '100%', transition: 'height 0.25s ease' }}
        loading="eager"
        allow="clipboard-write"
      />
      <noscript>
        <p style={{ padding: 24, lineHeight: 1.5 }}>
          <a href={`${ORIGIN}/estimation-gratuite`}>Ouvrir le formulaire d&apos;estimation</a>
        </p>
      </noscript>
    </section>
  );
}
