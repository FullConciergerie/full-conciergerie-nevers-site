'use client';

import { useState, useTransition } from 'react';
import { submitPrestataireForm, type PrestataireResult } from './actions';

const PROFILES = [
  'Ménage / Entretien',
  'Petits travaux / Bricolage',
  'Espaces verts / Jardinage',
  'Entretien de piscine',
  'Conciergerie d\'entreprise',
  'Livraisons / Courses',
  'Accueil voyageurs / Check-in',
  'Autre',
] as const;

export function PrestataireForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<PrestataireResult | null>(null);

  return (
    <form
      action={(formData) => {
        setResult(null);
        startTransition(async () => {
          const res = await submitPrestataireForm(formData);
          setResult(res);
          if ('success' in res) {
            (document.getElementById('prestataire-form') as HTMLFormElement)?.reset();
          }
        });
      }}
      id="prestataire-form"
      className="mt-10 space-y-6 rounded-3xl border border-brand-200 bg-sand-50 p-6 sm:p-8"
    >
      {/* Coordonnées */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom *" name="firstName" required autoComplete="given-name" />
        <Field label="Nom *" name="lastName" required autoComplete="family-name" />
        <Field
          label="Email *"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@email.fr"
        />
        <Field
          label="Téléphone / WhatsApp *"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="06 12 34 56 78"
        />
        <Field
          label="Code postal"
          name="postalCode"
          autoComplete="postal-code"
          placeholder="58000"
        />
        <SelectField
          label="Votre situation actuelle"
          name="status"
          options={[
            '',
            'Salarié — recherche complément',
            'Auto-entrepreneur déjà',
            'Étudiant',
            'Retraité',
            'En recherche d\'emploi',
            'Autre',
          ]}
        />
      </div>

      {/* Missions souhaitées */}
      <fieldset>
        <legend className="text-sm font-medium text-brand-900">
          Quelles missions vous intéressent ? <span className="text-brand-700">*</span>
        </legend>
        <p className="mt-1 text-xs text-brand-800/60">
          Cochez tous les profils que vous pouvez exercer.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {PROFILES.map((profile) => (
            <label
              key={profile}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 transition-colors hover:border-brand-400 has-[:checked]:border-brand-700 has-[:checked]:bg-brand-100/40"
            >
              <input
                type="checkbox"
                name="profiles"
                value={profile}
                className="h-4 w-4 accent-brand-700"
              />
              <span>{profile}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Détails complémentaires */}
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Véhicule"
          name="vehicle"
          options={[
            '',
            'Voiture personnelle',
            'Scooter / Moto',
            'Vélo',
            'Pas de véhicule',
          ]}
        />
        <Field
          label="Disponibilités (jours / créneaux)"
          name="availability"
          placeholder="Ex : Week-ends + soirs"
        />
      </div>

      <Field
        label="Qui vous a recommandé ? (facultatif)"
        name="referrer"
        placeholder="Nom de votre parrain·marraine, s'il y en a un·e"
      />

      <TextareaField
        label="Expérience pertinente (facultatif)"
        name="experience"
        placeholder="Ex : 3 ans dans le ménage hôtelier, jardin perso depuis 10 ans, etc."
        rows={3}
      />

      <TextareaField
        label="Un mot pour vous présenter (facultatif)"
        name="motivation"
        placeholder="Ce qui vous motive, ce que vous cherchez chez nous..."
        rows={3}
      />

      {/* Résultat */}
      {result && 'success' in result && (
        <div
          role="status"
          className="rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-900"
        >
          ✅ Candidature envoyée ! Nous revenons vers vous sous 48h, par
          téléphone ou WhatsApp.
        </div>
      )}
      {result && 'error' in result && (
        <div
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900"
        >
          ❌ {result.error}
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-800/60">
          Vos données restent confidentielles et ne sont utilisées que pour
          vous recontacter.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-brand-700 px-7 py-3 text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {isPending ? 'Envoi en cours…' : 'Envoyer ma candidature'}
        </button>
      </div>
    </form>
  );
}

/* ───────── helpers ───────── */

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="block font-medium text-brand-900">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-900 focus:border-brand-700 focus:outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-sm">
      <span className="block font-medium text-brand-900">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-900 focus:border-brand-700 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt || '— Sélectionner —'}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block text-sm">
      <span className="block font-medium text-brand-900">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-900 focus:border-brand-700 focus:outline-none"
      />
    </label>
  );
}
