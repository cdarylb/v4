---
layout: post
title: Newsletter du 10 Février 2025
tags: [devops, MySql, Kafka, Linux, Docker]
comments: true
mathjax: true
author: RudeOps
---

43 6F 6D 6D 65 20 6F 6E 20 61 69 6D 65 20 62 69 65 6E 20 6E 6F 74 72 65 20 6C 65 63 74 6F 72 61 74 2C 20 6F 6E 20 61 20 64 E9 63 69 64 E9 20 64 65 20 66 61 69 72 65 20 67 61 67 6E 65 72 20 6C 65 20 6C 69 76 72 65 20 22 54 68 65 20 50 68 6F 65 6E 69 78 20 50 72 6F 6A 65 63 74 22 20 E0 20 75 6E 20 6C 65 63 74 65 75 72 20 61 70 72 E8 73 20 74 69 72 61 67 65 20 61 75 20 73 6F 72 74 2E 20 50 6F 75 72 20 70 61 72 74 69 63 69 70 65 72 20 63 27 65 73 74 20 73 69 6D 70 6C 65 2C 20 76 6F 75 73 20 6E 6F 75 73 20 65 6E 76 6F 79 65 7A 20 75 6E 20 65 6D 61 69 6C 20 E0 20 63 6F 6E 74 61 63 74 40 72 75 64 65 6F 70 73 2E 63 6F 6D 20 65 74 20 6F 6E 20 74 69 72 65 72 61 20 61 75 20 73 6F 72 74 20 70 61 72 6D 69 20 74 6F 75 73 20 6C 65 73 20 65 6D 61 69 6C 73 20 72 65 E7 75 73 20 64 61 6E 73 20 6C 65 73 20 6A 6F 75 72 73 20 71 75 69 20 76 69 65 6E 6E 65 6E 74 2E 20  
  
Cyril

### Quoi de neuf ?

