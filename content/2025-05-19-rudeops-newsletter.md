---
layout: post
title: Newsletter du 19 Mai 2025
tags: [devops, Redis, K8s, Pentest, Git]
comments: true
mathjax: true
author: RudeOps
---


Chaque semaine, on se dit que ça va rouler. Une image Docker allégée, une CI qui tourne, des métriques qui tiennent la route. Et pourtant : le binaire Rust pèse une tonne, GitLab se noie dans le YAML, et ta base de logs t’envoie des alertes pour te prévenir qu’elle s’auto-détruit lentement.

Alors on cherche mieux, plus simple, plus clair. Cette semaine : on découvre comment faire du FROM scratch proprement, on explore GreptimeDB (le TSDB qui veut tout faire sauf ton café), on tente de dompter Git avec GitSpice, et on se demande si tout ça valait vraiment la peine. Spoiler : oui, un peu, quand même.  
  
Cyril

### Quoi de neuf ?

🏃‍♂️  **Good news ! Redis is open source again :** La base clé-valeur préférée de tous ceux qui veulent aller très vite vers des crashs très violents a décidé de faire machine arrière : après avoir viré de bord avec des licences foireuses genre "open sauf pour toi", les voilà qui  [reviennent sagement sous AGPLv3](https://redis.io/blog/agplv3/). Officiellement, c’est pour "reconstruire la confiance" avec la communauté. Officieusement, on imagine que la vague de forks, la mauvaise presse, le projet Valkey soutenu par la Linux Foundation, et les regards noirs dans les conférences y sont peut-être pour quelque chose.

💝 **I use zip bombs to protect my server :** Y’en a qui configurent Cloudflare, d’autres qui s’amusent avec des WAF ou du rate limiting raffiné. Et puis il y a Ibrahim Diallo, qui a choisi une méthode bien plus rustique (et délicieusement mesquine) : balancer des zip bombs aux bots malveillants. [Le principe est aussi simple que cruel](https://idiallo.com/blog/zipbomb-protection)  : un fichier compressé ridiculement petit qui, une fois décompressé par un bot trop curieux, explose à 10 Go. Résultat ? Mémoire saturée, processeur en PLS, et bot potentiellement à genoux. On valide.

🥇  **Replacing Kubernetes by systemd :** Voltaire disait que "le superflu est une chose très nécessaire", mais il ne connaissait pas Kubernetes le bougre. Dans son article aussi lucide que rafraîchissant, Yaakov raconte comment il a viré son cluster K8s au profit d’un setup infiniment plus sobre :  [Podman + systemd](https://blog.yaakov.online/replacing-kubernetes-with-systemd/). Résultat : moins de conso, moins de friction, et surtout, moins de syndrome de Stockholm à chaque redéploiement.  

🛠️ **Wtfis :** Marre de jongler entre whois, dig, et une douzaine d'onglets dans le navigateur pour obtenir des informations sur un domaine ou une IP suspecte ?  [Wtfis est là pour toi](https://github.com/pirxthepilot/wtfis). Ce petit bijou en ligne de commande interroge plusieurs services OSINT comme VirusTotal, Shodan, et AbuseIPDB pour fournir des informations détaillées sur une cible donnée, le tout dans un format lisible et coloré voire festif diront certains après plusieurs bières un samedi soir mais je m'égare.

🦊 **Getting started with Gitlab CI/CD pipeline :** Il arrive un moment où balancer du code en prod à la main, en SSH à 23h, n’a plus rien d’excitant. Alors tu te penches sur GitLab CI/CD, pas parce que c’est à la mode, mais parce que tu veux que ça tienne debout, même quand tu dors. L’article des cowboys de chez Devtron t’explique  [comment poser les premières briques d’un pipeline](https://devtron.ai/blog/how-to-setup-gitlab-ci-cd-pipeline/)  sans sombrer dans une indigestion de YAML. C’est clair, propre, sans fumée magique, et ça te permet enfin de passer du bricolage fébrile à une mécanique un peu plus digne.

**👨🏻‍💻 Free ressources to learn pentesting in 2025 :** Il fut un temps où se lancer dans le pentest relevait du parcours du combattant : entre les formations hors de prix, les certifications aux noms ésotériques et les ressources éparpillées aux quatre coins du web, il fallait une sacrée dose de détermination pour ne pas abandonner en cours de route. Mais en 2025, les choses ont changé, preuve en est cet article sur InfoSec Write-ups qui recense  [une multitude de ressources gratuites](https://infosecwriteups.com/free-resources-to-learn-pentesting-in-2025-ebeba2a5960d)  pour s'initier au pentest sans dépenser un centime.

**🛢️ GreptimeDB as Prometheus long-term storage :** GreptimeDB, c’est la nouvelle base  [qui veut stocker tout ce que Prometheus oublie](https://blog.anarcher.dev/post/2025/04-13-greptimedb-intro/)  dès que t’as le dos tourné. C’est rapide, cloud-native, plein de promesses… et encore un peu bancal dès qu’on parle de distribuer les données sur plusieurs nœuds. Mais bon, entre Thanos, Cortex et l’enfer des dashboards cassés, y’a peut-être un espoir.

</> **Boosting workflow velocity with git-spice :** GitSpice veut fluidifier les workflows git, en empilant les pull requests comme des crêpes bien rangées, enfin, en théorie.  [L’idée, c’est d’augmenter la vélocité des équipes](https://www.rippling.com/blog/boosting-workflow-velocity-gitspice)  en découpant le travail en couches fines, superposables, relisables, fusionnables. Un rêve d’architecte bien organisé, mais à la lecture, on sent poindre cette éternelle question : est-ce qu’on va vraiment plus vite… ou est-ce qu’on complexifie élégamment un truc qu’on ne maîtrise déjà qu’à moitié ?

#️⃣ **Ali, generate http load and plot the results in real-time :** Tu pensais que ton service tenait la route ? Lance Ali, et regarde-le imploser en direct. Inspiré de Vegeta et jplot, cet outil de test de charge HTTP t'offre une interface en ligne de commande  [avec des graphiques en temps réel](https://github.com/nakabonne/ali). Pas besoin de rapports JSON à analyser pendant des heures : ici, tu vois immédiatement où ça coince.  

🐋 **Docker Compose Generator :** Tu t'apprêtes à monter une stack Docker pour ton serveur perso, mais tu sais que tu vas passer plus de temps à chercher des exemples de docker-compose.yml qu'à réellement déployer tes services. C'est là que  [Compose Generator](https://compose.ajnart.dev/)  entre en scène en te permettant de sélectionner les services que tu veux (Plex, Jellyfin, Sonarr, Radarr, etc.) et en te génèrant un fichier docker compose prêt à l'emploi. Pour une fois que quelqu’un t’aide à faire les choses à moitié mais correctement profites-en.

## How to build small and secure Docker images for Rust (FROM scratch)

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

Merci à Julien T pour le partage de cet article qui explique, avec beaucoup de clarté, comment construire des images Docker vraiment minimalistes pour des applis en Rust, et qui te montre comment faire un multi-stage build propre, linker ce qu’il faut, éviter ce qu’il ne faut pas faire, et ressortir avec une image sécurisée, légère, et prête pour la prod (ou ton cluster de test que tu refuses d’appeler “prod”).  

[Accéder au lien ->](https://kerkour.com/rust-docker-from-scratch)