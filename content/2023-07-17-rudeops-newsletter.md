---
layout: post
title: Newsletter du 17 Juillet 2023
subtitle: 37°2 le matin		
thumbnail-img: /assets/img/tranquille.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, kubernetes, cybersec]
comments: true
mathjax: true
author: RudeOps
---

_"Être en vacances, c’est n’avoir rien à faire et avoir toute la journée pour le faire" nous disait feu Robert Orben. Et on est bien d’accord avec lui, il est temps de couper nos terminaux, faire une pause bien méritée et se recentrer sur ce qui compte vraiment. C’est aussi l’occasion de bouquiner tranquillement au bord de la piscine entre deux apéros et de découvrir quelques livres sympas qui vous permettront de briller à la rentrée, et pour vous, lecteurs dont le nombre grossit de manière vertigineuse chaque jour, on vous a concocté un numéro spécial lectures d’été qui reprend la plupart des bouquins conseillés ces derniers mois. Bonnes vacances à ceux qui ont la chance de partir, bon courage à ceux qui restent, on se retrouve à la rentrée pour de nouvelles aventures._

Cyril  


![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)

## Nos lecteurs ont du talent

C’est au tour de Guillaume M, Responsable technique transverse - Cloud DevOps dans la Loire, de nous partager quelques réflexions bien cool au sujet de  [NixOS](https://nixos.org/). Pour ceux qui ne connaissaient pas -comme nous- NixOs est un système d'exploitation libre et open-source basé sur Linux. La conf du système dans NixOS est gérée de manière déclarative : au lieu de modifier des fichiers de conf individuels dispersés dans tout le système, NixOS utilise un seul fichier de configuration central qui décrit l'ensemble de la configuration du système, y compris les paquets logiciels à installer, les services à activer et les paramètres spécifiques à chaque machine. En potassant un peu le sujet on se rend compte  [des possibilités assez guedin](https://linuxfr.org/users/killruana/journaux/nixos-ou-comment-j-ai-rendu-mes-machines-interchangeables-et-ennuyeuses)  comme on dit à Montargis, pour des envs de dev ou un pool de prod immuable et facilement versionable. Merci pour la découverte frérot, un pouce bleu pour toi !

Et c’est aussi Stéphane H, Devops Engineer dans une scale-up bien connue, qui nous partage une belle alternative à votre kubectl logs avec  [Ktail](https://github.com/atombender/ktail) qui fait la même chose mais avec quelques features supplémentaires qui nous manquent cruellement jusque là (ça va de la détection de pods sur votre tail à l’ajout de couleurs et de highlights). Merci pour cette belle découverte qui va enchanter petits et grands !  

J'aime lire spécial congés

![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)

##### Cloud Native DevOps with Kubernetes

Kubernetes est une usine à gaz, c’est sacrément dur de s’y mettre, et même si la courbe de progression est gratifiante, c’est un peu comme manger du verre pilé en riant.

Heureusement, John Arunde[l](https://www.amazon.fr/John-Arundel/e/B00BZWK2JQ/ref=aufs_dp_fta_dsk)  et son compère Justin Domingus  [ont sorti cette bible](https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/)  qui vous donne les clefs, de manière très pragmatique et à portée de tout le monde, afin de vous familiariser et prendre en main vos premiers clusters, quel que soit votre environnement (cloud based, on premise…).

Ca se lit rapidement, c’est bourré d'exemples et de réflexions pertinentes, et vous n’aurez plus aucune excuse pour conserver vos clusters swarm ou manger du verre pilé.

The Devops Handbook

Si vous n'avez ni le temps ni l'envie de vous farcir la pléthore de livres qui essaient d’expliquer tant bien que mal ce qu’est le devops et à quoi ça sert, alors n'en lisez qu'un : The Devops Handbook.  [On vous conseille ce classique](https://itrevolution.com/product/the-devops-handbook-second-edition/)  qui résume parfaitement ce qu’est le paradigme devops et comment mettre en place devops dans votre organisation. The Devops Handbook, c’est écrit à plusieurs mains par des gens très bien comme Patrick Debois et Gene Kim pour les plus connus, et c’est 100% sans bullshit.

![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)

##### The manager's path

Ce qui devait arriver arriva, vous avez été promu (ou puni) manager d’une équipe technique, et vous ne savez pas trop comment gérer Kevin le dev full stack qui code divinement bien mais se comporte comme un vrai con ? Pas de panique, le livre “[The Manager’s Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)” de l’excellente Camille Fournier vous donne plein de clefs pour réussir votre nouvelle mission. C’est sans doute le seul livre sur le sujet qui est à la portée de tout le monde et qui s’appuie sur des cas concrets que vous rencontrez tous les jours dans votre mission de manager (comment bien staffer mon équipe, comment évaluer sa capacité à faire, etc). Encore une fois 0% de bullshit dedans. Si vous ne pouvez pas l’acheter, volez-le !

![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)

##### The making of a manager - What to Do When Everyone Looks to You

Parce que les managers sont nos amis aussi, on vous conseille chaudement le bouquin écrit par [Julie Zhuo](https://www.juliezhuo.com/book/manager.html) qui raconte l'histoire de sa propre expérience en tant que jeune manager dans une entreprise de la Silicon Valley. Le livre est rempli de conseils pratiques pour les nouveaux managers, basés sur les erreurs et les succès de Julie tout au long de sa carrière, et fourmille d'anecdotes et de cas pratiques.

Le livre se divise en trois parties : la première partie se concentre sur les défis initiaux rencontrés par les nouveaux managers, la deuxième partie explique comment construire une équipe performante, et la troisième partie aborde la façon de diriger efficacement une organisation.

Alors attention, ça s’adresse à des managers techs dans un contexte de startup, donc pas forcément applicable dans des boîtes style COGIP.

The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win

Livre passionnant [co-écrit par Gene Kim](https://itrevolution.com/product/the-phoenix-project/)  et plein de gens très biens, qui se lit comme un roman, on y suit Bill, un sympathique IT Manager qui doit sauver une entreprise en difficulté. Avec l'aide de ses collègues, Bill va mettre en place des changements pour améliorer les process de l'entreprise en se concentrant sur la collaboration, l'automatisation et la communication, bref, ils vont utiliser DevOps, et le livre va mettre en évidence l'importance de la collaboration entre les équipes de développement et d'exploitation. C’est un must-read absolu, une référence dans le milieu, et dans lequel sont introduits les concepts des three ways.

![](https://storage.mlcdn.com/account_image/325165/zpSj2EIqMq7ATnfxVwRWGTDQxOEFS3WLCuo1vTtW.png)

##### The art of capacity planning

On a décidé de vous parler  [d’un vieux bouquin](https://www.oreilly.com/library/view/the-art-of/9780596518578/), qui a dû être édité un peu avant 2009 ou pas loin en tout cas, et si on a décidé de vous en parler, ça n’est pas par nostalgie non, car notre coeur est dur comme la pierre et nous n’avons plus aucune illusion sur notre métier, mais plus pour les qualités innées de ce livre.

Ecrit par John Allspaw, ancien boss tech de Flickr (oui ça date) et de Etsy, pas mal de réflexions sont encore d’actualité et nous permettent aussi de mesurer le chemin accompli durant cette dernière décennie. Et c’est passionnant de remettre le nez dedans à notre époque ! L'ouvrage aborde plusieurs concepts clés liés au capacity planning. Il explique en détail ce que c’est, comment le mesurer et comment évaluer la charge qu'un système peut encaisser dans une période donnée. Allspaw met en évidence l'importance de comprendre les limites d'un système et les conséquences de les dépasser. A une époque où les offres de AWS étaient considérées comme avant-gardistes, Allspaw aborde également des sujets tels que la gestion des pics de charge, la mise à l'échelle des systèmes, l'optimisation des performances et la résolution des goulots d'étranglement. Il explore différentes approches pour équilibrer la demande et la capacité, en tenant compte des contraintes et des coûts associés. Un classique qu’on vous dit.