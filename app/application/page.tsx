import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "L'application Full Conciergerie — le logiciel qui pilote une conciergerie",
  description:
    "Missions, prestataires, linge, incidents, facturation : le logiciel que nous avons construit pour notre propre conciergerie, ouvert aux propriétaires et aux conciergeries. Gratuit : nous nous rémunérons uniquement sur les missions lancées. Première mission offerte.",
  alternates: { canonical: 'https://full-nevers-conciergerie.fr/application' },
  openGraph: {
    title: "L'application Full Conciergerie",
    description:
      "Le logiciel qui fait tourner notre conciergerie à Nevers : missions, prestataires, linge, facturation automatique. Ouvert aux propriétaires et aux conciergeries.",
    url: 'https://full-nevers-conciergerie.fr/application',
  },
};

const css = `
.fca-mock{background:var(--ivoire);border:1px solid var(--ligne);box-shadow:0 24px 60px -32px rgba(15,38,37,.35)}
.fca-mock.dark{background:#12201f;border-color:rgba(245,241,232,.14);box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.fca-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--ligne)}
.fca-mock.dark .fca-bar{border-bottom-color:rgba(245,241,232,.12)}
.fca-dot{width:9px;height:9px;border-radius:50%;background:var(--ligne)}
.fca-mock.dark .fca-dot{background:rgba(245,241,232,.2)}
.fca-bar-t{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--texte-mute);margin-left:8px}
.fca-mock.dark .fca-bar-t{color:rgba(245,241,232,.5)}
.fca-body{padding:22px}

.fca-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:1px;background:var(--ligne)}
.fca-mock.dark .fca-kpis{background:rgba(245,241,232,.12)}
.fca-kpi{background:var(--ivoire);padding:18px 20px;display:flex;flex-direction:column;gap:6px}
.fca-mock.dark .fca-kpi{background:#12201f}
.fca-kpi .l{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--texte-mute)}
.fca-mock.dark .fca-kpi .l{color:rgba(245,241,232,.5)}
.fca-kpi .v{font-family:var(--serif);font-size:34px;line-height:1;color:var(--vert-deep)}
.fca-mock.dark .fca-kpi .v{color:var(--ivoire)}
.fca-kpi .s{font-size:12.5px;color:var(--texte-mute)}
.fca-mock.dark .fca-kpi .s{color:rgba(245,241,232,.55)}
.fca-mock.dark .fca-kpi.alert{background:#241614}
.fca-kpi.alert .v{color:#e08b7c}
.fca-kpi.alert .s{color:#e08b7c;font-weight:600}

.fca-rows{display:flex;flex-direction:column}
.fca-row{display:grid;grid-template-columns:1fr auto;gap:4px 18px;align-items:baseline;padding:14px 0;border-bottom:1px solid var(--ligne)}
.fca-row .n{font-size:15px;color:var(--vert-deep);font-weight:500}
.fca-row .c{grid-column:1;font-family:var(--mono);font-size:11.5px;color:var(--texte-mute);letter-spacing:.02em}
.fca-row .a{grid-row:1 / span 2;grid-column:2;font-family:var(--mono);font-size:15px;color:var(--vert-deep);font-variant-numeric:tabular-nums;align-self:center}
.fca-total{display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding-top:18px}
.fca-total .l{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--texte-mute)}
.fca-total .v{font-family:var(--serif);font-size:32px;color:var(--vert-deep);font-variant-numeric:tabular-nums}

.fca-split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,72px);align-items:center;margin-top:clamp(40px,5vw,64px)}
@media(max-width:900px){.fca-split{grid-template-columns:1fr;gap:40px}}
.fca-prose{display:flex;flex-direction:column;gap:18px;max-width:52ch}
.fca-prose h3{font-family:var(--serif);font-weight:400;font-size:clamp(28px,3.4vw,42px);line-height:1.1;color:var(--vert-deep)}
.bg-charbon .fca-prose h3{color:var(--ivoire)}
.fca-prose p{color:var(--texte-mute);font-size:16.5px;line-height:1.65}
.bg-charbon .fca-prose p{color:rgba(245,241,232,.68)}
.fca-prose strong{color:var(--vert-deep);font-weight:600}
.bg-charbon .fca-prose strong{color:var(--ivoire)}

.fca-phone{max-width:320px;margin:0 auto;border-radius:26px;overflow:hidden;background:#12201f;border:1px solid rgba(245,241,232,.16);box-shadow:0 30px 70px -28px rgba(0,0,0,.65)}
.fca-phone .top{padding:10px 0;text-align:center;font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:rgba(245,241,232,.45);text-transform:uppercase;border-bottom:1px solid rgba(245,241,232,.1)}
.fca-mission{padding:20px;display:flex;flex-direction:column;gap:13px}
.fca-mission .when{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--or)}
.fca-mission .name{font-family:var(--serif);font-size:24px;color:var(--ivoire);line-height:1.15}
.fca-mission .addr{font-size:13px;color:rgba(245,241,232,.5)}
.fca-chips{display:flex;flex-wrap:wrap;gap:8px}
.fca-chip{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;padding:5px 10px;border:1px solid rgba(245,241,232,.2);color:rgba(245,241,232,.72)}
.fca-chip.done{border-color:rgba(201,168,104,.5);color:var(--or)}
.fca-shot{display:flex;gap:8px}
.fca-shot span{flex:1;aspect-ratio:4/3;max-width:100%;background:linear-gradient(135deg,rgba(245,241,232,.13),rgba(245,241,232,.04));border:1px solid rgba(245,241,232,.12)}
.fca-stamp{font-family:var(--mono);font-size:10px;color:rgba(245,241,232,.42);letter-spacing:.06em}
.fca-cta-mock{margin-top:4px;text-align:center;padding:12px;background:var(--or);color:var(--vert-deep);font-size:13px;font-weight:600;letter-spacing:.04em}

.fca-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(258px,1fr));gap:1px;background:var(--ligne);border:1px solid var(--ligne);margin-top:clamp(40px,5vw,64px)}
.fca-cell{background:var(--ivoire);padding:30px 28px;display:flex;flex-direction:column;gap:12px}
.fca-cell .h{font-family:var(--serif);font-size:24px;color:var(--vert-deep);line-height:1.15}
.fca-cell ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}
.fca-cell li{font-size:14.5px;color:var(--texte-mute);padding-left:16px;position:relative;line-height:1.5}
.fca-cell li:before{content:"";position:absolute;left:0;top:10px;width:7px;height:1px;background:var(--or)}

.fca-plus{display:grid;grid-template-columns:repeat(auto-fit,minmax(278px,1fr));gap:clamp(28px,3.5vw,52px);margin-top:clamp(40px,5vw,64px)}
.fca-plus article{display:flex;flex-direction:column;gap:12px}
.fca-plus .num{font-family:var(--mono);font-size:11px;letter-spacing:.2em;color:var(--or)}
.fca-plus h3{font-family:var(--serif);font-weight:400;font-size:27px;line-height:1.15;color:var(--vert-deep)}
.fca-plus p{color:var(--texte-mute);font-size:15.5px;line-height:1.65}

.fca-offers{display:grid;grid-template-columns:repeat(auto-fit,minmax(272px,1fr));gap:clamp(24px,3vw,40px);margin-top:clamp(40px,5vw,64px)}

.fca-offer{border:1px solid var(--ligne);padding:clamp(28px,3.5vw,46px);display:flex;flex-direction:column;gap:18px;background:var(--ivoire)}
.fca-offer.gold{border-color:var(--or);background:var(--ivoire-2)}
.fca-offer .tag{font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--texte-mute)}
.fca-offer.gold .tag{color:var(--or)}
.fca-offer h3{font-family:var(--serif);font-weight:400;font-size:clamp(28px,3vw,36px);line-height:1.1;color:var(--vert-deep)}
.fca-offer p{color:var(--texte-mute);font-size:15.5px;line-height:1.65}
.fca-offer .price{font-family:var(--serif);font-size:22px;color:var(--vert-deep)}
.fca-offer .price em{font-style:italic;color:var(--or)}
.fca-offer .go{margin-top:auto;padding-top:8px}

.fca-note{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--texte-mute);margin-top:22px}
.bg-charbon .fca-note{color:rgba(245,241,232,.45)}
`;

