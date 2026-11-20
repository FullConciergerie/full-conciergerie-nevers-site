import posthog from 'posthog-js';

/**
 * Événements personnalisés envoyés à PostHog (noms stables : les tableaux de bord en dépendent).
 * PostHog est initialisé dans `instrumentation-client.ts`.
 */
export const EVENTS = {
  /** Formulaire d'estimation envoyé (page de remerciement systeme.io atteinte). */
  estimationEnvoyee: 'estimation_envoyee',
  /** Formulaire de contact envoyé avec succès. */
  contactEnvoye: 'contact_envoye',
  /** Candidature prestataire envoyée avec succès. */
  candidaturePrestataireEnvoyee: 'candidature_prestataire_envoyee',
  /** Clic sur un lien vers l'application (fullconciergerie.fr). */
  clicApplication: 'clic_application',
} as const;

export type AnalyticsEvent = (typeof EVENTS)[keyof typeof EVENTS];

/**
 * Envoie un événement. Ne fait rien si PostHog n'est pas initialisé (clé absente, hors navigateur).
 * Ne jamais passer de donnée saisie par le visiteur (nom, email, téléphone, message).
 */
export function track(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || !posthog.__loaded) return;
  try {
    posthog.capture(event, { page: window.location.pathname, ...properties });
  } catch {
    /* la mesure d'audience ne doit jamais casser un formulaire */
  }
}
