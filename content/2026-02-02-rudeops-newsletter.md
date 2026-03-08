---
layout: post
title: Newsletter du 02 Février 2026
tags: [devops, Dockers, K8s, Superplane, KRR]
comments: true
mathjax: true
author: RudeOps
---


Cette édition de RudeOps ressemble à l'époque qu’on traverse : beaucoup d'outils, beaucoup de promesses, et de plus en plus d'IA glissée partout, parfois par conviction, souvent par nécessité marketing.

Des agents qui codent, des dashboards qui "expliquent", des recommandations automatiques qui promettent d'optimiser ce qu’on a jamais vraiment pris le temps de régler à la main. Derrière le vernis, on retrouve surtout les mêmes obsessions d'ops fatigués : réduire le bruit, maîtriser les coûts, limiter les blast radius et éviter que la prod ne décide de partir en freestyle.

L'IA ouvre clairement des possibilités intéressantes, mais elle n'efface ni la complexité, ni la responsabilité, et change surtout la forme des outils… pas le fond du métier.  
  
Cyril

### Quoi de neuf ?

**🐋 What has docker become :** Docker Inc continue son slalom stratégique : Swarm vendu, dev tooling (Scout, Testcontainers), sécurité, IA partout, GPU offload et agents en liberté. Dernier coup : plus de 1 000 Hardened Images rendues gratuites et open source, histoire de rappeler que "free" reste la meilleure réponse à Chainguard. Le problème, c’est que Docker a trop bien réussi : la techno est devenue  [une brique d’infrastructure, omniprésente](https://tuananh.net/2026/01/20/what-has-docker-become/), invisible, et donc structurellement impossible à facturer. Docker va très bien, Docker Inc, beaucoup moins.

☸️ **Kubewall :** Un énième dashboard Kubernetes "simple", temps réel et évidemment boosté à l'IA, parce qu'en 2026 on ne peut plus lister des pods sans convoquer trois LLM. Promesse : gérer tous vos clusters depuis un binaire unique, sans dépendance, avec logs, manifests, port-forwarding et clic droit magique pour redémarrer ce que vous ne comprenez pas. Réalité probable : une jolie surcouche pour faire oublier que  [Kubernetes reste trop complexe](https://github.com/kubewall/kubewall), même pour ceux qui prétendent le maîtriser. Bonus : privacy by design et zéro cloud… jusqu'au moment où vous branchez OpenAI pour savoir pourquoi votre PodCrashLoopBackOff existe.

🥇  **Manage systemd services with systemctl on Linux :** Les cowboys de chez DigitalOcean nous ont pondu un guide complet pour expliquer  [comment utiliser systemctl](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units), cette commande que tout admin Linux tape machinalement depuis dix ans tout en expliquant que c'était mieux avant. On y revoit comment démarrer, arrêter, masquer des services, manipuler des units et jouer avec les targets quand plus rien ne répond. C’est utile pour les juniors, vaguement rassurant pour les autres, et surtout un bon rappel que systemd est devenu une techno incontournable, invisible quand tout va bien, ésotérique quand ça casse, et presque toujours réparée à coups de daemon-reload et de soupirs résignés.  

👾 **OpenCTI :** Une plateforme open source pour centraliser, structurer et visualiser la cyber threat intelligence, autrement dit pour donner une forme exploitable à des montagnes d’IOCs, de TTPs et de rapports PDF que personne ne lit en entier. Basé sur STIX2, connecté à MISP, TheHive et MITRE ATT&CK, OpenCTI promet de transformer le chaos informationnel en graphes élégants et en relations "inférées". Dans les faits,  [c'est un excellent outil pour les équipes matures](https://github.com/OpenCTI-Platform/opencti)… et un magnifique aspirateur à temps pour les autres qui découvriront qu’industrialiser la CTI ne rend pas la menace plus simple, juste mieux documentée. Bonus classique : une Community Edition open source, et une Enterprise Edition pour quand la réalité du budget rattrape les idéaux.

![](https://storage.mlcdn.com/account_image/325165/6PyYZGHMM98xYOp8yKvdIAFuob1WdGQNlSeEJwtI.png)

# Data-Shield Blocklist, The Official IPv4 Blocklist Community

Derrière cette bloc-list ultra sérieuse, il y a le travail de  [Laurent Minne](https://www.linkedin.com/in/laurent-minne/), et franchement c'est du très solide. Une liste maintenue proprement, alimentée par des sondes globales et des HIDS/SIEM auto-hébergés, pensée pour être consommée telle quelle par des firewalls, WAF ou outils de CTI sans gymnastique inutile. Le discours est carré, les chiffres aussi, la fraîcheur maîtrisée, la compatibilité universelle assumée. Oui, ça bloque beaucoup, oui, ça réduit drastiquement le bruit, et non, ce n'est pas de la magie : juste du boulot bien fait, rigoureux, documenté, et déployable sans bullshit marketing. On est clairement sur un projet très pro, tenu par quelqu'un qui sait ce que "réduire la surface d’attaque" veut dire en production, et ça force le respect.  

[Découvrir](https://duggytuxy.github.io/)


🏃‍♂️  **Adapter PostgreSQL pour 800 millions d'utilisateurs de ChatGPT :** OpenAI, la petite startup familiale qui a le vent en poupe, nous explique comment  [PostgreSQL encaisse des millions de QPS](https://openai.com/fr-FR/index/scaling-postgresql/)  pour faire tourner ChatGPT, avec un mono-primaire, des dizaines de réplicas en lecture et une avalanche de garde-fous pour éviter l'implosion. La leçon reste la même, Postgres scale très bien tant qu’on limite les écritures, qu'on déporte le sale boulot ailleurs et qu'on passe son temps à empêcher l'application de se tirer une balle dans le pied.

🤖 **Superplane, an n8n for Devops :** Superplane, le nouveau "n8n pour DevOps", débarque avec l'ambition modeste d'orchestrer tout ce que vos pipelines, alertes, tickets et notifications font déjà… mais chacun dans son coin. L'idée est simple : rajouter un control plane au-dessus d'une dizaine d'outils censés simplifier votre vie, pour  [enfin capturer ce fameux tribal knowledge sous forme de jolis workflows visuels](https://github.com/superplanehq/superplane). C'est open source, auto-hébergé, stateful, durable, et évidemment stocké dans PostgreSQL. Promesse officielle : moins de coordination manuelle. Réalité probable : un très bel outil, bien pensé, qui finira soit par devenir indispensable, soit par être un autre diagramme que plus personne n'ose toucher de peur de casser la prod.

⚙️ **OpenCode vs Claude Code :** Les artistes de chez Builder.io nous ont pondu un comparatif pour expliquer les subtiles différences entre un  [agent CLI propriétaire bien poli et son équivalent open source](https://www.builder.io/blog/opencode-vs-claude-code), plus libre, plus bricolable et forcément un peu moins lisse. D'un côté, Claude Code, le jardin bien taillé où tout marche tant que tu restes chez Anthropic, de l'autre, OpenCode, la fête foraine des providers, des modèles locaux et des configs JSON, avec le plaisir de la liberté et les bugs qui vont avec. Le comparatif est intéressant, vraiment, mais soyons honnêtes, côté RudeOps on n’a pas besoin de tableaux ni de chronos pour faire un choix. Vendor lock-in ou un peu de mains dans le cambouis, chacun choisira selon son seuil de tolérance au polish, à la facture mensuelle et à l'envie de garder la main quand le provider décide de changer les règles du jeu.  

🛡️ **Minimal CVE hardened container image colection :** Une collection d'images containers minimalistes, reconstruites quotidiennement, avec zéro CVE ou presque,  [pour rappeler que debian:latest n'a jamais été une base secure](https://github.com/rtvkiz/minimal). Python, Node, Go, Nginx, Postgres & co, sans shell quand c'est possible, patchées en 24–48h et prêtes pour faire plaisir aux audits. C'est propre, sérieux, et ça fait exactement ce que la sécurité demande depuis des années… à condition de résister à l’envie d’ajouter bash 'juste pour debug'.


## Kubernetes Resource Recommendations Based on Historical Data

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

David R nous a partagé KRR, un outil qui promet de dire à Kubernetes combien de CPU et de RAM vos pods auraient vraiment dû demander depuis le début. Le principe est simple, on regarde l'historique Prometheus, on calcule, et on sort des recommandations de requests et limits sans agent, sans magie noire, et sans installer encore un truc de plus dans le cluster.

Sur le papier, ça fait rêver : moins de gaspillage, des coûts en baisse et des graphes pour expliquer pourquoi votre pod à 4 CPU n’en consomme jamais plus de 200 millicores. Dans la vraie vie, ça reste un rappel utile d’une vérité gênante : Kubernetes n’a jamais été bon pour l’auto-discipline, et si vos ressources sont mal dimensionnées, ce n’est pas la faute du scheduler.

Merci à David R pour le partage, ça mérite clairement un coup d'oeil.  

[Accéder au lien ->](https://github.com/robusta-dev/krr)