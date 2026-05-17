import Link from 'next/link';
import type { Metadata } from 'next';
import { EntrepreneurForm } from './entrepreneur-form';

export const metadata: Metadata = {
  title: 'Lancer votre conciergerie · Avec accompagnement Full Conciergerie',
  description:
    "Vous voulez lancer une conciergerie dans votre ville ? Nous vous accompagnons : méthode, outils, marque, prestataires. De la prospection au premier client en moins de 3 mois.",
  alternates: { canonical: '/lancer-une-conciergerie' },
  openGraph: {
    title: 'Lancez votre conciergerie — Full Conciergerie',
    description:
      'Accompagnement complet pour ouvrir votre conciergerie locale, sur le modèle qui marche à Nevers.',
    url: '/lancer-une-conciergerie',
  },
};

export default function LancerConciergerioePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      {/* ──────── Hero ──────── */}
      <p className="font-cursive text-xl text-brand-600">Entrepreneurs</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Lancez votre conciergerie{' '}
        <span className="italic text-brand-700">dans votre ville.</span>
      </h1>

      <div className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed text-brand-800/85">
        <p>
          La location courte durée explose partout en France. Chaque ville
          moyenne a un besoin réel d&apos;une conciergerie locale,
          professionnelle, qui simplifie la vie des propriétaires.
        </p>
        <p>
          Nous avons construit le modèle à <strong>Nevers</strong> — clients
          fidèles, équipe stable, méthode rodée. Nous accompagnons désormais
          les <strong>entrepreneur·e·s</strong> qui veulent répliquer ce
          modèle dans leur ville, avec notre marque, nos outils, et notre
          retour d&apos;expérience.
        </p>
      </div>

      {/* ──────── 3 promesses ──────── */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Promise
          title="Méthode prouvée"
          text="Le playbook complet : acquisition clients, gestion prestataires, tarification, outils tech."
        />
        <Promise
          title="Marque + crédibilité"
          text="Vous bénéficiez de la marque Full Conciergerie et de notre track record dès le 1er rendez-vous."
        />
        <Promise
          title="Accompagnement réel"
          text="Pas un PDF. De vrais points hebdo, du mentorat opérationnel, et des outils mutualisés."
        />
      </div>

      {/* ──────── Ce que vous obtenez ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          Ce que nous vous apportons.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-800/80">
          Tout ce qu&apos;il faut pour passer du projet à la première mission
          en quelques semaines.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Benefit
            title="Marque & identité"
            text="Vous opérez sous Full Conciergerie [Votre Ville]. Charte graphique, site, supports."
          />
          <Benefit
            title="Outils tech"
            text="Notre plateforme de gestion des prestations et des plannings, déjà rodée."
          />
          <Benefit
            title="Process opérationnels"
            text="Onboarding propriétaires, contrôle qualité, gestion linge, communication voyageurs."
          />
          <Benefit
            title="Grille tarifaire"
            text="Pricing testé sur le terrain, calculateur de devis, modèles de contrats."
          />
          <Benefit
            title="Acquisition clients"
            text="Stratégie de prospection locale, scripts éprouvés, contenus pour Google."
          />
          <Benefit
            title="Mentorat 1:1"
            text="Points hebdomadaires les 3 premiers mois, puis mensuels. Accès direct à Delil."
          />
        </div>
      </div>

      {/* ──────── Profil idéal ──────── */}
      <div className="mt-20 rounded-3xl border border-brand-200 bg-sand-100 p-8 sm:p-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Le profil que nous recherchons.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-800/80">
          Nous sélectionnons nos partenaires. Pas par snobisme — pour
          maximiser nos chances communes de réussite.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Criterion
            title="Ancré·e localement"
            text="Vous vivez (ou souhaitez vous installer) dans la ville visée. Réseau local = avantage clé."
          />
          <Criterion
            title="Sens du service"
            text="Vous comprenez que ce métier, c'est avant tout de la relation humaine."
          />
          <Criterion
            title="Capacité à exécuter"
            text="Vous êtes prêt·e à vous retrousser les manches les premiers mois."
          />
          <Criterion
            title="Investissement modéré"
            text="Budget réaliste pour démarrer (de l'ordre de 5 à 20 k€ selon la formule)."
          />
        </div>
      </div>

      {/* ──────── Comment ça se passe ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          Comment ça se passe.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-4">
          <Step
            number="1"
            title="Appel découverte"
            text="30 min. On apprend à se connaître, on cadre le projet."
          />
          <Step
            number="2"
            title="Étude de faisabilité"
            text="Analyse de votre marché local. Aller / ne pas y aller."
          />
          <Step
            number="3"
            title="Onboarding"
            text="2 à 4 semaines de formation intensive + ouverture officielle."
          />
          <Step
            number="4"
            title="Accompagnement"
            text="Points hebdo 3 mois, puis mensuels. Communauté entre conciergeries."
          />
        </div>
      </div>

      {/* ──────── Formulaire ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          Postulez pour un appel découverte.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-800/80">
          5 minutes à remplir. On revient vers vous sous 48h pour caler un
          premier échange de 30 minutes (gratuit, sans engagement).
        </p>

        <EntrepreneurForm />
      </div>

      {/* ──────── FAQ ──────── */}
      <div className="mt-20">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Questions fréquentes.
        </h2>
        <div className="mt-8 space-y-6">
          <Faq
            q="C'est une franchise ?"
            a="Pas au sens juridique strict. Plutôt un partenariat avec licence de marque et accompagnement. Plus souple, moins coûteux qu'une vraie franchise — mais avec les mêmes bénéfices opérationnels."
          />
          <Faq
            q="Combien ça coûte ?"
            a="Cela dépend de la formule choisie. On définit ensemble lors de l'appel découverte. Ordre d'idée : un investissement de démarrage entre 5 000 et 20 000 €, puis une part variable proportionnelle à votre activité."
          />
          <Faq
            q="Faut-il être déjà entrepreneur ?"
            a="Non. Beaucoup de candidats viennent du salariat ou sont en reconversion. Ce qui compte : votre profil humain, votre énergie, et votre connaissance du marché local."
          />
          <Faq
            q="Vous prenez combien de partenaires par an ?"
            a="Volontairement peu — 4 à 8 maximum. Nous voulons maintenir la qualité de l'accompagnement et garder une vraie communauté entre conciergeries."
          />
          <Faq
            q="Et si la ville est déjà couverte ?"
            a="Une seule conciergerie Full par zone. Premier·ère arrivé·e, premier·ère servi·e. Plus vous candidatez tôt, plus vous avez de chances que votre ville soit disponible."
          />
        </div>
      </div>

      {/* ──────── CTA secondaire ──────── */}
      <div className="mt-16 rounded-3xl bg-brand-700 p-8 text-center text-sand-50 sm:p-12">
        <p className="font-cursive text-2xl text-sand-200">
          Une question avant de postuler ?
        </p>
        <h2 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
          Parlons de votre projet.
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

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-5">
      <h3 className="font-serif text-lg font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">{text}</p>
    </div>
  );
}

function Criterion({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-gold-400"
      />
      <div>
        <p className="font-serif text-lg font-medium text-brand-900">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-brand-800/80">
          {text}
        </p>
      </div>
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
      <h3 className="mt-2 font-serif text-lg font-medium text-brand-900">
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
