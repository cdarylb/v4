---
layout: post
title: Newsletter du 02 Octobre 2023
subtitle: Per Horus et per Ra et per Sol Invictus duceres	
thumbnail-img: /assets/img/Barbara Lit.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, terraform, cybersec]
comments: true
mathjax: true
author: RudeOps
---

_Signe incontestable de notre succès écrasant en France, et rendant jaloux tous nos copains anglo-saxons, nous lançons ce mois-ci notre premier podcast sur le thème du devops dans un format court (et pas du tout pro on doit l’avouer). Le but du jeu : demander à des mecs de la tech ce que c’est pour eux le devops, simple, basique. Même si c’est bien mainstream, on s’est dit que c’était un chouette canal supplémentaire de partage, mot qui apparaît 37 fois dans ce premier podcast. Bonne lecture et bonne écoute !_  
_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)

## Nos lecteurs ont du talent

C’est MB (pour Michel Blanc ?) aujourd’hui qui nous partage  [un lien passionnant tiré du blog technique de Slack](https://slack.engineering/traffic-101-packets-mostly-flow/). On y apprend comment une requête traverse toutes les couches réseaux chez Slack avant d’arriver à destination. On y croise tout ce qui fait le sel des grosses infrastructures réseaux, et on y découvre quelques services qu’on ne connaissait pas, dont  [Envoy](https://www.envoyproxy.io/)  développé par les coyotes de chez Lyft ainsi que les notions de Thundering herd problem et les politiques de failover. Un énorme merci pour ce partage MB, qui que tu sois !

On a aussi sélectionné le mail de Pascal B, un “sysadmin à l’ancienne” d’après ses dires, qui nous partage un article des copains de chez Thenewstack sur  [les différences entre l’observabilité et le monitoring](https://thenewstack.io/monitoring-vs-observability-whats-the-difference/), bien rédigé comme d’habitude et qui ouvrira de nouveaux horizons à ceux qui ont besoin de dépasser le stade du monitoring en leur filant quelques bases. Merci Pascal pour le partage, emoji coeur et emoji bisoux pour toi !  

Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et un dîner en tête à tête avec Bill Gates à gagner chaque semaine). Et si vous aimez vraiment ce qu’on fait avec nos petits doigts boudinés,  [n’hésitez pas à nous payer un café](https://www.buymeacoffee.com/rudeops)  !  

![](https://storage.mlcdn.com/account_image/325165/Bgpcb7NSvVCGwSpHQgh1Mx1O6lX5mtftUcKUtHwg.png)

**Goooood morning devops !**

Pour ce premier podcast on reçoit  [Damien Claisse](https://www.linkedin.com/in/damienclaisse/), SRE chez Criteo, qui nous explique comment il voit le paradigme devops et nous partage quelques réflexions super stylées.

[Ecouter le podcast](https://podcast.ausha.co/rudeops)

**Ghost in the shell**

L’avantage de bosser sur Linux, c’est qu’on peut tout tuner selon ses goûts et ses besoins, du noyau jusqu’au papier peint, un peu comme un jacky fou le dimanche matin sur le parking de Carrefour en quelque sorte. Et pas la peine de baisser les yeux : passer plusieurs heures pour customiser son système, on l'a tous fait et c’est normal. Et généralement, là où on passe le plus de temps après avoir  [compilé son noyau aux petits oignons](https://medium.com/@tushar.jadhav29/linux-kernel-tuning-f888d7f83aab), c’est sur son terminal,  [et plus précisément sur son shell](https://www.fosslinux.com/101555/customizing-bash-tips-tricks-for-a-personalized-shell-environment.htm), le but étant d’obtenir un shell qui colle au maximum à votre activité ou vos habitudes. Alors pour ça on ne va pas tourner autour du pot très longtemps, il y a une super alternative qui poussera votre shell dans ses derniers retranchements en la personne de  [Oh My Zsh](https://ohmyz.sh/)  et ses nombreux  [plugins](https://blog.larsbehrenberg.com/how-to-install-custom-plugins-and-themes-with-oh-my-zsh) (installez  [Zap comme plugin manager](https://itnext.io/supercharge-zsh-with-zap-a9515bd1487)  par exemple), à essayer pour ceux qui ne connaissent pas, vous ne  [pourrez plus vous en passer](https://dev.to/cassidoo/customizing-my-zsh-prompt-3417). Dans un autre style on vous invite à tester  [Oh My Posh](https://ohmyposh.dev/)  qui pousse les potards encore un peu plus loin et fera ressembler votre shell à un sapin de Noël, mais c’est un peu ça qu’on veut non ?

**Terraform incognita**

Vous vous souvenez que cet été,  [HashiCorp a choisi de passer à la licence BSL](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  pour tous ses produits open source, provoquant une vive réaction de la part de ses utilisateurs et du monde de l’open source. Des éditeurs et startups utilisant Terraform ont menacé de créer un fork si HashiCorp ne faisait pas marche arrière, et c’est le 25 août que  [OpenTF](https://github.com/opentofu/manifesto) a donc créé  [un fork de Terraform récemment baptisé OpenTofu](https://opentofu.org/), avec le soutien de la Linux Foundation et de plus de 140 entreprises. OpenTofu prévoit une version sous licence MPL 2.0 pour assurer la continuité de Terraform et  [la gouvernance du projet sera alignée sur celle de la Linux Foundation](https://www.linuxfoundation.org/press/announcing-opentofu)  ce qui réjouit fortement  [Jim Zemlin](https://www.linkedin.com/in/zemlin/), hippie en chef de la LF :  _“The launch of OpenTofu signifies a collective commitment to fostering truly open collaboration and innovation in the realm of infrastructure as code. OpenTofu's dedication to open source principles underscores our shared vision of providing accessible, reliable tools that empower the tech community”_. On leur souhaite une bonne continuation, et on gage que d’autres initiatives du même genre vont éclore régulièrement dans un écosystème où l’équilibre tacite et délicat entre business et open-source doit être respecté, même si ça n’est  [pas un avis partagé par tout le monde](https://medium.com/@hello_9187/why-we-are-not-supporting-opentf-a46855f52dc4)  et que certains arguments ne sont pas délirants. Une histoire d’équilibre qu’on vous dit…  

**Le monde merveilleux des Ops**

On s’est déjà tous posé ce genre de questions : dois-je pointer ou tirer ? Dois-je reloader ou restarter mon HaProxy ? Bref aucune idée pour la première, mais les coyotes de chez HaProxy nous ont rédigé  [un chouette guide avec une matrice d’actions](https://www.haproxy.com/blog/should-you-reload-or-restart-haproxy)  qui nous permet de savoir quoi faire et quand le faire. Ils y expliquent aussi ce qu’il se passe en backend lors d’un restart ou d’un reload, et c’est comme d’habitude passionnant à lire et méga instructif.

Vivons heureux vivons caché est une belle maxime qui a inspiré pas mal de technos : Memcache, Varnish, Redis… Et c’est de ce dernier dont on va parler à travers un long billet posté sur le  [blog tech des cowboys de chez SemaphoreCI](https://semaphoreci.com/blog/redis-architectures). C’est une superbe introduction à Redis et le billet y aborde différents sujets (type de déploiement, type de configuration, conseils de mise en place suivant le contexte, etc). C’est vraiment très riche et on y apprend plein de trucs, on vous conseille vraiment de le lire.

Et en parlant de technos de punks, on est tombé sur cet article rigolo qui fait  [une analogie entre quelques briques techniques et la vie de tous les jours](https://dev.to/aws-builders/load-balancer-reverse-proxy-and-api-gateway-analogies-to-real-life-scenarios-54el). Facile à lire, ça fera sourire les vieux routards et vous permettra sans doute d’expliquer à votre vieil oncle un peu bizarre le rôle d’un load balancer.

Lors de notre veille, on est aussi tombé sur  [Sealos](https://github.com/labring/sealos), une distribution cloud qui embarque un kernel “K8s based”. On n’a pas eu le temps de tester mais ça a l’air prometteur pour qui veut lancer des applis rapidement. On a par contre testé  [TravelGrunt](https://github.com/ivanilves/travelgrunt) qui nous permet une navigation plus rapide à travers nos repos grâce à un système d’alias tout bête. On vous conseille de jeter un coup d’oeil c’est du temps d’économisé.

On aime beaucoup  [Github Actions](https://docs.github.com/fr/actions/quickstart)  qui apporte des bénéfices rapides et pas chers et permet de mettre en place  [des solutions de déploiement assez sexy](https://kinsta.com/fr/blog/github-actions-secrets/), mais là on va vous partager  [une critique approfondie de GitHub Actions](https://blog.yossarian.net/2023/09/22/GitHub-Actions-could-be-so-much-better), qui aborde quelques défis de sécurité intéressants, qui va insister sur les cycles de debug qui peuvent être aussi longs qu’une soirée du nouvel an, et plein d'autres aspects, tout en proposant des suggestions d'amélioration bien smart ma gueule comme on dit à Montargis.  
  
Priyansh Khodiyar a une passion dans la vie, c’est le Python, et il nous a rédigé  [un beau billet sur la place du Python dans le domaine du DevOps](https://blog.devgenius.io/python-for-devops-a-definitive-guide-f4785a60007e). On fera un tour d’horizon sur les modules les plus populaires (on y retrouvera bien sûr les indispensables Requests, Json et Sys etc) et vers la fin quelques scripts pratiques dont vous pouvez vous inspirer dans votre travail de tous les jours. Et en parlant de scripts pratiques en Python vous pouvez aussi piocher  [quelques trucs sympas ICI](https://medium.com/@hannanmentor/20-python-scripts-with-code-to-automate-your-work-68662a8dcbc1).

**Un peu de sécu**

![](https://storage.mlcdn.com/account_image/325165/KeJevd4fqZYRG8M4ZHssWPKFAp5PVHsc4ofuW0ld.png)

##### Pas très Coubertin

On avait un peu zappé, mais les gendarmes des internets, l’ANSSI, ont publié un chouette  [mémo sur l’évaluation de la menace informatique liée aux grands évènements sportifs](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-005/), avec un focus particulier vous vous en doutez sur la coupe du monde de rugby et les Jeux Olympiques de 2024. Comme d’habitude on a droit à une belle synthèse prenant en compte les contextes de chaque événement, en faisant un focus particulier sur la surface d’exposition étendue et les différents types d’attaques envisagées (ça va du ransomware au chantage par DDoS, en passant par l’espionnage). A lire comme d’habitude et à forwarder à son RSSI pour se faire bien voir.

Un article sympa à lire chez MalwareByte qui fait  [une synthèse des actualités sur les rançongiciels et des groupes de piratins](https://www.malwarebytes.com/blog/threat-intelligence/2023/09/ransomware-review-september-2023)  qui se la donnent à fond à travers un joli classement. On y apprend par exemple que  [le groupe Lockbit](https://siliconangle.com/2023/09/26/lockbit-3-0-tops-hacking-list-august-amid-decrease-ransomware-attacks/)  est revenu à la première place du classement après une baisse constante de son activité durant les quatres derniers mois les pauvres choupinous (émoji triste).

Et pour finir, un papier tiré d’un  [exercice CTF vachement instructif](https://alexandertasse.medium.com/blue-team-labs-employee-of-the-year-6c922203ea8d). Le but du jeu est simple : “_John received the 'Best Employee of the Year' award for his hard work at FakeCompany Ltd. Unfortunately, today John deleted some important files (typical John!). It’s your job to recover the deleted files and capture all the flags contained within!_”. Toujours aussi passionnant, aussi bien sur les méthodes employées pour retrouver les documents que les outils (on y croisera du binwalk, du foremost et plein d’autres que vous aurez hâte d’essayer).