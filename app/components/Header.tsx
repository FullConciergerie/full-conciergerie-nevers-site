import Link from 'next/link';
import Image from 'next/image';

/**
 * Header global du site Full Conciergerie Nevers.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-sand-50/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo Full Conciergerie Nevers */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Full Conciergerie Nevers — Accueil"
        >
          <Image
            src="/logo.jpg"
            alt="Full Conciergerie Nevers"
            width={120}
            height={120}
            className="h-14 w-14 object-contain mix-blend-multiply sm:h-16 sm:w-16"
            priority
          />
          <span className="sr-only">Full Conciergerie Nevers</span>
        </Link>

        {/* Liens de navigation — masqués sur mobile pour l'instant */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-brand-800 md:flex">
          <li>
            <Link href="/" className="hover:text-brand-600">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-brand-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className="hover:text-brand-600">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brand-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA principal */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-brand-700 px-5 py-2 text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600 sm:inline-block"
        >
          Devis gratuit
        </Link>
      </nav>
    </header>
  );
}
