---
layout: post
title: Newsletter du 16 Mars 2026
tags: [open source, Ghostty, Kubernetes, MySQL, Debian, passkeys, Dinit]
comments: true
mathjax: true
author: RudeOps
---


L'audace, aujourd'hui, ce n'est peut-être plus de migrer dans le cloud, ça, tout le monde l'a déjà fait, généralement avec beaucoup de slides et un abonnement mensuel qui grossit tranquillement dans un coin du budget. L'audace, c'est peut-être au contraire de tourner le dos aux hyperscalers et de construire sa propre plateforme, de faire tourner ses services critiques sur Linux, PostgreSQL etc plutôt que sur une pile logicielle dont la feuille de route dépend d'un conseil d'administration situé à plusieurs fuseaux horaires d'ici.

Et ce chemin mène presque toujours au même endroit : l'open source. Non pas par romantisme, mais parce que derrière ces projets ouverts se trouvent des communautés qui maintiennent ensemble des outils qu'aucune entreprise ne pourrait réellement porter seule sur la durée.

Le paradoxe, c'est que tout cela repose sur une idée très simple : des gens qui ne vivent pas dans le même pays, ne travaillent pas dans la même entreprise et ne parlent pas toujours la même langue parviennent malgré tout à construire ensemble des morceaux entiers de l'infrastructure mondiale.

À l'heure où la souveraineté numérique revient à la mode et où chacun redécouvre avec enthousiasme la joie très humaine de construire des murs, il n'est peut-être pas inutile de se souvenir que depuis trente ans l'open source fait exactement l'inverse.

Et si l'audace doit redevenir une vertu dans l'informatique, espérons simplement qu'elle continuera à relier les gens un peu plus qu'elle ne les séparera.

Cyril

## La pépite de la semaine

Bonne nouvelle pour ceux qui trouvaient que leur terminal manquait cruellement de scrollbars et de notifications sonores quand un `git pull` se termine : Ghostty vient de sortir sa version 1.3.0, fruit de 6 mois de développement, 2 800 commits et 180 contributeurs qui auraient probablement pu patcher Vim à la place mais ont fait un choix. Au menu : une recherche dans le scrollback, des scrollbars natives qui suivent le thème système, et des notifications à la fin d'une commande, parce que visiblement en 2026 fixer un curseur qui clignote n'est plus suffisant pour savoir si votre build est terminé. Zig-based, open source, pas dispo sur Windows, ce qui selon votre point de vue sera soit une limitation soit une feature de sécurité.

