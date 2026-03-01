# Page Profil — `/profile`

## But
Page placeholder de profil utilisateur. Interface simple mais visuellement cohérente avec le design system.

## Structure
1. **Titre** — "Profil"
2. **Avatar + Nom** — placeholder avec gradient gold
3. **Liste d'options** — Commandes, Adresses, Paiement, Notifications, Aide
4. **CTA téléchargement** — lien vers `/download`

## Props / Data
- Données utilisateur en dur (placeholder)

## États UI
- Page statique (server component)

## Points UX
- Les options de menu sont des placeholders visuels (non fonctionnels)
- Le CTA "Télécharger l'application" redirige vers `/download`
- L'avatar utilise le gradient gold du design system

## TODO Placeholders
- [ ] Connecter à l'authentification réelle
- [ ] Rendre les options de menu fonctionnelles
- [ ] Ajouter une page de déconnexion
- [ ] Récupérer les vraies données utilisateur

## Tests manuels
1. Vérifier le rendu de l'avatar avec gradient gold
2. Vérifier que toutes les options sont listées
3. Vérifier que le CTA redirige vers `/download`
4. Vérifier le rendu responsive
