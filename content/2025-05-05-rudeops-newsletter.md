---
layout: post
title: Newsletter du 05 Mai 2025
tags: [devops, observability, SQL, Docker, Git, Hetty]
comments: true
mathjax: true
author: RudeOps
---

Il y a des jours où tenter de comprendre Kubernetes, c’est comme lire Joyce  sous acide, dans le noir, avec quelqu’un qui te crie "c’est évident !" à l’oreille. Des jours où Git ne te parle plus en commandes mais en runes anciennes, où chaque rebase devient une tentative de rituel païen, et où ta base PostgreSQL, pourtant chérie et bichonnée, décide sans prévenir qu’aujourd’hui, elle est en grève pour des raisons syndicales internes qu’elle ne communiquera évidemment pas.

Alors on cherche des repères. Des points fixes dans la tourmente. On tombe sur pgmoneta, qui promet enfin des sauvegardes PostgreSQL sans s’ouvrir les veines. Sur Lazygit, qui transforme la douleur de Git en une souffrance vaguement ergonomique. Sur Hetty, qui, sans fioritures, te permet de faire du pentest sans sacrifier 15Gb de RAM. Des outils créés par des gens qui ont, eux aussi, connu les nuits blanches, les logs illisibles et les conteneurs fantômes.

Et à force de bricoler, de lire, de tester, on apprend. Un peu. Jusqu’à ce que tout reparte en vrille et que l’infra, capricieuse et cruelle, te rappelle qui commande vraiment.

Si RudeOps t’aide à ne pas sombrer dans ce théâtre absurde, si ça t’a fait gagner du temps, ou simplement sentir que tu n’étais pas seul à crier devant ton terminal : partage**.**  
Pas pour la gloire, ni pour les stats.  
Mais pour que d’autres sachent que, quelque part, il existe des gens qui cherchent encore à comprendre comment tout ce cirque fonctionne. Et qui ont décidé d’en rire, plutôt que d’en pleurer.

Cyril

### Quoi de neuf ?

🏹 **Simplifying container observability for DevOps team :** Dans le monde merveilleux des conteneurs qui naissent, meurent et respawnent plus vite qu'une licence Starwars, les cowboys de chez Last9 nous rappellent que ["monitorer" ne veut plus rien dire](https://last9.io/blog/container-observability/). Aujourd’hui, il faut "observer" : comprendre, corréler, prier. Leur article tente de démêler l’enfer semi-organisé des métriques, logs et traces, dans l’espoir qu’un jour, on puisse savoir pourquoi le service "payment-prod-v3-temporary-final2" a crashé à 3h du matin. Spoiler : ce n’est pas à cause de Kubernetes, mais presque.

