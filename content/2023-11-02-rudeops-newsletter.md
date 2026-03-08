---
layout: post
title: Newsletter du 02 Novembre 2023
tags: [devops, OpenTofu, Terraform]
---

_Preuve incontestable de notre avant-gardisme, ce numéro est en grosse partie constitué du courrier de nos lecteurs. La faute à une nouvelle prise de fonctions qui me prend un max de temps et d’énergie, et m’a empêché de faire une veille constante ces dernières semaines. Heureusement que vous êtes là et que vous êtes nombreux à nous envoyer pas mal d’emails, ça fait plaisir (et ça m’évite de travailler ce qui correspond parfaitement à mon way of life comme on dit à Montargis).  
Bonne lecture à tous et encore merci à nos lecteurs !_

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)

## Nos lecteurs ont du talent

On ouvre le bal avec Julien R., sysadmin dans une boîte française, qui nous fait découvrir  [Helix](https://helix-editor.com/), un terminal-based editor inspiré par  [Kakoune](https://kakoune.org/)  et  [Neovim](https://neovim.io/)  et qui intègre  [tree-sitter](https://neovim.io/doc/user/treesitter.html)  pour la syntaxe et la mise en forme. C’est écrit en Rust et il y a  [un repo dédié sur Github](https://github.com/helix-editor/helix). Merci pour le partage Julien !

On continue avec le mystérieux JMB qui nous écrit pratiquement tous les 15 jours (coeur avec les doigts pour toi mec) et qui cette fois-ci nous présente  [jless](https://jless.io/), un outil en ligne de commande archi pratique qui  [permet de lire et d’explorer vos fichiers JSON](https://jless.io/). Alors on l’a testé et effectivement ça fait le taffe et c’est archi léger et intuitif. Merci JMB !

On a aussi Nathan, SRE dans une grosse boîte américaine, qui nous partage un article très détaillé sur l'adoption d’eBPF pour réaliser de la surveillance côté réseau et pour offrir un meilleur contrôle d'une grande plateforme de microservices et d'infrastructure. C’est très très pointu mais passionnant, ça explique  [comment eBPF permet d'écrire du code injecté directement dans le kernel](https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/)  qui est capable de tracer ces opérations avec les routines de cloisonnement et de validation propres au noyau. Merci pour le partage Nathan !  

![](https://storage.mlcdn.com/account_image/325165/MjzJlLxa3tXF46RjeszbpIJaR1MTas3wvBoZwVV2.png)

On en a déjà pas mal parlé, et cette fois c’est Christian B. qui nous informe de la sortie de la  [première release alpha de OpenTofu](https://github.com/opentofu/opentofu), le fork open-source de Terraform créé en réponse du  [changement de licence](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  des produits chez Hashicorp. Merci pour l’info Christian on avoue être passé totalement à côté !

On remercie chaudement Emilie, une dev full stack qui s’initie à Docker, et qui nous partage un chouette témoignage sur  [comment réduire son temps de docker build de 40%](https://medium.com/datamindedbe/how-we-reduced-our-docker-build-times-by-40-afea7b7f5fe7). Super chouette, très didactique, on y abordera l’usage de différents composants comme  [Buildkit](https://docs.docker.com/build/buildkit/),  [Buildx](https://docs.docker.com/engine/reference/commandline/buildx/) et l’utilisation pertinente du link option. Merci Emilie, c’est vraiment cool !

On termine avec un tuto très basique que nous propose Pascal, sysadmin dans une boîte de retail française, qui nous prend par la main pour nous expliquer  [les rôles respectifs de Grafana et Prometheus](https://last9.io/blog/prometheus-and-grafana/). C’est très basique mais c’est une belle entrée en matière pour ceux qui ne connaissent pas et qui veulent faire un poc. Merci à toi Pascal !

Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous voulez participer n'hésitez pas à nous envoyer un email à [contact@rudeops.com](mailto:contact@rudeops.com) !

**Du côté des ops**

On a beaucoup aimé ce post (qui renvoie vers un très chouette podcast) des copains de chez Thenewstack  [sur le rôle du platform engineering](https://thenewstack.io/at-run-time-driving-outcomes-with-a-platform-engineering-team/)  et comment ce rôle modifie l’interaction entre les équipes de développement et d'exploitation.

Et en parlant de podcast, on vous conseille d’écouter avec attention celui des punks de chez  [arrested devops](https://www.arresteddevops.com/). On y écoutera Adam Jacob, le co-créateur de Chef, et Matt Stratton, un des organisateurs des devopsdays et figure bien connue de la communauté devops. Ils nous partagent  [leur vision du devops, son évolution et tous les points faibles du paradigme](https://www.arresteddevops.com/the-new-devops/).

**Un peu de sécurité**

On aime beaucoup ce que fait l’ANSSI, notre gendarme des télécoms en France (même si certains émettent  [certaines critiques à son sujet](https://reflets.info/articles/l-anssi-ou-la-fable-de-l-agence-nationale-de-la-securite-des-systemes-d-information)), et on trouve qu’ils ont encore réalisé un chouette boulot autour des “[Recommandations relatives à l'administration sécurisée des systèmes d'information reposant sur Microsoft Active Directory](https://cyber.gouv.fr/publications/recommandations-pour-ladministration-securisee-des-si-reposant-sur-ad)” (Matthieu si tu me lis c’est dédicace). On y parlera sans surprise des méthodologies de cloisonnement, de Tier 0 et de hardening, et différentes considérations autour des règles de sécurité à mettre en place si on gère un AD, la fameuse usine à gaz de la pieuvre de Redmond.  

**J'aime lire**

![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)

##### The DevOps Adoption Playbook: A Guide to Adopting DevOps in a Multi-Speed IT Enterprise

On a quand même réussi à terminer le bouquin "_The DevOps Adoption Playbook: A Guide to Adopting DevOps in a Multi-Speed IT Enterprise_". Pavé de presque 500 pages, c’est un guide très (voire trop) complet pour l'adoption de la méthodologie DevOps dans une organisation à “environnements multiples”, c’est donc très agnostique, on ne parle pas trop de la techno et on insiste surtout sur la méthodologie à employer.

L'auteur, Sanjeev Sharma, aborde les principaux défis de l'adoption de DevOps, comme la culture de la boîte, les process, les outils et les mesures. Il propose des stratégies pratiques pour mettre en œuvre DevOps, en insistant sur l'importance de l'automatisation, de la collaboration entre les équipes de dev et de prod, ainsi que sur la supervision et la gestion du flow. Le livre met en évidence des études de cas et des exemples concrets pour nous aider à appliquer ces concepts dans notre boîte, et c’est vraiment pas mal du tout car vous tomberez forcément sur des use case que vous avez l’habitude de voir chez vous.