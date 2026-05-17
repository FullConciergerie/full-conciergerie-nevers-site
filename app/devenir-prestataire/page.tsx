import Link from 'next/link';
import type { Metadata } from 'next';
import { PrestataireForm } from './prestataire-form';

export const metadata: Metadata = {
  title: 'Devenir prestataire · Rejoindre Full Conciergerie Nevers',
  description:
    "Vous cherchez des missions à Nevers pour arrondir vos fins de mois ? Rejoignez notre réseau de prestataires indépendants. Ménage, espaces verts, petits travaux, livraisons. Inscription en quelques minutes.",
  alternates: { canonical: '/devenir-prestataire' },
  openGraph: {
    title: 'Devenir prestataire — Full Conciergerie Nevers',
    description:
      'Travaillez quand vous voulez, gagnez en plus. Nous gérons l\'administratif.',
    url: '/devenir-prestataire',
  },
};

export default function DevenirPrestatairePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      {/* ──────── Hero ──────── */}
      <p className="font-cursive text-xl text-brand-600">Rejoignez l&apos;équipe</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Des missions près de chez vous,{' '}
        <span className="italic text-brand-700">
          quand vous voulez.
        </span>
      </h1>

      <div className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed text-brand-800/85">
        <p>
          Vous cherchez à arrondir vos fins de mois&nbsp;? Travailler quand
          vous le souhaitez&nbsp;? Découvrir un nouveau métier sans quitter le
          vôtre&nbsp;?
        </p>
        <p>
          <strong>Full Conciergerie Nevers</strong> recrute des
          indépendant·e·s motivé·e·s pour rejoindre son réseau de prestataires
          locaux. Vous postulez via le formulaire, on revient vers vous sous
          48h, et vous démarrez avec vos premières missions.
        </p>
      </div>

      {/* ──────── 3 promesses ──────── */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Promise
          title="100% flexible"
          text="Vous choisissez vos jours, vos créneaux, vos missions. Aucun engagement de durée."
        />
        <Promise
          title="On gère l'administratif"
          text="Facturation, paiements, planning, communication client : on s'occupe de tout."
        />
        <Promise
          title="Paiements rapides"
          text="Règlement sous 7 jours après chaque mission validée."
        />
      </div>

      {/* ──────── Profils recherchés ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          Quels profils nous recherchons.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-800/80">
          Plusieurs métiers, plusieurs niveaux d&apos;expérience. Que vous
          soyez débutant·e ou expert·e, il y a probablement une mission pour
          vous.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProfileCard
            title="Ménage / Entretien"
            text="Logements meublés entre voyageurs. Standard hôtelier exigé."
          />
          <ProfileCard
            title="Petits travaux / Bricolage"
            text="Plomberie, électricité légère, ameublement, peinture."
          />
          <ProfileCard
            title="Espaces verts"
            text="Tonte, taille, désherbage, arrosage. Saisonnier ou régulier."
          />
          <ProfileCard
            title="Entretien de piscine"
            text="Nettoyage, traitement de l'eau, ouverture/fermeture saisonnière."
          />
          <ProfileCard
            title="Conciergerie d'entreprise"
            text="Services aux salariés en entreprise : pressing, courses, gardiennage…"
          />
          <ProfileCard
            title="Livraisons & courses"
            text="Petits-déjeuners voyageurs, paniers locaux, courses sur demande."
          />
        </div>
      </div>

      {/* ──────── Comment ça marche ──────── */}
      <div className="mt-20 rounded-3xl border border-brand-200 bg-sand-100 p-8 sm:p-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Comment ça marche.
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <Step
            number="1"
            title="Vous postulez"
            text="Vous remplissez le formulaire ci-dessous en 3 minutes. Aucun engagement."
          />
          <Step
            number="2"
            title="On vous rappelle"
            text="Sous 48h, par téléphone ou WhatsApp. On valide votre profil ensemble."
          />
          <Step
            number="3"
            title="Première mission"
            text="On vous propose des missions qui collent à vos disponibilités. Vous acceptez, on vous brief, vous y allez."
          />
        </div>
      </div>

      {/* ──────── Formulaire ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          Postulez maintenant.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-800/80">
          5 à 10 minutes pour remplir. On vous recontacte sous 48h.
        </p>

        <PrestataireForm />
      </div>

      {/* ──────── FAQ courte ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Questions fréquentes.
        </h2>
        <div className="mt-8 space-y-6">
          <Faq
            q="Faut-il être auto-entrepreneur pour postuler ?"
            a="Pas obligatoirement à l'inscription. Si vous ne l'êtes pas encore, on vous accompagne dans les démarches (très simples, 100% en ligne, environ 15 minutes)."
          />
          <Faq
            q="À quelle fréquence pourrai-je travailler ?"
            a="Ça dépend de votre disponibilité et des missions à pourvoir. Certains prestataires font 2-3h par semaine, d'autres font des temps pleins. Vous choisissez."
          />
          <Faq
            q="Comment suis-je rémunéré·e ?"
            a="Vous nous facturez vos missions (mensuellement ou à la mission, selon vos préférences). Paiement sous 7 jours après validation."
          />
          <Faq
            q="Vous travaillez dans quelle zone ?"
            a="Nevers et 30 km autour : Magny-Cours, Pougues-les-Eaux, La Charité-sur-Loire, Imphy, Decize, etc. Plus la zone autour de votre domicile est large, plus vous aurez d'opportunités."
          />
          <Faq
            q="Combien je peux espérer gagner ?"
            a="Dépend du profil et du volume. Indicatif : 15-25€/h en ménage, 20-40€/h en petits travaux, selon votre statut et expérience. On en parle au téléphone."
          />
        </div>
      </div>

      {/* ──────── CTA secondaire ──────── */}
      <div className="mt-16 rounded-3xl bg-brand-700 p-8 text-center text-sand-50 sm:p-12">
        <p className="font-cursive text-2xl text-sand-200">
          Une question avant de postuler ?
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
          Parlons-en directement.
        </h2>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+33376150229"
            className="rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-brand-700 hover:bg-sand-100"
          >
            📞 03 76 15 02 29
          </a>
          <a
            href="https://wa.me/33661753738"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-sand-50 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-sand-50 hover:text-brand-700"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-full border-2 border-sand-50 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-sand-50 hover:text-brand-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ───────── helpers ───────── */

function Promise({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-sand-50 p-6">
      <span aria-hidden="true" className="block h-px w-10 bg-gold-400" />
      <h3 className="mt-4 font-serif text-xl font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">{text}</p>
    </div>
  );
}

function ProfileCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-5">
      <h3 className="font-serif text-lg font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="font-serif text-4xl text-gold-500">{number}</p>
      <h3 className="mt-2 font-serif text-xl font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-brand-100 bg-sand-50 p-5">
      <summary className="cursor-pointer list-none font-serif text-lg font-medium text-brand-900 marker:hidden">
        <span className="flex items-start justify-between gap-3">
          <span>{q}</span>
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-5 w-5 shrink-0 text-brand-700 transition-transform group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-brand-800/85">{a}</p>
    </details>
  );
}
