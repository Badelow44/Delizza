# Page Menu — `/menu`

## But
Liste complète des produits avec filtres par catégorie et recherche textuelle. Permet de parcourir tout le catalogue.

## Structure
1. **Titre** — "Menu"
2. **Search Bar** — recherche textuelle dans les produits
3. **Chips catégories** — filtre horizontal identique à la home
4. **Section Header** — titre dynamique selon la catégorie active
5. **Grille produits** — 2 colonnes de ProductCards
6. **État vide** — message si aucun résultat

## Props / Data
- `categories` — `Category[]` depuis `/src/data/mock/categories.ts`
- `products` — `Product[]` depuis `/src/data/mock/products.ts`

## États UI
- `search` (string) — filtre textuel
- `activeCategory` (string) — catégorie sélectionnée

## Points UX
- Double filtre : catégorie + recherche textuelle
- Le bouton "+" sur chaque produit redirige vers `/go?trigger=add_<id>`
- Message "Aucun résultat trouvé" quand la combinaison filtre+recherche ne donne rien

## TODO Placeholders
- [ ] Connecter au CMS pour données réelles
- [ ] Ajouter pagination ou infinite scroll si beaucoup de produits
- [ ] Ajouter tri par prix/popularité

## Tests manuels
1. Vérifier l'affichage grille 2 colonnes sur mobile
2. Tester la recherche "margherita" → doit montrer la Margherita Classica
3. Changer de catégorie : vérifier que seuls les produits de la catégorie s'affichent
4. Combiner recherche + catégorie : vérifier le double filtre
5. Tester l'état vide avec une recherche impossible (ex: "xyz")
