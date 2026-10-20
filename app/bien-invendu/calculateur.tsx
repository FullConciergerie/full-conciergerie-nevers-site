'use client';

import { useEffect, useMemo, useState } from 'react';
import { HONEYPOT_FIELD, STARTED_AT_FIELD } from '@/lib/anti-spam';
import { submitBienInvendu } from './actions';

const PLATEFORME = 0.15;
const FRAIS = 0.12;
const CONC = 0.2;
const DIAG = 'https://calendly.com/contact-full-nevers-conciergerie/diagnostic-immobilier-1-h';

const toNum = (s: string) => {
  const v = parseFloat(s.replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(v) && v > 0 ? v : 0;
};
const eur = (v: number) => (v < 0 ? '−' : '') + Math.round(Math.abs(v)).toLocaleString('fr-FR') + ' €';

function Champ(props: { id: string; label: string; aide?: string; unite: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bi-row">
      <label htmlFor={props.id}>
        {props.label}
        {props.aide && <small>{props.aide}</small>}
      </label>
      <div className="bi-field">
        <input id={props.id} inputMode="decimal" value={props.value} onChange={(e) => props.onChange(e.target.value)} />
        <b>{props.unite}</b>
      </div>
    </div>
  );
}

export function Calculateur() {
  const [credit, setCredit] = useState('450');
  const [taxe, setTaxe] = useState('1100');
  const [copro, setCopro] = useState('90');
  const [autres, setAutres] = useState('70');
  const [prix, setPrix] = useState('65');
  const [nuits, setNuits] = useState(14);
  const [conc, setConc] = useState(true);

  const r = useMemo(() => {
    const charges = toNum(credit) + toNum(taxe) / 12 + toNum(copro) + toNum(autres);
    const brut = toNum(prix) * nuits;
    const frais = brut * (PLATEFORME + FRAIS);
    const concierge = conc ? brut * CONC : 0;
    const net = brut - frais - concierge;
    const solde = net - charges;
    const couv = Math.max(0, charges > 0 ? Math.min(100, Math.round((net / charges) * 100)) : 100);
    return { charges, brut, frais, concierge, net, solde, couv };
  }, [credit, taxe, copro, autres, prix, nuits, conc]);

  const signe = (r.solde > 0 ? '+' : '') + eur(r.solde);

  return (
    <>
      <section className="bi-calc" aria-label="Calculateur">
        <div className="bi-box">
          <div className="bi-group">
            <h3>Ce que ton logement te coûte</h3>
            <Champ id="c-credit" label="Mensualité de crédit" aide="0 si le bien est payé" unite="€ / mois" value={credit} onChange={setCredit} />
            <Champ id="c-taxe" label="Taxe foncière" aide="montant annuel" unite="€ / an" value={taxe} onChange={setTaxe} />
            <Champ id="c-copro" label="Charges de copropriété" unite="€ / mois" value={copro} onChange={setCopro} />
            <Champ id="c-autres" label="Assurance, énergie, entretien" unite="€ / mois" value={autres} onChange={setAutres} />
          </div>
          <div className="bi-group">
            <h3>Ce qu&apos;il pourrait rapporter</h3>
            <Champ id="l-prix" label="Prix moyen par nuit" aide="regarde 3 annonces Airbnb proches" unite="€" value={prix} onChange={setPrix} />
            <div className="bi-slider">
              <div className="bi-l">
                <label htmlFor="l-nuits">Nuits louées par mois</label>
                <output htmlFor="l-nuits">{nuits} nuits</output>
              </div>
              <input id="l-nuits" type="range" min={4} max={26} step={1} value={nuits} onChange={(e) => setNuits(parseInt(e.target.value, 10))} />
              <div className="bi-legend"><span>prudent</span><span>très demandé</span></div>
            </div>
            <label className="bi-toggle" htmlFor="l-conc">
              <input id="l-conc" type="checkbox" checked={conc} onChange={(e) => setConc(e.target.checked)} />
              <span>Je confie le logement à une conciergerie<small>annonces, voyageurs, ménage, linge : tu n&apos;as rien à faire</small></span>
            </label>
          </div>
        </div>

        <div className="bi-box bi-verdict" aria-live="polite">
          <div>
            <div className="bi-lab">Ton solde chaque mois</div>
            <div className="bi-big">{signe}</div>
            <p className="bi-phrase">
              {r.solde >= 0
                ? `Ton logement couvrirait toutes ses charges et te laisserait ${eur(r.solde)} de plus chaque mois, le temps de trouver l’acheteur.`
                : `La location couvrirait ${r.couv} % de tes charges : ton logement te coûterait ${eur(-r.solde)} par mois au lieu de ${eur(r.charges)}.`}
            </p>
          </div>
          <div className="bi-group">
            <div className="bi-jauge" role="img" aria-label={`Charges couvertes à ${r.couv} %`}><i style={{ width: `${r.couv}%` }} /></div>
            <div className="bi-legend"><span>Charges couvertes : {r.couv} %</span><span>100 %</span></div>
          </div>
          <div className="bi-compte">
            <div><span>Revenus des nuitées</span><span>{eur(r.brut)}</span></div>
            <div><span>Frais de fonctionnement</span><span>{eur(-r.frais)}</span></div>
            <div><span>Conciergerie</span><span>{r.concierge ? eur(-r.concierge) : '0 €'}</span></div>
            <div><span>Revenu net estimé</span><span>{eur(r.net)}</span></div>
            <div><span>Tes charges actuelles</span><span>{eur(-r.charges)}</span></div>
            <div className="bi-total"><span>Solde</span><span>{signe}</span></div>
          </div>
          <p className="bi-note">
            Valeurs d&apos;exemple : remplace-les par les tiennes. Hypothèses : 15 % de commission de plateforme, 12 % de frais
            (linge, consommables, énergie) et 20 % de conciergerie si tu délègues. Estimation indicative, avant impôts.
          </p>
        </div>
      </section>

      <section className="bi-section bi-guide" id="guide">
        <div>
          <p className="bi-surtitre">Le guide offert</p>
          <h2>3 façons de faire rapporter un bien qui ne se vend pas</h2>
          <ul className="bi-liste">
            <li><h3>Ce que l&apos;attente te coûte vraiment</h3><span>Le tableau des charges à remplir avec tes chiffres</span></li>
            <li><h3>Louer en courte durée en attendant l&apos;acheteur</h3><span>La méthode pour estimer tes revenus</span></li>
            <li><h3>Louer sans bloquer les visites</h3><span>Comment organiser le calendrier pendant la vente</span></li>
            <li><h3>Les autres solutions</h3><span>Selon ton bien et ta situation</span></li>
          </ul>
        </div>
        <Formulaire simulation={{ charges: r.charges, net: r.net, prix: toNum(prix), nuits }} />
      </section>
    </>
  );
}

function Formulaire({ simulation }: { simulation: { charges: number; net: number; prix: number; nuits: number } }) {
  const [startedAt, setStartedAt] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<{ prenom: string; guideUrl: string } | null>(null);

  useEffect(() => setStartedAt(String(Date.now())), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const prenom = String(fd.get('firstName') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const cp = String(fd.get('postcode') ?? '').trim();
    if (!prenom) return setError('Indique ton prénom.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return setError('Cette adresse e-mail semble incomplète. Vérifie-la.');
    if (!/^\d{5}$/.test(cp)) return setError('Le code postal doit avoir 5 chiffres.');
    setError('');
    fd.set('charges', String(Math.round(simulation.charges)));
    fd.set('net', String(Math.round(simulation.net)));
    fd.set('prix', String(Math.round(simulation.prix)));
    fd.set('nuits', String(simulation.nuits));
    setPending(true);
    const res = await submitBienInvendu(fd);
    setPending(false);
    if ('error' in res) return setError(res.error);
    setDone({ prenom, guideUrl: res.guideUrl });
  }

  if (done) {
    return (
      <div className="bi-box bi-fait">
        <h3>Merci {done.prenom}, ton guide est prêt</h3>
        <a className="bi-btn" href={done.guideUrl} target="_blank" rel="noopener">Télécharger le guide</a>
        <p>Tu veux un vrai regard sur ta situation ? Le diagnostic immobilier dure 1 h, en visio, partout en France.</p>
        <a className="bi-btn bi-secondaire" href={DIAG} target="_blank" rel="noopener">Réserver mon diagnostic</a>
      </div>
    );
  }

  return (
    <form className="bi-box" onSubmit={onSubmit} noValidate>
      <h3>Reçois le guide complet</h3>
      <div className="bi-input"><label htmlFor="f-prenom">Prénom</label><input id="f-prenom" name="firstName" autoComplete="given-name" required /></div>
      <div className="bi-input"><label htmlFor="f-email">E-mail</label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="bi-input"><label htmlFor="f-cp">Code postal du logement</label><input id="f-cp" name="postcode" inputMode="numeric" maxLength={5} autoComplete="postal-code" required /></div>
      <div className="bi-hp" aria-hidden="true"><label htmlFor="f-site">Site</label><input id="f-site" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" /></div>
      <input type="hidden" name={STARTED_AT_FIELD} value={startedAt} />
      {error && <p className="bi-err" role="alert">{error}</p>}
      <button className="bi-btn" type="submit" disabled={pending}>{pending ? 'Envoi…' : 'Recevoir le guide'}</button>
      <p className="bi-mentions">Tes coordonnées servent uniquement à t&apos;envoyer ce guide et des conseils sur ton logement. Sans engagement, désinscription en un clic.</p>
    </form>
  );
}
