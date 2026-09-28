'use client';

import { useEffect, useState } from 'react';

/**
 * Champs invisibles anti-robots à placer dans chaque <form> :
 * un champ piège (les humains ne le voient pas) et l'heure d'ouverture.
 */
export function AntiSpamFields() {
  const [startedAt, setStartedAt] = useState('');
  useEffect(() => setStartedAt(String(Date.now())), []);
  return (
    <>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Site web (laisser vide)
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name="_t" value={startedAt} />
    </>
  );
}
