---
layout: post
title: Newsletter du 09 Mars 2026
tags: [devops, MTTR, Terraform, Docker, pgrok, MinIO, systemd, Linux]
comments: true
mathjax: true
author: RudeOps
---


Honnêtement, je ne pensais pas tenir aussi longtemps. Et apparemment, vous non plus, et pourtant vous êtes encore là, à ouvrir ces emails avec une fidélité que je ne mérite probablement pas tout à fait.

Trois ans, ça mérite un petit bilan, ou du moins une mise à jour avant que vous vous demandiez pourquoi les choses changent sans prévenir.

**D'abord, les mauvaises nouvelles.**

Les illustrations disparaissent. Mon cousin Vincent, qui ornait chaque édition de ses petits dessins plus ou moins inspirés (surtout moins, soyons francs), a décidé que son talent valait de l'argent. Il n'a pas tort, mais moi non plus quand je lui ai dit que mon budget communication tournait autour de zéro. On s'est séparés en bons termes, et il continue de faire carrière dans la BD, ce qu'il fait très bien d'ailleurs, [lisez ses BDs](https://www.bedetheque.com/auteur-11701-BD-Vincent.html), c'est un mec qui a du talent.

Exit aussi le courrier des lecteurs qui me prenait trop de temps (merci pour toutes vos contributions, toujours accompagnées d'un mot sympa).

**Ensuite, les bonnes nouvelles.**

Une newsletter par semaine, format plus court, moins de blabla, plus d'essentiel. L'idée c'est que vous la lisiez jusqu'au bout pour une fois.

La landing page a aussi été refaite avec une techno de hipster, voilà.

Et quelques lecteurs ont pris le temps d'écrire des mots gentils pour la nouvelle homepage. Je dis "pris le temps" mais soyons honnêtes : je les ai relancés deux fois, j'ai envoyé un message vocal gênant à au moins trois personnes, et j'ai probablement abusé du mot "service". Mais les témoignages sont là, ils sont beaux, et je leur en suis sincèrement reconnaissant, même ceux qui ont mis trois semaines à répondre. Surtout eux.

**Et pour finir.**

Le but de tout ça n'a pas changé : partager ma veille, ce que je lis, ce qui m'intrigue, ce qui me semble valoir votre attention. Rien de plus, rien de moins.

On repart pour combien ? Je ne sais pas, mais la prochaine est pour dans sept jours.

Cyril

## La pépite de la semaine

Le MTTR c'est la métrique préférée de ceux qui veulent avoir l'air de résoudre des problèmes sans vraiment les résoudre. Devenir super rapide pour redémarrer le même service qui tombe toutes les deux semaines, c'est de la bêtise, pas de l'ingénierie. Cet article dit ce que tout le monde sait mais que personne n'ose mettre dans son OKR : l'objectif d'un bon incident management c'est de ne plus jamais avoir le même incident, pas de battre son record de rétablissement. Les post-mortems qui ne produisent rien de concret dans le backlog ne sont que de la thérapie de groupe avec un compte-rendu Confluence que personne ne relira. Et si vos incidents les plus récents ressemblent trait pour trait à ceux d'il y a six mois, le problème n'est pas votre MTTR, c'est votre culture, et aucun outil à 50k par an ne va vous aider à régler ça.

[Lire l'article](https://log.andvari.net/no-mttr.html)

### Le coeur de la veille

🔧 **[Pgrok, a personnal ngrok alternative](https://github.com/R44VC0RP/pgrok)** Parce que ngrok est devenu payant le jour où vous en avez vraiment eu besoin, pgrok vous permet de faire la même chose sur votre propre VPS. Un wildcard DNS, Caddy pour le HTTPS automatique, des tunnels SSH, et une TUI qui colorie vos requêtes HTTP par méthode et statut comme si votre tunnel de dev méritait autant d'attention qu'un dashboard de prod. Mono-utilisateur, Linux et Mac uniquement, pas de reconnexion automatique, mais pour un outil perso c'est exactement ce qu'on demande : simple, souverain, et sans abonnement mensuel qui grimpe dès qu'on dépasse 10 000 requêtes.

⚡ **[Advanced Terraform performance optimization](https://www.bejarano.io/terraform-performance/)** Le monde se divise en deux catégories de personnes : celles qui n'ont jamais attendu 7 heures qu'un terraform plan se termine, et celles qui ont une opinion très arrêtée sur le sujet. Cet article de Ricard Bejarano est pour les secondes. Init, plan, apply : chaque phase disséquée, chaque goulot d'étranglement nommé, quelques solutions franchement expérimentales assumées comme telles. Le provider AWS à 750 Mo téléchargé à chaque init, le refresh qui interroge chaque ressource une par une, le cache pas concurrent-safe qui corrompt tout si deux process tournent en même temps. Pas de magie, pas de silver bullet, juste un panorama honnête de ce qu'on peut faire quand Terraform commence à peser.

📊 **[Docker container monitoring for your terminal](https://dtop.dev/)** Un énième TUI pour surveiller vos conteneurs Docker, écrit en Rust, mais celui-là a le mérite d'être léger, rapide, et de gérer plusieurs hôtes simultanément en SSH ou TCP. CPU, mémoire, réseau en temps réel, tri par nom ou consommation, logs accessibles etc. Rien que vous ne puissiez faire avec dix autres outils, mais si dtop devient celui qui reste dans votre PATH, c'est déjà une victoire.

### En bref

💾 **[MinIO is dead, long live MinIO](https://blog.vonng.com/en/db/minio-resurrect/)** MinIO a archivé son repo le 12 février dernier. 60 000 étoiles, un milliard de pulls Docker, et une levée de fonds à 126 millions pour finir en read-only pendant que la boîte pousse son produit enterprise. Le cycle classique : open source pour l'adoption, AGPL pour faire peur aux concurrents, suppression de la console d'admin en catimini, arrêt des binaires, et bonne nuit. Sauf que l'AGPL qu'ils avaient eux-mêmes choisie comme matraque juridique garantit aussi le droit de forker, ce que Ruohang Feng a fait, en restaurant la console, reconstruit les packages, relancé la doc, etc. Retenez juste la leçon : "open source" dans la bouche d'une startup financée par du capital-risque, c'est une stratégie de go-to-market, pas une philosophie.

🐧 **[New to Linux ? These 4 systemd tools help you fix common issues](https://itsfoss.com/systemd-troubleshoot-tools/)** On ne va pas se mentir, si vous en êtes encore au stade "je reboot et j'espère", cet article va changer votre vie, ou du moins vos nuits d'astreinte. Rien de révolutionnaire pour les anciens, mais pour ceux qui débutent sous Linux, c'est exactement le genre de base qu'on aurait aimé avoir le jour où on a passé trois heures sur un service SSH mort pour une raison qu'un simple journalctl -xe aurait réglé en dix secondes.
