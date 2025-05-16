## [1.1.1](https://github.com/jos34000/portfolio/compare/v1.1.0...v1.1.1) (2025-05-16)


### Bug Fixes

* **import:** remove bad import ([4e90844](https://github.com/jos34000/portfolio/commit/4e908448d16bb1536a4b795d214884da37d9cf56))

# [1.1.0](https://github.com/jos34000/portfolio/compare/v1.0.1...v1.1.0) (2025-05-15)


### Features

* **i18n:** add language management and update translations ([aa589cd](https://github.com/jos34000/portfolio/commit/aa589cd4aa3efef62ea7bade770855580a9b24d5))


### Performance Improvements

* **i18n:** enhance next-intl language switching with page refresh ([06d47d4](https://github.com/jos34000/portfolio/commit/06d47d44c67a34fc7a75f6e759f17c224befedcf))

## [1.0.1](https://github.com/jos34000/portfolio/compare/v1.0.0...v1.0.1) (2025-05-12)


### Bug Fixes

* **translations:** correction des apostrophes dans les messages en anglais ([db32b86](https://github.com/jos34000/portfolio/commit/db32b869b60a2412ab33889d6c8b227b0e942565))

# 1.0.0 (2025-05-11)


### Bug Fixes

* **auth:** ajout de l'attente pour la fonction VerifyEmail lors de l'envoi d'email de vérification ([57d0b3c](https://github.com/jos34000/portfolio/commit/57d0b3c821847fcbfe39d9cf2afb05d6330eb7b2))
* **auth:** mise à jour de l'URL de base du client d'authentification ([9bf1f04](https://github.com/jos34000/portfolio/commit/9bf1f045d86629e97623dff641df012a3f2a7f04))
* **cookies:** suppression de la fonction de sauvegarde de l'achèvement de l'onboarding et nettoyage du code ([a244179](https://github.com/jos34000/portfolio/commit/a2441790c50262f17cdcae8be030e3de9257401a))
* **dependencies:** ajout de semantic-release et mise à jour des dépendances associées ([4f02298](https://github.com/jos34000/portfolio/commit/4f02298d950800dc5265e90e525d607478311aa1))
* **email:** correction de l'appel des fonctions d'email dans sendContactEmail ([664c6df](https://github.com/jos34000/portfolio/commit/664c6dfb4c6405dce2600d8f6f27c17af60a3948))
* **images:** mise à jour des chemins d'images dans le composant ImagesSection et changement du logo dans les emails ([a8fc008](https://github.com/jos34000/portfolio/commit/a8fc008b1a525fed50f6bf3c21791faa91ddd7a1))
* **links:** mise à jour des URLs de démonstration et du logo dans les emails ([13679d0](https://github.com/jos34000/portfolio/commit/13679d048ec488fbbaf1f21687415330d3cbdd18))
* **middleware:** ajout de la validation des locales et redirection appropriée ([a3fade1](https://github.com/jos34000/portfolio/commit/a3fade1060723f9f9a7555c18e3117cdab3407fd))
* **onboarding:** ajout de la gestion des cookies pour l'achèvement de l'onboarding ([98d6604](https://github.com/jos34000/portfolio/commit/98d6604367bcf21aeda66748ff0bfe09a9f9469b))
* **onboarding:** ajout de la gestion des tests Playwright et mise à jour des cookies ([7c4f382](https://github.com/jos34000/portfolio/commit/7c4f38298c0a9528d39b566347b8305ecc2abe7a))
* **playwright:** mise à jour de la configuration des rapports et refactorisation des tests d'onboarding ([e28bc3d](https://github.com/jos34000/portfolio/commit/e28bc3d6c27b20773c12f2287cec6b68686ec3ce))
* **responsive:** amélioration de la mise en page du formulaire d'inscription ([5475f9d](https://github.com/jos34000/portfolio/commit/5475f9d91bc2cfc5bc5dc8c07204ce585d15afc7))
* **sign-up:** ajout des icônes de connexion sociale et mise à jour des traductions ([f0635ae](https://github.com/jos34000/portfolio/commit/f0635ae501e0907043c94054e657e5d144f2d6e9))
* **sign-up:** mise à jour du fournisseur de connexion sociale et des traductions ([00d45be](https://github.com/jos34000/portfolio/commit/00d45bec00a3caca6b7e973b31161846641d79d5))
* **workflow:** mise à jour du workflow de release pour améliorer la gestion des permissions et des étapes ([f26d114](https://github.com/jos34000/portfolio/commit/f26d1144718b43440bf9a3656f4d7b4338f8d84b))


### Features

* **auth:** Add Github as social provider for auth ([89d9987](https://github.com/jos34000/portfolio/commit/89d9987d1d3cbca49d543e14f4c2c4364101ad96))
* **auth:** Add verification with email after sign-up ([8a86d6c](https://github.com/jos34000/portfolio/commit/8a86d6c8bc41c0ee184660589297dcdfccd6bfff))
* **auth:** Ajout d'informations sur l'appareil et le navigateur dans l'email de vérification ([48fcccc](https://github.com/jos34000/portfolio/commit/48fccccd30f6ba5fd3a4922446c5e310559f2abe))
* **config:** ajout de next-intl et des traductions de textes ([149aaa7](https://github.com/jos34000/portfolio/commit/149aaa7cc81ef22a857a2b07a677d1e63450af6a))
* **dashboard:** ajout de la navigation par fil d'Ariane dans le layout du dashboard ([88262c3](https://github.com/jos34000/portfolio/commit/88262c3bb9c1e6fadd2a78b00213b50df798b767))
* **errors:** ajout de la gestion des pages d'erreur et des traductions ([909fe0b](https://github.com/jos34000/portfolio/commit/909fe0bba7682f5a371ceb3f4b8d0d7486b3b088))
* **mail:** Send emails when a contact form is submitted ([6f2aff7](https://github.com/jos34000/portfolio/commit/6f2aff7366ff33010c07094649cdfdbda4ca9cc5))
* **middleware:** ajout de la gestion des redirections et des sessions ([5164e15](https://github.com/jos34000/portfolio/commit/5164e15ee870c8222dbfd22c82d7b297e493ea01))
* **nav:** add floating navigation bar ([d1b2338](https://github.com/jos34000/portfolio/commit/d1b233856df1098bd395b3f669d73d8120039dd9))
* **onboarding:** ajout de la gestion des cookies pour l'onboarding et mise à jour de la logique de changement de langue ([3b4f7a6](https://github.com/jos34000/portfolio/commit/3b4f7a6eb34b2b0125262952c1d1887a4c71129e))
* **onboarding:** implement multi-step onboarding flow ([a1387ae](https://github.com/jos34000/portfolio/commit/a1387ae03e636ae604fb75a6bd803191075928a3))
* **theme:** amélioration du sélecteur de thème et ajout de traductions ([66878a2](https://github.com/jos34000/portfolio/commit/66878a2138887107949337bcf2892f3b11e3f354))
