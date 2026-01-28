# Nélosis

Site web officiel de l'association **Nélosis** (anciennement Lasso Nélosis), dédiée à l'innovation écologique étudiante.

Ce projet met en avant les initiatives écologiques portées par les étudiants, présente les différentes antennes de l'association à travers la France, et permet de contacter l'équipe.

## 🚀 Fonctionnalités

- **Vitrine de Projets** : Présentation détaillée des projets innovants (Veget'all, Bouée Végétale, Brique Mycélium, etc.).
- **Carte Interactive** : Visualisation des antennes de l'association (Perpignan, Montpellier, Lyon, Toulouse).
- **Équipe** : Présentation des membres du bureau et des responsables.
- **Blog / Actualités** : (À venir) Suivi des événements et avancées.
- **Contact** : Formulaire de contact et liens vers les réseaux sociaux.

## 🛠️ Technologies

Ce site est construit avec :

- **[Astro](https://astro.build/)** : Framework web rapide et performant.
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour le design.
- **Leaflet** : Pour la carte interactive des antennes.
- **JSON** : Gestion des données (projets, équipe, antennes) via des fichiers JSON locaux pour une maintenance facile.

## 🧞 Commandes

Toutes les commandes s'exécutent depuis la racine du projet :

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances du projet |
| `npm run dev` | Lance le serveur de développement local sur `localhost:4321` |
| `npm run build` | Compile le site pour la production dans le dossier `./dist/` |
| `npm run preview` | Prévisualise la version de production localement |

## 📁 Structure du Projet

```text
/
├── public/             # Assets statiques (images, fonts, etc.)
├── src/
│   ├── components/     # Composants réutilisables (Header, Footer, ProjectCard...)
│   ├── data/           # Données JSON (projects.json, team.json, antennes.json)
│   ├── layouts/        # Layouts principaux (BaseLayout.astro)
│   └── pages/          # Pages et routes du site
└── package.json
```

## 📝 Contribution

1.  Clonez le dépôt.
2.  Installez les dépendances (`npm install`).
3.  Lancez le serveur de développement (`npm run dev`).
4.  Effectuez vos modifications.
