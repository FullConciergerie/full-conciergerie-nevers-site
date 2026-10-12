/**
 * Liste légère des pages villes pour le pied de page (composant client) :
 * évite d'embarquer tout le contenu de villes.ts dans le JavaScript du navigateur.
 * À tenir à jour avec villes.ts.
 */
export const villesLiens: { slug: string; nom: string }[] = [
  { slug: 'la-charite-sur-loire', nom: 'La Charité-sur-Loire' },
  { slug: 'magny-cours', nom: 'Magny-Cours' },
  { slug: 'decize', nom: 'Decize' },
  { slug: 'pouilly-sur-loire', nom: 'Pouilly-sur-Loire' },
  { slug: 'cosne-cours-sur-loire', nom: 'Cosne-Cours-sur-Loire' },
  { slug: 'sancerre', nom: 'Sancerre' },
  { slug: 'moulins', nom: 'Moulins' },
  { slug: 'saint-honore-les-bains', nom: 'Saint-Honoré-les-Bains' },
  { slug: 'bourges', nom: 'Bourges' },
  { slug: 'saint-amand-montrond', nom: 'Saint-Amand-Montrond' },
  { slug: 'clamecy', nom: 'Clamecy' },
  { slug: 'bourbon-lancy', nom: 'Bourbon-Lancy' },
  { slug: 'lac-des-settons', nom: 'Lac des Settons' },
  { slug: 'vezelay', nom: 'Vézelay' },
];
