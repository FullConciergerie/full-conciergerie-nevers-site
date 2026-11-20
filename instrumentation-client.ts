/**
 * Mesure d'audience PostHog (hébergement UE), SANS COOKIE.
 *
 * Fichier exécuté par Next.js côté navigateur avant le reste de l'application
 * (convention `instrumentation-client`, recommandée par la doc PostHog pour Next.js).
 *
 * Réglages voulus (20/11/2026) :
 * - persistence 'memory' : rien n'est écrit sur l'appareil (ni cookie, ni localStorage),
 *   donc pas de bandeau de consentement. Contrepartie : un visiteur qui revient ou recharge
 *   la page est compté comme un nouveau visiteur.
 * - pas d'enregistrement de session, pas d'autocapture (clics, champs de formulaire),
 *   pas de cartes de chaleur, pas de sondages.
 * - advanced_disable_flags + disable_external_dependency_loading : PostHog ne charge ni
 *   configuration distante ni script supplémentaire. Un réglage activé par erreur dans
 *   l'interface PostHog ne peut donc pas allumer l'enregistrement de session sur le site.
 * - l'adresse IP est écartée par PostHog à la réception (réglage du projet « Discard client IP data »).
 *
 * Sans NEXT_PUBLIC_POSTHOG_KEY (clé publique du projet, à poser dans Vercel), rien ne s'initialise.
 */
import posthog from 'posthog-js';
import { EVENTS } from '@/lib/analytics';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const APP_HOSTS = new Set(['fullconciergerie.fr', 'www.fullconciergerie.fr']);

if (POSTHOG_KEY) {
  try {
    posthog.init(POSTHOG_KEY, {
      api_host: 'https://eu.i.posthog.com',
      defaults: '2026-08-30',

      // ── Sans cookie ──
      persistence: 'memory',
      person_profiles: 'identified_only',

      // ── Pages vues : première page + navigations internes (App Router) ──
      capture_pageview: 'history_change',

      // ── Tout le reste est coupé ──
      disable_session_recording: true,
      autocapture: false,
      rageclick: false,
      capture_heatmaps: false,
      capture_dead_clicks: false,
      capture_exceptions: false,
      capture_performance: false,
      disable_surveys: true,
      advanced_disable_flags: true,
      disable_external_dependency_loading: true,

      // Masque les identifiants publicitaires (gclid, fbclid…) présents dans les URL.
      mask_personal_data_properties: true,
    });

    // Clic vers l'application (tout lien vers fullconciergerie.fr, sur toutes les pages).
    document.addEventListener(
      'click',
      (event) => {
        const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
        if (!link) return;
        let url: URL;
        try {
          url = new URL(link.href);
        } catch {
          return;
        }
        if (!APP_HOSTS.has(url.hostname)) return;
        posthog.capture(
          EVENTS.clicApplication,
          { destination: url.origin + url.pathname, page: window.location.pathname },
          // Le navigateur quitte la page juste après : envoi immédiat, sans attendre le lot suivant.
          { send_instantly: true, transport: 'sendBeacon' },
        );
      },
      { capture: true },
    );
  } catch (err) {
    console.warn('[posthog] initialisation impossible', err);
  }
}
