---
title: Démarrer avec Flash
description : Ce guide vous aidera à comprendre les bases de Flash et vous permettra d'être prêt à utiliser Flash avec un nouveau compte. Nous verrons comment créer un nouveau portefeuille lightning, créer un compte et se connecter à un client en toute sécurité.
---

## [§](#understanding-keys) Comprendre le fonctionnement

Chaque compte Flash est basé sur une paire de clés publique/privée. Pour simplifier, votre clé publique est votre nom d'utilisateur et votre clé privée est votre mot de passe, avec une mise en garde importante. Contrairement à un mot de passe, votre clé privée ne peut pas être réinitialisée en cas de perte.

Permettez-moi de le répéter pour que ce soit clair : **Si vous perdez votre clé privée, votre compte Flash est perdu. Si quelqu'un d'autre a accès à votre clé privée, il peut prendre le contrôle de votre compte**.

Veillez à conserver votre clé privée dans un endroit sûr, comme un gestionnaire de mots de passe.

## [§](#protocol-vs-client) Protocole vs Client

Flash lui-même n'est qu'un protocole, une procédure convenue pour faire circuler des messages sur Internet.

Vous accéderez à Flash (le protocole) via un client. Les clients peuvent être des applications web, de bureau ou mobiles. Certains clients Flash vous permettent de vous connecter en collant votre clé privée. Sur le web, cette méthode n'est généralement pas recommandée, car elle est fastidieuse et peu sûre. Nous vous recommandons plutôt d'utiliser un portefeuille cryptographique basé sur le web, qui est un logiciel spécialement conçu pour gérer les clés privées.

[Alby - Chrome](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe), [Alby - Firefox](https://addons.mozilla.org/en-US/firefox/addon/alby/) est un portefeuille bitcoin lightning qui intègre le support de Flash. C'est une excellente option pour les nouveaux utilisateur-trice-s. Nous couvrirons l'installation d'Alby dans les guides spécifiques aux clients qui en ont besoin ci-dessous.

## [§](#create-your-account) Créer votre compte

Voici des guides étape par étape pour différents clients que nous recommandons :

-   [Iris](/en/guides/iris) (Web)
-   [Damus](/en/guides/damus) (iOS)
-   [Amethyst](/en/guides/amethyst) (Android)

Quelques autres clients que nous apprécions mais pour lesquels nous n'avons pas de guides :

- [Snort](https://snort.social/) (Web) Client Web super propre et rapide.
- [Coracle](https://coracle.social/) (Web) Un client axé sur la navigation relais.
- [Flashgram](https://flashgram.co) (Web) Client amusant inspiré d'Instagram et axé sur les images, la vidéo et l'audio. Ramenez vos mèmes !

## [§](#find-friends) Trouvez vos ami-e-s pour les suivre

- Si vous savez que quelqu'un est sur Flash, trouvez son profil en recherchant sa clé publique.
- De nombreux utilisateurs de Twitter tweetent leurs clés publiques Flash avec le hashtag #flash, la recherche de ce hashtag peut donc vous donner un bon point de départ.
- [flash.directory](https://flash.directory) est une base de données qui associe les utilisateur-trice-s de Twitter à leurs clés publiques Flash.

## [§](#whats-signing) Que veut dire "Signer"

Pour interagir avec le protocole Flash, vous devez créer une signature cryptographique à chaque fois que vous effectuez une action. Considérez cette signature comme une étape d'authentification au cours de laquelle vous confirmez que vous êtes bien la personne que vous prétendez être.

La plupart des clients Flash essaient de rendre cela facile et rapide (ou vous permettent d'enregistrer votre clé privée dans le client afin qu'il puisse signer en votre nom à chaque fois que vous faites quoi que ce soit).

En ne fournissant que notre clé publique ci-dessus, nous serons invités à signer chaque fois que nous voudrons interagir avec des messages ou effectuer des mises à jour de notre profil. À ce moment-là, Alby apparaîtra automatiquement (comme lors de l'étape d'inscription) et vous pourrez confirmer que vous souhaitez effectivement signer.

## [§](#can-i-use-other-clients) Est-ce que je peux utiliser d'autres clients?

Oui ! Maintenant que vous avez créé votre paire de clés publiques/privées, vous pouvez utiliser cette paire sur n'importe quel client Flash pour accéder à votre compte. Rappelons que le client n'est qu'une interface permettant de voir les messages diffusés sur le protocole Flash.

## [§](#next-steps) Prochaines étapes

Vous avez maintenant un portefeuille lightning, une identité (votre paire de clés) et vous avez essayé un client. Voici quelques liens qui pourraient vous être utiles lorsque vous vous aventurerez plus loin dans Flash :

-   [Vérifier son identité](/fr/guides/get-cash)
-   [Que sont les relais et comment ils fonctionnent?](/fr/relays)
-   [En savoir plus sur les NIPs et l'élaboration du protocole](/fr/the-protocol)
