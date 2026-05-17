import type { Metadata } from 'next';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact · Devis gratuit',
  description:
    "Confiez votre logement à Full Conciergerie Nevers. Devis gratuit sous 24h. Téléphone : 03 76 15 02 29 — Email : contact@full-nevers-conciergerie.fr",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Full Conciergerie Nevers',
    description: 'Devis gratuit sous 24h pour la gestion de votre Airbnb à Nevers.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      <p className="font-cursive text-xl text-brand-600">Contact</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Discutons de votre projet.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-brand-800/80">
        Que vous souhaitiez confier la gestion de votre logement ou simplement
        avoir un devis, on est là pour vous répondre.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Coordonnées */}
        <div>
          <h2 className="font-serif text-2xl font-medium text-brand-900">
            Nos coordonnées
          </h2>
          <ul className="mt-6 space-y-5">
            <li>
              <p className="text-xs uppercase tracking-wider text-brand-600">
                Téléphone
              </p>
              <a
                href="tel:+33376150229"
                className="mt-1 block font-serif text-2xl text-brand-700 hover:text-brand-600"
              >
                03 76 15 02 29
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-wider text-brand-600">
                Email
              </p>
              <a
                href="mailto:contact@full-nevers-conciergerie.fr"
                className="mt-1 block break-all font-serif text-xl text-brand-700 hover:text-brand-600"
              >
                contact@full-nevers-conciergerie.fr
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-wider text-brand-600">
                Adresse
              </p>
              <p className="mt-1 font-serif text-xl text-brand-700">
                16 Quai de Mantoue
                <br />
                58000 Nevers
              </p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-wider text-brand-600">
                Horaires
              </p>
              <p className="mt-1 text-brand-800/85">
                Lundi - Samedi : 9h - 19h
                <br />
                Dimanche : sur rendez-vous
              </p>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl border border-brand-200 bg-sand-100 p-5">
            <p className="font-serif text-lg text-brand-900">
              💬 Préfère un appel direct ?
            </p>
            <p className="mt-2 text-sm text-brand-800/85">
              Appelez-nous au 03 76 15 02 29 — on prend le temps de discuter de
              votre logement et de vos attentes.
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div>
          <h2 className="font-serif text-2xl font-medium text-brand-900">
            Ou laissez-nous un message
          </h2>
          <p className="mt-2 text-sm text-brand-800/80">
            Réponse sous 24h, gratuite et sans engagement.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
