# 🕰️ TimeTravel Agency — Webapp Interactive

> Webapp moderne pour une agence fictive de voyage temporel de luxe, développée dans le cadre du projet supervisé IA M1/M2.

**Équipe** : Nathan OGER

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
| Itérations design | Cursor | — |
| Chatbot conversationnel | Mistral AI API | `mistral-small-latest` |
| Visuels destinations (Projet 1) | Midjourney | — |
| Vidéos d'ambiance (Projet 1) | Runway | — |

---

## 🚀 Installation locale

```bash
git clone https://github.com/Miniluchi/TimeTravelAgency
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

La génération initiale avec Bolt.new a été très efficace pour poser la structure globale et le design system en un seul prompt. Les itérations les plus longues ont porté sur l'intégration du chatbot Mistral et l'adaptation responsive du widget sur mobile. Pour la prochaine fois, je commencerais par définir le design system (couleurs, typographie) avant de générer les composants, afin de réduire le nombre de corrections a posteriori.

---

## 📜 Licence

Projet pédagogique — M1/M2 Digital & IA, 2026. Usage non commercial.
