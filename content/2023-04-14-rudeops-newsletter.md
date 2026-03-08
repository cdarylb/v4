---
layout: post
title: Newsletter du 14 Avril 2023
tags: [devops, gitops, cloud]
---


*On le sait tous, conduire les yeux fermés avec les mains attachées dans le dos ne fait partie d’aucun set de bonnes pratiques automobiles. Et oui, c’est pareil pour le vélo pour ceux qui se posaient vraiment la question. Bref, transposez maintenant cette image à vos systèmes d’informations et vous saurez où je veux en venir : on ne peut pas piloter un environnement en étant aveugle, et un maximum d'investissement doit être mis en amont sur la supervision, l’alerting, et l’observabilité. Obvious ? Pas tant que ça, du moins lorsqu’on parle d’observabilité._*

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/EoSM3Xm1AxBfqGef7rNqIi7pyxAyGTxJj06Rw5jF.png)

## L'observabilité - tu me vois, tu me vois pas.

Alors bien sûr, tout le monde a une définition bien à soi de l’observabilité. La pieuvre de Mountain View préfère parler de  _“[tooling or technical solution that allows teams to actively debug their system](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability). Observability is based on exploring properties and patterns not defined in advance.”_  alors que chez les coyotes de New Relic on parle de  _“[proactively collecting, visualizing, and applying intelligence to all of your metrics](https://newrelic.com/blog/best-practices/what-is-observability), events, logs, and traces—so you can understand the behavior of your complex digital system”_. Vous la sentez la nuance entre le monitoring et l’observabilité ? Et pour aller plus loin, vous pouvez consulter  [ce post de Intercom](https://www.intercom.com/blog/engineering-observability/)  qui nous démontre avec quelques exemples comment ils se servent de l'observabilité tous les jours, à mettre en parallèle avec  [ce post de chez SquadCast](https://www.squadcast.com/blog/how-important-is-observability-for-sre)  qui nous explique à quel point les bénéfices apportés sont importants. Hey, on a aussi  [ce post](https://www.linkedin.com/pulse/5-stages-observability-maturity-model-logiq-ai/)  des bad boys de chez Logiq.AI qui récapitule tout ça à travers un modèle de maturité, que vous pouvez mettre en pratique avec les  [réflexions pertinentes des cowboys de chez TechTarget](https://www.techtarget.com/searchapparchitecture/tip/5-basic-strategies-for-distributed-systems-observability)  pour construire une vraie stratégie (et un solide dossier à destination de votre CTO pour lui demander des sous).  

**Cybersec**

Des signataires, dont certains sont des contributeurs de longue date, ainsi que des (co)fondateurs et/ou (co)leaders de projets phares de la communauté  [OWASP](https://owasp.org/), ont publié une  [lettre ouverte à la direction](https://github.com/owasp-change/owasp-change.github.io)  pour exprimer leurs préoccupations quant à l'avenir de l'organisation. Ils estiment que l'OWASP, créé il y a plus de 20 ans, doit évoluer pour répondre aux besoins de la communauté. Les signataires ont énoncé plusieurs points clés dans leur appel, notamment la nécessité de publier et de maintenir un plan de mobilisation, de restructurer la gouvernance, d'accroître le financement, de fournir une infrastructure et des services améliorés, et de mettre en place de véritables actions de gestion de la communauté. Les signataires souhaitent pouvoir créer des projets open source de qualité commerciale, sans pour autant devenir des projets open core.

Alors forcément,  [ça fait jaser](https://www.linkedin.com/pulse/deevolution-owasp-john-steven/), et les réactions exhortant à  [plus de transparence sur la gouvernance](https://www.darkreading.com/edge-articles/is-owasp-at-risk-of-irrelevance)  commencent à être de plus en plus virulentes sur la toile.

Nous on regarde ça de loin, un peu énervés et un peu tristes de voir tous ces gens intelligents se chamailler, car en plus de son célèbre  [top ten](https://owasp.org/Top10/fr/), l'OWASP a su créer un véritable écosystème dédié à la sécurité, et propulse aussi  [Zap](https://www.zaproxy.org/) qu'on aime beaucoup ici.

![](https://storage.mlcdn.com/account_image/325165/3YMNSIHlg60k8xuf6PGfU7xj0EXfMc0y4Y5JzfR8.png)

Et en parlant de l’OWASP,  [cet article de Sysdig](https://sysdig.com/blog/top-owasp-kubernetes/?utm_id=FAUN_Zeno366_Link_title)  vous présente les 10 principales vulnérabilités de sécurité OWASP pour les usines à gaz Kubernetes. On nous explique comment ces vulnérabilités peuvent être exploitées et on nous donne des conseils pratiques pour les atténuer. Les recommandations incluent la mise en place de politiques de sécurité, la gestion des identités et des accès, la configuration de l'infrastructure et la surveillance des activités suspectes, un peu comme dans une pub de services de télésurveillance, mais en mieux.  

Dans le troisième et dernier volet de la série d'articles intitulée "[Lateral movement risks in the cloud and how to prevent them](https://www.wiz.io/blog/lateral-movement-risks-in-the-cloud-and-how-to-prevent-them-part-3-from-compromis)" de chez Wiz, l'auteur aborde la façon de prévenir les compromis de comptes IAM qui sont souvent des cibles privilégiées pour les attaquants. L'article recommande de surveiller les activités des comptes IAM comme un Pierre Palmade en voiture, pour détecter tout comportement suspect et de mettre en place des politiques de sécurité solides pour les comptes IAM (rotation régulière des clés et l'utilisation de mots de passe forts, classique).

Comme on aime les noms rigolos, on vous présente aujourd’hui  [Medusa](https://en.kali.tools/?p=200), un super outil de brute-forcing qui vient avec un wagon de plugins qui nous parlent bien (POP3, CVS, FTP, HTTP, IMAP, SMB, SMTP, SNMP, SSHv2, MS-SQL, MySQL, NCP, PostgreSQL, rexec, rlogin, rsh, Telnet, SVN, etc). Livré de base avec Kali, il s’installe très bien sur Debian et fera la joie des petits et des grands le temps d'un après-midi pluvieux.

Et on allait oublier de vous parler de XXElixir, ça aurait été dommage car c’est du bel ouvrage comme on dit dans le bouchonnois :  _“This tool is designed to test for file upload and XXE (XML External Entity) vulnerabilities by poisoning an XLSX file”_.  [Ca se télécharge ici](https://github.com/kljunowsky/XXElixir)  et ça tourne bien entendu sur Docker.  

**Le monde merveilleux des Ops**

Dans la série, je me pose beaucoup trop de questions vaines, c’est au tour de Jeff Martens de  [se demander ce que signifie SRE](https://metrist.io/blog/is-sre-just-ops-with-a-new-name/)  et si c’est une évolution de nos métiers d’OPS. Au premier abord on pourrait trouver ça totalement stérile et on aurait envie de lui jeter des petits cailloux pointus à la figure, mais en fait c’est très plaisant à lire et ça nous montre à quel point nos métiers se métamorphosent et nous tirent vers le haut. Donc pas de petits cailloux cette fois-ci Jeff, mais on t’a à l’oeil.

Les mecs de la QA me font toujours penser à ces héros inconnus, qui œuvrent dans l’ombre et ne récoltent jamais les lauriers de la victoire, un peu comme ces unités qu’on parachute derrière les lignes ennemies. Mais je m’égare. Aujourd’hui c’est Heemeng Foo qui nous explique comment sa philosophie de test est inspirée de “L’art de la guerre”, de Sun Tzu : “[know yourself and your enemy and you will win every battle](https://heemeng.medium.com/sun-tzu-and-the-art-of-software-test-management-2279743b82f9)”. C’est super intéressant à lire, ça fourmille d’exemples pertinents et c’est un bel échantillon de pragmatisme et d’humilité.

Quand on vous dit que dans nos métiers on peut tout mesurer, c’est pas pour la déconne et on prend ça très au sérieux. C’est le cas de Ben Tasker -un anglais évidemment- qui a écrit un  [tuto très détaillé afin de monitorer son aquarium d’eau de mer](https://www.bentasker.co.uk/posts/blog/house-stuff/monitoring-a-fishtank-with-influxdb-and-g%20rafana.html)  (le filtrage, la température de l’eau, etc). C’est bien rédigé, c’est bien entendu à travers un Raspberry Pi qu’on procède, et ça donne plein d’idées, comme par exemple monitorer le nombre de salades par minutes que nous sort le gouvernement à chaque réforme.

C’est au tour d’Airbnb, la petite startup familiale californienne, de nous présenter  [une méthodologie complète pour gérer les incidents](https://medium.com/airbnb-engineering/incident-management-ae863dc5d47f)  de manière efficace avec beaucoup d’automatisme et pas mal d’outils que vous connaissez bien (Slack, Jira, Pager Duty…). On y apprend que cette méthodologie repose sur une approche en quatre étapes : préparation, réponse, résolution et analyse. Elle implique une communication claire et cohérente, des rôles clairement définis, une documentation complète et des procédures rigoureuses pour assurer une gestion transparente et rapide des incidents. La méthodologie a été testée avec succès lors d'incidents réels chez Airbnb et peut être assez facilement appliquée à d'autres boîtes, oui, même la vôtre, il y a plein de bonnes choses à prendre et à dupliquer chez vous.

C’est dans cet article qu’on nous explique enfin  [comment réaliser des démonstrations en mode CLI plus efficaces et sans erreurs](https://betterprogramming.pub/make-your-cli-demos-a-breeze-with-zero-stress-and-zero-mistakes-5e3f176d2fd3).On nous recommande l'utilisation de  [Asciinema](https://asciinema.org/) qui permet d'enregistrer des séquences de commandes et de les reproduire facilement dans une présentation, et plein d’autres outils qui vont simplifier la vie de vos avant-ventes. L'article fournit aussi des conseils pratiques pour préparer et organiser les démonstrations, comme l'utilisation de scripts, la sélection de scénarios clés et la mise en place d'un environnement sandbox séparé pour éviter les conflits avec les données de prod. Ca sent l’article écrit par un mec qui a loupé pas mal de démos et c’est vraiment très bien.

**J'aime lire**

##### The making of a manager - What to Do When Everyone Looks to You

Parce que les managers sont nos amis aussi, on vous conseille chaudement le bouquin écrit par  [Julie Zhuo](https://www.juliezhuo.com/book/manager.html) qui raconte l'histoire de sa propre expérience en tant que jeune manager dans une entreprise de la Silicon Valley. Le livre est rempli de conseils pratiques pour les nouveaux managers, basés sur les erreurs et les succès de Julie tout au long de sa carrière, et fourmille d'anecdotes et de cas pratiques.

Le livre se divise en trois parties : la première partie se concentre sur les défis initiaux rencontrés par les nouveaux managers, la deuxième partie explique comment construire une équipe performante, et la troisième partie aborde la façon de diriger efficacement une organisation.

Alors attention, ça s’adresse à des managers techs dans un contexte de startup, donc pas forcément applicable dans des boîtes style COGIP.