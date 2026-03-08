---
layout: post
title: Newsletter du 24 Février 2025
tags: [devops, MySql, Git, Docker, TryHackMe]
comments: true
mathjax: true
author: RudeOps
---

Vous avez été vraiment nombreux à participer au tirage au sort de la dernière newsletter, qui a permis à Thomas "Elhaz" G de gagner le livre "The Phoenix Project". Vous en avez profité pour nous écrire plein de mots super sympas (et drôles) par la même occasion, et ça, ça nous a grave fait plaisir. Vu le succès, on va renouveler ce genre de jeu concours très prochainement, mais en le corsant "légèrement". Stay tuned.  
  
Cyril

### Quoi de neuf ?

🛢️ **Your code is fast, but your database is slow, now what ? :** On a bien aimé ce chouette article des punks de chez System Design Codex, qui nous propose  [d'identifier les goulots d'étranglement](https://newsletter.systemdesigncodex.com/p/your-code-is-fast-but-your-database)  côté bases de données, avec le profiling des requêtes et la surveillance de métriques clés. On parlera solutions, qui incluent l'ajout d'index, l'évitement des  _SELECT *_  et l'utilisation de jointures cauchemardesques. L'article va aussi parler de cache, de pooling de connexions, des vues matérialisées, de sharding et bien sûr de réplications, bref, tout ce qui rend nos amis DBA un peu plus gris et tristes chaque jour qui passe.

**</> How I use git add ---patch for reviewing my work :** Vous êtes un peu maniaque sur les bords et vous ne supportez pas le désordre ? Utilisez git add --patch, qui vous permettra  [une révision interactive de votre travail](https://remimercier.com/git-add-patch/), vous aidera à maintenir facilement des commits atomiques et fera revenir l'être aimé sous trois jours.

**🐳 Tester une image avec Container Structure Test :** On vous partage cet article de notre Stéphane Robert national qui nous présente  [Container Structure Test](https://blog.stephane-robert.info/docs/conteneurs/outils/container-struct-test/), un outil qui permet de valider divers aspects d'une image Docker, comme l'exécution de commandes, ses métadonnées et le contenu du système de fichiers, histoire de s'assurer que l'image est bien conforme aux attentes. C'est un très chouette tuto de l'ami Stéphane qu'on vous recommande comme d'habitude.

**#️⃣ Oha :** On est tombé sur cette appli super carrée comme disent les jeunes, et qui permet de faire des tests de charge sur votre site web favori. On est loin des possibilités d'un Gatling ou d'un JMeter (pas de rampstart etc) mais c'est  [idéal pour faire une première passe](https://github.com/hatoo/oha)  de base et à la portée de tout le monde.

😱 **Smag grotto TryHackMe challenge writeup :** On a adoré lire ce write-up d'un défi tiré de TryHackMe qui nous détaille toutes les étapes pour  [obtenir des accès users et root sur une box cible](https://infosecwriteups.com/smag-grotto-tryhackme-writeup-1018f5ad17df). On verra passer du nmap bien entendu, mais aussi du gobuster, du linPEAS, du reverse-shell bien sale et plein d'autres friandises du même genre. A lire absolument si vous voulez vous initier aux joies du pentesting.

⚡ **Self hosted docker ready open source status page :** Les status page se suivent et se ressemblent, mais dans le doute on a testé Kener, qui v[ous permettra d'aller taper vos APIs et endpoints](https://kener.ing/)  (prend en charge les protocoles HTTP, TCP, DNS, ICMP...) très simplement avec des possibilités de custom à portée de tout le monde. On vous le recommande si vous avez ce genre de besoins.  

**⚔️ A list of proxy ips to help to block KillNet's DDos bots :** [Le bruit des bots.](https://www.theregister.com/2023/02/06/killnet_proxy_ip_list/)

🏆  **Hackropole :** Pour ceux qui ne connaissaient pas, on vous présente Hackropole, la plateforme en ligne développée par l'ANSSI qui propose de rejouer les épreuves du France Cybersecurity Challenge tout au long de l'année. [300 épreuves classées par catégories](https://hackropole.fr/fr/challenges/)  comme la cryptographie, le forensic, le hardware, le pwn, le reverse engineering et le web vous attendent pour combler un weekend pluvieux.

**👨‍💻 How I sent 500 million http requests to 2.5 million hosts :** Un exploit rendu possible  [grâce à une pile techno soigneusement optimisée](https://www.moczadlo.com/2024/how-i-sent-500-million-http-requests-in-under-24h)  et en s'appuyant sur GO, retenu pour sa simplicité et sa rapidité, sur K8s pour sa scalabilité horizontale, et en s'aidant de massdns et fasthttp. Du bien bel ouvrage comme on dit à Montargis.


## Posting, a powerful HTTP client that lives in your terminal.

![](https://storage.mlcdn.com/account_image/325165/8bZ5Iq4Yu86h0OhkYs6OG3Jb8aZW1XHjIasEniyD.png)

Merci à Stéphane V., fidèle lecteur de la première heure, qui nous fait découvrir une application dont il se sert maintenant au quotidien. Posting est une alternative à Postman ou Insomnia, c'est écrit en Python, ça tourne dans un terminal, et toutes les requêtes sont stockées dans du YAML. Merci pour la découverte Stéphane !  

[Accéder au lien ->](https://github.com/darrenburns/posting)