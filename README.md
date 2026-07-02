# Devynt — Site vitrine

Site officiel de **Devynt**, société de création web fondée par Kilian.

## Pages

- **Accueil** — présentation, services, méthode, portfolio
- **Services** — offres détaillées
- **Réalisations** — projets (CellR UP! etc.)
- **À propos** — Kilian, vision, valeurs
- **Contact** — formulaire de demande de devis

## Lancer en local

```powershell
cd C:\Users\Utilisateur\Projects\devynt-website
.\serve.ps1
```

→ **http://localhost:5502**

## Personnaliser

Tout est centralisé dans **`assets/app.js`** :
- `SITE` — nom, e-mail, LinkedIn, etc.
- `SERVICES`, `PROJECTS`, `PROCESS`, `VALUES`

Couleurs dans **`styles.css`** (`:root`).

## GitHub Pages

1. Créer un dépôt `devynt-website` sur GitHub
2. Push sur `main`
3. **Settings → Pages → Source : GitHub Actions**
4. URL : `https://devynt-html.github.io/devynt-website/`
