'use client';

import { useState, useTransition } from 'react';
import { submitContactForm, type ContactResult } from './actions';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactResult | null>(null);

  return (
    <form
      action={(formData) => {
        setResult(null);
        startTransition(async () => {
          const res = await submitContactForm(formData);
          setResult(res);
          if ('success' in res && res.success) {
            (document.getElementById('contact-form') as HTMLFormElement)?.reset();
          }
        });
      }}
      id="contact-form"
      className="v2-form"
    >
      {/* ── Section 1 : Vos coordonnées ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">01 — Vos coordonnées</span>
          <h3 className="v2-form-section-title">Présentez-vous</h3>
        </div>

        <div className="v2-form-row full">
          <Field
            label="Nom complet"
            name="name"
            required
            autoComplete="name"
            placeholder="Marie Dupont"
          />
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
            autoComplete="tel"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      {/* ── Section 2 : Votre projet ── */}
      <div className="v2-form-section">
        <div className="v2-form-section-head">
          <span className="v2-form-section-eyebrow">02 — Votre projet</span>
          <h3 className="v2-form-section-title">Parlez-nous de votre logement</h3>
        </div>

        <div className="v2-form-row full">
          <SelectField
            label="Combien de logements souhaitez-vous nous confier ?"
            name="logements"
            options={[
              '1 logement',
              '2 à 3 logements',
              '4 logements ou plus',
              'Autre / je ne sais pas encore',
            ]}
          />
        </div>

        <div className="v2-form-row full">
          <TextareaField
            label="Votre message"
            name="message"
            required
            placeholder="Parlez-nous de votre logement, vos besoins, vos attentes…"
            rows={5}
          />
        </div>
      </div>

      {/* Résultat */}
      {result && 'success' in result && (
        <div role="status" className="v2-form-alert success">
          <span className="v2-form-alert-icon">✓</span>
          <span>
            <strong>Message reçu.</strong> Nous revenons vers vous sous 24h ouvrées
            pour échanger sur votre projet.
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
          Vos données restent confidentielles. Voir nos{' '}
          <a href="/cgv" style={{ textDecoration: 'underline' }}>
            mentions légales
          </a>
          .
        </p>
        <div className="v2-form-submit-row">
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--texte-mute)',
            }}
          >
            Réponse sous 24 h
          </span>
          <button type="submit" disabled={isPending} className="v2-form-submit">
            <span>{isPending ? 'Envoi en cours…' : 'Envoyer mon message'}</span>
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
      <select name={name} defaultValue={options[0]} className="v2-field-select">
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="v2-field">
      <span className="v2-field-label">
        {label}
        {required && <span className="req">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="v2-field-textarea"
      />
    </label>
  );
}
