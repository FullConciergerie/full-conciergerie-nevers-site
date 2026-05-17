import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-cursive text-2xl text-brand-600">
              À votre service à Nevers
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Confiez la gestion de votre Airbnb à des{' '}
              <span className="italic text-brand-700">professionnels locaux</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-800/80">
              De l&apos;accueil voyageur au ménage professionnel, en passant par
              l&apos;optimisation des tarifs et la communication avec les
              plateformes — nous prenons tout en charge pour que vous puissiez
              profiter sereinement de vos revenus locatifs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-brand-700 px-6 py-3 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-700 hover:text-sand-50"
              >
                Découvrir nos services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-200/60 pt-8 sm:max-w-md">
              <Stat number="30" label="logements gérés" />
              <Stat number="100%" label="autonomie pour vous" />
              <Stat number="800+" label="commentaires plateformes" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-100 via-sand-100 to-brand-50 p-8">
              <div className="relative flex h-full items-center justify-center rounded-[2.5rem] border-2 border-brand-300/40">
                <Image
                  src="/logo.jpg"
                  alt="Logo Full Conciergerie Nevers"
                  width={600}
                  height={600}
                  className="h-full w-full object-contain p-8 mix-blend-multiply"
                  priority
                />
              </div>
            </div>
            <p className="mt-6 text-center font-cursive text-xl text-brand-600">
              Des services Full Options
            </p>
          </div>
        </div>
      </section>

      {/* ──────────── 3+ SERVICES ──────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-cursive text-xl text-brand-600">Nos services</p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
              Une gestion complète, sans aucun souci.
            </h2>
            <p className="mt-4 text-brand-800/80">
              De l&apos;arrivée du voyageur à son départ, nous orchestrons chaque
              étape pour vous offrir une tranquillité totale.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <ServiceCard
              emoji="🧹"
              title="Ménage professionnel"
              description="Une équipe de prestataires expérimentés assure le ménage après chaque départ, avec un standard hôtelier."
            />
            <ServiceCard
              emoji="👋"
              title="Accueil voyageurs"
              description="Communication 7j/7, instructions claires, support pendant le séjour. Vous ne décrochez plus jamais le téléphone."
            />
            <ServiceCard
              emoji="📊"
              title="Optimisation des tarifs"
              description="Analyse du marché local et ajustement des prix selon la saison pour maximiser vos revenus."
            />
            <ServiceCard
              emoji="📸"
              title="Photos professionnelles"
              description="Mise en valeur de votre logement avec des photos qui attirent les meilleurs voyageurs."
            />
            <ServiceCard
              emoji="🛏️"
              title="Linge & blanchisserie"
              description="Gestion intégralement en interne pour maîtriser les coûts et garantir une qualité hôtelière — toujours propre, toujours prêt."
            />
            <ServiceCard
              emoji="🔧"
              title="Petites interventions"
              description="Espaces verts, dépannage, livraison d&apos;extras voyageurs — nos partenaires s&apos;occupent de tout."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-600"
            >
              Voir tous nos services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────── À PROPOS — Photo Delil ──────────── */}
      <section className="bg-sand-100 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10">
            <Image
              src="/delil.jpg"
              alt="Delil Torgursul, fondateur de Full Conciergerie Nevers"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <p className="font-cursive text-xl text-brand-600">
              Qui sommes-nous ?
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
              Une équipe nivernaise, à votre service.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-800/85">
              Fondée par <strong>Delil Torgursul</strong>, Full Conciergerie
              Nevers accompagne les propriétaires de logements en location
              courte durée de la région nivernaise. Notre engagement&nbsp;: une
              qualité de service irréprochable, des prestataires locaux
              fiables, et une transparence totale sur la gestion de votre bien.
            </p>
            <p className="mt-4 text-brand-800/80">
              Que vous soyez propriétaire d&apos;un appartement de centre-ville
              ou d&apos;une maison de caractère, nous adaptons notre prestation
              à votre logement et à vos voyageurs.
            </p>
            <div className="mt-8">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 px-5 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-700 hover:text-sand-50"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── TÉMOIGNAGES ──────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-cursive text-xl text-brand-600">
              Ce qu&apos;ils en disent
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-brand-900 sm:text-4xl">
              Des voyageurs comblés, des propriétaires sereins.
            </h2>
            <p className="mt-4 text-brand-800/80">
              Plus de 800 commentaires sur Airbnb et Booking. Voici quelques
              retours récents de voyageurs ayant séjourné dans nos logements.
            </p>
          </div>

          {/* Carrousel : scroll-snap horizontal, pas de JS */}
          <div
            className="mt-14 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Témoignages voyageurs"
          >
            <Testimonial
              quote="Jolie maison décorée avec goût et bien équipée. Les instructions pour accéder sont claires. Très bon relationnel avec le propriétaire."
              author="David"
              date="Mai 2026"
              platform="Airbnb"
            />
            <Testimonial
              quote="Très disponible, a cherché une solution pour le stationnement des vélos et du véhicule. Merci beaucoup !"
              author="Manuela"
              location="Suisse"
              date="Mai 2026"
              platform="Airbnb"
            />
            <Testimonial
              quote="Logement impeccable."
              author="Benoit"
              location="France"
              date="Mai 2026"
              platform="Airbnb"
            />
          </div>

          <p className="mt-8 text-center text-sm text-brand-700/70">
            ★★★★★ — Note moyenne 4,9/5 sur Airbnb · plus de 800 commentaires
          </p>
          <p className="mt-2 text-center text-xs text-brand-800/50 lg:hidden">
            Faites glisser pour voir plus →
          </p>
        </div>
      </section>

      {/* ──────────── CTA FINAL ──────────── */}
      <section className="bg-brand-700 py-20 text-sand-50 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p className="font-cursive text-2xl text-sand-200">
            Prêt à nous confier votre logement ?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">
            Discutons de votre projet.
          </h2>
          <p className="mt-4 text-sand-100/90">
            Devis gratuit et sans engagement. Réponse sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-brand-700 hover:bg-sand-100"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33376150229"
              className="rounded-full border-2 border-sand-50 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-sand-50 hover:text-brand-700"
            >
              03 76 15 02 29
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-brand-700">{number}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-brand-700/70">
        {label}
      </p>
    </div>
  );
}

function ServiceCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-brand-100 bg-sand-50 p-6 transition-shadow hover:shadow-lg hover:shadow-brand-900/5">
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-4 font-serif text-xl font-medium text-brand-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/80">
        {description}
      </p>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  location,
  date,
  platform,
}: {
  quote: string;
  author: string;
  location?: string;
  date: string;
  platform: string;
}) {
  return (
    <figure className="flex shrink-0 basis-[85%] snap-center flex-col rounded-2xl border border-brand-100 bg-sand-50 p-8 sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]">
      <div
        className="font-serif text-5xl leading-none text-brand-300"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <blockquote className="mt-2 flex-1 font-serif text-lg italic leading-relaxed text-brand-900">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-2 text-sm text-brand-800/80">
        <span className="font-medium text-brand-700">— {author}</span>
        {location && (
          <>
            <span className="text-brand-800/60">·</span>
            <span>{location}</span>
          </>
        )}
        <span className="text-brand-800/60">·</span>
        <span>{date}</span>
        <span className="text-brand-800/60">·</span>
        <span className="text-xs uppercase tracking-wider text-brand-600">
          {platform}
        </span>
      </figcaption>
    </figure>
  );
}
