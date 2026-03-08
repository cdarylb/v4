---
layout: post
title: Newsletter du 22 Décembre 2025
tags: [devops, Docker, Dockcheck, Owasp, OpenCVE]
comments: true
mathjax: true
author: RudeOps
---


Bonnes fêtes à celles et ceux qui lèvent le pied, et courage à ceux qui tiennent la boutique pendant que le reste du monde mange des chocolats industriels. Que vous soyez d’astreinte, en prod, ou simplement coincés entre deux réunions inutiles, on pense à vous.

Le boulot paie les factures et alimente les serveurs, mais ça reste le décor. Ce qui compte vraiment, ce sont les amis, la famille, les gens avec qui on partage autre chose que des tickets, autour d’une table, dans un message, à travers un silence qui repose, ou ce rare moment où personne ne vous glisse un "juste un petit truc avant Noël".

La veille continue, la tech aussi, mais tout ça n’est pas important. Prenez soin de ce qui compte, le reste attendra bien janvier.  
  
Cyril

### Quoi de neuf ?

**🐋 DockCheck :** Dockcheck est un chouette outil qui permet de gérer et automatiser les mises à jour d’images Docker  [sans y passer ses soirées](https://github.com/mag37/dockcheck). Ça tourne en interactif ou en unattended, ça notifie quand il faut, ça fait des backups avant de casser quoi que ce soit et ça nettoie après. Bref, de quoi arrêter de repousser les updates en se disant "on verra plus tard".  

💝 **Is your CI/CD tool helping or hindering performance :** Olga Bedrina se penche sur une question que tout le monde connaît mais que peu osent formuler clairement : est-ce que ta CI/CD est vraiment un levier, ou juste un décor technique qu’on contourne en silence ? [En s'appuyant sur les métriques DORA](https://blog.jetbrains.com/teamcity/2025/12/is-your-ci-cd-tool-helping-or-hindering-performance/), l'article rappelle surtout une évidence qu’on préfère souvent ignorer : quand les déploiements prennent du temps, cassent trop souvent ou deviennent imprévisibles, ce n’est pas toujours un problème de méthode ou de volonté, très souvent c’est l’outillage lui-même qui impose son rythme, ses limites, et sa logique interne, au détriment du travail réel.

🥇  **Upcoming change to Let's Encrypt certificates :** Let's Encrypt continue de faire évoluer les fondations du web sans tambours ni trompettes. Nouveaux certificats racine, nouvelle hiérarchie Generation Y, fin progressive du TLS client auth et certificats à durée de vie raccourcie.  [Rien de spectaculaire, mais beaucoup de prévention](https://community.letsencrypt.org/t/upcoming-changes-to-let-s-encrypt-certificates/243873). Pour la majorité des utilisateurs, bonne nouvelle, il n'y a rien à faire, la bascule se fera automatiquement en 2026. Ceux qui s’accrochent encore à des usages plus anciens ont un court sursis, pas une amnistie.

😱  **Hardened images for everyone :** Docker annonce un grand geste :  [ses images "hardened" deviennent gratuites et open source](https://www.docker.com/blog/docker-hardened-images-for-every-developer/). En clair, des images Docker plus petites, plus propres, avec moins de CVE qui clignotent en rouge dans les scanners, et sans clause planquée au fond de la licence. Le discours est simple : la supply chain est un champ de mines, autant commencer avec des briques un peu moins friables. Transparence totale, SBOM inclus, pas de CVE maquillées pour garder un dashboard vert fluo. Alpine et Debian restent la base, histoire de ne pas réapprendre à marcher. Évidemment, si tu veux des SLA, du patch en urgence ou survivre après l'EOL, ça reste payant. Mais pour le commun des mortels, tirer une image "hardened" sans sortir la carte bleue, c’est déjà un progrès notable, pas révolutionnaire, mais suffisamment sain pour mériter un pull.

🏹 **5 incident management lessons to carry into 2026 :** Les cowboys de chez The New Stack nous partagent ce papier, et surprise, il parle surtout de maturité. En 2025, ceux qui s’en sont sortis n’étaient pas les plus brillants,  [mais les mieux organisés](https://thenewstack.io/5-incident-management-lessons-to-carry-into-2026/). Des rôles clairs, des runbooks, et quelqu'un qui pilote pendant que d'autres réparent. L'IA aide à filtrer le bruit et à automatiser le pénible, mais les décisions restent humaines. Le vrai changement, c’est que l’incident sort enfin du seul monde IT. Support, sécu, métier : tout le monde est concerné. En 2026, les systèmes casseront encore, et la différence se fera entre ceux qui s’entraînent et ceux qui improvisent.

🚀  **UptimeKit :** On a découvert cette appli durant notre veille, et elle coche une case simple mais souvent oubliée : savoir si ça répond, sans monter une usine à gaz.  [UptimeKit fait du monitoring depuis le terminal](https://github.com/abhixdd/UptimeKit-CLI), en daemon, avec un tableau de bord en TUI et juste ce qu’il faut de métriques pour savoir si ton service est vivant ou fait semblant. HTTP, ping, DNS, certificats SSL, notifications locales ou webhooks, c'est léger, lisible, et ça s'installe en deux commandes. Pas de promesse démesurée, juste un outil honnête pour garder un œil sur ses services sans ouvrir quinze onglets.

![](https://storage.mlcdn.com/account_image/325165/79MxTzErnQIqpfKP7s7fV6Pkm9dS71AxoUtouZG5.png)

Si vous vous intéressez un tant soit peu à la sécurité (ou si, par un malheureux concours de circonstances vous vous êtes retrouvé affublé du badge "DevSecOps" sans qu'on vous demande votre avis), l'analyse que  [Jim Burger vient de publier après avoir parcouru le Top Ten 2025](https://octopus.com/blog/20-years-of-appsec) (encore en Release Candidate) de l'OWASP a quelque chose de délicieusement cruel. On y retrouve cette saveur étrange, à la fois réconfortante et accablante : réconfortante, parce que les vieilles vulnérabilités sont toujours là, fidèles au poste comme de vieux camarades de régiment, et accablante, parce qu’elles continuent, vingt ans plus tard, à nous dynamiter joyeusement les systèmes.

Ce que son état des lieux souligne, avec un sens aigu de la lucidité un peu désabusée, c’est que malgré la fièvre des pipelines CI/CD "shift-leftés", des scanners "AI-powered" et des tableaux de bord qui scintillent comme un cockpit de navette spatiale, nous retombons encore et toujours sur les mêmes écueils que nos aînés. L'injection, par exemple, n'a pas disparu, elle a simplement changé de costume, passant du SQL au NoSQL, puis au GraphQL, avant d'essayer une carrière dans les prompts d'IA. Broken Access Control, lui, reste numéro un comme si l'ensemble de l’industrie avait signé un pacte secret pour ne jamais vraiment vérifier qui a le droit de voir quoi. Quant à la supply chain, elle tient désormais plus du mythe forestier : un écosystème de centaines de milliers de dépendances, entretenu par des mainteneurs bénévoles dont la moitié a probablement oublié qu’ils avaient créé un package.

Pour autant, l'article n’est pas une lamentation, mais plutôt un miroir poli avec soin qui ne nous fait pas de cadeau et qui nous rappelle que les menaces ne deviennent pas forcément plus sophistiquées : c’est nous qui construisons un terreau toujours plus fertile pour les mêmes vieilles vulnérabilités. Nous avons industrialisé l'intégration, automatisé l'analyse, gouverné par la policy-as-code… mais nous avons oublié qu'aucun outil ne remplacera jamais la compréhension des mécanismes fondamentaux, ni cette méfiance instinctive envers n’importe quelle entrée utilisateur qui sent vaguement l'aventure.

Si ce futur Top Ten 2025 nous apprend encore quelque chose, c'est que la sécurité n'avance pas en ligne droite mais en boucle. Nous bâtissons des architectures plus complexes, des chaînes plus longues, des systèmes plus distribués, et nous y déployons, avec constance, les mêmes erreurs que celles de 2004, simplement transposées dans un décor plus moderne.  

🏃‍♂️  **OpenCVE :** On a aussi croisé dans notre veille OpenCVE, et cocorico discret, l’outil est signé Nicolas Crocfer, Team Lead DevOps chez OVH, comme quoi, on sait faire autre chose que des slides PowerPoint et des outages mondiaux. OpenCVE donc,  [c’est une plateforme de veille CVE](https://github.com/opencve/opencve)  qui fait exactement ce qu’on lui demande : agréger les vulnérabilités depuis les bonnes sources, te laisser filtrer, trier, taguer, suivre les évolutions et recevoir des alertes sans transformer ta boîte mail en décharge toxique. Par produit, par éditeur, par gravité, avec historique, dashboards et rapports, histoire de garder un minimum de contrôle sur le chaos permanent des CVE. Ça existe en SaaS pour les pressés, et en self-hosted pour ceux qui aiment savoir où vivent leurs données. Pas révolutionnaire, mais propre, efficace, et clairement pensé par quelqu’un qui vit avec les vulnérabilités au quotidien plutôt que de les découvrir dans un audit annuel.

⚡ **Nixopus :** Nixopus se présente comme une alternative open source à Vercel, Heroku ou Netlify, avec la promesse habituelle :  [un clic, ça déploie](https://github.com/raghavyuva/nixopus), zéro config, zéro SSH, et une jolie interface pour te donner l’impression que l’infra n’existe plus. Dans les faits, on est encore en alpha, donc surtout prêt à casser, pas à encaisser de la prod, mais sur le papier, la checklist est complète : terminal intégré pour quand ça tourne mal, gestion de fichiers façon explorateur, monitoring temps réel, SSL automatique, intégration GitHub et reverse proxy géré par Caddy. Le package SaaS classique, version self-hostable, avec en bonus la liberté de regarder sous le capot. À garder sous le coude, donc. Pas pour remplacer demain ce qui tourne déjà, mais pour rappeler que le rêve d’un PaaS simple, open source et sans abonnement mensuel existe toujours. En phase alpha, évidemment.

🐍 **Use Python for scripting :** L’article part d’une scène familière : un script shell qui fonctionne parfaitement chez son auteur… et s'écroule dès qu’il croise un Mac, un autre Linux, ou une CI un peu trop propre. GNU contre BSD, options qui changent, commandes qui n’existent pas, et soudain,  [le petit script devient patrimoine technique](https://hypirion.com/musings/use-python-for-scripting). Le constat est simple : Bash, c'est très bien tant que ça reste minuscule, lisible et jetable. Dès que ça commence à accumuler des conditions, des substitutions obscures, et des incantations que plus personne n’ose toucher, ça devient une dette… avec un shebang. Python arrive alors non pas comme une solution sexy, mais comme une solution qui tient. Installé partout, compréhensible par à peu près tout le monde, doté d’une bibliothèque standard cohérente, il permet d'écrire des scripts qui survivent aux machines, aux systèmes, et aux humains.  

## I got hacked, my server started mining Monero this morning

![](https://storage.mlcdn.com/account_image/325165/ZQnyEP9pdesJ7X8SGo8b0QWZiTXeXxHTpzoVkCAT.png)

  

Merci à Marc pour le partage de ce retour d’expérience aussi passionnant que légèrement anxiogène.

Résumé des épisodes précédents : "je n’utilise pas Next.js" n'a jamais empêché Next.js de s’inviter chez vous par l’intermédiaire d'une dépendance bien intentionnée. Résultat : un container d'analytics tranquillement exploité pour miner du Monero, un mail d’abuse Hetzner au réveil, et un load average digne d'un stress test.

La bonne nouvelle, c’est que Docker a fait son boulot. Container non root, pas de volumes, pas de privilèges, pas d'évasion. On supprime le container, on respire, on active enfin le firewall qu’on repoussait depuis six mois, et on apprend deux ou trois choses utiles sur ses dépendances, ses images, et son hygiène de base.  

[Accéder au lien ->](https://blog.jakesaunders.dev/my-server-started-mining-monero-this-morning/)