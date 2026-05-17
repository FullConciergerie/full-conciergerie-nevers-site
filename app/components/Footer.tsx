import Link from 'next/link';

/**
 * Footer global du site Full Conciergerie Nevers.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-200 bg-brand-700 text-sand-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {/* Bloc identité — marque typographique + tagline */}
        <div className="sm:col-span-2">
          {/* Marque en typographie — pas d'image, plus propre sur fond foncé */}
          <p className="font-serif text-3xl font-medium leading-tight text-sand-50 sm:text-4xl">
            Full Conciergerie
            <br />
            <span className="italic">Nevers</span>
          </p>

          {/* Filet doré */}
          <span
            aria-hidden="true"
            className="mt-4 block h-px w-16 bg-gold-400/60"
          />

          <p className="mt-4 max-w-sm font-cursive text-2xl text-sand-200">
            Des services Full Options
          </p>
          <p className="mt-3 max-w-sm text-sm text-sand-100/90">
            Conciergerie haut de gamme à Nevers et en région. Confiez votre
            Airbnb à des professionnels locaux passionnés.
          </p>
          <p className="mt-4 text-xs text-sand-200/80">
            SAS Full Nevers Conciergerie · SIREN 915&nbsp;379&nbsp;226 · RCS Nevers
          </p>
        </div>

        {/* Bloc liens */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sand-200">
            Navigation
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-sand-200">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-sand-200">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-sand-200">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sand-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sand-200">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="mailto:contact@full-nevers-conciergerie.fr"
                className="hover:text-sand-200"
              >
                contact@full-nevers-conciergerie.fr
              </a>
            </li>
            <li>
              <a href="tel:+33376150229" className="hover:text-sand-200">
                03&nbsp;76&nbsp;15&nbsp;02&nbsp;29
              </a>
            </li>
            <li className="text-sand-200/80">16 Quai de Mantoue, 58000 Nevers</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-600/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs text-sand-200/70 sm:px-8">
          <p>© {year} Full Nevers Conciergerie. Tous droits réservés.</p>
          <ul className="flex gap-4">
            <li>
              <Link href="/cgv" className="hover:text-sand-200">
                Mentions légales · CGV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
