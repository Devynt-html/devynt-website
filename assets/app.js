/* ===== Devynt — logique partagée ===== */

const SITE = {
  name: "Devynt",
  founder: "Kilian",
  tagline: "Des sites web à la hauteur de votre savoir-faire.",
  description: "Devynt accompagne les professionnels et indépendants dans la création de sites modernes, clairs et orientés résultats.",
  email: "contact.devynt@gmail.com",
  phone: "",
  location: "France",
  siteUrl: "https://devynt.fr",
  // Envoi du formulaire via FormSubmit.co (aucune inscription).
  // Le 1er envoi déclenche un e-mail d'activation à valider une seule fois.
  formEndpoint: "https://formsubmit.co/ajax/contact.devynt@gmail.com",
  topbar: "Création de sites web pour professionnels & indépendants",
  social: {
    instagram: "",
    linkedin: "https://www.linkedin.com/in/kilian-devynt",
  },
};

const NAV = [
  { href: "index.html", label: "Accueil", page: "home" },
  { href: "services.html", label: "Services", page: "services" },
  { href: "realisations.html", label: "Réalisations", page: "realisations" },
  { href: "a-propos.html", label: "À propos", page: "a-propos" },
  { href: "contact.html", label: "Contact", page: "contact" },
];

const SERVICES = [
  {
    icon: "◆",
    title: "Site vitrine",
    text: "Une présentation claire de votre activité : services, valeurs, réalisations et contact — sur mobile, tablette et ordinateur.",
  },
  {
    icon: "◇",
    title: "Boutique en ligne",
    text: "Catalogue produits, panier, tunnel de commande et notifications — pensés pour convertir sans complexité inutile.",
  },
  {
    icon: "○",
    title: "Refonte & modernisation",
    text: "Vous avez déjà un site ? On le repense pour mieux refléter votre image, améliorer l'expérience et rassurer vos clients.",
  },
  {
    icon: "▣",
    title: "Outils sur mesure",
    text: "Formulaires, configurateurs, espaces admin, suivi de commandes… Des fonctionnalités adaptées à votre métier.",
  },
  {
    icon: "◎",
    title: "Identité & design",
    text: "Charte visuelle cohérente, typographies soignées, mise en page premium — fidèle à votre univers.",
  },
  {
    icon: "⬡",
    title: "Mise en ligne & démo",
    text: "Hébergement, déploiement GitHub Pages ou domaine client, et maquettes interactives pour valider avant production.",
  },
];

const PROCESS = [
  { step: "01", title: "Échange", text: "On comprend votre activité, vos objectifs et ce que vous voulez mettre en avant." },
  { step: "02", title: "Proposition", text: "Maquette ou démo concrète pour visualiser le résultat avant de s'engager." },
  { step: "03", title: "Création", text: "Design, développement et intégration — avec vos retours à chaque étape." },
  { step: "04", title: "Mise en ligne", text: "Déploiement, tests finaux et remise des accès. Vous êtes prêt à accueillir vos clients." },
];

const PROJECTS = [
  {
    name: "CellR UP!",
    sector: "Automobile · Detailing · Drôme",
    desc: "Refonte complète d'un site multi-pages pour un atelier de customisation automobile : présentation des prestations (covering, vitres teintées, lignes d'échappement, detailing et protection céramique) et boutique de 13 produits d'entretien avec panier persistant. Le site intègre de vrais outils métier : un personnalisateur de stickers Instagram interactif (pseudo, couleur, taille avec aperçu en direct), un tunnel de commande complet avec paiement simulé et calcul de livraison, des e-mails automatiques de confirmation envoyés au client et au commerçant, une page de confirmation dédiée, et un espace d'administration privé pour suivre les commandes et notifier les clients à chaque étape (préparation, expédition, livraison).",
    tags: ["Vitrine", "E-commerce", "Personnalisateur", "E-mails auto", "Espace admin", "Sur mesure"],
    demo: "https://devynt-html.github.io/cellr-up-demo/",
  },
  {
    name: "AMR Piscines",
    sector: "Piscines · Maçonnerie · Paysagisme · Drôme",
    desc: "Site complet pour un constructeur de piscines et paysagiste, avec de véritables outils métier : prise de rendez-vous en ligne (visite technique sans échanges téléphoniques), devis intelligent qui s'adapte au métier (piscine, terrassement, clôture…) avec estimation immédiate, galerie classée par prestation et suivi de chantier en ligne, e-mails automatiques en temps réel à chaque demande, et un panneau d'administration privé pour gérer demandes, réalisations et disponibilités en toute autonomie.",
    tags: ["Vitrine", "Prise de RDV", "Devis intelligent", "Suivi de chantier", "E-mails auto", "Espace admin"],
    demo: "https://devynt-html.github.io/amr-piscines-app/",
  },
];

const VALUES = [
  { title: "Concret", text: "Pas de jargon inutile — des sites qui servent votre activité au quotidien." },
  { title: "Humain", text: "Un interlocuteur unique, des échanges simples et une vraie écoute de vos besoins." },
  { title: "Soigné", text: "Chaque détail compte : design, lisibilité, rapidité et expérience mobile." },
];