🛢️ **MySql at Uber :** Un chouette post des cowboys de chez Uber, la petite startup californienne qui monte, et qui nous détaille  [leur infrastructure MySQL](https://www.uber.com/en-FR/blog/mysql-at-uber/) (composée de plus de 2 300 clusters indépendants) et qui constitue la colonne vertébrale de leur plateforme. L'article aborde tout ce qui est flux de données et de contrôle, ainsi que les principaux composants de cette architecture, comme le plan de contrôle et de découverte, l'observabilité, la capture des données et leur ingestion dans leur datawarehouse. et tout un tas d'autres trucs à une échelle complètement folle.

</> **Re-ordering git commits :** Quelques tricks qui vous aideront à [ranger vos commits](https://cassidoo.co/post/rebase-to-reorder/)  dans l'ordre de votre choix comme un grand et à grands coups "d'interactive rebase", ce qui vous permettra de faire le malin dans votre open-space.

🏆  **Kafka consumer monitoring tips :** Vous êtes un vrai bonhomme comme on dit à Montargis, vous délaissez RabbitMQ et autres systèmes de messaging trop mainstream et avez donc installé un Kafka pour gérer vos 100 events par jour. Histoire de conserver votre street cred, on vous aide à aller plus loin grâce à ce post qui vous donne les clefs pour  [monitorer proprement vos consumers avec Prometheus et Alert Manager](https://medium.com/trendyol-tech/kafka-consumer-monitoring-tips-890357d070b7).

🥇  **Docker networking explained - theory and network drivers simplified :** On vous partage ce post qui va vous expliquer, de manière archi simple,  [comment fonctionne la couche réseau sous Docker](https://medium.com/javarevisited/sdocker-networking-explained-theory-and-network-drivers-simplified-8c93252d2719). C'est franchement le genre d'article qu'on aurait aimé avoir à nos débuts sur Docker car lisible, didactique, où des concepts un peu tordus sont expliqués simplement.

**👨🏻‍💻 Clone2leaks, your git credentials belong to us :** Une nouvelle étude des intellos de chez Flatt Security révèle  [plusieurs failles critiques dans des outils populaires liés à Git](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)  (on parle du cli Git, Git LFS, Github Desktop, etc). Baptisée  **Clone2Leak**, cette attaque exploite des failles permettant d'injecter des caractères spéciaux et détourner vos informations d'authentification, comme c'est original.

📶 **Sigmon :** Sans doute l'application avec la quelle on a le plus joué ce mois-ci, et qui vous permet de  [mesurer la puissance de votre signal Wifi](https://github.com/tcsenpai/sigmon)  et qui agrège les données en temps réel dans un graph. Ça fonctionne à base de iwconfig et plotext, et c'est classe.  

**🐳 4 tiny docker images for lightweight containers :** C'est un peu un marronnier, mais comme c'est de la pige facile on ne se prive pas de vous partager un énième article qui vante les vertus magiques d'utiliser les  [images docker les plus légères possibles](https://www.infoworld.com/article/3804073/4-tiny-docker-images-for-lightweight-containers.html). Sans surprise, on y parle de Alpine, Busybox, Debian Slim et Red Hat Ubi Micro.

**🐧 Les utilisateurs de WSL pourront bientôt profiter d'Arch Linux officiellement :** D'après un papier des mecs de chez IT-Connect, c'est officiel,  [WSL2 va bientôt proposer des images officielles](https://www.it-connect.fr/windows-utilisateurs-wsl-pourront-bientot-profiter-arch-linux-officiellement/)  et mises à jour de Linux Arch à destination des mecs qui ont choisi le mauvais OS. Puissent-ils voir la lumière.

🚀  **How to build a multi-tenant IDP with Gitops and vCluster :** On a trouvé cet article très fouillé qui explore [la création d'une plateforme de développement interne (IDP)](https://itnext.io/how-to-build-a-multi-tenancy-internal-developer-platform-with-gitops-and-vcluster-d8f43bfb9c3d)  multi-tenant en adoptant une approche en self-care avec K8s, GitOps et vCluster. L'article clarifie les rôles de chacune des équipes dédiées, explique les différentes couches d'une IDP et propose un guide pratique pour la mise en place et la gestion de la plateforme, idéal pour se constituer un labo de tests.

# L'infogérance à l'heure du DevOps

![](https://storage.mlcdn.com/account_image/325165/f13FsX3zFe6W0f7TgDEEPFOr6WqprvRw9eGGynGi.png)

Un webinar sera donné par les coyotes de chez Bearstech  **le Jeudi 13 Février à 14h30**  :

_Votre application rame ? Votre infogéreur ignore vos demandes ? Vous gérez une dette technique croissante et des failles de sécurité ?_

_Performance, sécurité et support : l'infogérance joue un rôle clé pour assurer la stabilité et la scalabilité de vos infrastructures. Mais à l’ère du DevOps, où commence et où s’arrête le rôle de l’infogéreur face à votre équipe tech ?_

_Ce que vous allez découvrir :_

-   _Comment collaborer efficacement avec un infogéreur_
-   _Comment auditer la performance et tester la charge_
-   _Les meilleures pratiques pour sécuriser une application (WAF, monitoring…)_
-   _Comment identifier et résoudre les problèmes avant qu’ils ne deviennent critiques_
-   _Ce qu’un bon infogéreur peut faire (et ce qu’il ne peut pas)_

_Que vous soyez développeur, chef de projet ou CTO, ce webinar vous donnera les clés pour optimiser l’infogérance et éviter les pièges classiques._

[](https://app.livestorm.co/bearstech/linfogerance-a-lheure-du-devops-ce-que-vous-devez-savoir)

S'inscrire


## Linux is obsolete

![](https://storage.mlcdn.com/account_image/325165/L3ZVKsGu9oqkeqnxi85jDEilAYoJ99SYjIkX1HnM.png)

Merci à Frédéric S, "sysadmin intégriste" dans une boîte web à Nantes, qui nous partage un échange datant de 1992, et qui soutient que les systèmes d'exploitation basés sur un micro-kernel, comme MINIX, sont supérieurs aux systèmes monolithiques comme Linux. Des mecs mettent en avant les avantages des micro-kernels, comme une certaine modularité et la facilité de la maintenance, et critiquent Linux pour sa dépendance à l'architecture 80x86, ce qui pourrait limiter sa viabilité à long terme. A déguster avec un bon whisky au coin du feu.  

[Accéder au lien ->](https://groups.google.com/g/comp.os.minix/c/wlhw16QWltI)