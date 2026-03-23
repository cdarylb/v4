---
layout: post
title: Newsletter du 23 Mars 2026
tags: [git, SSH, Trivy, CI/CD, GitOps, Kubernetes, open source, AWS]
comments: true
mathjax: true
author: RudeOps
---


J'ai eu des boss de toutes les formes, toutes les tailles, toutes les gammes de compétence et d'humanité.

Celui qui t'engueule franchement quand tu mènes un projet dans le mur, et qui t'oublie le lendemain matin parce que c'est réglé, celui qui te pousse sur des sujets où tu ne te sens pas encore légitime, juste parce qu'il a vu quelque chose que toi tu n'avais pas encore vu, celui qui m'a mis en prod un vendredi soir sur un projet que je n'avais pas fini, pour me voir me débrouiller seul, et qui avait eu raison.

Il y en a eu d'autres.

Celui qui ne savait pas ce qu'on faisait mais aimait beaucoup les slides. Celui dont le management consistait principalement à déplacer les problèmes vers les autres avec une précision chirurgicale. Celui qui confondait "disponible" et "corvéable", et "urgence" avec "j'ai pensé à quelque chose dans le métro ce matin".

On grandit avec les deux, en fait. Le bon manager te tire vers le haut, le mauvais te donne une définition précise de ce que tu ne veux jamais devenir.

Ce qu'ils ont tous en commun, les bons, c'est qu'ils t'ont fait confiance avant que tu le mérites vraiment. Ils ont parié sur toi comme on deploy en prod sans filet : avec un peu d'inconscience, beaucoup de conviction, et en croisant les doigts très fort pour que le monitoring ne sonne pas la nuit.

C'est une forme de courage qu'on ne valorise pas assez dans nos métiers où on parle de scalabilité, de résilience, de zero downtime. Faire confiance à quelqu'un qui apprend encore, c'est accepter des incidents, c'est dire "go" quand l'environnement n'est pas encore stable. C'est du leadership, pas de la gestion.

Alors à tous ceux qui m'ont dit "vas-y", merci. Vous savez qui vous êtes. Et pour au moins l'un d'entre vous qui lit ces lignes en ce moment : tu fais partie des bons, et non, je ne dirai pas lequel tu es, parce que ça serait bien trop simple, et qu'on n'est pas du genre à rendre les choses faciles par ici.

Cyril

## La pépite de la semaine

Vous faites encore des git stash comme un sauvage en 2026 ? Bravo. Pendant ce temps, les adultes utilisent git worktree, qui permet d'avoir plusieurs branches dans des dossiers séparés sans se retrouver à faire un git checkout dans un répertoire qui appartient à votre collègue depuis trois sprints. La méthode recommandée : cloner en bare dans un dossier caché, poser un fichier .git d'une ligne qui dit "l'historique est là-dedans", corriger le remote tracking parce que sinon Git fait semblant de ne pas voir les branches distantes, et ensuite créer votre premier worktree. Un dossier par branche, un seul historique pour les gouverner tous, et la liberté de faire tourner vos tests sur main pendant que vous corrigez un bug urgent ailleurs, sans jamais perdre votre flow. Bonus : Git vous empêche d'extraire la même branche deux fois, ce qui évitera à votre collègue de vous reprocher d'avoir écrasé son travail. Pour les flemards, il y a un script dans le billet. Pour les autres, vous pouvez continuer à cloner deux fois le même repo et prétendre que c'est une stratégie.

