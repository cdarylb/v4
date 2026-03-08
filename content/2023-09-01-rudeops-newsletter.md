---
layout: post
title: Newsletter du 01 Septembre 2023
subtitle: Vol au dessus d'un nid de devops	
thumbnail-img: /assets/img/Charlie-Nuages.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, terraform, cybersec]
comments: true
mathjax: true
author: RudeOps
---

_La vie c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre nous disait Einstein. C’est un peu pareil pour notre newsletter, on avance malgré notre manque flagrant de professionnalisme (mais ça nous va) et on est surtout tellement content de voir de plus en plus de monde y adhérer et nous partager pas mal de feedback intéressants. Et le partage comme tout le monde le sait, c’est un des piliers fondamentaux du DevOps._

_Bonne lecture et bonne rentrée guys !_

_Cyril_  
  

![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)

## Nos lecteurs ont du talent

Aujourd’hui c’est le mystérieux “JMB” qui nous partage un tuto assez cool sobrement intitulé “[Managing Terraform Modules in a Monorepo](https://dragondrop.cloud/2023/07/17/managing-terraform-modules-in-a-monorepo/)” dont le titre est suffisamment évocateur pour m’éviter d’aller plus loin et abîmer mes petits doigts boudinés sur mon clavier mécanique de rockstar. Merci JMB pour le partage !

Il y a aussi Vanessa M, cloud engineer dans une startup parisienne, qui nous partage un article passionnant sur les possibilités de PostgreSQL d’héberger et requêter des  [graphs data structure](https://www.dylanpaulus.com/posts/postgres-is-a-graph-database/), tout ça nativement. Merci pour le partage Vanessa !

Et on termine la tournée avec Xavier D, devops engineer dans une belle boîte française, qui nous partage un article de blog qu’on a lu avec attention :  [Why you should move back to datacenters](https://rakkhi.substack.com/p/why-you-should-move-back-to-datacenters). C’est une bonne réflexion pour pas mal de boîtes qui veulent aller vers le cloud mais n’en ont pas forcément les moyens ou les compétences. Merci Xavier, coeur avec les doigts pour toi !  

Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et une Tesla à gagner chaque semaine après tirage au sort).  

**Legacy si impératrice**

Allez, on ne va pas se mentir, on a tous dans nos boulots  [une dette technique](https://geekflare.com/technical-debt/)  à gérer, et si on en n’a pas, c’est qu’on est en train de la créer, même s' il y a  [toujours des moyens de la mitiger](https://dev.to/alexomeyer/the-engineers-guide-to-creating-a-technical-debt-proposal-58o5). Bref, ne cherchez pas,  [il est presque impossible](https://engineering.zalando.com/posts/2021/11/technical-debt.html)  de faire l’impasse sur la création d’un legacy, dont vous parlerez à voix basse histoire de ne pas être celui qui va devoir se coltiner le sale boulot de transformer un gros machin bien monolithique  [en une palanquée de microservices à la mode](https://www.guava.blue/2021/09/28/switching-from-monolithic-to-microservices-is-it-worth-the-trouble/). Après, bien sûr, tout le monde a sa propre définition du mot legacy, et nous on trouve que c’est la firme de Mountain View qui définit le mieux le concept de dette technique et va plus loin en proposant  [des moyens de la mesurer et la manager](https://newsletter.abinoda.com/p/measuring-and-managing-tech-debt). Et si le sujet vous branche, on vous conseille fortement ces articles des punks de chez CircleCI ([Technical debt: how to measure and manage it with DevOps](https://circleci.com/blog/manage-and-measure-technical-debt/)) et des hippies de chez Brainboard ([How to avoid Tech Debt?](https://blog.brainboard.co/how-to-avoid-tech-debt-1188633f1b21)) !

![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)

**Terraform incognita**

Je ne sais pas si vous avez suivi le drama de cet été, mais  [HashiCorp a décidé de changer son modèle commercial pour Terraform](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  et ses autres produits. Plus précisément, on parle d’un changement qui implique de passer d'une licence open source MPL 2.0 à un modèle propriétaire BSL (Business Source License) pour leur outil Terraform, outil qui est très largement utilisé pour automatiser les infrastructures.

Les raisons profondes de ce changement semblent puiser leurs sources dans de sombres histoires de rentabilité d’après ce qu’en dit Armon Dadgar, le co-fondateur de HashiCorp : “_Our approach has enabled us to partner closely with the cloud providers to enable tight integration for our joint users and customers, as well as hundreds of other technology partners we work closely with. However, there are other vendors who take advantage of pure OSS models, and the community work on OSS projects, for their own commercial goals, without providing material contributions back. We don’t believe this is in the spirit of open source_.”

Alors bien sûr, ça a suscité de grosses levées de boucliers et ça a surtout conduit à la  [création du mouvement OpenTF](https://opentf.org/announcement), qui envisage de produire un fork de Terraform tout en essayant de rejoindre la  [Linux Foundation](https://lwn.net/Articles/942770/)  pour maintenir Terraform open source. On leur souhaite bien du courage pour cette belle initiative !  

**Le monde merveilleux des Ops**

Hey, on connaît tous le SPF (Sender Policy Frameworks) qui nous aide à lutter contre le spam, mais savez-vous réellement comment ça fonctionne ? Cet  [excellent post archi-complet](https://www.netmeister.org/blog/spf.html)  va vous aider à comprendre le fonctionnement et l’implémentation du truc step by step comme on dit à Montargis.

Quand ça n’est pas  [la faute du DNS](https://www.cscdbs.com/blog/why-dns-is-the-biggest-single-point-of-failure/), c’est généralement la faute de Jean-Michel qui a encore fait tomber toute la prod. Et si on enlevait  [la notion d’erreur humaine](https://surfingcomplexity.blog/2022/05/30/imagine-theres-no-human-error/)  dans nos métiers ? C’est la question que se pose Lorin Hochstein dans un billet qui mêle neuro-sciences et facteurs d’erreur.

Après être partis de chez AWS pour revenir sur du on-prem,  [les coyotes de 37signals nous partagent la façon dont ils utilisent Prometheus pour ingérer, stocker et alerter](https://dev.37signals.com/prometheus-metrics-at-37signals/). Il s'agit du premier article d'une série sur l'observabilité, et on a hâte de lire la suite.

Ha et pour rester sur l’observabilité et histoire d’essayer de conserver un semblant de cohérence dans cette newsletter, on vous conseille de lire cet article des cowboys de chez Honeycomb.io sur  [les “DORA metrics”](https://www.honeycomb.io/observability-dora-metrics)  (DevOps Research & Assessment).  
  
On est tombé sur le blog de Anton Zhiyanov qui n’en peut plus de toutes ces blagues qu’on fait sur SQL et qui en a marre de tous ces langages qui débarquent pour essayer de le remplacer. Super drôle à lire,  [avec de véritables morceaux de mauvaise foi](https://antonz.org/fancy-ql/) dedans mais aussi d’excellentes réflexions sur la place de SQL dans nos métiers. Attention, on sent que le mec est quand même à cran, à lire sans se moquer.

On parlait de Hashicorp un peu plus haut et plus spécialement de Terraform, mais là on va vous parler de  [Vault et ses bénéfices](https://blog.cockpitio.com/devops/vault-overview/)  à travers ce très bon post de Mohamed Reda LARBI YOUCEF de chez Cockpit.io. Si vous ne connaissez pas encore Vault, jetez-vous dessus, on parie notre chemise que vous lui trouverez une place de choix dans votre infra.  
  
La gestion d’une organisation SRE varie d’une boîte à l’autre, cette cette fois-ci on va regarder du côté de  [chez Disney comment ça se passe](https://www.srepath.com/inside-disneys-site-reliability-engineering-practice/)  et on découvre plein de trucs sympas dans lesquels on peut piocher et s’inspirer, comme par exemple la culture des 3 C (Collaboration, Curiosity et Courage) chère à Riri Fifi et Loulou.

**Le coin du vigile**

Faire de la sécurité, c’est un peu comme marcher dans la vallée de la mort ou écouter un disque de Sardou en entier. Preuve de la complexité de ce métier, c’est au tour de Proofpoint de signaler à travers un article très complet et passionnant à lire  [une forte augmentation de l'utilisation d'EvilProxy](https://www.proofpoint.com/us/blog/email-and-cloud-threats/cloud-account-takeover-campaign-leveraging-evilproxy-targets-top-level)  pour compromettre des comptes cloud de dirigeants d'entreprise, et surtout des comptes Microsoft O365, malgré l'authentification multifacteur. Entre mars et juin 2023, c’est plus de 100 organisations qui ont été ciblées, affectant environ 1,5 million d'employés dans le monde. Sur les centaines de comptes compromis, 39% appartenaient à des directeurs, dont 17% étaient des DFA et 9% des CEO.

La technique de phishing, vieille comme le monde, consiste à envoyer un e-mail aux dirigeants, prétendant contenir un document à signer via DocuSign et intégrant un lien malveillant. En cliquant sur le lien, les dirigeants sont redirigés vers une fausse page d'authentification Microsoft 365 après plusieurs redirections. Si la victime s'authentifie, l'attaquant intercepte la connexion réelle à Microsoft 365, récupérant ainsi le mot de passe et le cookie de session. En utilisant ce cookie, l'attaquant peut accéder au compte sans nécessiter d'identifiants ou de second facteur. Il peut ensuite ajouter sa propre méthode d'authentification forte pour créer un accès persistant.  

J'aime lire

![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)

##### Hacke-moi si tu peux - Mémoires d'un cyberpirate repenti

On va rester dans le thème de la sécu avec un chouette livre qu’on a lu cet été. Écrit par Florent Curtet, c’est en quelque sorte son autobiographie qui retrace son parcours de jeune hyperactif qui devient black hat avant de se tourner vers le white hat. Alors c’est archi romancé forcément, mais suffisamment bien écrit et documenté pour nous tenir en haleine tout le long. A noter que Florent est maintenant le cofondateur de  [Hackers sans frontières](https://hwb.ngo/).