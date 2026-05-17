/**
 * Bouton WhatsApp flottant en bas à droite de chaque page.
 *
 * - Numéro : +33 6 61 75 37 38 (mobile pro)
 * - Message pré-rempli avec mention du site
 * - Server component (juste un <a>, aucune logique JS)
 */

const PHONE_INTL = '33661753738';
const PREFILLED_MESSAGE =
  'Bonjour, je viens du site full-nevers-conciergerie.fr et je souhaite obtenir un devis pour mon logement.';

const whatsappUrl = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl active:scale-95 sm:bottom-6 sm:right-6"
    >
      {/* Icône WhatsApp officielle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 0C7.16 0 .003 7.157.003 16c0 2.819.741 5.572 2.15 7.997L0 32l8.193-2.116a15.97 15.97 0 0 0 7.811 1.978h.007C24.84 31.862 32 24.706 32 15.866 32 11.586 30.336 7.572 27.31 4.55A15.851 15.851 0 0 0 16.004 0Zm0 29.198h-.005a13.27 13.27 0 0 1-6.762-1.852l-.485-.288-5.025 1.298 1.34-4.89-.317-.502a13.273 13.273 0 0 1-2.034-7.103c.003-7.343 5.984-13.318 13.295-13.318 3.553 0 6.892 1.383 9.404 3.893a13.176 13.176 0 0 1 3.886 9.385c-.003 7.343-5.985 13.377-13.297 13.377Zm7.298-9.948c-.4-.2-2.366-1.166-2.733-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.234.266-.466.3-.866.1-.4-.2-1.686-.621-3.21-1.98-1.187-1.06-1.988-2.367-2.221-2.767-.234-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.234.266-.4.4-.667.133-.266.066-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.673-.9-.686-.234-.013-.5-.014-.766-.014-.266 0-.7.1-1.066.5-.366.4-1.4 1.367-1.4 3.333 0 1.966 1.433 3.866 1.633 4.133.2.266 2.82 4.306 6.832 6.04.954.413 1.7.658 2.281.844.96.305 1.831.262 2.52.16.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.166-.366-.266-.766-.466Z" />
      </svg>

      {/* Label : visible sur desktop, masqué sur mobile pour économiser l'espace */}
      <span className="hidden text-sm font-medium sm:inline">
        WhatsApp
      </span>

      {/* Pulse léger pour attirer l'œil sans être agressif */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20"
      />
    </a>
  );
}
