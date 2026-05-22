'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Footer global du site — version design v2 (vert profond + or, typo serif).
 *
 * - Sur la home `/` : on retourne null, la home a son propre footer inline.
 * - Sur les autres pages : footer riche avec marque, contact, navigation,
 *   autres services, mentions légales.
 */
export function Footer() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className="global-footer">
      <div className="global-footer-grid">
        <div className="global-footer-brand">
          <p className="global-footer-name">
            Full Conciergerie
            <br />
            <span className="global-footer-italic">Nevers</span>
          </p>
          <span className="global-footer-rule" aria-hidden="true" />
          <p className="global-footer-tagline">Des services Full Options</p>
          <p className="global-footer-pitch">
            Conciergerie à Nevers et en région. Confiez votre Airbnb à des
            professionnels locaux passionnés.
          </p>
        </div>

        <div className="global-footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+33376150229">03 76 15 02 29</a>
            </li>
            <li>
              <a href="https://wa.me/33661753738">WhatsApp</a>
            </li>
            <li>
              <a href="mailto:contact@full-nevers-conciergerie.fr">
                contact@full-nevers-conciergerie.fr
              </a>
            </li>
            <li>
              16 Quai de Mantoue
              <br />
              58000 Nevers
            </li>
          </ul>
        </div>

        <div className="global-footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/services">Nos services</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/contact">Demander un devis</Link>
            </li>
          </ul>
        </div>

        <div className="global-footer-col">
          <h4>Autres services</h4>
          <ul>
            <li>
              <Link href="/devenir-prestataire">Devenir prestataire →</Link>
            </li>
            <li>
              <Link href="/lancer-une-conciergerie">
                Lancer votre conciergerie →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="global-footer-bot">
        <small>
          © {new Date().getFullYear()} SAS Full Nevers Conciergerie · SIREN
          915&nbsp;379&nbsp;226 · RCS Nevers ·{' '}
          <Link href="/cgv" style={{ textDecoration: 'underline' }}>
            Mentions légales / CGV
          </Link>
        </small>
        <small className="made">— Des services Full Options</small>
      </div>
    </footer>
  );
}
