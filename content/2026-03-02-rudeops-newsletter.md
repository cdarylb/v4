---
layout: post
title: Newsletter du 02 Mars 2026
tags: [devops, KDash, Dockhand, K8s, Docker]
comments: true
mathjax: true
author: RudeOps
---


On nous parle sans cesse de transformation, d'accélération, de nouveaux paradigmes, et chaque mois apporte son lot de tendances, de méthodes, de "game changers" censés redéfinir la manière dont on travaille. Tout semble urgent, stratégique, structurant.

Et pourtant, une grande partie des problèmes qui nous rattrapent ne sont ni exotiques ni futuristes. Ce sont des fondamentaux négligés, des décisions repoussées, des compromis devenus structurels à force d’être tolérés. Rien de spectaculaire, juste du travail qu’on n’a pas eu envie de prioriser.

On préfère souvent lancer quelque chose de neuf plutôt que consolider l'existant, c’est plus visible, plus gratifiant, et plus facile à raconter.

Mais la solidité d’un système tient rarement à ses nouveautés. Elle tient à ce qui a été fait sérieusement, longtemps, et sans bruit.

Cyril

### Quoi de neuf ?

**🔳 KDash, Kubernetes en terminal :** KDash, c'est pour ceux qui ont déjà 14 onglets ouverts, un port-forward qui tourne depuis trois jours, et un  `kubectl get pods-A`  relancé toutes les 30 secondes "juste pour voir".  [Un dashboard K8s en TUI](https://blog.stephane-robert.info/docs/conteneurs/orchestrateurs/outils/kdash/), écrit en Rust, qui tourne dans ton terminal et fait ce qu'on attend d’un outil d'ops en 2026 : montrer l'état du cluster sans te forcer à ouvrir un navigateur. Pods, services, nodes, namespaces, logs, métriques CPU/mémoire le tout rafraîchi en temps réel, bref, une vue globale, navigable au clavier, avec onglets et logs intégrés. Binaire unique, pas de dépendances, ça démarre vite et ça ne discute pas, c'est parfait en complément d'un K9s.