[Lire l'article](https://www.metal3d.org/blog/2026/git-worktree-comme-un-chef/)

### Le coeur de la veille

⚡ **[Why does SSH send 100 packets per keystroke](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)** Un chouette article qui va parler aux détraqués qui lisent des pcaps le soir pour se détendre. Ce dev bossait sur un jeu multijoueur qui tourne via SSH avec 2000 connexions simultanées, et se demandait pourquoi son CPU ne redescendait jamais à zéro même sans envoyer de données. Réponse : depuis 2023, SSH envoie des paquets "chaff" pour masquer le timing de vos frappes clavier, une vraie feature de sécurité, mais catastrophique pour son use-case. Solution finale : forker la lib crypto de Go pour ne pas annoncer l'extension ping@openssh.com. Résultat : -60% de CPU, -50% de bande passante. L'article est aussi une bonne réflexion sur le débugage avec un LLM (Claude Code utile, ChatGPT très confiant et complètement à côté de la plaque).

🛡️ **[20 days later, Trivy compromise acte II](https://labs.boostsecurity.io/articles/20-days-later-trivy-compromise-act-ii/)** Un an après la compromission de tj-actions, l'écosystème CI/CD remet le couvert avec la même recette, en deux actes. Premier acte fin février : Pwn Request sur le pipeline Trivy, token de service aqua-bot exfiltré, credentials validés, fin de la représentation. Le token est rotated, tout le monde respire. Deuxième acte le 19 mars : l'attaquant revient par une porte qu'on n'a toujours pas identifiée, faux commit signé au nom d'un vrai mainteneur, domaine typosquatté, payload Go qui aspire vos secrets cloud, vos clés SSH et vos tokens Kubernetes, et 75 tags sur 76 de trivy-action réécrits en silence parce que les force-push de tags sont invisibles aux outils de monitoring. En bonus, la clé GPG de signature utilisée depuis 2019 est désormais compromise et toujours pas révoquée, ce qui est exactement le niveau de rigueur qu'on attend d'un outil de sécurité. La communauté a répondu en quelques heures, pendant que 47 bots inondaient le fil de discussion de "merci ça marche super" pour noyer le signal. Si vos pipelines consomment Trivy, c'est le bon moment pour vérifier. Sinon, attendez l'acte III, prévu en mars 2027.

☁️ **[Floci](https://github.com/hectorvent/floci)** Un émulateur AWS local, gratuit et open-source, qui débarque au moment précis où LocalStack a décidé de tuer son tier gratuit, ce qui a surpris exactement personne et déçu absolument tout le monde. Zéro token d'auth, usage CI/CD illimité, démarrage en 24ms, 13 MiB en idle et une image Docker de 90 Mo contre le gigaoctet de LocalStack qui se prenait visiblement pour une distro Linux. Plus de 20 services AWS supportés, 408 tests SDK sur 408 qui passent, et une intégration qui se résume à pointer votre endpoint sur localhost:4566.

### En bref

🔄 **[How to implement GitOps on K8s using Argo CD](https://www.freecodecamp.org/news/how-to-implement-gitops-on-kubernetes-using-argo-cd/)** Si vous faites encore des kubectl apply depuis votre laptop en vous disant que c'est temporaire, cet article est pour vous. Olumoko Moses y détaille un pipeline GitOps complet avec GitHub Actions pour builder et tagger les images, Argo CD pour synchroniser le cluster avec le repo, et Argo CD Image Updater pour que la mise à jour des tags se fasse toute seule sans intervention humaine. Le tout bien expliqué, avec les manifests qui vont avec. Classique mais solide.

🌍 **[Open Source is critical infrastructure](https://allthingsopen.org/articles/open-source-critical-infrastructure-openinfra-alignment)** Le Linux Foundation Member Summit de Napa a sorti quelques chiffres qui donnent le vertige : l'open source représenterait 8800 milliards de dollars de valeur pour l'IA, dont 1500 milliards directement liés aux composants sous-jacents. Pour contexte, c'est plus que le PIB de l'Allemagne, le tout entretenu par des bénévoles qui codent entre deux lessives dans des appartements mal chauffés, y compris à Montargis. Et pourtant les organisations continuent de payer des licences propriétaires, laissant 25 milliards de valeur non réalisée sur la table chaque année. Migrer vers l'open source, c'est apparemment aussi agréable que manger du verre pilé en écoutant la Symphonie des Adieux de Haydn, tout le monde part avant la fin et personne ne comprend vraiment pourquoi on a commencé.
