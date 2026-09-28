/**
 * Anti-spam des formulaires du site (contact, prestataire, conciergerie).
 *
 * Les robots remplissent tout, envoient en moins d'une seconde et écrivent
 * des noms au hasard (« veUzMJwJLAeKPWQsdceCkcS », « Pijqa Gmtrb ») avec des
 * adresses Gmail pleines de points. Plusieurs signaux sont additionnés ;
 * au-delà du seuil, le message est jeté SANS le dire au robot (il reçoit
 * « merci », donc il n'apprend pas à contourner).
 */

export const HONEYPOT_FIELD = 'website';
export const STARTED_AT_FIELD = '_t';

/** Mot inventé : majuscules au milieu, ou 5 consonnes d'affilée. */
function looksRandomWord(word: string): boolean {
  const w = word.replace(/[^A-Za-zÀ-ÿ]/g, '');
  if (w.length < 4) return false;
  const innerCaps = (w.slice(1).match(/[A-Z]/g) ?? []).length;
  if (innerCaps >= 3) return true;
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(w)) return true;
  // Long mot sans aucune voyelle
  if (w.length >= 6 && !/[aeiouyàâäéèêëîïôöùûü]/i.test(w)) return true;
  return false;
}

export function looksRandomText(text: string): boolean {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;
  const random = words.filter(looksRandomWord).length;
  return random >= Math.max(1, Math.ceil(words.length / 2));
}

/** Adresse Gmail truffée de points (ko.ga.po.j.ew.a.x0.4@gmail.com). */
export function looksDottedGmail(email: string): boolean {
  const m = email.toLowerCase().match(/^([^@]+)@(gmail|googlemail)\.com$/);
  return !!m && (m[1].match(/\./g) ?? []).length >= 4;
}

/** Téléphone qui n'a rien de français ni d'international (5151939122). */
export function looksForeignPhone(phone: string): boolean {
  const digits = phone.replace(/[\s.\-()]/g, '');
  if (!digits) return false;
  return !/^(\+|00|0)/.test(digits);
}

export function spamScore(input: {
  formData: FormData;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  now?: number;
}): number {
  let score = 0;
  // 1. Champ piège invisible, rempli uniquement par les robots
  if (String(input.formData.get(HONEYPOT_FIELD) ?? '').trim()) score += 3;
  // 2. Envoyé moins de 3 secondes après l'ouverture de la page
  const started = Number(input.formData.get(STARTED_AT_FIELD));
  if (Number.isFinite(started) && started > 0 && (input.now ?? Date.now()) - started < 3000) score += 3;
  // 3. Contenu inventé
  if (input.name && looksRandomText(input.name)) score += 2;
  if (input.message && looksRandomText(input.message)) score += 2;
  if (input.email && looksDottedGmail(input.email)) score += 2;
  if (input.phone && looksForeignPhone(input.phone)) score += 1;
  return score;
}

export const SPAM_THRESHOLD = 3;

export function isSpam(input: Parameters<typeof spamScore>[0]): boolean {
  const score = spamScore(input);
  if (score >= SPAM_THRESHOLD) {
    console.warn('[anti-spam] message bloqué', { score, email: input.email });
    return true;
  }
  return false;
}
