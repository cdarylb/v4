---
layout: post
title: Newsletter du 15 Décembre 2023
subtitle: La newsletter sans 49.3	
thumbnail-img: /assets/img/Tuyaux.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, Docker, GSQL]
comments: true
mathjax: true
author: RudeOps
---

_Voici venir la dernière newsletter de l’année, la 17ème depuis qu’on a lancé RudeOps. On vous souhaite beaucoup de plaisir à la parcourir et comme d’habitude, on croise très fort nos petits doigts en espérant que certains sujets éveillent un intérêt applicable directement ou pas dans vos organisations. Bonne lecture à tous, bonnes fêtes de fin d’année, on se retrouve de l’autre côté en 2024._

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/ZQnyEP9pdesJ7X8SGo8b0QWZiTXeXxHTpzoVkCAT.png)

## Nos lecteurs ont du talent

C’est une fois de plus le mystérieux JMB qui nous a partagé un peu de sa veille tech, notamment un post super intéressant d’un mec de chez Infracloud qui dresse  [la liste des 6 raisons qui font qu’une organisation de platform engineering peut se planter](https://www.infracloud.io/blogs/how-to-fail-at-platform-engineering/). On y retrouve les grands classiques comme le silotage de l’activité, un design tech trop complexe ou un manque de documentation partagée. Merci une fois de plus pour le partage JMB.

On a aussi Damien M qui nous fait découvrir  [Trippy](https://github.com/fujiapple852/trippy), un chouette outil qu’on a essayé et qui combine ping et traceroute, compatible avec différents protocoles (ICMP, UDP et TCP) avec quelques fonctions plus avancées et quelques possibilités de customisation sympathiques (la taille des paquets envoyés par exemple). Merci Damien, c’est toujours bien d’avoir ce type d’outil sous la main !  

Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous souhaitez partager un peu de votre veille avec nous, ne soyez pas timide et envoyez-nous un email à [contact@rudeops.com](mailto:contact@rudeops.com) !

**Le monde merveilleux des Ops**

Au cours de notre veille on est tombé sur un chouette retour d’expérience d’une boîte qui a  [réussi à réduire les coûts d’exploitation](https://engineering.razorpay.com/the-culture-of-cost-optimization-reducing-kubernetes-cost-by-300-000-32611cdd19d9)  de ses clusters K8s de 300.000 dollars. Ce post constitue la troisième partie  [d’une série de posts](https://engineering.razorpay.com/razorpay-cost-optimization-journey-part-1-the-spot-instance-road-cb8d312c9710)  qui aborde de manière détaillée l’optimisation des coûts et du workload tech dans un environnement cloud (AWS), et on vous encourage vivement à tous les lire tellement ils sont riches d'enseignement.  

![](https://storage.mlcdn.com/account_image/325165/Y6YkQTsvYtOhxsercyt2hcB2C8rBOK2QZRCanMv2.png)

On est aussi tombé sur GSQL ([Git Query Language](https://github.com/AmrDeveloper/GQL)), un langage de requête avec une syntaxe très similaire à SQL, doté d'un moteur dédié -pour exécuter des requêtes sur des fichiers .git qui exécute la requête à la volée sans avoir besoin de créer des fichiers de base de données ou de convertir les fichiers .git dans un autre format. Simple à utiliser, ça peut servir dans pas mal de cas pratiques.

Ce sont les copains de chez Thenewstack qui ont eu  [l’occasion d’interroger Patrick Debois](https://thenewstack.io/qa-patrick-debois-on-the-past-present-and-future-of-devops/)  sur l’avenir du DevOps, et comme d’habitude le bonhomme a une vision passionnante, alors on vous invite à lire religieusement l’article.

Et pour finir on vous présente  [Pipelight](https://pipelight.dev/), un outil en ligne de commande qui exécute une liste de tâches que vous avez spécifiées dans un fichier de conf. Idéal pour l'automatisation CI/CD. La conf peut être écrite en Typescript, YAML ou TOML.  

**Le coin des paranos**

![](https://storage.mlcdn.com/account_image/325165/5IKBqYgE2HKC3eGUxeWad2n8Xovok4Ec2SAQwnRK.png)

On aime beaucoup le travail des intellos de chez  [Checkpoint Research](https://research.checkpoint.com/), et on a lu avec attention leur travail sur  [SysJoker, un backdoor multi-plateformes avec de multiples variants sous Windows, MacOS et Linux,](https://research.checkpoint.com/2023/israel-hamas-war-spotlight-shaking-the-rust-off-sysjoker/)  qui est en train de muter à travers une nouvelle version ré-écrite en Rust. A partager avec votre CISO pour gagner des bons points.

C’est  [grâce à cet article (passionnant) des mecs en costard de chez Mand Consulting Group](https://mandconsulting.ca/plundering-postman-with-porch-pirate-osint/)  qu’on a découvert l'existence de  [Porch Pirate](https://github.com/mandconsultinggroup/porch-pirate), un outil pour découvrir rapidement les secrets dans Postman et qui a lentement évolué vers un framework de reconnaissance OSINT pour Postman.

Et pour finir on vous partage un article très riche sur le travail qu’effectue la boîte d’Aqua Nautilus intitulé  [50 Shades of Vulnerabilities: Uncovering Flaws in Open-Source Vulnerability Disclosures](https://blog.aquasec.com/50-shades-of-vulnerabilities-uncovering-flaws-in-open-source-vulnerability-disclosures). Leur taffe consiste à évaluer les processus de divulgation de vulnérabilités (pour des dizaines de milliers de projets open source) et de découvrir des failles dans ces process, failles qui ont permis d'exploiter les vulnérabilités avant qu'elles ne soient corrigées et annoncées. A travers cet article, les mecs mettent en lumière les processus et les méthodes de recherche, et mettent en évidence les étapes de la découverte des vulnérabilités en soulignant la gravité de l'exposition précoce des vulnérabilités dans les projets open source.