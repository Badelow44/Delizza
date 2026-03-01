# Page Téléchargement — `/download`

## But
Page store placeholder qui invite l'utilisateur à télécharger l'application native. Point d'arrivée de toutes les redirections `/go`.

## Structure
1. **Logo** — icône pizza avec gradient gold
2. **Titre** — "Deli'Zza"
3. **Description** — texte incitant au téléchargement
4. **Boutons stores** — App Store + Google Play (placeholder links)
5. **Lien retour** — "← Retour au site"

## Props / Data
- Pas de données dynamiques (tout en dur)

## États UI
- Page statique (server component)

## Points UX
- Design centré, épuré, premium
- Les liens de stores sont des placeholders (`#apple-store-placeholder`, `#google-play-placeholder`)
- Lien de retour au site pour ne pas bloquer l'utilisateur

## TODO Placeholders
- [ ] Remplacer les liens placeholder par les vrais liens App Store / Google Play
- [ ] Ajouter détection OS pour mettre en avant le bon store
- [ ] Ajouter un QR code pour le scan desktop
- [ ] Tracking analytics des conversions

## Tests manuels
1. Vérifier le centrage vertical et horizontal
2. Vérifier que les boutons stores ont le bon style
3. Vérifier que le lien retour fonctionne
4. Tester l'arrivée depuis `/go?trigger=...&from=...`
