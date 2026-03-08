---
layout: post
title: Newsletter du 16 Octobre 2023
subtitle: Chippeur arrête de chiper !	
thumbnail-img: /assets/img/Alain mesure.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, dora, devex]
comments: true
mathjax: true
author: RudeOps
---

_Les principes de partage et de collaboration tirés du paradigme DevOps peuvent-ils être appliqués dans la vie de tous les jours afin d'améliorer nos jeunes démocraties et notre société civile ? Vous avez trois heures, rendez votre devoir sur une copie double._

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)

## Nos lecteurs ont du talent

Merci à Anne, Devops engineer dans une startup française, qui nous signale que le Vault de Hashicorp va bénéficier d’une  [version alpha dite “Radar”](https://www.hashicorp.com/blog/new-hcp-vault-secrets-radar-and-other-features-fight-secrets-sprawl), et se présentant comme un service cloud visant à automatiser l'examen, la détection et la rectification des secrets qui sont involontairement dissimulés au sein de lignes de code et d’environnements divers. En lançant cette version alpha de HCP Vault Radar, Hashicorp a exploité les avancées issues de  [l'acquisition de la start-up BluBracket](https://www.hashicorp.com/blog/announcing-acquisition-of-blubracket)  en juin 2023.

On a aussi JMB qui nous écrit à nouveau pour nous partager un post super intéressant qui nous explique  [ce qu’il se passe dans le répertoire .git](https://blog.meain.io/2023/what-is-in-dot-git/). Passionnant à lire on a appris plein de trucs qu’on ne connaissait pas, un énorme coeur avec les doigts pour toi JMB !  

Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à  [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous voulez participer n'hésitez pas à nous envoyer un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  !

**Dora, Space et DevEx sont dans un bâteau...**

On l’a déjà dit plusieurs fois, mais comme on aime bien se répéter et faire de la pige facile, on le redit : on peut vraiment tout mesurer dans nos métiers grâce à toute une palanquée d’outils divers et variés, et on peut aller vraiment très loin suivant les moyens qu’on y met. Mais quand il s’agit de mesurer les performances d’une organisation devops, c'est un poil plus compliqué. Comme le sujet nous branche, on a creusé un peu le sujet et on vous partage ce qui existe aujourd’hui.

On commence avec la méthodologie  [DORA](https://docs.gitlab.com/ee/user/analytics/dora_metrics.html) (DevOps Research and Assessment), initialement rédigée par des gens très bien  [dont Gene Kim qu’on ne présente plus](https://datascientest.com/gene-kim-devops-tout-savoir), qui comprend  [un ensemble d'indicateurs de performance](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance?hl=en)  connus sous le nom des quatres cavaliers de l’apocalypse ou quelque chose du même genre bref : Deployment Frequency, Lead Time for Changes, Change Failure Rate et Time to Restore Service.  [Une cinquième mesure a été ajoutée](https://cloud.google.com/blog/products/devops-sre/announcing-dora-2021-accelerate-state-of-devops-report?hl=en)  en 2021 avec la  _Reliability_  (oui on est à fond dans le franglais).

L'introduction des métriques DORA a marqué un changement de paradigme significatif. Auparavant, les métriques de productivité étaient utilisées de manière subjective, chaque organisation se référant principalement à elle-même. Le concept derrière les métriques DORA était de  [collecter des données auprès de nombreuses organisations](https://devcycle.com/blog/the-ultimate-guide-to-dora-metrics)  et de créer une mesure empirique pour évaluer la performance et la productivité.

En 2018,  [DORA a été acquis par la pieuvre de Mountain View](https://dora.dev/news/dora-joins-google-cloud/), leurs recherches se poursuivent avec la publication de nouvelles données et de  [nouveaux rapports chaque année](https://cloud.google.com/devops/state-of-devops?hl=fr).

![](https://storage.mlcdn.com/account_image/325165/ewE9lyksZXFUd6IsPtO2LnEsAG89mvMcj6nhos2K.png)

Alors que DORA fournissait une manière empirique de mesurer la productivité en ingénierie entre les organisations, en 2021, les mêmes auteurs ont publié  [le cadre SPACE](https://octopus.com/devops/metrics/space-framework/), avec l'idée de donner  [une vision plus globale de la productivité de ces boulets de devs](https://www.red-gate.com/blog/database-devops/what-is-the-space-developer-productivity-framework)  et moins centrée sur le devops. Alors bien sûr on retrouve cinq métriques qui nous permettent de mesurer l’efficience :  _Satisfaction and wellbeing_,  _Performance_,  _Activity_,  _Communication and collaboration_  et on termine avec  _Efficiency and flow_. Ce qui est passionnant, c’est qu’on commence à avoir des métriques sur le bien-être de l’équipe et de l’individu qui agit au sein de cette équipe, et qu’[on insiste bien sur le flow](https://www.lucidchart.com/blog/devops-process-flow).

Et c’est pas fini, car en Avril, un article a été publié par certains des auteurs de DORA et de SPACE,  [introduisant ce qu'ils appellent le framework DevEx](https://www.getport.io/blog/developer-experience)  : alors que DORA visait à fournir une manière empirique de mesurer la performance, et par conséquent la productivité d'une équipe, et que SPACE visait à la rendre plus globale, DevEx reconnaît d'une certaine manière que mesurer la productivité n'est pas une tâche facile. Tout ça pour ça ouais nous aussi ça nous a rendu dingue mais là où ça change la donne, c’est que  [DevEx se concentre sur l'expérience du dev](https://www.infoq.com/articles/devex-metrics-framework/)  et explore les trois dimensions de son impact à travers ses qualifications : son expertise de dev, sa connaissance de devops et sa connaissance du produit. Dit comme ça c’est totalement obvious mais rappelez-vous qu’on parle de dev là.

Bref, après des discussions houleuses au sein de la rédaction de Rudeops (composée de plusieurs dizaines de personnes) nous on aime bien DORA, on préfère sa simplicité un peu rugueuse et ça nous a donné plein d’idées pour nos boulots respectifs, mais le plus important, c’est qu’on pense qu’au final les deux mesures qui comptent le plus et où doivent être axés tous les efforts de nos organisations sont le bien-être des équipes et la satisfaction des clients, le reste peut passer après.

  

![](https://storage.mlcdn.com/account_image/325165/Bgpcb7NSvVCGwSpHQgh1Mx1O6lX5mtftUcKUtHwg.png)

**Le podcast RudeOps**

Vous vous sentez seul et déprimé et vous commencez à écouter en boucle des albums de Michel Sardou ? Changez-vous les idées en écoutant notre premier épisode de podcast dans lequel on écoute Damien Claisse, SRE chez Critéo, nous raconter ce qu'il pense du DevOps et comment il mesure ses bénéfices !