[Lire l'article](https://www.omgubuntu.co.uk/2026/03/ghostty-1-3-terminal-brings-big-new-features)

### Le coeur de la veille

⚡ **[Why K8s reliability is now a machine-speed problem](https://cloudnativenow.com/contributed-content/why-kubernetes-reliability-is-now-a-machine-speed-problem/)** Un SRE se fait paguer à 2h17 du matin, le déploiement dit que tout va bien, l'autoscaler fait sa vie, le GitOps écrase le hotfix manuel, et le temps que l'admin reconstitue la séquence, le système s'est déjà auto-stabilisé comme si rien ne s'était passé. L'auteur de l'article en tire une conclusion lumineuse : le problème de Kubernetes ce n'est pas la complexité, c'est la vélocité. Les machines vont plus vite que les humains, ce qui, avouons-le, n'est pas exactement une révélation du niveau de la théorie de la relativité. La solution proposée : une couche d'IA agentique qui corrèle les signaux, reconstruit les séquences d'incidents et contextualise les alertes avant même que l'on-call ait trouvé ses lunettes. Les SREs deviendraient alors des superviseurs de haut niveau qui valident les investigations plutôt que de les mener, un peu comme un chef de cuisine qui ne touche plus aux fourneaux mais signe les assiettes.

🗃️ **[How to work with JSON in MySQL](https://www.digitalocean.com/community/tutorials/working-with-json-in-mysql)** Les cowboys de chez Digital Ocean ont pondu un chouette tuto sur l'utilisation du type JSON dans MySQL, et c'est l'occasion de rappeler que oui, votre base de données relationnelle préférée fait aussi du NoSQL depuis 2015, mais que vous l'avez probablement ignoré parce que vous étiez trop occupé à débattre de MongoDB en meeting infra. Le principe est simple : une colonne JSON dans votre table, et vous voilà avec la rigidité rassurante du relationnel d'un côté et la flexibilité anarchique du document store de l'autre, un peu comme mettre une cravate sur un hoodie et prétendre que c'est du smart casual. Le tuto couvre la création, la lecture avec JSON_EXTRACT, la mise à jour avec JSON_INSERT, JSON_REPLACE et JSON_SET qui se comportent tous différemment parce que pourquoi faire simple. La cerise : une intégration Laravel avec Eloquent qui caste automatiquement votre JSON en tableau PHP, pour que vous puissiez oublier que vous faites de la database et vous concentrer sur l'essentiel, c'est-à-dire débattre de la prochaine migration vers PostgreSQL.

🤖 **[Debian decides not to decide on AI-generated](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)** Les hipsters de chez Debian ont tenté de voter une résolution sur les contributions générées par IA et ont conclu, après des semaines de débats passionnés, qu'ils n'étaient pas prêts à voter. C'est le genre de décision qui demande beaucoup de travail pour aboutir à du statu quo, ce qui quelque part est profondément cohérent avec Debian. Les débats ont couverts à peu près tout : la terminologie ("AI" vs "LLM", soit le débat "Kleenex" vs "mouchoir" de notre industrie), l'impact sur l'onboarding des nouveaux contributeurs, le droit d'auteur, l'environnement, et quelqu'un a même proposé de mettre le kernel Linux en non-free. La palme revient à Russ Allbery qui a sobrement fait remarquer que le terme "IA" était si vague qu'il englobait potentiellement chaque objet physique de l'univers, y compris les rochers, les nuages et très probablement la ville de Montargis, ce qui, convenons-en, ne facilite pas la rédaction d'une politique de contribution propre sur le papier.

### En bref

🔑 **[How passkeys work](https://cassidoo.co/post/passkeys/)** Un mot de passe c'est un secret que vous connaissez. Une passkey c'est un secret que vous ne connaissez pas, que vous ne verrez jamais, et qui vit dans votre téléphone comme un fantôme bienveillant. Votre appareil génère deux clés à votre place, garde la privée pour lui, file la publique au site, et quand vous revenez il prouve cryptographiquement que c'est bien vous sans jamais rien révéler, un peu comme un avocat, mais honnête. Anti-phishing, anti-leak, sympa sur le papier sauf que l'autrice conclut sobrement que si vous utilisez déjà un gestionnaire de mots de passe, vous n'avez pas vraiment de problème à résoudre. Les passkeys c'est la solution à un problème que les gens raisonnables n'ont plus vraiment, les autres ayant toujours leur post-it.

⚙️ **[Dinit, the init systemd should have been](https://unixdigest.com/articles/dinit-the-init-system-systemd-should-have-been.html)** Vous vous souvenez de Terminator, quand Skynet commence comme un simple système de défense et finit par contrôler absolument tout, y compris les machines à café et votre ex ? systemd, c'est exactement ça, et Dinit, c'est l'univers parallèle où Skynet aurait sagement dit "non merci, je gère juste les missiles". Un init system écrit en C++ portable, qui tourne sur Linux et BSD, qui supervise vos services, les redémarre quand ils pleurent, et rentre chez lui à 17h sans empiéter sur le boulot du résolveur DNS du voisin. Pas de tentacules, pas de binaires interdépendants qui font juste semblant d'être indépendants, pas d'opinion sur votre vie, juste des services qui démarrent et s'arrêtent.
