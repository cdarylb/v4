---
layout: post
title: Newsletter du 06 Janvier 2025
subtitle: Comme les Rois Mages en Galilée				
thumbnail-img: /assets/img/Alain-peche.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, SRE, Gosearch, Gitleak, nmap, Ghostty]
comments: true
mathjax: true
author: RudeOps
---

Que cette année 2025 soit synonyme de projets ambitieux, d’automatisations réussies et de systèmes toujours plus robustes, on vous souhaite à tous le meilleur mais surtout la santé etc etc. Comme d'habitude, pour cette année 2025, on continuera à vous partager ce qui a attiré notre attention durant notre veille tech, et on espère que vous serez toujours aussi contents et nombreux à nous lire (merci d'ailleurs à tous ceux qui nous envoient des emails d'encouragement ou de partage de liens, c'est vraiment adorable).  
  
Cyril

### Quoi de neuf ?

👨🏻‍💻 **HTB-Sea CVE2023-41425 :** Rien de tel que de commencer l'année avec un chouette article qui nous détaille  [l'exploitation d'une vulnérabilité sur une box Linux](https://infosecwriteups.com/htb-sea-cve-2023-41425-113db350f1a6). C'est toujours fascinant de voir les étapes s'enchaîner, du scan initial jusqu'à la prise en main, et toujours instructif de voir que les outils utilisés sont de plus en plus performants et à la portée de tout le monde.

🚀 **The evolution of SRE at Google :** Un article au moins aussi dense qu'une déclaration d'impôts mais passionnant, et qui explore l'évolution de SRE chez Google. On y apprend que la startup familiale de Mountain View a adopté un nouveau framework, STAMP ( pour  [System-Theoretic Accident Model and Processes](https://www.usenix.org/publications/loginonline/evolution-sre-google)), qui se concentre sur la compréhension et la gestion des interactions complexes au sein des systèmes, plutôt que sur la prévention des défaillances individuelles des composants.

🐧 **Immutables linux distros, are they right for you ? Take the test :** Un article qui parlera sans doute aux plus radicalisés des linuxiens et qui instillera le doute en vous :  [avez-vous besoin d'une distro immuable](https://linuxblog.io/immutable-linux-distros-are-they-right-for-you-take-the-test/)  ?  

🕵🏻 **Gosearch :** Les frameworks OSINT et outils associés n'ont jamais été autant à la mode, alors comme tout le monde on teste tout et n'importe quoi, et on est tombé sur  [Gosearch](https://github.com/ibnaleem/gosearch), une app sympa développée en Go qui permet de rechercher les empreintes numériques associées à un nom d'utilisateur spécifique sur diverses plateformes en ligne, et qui intègre diverses bases de données comme celle de BreachDirectory.org.

**</> Gitleaks :** Un  [énième outil](https://github.com/gitleaks/gitleaks)  vous permettant de détecter des secrets tels que des mots de passe, des clés API et des tokens dans des repos Git, des fichiers, ou tout autre élément que vous souhaitez lui fournir via stdin. On apprécie sa légèreté et sa simplicité d'utilisation.

😱 **Useful nmap scripts for ethical hackers :** Un bel article qui présente  [plusieurs scripts nmap](https://www.freecodecamp.org/news/useful-nmap-scripts-for-ethical-hackers/)  essentiels pour les white hats en herbe, facilitant l'audit et la sécurisation des réseaux.

🏆  **Ghostty :** On vous en parlait il y a quelques semaines, et c'est maintenant chose faite, Ghostty,  [le meilleur terminal du monde](https://ghostty.org/)  (pour Linux et MacOS) vient de sortir en version publique, et on vous encourage fortement à l'essayer.


## S3 is the new SFTP

![](https://storage.mlcdn.com/account_image/325165/i47xEy8IypUX1LWnYQgzcyPBn2rIZoSKGy3GzBgq.png)

Merci à Thomas R. qui nous partage un article qui explore l'évolution des méthodes de partage de données entre entreprises : on y apprend que les protocoles comme SFTP sont ttrès souvent utilisés pour échanger des fichiers comme des rapports financiers ou des relevés de transactions, et qu'avec avec l'avènement des technos cloud, des solutions comme Amazon S3 gagnent en popularité pour ces échanges.  

[Accéder au lien ->](https://materializedview.io/p/s3-is-the-new-sftp)