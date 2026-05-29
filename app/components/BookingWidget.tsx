'use client';

import { useEffect, useRef, useState } from 'react';

const SUPERHOTE_WEBKEY = '5WubL6qaur36Xr4JaYFQNiW9e';
const BOOKING_URL = `https://app.superhote.com/#/get-available-rentals/${SUPERHOTE_WEBKEY}`;

// Hauteur initiale raisonnable avant que SuperHote envoie sa vraie hauteur
const INITIAL_HEIGHT = 900;

export default function BookingWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  /**
   * `iframeKey` est incrémenté quand l'utilisateur clique "Retour".
   * React démonte et remonte l'iframe → navigation vers l'URL de liste initiale.
   * (Solution cross-origin : on ne peut pas appeler history.back() sur l'iframe.)
   */
  const [iframeKey, setIframeKey] = useState(0);

  const handleRetour = () => {
    setIframeKey((k) => k + 1);
    setHeight(INITIAL_HEIGHT);
  };

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      // SuperHote envoie plusieurs formats selon la version
      const d = e.data;
      if (!d) return;

      let newHeight: number | null = null;

      // Format 1 : { type: 'superhote-resize', height: 1200 }
      if (typeof d === 'object' && d.type === 'superhote-resize' && typeof d.height === 'number') {
        newHeight = d.height;
      }
      // Format 2 : { height: 1200 } (sans type)
      else if (typeof d === 'object' && typeof d.height === 'number' && d.height > 200) {
        newHeight = d.height;
      }
      // Format 3 : nombre brut
      else if (typeof d === 'number' && d > 200) {
        newHeight = d;
      }
      // Format 4 : chaîne JSON  "{ height: 1200 }"
      else if (typeof d === 'string') {
        try {
          const parsed = JSON.parse(d);
          if (typeof parsed?.height === 'number' && parsed.height > 200) {
            newHeight = parsed.height;
          }
        } catch { /* pas du JSON */ }
      }

      if (newHeight !== null) {
        setHeight(newHeight + 32); // +32px de marge basse
      }
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div>
      {/* Barre de navigation au-dessus du widget */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          borderBottom: '1px solid var(--ligne)',
          background: 'var(--ivoire)',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <button
          type="button"
          onClick={handleRetour}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px 0',
            fontSize: 13,
            fontFamily: 'var(--sans)',
            letterSpacing: '0.04em',
            color: 'var(--vert-deep)',
            fontWeight: 500,
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
          }}
          aria-label="Retourner à la liste de tous les logements"
        >
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 28,
              height: 28,
              border: '1px solid var(--or)',
              color: 'var(--or)',
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ←
          </span>
          Voir tous les logements
        </button>

        <span
          style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--texte-mute)',
            fontFamily: 'var(--mono)',
          }}
        >
          Réservation directe · -10% vs Airbnb
        </span>
      </div>

      {/* Widget SuperHote */}
      <iframe
        key={iframeKey}
        ref={iframeRef}
        id="bookingengine"
        src={BOOKING_URL}
        width="100%"
        height={height}
        style={{ display: 'block', border: 'none', transition: 'height 0.3s ease' }}
        allowFullScreen
        allow="storage-access; payment"
        title="Moteur de réservation — Full Conciergerie Nevers"
        loading="eager"
      />
    </div>
  );
}
