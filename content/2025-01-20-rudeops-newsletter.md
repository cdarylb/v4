---
layout: post
title: Newsletter du 20 Janvier 2025
tags: [devops, API, GGH, Linux, Docker, console]
comments: true
mathjax: true
author: RudeOps
---

Alors que Trump se prépare à un retour en scène, l'idée d'une alliance encore plus forte entre pouvoir politique et géants de la tech donne des sueurs froides. Entre tweets ravageurs et algorithmes complaisants, on pourrait presque croire que le futur qui se dessine est un épisode inédit de Black Mirror...

Là où la tech, et plus précisément le web devaient devenir des espaces de liberté, de savoir et d'échanges, nous avons créé un cloaque, une dette colossale aussi, pour les générations futures, à l'instar du changement climatique.

Il est temps de reprendre le pouvoir de la tech, et de rajouter une bonne dose de responsabilité dans nos orientations techniques (et citoyennes) qui ne sont plus neutres.

Cyril

### Quoi de neuf ?

🏃‍♂️  **Why your API strategy needs a rethink :** On vous partage un article des cowboys de chez The New Stack qui met assez bien en lumière les défis auxquels les organisations sont confrontées [avec les API REST](https://thenewstack.io/why-your-api-strategy-needs-a-rethink/)  traditionnelles, notamment sur l'accès limité au backend et la gestion des mises à jour. GraphQL est proposé comme une solution à pas mal de problèmes, alors que nous on envisagerait plutôt un lance-flammes.

**☸️ K9s, manage your Kubernetes cluster and it's objects like a pro :** Pour les deux du fond qui ne connaissent pas encore K9s (attention on vous voit), un chouette article qui permet, avec quelques exemples, de comprendre  [le fonctionnement et les bénéfices d'un outil](https://www.cncf.io/blog/2024/12/06/k9s-manage-your-kubernetes-cluster-and-its-objects-like-a-pro/)  qui vous fera économiser du temps et de la sueur.

💝 **GGH is a lightweight cli to recall your ssh sessions :** Un chouette outil qu'on vient de découvrir et dont vous n'allez plus pouvoir vous passer, et qui permet de  [rappeler une session ssh](https://laravel-news.com/ggh-is-a-lightweight-cli-to-recall-your-ssh-sessions)  à travers une interface très lisible. Fonctionne sur Linux et Windows.

**👨🏻‍💻 I feel like a hacker using these cool Linux terminal tools :** Une compilation d'[outils indispensables](https://itsfoss.com/hacker-like-linux-terminal-tools/)  pour se la jouer hacker comme dans les films entre deux restart de pods sur votre cluster K8s de bonhomme.

📟 **Top 10 ways to monitor Linux in the console :** Plusieurs outils de base que vous devez connaître pour  [surveiller les performances](https://www.jeffgeerling.com/blog/2025/top-10-ways-monitor-linux-console)  de vos boxs Linux via la console. Du simple utilitaire de base top à des outils plus avancés comme htop, atop, iftop, btop, chacun offre des fonctionnalités uniques pour la surveillance de tout un tas de machins, de la RAM jusqu'au GPU.

🐳 **Linuxserver/webtop :** Webtop propose des conteneurs basés sur Alpine, Ubuntu, Fedora et Arch, avec des environnements de bureau complets  [accessibles via votre navigateur web préféré](https://github.com/linuxserver/docker-webtop). Webtop prend en charge plusieurs architectures, divers environnements de bureau (XFCE, KDE, MATE, i3, Openbox et IceWM), et permet une configuration via des variables d'environnement.  

**🐧 Nix - Death by a thousand cuts :** Un article très complet qui partage le retour d'expérience d'un mec trop curieux avec NixOS. En conclusion, [il ne recommande pas son utilisation pour du desktop](https://www.dgt.is/blog/2025-01-10-nix-death-by-a-thousand-cuts/), même pour des radicalisés de longue date, et souligne que l'investissement en temps pour maintenir et configurer le système peut dépasser les avantages obtenus.

🏆  **Container capabilities, a short tour :** Un très bon article qui explore les capacités de Linux dans  [différents scénarios d'exécution de conteneurs Docker](https://padlock.argh.in/2024/12/15/container-capabilities.html), en mettant en lumière leurs implications pour la sécurité et la flexibilité. On y parle notamment de la différence entre l'exécution d’un conteneur avec ou sans privilèges et l’impact de l’utilisation d’un utilisateur root ou non-root.

![](https://storage.mlcdn.com/account_image/325165/1ppyRjYrpjquALFUHlNZUQ1ome3N8vBBEVly3VPh.jpg)

# Presentation: curl from start to end

C'est pas tous les jours que ça arrive, alors on vous prévient que demain, le 21/01/2025,  **Daniel Stenberg**, le papa de Curl, organise une  [conférence qui sera diffusée en direct sur Twitch](https://daniel.haxx.se/blog/2025/01/16/presentation-curl-from-start-to-end/)  et sera enregistrée puis hébergée sur YouTube par la suite.


## It's time to make Kubernetes disappear

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

  

Merci à Sandrine T. qui nous partage un article pointu sur Kubernetes et dans lequel on y décrit sa complexité croissante. Initialement conçu comme un grosse couche d'abstraction de ressources, K8s est devenu une entité nécessitant sa propre gestion, entourée de trop nombreux outils et technos supplémentaires : une situation qui crée des frictions pour les devs, ces pauvres chéris, qui doivent naviguer dans des process trop complexes pour eux, comme le provisionnement de microservices ou la configuration de dépôts.  

Pour remédier à cette complexité, l'auteur de l'article propose d'aller au-delà de l'orchestration traditionnelle en adoptant une approche de "chorégraphie", méthode qui consisterait à décentraliser le contrôle, permettant aux services de s'interconnecter de manière autonome plutôt que de dépendre d'un orchestrateur centralisé.

  

[Accéder au lien ->](https://cloudnativenow.com/contributed-content/its-time-to-make-kubernetes-disappear/)