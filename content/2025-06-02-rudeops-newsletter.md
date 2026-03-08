---
layout: post
title: Newsletter du 02 Juin 2025
tags: [devops, ECS, Kubero, Bruno, Packemon]
comments: true
mathjax: true
author: RudeOps
---


Cette semaine, on a croisé des outils qui veulent te simplifier la vie (Loggifly, ClusterSecret), des articles qui font semblant que GitLab + Kubernetes, c’est fluide (spoiler : non), et des tentatives pédagogiques où on te vend AWS ECS comme un terrain de jeu alors que tu vas juste y perdre des heures et un peu de foi.

Et au milieu de tout ça, des bonnes idées, des projets solides, et des développeurs qui continuent d’essayer de faire tenir debout un monde bâti sur du YAML mal indenté.

Si rudeops t’aide à rire, à apprendre, ou à t'éviter un kubectl delete malheureux fais tourner.

Cyril

### Quoi de neuf ?

**👾 Cyber then and now, inside a 2-decade industry evolution :** Il fut un temps où la cybersécurité consistait à colmater des failles dans Windows XP et à éviter les pop-ups douteux. Aujourd'hui, c'est une industrie tentaculaire, peuplée de buzzwords, de solutions miracle et de conférences où l'on parle plus d'IA que de sécurité. Dans cet article, Dark Reading célèbre ses 19 ans  [en retraçant l'évolution de la cybersécurité](https://www.darkreading.com/cloud-security/cyber-then-now-2-decade-industry-evolution). On y découvre comment une poignée de passionnés est devenue une armée de consultants, comment les vulnérabilités se sont multipliées plus vite que les patches, et comment, malgré l’arsenal technologique, on finit quand même par cliquer sur la pièce jointe facture_finale.exe.

⚔️ **Learning ECS the fun way, hosting a Minecraft server :** Lancer un serveur Minecraft, ça devrait être simple : tu lances un JAR, tu ouvres un port, et hop, c’est parti pour 12h de minage frénétique et de constructions absurdes à base de blocs de laine rose. Mais dans cet article, Konstantinos Siaterlis a décidé de corser le jeu : et si, au lieu de double-cliquer sur un exécutable, tu apprenais  [à déployer un serveur sur AWS ECS](https://www.thelastdev.com/p/learning-ecs-the-fun-way-hosting), avec des instances EC2, du Terraform, un load balancer, et juste assez de YAML pour décourager un Creeper ? Bien sûr, Minecraft n’est qu’un prétexte. Ce n’est pas le gameplay qui t’intéresse ici, c’est tout le bordel qu’il faut mettre en place pour faire tourner une bête image Docker dans un cluster managé par ECS. Task definitions, security groups, VPC, IAM, ALB... bref, tout ce que Mojang ne t’a jamais appris à crafter.

🥇  **Loggifly :** Imagine un outil qui mate les logs de tes conteneurs Docker comme un stalker à moitié parano, prêt à hurler dès qu’il voit passer un “Error” un peu louche ou un "panic" de trop. C’est Loggifly :  [il scanne tes containers](https://github.com/clemcer/loggifly), cherche les mots-clés ou regex que t’as définis, et balance des alertes dès que ça commence à sentir la combustion spontanée. Et parce qu’il n’a aucune confiance en toi (à juste titre), il peut aussi arrêter ou redémarrer un conteneur s’il détecte un gros mot, genre "Segfault" ou "ElasticSearch". Tu peux le connecter à Ntfy, Apprise, des webhooks, et même ton frigo connecté si t’as envie.

☸️ **Kubero, Open Source solution for Kubernetes deployments :** Kubero,  [c’est une plateforme "as a service" open source](https://www.kubero.dev/)  qui te promet de déployer, gérer et faire scaler tes applis sur Kubernetes sans avoir à vendre ton âme ni à lire la doc de Helm jusqu’à l’aube. Autoscaling, haute dispo, GitOps intégré, et tout un tas d’add-ons et de templates prêts à cliquer. Et pour te prouver qu’ils sont pas là pour déconner, ils te filent aussi le monitoring intégré, l’authentification, le scan de vulnérabilités, et même une interface web et une CLI, histoire de ne fâcher personne. En résumé, tu veux Kubernetes, mais sans la douleur ? Kubero veut te faire croire que c’est possible.

🏹 **Github Actions vs Jenkins :** Dans un coin, GitHub Actions, jeune, hype, intégré, qui te promet des déploiements faciles tant que tu restes bien sage dans l’écosystème. Dans l’autre, Jenkins, le vieux bourrin increvable, moche mais libre, capable de tout faire… si tu survis à sa config XML et à ses plugins en carton. [L’article des mecs de chez Buildkite compare les deux](https://buildkite.com/resources/blog/github-actions-vs-jenkins-making-the-right-choice-for-your-team/). Spoiler : y’en a pas un pour rattraper l’autre sans un bon café et un peu de haine dans le cœur.

🚀  **Bruno :** Dans les ruelles de Montargis, on murmure son nom comme une légende urbaine. À la boulangerie, chez le coiffeur, même au rayon surgelés du Carrefour Market, une question revient :  _"T’as testé Bruno ?"_. Et pour une fois, il ne s’agit pas d'un énième chanteur recalé de l'Eurovision,  [mais d’un client API open source](https://github.com/usebruno/bruno), local-first, qui te laisse bosser sans cloud, sans login, sans fioritures.

![](https://storage.mlcdn.com/account_image/325165/8KOzAO85zllygCVHOxSuKVJtjSels32hWpxiu6yp.png)

# Un concentré d'infos pour les devs par un dev.

Les développeurs, ces étranges mammifères à hoodies, capables de réciter la syntaxe de reduce() en JavaScript mais incapables d’ouvrir un lien sans le CMD+C/CMD+V dans leur terminal préféré. Des êtres brillants, oui, mais parfois un peu... absorbés. Par leur IDE. Ou leurs erreurs de typage. Ou cette promesse de "refacto demain" qui traîne depuis six sprints.

Heureusement,  **HappyToDev**  est là. Une newsletter hebdo, pleine de liens triés pour eux, comme on trie des légumes au marché : mûrs, digestes, et pas trop techniques, sinon ça les braque. On y trouve des actus dev, des vidéos, des interviews, des morceaux de veille pour nourrir leur esprit tout en douceur parce qu’une surcharge neuronale pourrait perturber leur flow.

C’est bien écrit, ça se lit en moins de 10 minutes (important), et surtout, ça leur donne l’impression de rester informés sans jamais quitter leur bulle de confort VS Code + DuckDuckGo + StackOverflow.

[Consulter](https://happytodev.substack.com/)


**🕸 Packemon, packet monster :** C’est pas Wireshark, c’est pas joli, mais c’est clair, rapide, et ça tient dans un TUI. Packemon te permet d’explorer ce qui  [transite sur ton interface réseau](https://github.com/ddddddO/packemon)  sans avoir à lancer une appli lourde ni à te perdre dans des menus en cascade. Tu vois passer les paquets, tu filtres, tu observes, c’est un peu rugueux, mais ça fait le boulot.

**🐧 Linux cgroup, from first principles :** On vous partage ce joli post qui descend en rappel dans /sys/fs/cgroup pour  [nous expliquer les cgroups v2 sans fioritures ni magic wrapper](https://fzakaria.com/2025/05/26/linux-cgroup-from-first-principles), juste les principes de base, les fichiers système, et une bonne dose de sueur. On va apprendre à limiter la mémoire, le CPU, et l'envie de hurler devant systemd. Bref, c’est moche, c’est bas niveau, c’est Linux. Et c’est fascinant.

💝 **Top 11 application logging tools for DevOps engineers in 2025 :** Les outlaws de chez Last9 nous partagent une  [sélection des meilleurs outils de gestion des logs en 2025](https://last9.io/blog/top-application-logging-tools/). Au menu : une galerie d'outils allant de Sematext Logs, qui promet une surveillance des logs et de l'infrastructure sur une seule plateforme, à Logtail, qui mise sur une interface épurée et des fonctionnalités modernes. On retrouve également des classiques comme Grafana Loki, pour ceux qui veulent intégrer la gestion des logs dans leur stack Prometheus/Grafana, et Logz.io, qui propose une solution basée sur l'ELK Stack avec une touche d'IA. Chaque outil est présenté avec ses forces, ses faiblesses, et surtout, son adéquation à différents cas d'usage : que vous soyez une startup en quête de simplicité ou une entreprise établie avec des besoins complexes en observabilité.

🤖 **Nerdlog :** Nerdlog est un  [visualiseur de logs en interface texte](https://github.com/dimonomid/nerdlog), rapide, orienté vers les connexions distantes, capable de gérer plusieurs hôtes simultanément, avec un histogramme de la chronologie et sans centralisation. Du bien bel ouvrage.  

😱 **Detecting malicious Unicode :** Daniel Stenberg nous relate une mésaventure survenue au sein du projet curl : un contributeur a remplacé une lettre ASCII  [par son équivalent Unicode visuellement identique](https://daniel.haxx.se/blog/2025/05/16/detecting-malicious-unicode/)  dans une URL. Résultat ? Aucun membre de l'équipe ni outil d'intégration continue n'a détecté la supercherie. Une démonstration édifiante de la manière dont des caractères Unicode "confusables" peuvent passer inaperçus et potentiellement introduire des vulnérabilités.


## Devops web development success, a project manager's handbook

![](https://storage.mlcdn.com/account_image/325165/EipbH28lOYLYtVLmlTenhkkTofbQIzZ5m8EnfOSC.png)

Merci à Claire T qui nous a partagé cet article des mecs de chez Netguru qui ont décidé de prendre le taureau par les cornes et d'expliquer aux chefs de projet que le DevOps, ce n'est pas juste une mode pour les barbus en hoodie. Non, c'est une vraie philosophie qui pourrait bien éviter à ton projet de finir en feu de joie le jour du déploiement. L'article détaille comment intégrer les pratiques DevOps dans le développement web, avec des mots doux comme "intégration continue", "déploiement automatisé" et "monitoring en production". Le tout saupoudré de conseils pour que développeurs et ops arrêtent de se regarder en chiens de faïence. En somme, un guide pour que ton projet web ne se transforme pas en Titanic numérique, et que ton équipe puisse enfin respirer entre deux sprints.  

[Accéder au lien ->](https://www.netguru.com/blog/devops-web-development)