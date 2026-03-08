---
layout: post
title: Newsletter du 17 Juin 2024
subtitle: La newsletter officielle des législatives	
thumbnail-img: /assets/img/claque la porte.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, LXC, Docker, CI-CD, Linux, Gitness, S3, DORA]
comments: true
mathjax: true
author: RudeOps
---


Quel dommage de voir notre vie politique aussi bouleversée et confuse, en manque de repères et où l'invective devient la norme. Même si ici on préfère en rire, on se plaît à penser à un framework dédié à la politique avec un set de bonnes pratiques moins déconnectées de la réalité à fournir à nos élus.  
  
Cyril

### Quoi de neuf ?

🏃‍♂️  **What is PID 0 :** C'est à travers les news des bad boys de chez Bearstech (qui eux ont une  [newsletter](https://www.linkedin.com/newsletters/la-veille-des-ours-7100088441966575616/) vraiment pro qu'on vous conseille) qu'on a trouvé un article - claqué au sol comme disent les jeunes d'aujourd'hui - sur  [le rôle du mystérieux PID 0](https://blog.dave.tf/post/linux-pid0/).

💝 **How to write a simple Linux kernel module :** Bel exemple de création de module  [très simple à suivre](https://adil.medium.com/how-to-write-a-simple-linux-kernel-module-bc3f981093b4)  et à portée de tous (sauf sans doute de Eric Ciotti, faut pas déconner non plus).

🥇  **LXC versus Docker, which one should you use :** Un chouette article relativement impartial sur  [les avantages des deux systèmes de containerisation](https://www.docker.com/blog/lxc-vs-docker/)  et dans quel cadre les utiliser au mieux.

🎁 **Open-source code hosting and CI/CD pipeline engine :** On vous présente Gitness, une  [plateforme de gestion de code open-source](https://github.com/harness/gitness)  qui embarque un moteur de pipelines CI/CD, et qui propose une sécurité renforcée, des intégrations personnalisables avec vos outils préférés, et des migrations en un clic depuis d'autres plateformes comme GitHub ou GitLab. Elle est pas belle la vie ?

😳 **Things you wish you didn't need to know about S3 :** Un post archi intéressant écrit par les cowboys de chez Plerion et qui nous décrit  [quelques aspects méconnus mais importants de la sécurité sur S3](https://blog.plerion.com/things-you-wish-you-didnt-need-to-know-about-s3/)  (ça va des particularité de l'API S3 en passant par les méthodes pour lister les clefs d'objets).  

🚀  **Top 12 Git commands every developer must know :** [La cinquième va vous étonner !](https://github.blog/2024-06-10-top-12-git-commands-every-developer-must-know/)


## Best practices for using DORA metrics to improve software delivery

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

Aujourd’hui on remercie Cédric R qui nous partage un post des outlaws de chez Datadog qui nous explique comment utiliser les métriques DORA pour améliorer notre delivery. On y parle des quatre métriques clés (fréquence de déploiement, délai de changement, temps de restauration et taux d'échec des changements) et le post donne plein de conseils pour les mesurer et les analyser efficacement. Pour les deux qui ne suivent pas, les métriques DORA (Devops Research and Assessment) permettent d'identifier et d'optimiser les points faibles de workflows CI/CD.  

[Accéder au lien ->](https://www.datadoghq.com/blog/dora-metrics-software-delivery/)