const PAGE = document.body.dataset.page || "home";
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function headerHTML() {
  const links = NAV.map((n) => `<a href="${n.href}"${n.page === PAGE ? ' class="is-active"' : ""}>${n.label}</a>`).join("");
  return `
  <div class="topbar"><span>${esc(SITE.topbar)}</span></div>
  <header class="header" id="header">
    <div class="container nav">
      <a href="index.html" class="brand" aria-label="Devynt accueil">
        <img src="assets/brand/logo.png" alt="Logo Devynt" class="brand__logo" />
      </a>
      <nav class="nav__links" id="navLinks">${links}</nav>
      <div class="nav__actions">
        <a href="contact.html" class="btn btn--primary btn--sm">Devis gratuit</a>
        <button class="nav__toggle" id="navToggle" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;
}

function footerHTML() {
  const social = [
    SITE.social.linkedin && `<a href="${esc(SITE.social.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    SITE.social.instagram && `<a href="${esc(SITE.social.instagram)}" target="_blank" rel="noopener">Instagram</a>`,
  ].filter(Boolean).join(" · ");

  return `
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <p class="footer__brand">${esc(SITE.name)}<span class="brand__dot">.</span></p>
        <p class="footer__text">${esc(SITE.tagline)}</p>
        <p class="footer__text footer__text--dim">Création de sites web par ${esc(SITE.founder)}.</p>
      </div>
      <div>
        <p class="footer__label">Navigation</p>
        ${NAV.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join("")}
      </div>
      <div>
        <p class="footer__label">Contact</p>
        <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
        ${SITE.phone ? `<a href="tel:${esc(SITE.phone.replace(/\s/g, ""))}">${esc(SITE.phone)}</a>` : ""}
        <span>${esc(SITE.location)}</span>
        ${social ? `<p class="footer__social">${social}</p>` : ""}
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© ${new Date().getFullYear()} ${esc(SITE.name)} — Tous droits réservés</span>
      <span class="footer__legal">
        <a href="mentions-legales.html">Mentions légales</a>
        <a href="confidentialite.html">Politique de confidentialité</a>
      </span>
    </div>
  </footer>`;
}

function servicesCardsHTML(compact) {
  return SERVICES.map((s) => `
    <article class="card reveal${compact ? " card--compact" : ""}">
      <span class="card__icon" aria-hidden="true">${s.icon}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </article>`).join("");
}

function processHTML() {
  return PROCESS.map((p) => `
    <article class="step reveal">
      <span class="step__num">${esc(p.step)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
    </article>`).join("");
}

function projectsHTML() {
  return PROJECTS.map((p) => `
    <article class="project reveal">
      <div class="project__head">
        <div>
          <p class="project__sector">${esc(p.sector)}</p>
          <h3>${esc(p.name)}</h3>
        </div>
        <div class="project__tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
      <p class="project__desc">${esc(p.desc)}</p>
      <div class="project__links">
        ${p.demo ? `<a href="${esc(p.demo)}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">Voir la démo</a>` : ""}
      </div>
    </article>`).join("");
}

function valuesHTML() {
  return VALUES.map((v) => `
    <article class="value reveal">
      <h3>${esc(v.title)}</h3>
      <p>${esc(v.text)}</p>
    </article>`).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const header = document.getElementById("header");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    }));
  }
  if (header) {
    window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });
  }
}

function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  els.forEach((el) => {
    const sibs = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
    const idx = sibs.indexOf(el);
    if (idx > 0) el.style.transitionDelay = (idx * 90) + "ms";
  });

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("contactFeedback");
  if (!form) return;

  const showFeedback = (msg, ok) => {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.hidden = false;
    feedback.classList.toggle("form__feedback--ok", !!ok);
    feedback.classList.toggle("form__feedback--error", !ok);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!SITE.formEndpoint) {
      const subject = encodeURIComponent(`Demande Devynt — ${data.name}`);
      const body = encodeURIComponent(
        `Nom : ${data.name}\nE-mail : ${data.email}\nTéléphone : ${data.phone || "—"}\nProjet : ${data.project || "—"}\n\nMessage :\n${data.message}`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      showFeedback("Votre client mail va s'ouvrir. Envoyez le message pour finaliser votre demande.", true);
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const btnLabel = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Envoi en cours…"; }
    showFeedback("Envoi de votre message…", true);

    const payload = {
      _subject: `Demande Devynt — ${data.name}`,
      _template: "table",
      name: data.name,
      email: data.email,
      phone: data.phone || "—",
      project: data.project || "—",
      message: data.message,
    };

    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && (json.success === "true" || json.success === true)) {
        form.reset();
        showFeedback("Merci ! Votre message a bien été envoyé. Je vous réponds sous 48 h.", true);
      } else {
        throw new Error(json.message || "Erreur d'envoi");
      }
    } catch (err) {
      showFeedback("Une erreur est survenue. Réessayez ou écrivez-moi directement à " + SITE.email + ".", false);
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
    }
  });
}

function inject(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

(function initSplash() {
  const el = document.getElementById("splash");
  if (!el) return;

  let seen = false;
  try { seen = !!sessionStorage.getItem("devynt_splash"); } catch (e) {}
  if (seen) { el.remove(); return; }
  try { sessionStorage.setItem("devynt_splash", "1"); } catch (e) {}

  document.documentElement.classList.add("splash-lock");
  const done = () => {
    el.classList.add("hide");
    document.documentElement.classList.remove("splash-lock");
    setTimeout(() => el.remove(), 750);
  };
  window.addEventListener("load", () => setTimeout(done, 1700));
  setTimeout(done, 4200); // filet de sécurité
})();

function boot() {
  inject("site-header", headerHTML());
  inject("site-footer", footerHTML());
  inject("servicesGrid", servicesCardsHTML());
  inject("servicesGridCompact", servicesCardsHTML(true));
  inject("processGrid", processHTML());
  inject("projectsGrid", projectsHTML());
  inject("valuesGrid", valuesHTML());
  initNav();
  initReveal();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", boot);
