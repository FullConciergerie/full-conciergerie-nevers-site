'use client';

import { useState, useTransition } from 'react';
import { submitPrestataireForm, type PrestataireResult } from './actions';

const PROFILES = [
  'Ménage / Entretien',
  'Petits travaux / Bricolage',
  'Espaces verts / Jardinage',
  'Entretien de piscine',
  "Conciergerie d'entreprise",
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
            label="Téléphone / WhatsApp"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div className="v2-form-row">
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
              'Salarié·e — recherche complément',
              'Auto-entrepreneur déjà',
              'Étudiant·e',
              'Retraité·e',
              "En recherche d'emploi",
              'Autre',
            ]}
          />
        </div>
      </div>

      {/* ── Section 2 : Missions ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">02 — Vos missions</span>
          <h3 className="v2-form-section-title">
            Quels métiers vous intéressent&nbsp;? <span className="req" style={{ color: 'var(--or)' }}>*</span>
          </h3>
          <p className="v2-form-section-hint">
            Cochez tous les profils que vous pouvez exercer — vous pouvez en cocher
            plusieurs.
          </p>
        </div>

        <div className="v2-checkbox-grid">
          {PROFILES.map((profile) => (
            <label key={profile} className="v2-checkbox">
              <input type="checkbox" name="profiles" value={profile} />
              <span>{profile}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ── Section 3 : Détails ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">03 — Vos disponibilités</span>
          <h3 className="v2-form-section-title">Quand et comment vous déplacez-vous&nbsp;?</h3>
        </div>

        <div className="v2-form-row">
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
            placeholder="Ex : week-ends + soirs"
          />
        </div>

        <div className="v2-form-row full">
          <Field
            label="Qui vous a recommandé ? (facultatif)"
            name="referrer"
            placeholder="Nom de votre parrain·marraine, s'il y en a un·e"
          />
        </div>
      </div>

      {/* ── Section 4 : Pour faire connaissance ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">04 — Pour mieux vous connaître</span>
          <h3 className="v2-form-section-title">Racontez-nous (facultatif)</h3>
        </div>

        <div className="v2-form-row full">
          <TextareaField
            label="Expérience pertinente"
            name="experience"
            placeholder="Ex : 3 ans dans le ménage hôtelier, jardin perso depuis 10 ans, etc."
            rows={3}
          />
        </div>

        <div className="v2-form-row full">
          <TextareaField
            label="Un mot pour vous présenter"
            name="motivation"
            placeholder="Ce qui vous motive, ce que vous cherchez chez nous…"
            rows={3}
          />
        </div>
      </div>

      {/* Résultat */}
      {result && 'success' in result && (
        <div role="status" className="v2-form-alert success">
          <span className="v2-form-alert-icon">✓</span>
          <span>
            <strong>Candidature envoyée.</strong> Nous revenons vers vous sous 48h, par
            téléphone ou WhatsApp.
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
            Réponse sous 48h
          </span>
          <button type="submit" disabled={isPending} className="v2-form-submit">
            <span>{isPending ? 'Envoi en cours…' : 'Envoyer ma candidature'}</span>
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
