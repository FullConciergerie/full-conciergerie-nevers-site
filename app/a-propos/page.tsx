import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos · Notre équipe',
  description:
    "Découvrez l'équipe de Full Conciergerie Nevers : Delil Torgursul, fondateur, et ses prestataires locaux de confiance pour gérer votre Airbnb à Nevers.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos — Full Conciergerie Nevers',
    description:
      'Une équipe nivernaise au service des propriétaires de logements en location courte durée.',
    url: '/a-propos',
  },
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      <p className="font-cursive text-xl text-brand-600">À propos</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Une équipe locale, passionnée par l&apos;hospitalité.
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10">
          <Image
            src="/delil-portrait.jpg"
            alt="Delil Torgursul, fondateur de Full Conciergerie Nevers"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
            Delil Torgursul, fondateur
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-800/85">
            Originaire de Nevers, Delil a fondé Full Conciergerie Nevers avec
            une conviction simple : la location courte durée doit rester un
            plaisir pour les propriétaires, pas une corvée.
          </p>
          <p className="mt-4 leading-relaxed text-brand-800/85">
            Fort de plusieurs années d&apos;expérience dans l&apos;hospitalité
            et la gestion locative, il a constitué un réseau de prestataires
            locaux fiables et passionnés. Chaque membre de l&apos;équipe
            partage la même exigence : offrir aux voyageurs une expérience
            irréprochable et aux propriétaires une tranquillité totale.
          </p>
          <p className="mt-4 leading-relaxed text-brand-800/85">
            Au-delà de la gestion, c&apos;est aussi l&apos;envie de faire
            rayonner Nevers et sa région auprès des voyageurs qui anime
            l&apos;équipe au quotidien.
          </p>
        </div>
      </div>

      {/* L'équipe */}
      <div className="mt-20">
        <h2 className="text-center font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
          L&apos;équipe en coulisses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-800/80">
          Plusieurs prestataires de confiance travaillent main dans la main
          pour assurer la qualité de service. Voici nos collaborateurs
          principaux à Nevers.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TeamCard
            name="Marc"
            role="Responsable blanchisserie interne"
            description="Pilote l'atelier de blanchisserie en interne. Le linge revient toujours impeccable et à l'heure."
          />
          <TeamCard
            name="Sophie"
            role="Prestataire ménage"
            description="L'œil expert qui repère le moindre détail. Standard hôtelier garanti."
          />
          <TeamCard
            name="Thomas"
            role="Prestataire ménage"
            description="Réactif, fiable, attentif aux instructions. Idéal pour les logements à haute rotation."
          />
          <TeamCard
            name="Léa"
            role="Prestataire ménage"
            description="Discrète et méticuleuse. Apprécie particulièrement les beaux logements de caractère."
          />
          <TeamCard
            name="Émilie"
            role="Prestataire ménage"
            description="Polyvalente, intervient sur tous types de logements avec la même rigueur."
          />
          <TeamCard
            name="Et bien d'autres…"
            role="Partenaires locaux"
            description="Restaurateurs, loueurs de vélos, artisans : un réseau qui s'étoffe pour vos voyageurs."
          />
        </div>
      </div>

      {/* Notre engagement */}
      <div className="mt-20 rounded-3xl border border-brand-200 bg-sand-100 p-8 sm:p-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900 sm:text-3xl">
          Notre engagement
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <EngagementCard
            number="1"
            title="Transparence totale"
            description="Rapports détaillés, photos après chaque mission, accès permanent à votre planning."
          />
          <EngagementCard
            number="2"
            title="Réactivité"
            description="Réponse en moins de 2h en journée. Présence 7j/7 pour vos voyageurs."
          />
          <EngagementCard
            number="3"
            title="Qualité hôtelière"
            description="Le même standard pour tous les logements, qu'il s'agisse d'un studio ou d'une maison."
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-brand-600"
        >
          Discutons de votre projet
        </Link>
      </div>
    </div>
  );
}

function TeamCard({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6">
      <h3 className="font-serif text-xl font-medium text-brand-900">{name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-brand-600">
        {role}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brand-800/80">
        {description}
      </p>
    </div>
  );
}

function EngagementCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-serif text-4xl text-gold-500">{number}</p>
      <h3 className="mt-2 font-serif text-xl font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">
        {description}
      </p>
    </div>
  );
}