🥇  **Anatomy of a SQL engine :** Les mecs de chez Dolthub fêtent leur cinq ans de chirurgie interne en nous offrant [une autopsie complète de leur moteur SQL](https://www.dolthub.com/blog/2025-04-25-sql-engine-anatomy/). Parsing, binding, planification, exécution… tout y passe, avec une précision qui ferait rougir les scénaristes de Grey's Anatomy. On y découvre comment les requêtes sont digérées, transformées et recrachées, le tout orchestré par des arbres de syntaxe abstraite et des plans d’exécution dignes d’un casse-tête chinois. C’est technique, c’est dense, et c'est parfait pour ceux qui aiment comprendre ce qui se passe sous le capot.

🐋 **Awesome Docker Compose :** Ce site est une bénédiction. Ou un piège, c’est selon ton rapport à la procrastination technique. Tu y trouveras des dizaines de stacks clés en main [pour déployer tout et n’importe quoi](https://awesome-docker-compose.com/) : Grafana, Gitea, Nextcloud, Prometheus, Uptime Kuma, Jellyfin, PostgREST, Vault, Paperless, et même des outils dont tu ne savais pas que tu en avais besoin jusqu’à maintenant. C’est un peu comme tomber dans un magasin gratuit rempli de gadgets DevOps. Tu cliques, tu clones, tu testes, tu pètes tout, tu recommences. C’est beau, c’est sale, c’est addictif, un peu comme une soirée poker à Montargis.

</> **How to use LazyGit to improve your git workflow :** Git est un outil conçu par le malin pour te faire douter de ta carrière à chaque merge. Heureusement, [Lazygit est là](https://www.freecodecamp.org/news/how-to-use-lazygit-to-improve-your-git-workflow/) [pour t’éviter la thrombose cérébrale](https://www.freecodecamp.org/news/how-to-use-lazygit-to-improve-your-git-workflow/). Un genre de panneau de contrôle pour Git dans ton terminal, qui te permet de commiter, rebaser et même gérer des conflits sans ouvrir 15 onglets sur StackOverflow.

# Focus sur le blog de Stéphane Robert

[La caverne d’Ali Baba du DevOps et du DevSecOps.](https://blog.stephane-robert.info/)  

Des guides clairs, des retours d’expérience concrets, des tutos qui vont droit au but (sur Terraform, Kubernetes, Ansible, Prometheus, et bien d’autres).

Le tout saupoudré de plein de formations gratuites, accessibles et surtout utiles.  
  

⋒ **Arch Linux is the latest distribution replacing Redis :** Dans un mouvement qui en dit long sur l’évolution de l’écosystème open source, [Arch Linux a décidé de remplacer Redis par Valkey](https://www.phoronix.com/news/Arch-Linux-Going-Valkey) dans ses dépôts principaux. Même code de départ, mêmes performances, mais avec une gouvernance plus ouverte. Bref, un Redis sans les chaînes, ce qui est plutôt pour nous plaire.

🏗️ **Stop using Docker like its 2015 :** Cate van Rossum le rappelle avec justesse : Docker, c’est un outil de build et de dev, pas un environnement de sandbox. Lancer nos containers à la main c’était tolérable en 2015, plus aujourd’hui, mais on ne vous juge pas. Sécurité douteuse, absence d’orchestration, maintenance à la main... [on vaut mieux que ça en 2025](https://dev.to/code42cate/stop-using-docker-like-its-2015-1o5l).

👾 **Hetty, an HTTP toolkit for security research :** Burp Suite est trop cher ? ZAP rame comme un vieux Java en chaussettes ? Respire : Hetty, c’est [un proxy HTTP dédié aux tests de sécurité web](https://github.com/dstotijn/hetty), écrit en Go, avec une interface simple, rapide, et -miracle- qui n’a pas besoin de 15 Go de RAM pour tourner. Tu lances, tu interceptes, tu t’amuses. Pas besoin de tout reconfigurer à chaque fois. Pas de pop-ups obscurs. Pas de plugins à la con. Ça fait le job, et ça le fait bien. Une belle alternative open source pour ceux qui veulent tester proprement sans se battre contre l’outil.

☸️ **How Kubernetes works internally :** Dans ce chouette article des intellos de chez System Design Codex, on t'explique [comment fonctionne Kubernetes "à l'intérieur",](https://newsletter.systemdesigncodex.com/p/how-kubernetes-works-internally) c’est-à-dire dans ses entrailles, là où les pods naissent, meurent et se redéploient sans qu’on leur demande, pendant que toi tu regardes ton cluster comme un exorciste regarde une gamine possédée. On y parle d’un Control Plane qui croit être Dieu, d’un scheduler qui fait du Tetris en panique, de Kubelet qui joue au Tamagotchi avec les conteneurs, et d’un pauvre etcd qui tient l’univers debout sur trois clous rouillés.

🛢️ **Pgmoneta 0.16 :** La version 0.16 de pgmoneta est sortie, et elle promet de transformer [vos sauvegardes PostgreSQL](https://www.postgresql.org/about/news/pgmoneta-016-3065/) en une expérience (presque) plaisante. Au menu : support des sauvegardes incrémentielles pour PG 17+, support Prom/HTTPS, des images Docker/Podman prêtes à l’emploi, et plein d'autres trucs qu'on n'a pas compris.

🚀 **Gitdiagram :** Finies les heures passées à comprendre la structure d'un projet inconnu sur Github. Avec GitDiagram, vous obtenez [une vue d'ensemble instantanée](https://github.com/ahmedkhaleel2004/gitdiagram), avec des liens cliquables vers les fichiers et répertoires. C'est simple, rapide et franchement bien foutu.


## PATH isn't real on Linux

![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)

  

Merci à Baptiste M. de nous avoir partagé cet excellent article sur une idée reçue tenace : le `PATH` n’existe pas. Enfin… pas comme on le croit.

Dans l’imaginaire collectif (et dans 98 % des tutos), le `PATH` serait une sorte de baguette magique : on tape `htop`, et paf, le système "sait" où il est. Sauf que non. **Le noyau Linux ne connaît pas `PATH`.** Il s’en fiche royalement. C’est notre shell (bash, zsh, dash, etc.) qui parcourt les répertoires listés dans `PATH` pour retrouver l’exécutable. Et encore, ça dépend du shell.  
Daniel Huang décortique tout ça avec beaucoup de clarté dans son article, une lecture aussi rafraîchissante qu’un `execvp()` bien documenté.  

[Accéder au lien ->](https://blog.danielh.cc/blog/path)

