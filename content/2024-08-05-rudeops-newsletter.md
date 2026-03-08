---
layout: post
title: Newsletter du 05 Août 2024
subtitle: Il commence à faire chaud non ?		
thumbnail-img: /assets/img/Barbara-OS.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, Kubernetes, Linux, Network, Monitoring, Swarm]
comments: true
mathjax: true
author: RudeOps
---

Je suis quand même très déçu de constater qu'une fois de plus il n'y a pas d'épreuves aux Jeux Olympiques sur Kubernetes, et ce, malgré plusieurs lettres au CIO. Ça aurait quand même eu de la gueule non ?  
  
Cyril

### Quoi de neuf ?

🏹 **Kubernetes 1.31, what's new :** Et en parlant de Kubernetes,  [la version 1.31 vient de sortir](https://sysdig.com/blog/whats-new-kubernetes-1-31/)  et amène son lot de nouveautés et d'améliorations. On peut citer entre autres choses la possibilité de mettre à jour les ressources des pods sans avoir à les redémarrer, la transition vers WebSockets pour kubectl, la suppression des intégrations internes aux fournisseurs de cloud (initiée depuis la version 1.26) et il n'est maintenant plus nécessaire de réaliser de complexes sacrifices humains avant de redémarrer son cluster, ce qui fera gagner du temps à tout le monde et sera moins salissant.  

🙌 **Linux performance ultimate guide :** Le  [guide de référence ultime](https://ntk148v.github.io/posts/linux-network-performance-ultimate-guide/)  qui va donner des frissons de plaisir à tous les barbus linuxiens. C'est vraiment archi détaillé, bien sourcé et indispensable si vous voulez comprendre comment fonctionne le réseau sur Linux.

🤖 **Monitoring of monitoring :** [Quis custodiet ipsos custodes](https://oren-shoval.medium.com/monitoring-of-monitoring-29f552b5cb43) ?

🥇  **Echovault :** [Un énième data-store distribué](https://github.com/EchoVault/EchoVault) qui fait du cache et écrit dans le langage du moment, le Go. Il se différencie de ses concurrents par une vitesse assez dingue sur le papier.

🧲 **Understanding Wifi 4/5/6/6e/7 (802.11 n/ac/ax/be) :** On vous partage  [la bible](https://www.wiisfi.com/)  qui explique les différences entre les diverses générations de Wi-Fi (Wi-Fi 4/5/6/6E/7) et leurs capacités. C'est une superbe documentation, qui fourmille d'exemples et qui reste très accessible.

🎯 **Securing Node.js in production :** Un chouette article qui résume [les bonnes pratiques à associer à Node.js](https://medium.com/@modywmbadr/securing-node-js-in-production-f11822ab20b7). On y parlera gestion des dépendances, sécurisation des headers, protection contre les attaques par injection et on conclura avec l'utilisation de linters pour augmenter la sécurité.  

🚀  **Docker Swarm vs Kubernetes (feature and use case comparison) :** Une comparaison entre K8s et Swarm, rédigée par les coyotes de chez Spacelift, et qui vous aidera à répondre à l'angoissante question :  [dois-je installer Kubernetes en production ?](https://spacelift.io/blog/docker-swarm-vs-kubernetes) (et dont la réponse doit toujours être non, jamais, ho regardez là-bas un écureuil).

## OpenTofu 1.8.0 is out with Early Evaluation, Provider Mocking, and a Coder-Friendly Future

![](https://storage.mlcdn.com/account_image/325165/v3eToAFLmjvaHMpoXqLeDDzWxpMO3MhJNa0MWAVR.png)

Merci à Mathias M. qui nous partage un post qui fait rudement plaisir sur notre chouchou, OpenTofu. On y apprend que  [la version 1.8 introduit des fonctionnalités très attendues](https://opentofu.org/blog/opentofu-1-8-0/), comme une bonne gestion des variables (pas sec mais c'est en bonne voie), la possibilité d'utiliser des extensions .tofu  [et tout un tas d'autres machins](https://opentofu.org/docs/intro/whats-new/). C'est les mecs de chez Hashicorp qui doivent commencer à tirer la gueule.  

[Accéder au lien ->](https://opentofu.org/blog/opentofu-1-8-0/)