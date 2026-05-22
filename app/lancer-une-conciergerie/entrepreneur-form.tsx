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
      className="v2-form"
    >
      {/* ── Section 1 : Coordonnées ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">01 — Vos coordonnées</span>
          <h3 className="v2-form-section-title">Présentez-vous</h3>
        </div>

        <div className="v2-form-row">
          <Field label="Prénom" name="firstName" required autoComplete="given-name" placeholder="Marie" />
          <Field label="Nom" name="lastName" required autoComplete="family-name" placeholder="Dupont" />
        </div>
        <div className="v2-form-row">
          <Field
            label="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@email.fr"
          />
          <Field
            label="Téléphone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      {/* ── Section 2 : Votre projet ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">02 — Votre projet</span>
          <h3 className="v2-form-section-title">Où et quand voulez-vous lancer&nbsp;?</h3>
        </div>

        <div className="v2-form-row">
          <Field
            label="Ville / zone envisagée"
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
              "En recherche d'activité",
              'Retraité·e actif·ve',
              'Autre',
            ]}
          />
        </div>

        <div className="v2-form-row">
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
      </div>

      {/* ── Section 3 : Pour mieux vous connaître ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">03 — Pour mieux vous connaître</span>
          <h3 className="v2-form-section-title">Votre parcours, votre vision</h3>
        </div>

        <div className="v2-form-row full">
          <TextareaField
            label="Expérience pertinente (facultatif)"
            name="experience"
            placeholder="Immobilier, hospitalité, gestion, entrepreneuriat, etc."
            rows={3}
          />
        </div>

        <div className="v2-form-row full">
          <TextareaField
            label="Pourquoi ce projet vous intéresse ?"
            name="motivation"
            placeholder="Ce que vous cherchez à construire, votre vision, votre marché…"
            rows={4}
          />
        </div>
      </div>

      {/* Résultat */}
      {result && 'success' in result && (
        <div role="status" className="v2-form-alert success">
          <span className="v2-form-alert-icon">✓</span>
          <span>
            <strong>Candidature reçue.</strong> Delil vous appelle sous 48h pour un
            premier échange de découverte (30 minutes).
          </span>
        </div>
      )}
      {result && 'error' in result && (
        <div role="alert" className="v2-form-alert error">
          <span className="v2-form-alert-icon">!</span>
          <span>{result.error}</span>
        </div>
      )}

      {/* Footer */}
      <div className="v2-form-footer">
        <p className="v2-form-footer-note">
          Vos données restent confidentielles
        </p>
        <div className="v2-form-submit-row">
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--texte-mute)' }}>
            Premier échange gratuit
          </span>
          <button type="submit" disabled={isPending} className="v2-form-submit">
            <span>{isPending ? 'Envoi en cours…' : 'Demander un appel découverte'}</span>
            <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
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
    <label className="v2-field">
      <span className="v2-field-label">
        {label}
        {required && <span className="req">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="v2-field-input"
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
    <label className="v2-field">
      <span className="v2-field-label">{label}</span>
      <select name={name} defaultValue="" className="v2-field-select">
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
    <label className="v2-field">
      <span className="v2-field-label">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="v2-field-textarea"
      />
    </label>
  );
}
