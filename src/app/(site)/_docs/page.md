# Page d'accueil — `/`

## But
Page principale app-like affichant le menu en mode découverte, les promos et les suggestions produits. Point d'entrée principal du site mobile.

## Structure
1. **Header** — logo "Deli'Zza", greeting placeholder ("Bonjour Alex,"), avatar badge
2. **Hero Carousel** — slides promotionnels avec image, badge, titre, CTA "Commander", prix en pastille gold, dots de pagination
3. **Search Bar** — style iOS, surface sombre + léger blur
4. **Chips catégories** — scroll horizontal (Populaire, Pizzas, Entrées, Desserts, Promos), état actif gold
5. **Section Suggestions** — grille 2 colonnes de ProductCards avec photo, nom, description, prix, bouton "+"
6. **CTA Section** — redirection vers le menu complet

## Props / Data
- `heroSlides` — `HeroSlide[]` depuis `/src/data/mock/hero-slides.ts`
- `categories` — `Category[]` depuis `/src/data/mock/categories.ts`
- `products` — `Product[]` depuis `/src/data/mock/products.ts`

## États UI
- `search` (string) — filtre les produits affichés
- `activeCategory` (string) — filtre par catégorie sélectionnée

## Points UX
- Les CTA "Commander" et boutons "+" redirigent vers `/go?trigger=...` (redirection intelligente)
- Le carousel supporte swipe gauche/droite (zones tactiles)
- Les chips catégories défilent horizontalement sans scrollbar visible
- Bottom navigation fixe avec animation press (scale)

## TODO Placeholders
- [ ] Remplacer "Bonjour Alex" par nom réel utilisateur
- [ ] Connecter données produits au CMS (Directus/Strapi)
- [ ] Implémenter deep links réels dans `/go`
- [ ] Ajouter images réelles pour les slides et produits

## Tests manuels
1. Vérifier l'affichage sur iPhone SE (320px) → iPhone Pro Max (430px)
2. Tester le scroll horizontal des chips sans scrollbar visible
3. Vérifier que le carousel change de slide au tap gauche/droite
4. Vérifier que les dots de pagination reflètent le slide actif
5. Tester la recherche : taper "truffe" doit filtrer les résultats
6. Vérifier que le bouton "+" redirige vers `/go?trigger=add_<id>`
7. Vérifier que le CTA "Commander" redirige vers `/go?trigger=hero_cta_<id>`
