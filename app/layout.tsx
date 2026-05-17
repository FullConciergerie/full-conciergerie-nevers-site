import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Cormorant Garamond — serif élégant pour les titres (vintage / luxe)
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Manrope — sans-serif lisible pour le corps
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Dancing Script — cursive pour reprendre "Full Nevers" du logo
const dancing = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Full Conciergerie Nevers — Des services Full Options',
  description:
    "Conciergerie haut de gamme à Nevers. Confiez la gestion de votre Airbnb à des professionnels locaux : ménage, accueil voyageurs, photos pro, optimisation des tarifs.",
  keywords: [
    'conciergerie Nevers',
    'gestion Airbnb Nevers',
    'location courte durée Nevers',
    'ménage Airbnb',
    'conciergerie Bourgogne',
  ],
  openGraph: {
    title: 'Full Conciergerie Nevers',
    description: 'Des services Full Options pour votre Airbnb à Nevers.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
