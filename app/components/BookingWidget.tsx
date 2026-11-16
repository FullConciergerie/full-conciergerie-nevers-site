'use client';

import { useState } from 'react';

const BOOKING_URL = 'https://connect.superhote.com/integrations/iframes/6b75f805-fefc-408c-b942-d0e677cab925/rentals';

// Le moteur SuperHote V2 n'envoie pas sa hauteur (aucun postMessage, vérifié le 16/11/2026) et ses pages
// font 3 400 à 4 700 px : l'iframe prend la hauteur de l'écran et défile à l'intérieur.
const IFRAME_HEIGHT = 'max(560px, calc(100dvh - 96px))';

export default function BookingWidget() {
  /**
   * `iframeKey` est incrémenté quand l'utilisateur clique "Retour".
   * React démonte et remonte l'iframe → navigation vers l'URL de liste initiale.
   * (Solution cross-origin : on ne peut pas appeler history.back() sur l'iframe.)
   */
  const [iframeKey, setIframeKey] = useState(0);

  const handleRetour = () => setIframeKey((k) => k + 1);

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
      </div>

      {/* Widget SuperHote */}
      <iframe
        key={iframeKey}
        id="bookingengine"
        src={BOOKING_URL}
        width="100%"
        style={{ display: 'block', border: 'none', height: IFRAME_HEIGHT }}
        allowFullScreen
        allow="storage-access; payment"
        referrerPolicy="no-referrer-when-downgrade"
        title="Moteur de réservation — Full Conciergerie Nevers"
        loading="eager"
      />
    </div>
  );
}
