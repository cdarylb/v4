---
layout: post
title: Newsletter du 07 Octobre 2024
subtitle: Il ne peut plus rien nous arriver d'affreux maintenant			
thumbnail-img: /assets/img/Barbara loupe.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, Hacking, S3, Observability, Docker, Zsh]
comments: true
mathjax: true
author: RudeOps
---

Mine de rien, la France possède une longue tradition de soutien aux logiciels libres, notamment à travers des initiatives comme l'April, Framasoft ou encore les nombreux projets soutenus par le Conseil National du Logiciel Libre. Les solutions open source offrent aux entreprises françaises un avantage compétitif : la flexibilité et l'indépendance technologique nécessaires pour innover, tout en évitant les risques inhérents aux technologies propriétaires (coucou Microsoft) souvent fermées ou hors de contrôle (coucou Crowdstrike).

Le mouvement open source ne doit plus être perçu uniquement comme un choix économique ou technique, il faut qu'il incarne un véritable mouvement de souveraineté numérique qui permettrait à la France (et à l'Europe) de redevenir maîtresses de leurs technologies.

Avant de proposer un programme ambitieux sur l'IA, qui est nécessaire, assurons-nous de le construire sur des bases plus saines qu'elles ne le sont aujourd'hui, et assurons-nous surtout de devenir les acteurs de cette prise de conscience.

Cyril

### Quoi de neuf ?

💝 **Attacking Unix Systems via CUPS, part one :** On vous partage un excellent article, tiré du blog du non moins excellent evilsocket, qui nous résume  [l'impact des vulnérabilités dans CUPS](https://www.evilsocket.net/2024/09/26/Attacking-UNIX-systems-via-CUPS-Part-I/)  (Common UNIX Printing System) qui font beaucoup parler d'elles ces derniers jours, notamment via le composant cups-browsed. On fait un point sur plusieurs vulnérabilités critiques ([CVE-2024-47176](https://access.redhat.com/security/cve/cve-2024-47176),  [CVE-2024-47076](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2024-ALE-012/),  [CVE-2024-47175](https://ubuntu.com/security/CVE-2024-47175)) qui permettent à un attaquant de modifier les URLs d'imprimantes à distance, entraînant donc l'exécution arbitraire de commandes.

👾 **Hacking misconfigured AWS S3 buckets, a complete guide :** On est tombé sur cet article sympa des cowboys de chez Intigriti qui vous décrit, avec moultes exemples très clairs,  [comment trouver et identifier des buckets vulnérables](https://blog.intigriti.com/hacking-tools/hacking-misconfigured-aws-s3-buckets-a-complete-guide). Idéal pour se faire une checklist de tout ce qui ne doit pas être négligé dans la gestion de vos buckets (papa si tu me lis ça n'a rien à voir avec les buckets de chez KFC merci).

🔌  **Why TCP needs 3 handshakes :** Face à cette angoissante question, les coyotes de chez pixelstech se sont retroussés les manches et ont pondu un article très détaillé sur le processus impliquant  [l'échange de paquets SYN, SYN-ACK et ACK](https://www.pixelstech.net/article/1727412048-Why-TCP-needs-3-handshakes), avec en plus un super diagramme (à destination des plus détraqués) qui illustre les différents états des connexions TCP.

**🔍 The 4 evolutions of your observability journey :** Un chouette article des mecs de chez The New Stack qu'on salue (genre ils nous lisent) et qui décrit  [quatre phases clés dans l'évolution de l'observabilité](https://thenewstack.io/the-4-evolutions-of-your-observability-journey/)  d'une organisation. On commence par la surveillance basique des systèmes, puis on évolue vers des capacités de monitoring avancées qui permettent une meilleure compréhension des systèmes complexes. L'observabilité devient ensuite proactive, avec des systèmes capables d'anticiper les problèmes avant qu'ils n'impactent les utilisateurs, ce qui, il faut bien le reconnaître, fait partie de nos fantasmes les plus débridés.

**🐳 5 Docker best practices I wish I knew when I started :** Utiliser des builds multi-stage, simple, utiliser son fichier .dockerignore, basique, utiliser docker-compose, simple, faire attention au tag latest, basique,  [vous n'avez pas les bases](https://devdojo.com/bobbyiliev/5-docker-best-practices-i-wish-i-knew-when-i-started)  (oui bon j'écoutais du Orelsan quand j'écrivais cette news, bref vous voyez l'idée).  

🚀  **DnsTrace :** L'outil sympa du jour, c'est  [DnsTrace](https://github.com/furkanonder/DnsTrace), qui vous permet d'identifier les requêtes DNS réalisées par vos process, parfait pour vos debugs, votre sécurité ou vos soirées en amoureux.

**🐧 Terminal colours are tricky :** Et c'est Julia Evans, dont nous sommes des fans absolus, qui le dit. Dans son post, elle nous partage pas mal de  [tips liés à la configuration des couleurs dans les terminaux](https://jvns.ca/blog/2024/10/01/terminal-colours/), les limitations, et tout un tas de conseils pratiques pour obtenir le terminal aux couleurs chatoyantes dont tout le monde sera jaloux.

**🥐 Maîtrisez Zsh :** Véritable fierté française, c'est à Stéphane Robert qu'on doit ce guide archi-complet dédié à  [notre shell Unix favori](https://blog.stephane-robert.info/docs/admin-serveurs/linux/shells-linux/zsh/) qu'on vous invite à dévorer (le guide, pas Stéphane Robert).

## Kali Linux 2024.3 launches with 11 new hacking tools and enhanced Raspberry Pi support

![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)

Merci à François C., ingénieur dans une ESN sur la Côte d'Azur, qui nous rappelle que la dernière version de notre distrib préférée est sortie ! Parmi les nouveautés, on trouve des outils comme graudit pour l'audit de code source, gsocket pour la communication inter-réseaux, et sprayhound pour l'attaque par "password spraying". La mise à jour intègre également le noyau Linux 6.6 LTS pour le Raspberry Pi 5 et revient au noyau Linux 6.1 LTS pour améliorer la compatibilité avec le Pinebook. Des améliorations pour les tests de pénétration mobile et les systèmes basés sur ARM sont également incluses. Encore merci François pour le partage !  

[Accéder au lien ->](https://alternativeto.net/news/2024/9/kali-linux-2024-3-launches-with-11-new-hacking-tools-and-enhanced-raspberry-pi-support/)