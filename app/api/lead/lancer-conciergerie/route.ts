import { handleLancerConciergerie } from '@/lib/lead-lancer-conciergerie';

/**
 * Formulaire « lancer sa conciergerie » de tdconseils.fr (site WordPress) :
 * la page envoie un POST ici, on enregistre le contact (systeme.io) et on
 * notifie par e-mail. Seuls les domaines tdconseils.fr sont autorisés.
 */

const ALLOWED = new Set(['https://tdconseils.fr', 'https://www.tdconseils.fr']);

function cors(origin: string | null): Record<string, string> {
  return origin && ALLOWED.has(origin)
    ? {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        Vary: 'Origin',
      }
    : { Vary: 'Origin' };
}

export async function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: cors(request.headers.get('origin')) });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || !ALLOWED.has(origin)) {
    return Response.json({ error: 'Origine non autorisée.' }, { status: 403, headers: cors(origin) });
  }
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: 'Formulaire illisible.' }, { status: 400, headers: cors(origin) });
  }
  const result = await handleLancerConciergerie(formData);
  return Response.json(result, { status: 'error' in result ? 400 : 200, headers: cors(origin) });
}
