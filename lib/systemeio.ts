/**
 * Enregistrement d'un contact dans systeme.io avec une étiquette.
 * Utilisé par tous les lead magnets (bien invendu, lancer sa conciergerie…).
 * Sans SYSTEMEIO_API_KEY, rien n'est envoyé et la fonction renvoie false.
 */

async function systemeio(path: string, init: RequestInit = {}) {
  const key = process.env.SYSTEMEIO_API_KEY;
  if (!key) return null;
  return fetch(`https://api.systeme.io/api${path}`, {
    ...init,
    headers: {
      'X-API-Key': key,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(init.headers ?? {}),
    },
    cache: 'no-store',
  });
}

async function findOrCreateTag(name: string): Promise<number | null> {
  const list = await systemeio(`/tags?query=${encodeURIComponent(name)}&limit=50`);
  if (!list) return null;
  if (list.ok) {
    const data = (await list.json()) as { items?: { id: number; name: string }[] };
    const hit = data.items?.find((t) => t.name === name);
    if (hit) return hit.id;
  }
  const created = await systemeio('/tags', { method: 'POST', body: JSON.stringify({ name }) });
  if (created?.ok) return ((await created.json()) as { id: number }).id;
  return null;
}

async function findOrCreateContact(email: string, fields: { slug: string; value: string }[]) {
  const res = await systemeio('/contacts', {
    method: 'POST',
    body: JSON.stringify({ email, locale: 'fr', fields }),
  });
  if (!res) return null;
  if (res.ok) return ((await res.json()) as { id: number }).id;
  // Déjà existant : on le retrouve par e-mail
  const found = await systemeio(`/contacts?email=${encodeURIComponent(email)}&limit=10`);
  if (found?.ok) {
    const data = (await found.json()) as { items?: { id: number; email: string }[] };
    return data.items?.find((c) => c.email.toLowerCase() === email.toLowerCase())?.id ?? null;
  }
  console.error('[systemeio] contact', res.status, await res.text());
  return null;
}

export async function saveContactWithTag(
  email: string,
  tag: string,
  fields: { slug: string; value: string }[] = [],
): Promise<boolean> {
  try {
    const contactId = await findOrCreateContact(email, fields);
    if (!contactId) return false;
    const tagId = await findOrCreateTag(tag);
    if (!tagId) return false;
    const res = await systemeio(`/contacts/${contactId}/tags`, {
      method: 'POST',
      body: JSON.stringify({ tagId }),
    });
    return !!res && (res.ok || res.status === 422);
  } catch (err) {
    console.error('[systemeio]', err);
    return false;
  }
}
