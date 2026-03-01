# Page Offres — `/offers`

## But
Affiche les promotions et offres spéciales en cours. Incite à la commande via des codes promo.

## Structure
1. **Titre** — "Offres"
2. **Sous-titre** — "Profitez de nos promotions exclusives"
3. **Liste d'offres** — cards avec image, badge discount, titre, description, code promo, date de validité

## Props / Data
- `offers` — `Offer[]` depuis `/src/data/mock/offers.ts`

## États UI
- Page statique (server component), pas d'état client

## Points UX
- Chaque offre affiche un code promo copiable (placeholder)
- Badge discount en position top-right sur l'image
- Date de validité formatée en français

## TODO Placeholders
- [ ] Ajouter copie dans le presse-papiers au clic sur le code
- [ ] Connecter au CMS pour offres dynamiques
- [ ] Ajouter un CTA "Utiliser cette offre" → `/go?trigger=use_offer_<id>`
- [ ] Gestion des offres expirées (affichage grisé)

## Tests manuels
1. Vérifier l'affichage de toutes les offres
2. Vérifier le formatage des dates en français
3. Vérifier l'affichage du badge discount sur l'image
4. Vérifier le rendu sur mobile SE → Pro Max