export default function ApplicationPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ------------------------------------------------------------ HERO */}
      <section className="bg-charbon">
        <div className="container">
          <p className="eyebrow">
            Propriétaires &amp; conciergeries <span className="or-mark">—</span> L&apos;application
          </p>
          <h1>
            Le logiciel qui fait tourner
            <br />
            notre conciergerie.
            <br />
            <em>Ouvert à la vôtre.</em>
          </h1>
          <p className="lede">
            Nous ne l&apos;avons pas acheté, nous l&apos;avons construit — pour nos propres logements, nos
            prestataires et nos deux laveries. Missions, linge, incidents, facturation : tout au même
            endroit, et tout se calcule tout seul.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="https://fullconciergerie.fr/login">
              Créer mon compte <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost-light" href="#dedans">
              Ce qu&apos;il y a dedans <span className="arrow">↓</span>
            </a>
          </div>
          <p className="fca-note">
            Sans abonnement · Première mission offerte · Livret IA : premier mois offert
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- PREUVE */}
      <section className="trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="gold-rule" />
              <span className="trust-num">40+</span>
              <span className="trust-label">logements pilotés chaque jour</span>
            </div>
            <div className="trust-item center">
              <span className="gold-rule" />
              <span className="trust-num">22</span>
              <span className="trust-label">prestataires actifs sur le terrain</span>
            </div>
            <div className="trust-item end">
              <span className="gold-rule" />
              <span className="trust-num">1 000+</span>
              <span className="trust-label">commentaires voyageurs derrière la méthode</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- 01 FACTURATION */}
      <section className="bg-ivoire">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              01 <span className="or-mark">—</span> Facturation
            </p>
            <h2 className="title">
              Le 1er du mois ne vous prendra <em>plus la soirée.</em>
            </h2>
            <p className="lede">
              Le linge et les réassorts se calculent en temps réel, logement par logement, à partir des
              check-outs réels.
            </p>
            <span className="gold-rule" />
          </div>

          <div className="fca-split">
            <div className="fca-mock">
              <div className="fca-bar">
                <span className="fca-dot" />
                <span className="fca-dot" />
                <span className="fca-dot" />
                <span className="fca-bar-t">Facturation mensuelle — septembre</span>
              </div>
              <div className="fca-body">
                <div className="fca-rows">
                  <div className="fca-row">
                    <span className="n">Villa Belvédère</span>
                    <span className="a">484,00 €</span>
                    <span className="c">11 lits × 4 check-outs</span>
                  </div>
                  <div className="fca-row">
                    <span className="n">Le Clos des Tanneurs</span>
                    <span className="a">315,00 €</span>
                    <span className="c">3 lits × 5 check-outs + réassorts</span>
                  </div>
                  <div className="fca-row">
                    <span className="n">Studio Pont-Neuf</span>
                    <span className="a">216,00 €</span>
                    <span className="c">1 lit × 6 check-outs + réassorts</span>
                  </div>
                </div>
                <div className="fca-total">
                  <span className="l">Total à facturer</span>
                  <span className="v">1 015,00 €</span>
                </div>
              </div>
            </div>

            <div className="fca-prose">
              <h3>Chaque drap compté, sans que personne ne compte.</h3>
              <p>
                <strong>La facture du propriétaire est prête avant que vous y pensiez.</strong> Vous
                n&apos;ouvrez plus un tableur le 1er du mois pour recompter des housses en vous demandant
                s&apos;il ne manque pas une rotation.
              </p>
              <p>
                C&apos;est la première chose que nous avons supprimée chez nous, parce que c&apos;était la
                plus pénible — et celle où l&apos;on perdait de l&apos;argent sans le voir.
              </p>
              <p>
                Le détail étant visible ligne par ligne, la conversation avec le propriétaire change de
                nature : il ne conteste plus un total, il lit un décompte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ 02 PILOTAGE */}
      <section className="bg-sable">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              02 <span className="or-mark">—</span> Pilotage
            </p>
            <h2 className="title">
              Un tableau de bord qui vous dit <em>ce qui va casser demain.</em>
            </h2>
            <span className="gold-rule" />
          </div>

          <div className="fca-split">
            <div className="fca-prose">
              <h3>Un tableur range. Celui-ci alerte.</h3>
              <p>
                À l&apos;ouverture, vous ne voyez pas des données : vous voyez{' '}
                <strong>ce qui n&apos;est pas réglé</strong>. Les missions du jour, celles qui restent, et
                surtout celles qui n&apos;ont encore personne en face.
              </p>
              <p>
                C&apos;est la différence que tout le monde sent sans savoir la nommer quand on demande
                pourquoi un tableur ne suffit plus. Un tableur attend qu&apos;on lui pose la bonne question.
                Une rotation sans prestataire à J-1, elle, ne se pose pas : elle se règle.
              </p>
              <p>
                Le planning se synchronise avec votre <strong>channel manager</strong> : les arrivées et les départs
                remontent seuls, et les missions se créent avec eux.
              </p>
            </div>

            <div className="fca-mock dark">
              <div className="fca-bar">
                <span className="fca-dot" />
                <span className="fca-dot" />
                <span className="fca-dot" />
                <span className="fca-bar-t">Tableau de bord — aujourd&apos;hui</span>
              </div>
              <div className="fca-kpis">
                <div className="fca-kpi">
                  <span className="l">Aujourd&apos;hui</span>
                  <span className="v">11</span>
                  <span className="s">faites · 0 restante</span>
                </div>
                <div className="fca-kpi alert">
                  <span className="l">À réassigner</span>
                  <span className="v">7</span>
                  <span className="s">sans prestataire</span>
                </div>
                <div className="fca-kpi">
                  <span className="l">Cette semaine</span>
                  <span className="v">33</span>
                  <span className="s">à faire sous 7 jours</span>
                </div>
                <div className="fca-kpi">
                  <span className="l">Prestataires</span>
                  <span className="v">22</span>
                  <span className="s">actifs ce mois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- 03 APP TERRAIN */}
      <section className="bg-charbon">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              03 <span className="or-mark">—</span> Terrain
            </p>
            <h2 className="title">
              Vos prestataires ont <em>leur propre application.</em>
            </h2>
            <span className="gold-rule" />
          </div>

          <div className="fca-split">
            <div className="fca-phone">
              <div className="top">Full Conciergerie · Prestataire</div>
              <div className="fca-mission">
                <span className="when">Demain · 11h00 — Check-out</span>
                <span className="name">Le Clos des Tanneurs</span>
                <span className="addr">Nevers · 3 chambres · 5 voyageurs</span>
                <div className="fca-chips">
                  <span className="fca-chip done">✓ Ménage</span>
                  <span className="fca-chip done">✓ Linge changé</span>
                  <span className="fca-chip">Réassort café</span>
                </div>
                <div className="fca-shot">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="fca-stamp">3 photos · 14 sept. 2026, 12:41</span>
                <div className="fca-cta-mock">Terminer la mission</div>
              </div>
            </div>

            <div className="fca-prose">
              <h3>Le bureau et le terrain, deux outils, une seule vérité.</h3>
              <p>
                Le prestataire reçoit ses missions, coche ce qui est fait, signale ce qui manque et
                photographie ce qu&apos;il trouve. Ni tableur à remplir, ni groupe de messagerie à
                dépouiller le soir.
              </p>
              <p>
                Chaque passage laisse un <strong>rapport horodaté avec photos</strong>. Le jour où un
                voyageur conteste un état des lieux ou une dégradation, vous ne discutez pas de mémoire :
                vous ouvrez le rapport. C&apos;est daté, c&apos;est illustré, et ça clôt la conversation.
              </p>
              <p>
                Six métiers sont gérés — ménage, linge, bricolage, espaces verts, débarras, check-in — et
                chaque prestataire ne voit que ce qui le concerne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- 04 DEDANS */}
      <section className="bg-ivoire" id="dedans">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              04 <span className="or-mark">—</span> Le contenu
            </p>
            <h2 className="title">
              Ce qu&apos;il y a <em>dedans.</em>
            </h2>
            <p className="lede">
              Cinq espaces, construits dans l&apos;ordre où les problèmes sont apparus chez nous.
            </p>
            <span className="gold-rule" />
          </div>

          <div className="fca-grid">
            <div className="fca-cell">
              <span className="h">Terrain</span>
              <ul>
                <li>Logements et fiches détaillées</li>
                <li>Planning et missions</li>
                <li>Synchronisation channel manager</li>
                <li>Messagerie</li>
                <li>Incidents</li>
              </ul>
            </div>
            <div className="fca-cell">
              <span className="h">Équipe</span>
              <ul>
                <li>Prestataires et spécialités</li>
                <li>Rémunérations et commissions</li>
                <li>Candidatures</li>
                <li>Vérification d&apos;identité</li>
                <li>Invitation par lien sécurisé</li>
              </ul>
            </div>
            <div className="fca-cell">
              <span className="h">Propriétaires</span>
              <ul>
                <li>Fiches propriétaires</li>
                <li>Facturation mensuelle automatique</li>
                <li>Suivi des demandes entrantes</li>
                <li>Comptabilité</li>
              </ul>
            </div>
            <div className="fca-cell">
              <span className="h">Logistique</span>
              <ul>
                <li>Packs linge par logement</li>
                <li>Suivi du linge en circulation</li>
                <li>Courses et réassorts</li>
                <li>Blanchisserie</li>
              </ul>
            </div>
            <div className="fca-cell">
              <span className="h">Matériel</span>
              <ul>
                <li>Inventaire par logement</li>
                <li>Ce qui manque, signalé du terrain</li>
                <li>Ce qui est à remplacer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ 05 LES PLUS */}
      <section className="bg-sable">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              05 <span className="or-mark">—</span> Ce qui fait la différence
            </p>
            <h2 className="title">
              Quatre choses absentes <em>des logiciels génériques.</em>
            </h2>
            <p className="lede">
              Elles ne viennent pas d&apos;un cahier des charges, mais de journées où quelque chose nous a
              manqué.
            </p>
            <span className="gold-rule" />
          </div>

          <div className="fca-plus">
            <article>
              <span className="num">01</span>
              <h3>Le livret d&apos;accueil numérique, avec assistant IA</h3>
              <p>
                Le voyageur pose sa question à n&apos;importe quelle heure — le code du portail, le
                fonctionnement du chauffage, le jour des poubelles — et l&apos;assistant répond à partir du
                livret de ce logement précis. Vous dormez, l&apos;accueil continue. C&apos;est la seule brique payante de l&apos;outil, et le premier mois est offert.
              </p>
            </article>
            <article>
              <span className="num">02</span>
              <h3>Des partenaires locaux à présenter aux voyageurs</h3>
              <p>
                Commerçants et artisans de la région déposent leurs <strong>coupons de réduction</strong>
                dans le livret. Le voyageur arrive quelque part, pas seulement dans un logement : il repart
                avec le sentiment d&apos;avoir été reçu, le commerçant gagne un client, et une partie du
                chiffre revient.
              </p>
            </article>
            <article>
              <span className="num">03</span>
              <h3>Le dépannage de réassort à l&apos;unité</h3>
              <p>
                Il manque une housse, trois capsules, un rouleau de papier un dimanche à 18 h. Vous
                commandez la pièce, pas le carton de cinquante. Le prestataire la signale depuis le terrain,
                elle part avec le pack du logement.
              </p>
            </article>
            <article>
              <span className="num">04</span>
              <h3>Une blanchisserie derrière l&apos;outil</h3>
              <p>
                Nos deux laveries à Nevers traitent le linge de nos logements, et leur logistique vit dans
                l&apos;application : ce qui part, ce qui revient, ce qui circule. Le linge cesse d&apos;être
                le point aveugle de votre marge.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- 06 COMMENCER */}
      <section className="bg-ivoire">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              06 <span className="or-mark">—</span> Commencer
            </p>
            <h2 className="title">
              Trois façons <em>d&apos;entrer.</em>
            </h2>
            <span className="gold-rule" />
          </div>

          <div className="fca-offers">
            <div className="fca-offer gold">
              <span className="tag">Vous êtes propriétaire</span>
              <h3>Votre première mission est offerte.</h3>
              <p>
                Vous créez votre compte, vous ajoutez votre logement, et nous prenons en charge la première
                rotation — ménage et linge compris. Vous jugez sur pièce, pas sur une démonstration.
              </p>
              <p>
                Ensuite, l&apos;outil reste gratuit : seul un léger pourcentage s&apos;ajoute aux missions que
                vous lancez.
              </p>
              <p className="price">
                Première mission <em>offerte</em>
              </p>
              <div className="go">
                <a className="btn btn-gold" href="https://fullconciergerie.fr/login">
                  Créer mon compte <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="fca-offer">
              <span className="tag">Vous êtes une conciergerie</span>
              <h3>Sans abonnement. Vous payez à l&apos;usage.</h3>
              <p>
                Vos logements, vos prestataires, vos propriétaires, le planning, la facturation : rien à
                installer, aucun forfait mensuel. Vous ne réglez qu&apos;un léger pourcentage sur les missions
                que vous lancez — un mois creux ne vous coûte rien.
              </p>
              <p>
                Seul le livret d&apos;accueil à assistance IA est en option, et le premier mois est offert.
              </p>
              <p className="price">
                Sans <em>abonnement</em>
              </p>
              <div className="go">
                <a className="btn btn-gold-outline" href="https://fullconciergerie.fr/login">
                  Ouvrir mon espace <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="fca-offer">
              <span className="tag">Vous êtes prestataire ou artisan</span>
              <h3>Vous ne payez rien. Jamais.</h3>
              <p>
                Vous recevez vos missions sur votre téléphone, vous cochez ce qui est fait, vous
                photographiez, vous validez. Vos rémunérations sont suivies dans l&apos;outil, et réglées par
                la conciergerie ou le propriétaire.
              </p>
              <p>
                Six métiers : ménage, linge, bricolage, espaces verts, débarras, check-in. Vous ne voyez que
                ce qui vous concerne.
              </p>
              <p className="price">
                Toujours <em>gratuit</em>
              </p>
              <div className="go">
                <Link className="btn btn-gold-outline" href="/devenir-prestataire">
                  Proposer mes services <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="fca-note">
            Vous préférez en parler d&apos;abord ? 03 76 15 02 29 — du lundi au samedi
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- CTA FINAL */}
      <section className="final-cta">
        <div className="container">
          <p className="eyebrow">
            Full Conciergerie <span className="or-mark">—</span> Nevers
          </p>
          <h2>
            Un outil écrit par ceux
            <br />
            <em>qui font le ménage.</em>
          </h2>
          <p>
            Nous n&apos;avons pas conçu ce logiciel pour le vendre. Nous l&apos;avons conçu parce que nous en
            avions besoin, et il tient parce qu&apos;il tourne tous les jours chez nous. Si votre
            conciergerie ressemble à la nôtre, il vous ira.
          </p>
          <span className="gold-rule" />
          <div className="actions">
            <a className="btn btn-gold" href="https://fullconciergerie.fr/login">
              Créer mon compte <span className="arrow">→</span>
            </a>
            <Link className="btn btn-ghost-light" href="/estimation">
              Estimer mes revenus <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost-light" href="/lancer-une-conciergerie">
              Lancer ma conciergerie <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
