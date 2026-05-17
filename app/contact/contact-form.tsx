'use client';

import { useState, useTransition } from 'react';
import { submitContactForm, type ContactResult } from './actions';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactResult | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setResult(null);
    startTransition(async () => {
      const r = await submitContactForm(formData);
      setResult(r);
    });
  };

  if (result && 'success' in result && result.success) {
    return (
      <div className="mt-6 rounded-2xl border border-brand-300 bg-brand-50 p-6">
        <p className="font-serif text-xl text-brand-700">
          ✓ Message envoyé !
        </p>
        <p className="mt-2 text-sm text-brand-800/85">
          Merci pour votre message. Nous revenons vers vous sous 24h ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-4 text-sm text-brand-700 underline hover:text-brand-600"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-brand-800">Nom complet *</span>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border-2 border-brand-200 bg-white px-3 py-2 text-base focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-brand-800">Email *</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border-2 border-brand-200 bg-white px-3 py-2 text-base focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-brand-800">Téléphone</span>
        <input
          type="tel"
          name="phone"
          className="mt-1 block w-full rounded-lg border-2 border-brand-200 bg-white px-3 py-2 text-base focus:border-brand-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-brand-800">
          Combien de logements souhaitez-vous nous confier ?
        </span>
        <select
          name="logements"
          className="mt-1 block w-full rounded-lg border-2 border-brand-200 bg-white px-3 py-2 text-base focus:border-brand-500 focus:outline-none"
        >
          <option value="1">1 logement</option>
          <option value="2-3">2 à 3 logements</option>
          <option value="4+">4 logements ou plus</option>
          <option value="other">Autre / je ne sais pas encore</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-brand-800">
          Votre message *
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre logement, vos besoins, vos attentes..."
          className="mt-1 block w-full rounded-lg border-2 border-brand-200 bg-white px-3 py-2 text-base focus:border-brand-500 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-sand-50 hover:bg-brand-600 disabled:opacity-50"
      >
        {isPending ? 'Envoi en cours…' : 'Envoyer mon message'}
      </button>

      {result && 'error' in result && (
        <p className="text-sm text-red-700">❌ {result.error}</p>
      )}

      <p className="text-xs text-brand-800/60">
        En envoyant ce message, vous acceptez que vos données soient utilisées
        pour vous recontacter. Voir nos{' '}
        <a href="/cgv" className="underline">
          mentions légales
        </a>
        .
      </p>
    </form>
  );
}
