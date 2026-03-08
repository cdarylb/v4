---
layout: post
title: Newsletter du 01 Juin 2023
subtitle: Et notre décision est irrévocable.	
thumbnail-img: /assets/img/eternue.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, ransomware, cloud]
comments: true
mathjax: true
author: RudeOps
---


_La nuit dernière j’ai rêvé que Koh Lanta proposait des épreuves d’admin sys. C’était assez fou, avec un Denis Brogniart surexicté qui hurlait “et maintenant l’équipe des jaunes va devoir installer un cluster Kubernetes sur un Raspberry Pi émulé par un windows server, mais attention nouvelle règle, l’utilisation d’un IDE et du YAML est interdite !”. Sur le coup ce matin ça m’a fait marrer mais ça m’a surtout fait prendre conscience que nos métiers deviennent archi compliqués et spécialisés, et que le temps du Keep It Simple Stupid semble tristement révolu._

_Cyril_  


## Nos lecteurs ont du talent !

C’est encore Christophe M. qui nous envoie un email cette semaine et qui insiste, le lourd, pour nous parler de  [la métaphore du singe sur l’épaule](https://www.4tempsdumanagement.com/La-metaphore-du-singe-sur-l-epaule-Monkey-management_a7024.html). Alors ça n’a qu’un lointain rapport avec le sujet du DevOps, mais force est de reconnaître que la lecture de cet article ferait du bien à certains managers, débutants ou confirmés, alors on te remercie quand même Christophe !

Alors que la plèbe utilise encore nslookup qui est resté  [deprecated un bon paquet d’années avant d’être à nouveau réintégré par l’ISC](https://gitlab.isc.org/isc-projects/bind9/-/commit/fb2c34419d268d36acb222e08e6f789b45a81306), les élites eux utilisent dig depuis longtemps, alors vous aussi lancez un regard dédaigneux vers la populace et  [apprenez à utiliser dig grâce à ce très chouette tuto](https://adamtheautomator.com/linux-dig/). On remercie Laure R. de nous avoir proposé cet article, merci soeurette !  

**Du côté des ops**

Il y a des joies simples et saines dans la vie, comme  [se moquer d’un développeur Java](https://tech.jonathangardner.net/wiki/Why_Java_Sucks)  ou mettre en place une stratégie pour scaler son architecture big data, et c’est justement de ça dont va vous parler Jordan Tigani de chez Motherduck. C’est  [un article passionnant](https://motherduck.com/blog/the-simple-joys-of-scaling-up/)  qui fait un grand tour d’horizon depuis les débuts de mapreduce jusqu’à aujourd’hui, en abordant aussi bien la partie hard que soft. Indispensable pour ceux qui ont les doigts plongés dans la data toute la journée.

Question pour Jean Michel maintenant ! Top ! Je suis un outil conçu pour automatiser le provisionnement et la gestion des ressources d'infrastructures, qu'il s'agisse de machines virtuelles, de conteneurs, de réseaux, de bases de données ou d'autres services cloud. Il permet aux équipes d'infrastructure de décrire leur infrastructure cible dans un format déclaratif plutôt que de la configurer manuellement, je suis, je suis ? Oui Jean-Michel c’est bien de Terraform dont il s’agit, bravo, vous remportez ce magnifique  [article qui vous explique les bénéfices de Terraform en 5 minutes](https://dzone.com/articles/terraform-explained-in-5-minutes)  !

Et en parlant de Terraform, les coyottes de chez Spacelift.io nous partagent les  [20 best practices](https://spacelift.io/blog/terraform-best-practices)  à appliquer lorsque vous commencez à utiliser Terraform, c’est à portée de tout le monde et super didactique.

![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)

Il y a quelques semaines on vous parlait du scan url de  [Cloudflare Radar](https://radar.cloudflare.com/)  qui continue à s’étoffer de plus en plus, (jetez un coup d’oeil, ça commence à être pas mal sexy), mais cette fois-ci, les cowboys de CloudFlare nous partagent un chouette post sur la façon dont  [sont gérées leurs instances Prometheus](https://blog.cloudflare.com/how-cloudflare-runs-prometheus-at-scale/), plein de bonnes choses dont on peut s’inspirer surtout si vous avez des problèmes de scaling (de leur côté ils communiquent sur 916 instances Prom…).

On continue un peu sur la lancée du monitoring avec ce post de Nagaraj Tantri qui nous explique  [les vertus du test en environnement de production](https://nagaraj-tantri.medium.com/test-in-production-the-ideal-monitoring-587b23a541f9). Le post oscille entre le troll et les évidences mais a pas mal enrichi nos réflexions ici, et c’est plus fin qu’il n’y paraît, à lire à tête reposée.

Mettre toutes ses variables d’environnement comme un gros sale dans son .env n’est pas une solution, même si on l’a tous fait, et aujourd’hui c’est Tony qui nous en parle en développant  [quelques solutions pour perdre cette mauvaise habitude](https://medium.com/@tony.infisical/the-death-of-the-env-file-6d65bfc6ac5e).

On vous a beaucoup parlé de  [Gitops](https://www.redhat.com/fr/topics/devops/what-is-gitops) dans les dernières itérations de notre newsletter, et cette fois-ci, c’est à travers la voix de  [Brendan Burns](https://www.linkedin.com/in/brendan-burns-487aa590/), un des créateurs de Kubernetes, qu’on vous en reparle. C’est en effet lors de la dernière GitOpsCon que Burns a commencé par expliquer comment GitOps et Kubernetes sont intimement liés et que pour lui GitOps est une évolution de Kubernetes.  [Un article passionnant à lire chez les copains de TheNewStack](https://thenewstack.io/gitops-as-an-evolution-of-kubernetes/), qui fait néanmoins un peu froid dans le dos quand on sait que Burns est aussi VP chez  [la pieuvre de Redmond](https://www.microsoft.com/fr-fr).

Pour conclure, on vous partage ce post de blog de Ross Brodbeck qui enrichit de ses réflexions le fameux  [chapitre 3 du SRE Book de Google](https://sre.google/sre-book/embracing-risk/)  sur la  [gestion des risques quand on est un SRE](https://hross.substack.com/p/managing-risk-as-an-sre).  

**Un peu de cybersec ?**

![](https://storage.mlcdn.com/account_image/325165/tbc3y0c957mIiA6eKvvloUc62Wc7XuO094eO1Viq.png)

##### RaaS le bol !

Chez les piratins on ne connaît pas la crise, et les  [Ransomwares as a Service](https://www.crowdstrike.fr/cybersecurity-101/ransomware/ransomware-as-a-service-raas/)  (RaaS) continuent d’évoluer pour devenir l'une des menaces les plus redoutables dans le paysage déjà bien parano de la cybersec. Ce modèle, permettant à des scripts kiddies ou à des organisations criminelles d'accéder facilement à des outils sophistiqués de ransomwares, connaît une  [évolution fulgurante](https://socradar.io/evolution-of-ransomware-so-far-and-hereafter/), accentuant ainsi le danger qu'il représente pour les entreprises et toi, plus moi, plus eux, plus tous ceux qui le veulent comme dirait Grégoire, notre pentester favori.

Selon des rapports récents de plusieurs organismes de sécurité, les RaaS sont en constante expansion, avec une augmentation significative du nombre de groupes proposant ses services sur le Darknet. En 2022,  [le nombre de ces groupes a augmenté de plus de 150 % par rapport à l'année précédente](https://www.europol.europa.eu/publications-events/publications/ransomware-what-you-need-to-know).

Une étude réalisée par  [le FBI a révélé qu'en 2021](https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf), les attaques de ransomwares ont causé plus de 20 milliards de dollars de pertes financières dans le monde, avec des victimes qui paient en moyenne  [des rançons de plusieurs centaines ou milliers de dollars](https://www.cloudwards.net/ransomware-as-a-service/#:~:text=RaaS%20operators%20offer%20their%20services,making%20it%20a%20tempting%20proposition.), autant dire que faire du RaaS est lucratif, surtout qu’on se voit maintenant proposer  [des kits prêts à l’emploi](https://thehackernews.com/2023/05/new-michaelkors-ransomware-as-service.html)  avec toutes les options indispensables by design (anonymat via des vpn douteux, cli documenté, interfaces travaillées, etc).

Les cibles des RaaS se sont également diversifiées : alors qu’avant les entreprises étaient les principales victimes, les particuliers et les  [organisations publiques](https://www.liberation.fr/societe/sante/un-hopital-dile-de-france-cible-par-des-hackers-avec-une-rancon-de-10-millions-deuros-20220822_63ZGXL3L6ZCXDJYIZYMHEO67OY/)  sont désormais également visés. Les secteurs de la santé,  [de l'éducation](https://www.leparisien.fr/paris-75/on-ressort-les-craies-liut-paris-rives-de-seine-victime-dune-cyberattaque-07-12-2022-TNEPJBA425B6DOUU532HTU77GQ.php)  et des  [services financiers](https://www.argusdelassurance.com/assurance-dommages/risques-d-entreprise/cyber-attaques-les-services-financiers-et-l-assurance.194312)  sont particulièrement vulnérables, étant donné la sensibilité des données qu'ils détiennent et le manque de moyens mis à disposition pour contrer ce type de menaces.

[Même si certains groupes très actifs sont arrêtés](https://www.lemondeinformatique.fr/actualites/lire-europol-et-le-fbi-frappent-en-plein-coeur-le-ransomware-hive-89349.html), l’évolution constante du nombre d’acteurs, associée à des chiffres alarmants, souligne l'urgence d'une prise de conscience et de mesures de sécurité renforcées pour lutter contre cette menace persistante. Pour finir, et si vous voulez voir à quoi ressemble une attaque par RaaS, lisez ce  [post forensic des outlaws de chez Varonis](https://www.varonis.com/blog/hive-ransomware-analysis), c’est vraiment super instructif.  

On va essayer de repartir sur des sujets plus légers, mais la cybersec n’est décidément qu’un monde rempli de larmes et de sang. Allez, il y a bien  [Wireshark qui vient de passer en version 4-0-6](https://cybersecuritynews.com/wireshark-4-0-6/)  et qui amène une belle liste de bug fixes et de nouvelles fonctionnalités, et impossible de ne pas vous partager cette liste des [20 meilleurs threat hunting tools](https://cybersecuritynews.com/threat-hunting-tools/)  selon les barjots de CyberSecurityNews.

On peut aussi s’attarder quelques minutes sur l’article des joyeux drilles de chez Talos qui nous parlent d’un nouveau PaaS (Phishing as a Service, quel monde merveilleux…)  [surnommé Greatness avec le mode d’attaque](https://blog.talosintelligence.com/new-phishing-as-a-service-tool-greatness-already-seen-in-the-wild/)  expliqué step by step comme on dit à Montargis.

Il y a aussi QBot, le malware plein de malice qui fera rire petits et grands en  [exploitant une faille dans une DLL du Wordpad de WIndows](https://www.bleepingcomputer.com/news/security/qbot-malware-abuses-windows-wordpad-exe-to-infect-devices/), mais en même temps qui utilise ce genre d’OS ?

Terminons le plus sereinement du monde avec le  [malware Legion](https://thehackernews.com/2023/05/legion-malware-upgraded-to-target-ssh.html)  qui se met tristement à jour en se dotant de fonctionnalités étendues permettant de compromettre des serveurs SSH ainsi que des identifiants AWS associés à DynamoDB et CloudWatch.  

**Les apps à la cool**

Aujourd’hui on vous parle de  [Motus](https://github.com/oleiade/motus) (rien à voir avec l'émission TV ne partez pas) une application écrite en Rust et qui génère des mots de passe avec plein d’options vraiment cool, et que vous pouvez intégrer facilement dans pas mal de routines au boulot. Il y a aussi  [Pyscan](https://github.com/aswinnnn/pyscan) qui propose un scanner de vulnérabilités de dépendances pour vos projets python, on est sûr que vous allez lui trouver une utilité. On a aussi beaucoup aimé  [ce repo Github](https://github.com/devopsdemoapps/microservice-app-example)  qui met à disposition une webapp de test constituée d’une foule de microservices, c’est vraiment idéal pour tester son infra et travailler sur une sandbox. Et pour conclure on a découvert -certainement après tout le monde- ce repo Github qui propulse Super-Linter,  [un linter universel qui prend en charge une large gamme de langages](https://github.com/github/super-linter). Initialement développé par la team DevOps de Github pour les aider à maintenir leur documentation et leur code de manière cohérente, ils l'ont rendu accessible en open source afin que l'ensemble de la communauté puisse l'utiliser et l'améliorer.

**J'aime lire**

![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)

##### The art of capacity planning

On a décidé de vous parler  [d’un vieux bouquin](https://www.oreilly.com/library/view/the-art-of/9780596518578/), qui a dû être édité un peu avant 2009 ou pas loin en tout cas, et si on a décidé de vous en parler, ça n’est pas par nostalgie non, car notre coeur est dur comme la pierre et nous n’avons plus aucune illusion sur notre métier, mais plus pour les qualités innées de ce livre.

Ecrit par John Allspaw, ancien boss tech de Flickr (oui ça date) et de Etsy, pas mal de réflexions sont encore d’actualité et nous permettent aussi de mesurer le chemin accompli durant cette dernière décennie. Et c’est passionnant de remettre le nez dedans à notre époque ! L'ouvrage aborde plusieurs concepts clés liés au capacity planning. Il explique en détail ce que c’est, comment le mesurer et comment évaluer la charge qu'un système peut encaisser dans une période donnée. Allspaw met en évidence l'importance de comprendre les limites d'un système et les conséquences de les dépasser. A une époque où les offres de AWS étaient considérées comme avant-gardistes, Allspaw aborde également des sujets tels que la gestion des pics de charge, la mise à l'échelle des systèmes, l'optimisation des performances et la résolution des goulots d'étranglement. Il explore différentes approches pour équilibrer la demande et la capacité, en tenant compte des contraintes et des coûts associés. Un classique qu’on vous dit.