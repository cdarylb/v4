---
layout: post
title: Newsletter du 15 Juin 2023
subtitle: La newsletter qui singe la tech !		
thumbnail-img: /assets/img/Alain-singe.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, chaos-monkey, cloud]
comments: true
mathjax: true
author: RudeOps
---


_“La folie c'est refaire sans arrêt exactement la même connerie qu'on répète sans arrêt, en espérant que ça change” (tiré du jeu vidéo Far Cry 3 - Ubisoft 2012). Parlez-en à un collègue de la QA, il ne pourra que vous comprendre et approuver, ayons donc une pensée pour ces héros de l'ombre dont le travail sauve des mises en production. Bonne lecture de cette septième itération de notre newsletter !_

_Cyril_

![](https://storage.mlcdn.com/account_image/325165/WVYwgAeEfAvwJKh8kowsB0U8NJEZlfpuRlrN7I5j.png)

## Chaos Monkey Island

Mais dis-moi Jamy, c’est quoi le Chaos Monkey ? Mais c’est très simple Fred ! Tout commence en 2011, lorsque Netflix a fait la transition de la distribution de DVD à la construction de systèmes cloud distribués pour proposer leur première offre de streaming, que l'idée du Chaos Monkey a vu le jour. Ce concept d'ingénierie,  [adopté surtout par les grosses organisations très matures](https://www.harness.io/blog/chaos-engineering-tools#:~:text=Top%20tech%20organizations%20such%20as,internal%20systematic%20behavior%20and%20flaws.), consiste à perturber délibérément les systèmes afin d'apprendre à les rendre plus résilients. C’est  [dans le premier billet de blog de Netflix à ce sujet](https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116), publié par Yury Izrailevsky, alors directeur de la production, qu’on apprend que le Chaos Monkey a été créé pour  [désactiver de manière aléatoire les instances de production](https://netflix.github.io/chaosmonkey/)  sur leur infrastructure AWS, mettant ainsi en évidence les faiblesses que les ingénieurs de Netflix pourraient corriger en développant de meilleurs mécanismes de récupération automatique. On peut facilement faire le parallèle avec l’apprentissage par l’erreur cher à Bill Gates, Steve Jobs et Patrick Sébastien.

La planète des singes

Pour ceux qui se posent la question, le nom de Chaos Monkey vient de  [l’idée d’un singe lâché dans un datacenter ou sur un cloud](https://www.techtarget.com/whatis/definition/Chaos-Monkey#:~:text=According%20to%20the%20developers%2C%20Chaos,loose%20in%20a%20data%20center.)  et qui mettrait aléatoirement hors service des instances, tout en continuant de servir ses clients sans interruption. Nous on aurait plutôt vu un énorme mammouth laineux plutôt qu’un singe mais bref. En pratique, le processus implique une application simple  [qui choisit aléatoirement une instance dans chaque nœud et la met en panne sans préavis](https://netflix.github.io/chaosmonkey/How-to-deploy/), généralement pendant les heures d'activité histoire d’avoir un bon coup d’adrénaline. Nora Jones et Casey Rosenthal, anciens ingénieurs de Netflix, l'expliquent en détail dans leur livre intitulé "[Chaos Engineering](https://www.oreilly.com/library/view/chaos-engineering/9781491988459/)", que vous trouverez chez votre dealer habituel. L'idée est de découvrir les points faibles des systèmes afin de mettre en place des alertes automatiques pour résoudre les problèmes, évitant ainsi que les équipes d’astreinte soient réveillées au milieu de la nuit en cas de problème. Depuis, le Chaos Monkey a évolué et a donné naissance à diverses mises en œuvre regroupées maintenant sous le terme plus générique de  [Chaos Engineering](https://principlesofchaos.org/).

L'armée des 12 singes

Et pour aller plus loin, preuve qu’une décennie plus tard  [l’idée est excellente en plus d’être structurante pour votre activité](https://medium.com/seek-blog/creating-chaos-the-importance-of-chaos-engineering-8121443fa2f), tout le monde y va de sa méthodologie ou de ses outils pour faire du Chaos Engineering. On commence avec les cowboys de chez Padok qu’on aime beaucoup, et qui nous proposent un outil au nom évocateur,  [Kube-Monkey](https://www.padok.fr/en/blog/kube-monkey-kubernetes), qui vous permettra de mettre  [un peu de paillette dans vos clusters K8s](https://github.com/asobti/Kube-monkey), et on continue avec les coyotes de chez Lamndatest qui eux nous proposent  [un guide bourré de bests practices](https://www.lambdatest.com/learning-hub/chaos-engineering-tutorial)  si vous avez l’envie de faire le singe. On conclura le sujet sur les meilleurs outils pour  [réaliser du chaos engineering chez vous](https://www.harness.io/blog/chaos-engineering-tools), vous n’aurez que  [l’embarras du choix](https://blog.palark.com/chaos-engineering-in-kubernetes-open-source-tools/)  !  

**Nos lecteurs ont du talent**

C’est encore Christophe M. qui nous fait découvrir une chouette ressource qui va nous permettre cette fois de  [nous initier à la cryptographie](https://cryptohack.org/)  à travers différents puzzles et challenges. C’est archi bien foutu, très didactique, et ça vous ouvrira des portes que vous pensiez fermées à jamais. Merci Christophe, un pouce bleu pour toi frérot !

Au tour de Michael D, DBA de son état, de nous partager un outil qui va simplifier la vie de tout le monde avec  [supavisor, un pooler dédié à Postgres](https://github.com/supabase/supavisor)  qui vous permet de “proxyfier” et mieux manager vos ressources, merci à toi Michael !

Et on termine avec Anna T. qui tient absolument à ce qu’on parle de  [paranoia](https://github.com/jetstack/paranoia), un outil qui peut s’avérer bien utile en vous permettant d’inspecter et valider les certificats de vos trop nombreuses images docker. Petite limitation à garder en tête avant d’essayer, ça ne fonctionne pas pour les images qui tournent dans un container, merci pour le partage Anna !

![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)

**Ils bougent encore**

Boris VIan disait  _“Si tout le monde avait été contre l'évolution, on serait encore dans les cavernes à téter des grizzlys domestiques”_, et ça, les outlaws de chez HaProxy l’ont bien compris car ils nous gratifient ce mois-ci de la  [version 2.8 de Haproxy](https://www.haproxy.com/blog/announcing-haproxy-2-8)  qui amène pas mal d’évolutions (_Performance enhancements include HTTP compression for requests, a simple way to combine listener shards and thread groups, and built-in OCSP stapling_) mais surtout de l’alerting par email via du LUA ou un nouveau framework d’évènements en LUA également. Bref, attendez-vous à commit du LUA.

Il y a aussi Debian qui continue d’évoluer et  [passe en version 12 alias “Bookworm](https://www.debian.org/News/2023/20230610.fr.html)”. On apprend que la plupart des paquets d’applications non libres ont migré de  _non-free à non-free-firmware_, et que “_cette version contient plus de 11 089 nouveaux paquets pour un total_  _de 64 419 paquets, avec un nombre significatif de paquets (6 296) marqués comme obsolètes et supprimés. 43 254 paquets ont été mis à jour dans cette version._”

Et impossible de passer sous silence  [la dernière itération de Kali Linux](https://www.bleepingcomputer.com/news/security/kali-linux-20232-released-with-13-new-tools-pre-built-hyperv-image/), la distrib dédiée aux pentesters qui se croient dans Matrix, qui passe en version 2023.2 et amène son lot d’évolutions, notamment la publication d’une image Hyper-V préconfigurée pour le "Enhanced Session Mode", ce qui vous permettra de vous connecter à la VM en utilisant du RDP.  

**Clouderies**

![](https://storage.mlcdn.com/account_image/325165/i47xEy8IypUX1LWnYQgzcyPBn2rIZoSKGy3GzBgq.png)

La pieuvre de Redmond annonce la  [disponibilité de son OS, Azure Linux](https://www.techradar.com/news/microsoft-reveals-azure-linux-is-available-now). On apprend que plusieurs acteurs comme DataDog ou HashiCorp se sont déjà associés à Microsoft en tant que partenaires pour Azure Linux, qui est nous le rappelons une distribution faite from scratch et taillée spécialement pour leur offre AKS et sans BSOD nous promet-on.

Le chiffrement est souvent reconnu comme l'un des éléments les plus efficaces d'une stratégie de sécurité dans une organisation, et  [ce post va vous permettre de comprendre en quoi cette stratégie est bénéfique](https://learn.g2.com/cloud-encryption)  et comment la mettre en place dans le cloud de manière générale, le tout saupoudré de best practices, on a bien aimé même si le sujet peut paraître totalement obvious.

Il y a  [ce post un peu énervé des punks de chez theNewStack](https://thenewstack.io/cloud-dependencies-need-to-stop-f-ing-us-when-they-go-down/)  qu’on a bien aimé et qui parle de notre dépendance au cloud :  _“With each external cloud service you deploy, you introduce the amount of unreliability that product has into your own product’s reliability (even if it’s incredibly small)”_.  

**Le monde merveilleux des ops**

On ouvre la rubrique avec les cowboys de Padok (encore eux) qui ont fait un travail de dingue : la création d’un  [magnifique tech radar](https://www.padok.fr/tech-radar)  divisé en 4 cadrans (Résilience, Opérabilité, Sécurité et Empowering) qui nous fait découvrir pas mal de pépites. C’est un joli tour d’horizon sur tout ce que la tech a de meilleur, on vous recommande chaudement d’aller y jeter un coup d’oeil vous allez découvrir plein de choses très sympa !

Vous n’aimez pas rédiger de la documentation et vous utilisez Terraform ([qui vient de passer en version 1.5](https://github.com/hashicorp/terraform/releases)) ? Ce post de Umesh Kumhar va vous prendre par la main pour vous montrer  [comment automatiser la documentation de vos projets](https://medium.com/google-cloud/automate-terraform-documentation-like-a-pro-ed3e19998808)  de manière automatique  [grâce à Terraform-doc](https://terraform-docs.io/).

On continue avec un post qu’on a vraiment apprécié,  [The human scalability of DevOps](https://medium.com/@mattklein123/the-human-scalability-of-devops-e36c37d3db6a), qui explore l'importance de l'aspect humain dans les pratiques DevOps. L'auteur, Matt Klein, souligne que l'échelle d'une organisation ne peut être atteinte uniquement par l'automatisation et la technologie, mais nécessite également une attention de tous les instants portée aux aspects humains comme la communication, la collaboration et les pintes de bières à partager entre collègues bien entendu. Passionnant à lire, ça fait du bien de prendre un peu de hauteur des fois.

On vous partage ce  [post très complet sur Github Actions](https://www.infoworld.com/article/3698188/what-is-github-actions-automated-cicd-for-github.html), la CI/CD de Github qui a le mérite d’être  [archi simple à prendre en main](https://docs.github.com/fr/actions). L’article nous explique comment Github Actions fonctionne, avec quelques exemples et quelques best practices de sécurité. Parfait pour un premier survol du sujet.

Une belle étude de cas sur l'utilisation du modèle de langage ChatGPT à des fins malveillantes : des chercheurs ont utilisé ChatGPT pour  [générer des variants de logiciels malveillants](https://www.csoonline.com/article/3698516/chatgpt-creates-mutating-malware-that-evades-detection-by-edr.html)  capables d'éviter la détection par de l’EDR et capables de se modifier dynamiquement, rendant leur détection et leur éradication plus difficiles, un peu comme les mauvais films français en quelque sorte.

Et on termine par un retex super sympa qui nous apprend  [comment une équipe d’ops a résolu un problème récurrent de health check](https://medium.com/pipedrive-engineering/solving-the-mystery-of-pods-health-checks-failures-in-kubernetes-55b375493d03)  sur des pods, c’est passionnant à lire, on apprend pas mal de trucs en chemin, et la fin vous fera certainement sourire.  

**J'aime lire**

Chaos Engineering, un livre de Casey Rosenthal, Lorin Hochstein, Aaron Blohowiak, Nora Jones et Ali Basiri

On vous en parlait au début de cette newsletter, le livre Chaos Engineering est une perle qui met en avant la pratique délibérée d'introduire des perturbations contrôlées dans un système informatique afin d'identifier et de résoudre les faiblesses potentielles.

Les auteurs expliquent les concepts fondamentaux du chaos engineering et fournissent des conseils pratiques pour la mise en place de cette approche, tout en abordent les différentes méthodes et outils utilisés pour créer des perturbations et générer des scénarios de défaillance, comme le "game days" et les "experiments".

On y parle aussi de l'importance de la sécurité, de la résilience et de la fiabilité des systèmes, bref, c'est un sacré tour d'horizon. On vous encourage fortement à le parcourir, même si vous n'envisagez pas de mettre un tel système en place chez vous.

![](https://storage.mlcdn.com/account_image/325165/rvenYEkPDSOIt0Xv4AhoNwm06y2lmHVAHucYRoXe.png)