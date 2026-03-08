---
layout: post
title: Newsletter du 15 Mai 2023
subtitle: La newsletter sans cartons rouges
thumbnail-img: /assets/img/Barbara-ennui.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, basecamp, cloud]
comments: true
mathjax: true
author: RudeOps
---


_Vous savez, ma femme me dit souvent que notre quotidien de devops ressemble à un épisode de Colombo et elle n’a pas tout à fait tort. Comme le célèbre détective, on arrive sur les lieux du crime pour constater les faits (monitoring, observabilité), on cherche des indices (dans les logs), on teste des hypothèses en rejouant les faits, on interroge les autres équipes (les devs, la QA, le métier, les composants), bref, on est dans une recherche constante de la vérité. Je pense que ce qui nous anime, au-delà de préserver le chiffre d’affaires de nos organisations, c’est cette curiosité, ce besoin de comprendre les faits, et d'apprivoiser le fonctionnement complexe de notre écosystème, et surtout de pouvoir dire à la fin de l’enquête que le problème vient du #@!! de réseau qui déconne encore. Bonne lecture à tous de cette déjà cinquième itération de RudeOps.com, détectives._

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/5yMQRR50LqnwZLDwvcCWlDcWKA5iyE1qK2R4CNUw.png)

## Clouderies

Alors c’est malin maintenant j’ai des images de Colombo dans la tête et sa voix traînante qui pose des questions insistantes. Bref, souvenez-vous, il y a quelques mois on vous disait que David Heinemeier Hansson, le papa de RoR et co-fondateur de Basecamp,  [quittait AWS pour retourner sur une infrastructure bare-metal](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0)  et on ne comprenait pas très bien le move qui consistait à  [faire économiser 7 millions de dollars sur 5 ans](https://dev.37signals.com/our-cloud-spend-in-2022/). Et David qui est aussi buté qu’un RSSI un jour de patching continue à nous décrire son grand œuvre et à se  [séparer de nombreux services hébergés dans le cloud](https://world.hey.com/dhh/it-s-not-just-cloud-costs-that-are-out-of-control-efcd098c). Alors ça amène quand même plein de questions auxquelles il ne répond pas, mais ses posts sont une mine d’or et sont assez révélateurs, à notre avis, d’un tournant dans l’industrie du SaaS et du cloud en général, où on se rend compte qu’à (très) grande échelle, ces modèles ont tendance à ne pas scaler et à devenir un centre de coûts ([aussi bien pour ces acteurs que pour leurs clients](https://www.bloomberg.com/news/articles/2023-04-26/amazon-starts-round-of-layoffs-in-aws-cloud-services-division?leadSource=uverify%20wall)) là où ils devraient rester un centre de bénéfices pour l’organisation qui les utilise, sans même aller sur le terrain du  [lock technique ou des performances](https://ubuntu.com/blog/cloud-repatriation-reasons).

Et en parlant de AWS,  [la situation n’est pas rose](https://www.nextplatform.com/2023/04/28/of-course-aws-revenues-are-slowing-and-profits-are-pinched/)  pour la petite startup californienne qui commence à s’inquiéter d’une  [possible stagnation de la croissance](https://www.digitalcommerce360.com/article/amazon-sales/)  de son activité de cloud computing. La faute à Google et Microsoft qui intensifient leurs efforts en renforçant leurs offres et en devenant archi agressifs sur différents types de marché. Faites l’essai, prenez contact avec les trois en leur disant que vous désirez faire un move to the cloud de vos applications et vous comprendrez le terme agressivité commerciale.

Un peu comme l'Eurovision, on suit toujours avec un mélange de fascination et de tristesse les différentes déclarations de la France et/ou de l’Europe sur la mise en place d’un cloud souverain. Sauf que maintenant on parle de  [cloud de confiance](https://www.ssi.gouv.fr/actualite/cloud-de-confiance-nouveau-dispositif-daccompagnement-vers-lobtention-du-visa-de-securite-secnumcloud-a-destination-de-nos-startups-et-pme/), suivez un peu, et qui embarquera bien entendu AWS, GCP et Azure à travers une mécanique moins contraignante que le cloud souverain, mais avec le même but : rester à l’abri de la réglementation américaine. Les beaux gosses de l’Usine Digitale récapitulent tout ça dans un très bon post qui nous explique  [où nous en sommes actuellement et ce vers quoi nous nous engageons](https://www.usine-digitale.fr/article/comme-la-france-l-europe-veut-lancer-un-label-cloud-de-confiance.N2131016).  

Cybersec

![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)

## Pour la liberté de la Wordpress

Quand votre RSSI vous dit de mettre à jour vos sites propulsés par Wordpress c’est pas pour rien : les cowboys de  [Wordfence](https://www.wordfence.com/) ont révélé qu'environ un million de sites WordPress ont été affectés par une vulnérabilité exploitée dans un plugin populaire appelé "File Manager". Cette faille de sécurité ([CVE-2023-32243](https://nvd.nist.gov/vuln/detail/CVE-2023-32243)  et CVSS score de 9.8) a permis à des attaquants de prendre le contrôle de ces sites et de compromettre leur intégrité. Une mise à jour a été publiée rapidement mais les dégâts sont considérables. D'ailleurs vous vous rappelez de la  [fuite de données chez Ferrari](https://medium.com/@rudeops/newsletter-rudeops-du-31-03-2023-ec1684fa77b2)  ? Il semblerait que ce soit dû une fois encore à  [une faille de sécurité côté Wordpress](https://www.char49.com/articles/we-dont-have-a-ferrari-but-we-had-their-database-credentials)  au final. De là à dire que Wordpress est un nid à emmerdes il n’y a qu’un pas, que je franchis allègrement.

Signe incontestable de notre notoriété grandissante, nous recevons pas mal de mails nous demandant de partager quelques liens bien sympa. Ok, en fait on a reçu un seul email, mais on a trouvé ça cool. C’est Christophe M. qui s’y colle et on le remercie chaleureusement, merci frérot, car c’est passionnant. Ca cause de la fin des mots de passe qui arrive lentement mais sûrement, et de  [l'émergence des passkeys](https://lapcatsoftware.com/articles/2023/5/1.html)  et de leurs contraintes.

Pas bravo hein, on apprend qu’il a fallu une dizaine de mois à Google  [pour corriger la vulnérabilité GhostToken](https://www.bleepingcomputer.com/news/security/ghosttoken-gcp-flaw-let-attackers-backdoor-google-accounts/), qui permettait à des personnes mal intentionnées de compliquer la détection d'applications malveillantes connectées à des comptes Google en les masquant sur la page "Applications tierces ayant accès à votre compte".[L'exploitation de cette vulnérabilité](https://www.darkreading.com/remote-workforce/-ghosttoken-opens-google-accounts-to-permanent-infection)  était liée au process de développement des applications qui devaient être liées à un projet GCP. Lorsqu'un projet GCP était "éteint", il n'était pas immédiatement supprimé, mais une fenêtre de restauration de 30 jours était activée…

Quand les outlaws de chez Ignite ont décidé de réaliser des mindmap sur tout un pan de la cybersec, ils n’y vont pas de main morte et ne font pas semblant, et c’est une excellente manière d’apprivoiser certains outils.  [Sur ce repo](https://github.com/Ignitetechnologies/Mindmap), vous allez pouvoir afficher des mindmap sur Burp, Empire, Shodan, HttpX, Aircrack, bref, c’est bien rempli et c’est parfait pour remplir un dimanche un peu triste, comme tous les dimanches.

Aujourd’hui on vous parle de patator, parce qu'au-delà du nom rigolo, c’est un bel outil de brute force facile à prendre en main et bien entendu  [installé de base sur Kali](https://www.kali.org/tools/patator/)  qu’on aime décidément de plus en plus. Vous trouverez ici  [un rapide tuto](https://secnhack.in/patator-a-brute-forcing-tool/)  qui vous montrera comment devenir un script kiddie en moins de 20 minutes, oui, comme dans les films de hackers.

## Le monde merveilleux des Ops

C’est dans ce post intitulé “[Use Git like a senior engineer](https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e)”, qu’on pourrait traduire par “Utilise Git comme un vrai bonhomme” qu’on reprend quelques basiques pour se familiariser avec l’outil de versionning créé par Linus un jour où il devait s’ennuyer entre deux compilations de noyaux. Un poil plus pointu, ce post tiré du blog de Github vous permettra de comprendre toutes les  [subtilités liées au garbage collection](https://github.blog/2022-09-13-scaling-gits-garbage-collection/)  sous git et vous permettra de glaner quelques métriques bien sympa communiquées par Github. Un peu plus aride, mais ne nous mentons pas, nos métiers ne sont vraiment pas fun, un  [excellent tuto pour bien comprendre tout ce qu’il y a derrière le ‘git log’](https://initialcommit.com/blog/git-log)  innocent qu’on tape tous 50 fois par jour pour comprendre qui fait quoi et  [où est passé votre foutu commit](https://ohshitgit.com/fr).

C’est chez les copains de The New Stack qu’on est tombé sur un très bon post qui résume selon eux  [quels sont les 4 principes de GitOps](https://thenewstack.io/4-core-principles-of-gitops/), et pourquoi il y en a 4 et pas 5 par exemple, bref, sinon on a aussi lu avec beaucoup d’attention le post de Kyle Robertson qui nous parle lui des  [trois piliers indispensables du SRE](https://medium.com/@jsakyle/the-foundational-pillars-of-site-reliability-engineering-d2249b192538)  (Availability & Reliability, Incident Response et Observability).

On a découvert un blog assez sympa, c’est celui de Nick Janetackis, qui nous offre quelques tutos bien précieux et assez variés. On va prendre comme exemple l’utilisation du  [create dir avec Curl](https://nickjanetakis.com/blog/create-parent-directories-with-curl-using-the-create-dirs-flag), ou encore celui qui nous apprend comment  [nettoyer son historique shell avec Zsh](https://nickjanetakis.com/blog/clearing-and-restoring-your-current-and-saved-shell-history-with-zsh). Parfait pour débuter ou approfondir ses connaissances.

Aujourd’hui c’est Luke Shaughnessy qui a dû se lever du mauvais pied et qui trolle un peu en se demandant si  [l’IAC amène vraiment plus de bénéfices que d’inconvénients](https://lukeshaughnessy.medium.com/infrastructure-as-code-is-not-the-answer-cfaf4882dcba). La conclusion est obvious mais ça fait toujours du bien de rappeler le principe élémentaire qu’on ne peut pas résoudre tous nos problèmes à travers un outil.

On va terminer en vous partageant ce post qui décrit  [comment K8s a construit son succès à travers l’Open Source](https://devinterrupted.substack.com/p/how-open-source-enabled-kubernetes), c’est super intéressant car ça parle aussi bien de techno que de modèle économique.  

## J'aime lire


**DevOps Handbook - a guide to implement devops in your workplace**

Alors c’est plus un fascicule qu’un livre (une trentaine de pages), et ça récapitule de manière archi synthétique tout ce qu’il vous faut pour  [implémenter devops dans votre organisation](https://www.amazon.fr/DevOps-Handbook-Guide-Implementing-Workplace/dp/B07KFRGJ5R). L’auteur, Henry Martin Jones, passera sur les étapes essentielles pour transformer votre organisation et les prérequis nécessaires. et propose aussi des outils qui peuvent s’avérer utiles. On ne va pas se mentir, pour ceux qui baignent dans le DevOps depuis plusieurs années ça ne va pas vous apprendre grand chose, mais ça reste un joli cadeau à destination de son CTO ou d’autres décideurs pour leur expliquer un peu de manière simple ce que vous êtes en train de mettre en place et quel rôle ils peuvent jouer là dedans.