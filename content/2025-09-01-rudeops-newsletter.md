---
layout: post
title: Newsletter du 01 Septembre 2025
tags: [devops, Github, Git, Docker, Wazuh]
comments: true
mathjax: true
author: RudeOps
---

Bonne rentrée à toutes et tous. On rallume les écrans, on éteint les promesses trop brillantes, et on remet la machine en marche sans demander l’autorisation à Git.

Au menu des sujets récents : Wazuh en prod sans rançon à la ligne, cURL qui se balade jusque dans les voitures (oui, votre SUV fait des GET), Vim qui prétend être un bureau complet et le fait plutôt bien, un petit  _git rebase --rebase-merges_  pour larguer les commits qui n’auraient jamais dû naître, Copyparty pour partager des fichiers sans monter une cathédrale, et des astuces GitHub Workflows pour que la CI arrête de ronger vos week-ends.  

Cap sur l’utile : automatiser, documenter, livrer. Bon courage, et bravo d’avance pour les petites victoires de la semaine.  
  
Cyril

### Quoi de neuf ?

🏃‍♂️ **Auf Wiedersehen Github :** C'est le psychodrame de l'été, Thomas Dohmke, boss de GitHub,  [démissionne pour monter une startup](https://github.blog/news-insights/company-news/goodbye-github/). Résultat, plus de CEO et GitHub est digéré fissa par la division CoreAI de Microsoft. L’indépendance ? C’était sympa, merci d’être passés. Officiellement, tout va bien : un milliard de dépôts, Copilot qui cartonne, 150 millions de devs… Dans les faits, GitHub devient juste un appendice de la machine IA de Redmond. L’open-source survivra, bien sûr, mais il faudra désormais l’écrire avec une astérisque  _"propulsé par Microsoft"_, ou lorgner du côté de Gitlab par exemple.

🤖 **Wazuh :** Wazuh, c’est le SIEM/XDR qui ne te facture pas le droit de regarder tes propres logs. Pendant que les suites "enterprisées" empilent des stickers "AI" et des abonnements à rallonge, lui fait le taffe : collecte, corrélation, détection, FIM, vulnérabilités, conformité… le tout open source, sans chorégraphie PowerPoint. Et comme chez RudeOps on préfère les paquets aux promesses,  [votre serviteur a pondu un papier maison qui déroule l’installation dockerisée](https://www.linkedin.com/pulse/s%25C3%25A9curiser-son-homelab-et-les-pc-des-ados-avec-wazuh-une-beaufrere-2inae/), le déploiement des agents multi-OS et deux-trois intégrations utiles pour transformer vos alertes en signal (et pas en karaoké de Slack).

🛠️ **Car brands running Curl :** Des centaines de millions de voitures, bardées d’électronique, de capteurs et d’assistants vocaux schizophrènes, roulent chaque jour avec, sous le capot, une dépendance critique : libcurl. Oui,  _ce_  libcurl.  [Celui né dans une chambre d’étudiant](https://daniel.haxx.se/blog/2025/08/15/car-brands-running-curl/). Celui qui permet de faire un GET sans crasher, celui maintenu à bout de café par Daniel Stenberg depuis vingt-cinq ans. Tesla, Toyota, BMW et quarante-quatre autres constructeurs l’utilisent dans leurs systèmes embarqués, et comme il se doit dans l’open-source moderne, pas un rond ne redescend à celui qui maintient ce miracle discret de stabilité.

🥇  **This website is served from nine Neovim buffers :** Gábor Nyéki, en bon bricolo du clavier, a transformé Neovim en serveur HTTP avec sa nouvelle extension Lua,  [nvim‑web‑server](https://vim.gabornyeki.com/). Pas besoin de Node, Python ou autre usine à gaz, juste Neovim, libuv et un peu de Djot. Et, accrochez-vous, c’est même plus rapide qu’un Nginx classique pour servir du contenu statique tout ça depuis un ThinkPad de 2012.  

</> **Git rebase drop :** Un chouette tuto qui nous explique comment utiliser  [git rebase --drop](https://alchemists.io/articles/git_rebase_drop) pour se débarrasser proprement de commits embarrassants. Finies les manipulations pénibles ou les reverts empilés comme des pansements mal collés : une simple option, et l’histoire se réécrit comme si la faute n’avait jamais existé, c’est élégant, pratique, et terriblement humain dans son hypocrisie.

🏹 **Host your own file server with Copyparty and Docker :** Si vous avez déjà rêvé d’une manière simple de partager et gérer vos fichiers depuis votre propre serveur sans plonger dans des installations lourdes et capricieuses,  [Copyparty mérite un détour](https://noted.lol/copyparty/). C’est un serveur léger qui se lance en quelques secondes et vous offre aussitôt upload, download, partage protégé par mot de passe, WebDAV, recherche et même prévisualisation de documents. Copyparty tient une promesse simple et redoutablement efficace : rendre l’auto-hébergement des fichiers aussi naturel que de glisser un dossier sur son bureau.

🚀  **Github workflow tips and tricks :** Un chouette billet qui partage une poignée de  [bonnes pratiques pour améliorer vos workflow](https://blog.frankel.ch/github-workflows-tips-tricks/)  sous Github comme structurer ses jobs comme des modules, exploiter les matrices sans transformer le fichier en sudoku, ou encore presser un peu plus de jus du parallélisme pour ne pas attendre trois plombes un build qui compile déjà ailleurs. Rien de magique, juste du bon sens et quelques raccourcis bien sentis pour rendre vos pipelines moins capricieux.

🐋 **Running our docker registry on-prem with Harbor :** Les outlaws de chez  37signals ont lâché  [Docker Hub et AWS ECR](https://dev.37signals.com/running-our-docker-registry-on-prem-with-harbor/)  pour installer Harbor chez eux : propre, rapide, et sans les factures salées. Résultat : des images stockées dans leur propre datacenter, trois fois plus vite en push/pull, zéro leak de credentials intempestif et des coûts réduits malgré le trafic intensif. Ils se sont entourés de leurs propres espaces S3 (Pure FlashBlade), ont déployé deux datacenters répliqués via Terraform, activé des politiques de rétention pour limiter la taille, et conçu un harbor.yml minimaliste mais fonctionnel.

💝 **Aced :** C**'**est l’outil qu’il te faut si tu veux inspecter à l’œil nu les  [permissions Active Directory (DACL)](https://github.com/garrettfoster13/aced). Il t’aide à décortiquer ce que tu as vraiment le droit de faire avec un compte ciblé : qui peut lister ses droits, quelles permissions sont laissées en libre-service, et même résoudre les SIDs associés sans te noyer dans des scripts LDIF indigestes. Simple, direct, et parfait pour vérifier si ton domaine est un château fort ou un panier percé.

🚢 **Docker alternatives to Bitnami :** Bitnami, désormais aux mains de Broadcom, a décidé que  [l’open-source c’était bien](https://www.docker.com/blog/broadcoms-new-bitnami-restrictions-migrate-easily-with-docker/), mais surtout pour ceux qui peuvent payer. À partir du 29 Septembre, plus question de tirer des images versionnées depuis docker.io/bitnami sans passer à la caisse. Seuls quelques tags latest resteront disponibles, le reste part dans un repo legacy figé dans l’ambre. L’article des mecs de chez Docker liste quelques alternatives pour migrer proprement sans finir enfermé dans un abonnement à cinq chiffres.  

👾 **Dele.To : C**’est l’outil parfait pour partager un mot de passe sensible ou une clé API sans risquer que tout devienne public. Les données sont  [chiffrées en AES‑256 dans ton navigateur](https://github.com/dele-to/dele-to)  avant même d’être envoyées, les clés ne quittent jamais ton poste, et le lien s’autodétruit après un certain nombre de vues. Pratique, moderne, sans inscription, mais garde en tête que ce truc est encore tout neuf, sans audit derrière. Ça donne envie, mais un peu de parano ne fait pas de mal.

## How Engineers are Automating More with Less

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

On passe maintenant au courrier des lecteurs. L’été a été calme côté mails, sans doute parce que tout le monde était trop occupé à debug en tongs ou à éviter Slack depuis un transat. Mais on a quand même reçu un message d’Arthur D. qui nous a partagé un article intéressant sur les tendances DevOps du moment.

Le papier explore comment les ingénieurs tentent de faire plus avec moins : moins d’outils, moins d’étapes manuelles, moins de migraine. L’ère est à l’unification, à l’automatisation poussée, et à la recherche désespérée de solutions simples dans un paysage toujours plus complexe. Spoiler : tout le monde veut tout automatiser, mais personne ne sait encore exactement avec quoi. Merci Arthur et bon courage si tu tentes toi aussi de réduire ta stack sans tout casser.

[Accéder au lien ->](https://devops.com/how-engineers-are-automating-more-with-less-trends-in-devops-tooling/)