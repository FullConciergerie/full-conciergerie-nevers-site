import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Dancing_Script, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

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

// JetBrains Mono — mono pour les eyebrows / labels de la landing v2
const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const SITE_URL = 'https://full-nevers-conciergerie.fr';
const SITE_NAME = 'Full Conciergerie Nevers';
const DEFAULT_DESCRIPTION =
  "Conciergerie haut de gamme à Nevers. Confiez la gestion de votre Airbnb à des professionnels locaux : ménage, accueil voyageurs, photos pro, optimisation des tarifs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Title template : chaque page peut surcharger juste son titre,
  // le suffixe " — Full Conciergerie Nevers" est ajouté automatiquement.
  title: {
    default: 'Full Conciergerie Nevers — Des services Full Options',
    template: '%s — Full Conciergerie Nevers',
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    'conciergerie Nevers',
    'conciergerie 58',
    'gestion Airbnb Nevers',
    'gestion Booking Nevers',
    'location courte durée Nevers',
    'ménage Airbnb Nevers',
    'conciergerie Nièvre',
    'conciergerie Bourgogne',
    'accueil voyageurs Nevers',
    'Full Nevers Conciergerie',
  ],

  authors: [{ name: 'Delil Torgursul', url: SITE_URL }],
  creator: 'Full Nevers Conciergerie',
  publisher: 'Full Nevers Conciergerie',

  // URLs canoniques — évite que Google indexe plusieurs versions du site.
  alternates: {
    canonical: '/',
  },

  // Robots — autorise tout par défaut, avec quelques préférences fines.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn, iMessage…)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Full Conciergerie Nevers — Des services Full Options',
    description: DEFAULT_DESCRIPTION,
    // L'image est lue automatiquement depuis app/opengraph-image.jpg
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Full Conciergerie Nevers',
    description: 'Des services Full Options pour votre Airbnb à Nevers.',
    // L'image est lue automatiquement depuis app/twitter-image.jpg
  },

  // Formats des appareils
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  category: 'Conciergerie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable} ${dancing.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Bouton WhatsApp flottant — toutes les pages */}
        <WhatsAppButton />
        {/* Vercel Analytics — RGPD-compliant, sans cookies */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
