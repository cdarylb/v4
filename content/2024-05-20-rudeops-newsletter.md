---
layout: post
title: Newsletter du 20 Mai 2024
subtitle: La newsletter de la Pentecôte	
thumbnail-img: /assets/img/Alain-peche.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, database, K8s, gitops, API, cybersecurity]
comments: true
mathjax: true
author: RudeOps
---


Encore un weekend prolongé et ça c'est la classe ! Mais pas pour tout le monde, alors on pense très fort à ceux qui sont sur leur clavier aujourd'hui et on leur souhaite bon courage !  
  
Cyril

### Quoi de neuf ?

🏃‍♂️  **The guide to Kubectl I never had :** Tout savoir pour bien commencer avec Kubectl, on en profite,  [c'est archi détaillé, super riche en exemples](https://medium.com/@jake.page91/the-guide-to-kubectl-i-never-had-3874cc6074ff)  et facile à suivre si vous connaissez déjà bien Kubernetes. C'est écrit avec passion par  [les coyotes de chez GlassKube](https://github.com/glasskube/glasskube), un package manager pour les amener tous et dans les ténèbres les lier.

💝 **Building a gitops CI/CD with Github Actions (SOC 2) :** On adore la philosophie derrière  [Gitops](https://about.gitlab.com/topics/gitops/) et on adore quand c'est  [mis en place à travers Github Actions](https://mathieularose.com/gitops-cicd-github-actions)  de façon aussi simple et performante, un bel exemple de lean. Et oui, ça gère différents environnements bien sûr.

🥇  **Minimizing on-call burnout through alerts observability :** Chez nous à RudeOps, l'observabilité c'est notre passion, et ça tombe bien, parce que les hipsters de chez Cloudflare nous ont pondu  [un très bel article sur la façon dont ils intègrent des outils open-source pour analyser et optimiser les alertes](https://blog.cloudflare.com/alerts-observability), réduisant ainsi les faux-positifs et les alertes non prioritaires, ce qui permet aux équipes d'astreinte d'être plus réactives et de réduire leur fatigue.

😱 **Lessons learned when building my DNS resolver :** C'est en partant du projet [Implement a DNS in a weekend](https://implement-dns.wizardzines.com/)  que  [Wen-Tsung nous décrit son périple](https://blog.wtcx.dev/2024/04/27/lessons-learned-building-dns-resolver/), sorte de mix entre Koh Lanta et Pékin Express, pour monter son resolver from scratch. Ne jugeons pas.

🏹 **What makes a good REST API :** Il y a la bonne API, et il y a la mauvaise API.  [Un ensemble de bonnes pratiques](https://apitally.io/blog/what-makes-a-good-rest-api)  à assimiler afin de ne pas rentrer brocouille comme on dit dans le bouchonnois.  

🚀 "**run0" as a sudo replacement :** [This incident will be reported](https://lwn.net/Articles/971745/).

🏆  **Cybersecurity isn't special :** Par le mec qui a écrit le bouquin  [Security Chaos Engineering](https://www.securitychaoseng.com/), c'est passionnant à lire et c'est  [à partager avec tous les CISO que vous connaissez](https://kellyshortridge.com/blog/posts/cybersecurity-isnt-special/).



## How Figma's databases team lived to tell the scale

![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)

Merci à Julien A. qui nous partage un post bigrement intéressant sur la quête de la scalabilité maximale chez les techs de Figma. Au menu, de l'horizontalisation, du sharding, et tout ça sur des grosses instances Postgres.  

[Accéder au lien ->](https://www.figma.com/fr-fr/blog/how-figmas-databases-team-lived-to-tell-the-scale/)