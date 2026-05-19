# 🕰️ TimeTravel Agency — Webapp Interactive

> Webapp moderne pour une agence fictive de voyage temporel de luxe, développée dans le cadre du projet supervisé IA M1/M2.

**Équipe** : [Prénom Nom 1], [Prénom Nom 2], [Prénom Nom 3], [Prénom Nom 4]  
**Démo en ligne** : [URL Vercel]

---

## 🎯 Concept

TimeTravel Agency propose 3 destinations temporelles d'exception :

| Destination | Époque | Tarif |
|---|---|---|
| Paris 1889 | Belle Époque | À partir de 12 500 € / pers. |
| Crétacé −65M | Préhistoire | À partir de 24 900 € / pers. |
| Florence 1504 | Renaissance | À partir de 18 700 € / pers. |

La webapp offre une expérience immersive avec galerie de destinations et concierge IA conversationnel.

---

## 🛠️ Stack technique

- **Frontend** : React 18 + Vite + TypeScript
- **Styling** : Tailwind CSS
- **Animations** : CSS Tailwind + Intersection Observer API (hook custom)
- **Icônes** : Lucide React
- **IA conversationnelle** : Mistral AI API (modèle `mistral-small-latest`)
- **Hébergement images** : Cloudinary
- **Déploiement** : Vercel

---

## ✨ Features

- ✅ Landing page responsive avec hero immersif
- ✅ Galerie interactive des 3 destinations temporelles (cartes + modales détaillées)
- ✅ Chatbot IA « Concierge Temporel » intégré (Mistral AI)
- ✅ Animations fluides au scroll via Intersection Observer
- ✅ Design premium dark mode avec accents dorés (#D4AF37)
- ✅ Mobile-first et 100% responsive
- ✅ Section témoignages, contact et footer complets

---

## 🤖 Outils IA utilisés (transparence)

| Usage | Outil | Modèle |
|---|---|---|
| Génération de code | Bolt.new | Claude Sonnet 4.5 |
| Itérations design | [Cursor / v0.dev] | — |
| Chatbot conversationnel | Mistral AI API | `mistral-small-latest` |
| Visuels destinations (Projet 1) | [Midjourney / DALL-E / autre] | — |
| Vidéos d'ambiance (Projet 1) | [Runway / Sora / autre] | — |

---

## 🚀 Installation locale

```bash
git clone [URL_REPO]
cd TimeTravelAgency
npm install
cp .env.example .env
# Ajouter votre clé Mistral dans .env
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

---

## 🔑 Variables d'environnement

Créez un fichier `.env` à la racine (voir `.env.example`) :

```env
VITE_MISTRAL_API_KEY=your_key_here
```

Obtenez une clé gratuite sur https://console.mistral.ai

---

## 📂 Structure du projet

```
src/
├── components/
│   ├── Header.tsx          # Navigation sticky
│   ├── Hero.tsx            # Section hero avec CTA
│   ├── Agency.tsx          # Présentation de l'agence
│   ├── Destinations.tsx    # Galerie des 3 destinations + modales
│   ├── WhyUs.tsx           # Arguments de vente
│   ├── Testimonials.tsx    # Témoignages clients
│   ├── Contact.tsx         # Formulaire de contact
│   ├── Footer.tsx          # Pied de page
│   └── ChatWidget.tsx      # Concierge IA (Mistral)
└── hooks/
    └── useIntersectionObserver.ts  # Hook animations au scroll
```

---

## 📝 Prompts clés utilisés

Voir le fichier [`PROMPTS.md`](./PROMPTS.md) pour le détail des prompts utilisés à chaque étape de la génération.

---

## 🎨 Crédits

- Visuels des destinations : générés en Session 1 du projet (voir Session 1)
- Images hébergées sur Cloudinary
- Polices : Playfair Display & Inter (Google Fonts)
- Icônes : Lucide React (MIT)
- Inspiration design : Awwwards, Dribbble

---

## 🤔 Réflexion sur le processus

[2-3 phrases sur ce qui a bien fonctionné, ce qui a été difficile, et ce que vous changeriez la prochaine fois. Par exemple : la génération initiale avec Bolt.new a été très efficace pour poser la structure globale, mais les itérations fines sur l'UI ont nécessité beaucoup de prompts correctifs. La gestion de la clé API côté client reste un point à améliorer pour une mise en production réelle.]

---

## 📜 Licence

Projet pédagogique — M1/M2 Digital & IA, 2026. Usage non commercial.
