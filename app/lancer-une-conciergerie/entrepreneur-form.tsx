'use client';

import { useState, useTransition } from 'react';
import {
  submitEntrepreneurForm,
  type EntrepreneurResult,
} from './actions';

export function EntrepreneurForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<EntrepreneurResult | null>(null);

  return (
    <form
      action={(formData) => {
        setResult(null);
        startTransition(async () => {
          const res = await submitEntrepreneurForm(formData);
          setResult(res);
          if ('success' in res) {
            (document.getElementById('entrepreneur-form') as HTMLFormElement)?.reset();
          }
        });
      }}
      id="entrepreneur-form"
      className="mt-10 space-y-6 rounded-3xl border border-brand-200 bg-sand-50 p-6 sm:p-8"
    >
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
          label="Téléphone *"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="06 12 34 56 78"
        />
        <Field
          label="Ville / zone envisagée *"
          name="city"
          required
          placeholder="Ex : Bourges, Auxerre, Mâcon…"
        />
        <SelectField
          label="Votre situation actuelle"
          name="currentRole"
          options={[
            '',
            'Salarié·e — en réflexion / reconversion',
            'Salarié·e — projet en parallèle',
            'Déjà indépendant·e',
            'Investisseur·euse',
            'En recherche d\'activité',
            'Retraité·e actif·ve',
            'Autre',
          ]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Capacité d'investissement (estimation)"
          name="investment"
          options={[
            '',
            'Moins de 5 000 €',
            '5 000 — 15 000 €',
            '15 000 — 30 000 €',
            '30 000 € et plus',
            'Je préfère en discuter',
          ]}
        />
        <SelectField
          label="Horizon de lancement"
          name="timeline"
          options={[
            '',
            'Dans les 3 mois',
            'Dans 3 à 6 mois',
            'Dans 6 à 12 mois',
            'Plus tard / à explorer',
          ]}
        />
      </div>

      <TextareaField
        label="Expérience pertinente (facultatif)"
        name="experience"
        placeholder="Immobilier, hospitalité, gestion, entrepreneuriat, etc."
        rows={3}
      />

      <TextareaField
        label="Pourquoi ce projet vous intéresse ?"
        name="motivation"
        placeholder="Ce que vous cherchez à construire, votre vision, votre marché…"
        rows={4}
      />

      {result && 'success' in result && (
        <div
          role="status"
          className="rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-900"
        >
          ✅ Candidature reçue. Delil vous appelle sous 48h pour un premier
          échange de découverte (30 minutes).
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

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-800/60">
          Vos données restent confidentielles et ne servent qu&apos;à organiser
          un premier appel.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-brand-700 px-7 py-3 text-sm font-medium text-sand-50 transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {isPending ? 'Envoi en cours…' : 'Demander un appel découverte'}
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
