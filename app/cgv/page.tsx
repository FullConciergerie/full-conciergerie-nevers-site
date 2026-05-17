export const metadata = {
  title: 'Mentions légales — Full Conciergerie Nevers',
  description: 'Mentions légales et conditions générales de Full Conciergerie Nevers.',
};

const COMPANY = {
  legalName: 'Full Nevers Conciergerie',
  managerName: 'Delil TORGURSUL',
  legalForm: 'Société par actions simplifiée (SAS) au capital de 1 000 €',
  siret: '915 379 226 00029',
  rcs: 'RCS Nevers 915 379 226',
  apeCode: '5520Z — Hébergement touristique et autre hébergement de courte durée',
  address: '16 Quai de Mantoue',
  city: '58000 Nevers',
  email: 'contact@full-nevers-conciergerie.fr',
  phone: '03 76 15 02 29',
  tvaIntra: 'FR81 915 379 226',
};

const LAST_UPDATE = '17 mai 2026';

export default function CgvPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
      <p className="font-cursive text-xl text-brand-600">Informations légales</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-brand-900 sm:text-5xl">
        Mentions légales
      </h1>
      <p className="mt-3 text-sm text-brand-800/70">
        Dernière mise à jour : {LAST_UPDATE}
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          1. Éditeur du site
        </h2>
        <dl className="mt-4 space-y-1 text-sm text-brand-800/85">
          <Row label="Dénomination">{COMPANY.legalName}</Row>
          <Row label="Représentant légal">{COMPANY.managerName} (Président)</Row>
          <Row label="Forme juridique">{COMPANY.legalForm}</Row>
          <Row label="SIRET">{COMPANY.siret}</Row>
          <Row label="RCS">{COMPANY.rcs}</Row>
          <Row label="Code APE">{COMPANY.apeCode}</Row>
          <Row label="Adresse">
            {COMPANY.address}, {COMPANY.city}
          </Row>
          <Row label="Email">
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-brand-700 hover:underline"
            >
              {COMPANY.email}
            </a>
          </Row>
          <Row label="Téléphone">{COMPANY.phone}</Row>
          <Row label="TVA intracommunautaire">{COMPANY.tvaIntra}</Row>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          2. Hébergement
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave
          #4133, Walnut, CA 91789, États-Unis —{' '}
          <a
            href="https://vercel.com"
            className="text-brand-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            vercel.com
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          3. Propriété intellectuelle
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          L&apos;ensemble du contenu du site (textes, images, logos,
          photographies, vidéos) est la propriété exclusive de{' '}
          {COMPANY.legalName}, sauf mentions contraires. Toute reproduction,
          représentation, modification, publication, adaptation totale ou
          partielle des éléments du site est interdite, sauf autorisation
          écrite préalable.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          4. Données personnelles
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          Les informations recueillies via le formulaire de contact sont
          utilisées uniquement pour vous recontacter et préparer une
          proposition de service. Elles ne sont communiquées à aucun tiers.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          Conformément au Règlement Général sur la Protection des Données (UE
          2016/679, dit « RGPD »), vous disposez d&apos;un droit
          d&apos;accès, de rectification, de suppression, de portabilité et
          d&apos;opposition sur vos données, à exercer en écrivant à{' '}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-brand-700 hover:underline"
          >
            {COMPANY.email}
          </a>
          . En cas de différend, vous pouvez saisir la CNIL (
          <a
            href="https://www.cnil.fr"
            className="text-brand-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            www.cnil.fr
          </a>
          ).
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          5. Cookies
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          Ce site ne dépose aucun cookie publicitaire ni de tracking
          tiers. Seuls des cookies techniques strictement nécessaires au
          fonctionnement du site peuvent être utilisés.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          6. Loi applicable
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          Le présent site est soumis au droit français. Tout litige relatif à
          son utilisation relèvera, à défaut d&apos;accord amiable, des
          tribunaux français compétents.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-900">
          7. Médiation
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-800/85">
          En cas de litige non résolu à l&apos;amiable, vous pouvez saisir
          gratuitement la plateforme européenne de Règlement en Ligne des
          Litiges (RLL) :{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-brand-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <dt className="font-medium text-brand-700">{label} :</dt>
      <dd>{children}</dd>
    </div>
  );
}