🐋 **Dockhand, modern docker management :** Dockhand, c'est une énième UI Docker, ouais, mais celle-ci tourne sur un Raspberry Pi si besoin, n'appelle personne en douce, et ne vous facture pas le droit de cliquer sur Restart. SQLite par défaut, zéro télémétrie, vuln scanning intégré, SSO gratuit, MFA gratuit. Le RBAC ? Enterprise, évidemment, il faut bien garder un petit cliffhanger financier quelque part. [C'est BSL maintenant, Apache 2.0 plus tard](https://dockhand.pro/). Le code est visible, les promesses aussi, pas de SaaS, pas de cloud mystique, juste une interface pour gérer vos conteneurs sans jongler entre un wiki, trois shells et une prière.

**🚢 Want an easy way to manage Podman containers ? :** Les cowboys de chez The New Stack ont encore dégainé plus vite que leur ombre : "Vous avez quitté Docker ? Pas de panique, voici la GUI." Parce qu'apparemment, il existe encore des outlaws qui n'ont toujours pas compris la différence entre Docker et Podman, mais qui tiennent quand même à cliquer sur des boutons. Podman Desktop, c’est donc le Docker Desktop… sans Docker.  [Dashboard propre](https://thenewstack.io/want-an-easy-way-to-manage-podman-containers-here-it-is/), gestion des conteneurs, images, volumes, pods, support Kubernetes, Compose, extensions, Kind, logs, terminal intégré, Pin's parlant de Patrick Sebastien, le tout gratuit, multi-plateforme, installable en Flatpak pour ceux qui aiment les dépendances bien rangées. En gros, si vous avez migré vers Podman pour des raisons philosophiques, techniques ou existentielles, vous pouvez continuer à faire du point-and-clic en paix.  

☸️ **Managing K8s secrets with Mozilla SOPS and Age :** Kubernetes et les secrets, c'est souvent du base64 maquillé en securité. Autant dire que si ca fuite, ce n'est pas un exploit zero day, juste quelqu'un qui a fait un git clone. [Avec SOPS et age, tu chiffres ton fichier YAML](https://medium.com/@cbaah123/managing-kubernetes-secrets-with-mozilla-sops-and-age-780c84e6ec5e)  avant de le committer. La version dans Git est illisible, la cle reste chez toi, et tu decryptes seulement au moment d'appliquer. Ca ne règle pas tout. Mais au moins, ton mot de passe ne traine plus en clair dans l'historique depuis trois ans.

🏹 **You probably don't need Oh My Zsh :** Oh My Zsh continue d'être recommandé comme si on était en 2015 et qu'on venait de découvrir les thèmes flashy, alors qu'en réalité c'est surtout un paquet de scripts shell qui ralentissent chaque ouverture d’onglet pour afficher un prompt avec trois icônes  [et un plugin git que tu n'utilises pas vraiment](https://rushter.com/blog/zsh-shell/). Un zsh minimal avec compinit, un peu d'historique propre, starship pour le prompt et fzf sur Ctrl+R, et ça fait largement le taffe, en tout cas c'est l'avis du mec qui a rédigé ce billet, on vous laisse seuls juges.

🚀  **Docker log rotation :** Il pensait héberger deux sites statiques tranquilles. Résultat, disque plein, pas à cause du contenu mais à cause des logs Docker. Petite piqûre de rappel : Docker ne fait pas de rotation de logs par défaut.  [Tant que le conteneur existe, le fichier grossit](https://ntietz.com/blog/til-docker-log-rotation/), même si tu redémarres. Même si tu oublies. Surtout si tu oublies. La Solution ? Configurer le daemon avec un max-size et un max-file dans /etc/docker/daemon.json, redémarrer Docker, recréer les conteneurs, et fin de la game comme on dit à Montargis.

![](https://storage.mlcdn.com/account_image/325165/TzR91OWe1jX0uUw9cB3bKwX3cNsjDx4Qwu3GJm65.png)

# Je suis en train de refondre la landing page de RudeOps, notamment parce que l'actuelle commence sérieusement à sentir la naphtaline.

Pour être honnête, elle avait été bricolée vite fait sur un Jekyll un week-end et par pure flemme, je n'ai jamais vraiment pris le temps de bosser dessus correctement.  

Pour cette nouvelle version, j'aimerais mettre en avant des témoignages de lecteurs, pas des slogans marketing en plastique, mais une ou deux lignes sincères : ce que RudeOps vous apporte, pourquoi vous lisez la newsletter, ce qui vous est utile (ou même ce qui vous fait râler).

Si vous êtes partant, j'afficherai votre prénom, votre rôle, et un lien vers votre LinkedIn ou GitHub.

L'idée est simplement que le site reflète un peu mieux la communauté qui lit RudeOps (et vous êtes maintenant un sacré bon paquet).

Si cette veille vous a déjà servi à quelque chose (même à lever les yeux au ciel), envoyez-moi deux lignes à  **[cyril@rudeops.com](https://preview.mailerlite.io/preview/325165/emails/180096858688849276)**.

Promis : pas de tunnel de conversion, juste une landing page un peu moins triste.  


🏃‍♂️  **De F à A+ sur HTTP Observatory :** Un chouette retour d'expérience sur un sujet qu'on oublie trop souvent :  [les headers HTTP](https://blog.zwindler.fr/2026/02/20/securite-headers-http-observatory-hugo/). On optimise les images, on gagne 300 ms, on compresse en AVIF, on tweake nginx… et pendant ce temps-là, HTTP Observatory nous met un F bien propre. Zéro pointé, parce que oui, même un blog statique peut être mal configuré. Ce REX montre à quel point on néglige HSTS, X-Content-Type-Options, Referrer-Policy et surtout une vraie Content-Security-Policy, et comment une CSP un peu stricte peut transformer un thème Hugo "qui marche" en chantier d’overrides, de scripts externalisés et de styles nettoyés à la main. C'est concret, sans bullshit, avec les pièges nginx, les add_header qui s'écrasent, les unsafe-inline qui traînent partout et les aller-retours console + reload jusqu'à obtenir le fameux A+. Moralité : les headers, ce n’est pas sexy, mais c'est souvent la différence entre "ça fonctionne" et "c'est propre". Et on ferait tous bien de relancer Observatory sur nos side-projects. Juste pour voir.

💝 **Getting started with Windsurf and CircleCI :** Encore un "getting started" où l'IA va révolutionner ton workflow, et cette fois avec Windsurf, un IDE "AI-native" (rien que ça) branché à CircleCI pour que ton assistant code plus vite que toi et que la CI ramasse les morceaux. Le pitch est simple : l'IA génère des modules entiers en 30 secondes, mais ne sait pas que ton projet a 12 contraintes implicites, 4 tests bancals et une config YAML écrite un dimanche soir. Donc on colle CircleCI derrière, parce que oui, quand tu produis du code à la chaîne,  [il vaut mieux un filet de sécurité qui tourne à chaque push](https://circleci.com/blog/getting-started-with-windsurf-and-circleci/). L’article montre donc comment brancher Windsurf à CircleCI via MCP, balancer ton token API dans un JSON, et demander à ton assistant de fixer les bugs et autres joyeusetés.

🥇 **Git in Postgres :** Un radicalisé du "tout dans Postgres" a décidé de tester un truc simple :  [et si git n'était qu’un backend SQL](https://nesbitt.io/2026/02/26/git-in-postgres.html)  un peu mal assumé ? Résultat : objets et refs dans deux tables, libgit2 branché dessus, et un remote helper pour que ton git clone parle en réalité à PostgreSQL sans le savoir. Tu push, tu fetch, tu vis ta vie, derrière, c’est du SELECT. Le vrai intérêt, c'est côté forge : commits, issues et metadata dans la même base. Plus de repos qui traînent sur le filesystem, plus de shell-out vers git pour afficher une page web, plus de backup en deux morceaux.  

😱 **SSHStalker botnet brute-force its way onto 7K linux machines :** Un botnet qui brute-force du SSH avec mot de passe faible, qui exploite des kernels Linux 2.6 datant de 2009, qui installe ses clés, nettoie ses logs et parle via IRC comme au bon vieux temps.  [Sept mille machines compromises](https://www.csoonline.com/article/4130967/sshstalker-botnet-brute-forces-its-way-onto-7000-linux-machines.html), la moitié aux États-Unis. Pas avec une 0-day magique. Avec la routine. Le plus ironique ? Pour l'instant, pas de ransomware spectaculaire, pas de minage massif, juste de la persistance, un peu comme si quelqu'un empilait tranquillement des accès pour plus tard, pendant que les propriétaires des serveurs continuent leur journée. La défense recommandée tient en trois phrases presque embarrassantes : désactiver les mots de passe SSH, utiliser des clés, patcher. On peut débattre des menaces dopées à l'IA et des APT sophistiquées, mais en 2026 on tombe encore parce qu’un serveur oublié accepte un mot de passe faible sur le port 22.


## Inside Frenzy Works: The maker space where being bad at things is the point

![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)

  

Merci à Mohammed T pour le partage.

Au milieu du vacarme sur l'IA qui code plus vite que son ombre, cette vidéo fait un pas de côté plutôt salutaire. Ritvi Mishra y parle d'open source, d'authenticité, et surtout de son maker space, Frenzy Works, un endroit conçu comme un espace conçu pour être mauvais.

Oui, mauvais. Débutant. Approximatif. En apprentissage.

À l’heure où les contributions affluent, parfois brillantes, parfois juste vibe-checkées par une IA, le rappel est simple : ce qui compte, ce n'est pas la perfection, mais l'intention et la sincérité. Les communautés open source ont toujours mieux fonctionné avec des passionnés un peu nerds qu'avec des profils trop lissés.

La vidéo est chouette à suivre, très naturelle, sans storytelling forcé.

Et ça fait du bien d’entendre qu’être nul quelque part n’est pas un bug. C’est le point de départ.

[Accéder au lien ->](https://allthingsopen.org/articles/frenzy-works-maker-space-safe-place-to-fail)