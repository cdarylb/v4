---
layout: post
title: Newsletter du 15 Mars 2023
tags: [devops, gitops, cloud]
---





*Bienvenue sur RudeOps.com, la newsletter dédiée à la tech en général et au devops ! Déjà 25 ans que je travaille dans l’IT (ouch) ! Et un des aspects les plus plaisants de mon boulot consiste à faire de la veille techno. A travers cette newsletter, c’est un peu mon panorama de veille que je vous partage : des sujets qui m'ont éclairé sur une nouvelle manière de faire, un outil sympa à utiliser, une actualité qui marque les tendances… Et comme le partage fait partie du paradigme devops, autant diffuser ça au plus grand nombre avec une touche d’ironie et d’humour qui fait du bien à des sujets généralement arides. Bonne lecture à tous !
Cyril*  


**Gitops, un nouveau set de bonnes pratiques**

Après Devops, DevSecOps, NoOps et Rollmops* voici un nouveau venu, GitOps, qui commence à faire doucement parler de lui à travers un ensemble de bonnes pratiques très simples à résumer, l'idée centrale de GitOps étant d'avoir un référentiel Git qui contient les descriptions déclaratives de l'infrastructure dans l'environnement de production, et un processus automatisé pour faire correspondre l'environnement de production à l'état décrit dans le référentiel (oui ça fait une grande phrase mais étant payé au mot je me fais plaisir). Si vous souhaitez déployer une nouvelle application ou mettre à jour une application existante, il vous “suffit” de mettre à jour le référentiel et le processus automatisé gèrera tout le reste. Les coyotes de chez codefresh proposent  [deux cours interactifs](https://learning.codefresh.io/start)  (avec certification de suivi de cours) très bien fichus avec  [argocd](https://argo-cd.readthedocs.io/en/stable/) et un cluster Kubernetes pour comprendre les implications portées par Gitops et ses avantages. Ça vaut 50 dollars pour ceux qui peuvent, autrement vous pouvez piocher  [dans la littérature offerte par les internets](https://www.redhat.com/fr/topics/devops/what-is-gitops)  qui commence à s’étoffer  [un peu partout sur le sujet](https://blog.devops.dev/gitops-multi-tenancy-with-argo-cd-74ce8ec3bbf5).

*Humour toujours ! Je fais aussi les mariages et les enterrements de vie de garçon.  

**Le cloud, tu l'aimes ou tu le quittes**

C’est un peu ce qui est en train de se passer avec  [Basecamp](https://basecamp.com/) à travers  [un message de son cofondateur David Heinemeier Hansson](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0), notamment connu pour être le géniteur de RoR. David semble un peu chafouin sur le sujet et se rend compte qu’en se passant des services d’AWS il économiserait 7 millions de dollars sur 5 ans, tout ça en remontant des serveurs from scratch. Son message est assez intéressant car il détaille les bénéfices attendus par son abandon du cloud :  _“[...] we'll have much faster hardware, many more cores, incredibly cheaper NVMe storage, and room to expand at a very low cost”_. Il précise que la taille de son équipe d’ops ne changera pas et que c’est avec Dell qu’il travaillera. Ce qu’il ne précise pas, ce sont les vraies raisons qui lui font quitter AWS. Abandonner du PaaS pour ré-inventer la roue et économiser 7 millions de dollars sur 5 ans, pour une boîte qui fait plusieurs dizaines de millions de bénéfices annuels il y a de quoi se poser la question, mais ça illustre bien la tendance actuelle qui est de se réapproprier sa chaîne de valeur et sa gestion des données.

**Cybersec**

Parce que la cybersec c’est avant tout la possibilité de donner des noms rigolos à plein d’outils différents, on vous présente aujourd’hui  [Cadaver](https://www.kalilinux.in/2021/06/cadaver-exploit-http-put-vulnerability-kali-linux.html). J’avoue qu’avec un nom pareil ça donne pas envie de le lancer, mais force est de reconnaître qu’il rend bien service dans le cadre d’un pentest :  [pouvoir se connecter en webDAV à un serveur distant](https://null-byte.wonderhowto.com/how-to/exploit-webdav-server-get-shell-0204718/). En plus il est intégré de base à la distrib  [Kali](https://www.kali.org/), que demander de plus ?

Et en parlant de Kali, saviez-vous que cette distribution  [fête ses 10 ans](https://www.kali.org/blog/kali-linux-2023-1-release/)  et que sa dernière version vient tout juste de sortir ? Elle embarque le très attendu "pack" [Kali Purple](https://www.kali.org/blog/kali-linux-2023-1-release/#kali-purple)  dédié cette fois à la sécurité défensive, et qui inclut une centaine d'outils comme Malcolm, Surricata, Arkime, TheHive, et Michel Drucker, même si j'ai un doute sur ce dernier. Et le truc classe c'est qu'un  [wiki est déjà disponible](https://gitlab.com/kalilinux/kali-purple/documentation/-/wikis/home)  pour vous aider à prendre en main Kali Purple !

C’est à travers le  [panorama de la cybermenace](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-001/), publié tous les ans par l’ANSSI, qu’on apprend que  _“le niveau général de la menace se maintient en 2022 avec 831 intrusions avérées contre 1082 en 20211 . Si ce nombre est inférieur à celui de 2021, cela ne saurait être interprété comme une baisse du niveau de la menace”_. Une quarantaine de pages à lire  [ICI](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-001/)  même si ça fait un peu froid dans le dos.

Ca va faire plaisir à vos pentesters favoris qui galèrent avec les (trop) nombreux filtres de Wireshark : les techs de chez Ignite Technologies ont sorti une mind map gigantesque répertoriant tous les filtres sobrement intitulée “[Wireshark Display Filter Cheat Sheet](https://github.com/Ignitetechnologies/Mindmap/tree/main/Wireshark)”. Et comme les mind maps c’est à la mode, on vous propose aussi celles de Kerolos qui reprend les  [escalades de privilèges](https://github.com/noby0x1/Mind-Maps)  sur les grands classiques, AD Windows et Linux.

On termine avec ce  [magnifique exemple de mouvement latéral](https://thehackernews.com/2023/03/lastpass-hack-engineers-failure-to.html)  qui a conduit à une grosse brèche chez LastPass. La cause ? Le Plex Server d’un employé qui n’était pas à jour. Bon, dans les faits c'est  [un peu plus compliqué que ça](https://www.lemonde.fr/pixels/article/2022/12/23/le-gestionnaire-de-mots-de-passe-lastpass-touche-par-une-fuite-de-donnees_6155508_4408996.html), mais on en connaît un qui va payer ses croissants jusqu'à la fin de sa vie.

**Le coin des livres**

![](https://storage.mlcdn.com/account_image/325165/qmKg4wBqo3gFr8vj5ZpSSGwQOpnYUWKKDjPatYB9.png)

**The devops handbook**

Si vous n'avez ni le temps ni l'envie de vous farcir la pléthore de livres qui essaient d’expliquer tant bien que mal ce qu’est le devops et à quoi ça sert, alors n'en lisez qu'un : The Devops Handbook. [On vous conseille ce classique](https://itrevolution.com/product/the-devops-handbook-second-edition/)  qui résume parfaitement ce qu’est le paradigme devops et comment mettre en place devops dans votre organisation. The Devops Handbook, c’est écrit à plusieurs mains par des gens très bien comme Patrick Debois et Gene Kim pour les plus connus, et c’est 100% sans bullshit.

**The manager's path**

Ce qui devait arriver arriva, vous avez été promu (ou puni) manager d’une équipe technique, et vous ne savez pas trop comment gérer Kevin le dev full stack qui code divinement bien mais se comporte comme un vrai con ? Pas de panique, le livre “[The Manager’s Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)” de l’excellente Camille Fournier vous donne plein de clefs pour réussir votre nouvelle mission. C’est sans doute le seul livre sur le sujet qui est à la portée de tout le monde et qui s’appuie sur des cas concrets que vous rencontrez tous les jours dans votre mission de manager (comment bien staffer mon équipe, comment évaluer sa capacité à faire, etc). Encore une fois 0% de bullshit dedans. Si vous ne pouvez pas l’acheter, volez-le !

**Orchestration et compagnie**

Comment ne pas parler de  [LazyDocker](https://github.com/jesseduffield/lazydocker), une UI génialissime qui se lance dans un term et qui gère aussi bien docker que docker-compose. Ça fait gagner un temps fou et permet de diagnostiquer un problème en un seul coup d'œil sans avoir à se rappeler les  [nombreuses commandes docker](https://dockerlabs.collabnix.com/docker/cheatsheet/)  genre quand vous avez un accident en prod et que votre boss est assis juste derrière vous. C’est écrit en Go et c’est disponible  [ICI](https://github.com/jesseduffield/lazydocker).

Autre outil précieux qui ne sauve pas des vies mais permet d’avoir un diagnostic rapide sur une machine, c’est  [Glances](https://nicolargo.github.io/glances/), une énième alternative à htop comme il en arrive une tous les ans. Alors c’est classieux, ça dispense beaucoup d’informations dans un espace réduit, il y a même une UI web pour les allergiques au terminal, et on peut faire de l’export vers de l’influxdb. Oui ça gère aussi vos dockers. On dit un grand merci à son  [créateur](https://github.com/nicolargo) qui est français !  

On ne va pas se mentir, on est parfois un peu foufou et l’idée de refaire un projet from scratch semble certaines fois pertinente. Sauf qu’il suffit d’exhumer  [ce vieux post de Joel Spolsky de Avril 2000](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)  (oui, nous sommes décidément à la pointe de l'actualité) qui nous explique que oui mais non, tout refaire from scratch ça n’est jamais la solution ultime et que ça peut se révéler plus catastrophique que jamais, la preuve par quatre avec l’exemple de Joel au sujet de Netscape (ça ne nous rajeunit pas).  
  
Parce qu’il est toujours bon de se moquer des développeurs, vous ai-je parlé de ce magnifique repo intitulé  [Tragic Methods](https://github.com/neemspees/tragic-methods)  ? Ne cliquez pas sauf si vous avez le coeur solidement attaché.

Envie de briller en soirée, goût du challenge ou un besoin pressant de réviser ses bases avant un entretien qui s'annonce complexe ? Pas de panique, vous trouverez  [sur ce repo](https://github.com/bregman-arie/devops-exercises)  pas moins de 2619 exercices (j'ai compté, c'est bien le nombre exact) sur tout ce qui constitue devops. On y trouve des exercices (chaque fois avec les réponses) sur un très laaaaaaaarge périmètre, qui va des définitions du paradigme devops à des exercices plus rugueux sur le DNS ou la CI/CD. C'est une source assez incroyable et très bien documentée pour réviser et/ou apprendre, on vous le conseille donc à 100%.