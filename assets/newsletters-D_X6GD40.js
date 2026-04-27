const a=`---\r
layout: post\r
title: Newsletter du 15 Mars 2023\r
tags: [devops, gitops, cloud]\r
---\r
\r
\r
\r
\r
\r
*Bienvenue sur RudeOps.com, la newsletter dédiée à la tech en général et au devops ! Déjà 25 ans que je travaille dans l’IT (ouch) ! Et un des aspects les plus plaisants de mon boulot consiste à faire de la veille techno. A travers cette newsletter, c’est un peu mon panorama de veille que je vous partage : des sujets qui m'ont éclairé sur une nouvelle manière de faire, un outil sympa à utiliser, une actualité qui marque les tendances… Et comme le partage fait partie du paradigme devops, autant diffuser ça au plus grand nombre avec une touche d’ironie et d’humour qui fait du bien à des sujets généralement arides. Bonne lecture à tous !\r
Cyril*  \r
\r
\r
**Gitops, un nouveau set de bonnes pratiques**\r
\r
Après Devops, DevSecOps, NoOps et Rollmops* voici un nouveau venu, GitOps, qui commence à faire doucement parler de lui à travers un ensemble de bonnes pratiques très simples à résumer, l'idée centrale de GitOps étant d'avoir un référentiel Git qui contient les descriptions déclaratives de l'infrastructure dans l'environnement de production, et un processus automatisé pour faire correspondre l'environnement de production à l'état décrit dans le référentiel (oui ça fait une grande phrase mais étant payé au mot je me fais plaisir). Si vous souhaitez déployer une nouvelle application ou mettre à jour une application existante, il vous “suffit” de mettre à jour le référentiel et le processus automatisé gèrera tout le reste. Les coyotes de chez codefresh proposent  [deux cours interactifs](https://learning.codefresh.io/start)  (avec certification de suivi de cours) très bien fichus avec  [argocd](https://argo-cd.readthedocs.io/en/stable/) et un cluster Kubernetes pour comprendre les implications portées par Gitops et ses avantages. Ça vaut 50 dollars pour ceux qui peuvent, autrement vous pouvez piocher  [dans la littérature offerte par les internets](https://www.redhat.com/fr/topics/devops/what-is-gitops)  qui commence à s’étoffer  [un peu partout sur le sujet](https://blog.devops.dev/gitops-multi-tenancy-with-argo-cd-74ce8ec3bbf5).\r
\r
*Humour toujours ! Je fais aussi les mariages et les enterrements de vie de garçon.  \r
\r
**Le cloud, tu l'aimes ou tu le quittes**\r
\r
C’est un peu ce qui est en train de se passer avec  [Basecamp](https://basecamp.com/) à travers  [un message de son cofondateur David Heinemeier Hansson](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0), notamment connu pour être le géniteur de RoR. David semble un peu chafouin sur le sujet et se rend compte qu’en se passant des services d’AWS il économiserait 7 millions de dollars sur 5 ans, tout ça en remontant des serveurs from scratch. Son message est assez intéressant car il détaille les bénéfices attendus par son abandon du cloud :  _“[...] we'll have much faster hardware, many more cores, incredibly cheaper NVMe storage, and room to expand at a very low cost”_. Il précise que la taille de son équipe d’ops ne changera pas et que c’est avec Dell qu’il travaillera. Ce qu’il ne précise pas, ce sont les vraies raisons qui lui font quitter AWS. Abandonner du PaaS pour ré-inventer la roue et économiser 7 millions de dollars sur 5 ans, pour une boîte qui fait plusieurs dizaines de millions de bénéfices annuels il y a de quoi se poser la question, mais ça illustre bien la tendance actuelle qui est de se réapproprier sa chaîne de valeur et sa gestion des données.\r
\r
**Cybersec**\r
\r
Parce que la cybersec c’est avant tout la possibilité de donner des noms rigolos à plein d’outils différents, on vous présente aujourd’hui  [Cadaver](https://www.kalilinux.in/2021/06/cadaver-exploit-http-put-vulnerability-kali-linux.html). J’avoue qu’avec un nom pareil ça donne pas envie de le lancer, mais force est de reconnaître qu’il rend bien service dans le cadre d’un pentest :  [pouvoir se connecter en webDAV à un serveur distant](https://null-byte.wonderhowto.com/how-to/exploit-webdav-server-get-shell-0204718/). En plus il est intégré de base à la distrib  [Kali](https://www.kali.org/), que demander de plus ?\r
\r
Et en parlant de Kali, saviez-vous que cette distribution  [fête ses 10 ans](https://www.kali.org/blog/kali-linux-2023-1-release/)  et que sa dernière version vient tout juste de sortir ? Elle embarque le très attendu "pack" [Kali Purple](https://www.kali.org/blog/kali-linux-2023-1-release/#kali-purple)  dédié cette fois à la sécurité défensive, et qui inclut une centaine d'outils comme Malcolm, Surricata, Arkime, TheHive, et Michel Drucker, même si j'ai un doute sur ce dernier. Et le truc classe c'est qu'un  [wiki est déjà disponible](https://gitlab.com/kalilinux/kali-purple/documentation/-/wikis/home)  pour vous aider à prendre en main Kali Purple !\r
\r
C’est à travers le  [panorama de la cybermenace](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-001/), publié tous les ans par l’ANSSI, qu’on apprend que  _“le niveau général de la menace se maintient en 2022 avec 831 intrusions avérées contre 1082 en 20211 . Si ce nombre est inférieur à celui de 2021, cela ne saurait être interprété comme une baisse du niveau de la menace”_. Une quarantaine de pages à lire  [ICI](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-001/)  même si ça fait un peu froid dans le dos.\r
\r
Ca va faire plaisir à vos pentesters favoris qui galèrent avec les (trop) nombreux filtres de Wireshark : les techs de chez Ignite Technologies ont sorti une mind map gigantesque répertoriant tous les filtres sobrement intitulée “[Wireshark Display Filter Cheat Sheet](https://github.com/Ignitetechnologies/Mindmap/tree/main/Wireshark)”. Et comme les mind maps c’est à la mode, on vous propose aussi celles de Kerolos qui reprend les  [escalades de privilèges](https://github.com/noby0x1/Mind-Maps)  sur les grands classiques, AD Windows et Linux.\r
\r
On termine avec ce  [magnifique exemple de mouvement latéral](https://thehackernews.com/2023/03/lastpass-hack-engineers-failure-to.html)  qui a conduit à une grosse brèche chez LastPass. La cause ? Le Plex Server d’un employé qui n’était pas à jour. Bon, dans les faits c'est  [un peu plus compliqué que ça](https://www.lemonde.fr/pixels/article/2022/12/23/le-gestionnaire-de-mots-de-passe-lastpass-touche-par-une-fuite-de-donnees_6155508_4408996.html), mais on en connaît un qui va payer ses croissants jusqu'à la fin de sa vie.\r
\r
**Le coin des livres**\r
\r
![](https://storage.mlcdn.com/account_image/325165/qmKg4wBqo3gFr8vj5ZpSSGwQOpnYUWKKDjPatYB9.png)\r
\r
**The devops handbook**\r
\r
Si vous n'avez ni le temps ni l'envie de vous farcir la pléthore de livres qui essaient d’expliquer tant bien que mal ce qu’est le devops et à quoi ça sert, alors n'en lisez qu'un : The Devops Handbook. [On vous conseille ce classique](https://itrevolution.com/product/the-devops-handbook-second-edition/)  qui résume parfaitement ce qu’est le paradigme devops et comment mettre en place devops dans votre organisation. The Devops Handbook, c’est écrit à plusieurs mains par des gens très bien comme Patrick Debois et Gene Kim pour les plus connus, et c’est 100% sans bullshit.\r
\r
**The manager's path**\r
\r
Ce qui devait arriver arriva, vous avez été promu (ou puni) manager d’une équipe technique, et vous ne savez pas trop comment gérer Kevin le dev full stack qui code divinement bien mais se comporte comme un vrai con ? Pas de panique, le livre “[The Manager’s Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)” de l’excellente Camille Fournier vous donne plein de clefs pour réussir votre nouvelle mission. C’est sans doute le seul livre sur le sujet qui est à la portée de tout le monde et qui s’appuie sur des cas concrets que vous rencontrez tous les jours dans votre mission de manager (comment bien staffer mon équipe, comment évaluer sa capacité à faire, etc). Encore une fois 0% de bullshit dedans. Si vous ne pouvez pas l’acheter, volez-le !\r
\r
**Orchestration et compagnie**\r
\r
Comment ne pas parler de  [LazyDocker](https://github.com/jesseduffield/lazydocker), une UI génialissime qui se lance dans un term et qui gère aussi bien docker que docker-compose. Ça fait gagner un temps fou et permet de diagnostiquer un problème en un seul coup d'œil sans avoir à se rappeler les  [nombreuses commandes docker](https://dockerlabs.collabnix.com/docker/cheatsheet/)  genre quand vous avez un accident en prod et que votre boss est assis juste derrière vous. C’est écrit en Go et c’est disponible  [ICI](https://github.com/jesseduffield/lazydocker).\r
\r
Autre outil précieux qui ne sauve pas des vies mais permet d’avoir un diagnostic rapide sur une machine, c’est  [Glances](https://nicolargo.github.io/glances/), une énième alternative à htop comme il en arrive une tous les ans. Alors c’est classieux, ça dispense beaucoup d’informations dans un espace réduit, il y a même une UI web pour les allergiques au terminal, et on peut faire de l’export vers de l’influxdb. Oui ça gère aussi vos dockers. On dit un grand merci à son  [créateur](https://github.com/nicolargo) qui est français !  \r
\r
On ne va pas se mentir, on est parfois un peu foufou et l’idée de refaire un projet from scratch semble certaines fois pertinente. Sauf qu’il suffit d’exhumer  [ce vieux post de Joel Spolsky de Avril 2000](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)  (oui, nous sommes décidément à la pointe de l'actualité) qui nous explique que oui mais non, tout refaire from scratch ça n’est jamais la solution ultime et que ça peut se révéler plus catastrophique que jamais, la preuve par quatre avec l’exemple de Joel au sujet de Netscape (ça ne nous rajeunit pas).  \r
  \r
Parce qu’il est toujours bon de se moquer des développeurs, vous ai-je parlé de ce magnifique repo intitulé  [Tragic Methods](https://github.com/neemspees/tragic-methods)  ? Ne cliquez pas sauf si vous avez le coeur solidement attaché.\r
\r
Envie de briller en soirée, goût du challenge ou un besoin pressant de réviser ses bases avant un entretien qui s'annonce complexe ? Pas de panique, vous trouverez  [sur ce repo](https://github.com/bregman-arie/devops-exercises)  pas moins de 2619 exercices (j'ai compté, c'est bien le nombre exact) sur tout ce qui constitue devops. On y trouve des exercices (chaque fois avec les réponses) sur un très laaaaaaaarge périmètre, qui va des définitions du paradigme devops à des exercices plus rugueux sur le DNS ou la CI/CD. C'est une source assez incroyable et très bien documentée pour réviser et/ou apprendre, on vous le conseille donc à 100%.`,u=`---\r
layout: post\r
title: Newsletter du 31 Mars 2023\r
tags: [devops, gitops, cloud]\r
---\r
\r
\r
_Vous avez tous vu cette vague de fond qui est en train de grossir et commence à emporter pas mal de choses sur son chemin ? Je parle bien sûr de ChatGPT, Dall-E, Midjourney… Ici on est assez convaincu qu’il ne s'agit pas d’une fumisterie (coucou les NFT) ou d’un nouveau buzzword (coucou les métavers), mais que les premiers modèles publics d'intelligence artificielle vont structurer et développer nos métiers voire même, soyons fou, améliorer la vie de tout le monde sur la planète ? Allez, on croise les doigts et on en reparle dans dix ans._\r
\r
_Cyril_\r
\r
  \r
\r
![](https://storage.mlcdn.com/account_image/325165/L3ZVKsGu9oqkeqnxi85jDEilAYoJ99SYjIkX1HnM.png)\r
\r
## ChatGPT - Vers l’infini et au delà\r
\r
On ne peut pas nier que ChatGPT  [commence à être utile dans nos métiers](https://blog.devgenius.io/using-chatgpt-for-devops-7daa7c1783e9). Envie de céder aux sirènes de la hype et de mettre de l’’IA dans votre vie un peu morne ? On a pensé à vous et on a testé plein de trucs plutôt chouettes qui vont booster votre productivité comme disent les startupers. On commence doucement avec  [sqltranslate](https://www.sqltranslate.app/), un site plutôt utile qui vous permet de convertir une demande humaine en langage sql, votre DBA va apprécier. Ensuite comment ne pas parler de  [Openai-pr-reviewe](https://github.com/fluxninja/openai-pr-reviewer)r qui vous permet de faire une revue intelligente de toutes vos PR en souffrance sur Github (votre RSSI vous interdira de le faire forcément car ça envoie votre code sur les serveurs d’Openai, mais soyez fou et essayez sur un projet perso, c’est assez bluffant).\r
\r
Envie de créer des manifests avec un plugin kubectl qui s’appuie sur Openai ? Utilisez  [Kubectl-ai](https://github.com/sozercan/kubectl-ai)  ! Attendez c’est pas fini, on ne vous a pas encore parlé de l'extension [ChatGPT](https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf)  qui s’insère dans vos recherches Google ou de ce template qui permet de se servir de  [ChatGPT dans Google Doc](https://github.com/cesarhuret/docGPT)  ! Vous utilisez VS Code (on ne vous jugera pas promis), alors utilisez cette extension qui vous permet de requêter l’API non officielle de ChatGPT à travers votre IDE favori. Je sais que vous êtes des gens bien et vous avez donc noté que Github intègre désormais le modèle  [ChatGPT-4 à Copilot](https://github.com/features/preview/copilot-x)  ? “_With Copilot X we’re laying out our future vision of Copilot, which means AI is at every step of the developer lifecycle_,”  [dixit le CEO de Github](https://www.theverge.com/2023/3/22/23651456/github-copilot-x-gpt-4-code-chat-voice-support), rien que ça.\r
\r
Allez on arrête là avant de faire une indigestion d’IA, mais si vous voulez aller plus loin (n’oubliez jamais, sky is the limit) foncez sur  [ShowGPT](https://showgpt.co/), un site web qui va vous permettre d’utiliser quelques prompts bien sympas et d’en soumettre. Encore un peu vide, ça commence à pas mal s’étoffer. Et attendez, ne partez pas, avec  [ce client ChatGPT](https://github.com/0xacx/chatGPT-shell-cli)  vous allez pouvoir requêter ChatGPT et DALL-E dans votre terminal si vous êtes prêts à y  [mettre le prix](https://medium.com/sopmac-labs/gpt-4-api-pricing-analysis-a507a4bf9829)  bien sûr, à moins que vous n’attendiez un  [ChatGPT open-source](https://news.itsfoss.com/open-source-chatgpt/)  vu que OpenAI  [estime s’être trompé en proposant un modèle open-source](https://www.lunasec.io/docs/blog/openai-not-so-open/).\r
\r
**Cybersec**\r
\r
C’est au tour du célèbre constructeur de voitures rouges qui vont vite de  [se faire torpiller par un ransomware](https://www.securitymagazine.com/articles/99097-ransomware-attack-exposed-ferrari-customer-data). Confirmé directement par son CEO via une lettre à destination des clients,  _“We regret to inform you of a cyber incident at Ferrari, where a threat actor was able to access a limited number of systems in our IT environment”_, la société refuse de payer quoi que ce soit, certaines données des clients vont donc se retrouver sur la place publique. On a encore aucune idée si ce ransomware a quelque chose à voir avec la  [faille exploitée par le groupe RansomEXX en Octobre](https://www.usine-digitale.fr/article/ferrari-victime-d-une-cyberattaque-des-documents-internes-publies-en-ligne.N2050677), mais une chose est sûre, c’est que  [petits](https://www.lemagit.fr/actualites/252528725/Cyberattaques-lenseignement-superieur-en-etat-dalerte-malgre-les-vacances) ou  [grands](https://heimdalsecurity.com/blog/vice-society-ransomware-gang-strikes-again/), nous sommes tous la cible de cyberattaques, et que la France se classe au 5e rang mondial des attaques par ransomware d’après un [rapport d’Outpost24](https://outpost24.com/fr).\r
\r
![](https://storage.mlcdn.com/account_image/325165/GC2qBYkTZbJ65XnLYvHCkEA09Qx3ItV6EPlLYGd6.png)\r
\r
Il faut dire que chez les piratins, on ne connaît pas la crise : des groupes comme  [Vice Society](https://www.malwarebytes.com/blog/business/2023/01/5-facts-about-vice-society-the-ransomware-group-wreaking-havoc-on-k-12-schools)  ou  [Lockbit](https://www.usine-digitale.fr/article/le-specialiste-des-transactions-financieres-ion-group-victime-d-une-cyberattaque-de-lockbit.N2101526) sont en pleine croissance et font un nombre considérable de victimes, notamment dans le secteur de l’éducation avec déjà 23 attaques recensées au mois de Janvier, et les données de 9 écoles publiées sur le site de Vice Society. Pour rappel, c’est plus de 70% des entreprises qui ont été touchées par des ransomwares en 2022 d’après le rapport “[2023 State of Malware](https://go.malwarebytes.com/rs/805-USG-300/images/MWB_State_of_Malware_Report_2023.pdf)” de la société Malwarebytes. Et si vous aimez les chiffres claqués au sol comme disent les jeunes, c’est pas moins de 22500 nouvelles failles et vulnérabilités qui ont été ajoutées à la base de données CVE en 2022, soit 10% de plus que l’année précédente.\r
\r
Vous reprendrez bien un peu de ChatGPT ? On vous a parlé de ce poc à base de nmap qui vous permet de créer des  [rapports de vulnérabilité](https://www.kitploit.com/2023/03/gptvuln-analyzer-uses-chatgpt-api-and.html)  plus que pertinents ?\r
\r
Mais dis-moi Jamy, comment puis-je installer Kali, la distribution Linux orientée sécurité offensive et défensive ? Rien de plus simple Fred, il suffit de lire  [ce petit guide plutôt bien fichu](https://www.hackingarticles.in/multiple-ways-to-install-kali/)  qui vous prendra par la main pour installer Kali sur plein de plateformes, comme AWS, Raspberry, ou même votre frigo. Vous n’avez maintenant plus d’excuses pour ne pas essayer cette chouette distribution qui rend service tous les jours.\r
\r
Lassé d’utiliser toujours le même scan de vulnérabilité ? Pourquoi ne pas se laisser tenter par  [Whatweb](https://kalilinuxtutorials.com/whatweb/), qui est vraiment simple à prendre en main et nativement intégré à Kali, ou encore  [Nikto](https://www.freecodecamp.org/news/an-introduction-to-web-server-scanning-with-nikto/) qui vous permettra d’aller encore un poil plus loin ? Sinon histoire d’avoir une vue bien générale, vous pouvez essayer le  [Coudflare Radar URL](https://radar.cloudflare.com/scan)  qui  [vient de sortir en bêta](https://blog.cloudflare.com/radar-url-scanner-early-access/)  et vous donnera déjà une tonne d’informations à exploiter.\r
\r
Après avoir découvert que leur clé privée RSA SSH avait été brièvement exposée dans un dépôt public,  [Github a changé sa clef RSA SSH](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/).  _"This week, we discovered that GitHub.com’s RSA SSH private key was briefly exposed in a public GitHub repository. We immediately acted to contain the exposure and began investigating to understand the root cause and impact"._  Circulez y’a rien à voir.  \r
\r
**Du côté des ops**\r
\r
Le monde se divise en deux catégories de personnes : ceux qui pensent que YAML (Yet Another Markup Language) est une abomination contre nature dont seul le feu peut venir à bout, et ceux qui s’en servent tous les jours avec enthousiasme. Vous n’y avez jamais touché (ça viendra, faites-moi confiance, personne ne sera préservé du YAML Iä Iä Shub-Niggurath) et avez envie d’avoir un aperçu des possibilités offertes ? Consultez ce  [post des outlaws de chez Cloudbees](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)  qui constitue une bonne introduction à YAML, ou l’entrée vers le royaume des ténèbres, c’est vous qui voyez.\r
\r
Rien à voir avec nos métiers, mais en fait si un peu quand même. On a tous ce manager un peu relou qui nous inflige des réunions sans valeur d’où nous ressortons encore plus perdu qu’avant d’y entrer. Plutôt que de jouer la  [provocation](https://www.zazzle.com/i_survived_another_meeting_that_should_have_been_a_t_shirt-235572301833323582), éduquons-le et faisons-lui lire ce  [merveilleux post de Jean-Marc Charles](https://medium.com/@chomb/comment-rendre-vos-meeting-int%C3%A9ressants-ou-vous-en-passer-b5838e82c1b8)  de chez Hokla, alias Chomb, qu’on remercie chaudement !  \r
\r
Alors que certains parlent de la  [trinité devops](https://dzone.com/articles/what-is-devops-4)  (People & Culture, Process & Practice, Tools & Technology), John Willis lui préfère parler de  [CAMS](https://medium.com/@seanguthrie/devops-principles-the-cams-model-9687591ca37a), les quatre piliers qui soutiennent Devops (Culture, Automation, Measurement, Sharing). C’est en train d’évoluer depuis quelques temps et maintenant on préfère parler de CALMS (oui il y a un L en plus, pour Leans). C’est le SRE David Jacobs qui en parle  [dans un post qui vulgarise bien](https://medium.com/@davidjacobs522/the-calms-model-84784994ee25)  tout ça, et on ne peut qu’être d’accord avec lui.  \r
\r
**Clouderies**\r
\r
Amazon a soufflé les bougies pour les  [17 ans de leur service Simple Storage Service](https://aws.amazon.com/fr/blogs/aws/celebrate-amazon-s3s-17th-birthday-at-aws-pi-day-2023/)  (S3). On y apprend pour l’occasion qu’en 2023 S3 héberge 280 billions d'objets et se tape en moyenne plus de 100 millions de requêtes par seconde, soit autant que le site rudeops.com dans trente ans.\r
\r
Ils bougent encore\r
\r
Hey vous avez vu,  [Dragonfly est passé en version 1.0](https://github.com/dragonflydb/dragonfly/releases/tag/v1.0.0)  ! Pour les deux au fond qui dorment, Dragonfly est un data-store key/value chargé en mémoire (comme Memcache ou Redis) avec des temps de réponse complètement fous.\r
\r
C’est aussi  [OpenSSH qui se met à jour à travers sa version 9.3](https://www.openssh.com/txt/release-9.3), on y apprend entre autres bugs fix obscurs que cette version inclut la possibilité de "_“accept -Ohashalg=sha1|sha256 when outputting SSHFP fingerprints to allow algorithm selection“_".\r
Aucune idée de ce que ça signifie mais ça a l’air important, quel métier merveilleux.\r
\r
**Marcel et son orchestre**\r
\r
On ne va pas se mentir, nous ce qu’on aime c’est mettre en place des microservices à base d’images docker archi compactes, fiables et sécurisées. Et si vous n’avez aucune idée de comment faire, voici  [un excellent post](https://medium.com/vantageai/how-to-make-your-python-docker-images-secure-fast-small-b3a6870373a0)  qui va tout vous expliquer. C’est vraiment super riche, avec un use-case à la portée des plus profanes d’entre nous, à lire et à bookmaker !\r
\r
Et en parlant de Docker, on a de plus en plus de mal à comprendre la stratégie de la baleine bleue qui se transforme en requin. C’est dans un email adressé à ces utilisateurs qu’elle a annoncé  [fermer ses free plans](https://blog.alexellis.io/docker-is-deleting-open-source-images/)  à la date fatidique du 14 Avril 2023, merci de passer sur un plan payant, bisous ! Alors forcément  [ça fait réagir](https://blog.alexellis.io/docker-is-deleting-open-source-images/), et c’est  [Github qui se frotte les mains](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry). Docker, à fond pour l’Open Source, mais pas trop.\r
\r
On vous parlait de  [Gitops](https://join.rudeops.com/emails/webview/325165/82716504434410942) la dernière fois, mais c’est toujours compliqué de se poser les bonnes questions pour savoir par où commencer. Les coyotes de chez DZone ont rédigé un post qui structure l’approche à adopter sur l’implémentation de Gitops dans votre organisation, avec un focus sur la gestion de vos artefacts dans vos repos et les bonnes pratiques associées.[Ça se lit ICI](https://dzone.com/articles/source-code-management-for-gitops-and-cicd)  en sirotant la boisson de votre choix. Et si vous n’y comprenez toujours rien à ce qu’apporte Gitops, lisez ce post de  [John Dietz](https://thenewstack.io/i-need-to-talk-to-you-about-kubernetes-gitops/)  très détaillé sur les prérequis et les contraintes apportées par ce set de bonnes pratiques.\r
\r
**J'aime lire**\r
\r
##### Cloud Native DevOps with Kubernetes\r
\r
Kubernetes est une usine à gaz, c’est sacrément dur de s’y mettre, et même si la courbe de progression est gratifiante, c’est un peu comme manger du verre pilé en riant.\r
\r
Heureusement, John Arunde[l](https://www.amazon.fr/John-Arundel/e/B00BZWK2JQ/ref=aufs_dp_fta_dsk)  et son compère Justin Domingus  [ont sorti cette bible](https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/)  qui vous donne les clefs, de manière très pragmatique et à portée de tout le monde, afin de vous familiariser et prendre en main vos premiers clusters, quel que soit votre environnement (cloud based, on premise…).\r
\r
Ca se lit rapidement, c’est bourré d'exemples et de réflexions pertinentes, et vous n’aurez plus aucune excuse pour conserver vos clusters swarm ou manger du verre pilé.`,l=`---\r
layout: post\r
title: Newsletter du 14 Avril 2023\r
tags: [devops, gitops, cloud]\r
---\r
\r
\r
*On le sait tous, conduire les yeux fermés avec les mains attachées dans le dos ne fait partie d’aucun set de bonnes pratiques automobiles. Et oui, c’est pareil pour le vélo pour ceux qui se posaient vraiment la question. Bref, transposez maintenant cette image à vos systèmes d’informations et vous saurez où je veux en venir : on ne peut pas piloter un environnement en étant aveugle, et un maximum d'investissement doit être mis en amont sur la supervision, l’alerting, et l’observabilité. Obvious ? Pas tant que ça, du moins lorsqu’on parle d’observabilité._*\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/EoSM3Xm1AxBfqGef7rNqIi7pyxAyGTxJj06Rw5jF.png)\r
\r
## L'observabilité - tu me vois, tu me vois pas.\r
\r
Alors bien sûr, tout le monde a une définition bien à soi de l’observabilité. La pieuvre de Mountain View préfère parler de  _“[tooling or technical solution that allows teams to actively debug their system](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability). Observability is based on exploring properties and patterns not defined in advance.”_  alors que chez les coyotes de New Relic on parle de  _“[proactively collecting, visualizing, and applying intelligence to all of your metrics](https://newrelic.com/blog/best-practices/what-is-observability), events, logs, and traces—so you can understand the behavior of your complex digital system”_. Vous la sentez la nuance entre le monitoring et l’observabilité ? Et pour aller plus loin, vous pouvez consulter  [ce post de Intercom](https://www.intercom.com/blog/engineering-observability/)  qui nous démontre avec quelques exemples comment ils se servent de l'observabilité tous les jours, à mettre en parallèle avec  [ce post de chez SquadCast](https://www.squadcast.com/blog/how-important-is-observability-for-sre)  qui nous explique à quel point les bénéfices apportés sont importants. Hey, on a aussi  [ce post](https://www.linkedin.com/pulse/5-stages-observability-maturity-model-logiq-ai/)  des bad boys de chez Logiq.AI qui récapitule tout ça à travers un modèle de maturité, que vous pouvez mettre en pratique avec les  [réflexions pertinentes des cowboys de chez TechTarget](https://www.techtarget.com/searchapparchitecture/tip/5-basic-strategies-for-distributed-systems-observability)  pour construire une vraie stratégie (et un solide dossier à destination de votre CTO pour lui demander des sous).  \r
\r
**Cybersec**\r
\r
Des signataires, dont certains sont des contributeurs de longue date, ainsi que des (co)fondateurs et/ou (co)leaders de projets phares de la communauté  [OWASP](https://owasp.org/), ont publié une  [lettre ouverte à la direction](https://github.com/owasp-change/owasp-change.github.io)  pour exprimer leurs préoccupations quant à l'avenir de l'organisation. Ils estiment que l'OWASP, créé il y a plus de 20 ans, doit évoluer pour répondre aux besoins de la communauté. Les signataires ont énoncé plusieurs points clés dans leur appel, notamment la nécessité de publier et de maintenir un plan de mobilisation, de restructurer la gouvernance, d'accroître le financement, de fournir une infrastructure et des services améliorés, et de mettre en place de véritables actions de gestion de la communauté. Les signataires souhaitent pouvoir créer des projets open source de qualité commerciale, sans pour autant devenir des projets open core.\r
\r
Alors forcément,  [ça fait jaser](https://www.linkedin.com/pulse/deevolution-owasp-john-steven/), et les réactions exhortant à  [plus de transparence sur la gouvernance](https://www.darkreading.com/edge-articles/is-owasp-at-risk-of-irrelevance)  commencent à être de plus en plus virulentes sur la toile.\r
\r
Nous on regarde ça de loin, un peu énervés et un peu tristes de voir tous ces gens intelligents se chamailler, car en plus de son célèbre  [top ten](https://owasp.org/Top10/fr/), l'OWASP a su créer un véritable écosystème dédié à la sécurité, et propulse aussi  [Zap](https://www.zaproxy.org/) qu'on aime beaucoup ici.\r
\r
![](https://storage.mlcdn.com/account_image/325165/3YMNSIHlg60k8xuf6PGfU7xj0EXfMc0y4Y5JzfR8.png)\r
\r
Et en parlant de l’OWASP,  [cet article de Sysdig](https://sysdig.com/blog/top-owasp-kubernetes/?utm_id=FAUN_Zeno366_Link_title)  vous présente les 10 principales vulnérabilités de sécurité OWASP pour les usines à gaz Kubernetes. On nous explique comment ces vulnérabilités peuvent être exploitées et on nous donne des conseils pratiques pour les atténuer. Les recommandations incluent la mise en place de politiques de sécurité, la gestion des identités et des accès, la configuration de l'infrastructure et la surveillance des activités suspectes, un peu comme dans une pub de services de télésurveillance, mais en mieux.  \r
\r
Dans le troisième et dernier volet de la série d'articles intitulée "[Lateral movement risks in the cloud and how to prevent them](https://www.wiz.io/blog/lateral-movement-risks-in-the-cloud-and-how-to-prevent-them-part-3-from-compromis)" de chez Wiz, l'auteur aborde la façon de prévenir les compromis de comptes IAM qui sont souvent des cibles privilégiées pour les attaquants. L'article recommande de surveiller les activités des comptes IAM comme un Pierre Palmade en voiture, pour détecter tout comportement suspect et de mettre en place des politiques de sécurité solides pour les comptes IAM (rotation régulière des clés et l'utilisation de mots de passe forts, classique).\r
\r
Comme on aime les noms rigolos, on vous présente aujourd’hui  [Medusa](https://en.kali.tools/?p=200), un super outil de brute-forcing qui vient avec un wagon de plugins qui nous parlent bien (POP3, CVS, FTP, HTTP, IMAP, SMB, SMTP, SNMP, SSHv2, MS-SQL, MySQL, NCP, PostgreSQL, rexec, rlogin, rsh, Telnet, SVN, etc). Livré de base avec Kali, il s’installe très bien sur Debian et fera la joie des petits et des grands le temps d'un après-midi pluvieux.\r
\r
Et on allait oublier de vous parler de XXElixir, ça aurait été dommage car c’est du bel ouvrage comme on dit dans le bouchonnois :  _“This tool is designed to test for file upload and XXE (XML External Entity) vulnerabilities by poisoning an XLSX file”_.  [Ca se télécharge ici](https://github.com/kljunowsky/XXElixir)  et ça tourne bien entendu sur Docker.  \r
\r
**Le monde merveilleux des Ops**\r
\r
Dans la série, je me pose beaucoup trop de questions vaines, c’est au tour de Jeff Martens de  [se demander ce que signifie SRE](https://metrist.io/blog/is-sre-just-ops-with-a-new-name/)  et si c’est une évolution de nos métiers d’OPS. Au premier abord on pourrait trouver ça totalement stérile et on aurait envie de lui jeter des petits cailloux pointus à la figure, mais en fait c’est très plaisant à lire et ça nous montre à quel point nos métiers se métamorphosent et nous tirent vers le haut. Donc pas de petits cailloux cette fois-ci Jeff, mais on t’a à l’oeil.\r
\r
Les mecs de la QA me font toujours penser à ces héros inconnus, qui œuvrent dans l’ombre et ne récoltent jamais les lauriers de la victoire, un peu comme ces unités qu’on parachute derrière les lignes ennemies. Mais je m’égare. Aujourd’hui c’est Heemeng Foo qui nous explique comment sa philosophie de test est inspirée de “L’art de la guerre”, de Sun Tzu : “[know yourself and your enemy and you will win every battle](https://heemeng.medium.com/sun-tzu-and-the-art-of-software-test-management-2279743b82f9)”. C’est super intéressant à lire, ça fourmille d’exemples pertinents et c’est un bel échantillon de pragmatisme et d’humilité.\r
\r
Quand on vous dit que dans nos métiers on peut tout mesurer, c’est pas pour la déconne et on prend ça très au sérieux. C’est le cas de Ben Tasker -un anglais évidemment- qui a écrit un  [tuto très détaillé afin de monitorer son aquarium d’eau de mer](https://www.bentasker.co.uk/posts/blog/house-stuff/monitoring-a-fishtank-with-influxdb-and-g%20rafana.html)  (le filtrage, la température de l’eau, etc). C’est bien rédigé, c’est bien entendu à travers un Raspberry Pi qu’on procède, et ça donne plein d’idées, comme par exemple monitorer le nombre de salades par minutes que nous sort le gouvernement à chaque réforme.\r
\r
C’est au tour d’Airbnb, la petite startup familiale californienne, de nous présenter  [une méthodologie complète pour gérer les incidents](https://medium.com/airbnb-engineering/incident-management-ae863dc5d47f)  de manière efficace avec beaucoup d’automatisme et pas mal d’outils que vous connaissez bien (Slack, Jira, Pager Duty…). On y apprend que cette méthodologie repose sur une approche en quatre étapes : préparation, réponse, résolution et analyse. Elle implique une communication claire et cohérente, des rôles clairement définis, une documentation complète et des procédures rigoureuses pour assurer une gestion transparente et rapide des incidents. La méthodologie a été testée avec succès lors d'incidents réels chez Airbnb et peut être assez facilement appliquée à d'autres boîtes, oui, même la vôtre, il y a plein de bonnes choses à prendre et à dupliquer chez vous.\r
\r
C’est dans cet article qu’on nous explique enfin  [comment réaliser des démonstrations en mode CLI plus efficaces et sans erreurs](https://betterprogramming.pub/make-your-cli-demos-a-breeze-with-zero-stress-and-zero-mistakes-5e3f176d2fd3).On nous recommande l'utilisation de  [Asciinema](https://asciinema.org/) qui permet d'enregistrer des séquences de commandes et de les reproduire facilement dans une présentation, et plein d’autres outils qui vont simplifier la vie de vos avant-ventes. L'article fournit aussi des conseils pratiques pour préparer et organiser les démonstrations, comme l'utilisation de scripts, la sélection de scénarios clés et la mise en place d'un environnement sandbox séparé pour éviter les conflits avec les données de prod. Ca sent l’article écrit par un mec qui a loupé pas mal de démos et c’est vraiment très bien.\r
\r
**J'aime lire**\r
\r
##### The making of a manager - What to Do When Everyone Looks to You\r
\r
Parce que les managers sont nos amis aussi, on vous conseille chaudement le bouquin écrit par  [Julie Zhuo](https://www.juliezhuo.com/book/manager.html) qui raconte l'histoire de sa propre expérience en tant que jeune manager dans une entreprise de la Silicon Valley. Le livre est rempli de conseils pratiques pour les nouveaux managers, basés sur les erreurs et les succès de Julie tout au long de sa carrière, et fourmille d'anecdotes et de cas pratiques.\r
\r
Le livre se divise en trois parties : la première partie se concentre sur les défis initiaux rencontrés par les nouveaux managers, la deuxième partie explique comment construire une équipe performante, et la troisième partie aborde la façon de diriger efficacement une organisation.\r
\r
Alors attention, ça s’adresse à des managers techs dans un contexte de startup, donc pas forcément applicable dans des boîtes style COGIP.`,c=`---\r
layout: post\r
title: Newsletter du 02 Mai 2023\r
tags: [devops, Github, secops]\r
---\r
\r
\r
*Un grand scientifique avait coutume de dire que “Là où on va on n’a pas besoin de route Marty” avant d’éclater d’un rire dément et de démarrer en trombe à bord de sa DeLorean. C’est un peu le contraire dans la culture DevOps : on a un grand besoin de belles routes, de pistes à peine empruntées parfois, de sentiers sinueux… Et pour les suivre, il nous faut des trajectoires, des jalons, et quelques panneaux pour nous guider sur des chemins pas toujours évidents à suivre. Et c’est justement de cela dont nous allons discuter aujourd’hui pour ouvrir cette quatrième édition de la newsletter, bonne lecture à tous !_\r
_Cyril_*  \r
  \r
  \r
\r
![](https://storage.mlcdn.com/account_image/325165/1ZpZlI9wTqe1L8YIbcvXBNomd5BDwFQBfD72ru1g.png)\r
\r
## Devops - The Three Ways\r
\r
Gene Kim est l'une des principales têtes pensantes de DevOps, et il est l'auteur de plusieurs livres sur le sujet, notamment "The Phoenix Project" dont on parlera un peu plus bas et "The DevOps Handbook" dont on vous a déjà parlé.  [Selon Gene Kim, il existe trois chemins DevOps qui peuvent être empruntés](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/)  pour améliorer l'efficacité et la rentabilité de l'entreprise (oui, ça fait un choc dit comme ça mais DevOps est centré sur un système archi capitaliste) : bref, il s’agit du flow, du feedback et de l'apprentissage continu.  \r
\r
**The First Way: Flow/Systems Thinking**\r
\r
Le premier chemin DevOps consiste à identifier les goulots d'étranglement dans le process de développement et de déploiement, et à les éliminer le plus vite possible afin d’accélérer le flow de travail. C’est le chemin qui met l'accent sur l'automatisation des process de développement, des tests et du déploiement, ainsi que sur la mesure continue des performances pour identifier les problèmes et les améliorer : rien ne doit perturber [la création de valeur de cette chaîne](https://linearb.io/blog/value-stream-mapping-devops/), et l’unique priorité est d’éliminer toutes les aspérités avant un déploiement. Simple, basique.\r
\r
**The Second Way: Amplify Feedback Loops**\r
\r
Le deuxième chemin se concentre sur la communication et la collaboration entre les différentes équipes impliquées dans le développement et les mises en production. Il met l'accent sur la  [création d'une culture de collaboration](https://medium.com/@antweiss/understanding-feedback-loops-in-devops-e93b92b74bd1), de confiance et de partage de connaissances pour assurer que tous les membres de l'équipe travaillent ensemble de manière efficace. Le feedback est basé sur le principe que  [les devs doivent être en mesure de comprendre comment leur travail affecte les utilisateurs finaux](https://beautytmr.com/five-benefits-of-making-your-developers-talk-with-your-end-users-8a73b3ffe1f7), ce qui paraît évident dit comme ça mais est loin d’être acquis en général.  [Les équipes de développement et d'exploitation doivent travailler ensemble](https://www.devopsdigest.com/dev-and-ops-collaborate-1)  pour s'assurer que les commentaires des utilisateurs sont pris en compte et que des mesures sont prises pour améliorer le produit.\r
\r
**The Third Way: Culture of Continual Experimentation and Learning**\r
\r
Le chemin de l'apprentissage continu (oui en français ça fait moins rêver forcément) de DevOps consiste à  [améliorer constamment le process de développement et de déploiement](https://devops.com/learning-the-third-way-of-devops-continuous-improvement/)  en utilisant des données pour guider les décisions. ça inclut des mesures de perf pour suivre la qualité et la vitesse du process, ainsi que des données sur les problèmes de production pour guider les améliorations futures. L'apprentissage continu DevOps est basé sur un principe simple : les devs doivent être en mesure de comprendre les causes profondes des problèmes de production et de les résoudre rapidement. Les équipes de dév et d'exploitation doivent travailler ensemble pour identifier les opportunités d'amélioration et mettre en place des mesures pour y parvenir.\r
\r
En combinant ces trois chemins DevOps - le flow, le feedback et l'apprentissage continu -  [les organisations peuvent améliorer considérablement leur efficacité](https://www.freshworks.com/freshservice/itsm/phoenix-project-three-ways-devops-blog/)  et leur rentabilité en matière de développement et de delivery. Les devs et les ops travailleront ensemble pour identifier les problèmes et les résoudre rapidement, ce qui réduira le temps de déploiement, améliorera la qualité du produit, augmentera la satisfaction des clients et par la même occasion votre prime de fin d’année.\r
\r
En conclusion, il y a un point commun qui émerge de tout ça : c’est la collaboration entre les équipes avec des objectifs partagés. Un peu comme si on n’avait pas tous le même maillot, mais qu'on faisait partie de la même équipe, ou quelque chose du genre…  \r
\r
## Marcel et son orchestre\r
\r
Lorsqu’on demande quel orchestrateur utiliser en 2023, la réponse est aussi triste qu’unanime : Kubernetes, qui est loin devant Swarm (en train de mourir après le rachat de Mirantis), Nomad ou Rancher, et qui remporte tous les suffrages, avec une préférence sur un mode PaaS à travers GKE ou AKS. Même les coyotes de Scaleway ont leur Paas pour faire du K8s maintenant c’est dire.\r
\r
Et là où ça peut coincer, c’est que les solutions à base de K8s demandent pas mal d’efforts afin d’être sécurisées aux petits oignons et d’avoir un joli tampon vert apposé par le RSSI sur votre projet. Il y a d'ailleurs ce rapport de la société d’assurances NCC qui vient de rendre publique  [une évaluation de sécurité de K8s](https://research.nccgroup.com/2023/04/17/public-report-kubernetes-1-24-security-audit/), on y retrouve la méthodologie employée et comment ils ont mené l’audit, c’est un document vraiment très riche qui fournit pas mal de pistes (certaines très basiques et obvious) sur la sécurisation de votre orchestrateur favori.\r
\r
Dans la même veine, les techs de chez Teleport donnent quelques best practices sur comment réduire votre surface d’attaque sur K8s,  [ça se lit ici](https://goteleport.com/blog/how-to-hack-kubernetes/), et c’est à mettre en parallèle avec cette série de posts -arides mais qui ouvrent de sacrés horizons- sur du “[Forensic container checkpointing](https://kubernetes.io/blog/2023/03/10/forensic-container-analysis/)”. Sans doute plus proches de nos préoccupations, on a trouvé cet article des outlaws de chez Wescale qui nous partage  [deux visions du GitOps sur Kubernetes](https://blog.wescale.fr/flux-et-argocd-deux-visions-du-gitops-sur-kubernetes), à travers Flux et ArgoCD, et c’est passionnant à lire, merci à eux ! Il y a aussi les cowboys de chez Padok qui proposent une solution de migration de vos  [Docker-Compose vers K8s avec Kompose](https://www.padok.fr/blog/migration-kubernetes-kompose), c’est vraiment chouette pour se familiariser avec Kubernetes en mode POC, même si vous tomberez sur des limitations avec Kompose qui sont décrites dans le post.\r
\r
Allez, on va en rester là et vous rappeler que s’orienter vers K8s n’est pas la solution ultime, et qu’il ne faut pas négliger les besoins réels de votre organisation (non, mettre votre blog perso sur un cluster Kubernetes n’est pas raisonnable).  \r
\r
![](https://storage.mlcdn.com/account_image/325165/JTq8ZXUd64cDPRpTEYzekQWFj1twB15vF0fqgCbX.png)\r
\r
## Le monde merveilleux du DevOps\r
\r
Le mois de Mai est arrivé, et on ne peut s’empêcher de penser que  [le monde irait bien mieux si on arrivait à éradiquer YAML par le feu](https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell)  une bonne fois pour toute, et on n'est pas les seuls à le penser d’ailleurs.\r
\r
Si vous aviez le choix entre vous enfoncer des clous rouillés sous les ongles ou faire du devops, vous vous rendriez compte qu’en fait c’est la même chose. C’est à travers ce gros post de Bibin Wilson, un tech de chez DevopsCube, que ce dernier  [récapitule l’outillage nécessaire et les méthodologies à maîtriser](https://devopscube.com/become-devops-engineer/)  pour “être un vrai bonhomme” comme on dit dans les quartiers chauds de Montargis. Et c’est là qu’on se rend compte à quel point notre métier est tellement complexe qu’il nous empêche de faire la différence entre le plaisir et la souffrance.\r
\r
C’est vrai qu’aggréger et standardiser des logs d’events ça peut vite tourner au casse-tête, et c’est donc fort logiquement qu’un mec de chez Sematext  [nous donne quelques pistes et quelques outils](https://sematext.com/blog/log-aggregation/)  pour faire au mieux. A lire avant la mise en place de votre prochain puis de logs.\r
\r
Il est acquis que  [GitHub Copilot et d’autres solutions à base d’IA](https://medium.com/sopra-steria-norge/github-copilot-vs-amazon-codewhisperer-327c1e358d26), peuvent comprendre et générer du code dans des dizaines de langages de programmation. Il est aussi acquis que ça peut générer des failles de sécurité et des contextes non respectés. Et c’est Paul Foryt de chez Styra qui nous en parle dans son article intitulé  [AI-Generated Infrastructure-as-Code: The Good, the Bad and the Ugly](https://www.styra.com/blog/ai-generated-infrastructure-as-code-the-good-the-bad-and-the-ugly/), à lire sans retenue pour avoir un beau panorama d’où nous en sommes en 2023 et bien comprendre que nous n’en sommes qu’aux balbutiements.  \r
\r
## Un peu de sécu\r
\r
Un post de David das Neves nous montre à quel point les systèmes d’information à travers le cloud  [se complexifient et mènent à une flopée d’incidents de sécurité](https://www.linkedin.com/pulse/cloud-burning-brightly-david-das-neves/). Quelques pistes sont évoquées, comme la mise en place de standards et une automatisation poussée au maximum. A garder sous le coude.\r
\r
Nmap, qui est sans doute un de nos outils favoris, permet d’aller loin, voire même très loin dans l’analyse de votre réseau. Et aujourd’hui c’est Jose Vicente Nunez  [qui nous propose un tuto complètement fou](https://www.freecodecamp.org/news/enhance-nmap-with-python/)  qui va nous apprendre en vrac à comment analyser un fichier de résultats XML et à l'enrichir avec des avis de sécurité provenant de NIST, comment combiner Nmap avec d'autres scripts pour automatiser son exécution ou encore comment utiliser les bonnes options pour accélérer le scan de notre réseau.\r
\r
En vrac\r
\r
Ha ce post-it indique que je dois vous parler de deux applications, ça m’arrange c’est de la pige facile. La première se nomme Killport et vous permet, comme son nom l’indique, de  [tuer un process qui écoute sur un port spécifique](https://github.com/jkfran/killport). Alors pourquoi pas, ne jugeons pas, ça peut toujours être utile et c’est écrit en Rust. La deuxième appli dont je dois vous parler est  [Kube-Reqsizer](https://github.com/jatalocks/kube-reqsizer), un controller Kubernetes, qui vous permet de mesurer et mieux contrôler l’usage de vos pods, une alternative au très apprécié  [vertical-pod-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler).`,d=`---\r
layout: post\r
title: Newsletter du 15 Mai 2023\r
subtitle: La newsletter sans cartons rouges\r
thumbnail-img: /assets/img/Barbara-ennui.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, basecamp, cloud]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
_Vous savez, ma femme me dit souvent que notre quotidien de devops ressemble à un épisode de Colombo et elle n’a pas tout à fait tort. Comme le célèbre détective, on arrive sur les lieux du crime pour constater les faits (monitoring, observabilité), on cherche des indices (dans les logs), on teste des hypothèses en rejouant les faits, on interroge les autres équipes (les devs, la QA, le métier, les composants), bref, on est dans une recherche constante de la vérité. Je pense que ce qui nous anime, au-delà de préserver le chiffre d’affaires de nos organisations, c’est cette curiosité, ce besoin de comprendre les faits, et d'apprivoiser le fonctionnement complexe de notre écosystème, et surtout de pouvoir dire à la fin de l’enquête que le problème vient du #@!! de réseau qui déconne encore. Bonne lecture à tous de cette déjà cinquième itération de RudeOps.com, détectives._\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/5yMQRR50LqnwZLDwvcCWlDcWKA5iyE1qK2R4CNUw.png)\r
\r
## Clouderies\r
\r
Alors c’est malin maintenant j’ai des images de Colombo dans la tête et sa voix traînante qui pose des questions insistantes. Bref, souvenez-vous, il y a quelques mois on vous disait que David Heinemeier Hansson, le papa de RoR et co-fondateur de Basecamp,  [quittait AWS pour retourner sur une infrastructure bare-metal](https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0)  et on ne comprenait pas très bien le move qui consistait à  [faire économiser 7 millions de dollars sur 5 ans](https://dev.37signals.com/our-cloud-spend-in-2022/). Et David qui est aussi buté qu’un RSSI un jour de patching continue à nous décrire son grand œuvre et à se  [séparer de nombreux services hébergés dans le cloud](https://world.hey.com/dhh/it-s-not-just-cloud-costs-that-are-out-of-control-efcd098c). Alors ça amène quand même plein de questions auxquelles il ne répond pas, mais ses posts sont une mine d’or et sont assez révélateurs, à notre avis, d’un tournant dans l’industrie du SaaS et du cloud en général, où on se rend compte qu’à (très) grande échelle, ces modèles ont tendance à ne pas scaler et à devenir un centre de coûts ([aussi bien pour ces acteurs que pour leurs clients](https://www.bloomberg.com/news/articles/2023-04-26/amazon-starts-round-of-layoffs-in-aws-cloud-services-division?leadSource=uverify%20wall)) là où ils devraient rester un centre de bénéfices pour l’organisation qui les utilise, sans même aller sur le terrain du  [lock technique ou des performances](https://ubuntu.com/blog/cloud-repatriation-reasons).\r
\r
Et en parlant de AWS,  [la situation n’est pas rose](https://www.nextplatform.com/2023/04/28/of-course-aws-revenues-are-slowing-and-profits-are-pinched/)  pour la petite startup californienne qui commence à s’inquiéter d’une  [possible stagnation de la croissance](https://www.digitalcommerce360.com/article/amazon-sales/)  de son activité de cloud computing. La faute à Google et Microsoft qui intensifient leurs efforts en renforçant leurs offres et en devenant archi agressifs sur différents types de marché. Faites l’essai, prenez contact avec les trois en leur disant que vous désirez faire un move to the cloud de vos applications et vous comprendrez le terme agressivité commerciale.\r
\r
Un peu comme l'Eurovision, on suit toujours avec un mélange de fascination et de tristesse les différentes déclarations de la France et/ou de l’Europe sur la mise en place d’un cloud souverain. Sauf que maintenant on parle de  [cloud de confiance](https://www.ssi.gouv.fr/actualite/cloud-de-confiance-nouveau-dispositif-daccompagnement-vers-lobtention-du-visa-de-securite-secnumcloud-a-destination-de-nos-startups-et-pme/), suivez un peu, et qui embarquera bien entendu AWS, GCP et Azure à travers une mécanique moins contraignante que le cloud souverain, mais avec le même but : rester à l’abri de la réglementation américaine. Les beaux gosses de l’Usine Digitale récapitulent tout ça dans un très bon post qui nous explique  [où nous en sommes actuellement et ce vers quoi nous nous engageons](https://www.usine-digitale.fr/article/comme-la-france-l-europe-veut-lancer-un-label-cloud-de-confiance.N2131016).  \r
\r
Cybersec\r
\r
![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)\r
\r
## Pour la liberté de la Wordpress\r
\r
Quand votre RSSI vous dit de mettre à jour vos sites propulsés par Wordpress c’est pas pour rien : les cowboys de  [Wordfence](https://www.wordfence.com/) ont révélé qu'environ un million de sites WordPress ont été affectés par une vulnérabilité exploitée dans un plugin populaire appelé "File Manager". Cette faille de sécurité ([CVE-2023-32243](https://nvd.nist.gov/vuln/detail/CVE-2023-32243)  et CVSS score de 9.8) a permis à des attaquants de prendre le contrôle de ces sites et de compromettre leur intégrité. Une mise à jour a été publiée rapidement mais les dégâts sont considérables. D'ailleurs vous vous rappelez de la  [fuite de données chez Ferrari](https://medium.com/@rudeops/newsletter-rudeops-du-31-03-2023-ec1684fa77b2)  ? Il semblerait que ce soit dû une fois encore à  [une faille de sécurité côté Wordpress](https://www.char49.com/articles/we-dont-have-a-ferrari-but-we-had-their-database-credentials)  au final. De là à dire que Wordpress est un nid à emmerdes il n’y a qu’un pas, que je franchis allègrement.\r
\r
Signe incontestable de notre notoriété grandissante, nous recevons pas mal de mails nous demandant de partager quelques liens bien sympa. Ok, en fait on a reçu un seul email, mais on a trouvé ça cool. C’est Christophe M. qui s’y colle et on le remercie chaleureusement, merci frérot, car c’est passionnant. Ca cause de la fin des mots de passe qui arrive lentement mais sûrement, et de  [l'émergence des passkeys](https://lapcatsoftware.com/articles/2023/5/1.html)  et de leurs contraintes.\r
\r
Pas bravo hein, on apprend qu’il a fallu une dizaine de mois à Google  [pour corriger la vulnérabilité GhostToken](https://www.bleepingcomputer.com/news/security/ghosttoken-gcp-flaw-let-attackers-backdoor-google-accounts/), qui permettait à des personnes mal intentionnées de compliquer la détection d'applications malveillantes connectées à des comptes Google en les masquant sur la page "Applications tierces ayant accès à votre compte".[L'exploitation de cette vulnérabilité](https://www.darkreading.com/remote-workforce/-ghosttoken-opens-google-accounts-to-permanent-infection)  était liée au process de développement des applications qui devaient être liées à un projet GCP. Lorsqu'un projet GCP était "éteint", il n'était pas immédiatement supprimé, mais une fenêtre de restauration de 30 jours était activée…\r
\r
Quand les outlaws de chez Ignite ont décidé de réaliser des mindmap sur tout un pan de la cybersec, ils n’y vont pas de main morte et ne font pas semblant, et c’est une excellente manière d’apprivoiser certains outils.  [Sur ce repo](https://github.com/Ignitetechnologies/Mindmap), vous allez pouvoir afficher des mindmap sur Burp, Empire, Shodan, HttpX, Aircrack, bref, c’est bien rempli et c’est parfait pour remplir un dimanche un peu triste, comme tous les dimanches.\r
\r
Aujourd’hui on vous parle de patator, parce qu'au-delà du nom rigolo, c’est un bel outil de brute force facile à prendre en main et bien entendu  [installé de base sur Kali](https://www.kali.org/tools/patator/)  qu’on aime décidément de plus en plus. Vous trouverez ici  [un rapide tuto](https://secnhack.in/patator-a-brute-forcing-tool/)  qui vous montrera comment devenir un script kiddie en moins de 20 minutes, oui, comme dans les films de hackers.\r
\r
## Le monde merveilleux des Ops\r
\r
C’est dans ce post intitulé “[Use Git like a senior engineer](https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e)”, qu’on pourrait traduire par “Utilise Git comme un vrai bonhomme” qu’on reprend quelques basiques pour se familiariser avec l’outil de versionning créé par Linus un jour où il devait s’ennuyer entre deux compilations de noyaux. Un poil plus pointu, ce post tiré du blog de Github vous permettra de comprendre toutes les  [subtilités liées au garbage collection](https://github.blog/2022-09-13-scaling-gits-garbage-collection/)  sous git et vous permettra de glaner quelques métriques bien sympa communiquées par Github. Un peu plus aride, mais ne nous mentons pas, nos métiers ne sont vraiment pas fun, un  [excellent tuto pour bien comprendre tout ce qu’il y a derrière le ‘git log’](https://initialcommit.com/blog/git-log)  innocent qu’on tape tous 50 fois par jour pour comprendre qui fait quoi et  [où est passé votre foutu commit](https://ohshitgit.com/fr).\r
\r
C’est chez les copains de The New Stack qu’on est tombé sur un très bon post qui résume selon eux  [quels sont les 4 principes de GitOps](https://thenewstack.io/4-core-principles-of-gitops/), et pourquoi il y en a 4 et pas 5 par exemple, bref, sinon on a aussi lu avec beaucoup d’attention le post de Kyle Robertson qui nous parle lui des  [trois piliers indispensables du SRE](https://medium.com/@jsakyle/the-foundational-pillars-of-site-reliability-engineering-d2249b192538)  (Availability & Reliability, Incident Response et Observability).\r
\r
On a découvert un blog assez sympa, c’est celui de Nick Janetackis, qui nous offre quelques tutos bien précieux et assez variés. On va prendre comme exemple l’utilisation du  [create dir avec Curl](https://nickjanetakis.com/blog/create-parent-directories-with-curl-using-the-create-dirs-flag), ou encore celui qui nous apprend comment  [nettoyer son historique shell avec Zsh](https://nickjanetakis.com/blog/clearing-and-restoring-your-current-and-saved-shell-history-with-zsh). Parfait pour débuter ou approfondir ses connaissances.\r
\r
Aujourd’hui c’est Luke Shaughnessy qui a dû se lever du mauvais pied et qui trolle un peu en se demandant si  [l’IAC amène vraiment plus de bénéfices que d’inconvénients](https://lukeshaughnessy.medium.com/infrastructure-as-code-is-not-the-answer-cfaf4882dcba). La conclusion est obvious mais ça fait toujours du bien de rappeler le principe élémentaire qu’on ne peut pas résoudre tous nos problèmes à travers un outil.\r
\r
On va terminer en vous partageant ce post qui décrit  [comment K8s a construit son succès à travers l’Open Source](https://devinterrupted.substack.com/p/how-open-source-enabled-kubernetes), c’est super intéressant car ça parle aussi bien de techno que de modèle économique.  \r
\r
## J'aime lire\r
\r
\r
**DevOps Handbook - a guide to implement devops in your workplace**\r
\r
Alors c’est plus un fascicule qu’un livre (une trentaine de pages), et ça récapitule de manière archi synthétique tout ce qu’il vous faut pour  [implémenter devops dans votre organisation](https://www.amazon.fr/DevOps-Handbook-Guide-Implementing-Workplace/dp/B07KFRGJ5R). L’auteur, Henry Martin Jones, passera sur les étapes essentielles pour transformer votre organisation et les prérequis nécessaires. et propose aussi des outils qui peuvent s’avérer utiles. On ne va pas se mentir, pour ceux qui baignent dans le DevOps depuis plusieurs années ça ne va pas vous apprendre grand chose, mais ça reste un joli cadeau à destination de son CTO ou d’autres décideurs pour leur expliquer un peu de manière simple ce que vous êtes en train de mettre en place et quel rôle ils peuvent jouer là dedans.`,p=`---\r
layout: post\r
title: Newsletter du 01 Juin 2023\r
subtitle: Et notre décision est irrévocable.	\r
thumbnail-img: /assets/img/eternue.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, ransomware, cloud]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
_La nuit dernière j’ai rêvé que Koh Lanta proposait des épreuves d’admin sys. C’était assez fou, avec un Denis Brogniart surexicté qui hurlait “et maintenant l’équipe des jaunes va devoir installer un cluster Kubernetes sur un Raspberry Pi émulé par un windows server, mais attention nouvelle règle, l’utilisation d’un IDE et du YAML est interdite !”. Sur le coup ce matin ça m’a fait marrer mais ça m’a surtout fait prendre conscience que nos métiers deviennent archi compliqués et spécialisés, et que le temps du Keep It Simple Stupid semble tristement révolu._\r
\r
_Cyril_  \r
\r
\r
## Nos lecteurs ont du talent !\r
\r
C’est encore Christophe M. qui nous envoie un email cette semaine et qui insiste, le lourd, pour nous parler de  [la métaphore du singe sur l’épaule](https://www.4tempsdumanagement.com/La-metaphore-du-singe-sur-l-epaule-Monkey-management_a7024.html). Alors ça n’a qu’un lointain rapport avec le sujet du DevOps, mais force est de reconnaître que la lecture de cet article ferait du bien à certains managers, débutants ou confirmés, alors on te remercie quand même Christophe !\r
\r
Alors que la plèbe utilise encore nslookup qui est resté  [deprecated un bon paquet d’années avant d’être à nouveau réintégré par l’ISC](https://gitlab.isc.org/isc-projects/bind9/-/commit/fb2c34419d268d36acb222e08e6f789b45a81306), les élites eux utilisent dig depuis longtemps, alors vous aussi lancez un regard dédaigneux vers la populace et  [apprenez à utiliser dig grâce à ce très chouette tuto](https://adamtheautomator.com/linux-dig/). On remercie Laure R. de nous avoir proposé cet article, merci soeurette !  \r
\r
**Du côté des ops**\r
\r
Il y a des joies simples et saines dans la vie, comme  [se moquer d’un développeur Java](https://tech.jonathangardner.net/wiki/Why_Java_Sucks)  ou mettre en place une stratégie pour scaler son architecture big data, et c’est justement de ça dont va vous parler Jordan Tigani de chez Motherduck. C’est  [un article passionnant](https://motherduck.com/blog/the-simple-joys-of-scaling-up/)  qui fait un grand tour d’horizon depuis les débuts de mapreduce jusqu’à aujourd’hui, en abordant aussi bien la partie hard que soft. Indispensable pour ceux qui ont les doigts plongés dans la data toute la journée.\r
\r
Question pour Jean Michel maintenant ! Top ! Je suis un outil conçu pour automatiser le provisionnement et la gestion des ressources d'infrastructures, qu'il s'agisse de machines virtuelles, de conteneurs, de réseaux, de bases de données ou d'autres services cloud. Il permet aux équipes d'infrastructure de décrire leur infrastructure cible dans un format déclaratif plutôt que de la configurer manuellement, je suis, je suis ? Oui Jean-Michel c’est bien de Terraform dont il s’agit, bravo, vous remportez ce magnifique  [article qui vous explique les bénéfices de Terraform en 5 minutes](https://dzone.com/articles/terraform-explained-in-5-minutes)  !\r
\r
Et en parlant de Terraform, les coyottes de chez Spacelift.io nous partagent les  [20 best practices](https://spacelift.io/blog/terraform-best-practices)  à appliquer lorsque vous commencez à utiliser Terraform, c’est à portée de tout le monde et super didactique.\r
\r
![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)\r
\r
Il y a quelques semaines on vous parlait du scan url de  [Cloudflare Radar](https://radar.cloudflare.com/)  qui continue à s’étoffer de plus en plus, (jetez un coup d’oeil, ça commence à être pas mal sexy), mais cette fois-ci, les cowboys de CloudFlare nous partagent un chouette post sur la façon dont  [sont gérées leurs instances Prometheus](https://blog.cloudflare.com/how-cloudflare-runs-prometheus-at-scale/), plein de bonnes choses dont on peut s’inspirer surtout si vous avez des problèmes de scaling (de leur côté ils communiquent sur 916 instances Prom…).\r
\r
On continue un peu sur la lancée du monitoring avec ce post de Nagaraj Tantri qui nous explique  [les vertus du test en environnement de production](https://nagaraj-tantri.medium.com/test-in-production-the-ideal-monitoring-587b23a541f9). Le post oscille entre le troll et les évidences mais a pas mal enrichi nos réflexions ici, et c’est plus fin qu’il n’y paraît, à lire à tête reposée.\r
\r
Mettre toutes ses variables d’environnement comme un gros sale dans son .env n’est pas une solution, même si on l’a tous fait, et aujourd’hui c’est Tony qui nous en parle en développant  [quelques solutions pour perdre cette mauvaise habitude](https://medium.com/@tony.infisical/the-death-of-the-env-file-6d65bfc6ac5e).\r
\r
On vous a beaucoup parlé de  [Gitops](https://www.redhat.com/fr/topics/devops/what-is-gitops) dans les dernières itérations de notre newsletter, et cette fois-ci, c’est à travers la voix de  [Brendan Burns](https://www.linkedin.com/in/brendan-burns-487aa590/), un des créateurs de Kubernetes, qu’on vous en reparle. C’est en effet lors de la dernière GitOpsCon que Burns a commencé par expliquer comment GitOps et Kubernetes sont intimement liés et que pour lui GitOps est une évolution de Kubernetes.  [Un article passionnant à lire chez les copains de TheNewStack](https://thenewstack.io/gitops-as-an-evolution-of-kubernetes/), qui fait néanmoins un peu froid dans le dos quand on sait que Burns est aussi VP chez  [la pieuvre de Redmond](https://www.microsoft.com/fr-fr).\r
\r
Pour conclure, on vous partage ce post de blog de Ross Brodbeck qui enrichit de ses réflexions le fameux  [chapitre 3 du SRE Book de Google](https://sre.google/sre-book/embracing-risk/)  sur la  [gestion des risques quand on est un SRE](https://hross.substack.com/p/managing-risk-as-an-sre).  \r
\r
**Un peu de cybersec ?**\r
\r
![](https://storage.mlcdn.com/account_image/325165/tbc3y0c957mIiA6eKvvloUc62Wc7XuO094eO1Viq.png)\r
\r
##### RaaS le bol !\r
\r
Chez les piratins on ne connaît pas la crise, et les  [Ransomwares as a Service](https://www.crowdstrike.fr/cybersecurity-101/ransomware/ransomware-as-a-service-raas/)  (RaaS) continuent d’évoluer pour devenir l'une des menaces les plus redoutables dans le paysage déjà bien parano de la cybersec. Ce modèle, permettant à des scripts kiddies ou à des organisations criminelles d'accéder facilement à des outils sophistiqués de ransomwares, connaît une  [évolution fulgurante](https://socradar.io/evolution-of-ransomware-so-far-and-hereafter/), accentuant ainsi le danger qu'il représente pour les entreprises et toi, plus moi, plus eux, plus tous ceux qui le veulent comme dirait Grégoire, notre pentester favori.\r
\r
Selon des rapports récents de plusieurs organismes de sécurité, les RaaS sont en constante expansion, avec une augmentation significative du nombre de groupes proposant ses services sur le Darknet. En 2022,  [le nombre de ces groupes a augmenté de plus de 150 % par rapport à l'année précédente](https://www.europol.europa.eu/publications-events/publications/ransomware-what-you-need-to-know).\r
\r
Une étude réalisée par  [le FBI a révélé qu'en 2021](https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf), les attaques de ransomwares ont causé plus de 20 milliards de dollars de pertes financières dans le monde, avec des victimes qui paient en moyenne  [des rançons de plusieurs centaines ou milliers de dollars](https://www.cloudwards.net/ransomware-as-a-service/#:~:text=RaaS%20operators%20offer%20their%20services,making%20it%20a%20tempting%20proposition.), autant dire que faire du RaaS est lucratif, surtout qu’on se voit maintenant proposer  [des kits prêts à l’emploi](https://thehackernews.com/2023/05/new-michaelkors-ransomware-as-service.html)  avec toutes les options indispensables by design (anonymat via des vpn douteux, cli documenté, interfaces travaillées, etc).\r
\r
Les cibles des RaaS se sont également diversifiées : alors qu’avant les entreprises étaient les principales victimes, les particuliers et les  [organisations publiques](https://www.liberation.fr/societe/sante/un-hopital-dile-de-france-cible-par-des-hackers-avec-une-rancon-de-10-millions-deuros-20220822_63ZGXL3L6ZCXDJYIZYMHEO67OY/)  sont désormais également visés. Les secteurs de la santé,  [de l'éducation](https://www.leparisien.fr/paris-75/on-ressort-les-craies-liut-paris-rives-de-seine-victime-dune-cyberattaque-07-12-2022-TNEPJBA425B6DOUU532HTU77GQ.php)  et des  [services financiers](https://www.argusdelassurance.com/assurance-dommages/risques-d-entreprise/cyber-attaques-les-services-financiers-et-l-assurance.194312)  sont particulièrement vulnérables, étant donné la sensibilité des données qu'ils détiennent et le manque de moyens mis à disposition pour contrer ce type de menaces.\r
\r
[Même si certains groupes très actifs sont arrêtés](https://www.lemondeinformatique.fr/actualites/lire-europol-et-le-fbi-frappent-en-plein-coeur-le-ransomware-hive-89349.html), l’évolution constante du nombre d’acteurs, associée à des chiffres alarmants, souligne l'urgence d'une prise de conscience et de mesures de sécurité renforcées pour lutter contre cette menace persistante. Pour finir, et si vous voulez voir à quoi ressemble une attaque par RaaS, lisez ce  [post forensic des outlaws de chez Varonis](https://www.varonis.com/blog/hive-ransomware-analysis), c’est vraiment super instructif.  \r
\r
On va essayer de repartir sur des sujets plus légers, mais la cybersec n’est décidément qu’un monde rempli de larmes et de sang. Allez, il y a bien  [Wireshark qui vient de passer en version 4-0-6](https://cybersecuritynews.com/wireshark-4-0-6/)  et qui amène une belle liste de bug fixes et de nouvelles fonctionnalités, et impossible de ne pas vous partager cette liste des [20 meilleurs threat hunting tools](https://cybersecuritynews.com/threat-hunting-tools/)  selon les barjots de CyberSecurityNews.\r
\r
On peut aussi s’attarder quelques minutes sur l’article des joyeux drilles de chez Talos qui nous parlent d’un nouveau PaaS (Phishing as a Service, quel monde merveilleux…)  [surnommé Greatness avec le mode d’attaque](https://blog.talosintelligence.com/new-phishing-as-a-service-tool-greatness-already-seen-in-the-wild/)  expliqué step by step comme on dit à Montargis.\r
\r
Il y a aussi QBot, le malware plein de malice qui fera rire petits et grands en  [exploitant une faille dans une DLL du Wordpad de WIndows](https://www.bleepingcomputer.com/news/security/qbot-malware-abuses-windows-wordpad-exe-to-infect-devices/), mais en même temps qui utilise ce genre d’OS ?\r
\r
Terminons le plus sereinement du monde avec le  [malware Legion](https://thehackernews.com/2023/05/legion-malware-upgraded-to-target-ssh.html)  qui se met tristement à jour en se dotant de fonctionnalités étendues permettant de compromettre des serveurs SSH ainsi que des identifiants AWS associés à DynamoDB et CloudWatch.  \r
\r
**Les apps à la cool**\r
\r
Aujourd’hui on vous parle de  [Motus](https://github.com/oleiade/motus) (rien à voir avec l'émission TV ne partez pas) une application écrite en Rust et qui génère des mots de passe avec plein d’options vraiment cool, et que vous pouvez intégrer facilement dans pas mal de routines au boulot. Il y a aussi  [Pyscan](https://github.com/aswinnnn/pyscan) qui propose un scanner de vulnérabilités de dépendances pour vos projets python, on est sûr que vous allez lui trouver une utilité. On a aussi beaucoup aimé  [ce repo Github](https://github.com/devopsdemoapps/microservice-app-example)  qui met à disposition une webapp de test constituée d’une foule de microservices, c’est vraiment idéal pour tester son infra et travailler sur une sandbox. Et pour conclure on a découvert -certainement après tout le monde- ce repo Github qui propulse Super-Linter,  [un linter universel qui prend en charge une large gamme de langages](https://github.com/github/super-linter). Initialement développé par la team DevOps de Github pour les aider à maintenir leur documentation et leur code de manière cohérente, ils l'ont rendu accessible en open source afin que l'ensemble de la communauté puisse l'utiliser et l'améliorer.\r
\r
**J'aime lire**\r
\r
![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)\r
\r
##### The art of capacity planning\r
\r
On a décidé de vous parler  [d’un vieux bouquin](https://www.oreilly.com/library/view/the-art-of/9780596518578/), qui a dû être édité un peu avant 2009 ou pas loin en tout cas, et si on a décidé de vous en parler, ça n’est pas par nostalgie non, car notre coeur est dur comme la pierre et nous n’avons plus aucune illusion sur notre métier, mais plus pour les qualités innées de ce livre.\r
\r
Ecrit par John Allspaw, ancien boss tech de Flickr (oui ça date) et de Etsy, pas mal de réflexions sont encore d’actualité et nous permettent aussi de mesurer le chemin accompli durant cette dernière décennie. Et c’est passionnant de remettre le nez dedans à notre époque ! L'ouvrage aborde plusieurs concepts clés liés au capacity planning. Il explique en détail ce que c’est, comment le mesurer et comment évaluer la charge qu'un système peut encaisser dans une période donnée. Allspaw met en évidence l'importance de comprendre les limites d'un système et les conséquences de les dépasser. A une époque où les offres de AWS étaient considérées comme avant-gardistes, Allspaw aborde également des sujets tels que la gestion des pics de charge, la mise à l'échelle des systèmes, l'optimisation des performances et la résolution des goulots d'étranglement. Il explore différentes approches pour équilibrer la demande et la capacité, en tenant compte des contraintes et des coûts associés. Un classique qu’on vous dit.`,m=`---\r
layout: post\r
title: Newsletter du 15 Juin 2023\r
subtitle: La newsletter qui singe la tech !		\r
thumbnail-img: /assets/img/Alain-singe.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, chaos-monkey, cloud]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
_“La folie c'est refaire sans arrêt exactement la même connerie qu'on répète sans arrêt, en espérant que ça change” (tiré du jeu vidéo Far Cry 3 - Ubisoft 2012). Parlez-en à un collègue de la QA, il ne pourra que vous comprendre et approuver, ayons donc une pensée pour ces héros de l'ombre dont le travail sauve des mises en production. Bonne lecture de cette septième itération de notre newsletter !_\r
\r
_Cyril_\r
\r
![](https://storage.mlcdn.com/account_image/325165/WVYwgAeEfAvwJKh8kowsB0U8NJEZlfpuRlrN7I5j.png)\r
\r
## Chaos Monkey Island\r
\r
Mais dis-moi Jamy, c’est quoi le Chaos Monkey ? Mais c’est très simple Fred ! Tout commence en 2011, lorsque Netflix a fait la transition de la distribution de DVD à la construction de systèmes cloud distribués pour proposer leur première offre de streaming, que l'idée du Chaos Monkey a vu le jour. Ce concept d'ingénierie,  [adopté surtout par les grosses organisations très matures](https://www.harness.io/blog/chaos-engineering-tools#:~:text=Top%20tech%20organizations%20such%20as,internal%20systematic%20behavior%20and%20flaws.), consiste à perturber délibérément les systèmes afin d'apprendre à les rendre plus résilients. C’est  [dans le premier billet de blog de Netflix à ce sujet](https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116), publié par Yury Izrailevsky, alors directeur de la production, qu’on apprend que le Chaos Monkey a été créé pour  [désactiver de manière aléatoire les instances de production](https://netflix.github.io/chaosmonkey/)  sur leur infrastructure AWS, mettant ainsi en évidence les faiblesses que les ingénieurs de Netflix pourraient corriger en développant de meilleurs mécanismes de récupération automatique. On peut facilement faire le parallèle avec l’apprentissage par l’erreur cher à Bill Gates, Steve Jobs et Patrick Sébastien.\r
\r
La planète des singes\r
\r
Pour ceux qui se posent la question, le nom de Chaos Monkey vient de  [l’idée d’un singe lâché dans un datacenter ou sur un cloud](https://www.techtarget.com/whatis/definition/Chaos-Monkey#:~:text=According%20to%20the%20developers%2C%20Chaos,loose%20in%20a%20data%20center.)  et qui mettrait aléatoirement hors service des instances, tout en continuant de servir ses clients sans interruption. Nous on aurait plutôt vu un énorme mammouth laineux plutôt qu’un singe mais bref. En pratique, le processus implique une application simple  [qui choisit aléatoirement une instance dans chaque nœud et la met en panne sans préavis](https://netflix.github.io/chaosmonkey/How-to-deploy/), généralement pendant les heures d'activité histoire d’avoir un bon coup d’adrénaline. Nora Jones et Casey Rosenthal, anciens ingénieurs de Netflix, l'expliquent en détail dans leur livre intitulé "[Chaos Engineering](https://www.oreilly.com/library/view/chaos-engineering/9781491988459/)", que vous trouverez chez votre dealer habituel. L'idée est de découvrir les points faibles des systèmes afin de mettre en place des alertes automatiques pour résoudre les problèmes, évitant ainsi que les équipes d’astreinte soient réveillées au milieu de la nuit en cas de problème. Depuis, le Chaos Monkey a évolué et a donné naissance à diverses mises en œuvre regroupées maintenant sous le terme plus générique de  [Chaos Engineering](https://principlesofchaos.org/).\r
\r
L'armée des 12 singes\r
\r
Et pour aller plus loin, preuve qu’une décennie plus tard  [l’idée est excellente en plus d’être structurante pour votre activité](https://medium.com/seek-blog/creating-chaos-the-importance-of-chaos-engineering-8121443fa2f), tout le monde y va de sa méthodologie ou de ses outils pour faire du Chaos Engineering. On commence avec les cowboys de chez Padok qu’on aime beaucoup, et qui nous proposent un outil au nom évocateur,  [Kube-Monkey](https://www.padok.fr/en/blog/kube-monkey-kubernetes), qui vous permettra de mettre  [un peu de paillette dans vos clusters K8s](https://github.com/asobti/Kube-monkey), et on continue avec les coyotes de chez Lamndatest qui eux nous proposent  [un guide bourré de bests practices](https://www.lambdatest.com/learning-hub/chaos-engineering-tutorial)  si vous avez l’envie de faire le singe. On conclura le sujet sur les meilleurs outils pour  [réaliser du chaos engineering chez vous](https://www.harness.io/blog/chaos-engineering-tools), vous n’aurez que  [l’embarras du choix](https://blog.palark.com/chaos-engineering-in-kubernetes-open-source-tools/)  !  \r
\r
**Nos lecteurs ont du talent**\r
\r
C’est encore Christophe M. qui nous fait découvrir une chouette ressource qui va nous permettre cette fois de  [nous initier à la cryptographie](https://cryptohack.org/)  à travers différents puzzles et challenges. C’est archi bien foutu, très didactique, et ça vous ouvrira des portes que vous pensiez fermées à jamais. Merci Christophe, un pouce bleu pour toi frérot !\r
\r
Au tour de Michael D, DBA de son état, de nous partager un outil qui va simplifier la vie de tout le monde avec  [supavisor, un pooler dédié à Postgres](https://github.com/supabase/supavisor)  qui vous permet de “proxyfier” et mieux manager vos ressources, merci à toi Michael !\r
\r
Et on termine avec Anna T. qui tient absolument à ce qu’on parle de  [paranoia](https://github.com/jetstack/paranoia), un outil qui peut s’avérer bien utile en vous permettant d’inspecter et valider les certificats de vos trop nombreuses images docker. Petite limitation à garder en tête avant d’essayer, ça ne fonctionne pas pour les images qui tournent dans un container, merci pour le partage Anna !\r
\r
![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)\r
\r
**Ils bougent encore**\r
\r
Boris VIan disait  _“Si tout le monde avait été contre l'évolution, on serait encore dans les cavernes à téter des grizzlys domestiques”_, et ça, les outlaws de chez HaProxy l’ont bien compris car ils nous gratifient ce mois-ci de la  [version 2.8 de Haproxy](https://www.haproxy.com/blog/announcing-haproxy-2-8)  qui amène pas mal d’évolutions (_Performance enhancements include HTTP compression for requests, a simple way to combine listener shards and thread groups, and built-in OCSP stapling_) mais surtout de l’alerting par email via du LUA ou un nouveau framework d’évènements en LUA également. Bref, attendez-vous à commit du LUA.\r
\r
Il y a aussi Debian qui continue d’évoluer et  [passe en version 12 alias “Bookworm](https://www.debian.org/News/2023/20230610.fr.html)”. On apprend que la plupart des paquets d’applications non libres ont migré de  _non-free à non-free-firmware_, et que “_cette version contient plus de 11 089 nouveaux paquets pour un total_  _de 64 419 paquets, avec un nombre significatif de paquets (6 296) marqués comme obsolètes et supprimés. 43 254 paquets ont été mis à jour dans cette version._”\r
\r
Et impossible de passer sous silence  [la dernière itération de Kali Linux](https://www.bleepingcomputer.com/news/security/kali-linux-20232-released-with-13-new-tools-pre-built-hyperv-image/), la distrib dédiée aux pentesters qui se croient dans Matrix, qui passe en version 2023.2 et amène son lot d’évolutions, notamment la publication d’une image Hyper-V préconfigurée pour le "Enhanced Session Mode", ce qui vous permettra de vous connecter à la VM en utilisant du RDP.  \r
\r
**Clouderies**\r
\r
![](https://storage.mlcdn.com/account_image/325165/i47xEy8IypUX1LWnYQgzcyPBn2rIZoSKGy3GzBgq.png)\r
\r
La pieuvre de Redmond annonce la  [disponibilité de son OS, Azure Linux](https://www.techradar.com/news/microsoft-reveals-azure-linux-is-available-now). On apprend que plusieurs acteurs comme DataDog ou HashiCorp se sont déjà associés à Microsoft en tant que partenaires pour Azure Linux, qui est nous le rappelons une distribution faite from scratch et taillée spécialement pour leur offre AKS et sans BSOD nous promet-on.\r
\r
Le chiffrement est souvent reconnu comme l'un des éléments les plus efficaces d'une stratégie de sécurité dans une organisation, et  [ce post va vous permettre de comprendre en quoi cette stratégie est bénéfique](https://learn.g2.com/cloud-encryption)  et comment la mettre en place dans le cloud de manière générale, le tout saupoudré de best practices, on a bien aimé même si le sujet peut paraître totalement obvious.\r
\r
Il y a  [ce post un peu énervé des punks de chez theNewStack](https://thenewstack.io/cloud-dependencies-need-to-stop-f-ing-us-when-they-go-down/)  qu’on a bien aimé et qui parle de notre dépendance au cloud :  _“With each external cloud service you deploy, you introduce the amount of unreliability that product has into your own product’s reliability (even if it’s incredibly small)”_.  \r
\r
**Le monde merveilleux des ops**\r
\r
On ouvre la rubrique avec les cowboys de Padok (encore eux) qui ont fait un travail de dingue : la création d’un  [magnifique tech radar](https://www.padok.fr/tech-radar)  divisé en 4 cadrans (Résilience, Opérabilité, Sécurité et Empowering) qui nous fait découvrir pas mal de pépites. C’est un joli tour d’horizon sur tout ce que la tech a de meilleur, on vous recommande chaudement d’aller y jeter un coup d’oeil vous allez découvrir plein de choses très sympa !\r
\r
Vous n’aimez pas rédiger de la documentation et vous utilisez Terraform ([qui vient de passer en version 1.5](https://github.com/hashicorp/terraform/releases)) ? Ce post de Umesh Kumhar va vous prendre par la main pour vous montrer  [comment automatiser la documentation de vos projets](https://medium.com/google-cloud/automate-terraform-documentation-like-a-pro-ed3e19998808)  de manière automatique  [grâce à Terraform-doc](https://terraform-docs.io/).\r
\r
On continue avec un post qu’on a vraiment apprécié,  [The human scalability of DevOps](https://medium.com/@mattklein123/the-human-scalability-of-devops-e36c37d3db6a), qui explore l'importance de l'aspect humain dans les pratiques DevOps. L'auteur, Matt Klein, souligne que l'échelle d'une organisation ne peut être atteinte uniquement par l'automatisation et la technologie, mais nécessite également une attention de tous les instants portée aux aspects humains comme la communication, la collaboration et les pintes de bières à partager entre collègues bien entendu. Passionnant à lire, ça fait du bien de prendre un peu de hauteur des fois.\r
\r
On vous partage ce  [post très complet sur Github Actions](https://www.infoworld.com/article/3698188/what-is-github-actions-automated-cicd-for-github.html), la CI/CD de Github qui a le mérite d’être  [archi simple à prendre en main](https://docs.github.com/fr/actions). L’article nous explique comment Github Actions fonctionne, avec quelques exemples et quelques best practices de sécurité. Parfait pour un premier survol du sujet.\r
\r
Une belle étude de cas sur l'utilisation du modèle de langage ChatGPT à des fins malveillantes : des chercheurs ont utilisé ChatGPT pour  [générer des variants de logiciels malveillants](https://www.csoonline.com/article/3698516/chatgpt-creates-mutating-malware-that-evades-detection-by-edr.html)  capables d'éviter la détection par de l’EDR et capables de se modifier dynamiquement, rendant leur détection et leur éradication plus difficiles, un peu comme les mauvais films français en quelque sorte.\r
\r
Et on termine par un retex super sympa qui nous apprend  [comment une équipe d’ops a résolu un problème récurrent de health check](https://medium.com/pipedrive-engineering/solving-the-mystery-of-pods-health-checks-failures-in-kubernetes-55b375493d03)  sur des pods, c’est passionnant à lire, on apprend pas mal de trucs en chemin, et la fin vous fera certainement sourire.  \r
\r
**J'aime lire**\r
\r
Chaos Engineering, un livre de Casey Rosenthal, Lorin Hochstein, Aaron Blohowiak, Nora Jones et Ali Basiri\r
\r
On vous en parlait au début de cette newsletter, le livre Chaos Engineering est une perle qui met en avant la pratique délibérée d'introduire des perturbations contrôlées dans un système informatique afin d'identifier et de résoudre les faiblesses potentielles.\r
\r
Les auteurs expliquent les concepts fondamentaux du chaos engineering et fournissent des conseils pratiques pour la mise en place de cette approche, tout en abordent les différentes méthodes et outils utilisés pour créer des perturbations et générer des scénarios de défaillance, comme le "game days" et les "experiments".\r
\r
On y parle aussi de l'importance de la sécurité, de la résilience et de la fiabilité des systèmes, bref, c'est un sacré tour d'horizon. On vous encourage fortement à le parcourir, même si vous n'envisagez pas de mettre un tel système en place chez vous.\r
\r
![](https://storage.mlcdn.com/account_image/325165/rvenYEkPDSOIt0Xv4AhoNwm06y2lmHVAHucYRoXe.png)`,v=`---\r
layout: post\r
title: Newsletter du 03 Juillet 2023\r
subtitle: Richard Stallman dément formellement avoir incendié les locaux de RedHat		\r
thumbnail-img: /assets/img/Charlie regarde au loin.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, DNS, cybersec]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_Il semble de plus en plus compliqué de trouver un modèle équilibré entre open-source et offre commerciale. Et on ne va pas se mentir, les principes de l’open-source sont de plus en plus mis à mal, dernier exemple en date avec RedHat qui après avoir insulté ses utilisateurs et retiré CentOs il y a deux ans a jugé utile de limiter l’accès au code source de RHEL. Quand on sait que les plus gros contributeurs à l’open source sont des GAFAM, quelque chose me dit que nous avons choisi une voie peu compatible avec les principes de liberté de redistribution et d’utilisation que nous chérissons tous._\r
\r
_Cyril_  \r
\r
\r
## Nos lecteurs ont du talent\r
\r
Aujourd’hui c’est Guillaume R., devops engineer dans une administration française, qui a pris sa plus belle plume pour nous partager un lien qui fait du bien puisqu’il s’agit d’un  [guide de durcissement de vos noyaux Linux](https://madaidans-insecurities.github.io/guides/linux-hardening.html)  et c’est passionnant car didactique avec beaucoup de références et facilement mis en pratique où que vous bossiez. Merci Guillaume, un pouce bleu pour toi frérot !\r
\r
Il y a aussi Omar Sy (qui nous précise que c'est un homonyme) qui nous partage un joli tuto qui va parler à tout le monde puisqu’il s’agit cette fois de bien  [gérer vos confs Terraform à l’aide de Terragrunt](https://medium.com/otto-tech/infrastructure-as-code-iac-keeping-terraform-configuration-dry-with-terragrunt-bdb33bdac907), simple et basique, merci pour ce partage !\r
\r
_Si vous aussi vous souhaitez nous partager un lien qui vous semble intéressant, n’hésitez pas à nous envoyer un email à  [contact@rudeops.com](mailto:contact@rudeops.com), et en plus vous serez peut-être tiré au sort pour remporter une Tesla ou un voyage dans l’espace (oui nous avons des moyens démesurés)._  \r
\r
**Cybersec**\r
\r
On a appris plein de choses sympa à travers ce post des intellos de l’Université de Carnegie Mellon sur  [les 12 méthodes les plus utilisées pour modéliser les menaces cyber](https://insights.sei.cmu.edu/blog/threat-modeling-12-available-methods/). C’est vraiment archi complet et on est tombé sur plein de méthodes qu’on ne connaissait pas, avec en vrac OCTAVE ([Operationally Critical Threat, Asset, and Vulnerability Evaluation](https://resources.sei.cmu.edu/library/Asset-view.cfm?assetid=51546)) qui se base sur la gestion des risques,  [les security cards](http://securitycards.cs.washington.edu/index.html), un framework de modélisation des menaces qui utilise des cartes pour représenter les menaces potentielles et les contre-mesures (oui comme le jeu de cartes Magic) ou encore  [Trike](http://www.octotrike.org/) qui se base sur une approche structurée et qui intègre des aspects techniques, opérationnels et stratégiques pour évaluer les menaces.\r
\r
Le monde se divise en deux catégories de personne : ceux qui utilisent Zap propulsé par l’Owasp, et les autres qui utilisent Burp Suite, mais  [qui sommes-nous pour les juger](https://www.apisec.ai/blog/burp-suite-vs-zap)  ? Bon, après Burp c’est pas si mal que ça si on ne regarde pas les prix prohibitifs, et l’outil dispose d’une communauté assez active. Et en fouillant bien on trouve plein de trucs très sympa, comme cette  [extension qui utilise OpenAI](https://github.com/hisxo/ReconAIzer)  pour améliorer le process de reconnaissance de vos bug bounty hunters, super classe ! On est aussi tombé sur cette  [présentation de Nicolas Grégoire](https://www.agarri.fr/docs/nsec23-burp_tips_n_tricks.pdf)  qui partage quelques tips bien sympa sur l’optimisation de la performance, de l’automatisation et l’utilisation d’extensions comme  [hackvertor](https://portswigger.net/research/bypassing-wafs-and-cracking-xor-with-hackvertor) et  [piper](https://github.com/PortSwigger/piper).\r
\r
![](https://storage.mlcdn.com/account_image/325165/8bZ5Iq4Yu86h0OhkYs6OG3Jb8aZW1XHjIasEniyD.png)\r
\r
Comme nous sommes entre gens de bonne compagnie, on ne peut s’empêcher de vous partager ce repo sobrement intitulé  [Awesome Password Cracking](https://github.com/n0kovo/awesome-password-cracking)  qui condense une liste plutôt sexy de plein de ressources autour du hacking de mots de passe, on y trouve aussi bien des best practices, des outils (dont le génial  [maskcat](https://github.com/JakeWnuk/maskcat)) que de la méthodo autour des mots de passe.\r
\r
C’est aux cowboys de Datadog qu’on doit ce  [quatrième article sur la sécurisation des containers](https://securitylabs.datadoghq.com/articles/container-security-fundamentals-part-4/), et cette fois-ci c’est pour approfondir notre compréhension des  [cgroups](https://man7.org/linux/man-pages/man7/cgroups.7.html) et étudier leur rôle dans l'attribution des ressources aux processus. L’article explore divers aspects de sécurité liés aux cgroups, comme l'utilisation de ces derniers pour atténuer les risques d'attaques par déni de service, ainsi que pour gérer l'accès des conteneurs à des périphériques spécifiques sur un hôte.\r
\r
Et en parlant de Datadog, c’est aussi à eux qu’on doit, Mkat ([Managed Kubernetes Auditing Toolkit](https://github.com/DataDog/managed-kubernetes-auditing-toolkit)), une boîte à outils d'audit “tout-en-un” permettant d'identifier les problèmes de sécurité courants au sein de clusters Kubernetes. Pour le moment, il se concentre principalement sur l’EKS de AWS, mais sera étendu à d'autres environnements prochainement.  \r
\r
**Le monde merveilleux des Ops**\r
\r
C’est au tour d’InfoWorld de s’interroger :  [“Is it time for development and operations to be separated once again ?”](https://www.infoworld.com/article/3669477/devs-don-t-want-to-do-ops.html). Au-delà du troll évident dans lequel il convient de ne pas tomber, certaines réflexions font écho aux heures les plus sombres de l’histoire quand le DevOps n'existait pas, et ça fait du bien de mesurer tout le chemin parcouru, même si nous savons tous pertinemment que ces boulets de devs restent la grosse faiblesse du DevOps.\r
\r
Et en parlant du paradigme DevOps, on vous invite à lire ce post -un peu vnr comme disent les jeunes- intitulé  [“Devops is bullshit”](https://blog.massdriver.cloud/posts/devops-is-bullshit/)  et qui propose d’enterrer DevOps et de le remplacer par heu, plus ou moins la même chose. Bon après c’est super rigolo à lire avec une belle couche de cynisme qui nous a beaucoup plu et quelques arguments qui risquent de heurter la sensibilité des plus jeunes.\r
\r
D’après les punks de chez Sysdig, on apprend avec stupeur dans  [leur rapport annuel que des millions de ressources sur Kubernetes sont perdues car jamais utilisées](https://sysdig.com/blog/millions-wasted-kubernetes/). C’est forcément un peu orienté, mais ça met en évidence qu’il reste un sacré chemin à parcourir avant de maîtriser pleinement les possibilités de K8s et que surtout, il existe autre chose que cette infâme machine à gaz pour gérer vos deux images Docker.  \r
\r
![](https://storage.mlcdn.com/account_image/325165/45X1nXD48LisNAJUeJzySi6dZoBOxsame3dDvNBE.png)\r
\r
On le sait tous, en cas d’incident sur la prod,  [c’est toujours la faute du DNS](https://www.pentestpartners.com/security-blog/its-always-dns-heres-why/), et ça, les coyotes de chez Adevinta l’ont bien compris. On vous encourage d’ailleurs à lire  [leur RETEX sur un incident lié au DNS](https://medium.com/adevinta-tech-blog/its-not-always-dns-unless-it-is-16858df17d3f)  qui détaille avec précision chaque étape pour diagnostiquer le problème et le régler, on les remercie chaudement pour ce partage.\r
\r
Et pour régler un problème en production, rien de mieux que d’avoir un super système de monitoring, sauf que notre copain  [Mathew Duggan vient tout remettre en question à travers un post sur son blog qui conclut rageusement](https://matduggan.com/were-all-doing-metrics-wrong/)  :  _“My experience has been monitoring is an unloved internal service of the worst kind. It requires a lot of work, costs a lot of money and never makes the company any money…”_. A lire pour se faire une idée et remettre un peu de profondeur dans nos actions.\r
\r
On a tous dans nos boîtes respectives ces mecs un peu bizarres qui s’occupent du réseau et qui nous font un peu peur tellement on ne capte rien à ce qu’ils essaient de nous dire. Pour rétablir le dialogue, l’ami Ivan Velichko nous a pondu  [un chouette guide qui nous explique super clairement comment est constitué un réseau](https://iximiuz.com/en/posts/computer-networking-101/), en résumant parfaitement les aspects liés aux layers 2 et 3, et même au vxlan ma bonne dame !  \r
\r
Aujourd’hui on a décidé de vous présenter  [Robusta KRR](https://github.com/robusta-dev/krr), car en plus d’avoir le nom rigolo d’une éventuelle machine à café sponsorisée par George Clooney, Robusta KRR vous permet d'optimiser l'allocation des ressources dans vos clusters K8s, dans un but de réduction de coûts et de meilleures performances. What else ?\r
\r
Vous êtes un vrai bonhomme et utilisez VSCode pour terraformer ? Essayez donc  [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph)  qui vous permettra de générer un graph Terraform en live pendant que vous codez avec vos petits doigts boudinés. Bluffant et archi utile.\r
\r
**J'aime lire**\r
\r
![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)\r
\r
##### Software Architecture: The Hard Parts\r
\r
Livre écrit à plusieurs mains  [qui aborde les aspects complexes de l'architecture logicielle](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/)  et qui nous offre des conseils pratiques pour résoudre les problèmes courants auxquels nous sommes confrontés tous les jours lorsqu'il s’agit d’étudier la mise en place d’une nouvelle architecture. On fera un grand tour d’horizon sur la modularité, la réactivité, la sécurité, l'évolutivité, la résilience et bien d'autres choses qui concernent la mise en place de votre architecture bien aimée.\r
\r
C’est super bien écrit avec forcément plein de cas d’usage qu’on a tous eu un jour, et ça parle bien entendu micro services, des architectures dans le cloud et des solutions et contraintes portées par l’intégration continue.`,g=`---\r
layout: post\r
title: Newsletter du 17 Juillet 2023\r
subtitle: 37°2 le matin		\r
thumbnail-img: /assets/img/tranquille.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, kubernetes, cybersec]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_"Être en vacances, c’est n’avoir rien à faire et avoir toute la journée pour le faire" nous disait feu Robert Orben. Et on est bien d’accord avec lui, il est temps de couper nos terminaux, faire une pause bien méritée et se recentrer sur ce qui compte vraiment. C’est aussi l’occasion de bouquiner tranquillement au bord de la piscine entre deux apéros et de découvrir quelques livres sympas qui vous permettront de briller à la rentrée, et pour vous, lecteurs dont le nombre grossit de manière vertigineuse chaque jour, on vous a concocté un numéro spécial lectures d’été qui reprend la plupart des bouquins conseillés ces derniers mois. Bonnes vacances à ceux qui ont la chance de partir, bon courage à ceux qui restent, on se retrouve à la rentrée pour de nouvelles aventures._\r
\r
Cyril  \r
\r
\r
![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)\r
\r
## Nos lecteurs ont du talent\r
\r
C’est au tour de Guillaume M, Responsable technique transverse - Cloud DevOps dans la Loire, de nous partager quelques réflexions bien cool au sujet de  [NixOS](https://nixos.org/). Pour ceux qui ne connaissaient pas -comme nous- NixOs est un système d'exploitation libre et open-source basé sur Linux. La conf du système dans NixOS est gérée de manière déclarative : au lieu de modifier des fichiers de conf individuels dispersés dans tout le système, NixOS utilise un seul fichier de configuration central qui décrit l'ensemble de la configuration du système, y compris les paquets logiciels à installer, les services à activer et les paramètres spécifiques à chaque machine. En potassant un peu le sujet on se rend compte  [des possibilités assez guedin](https://linuxfr.org/users/killruana/journaux/nixos-ou-comment-j-ai-rendu-mes-machines-interchangeables-et-ennuyeuses)  comme on dit à Montargis, pour des envs de dev ou un pool de prod immuable et facilement versionable. Merci pour la découverte frérot, un pouce bleu pour toi !\r
\r
Et c’est aussi Stéphane H, Devops Engineer dans une scale-up bien connue, qui nous partage une belle alternative à votre kubectl logs avec  [Ktail](https://github.com/atombender/ktail) qui fait la même chose mais avec quelques features supplémentaires qui nous manquent cruellement jusque là (ça va de la détection de pods sur votre tail à l’ajout de couleurs et de highlights). Merci pour cette belle découverte qui va enchanter petits et grands !  \r
\r
J'aime lire spécial congés\r
\r
![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)\r
\r
##### Cloud Native DevOps with Kubernetes\r
\r
Kubernetes est une usine à gaz, c’est sacrément dur de s’y mettre, et même si la courbe de progression est gratifiante, c’est un peu comme manger du verre pilé en riant.\r
\r
Heureusement, John Arunde[l](https://www.amazon.fr/John-Arundel/e/B00BZWK2JQ/ref=aufs_dp_fta_dsk)  et son compère Justin Domingus  [ont sorti cette bible](https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/)  qui vous donne les clefs, de manière très pragmatique et à portée de tout le monde, afin de vous familiariser et prendre en main vos premiers clusters, quel que soit votre environnement (cloud based, on premise…).\r
\r
Ca se lit rapidement, c’est bourré d'exemples et de réflexions pertinentes, et vous n’aurez plus aucune excuse pour conserver vos clusters swarm ou manger du verre pilé.\r
\r
The Devops Handbook\r
\r
Si vous n'avez ni le temps ni l'envie de vous farcir la pléthore de livres qui essaient d’expliquer tant bien que mal ce qu’est le devops et à quoi ça sert, alors n'en lisez qu'un : The Devops Handbook.  [On vous conseille ce classique](https://itrevolution.com/product/the-devops-handbook-second-edition/)  qui résume parfaitement ce qu’est le paradigme devops et comment mettre en place devops dans votre organisation. The Devops Handbook, c’est écrit à plusieurs mains par des gens très bien comme Patrick Debois et Gene Kim pour les plus connus, et c’est 100% sans bullshit.\r
\r
![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)\r
\r
##### The manager's path\r
\r
Ce qui devait arriver arriva, vous avez été promu (ou puni) manager d’une équipe technique, et vous ne savez pas trop comment gérer Kevin le dev full stack qui code divinement bien mais se comporte comme un vrai con ? Pas de panique, le livre “[The Manager’s Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)” de l’excellente Camille Fournier vous donne plein de clefs pour réussir votre nouvelle mission. C’est sans doute le seul livre sur le sujet qui est à la portée de tout le monde et qui s’appuie sur des cas concrets que vous rencontrez tous les jours dans votre mission de manager (comment bien staffer mon équipe, comment évaluer sa capacité à faire, etc). Encore une fois 0% de bullshit dedans. Si vous ne pouvez pas l’acheter, volez-le !\r
\r
![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)\r
\r
##### The making of a manager - What to Do When Everyone Looks to You\r
\r
Parce que les managers sont nos amis aussi, on vous conseille chaudement le bouquin écrit par [Julie Zhuo](https://www.juliezhuo.com/book/manager.html) qui raconte l'histoire de sa propre expérience en tant que jeune manager dans une entreprise de la Silicon Valley. Le livre est rempli de conseils pratiques pour les nouveaux managers, basés sur les erreurs et les succès de Julie tout au long de sa carrière, et fourmille d'anecdotes et de cas pratiques.\r
\r
Le livre se divise en trois parties : la première partie se concentre sur les défis initiaux rencontrés par les nouveaux managers, la deuxième partie explique comment construire une équipe performante, et la troisième partie aborde la façon de diriger efficacement une organisation.\r
\r
Alors attention, ça s’adresse à des managers techs dans un contexte de startup, donc pas forcément applicable dans des boîtes style COGIP.\r
\r
The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win\r
\r
Livre passionnant [co-écrit par Gene Kim](https://itrevolution.com/product/the-phoenix-project/)  et plein de gens très biens, qui se lit comme un roman, on y suit Bill, un sympathique IT Manager qui doit sauver une entreprise en difficulté. Avec l'aide de ses collègues, Bill va mettre en place des changements pour améliorer les process de l'entreprise en se concentrant sur la collaboration, l'automatisation et la communication, bref, ils vont utiliser DevOps, et le livre va mettre en évidence l'importance de la collaboration entre les équipes de développement et d'exploitation. C’est un must-read absolu, une référence dans le milieu, et dans lequel sont introduits les concepts des three ways.\r
\r
![](https://storage.mlcdn.com/account_image/325165/zpSj2EIqMq7ATnfxVwRWGTDQxOEFS3WLCuo1vTtW.png)\r
\r
##### The art of capacity planning\r
\r
On a décidé de vous parler  [d’un vieux bouquin](https://www.oreilly.com/library/view/the-art-of/9780596518578/), qui a dû être édité un peu avant 2009 ou pas loin en tout cas, et si on a décidé de vous en parler, ça n’est pas par nostalgie non, car notre coeur est dur comme la pierre et nous n’avons plus aucune illusion sur notre métier, mais plus pour les qualités innées de ce livre.\r
\r
Ecrit par John Allspaw, ancien boss tech de Flickr (oui ça date) et de Etsy, pas mal de réflexions sont encore d’actualité et nous permettent aussi de mesurer le chemin accompli durant cette dernière décennie. Et c’est passionnant de remettre le nez dedans à notre époque ! L'ouvrage aborde plusieurs concepts clés liés au capacity planning. Il explique en détail ce que c’est, comment le mesurer et comment évaluer la charge qu'un système peut encaisser dans une période donnée. Allspaw met en évidence l'importance de comprendre les limites d'un système et les conséquences de les dépasser. A une époque où les offres de AWS étaient considérées comme avant-gardistes, Allspaw aborde également des sujets tels que la gestion des pics de charge, la mise à l'échelle des systèmes, l'optimisation des performances et la résolution des goulots d'étranglement. Il explore différentes approches pour équilibrer la demande et la capacité, en tenant compte des contraintes et des coûts associés. Un classique qu’on vous dit.`,h=`---\r
layout: post\r
title: Newsletter du 01 Septembre 2023\r
subtitle: Vol au dessus d'un nid de devops	\r
thumbnail-img: /assets/img/Charlie-Nuages.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, terraform, cybersec]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_La vie c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre nous disait Einstein. C’est un peu pareil pour notre newsletter, on avance malgré notre manque flagrant de professionnalisme (mais ça nous va) et on est surtout tellement content de voir de plus en plus de monde y adhérer et nous partager pas mal de feedback intéressants. Et le partage comme tout le monde le sait, c’est un des piliers fondamentaux du DevOps._\r
\r
_Bonne lecture et bonne rentrée guys !_\r
\r
_Cyril_  \r
  \r
\r
![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)\r
\r
## Nos lecteurs ont du talent\r
\r
Aujourd’hui c’est le mystérieux “JMB” qui nous partage un tuto assez cool sobrement intitulé “[Managing Terraform Modules in a Monorepo](https://dragondrop.cloud/2023/07/17/managing-terraform-modules-in-a-monorepo/)” dont le titre est suffisamment évocateur pour m’éviter d’aller plus loin et abîmer mes petits doigts boudinés sur mon clavier mécanique de rockstar. Merci JMB pour le partage !\r
\r
Il y a aussi Vanessa M, cloud engineer dans une startup parisienne, qui nous partage un article passionnant sur les possibilités de PostgreSQL d’héberger et requêter des  [graphs data structure](https://www.dylanpaulus.com/posts/postgres-is-a-graph-database/), tout ça nativement. Merci pour le partage Vanessa !\r
\r
Et on termine la tournée avec Xavier D, devops engineer dans une belle boîte française, qui nous partage un article de blog qu’on a lu avec attention :  [Why you should move back to datacenters](https://rakkhi.substack.com/p/why-you-should-move-back-to-datacenters). C’est une bonne réflexion pour pas mal de boîtes qui veulent aller vers le cloud mais n’en ont pas forcément les moyens ou les compétences. Merci Xavier, coeur avec les doigts pour toi !  \r
\r
Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et une Tesla à gagner chaque semaine après tirage au sort).  \r
\r
**Legacy si impératrice**\r
\r
Allez, on ne va pas se mentir, on a tous dans nos boulots  [une dette technique](https://geekflare.com/technical-debt/)  à gérer, et si on en n’a pas, c’est qu’on est en train de la créer, même s' il y a  [toujours des moyens de la mitiger](https://dev.to/alexomeyer/the-engineers-guide-to-creating-a-technical-debt-proposal-58o5). Bref, ne cherchez pas,  [il est presque impossible](https://engineering.zalando.com/posts/2021/11/technical-debt.html)  de faire l’impasse sur la création d’un legacy, dont vous parlerez à voix basse histoire de ne pas être celui qui va devoir se coltiner le sale boulot de transformer un gros machin bien monolithique  [en une palanquée de microservices à la mode](https://www.guava.blue/2021/09/28/switching-from-monolithic-to-microservices-is-it-worth-the-trouble/). Après, bien sûr, tout le monde a sa propre définition du mot legacy, et nous on trouve que c’est la firme de Mountain View qui définit le mieux le concept de dette technique et va plus loin en proposant  [des moyens de la mesurer et la manager](https://newsletter.abinoda.com/p/measuring-and-managing-tech-debt). Et si le sujet vous branche, on vous conseille fortement ces articles des punks de chez CircleCI ([Technical debt: how to measure and manage it with DevOps](https://circleci.com/blog/manage-and-measure-technical-debt/)) et des hippies de chez Brainboard ([How to avoid Tech Debt?](https://blog.brainboard.co/how-to-avoid-tech-debt-1188633f1b21)) !\r
\r
![](https://storage.mlcdn.com/account_image/325165/yzRDalmEkrHLsviGGJlMeuQ0YHkLXquSCeTMzLSb.png)\r
\r
**Terraform incognita**\r
\r
Je ne sais pas si vous avez suivi le drama de cet été, mais  [HashiCorp a décidé de changer son modèle commercial pour Terraform](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  et ses autres produits. Plus précisément, on parle d’un changement qui implique de passer d'une licence open source MPL 2.0 à un modèle propriétaire BSL (Business Source License) pour leur outil Terraform, outil qui est très largement utilisé pour automatiser les infrastructures.\r
\r
Les raisons profondes de ce changement semblent puiser leurs sources dans de sombres histoires de rentabilité d’après ce qu’en dit Armon Dadgar, le co-fondateur de HashiCorp : “_Our approach has enabled us to partner closely with the cloud providers to enable tight integration for our joint users and customers, as well as hundreds of other technology partners we work closely with. However, there are other vendors who take advantage of pure OSS models, and the community work on OSS projects, for their own commercial goals, without providing material contributions back. We don’t believe this is in the spirit of open source_.”\r
\r
Alors bien sûr, ça a suscité de grosses levées de boucliers et ça a surtout conduit à la  [création du mouvement OpenTF](https://opentf.org/announcement), qui envisage de produire un fork de Terraform tout en essayant de rejoindre la  [Linux Foundation](https://lwn.net/Articles/942770/)  pour maintenir Terraform open source. On leur souhaite bien du courage pour cette belle initiative !  \r
\r
**Le monde merveilleux des Ops**\r
\r
Hey, on connaît tous le SPF (Sender Policy Frameworks) qui nous aide à lutter contre le spam, mais savez-vous réellement comment ça fonctionne ? Cet  [excellent post archi-complet](https://www.netmeister.org/blog/spf.html)  va vous aider à comprendre le fonctionnement et l’implémentation du truc step by step comme on dit à Montargis.\r
\r
Quand ça n’est pas  [la faute du DNS](https://www.cscdbs.com/blog/why-dns-is-the-biggest-single-point-of-failure/), c’est généralement la faute de Jean-Michel qui a encore fait tomber toute la prod. Et si on enlevait  [la notion d’erreur humaine](https://surfingcomplexity.blog/2022/05/30/imagine-theres-no-human-error/)  dans nos métiers ? C’est la question que se pose Lorin Hochstein dans un billet qui mêle neuro-sciences et facteurs d’erreur.\r
\r
Après être partis de chez AWS pour revenir sur du on-prem,  [les coyotes de 37signals nous partagent la façon dont ils utilisent Prometheus pour ingérer, stocker et alerter](https://dev.37signals.com/prometheus-metrics-at-37signals/). Il s'agit du premier article d'une série sur l'observabilité, et on a hâte de lire la suite.\r
\r
Ha et pour rester sur l’observabilité et histoire d’essayer de conserver un semblant de cohérence dans cette newsletter, on vous conseille de lire cet article des cowboys de chez Honeycomb.io sur  [les “DORA metrics”](https://www.honeycomb.io/observability-dora-metrics)  (DevOps Research & Assessment).  \r
  \r
On est tombé sur le blog de Anton Zhiyanov qui n’en peut plus de toutes ces blagues qu’on fait sur SQL et qui en a marre de tous ces langages qui débarquent pour essayer de le remplacer. Super drôle à lire,  [avec de véritables morceaux de mauvaise foi](https://antonz.org/fancy-ql/) dedans mais aussi d’excellentes réflexions sur la place de SQL dans nos métiers. Attention, on sent que le mec est quand même à cran, à lire sans se moquer.\r
\r
On parlait de Hashicorp un peu plus haut et plus spécialement de Terraform, mais là on va vous parler de  [Vault et ses bénéfices](https://blog.cockpitio.com/devops/vault-overview/)  à travers ce très bon post de Mohamed Reda LARBI YOUCEF de chez Cockpit.io. Si vous ne connaissez pas encore Vault, jetez-vous dessus, on parie notre chemise que vous lui trouverez une place de choix dans votre infra.  \r
  \r
La gestion d’une organisation SRE varie d’une boîte à l’autre, cette cette fois-ci on va regarder du côté de  [chez Disney comment ça se passe](https://www.srepath.com/inside-disneys-site-reliability-engineering-practice/)  et on découvre plein de trucs sympas dans lesquels on peut piocher et s’inspirer, comme par exemple la culture des 3 C (Collaboration, Curiosity et Courage) chère à Riri Fifi et Loulou.\r
\r
**Le coin du vigile**\r
\r
Faire de la sécurité, c’est un peu comme marcher dans la vallée de la mort ou écouter un disque de Sardou en entier. Preuve de la complexité de ce métier, c’est au tour de Proofpoint de signaler à travers un article très complet et passionnant à lire  [une forte augmentation de l'utilisation d'EvilProxy](https://www.proofpoint.com/us/blog/email-and-cloud-threats/cloud-account-takeover-campaign-leveraging-evilproxy-targets-top-level)  pour compromettre des comptes cloud de dirigeants d'entreprise, et surtout des comptes Microsoft O365, malgré l'authentification multifacteur. Entre mars et juin 2023, c’est plus de 100 organisations qui ont été ciblées, affectant environ 1,5 million d'employés dans le monde. Sur les centaines de comptes compromis, 39% appartenaient à des directeurs, dont 17% étaient des DFA et 9% des CEO.\r
\r
La technique de phishing, vieille comme le monde, consiste à envoyer un e-mail aux dirigeants, prétendant contenir un document à signer via DocuSign et intégrant un lien malveillant. En cliquant sur le lien, les dirigeants sont redirigés vers une fausse page d'authentification Microsoft 365 après plusieurs redirections. Si la victime s'authentifie, l'attaquant intercepte la connexion réelle à Microsoft 365, récupérant ainsi le mot de passe et le cookie de session. En utilisant ce cookie, l'attaquant peut accéder au compte sans nécessiter d'identifiants ou de second facteur. Il peut ensuite ajouter sa propre méthode d'authentification forte pour créer un accès persistant.  \r
\r
J'aime lire\r
\r
![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)\r
\r
##### Hacke-moi si tu peux - Mémoires d'un cyberpirate repenti\r
\r
On va rester dans le thème de la sécu avec un chouette livre qu’on a lu cet été. Écrit par Florent Curtet, c’est en quelque sorte son autobiographie qui retrace son parcours de jeune hyperactif qui devient black hat avant de se tourner vers le white hat. Alors c’est archi romancé forcément, mais suffisamment bien écrit et documenté pour nous tenir en haleine tout le long. A noter que Florent est maintenant le cofondateur de  [Hackers sans frontières](https://hwb.ngo/).`,b=`---\r
layout: post\r
title: Newsletter du 15 Septembre 2023\r
subtitle: Traque sur Internet	\r
thumbnail-img: /assets/img/lettre.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, kubernetes, cybersec]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_“Ma devise, c'est : il faut se recréer, pour recréer !” nous partageait Jean-Claude Van Damme, ce grand philosophe des années 90 féru d’arts martiaux. Et force est de constater qu’il a entièrement raison le bougre : nos métiers nous incitent à un changement permanent, perpétuel, et nécessitent une capacité d’adaptation élevée pour faire face à un écosystème de plus en plus complexe et mouvant, et ça c’est tout à fait dans le paradigme DevOps ! Alors merci Jean-Claude de nous indiquer la voie à suivre._  \r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)\r
\r
## Nos lecteurs ont du talent\r
\r
Aujourd’hui, c’est Clément D, engineering manager dans une belle boîte de sécu française, qui nous partage un très bon article sur un use case bien précis : générer des logs à des fins d’audit à travers  [Infisical](https://github.com/Infisical/infisical) qu’on ne connaissait pas et qui semble se positionner comme un concurrent open source de Vault.  [Ca se lit ici](https://medium.com/@tony.infisical/guide-to-building-audit-logs-for-application-software-b0083bb58604) et on remercie chaudement Clément pour cette belle découverte !\r
\r
  \r
Et on continue avec Julien A. qui lui répond à l’angoissante question : faut-il utiliser apt ou apt-get pour être un vrai cowboy ?  [Ça se lit en deux minutes ici](https://medium.com/@mobolaji___/difference-between-apt-and-apt-get-in-linux-71108bdd35f2) en insistant bien sur les différences entre les deux approches et ça vous permettra certainement de briller en société. Merci Julien pour le partage, coeur avec les doigts !\r
\r
Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et une Tesla à gagner chaque semaine après tirage au sort).  \r
\r
**Apéricube**\r
\r
On l’a déjà dit, mais orchestrer ses ressources à travers Kubernetes équivaut à manger du verre pilé en riant, mais ça change petit à petit, l’écosystème s’adaptant et la communauté grandissant autour du projet, il devient un poil plus aisé (non) de manager la solution d'orchestration qui d’ailleurs  [vient de sortir en version 1.28](https://medium.com/@seifeddinerajhi/kubernetes-1-28-new-features-for-sidecar-containers-jobs-and-proxies-1c30315243e9), et on vous conseille  [d’écouter ce podcast qui interview Grace Nguyen](https://craigbox.substack.com/p/the-kubernetes-128-release-interview#details), release team lead du projet. Cette 1.28,  [très riche en ajout de nouvelles fonctionnalités](https://blog.wescale.fr/kubernetes-1.28-planternetes-fonctionnalit%C3%A9s-et-am%C3%A9liorations), permet enfin de faire du  [Sidecar Containers](https://kodekloud.com/blog/kubernetes-sidecar-container/), un modèle qui permet d’ajouter des fonctionnalités aux pods comme de la collecte de métriques ou la récupération de secrets. Tout ça pour ça.  \r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
Bref, sinon au cours de notre veille on est tombé sur quelques ressources bien sympa autour de Kubernetes, avec tout d’abord  [Microk8s](https://microk8s.io/), un K8s light conçu pour le déploiement en local (à ne pas confondre avec  [K9](https://k9scli.io/) ou K2000 qui est une vieille voiture qui carbure avec ChatGPT). L’article, nous propose  [un guide étape par étape](https://medium.com/@ufukhalis/an-introduction-story-what-is-microk8s-70ee9a3c9d5)  pour l'installation et le déploiement d'une application exemple et met en avant la simplicité de microk8s, sa facilité d'utilisation et sa compatibilité avec différents matériels et OS. On est aussi tombé sur  [Monokle](https://github.com/kubeshop/monokle), un outil qui aide au processus de création, d'analyse et de déploiement de configurations Kubernetes et qui fournit un GUI pour la rédaction de manifestes YAML, la validation des politiques et la gestion des clusters en direct. On terminera avec l’inévitable  [top 10 des meilleurs outils pour K8s](https://semaphoreci.medium.com/top-10-must-have-tools-for-kubernetes-engineers-71b32fd21b95), où vous trouverez des classiques mais aussi des outils qu’on aime bien, genre  [Kustomize](https://kustomize.io/). A mettre en parallèle avec le  [top ten de l’OWASP dédié à Kubernetes](https://owasp.org/www-project-kubernetes-top-ten/)  qui lui, vise à aider les paranos de la sécu et les SRE à hiérarchiser les risques liés à l'écosystème Kubernetes.  \r
\r
![](https://storage.mlcdn.com/account_image/325165/2kFouYtwxLMTik8cFTftH4odoAQiHLtqxhrcQFJG.png)\r
\r
##### Faites vos propres recherches\r
\r
Kubernetes vient du grec et signifie littéralement “gouvernail” d’après google translate et “capitaine” selon la FAQ officielle de la firme californienne. Les sept rayons du logo de Kubernetes font référence au nom original du projet “[Project Seven of Nine](https://cloud.google.com/blog/products/containers-kubernetes/from-google-to-the-world-the-kubernetes-origin-story?hl=en)”. A la base il y avait neuf rayons symbolisant les neufs cercles de l’enfer mais l’idée a été abandonnée car jugée trop voyante et pas assez vendeuse.\r
\r
**Le monde merveilleux des Ops**\r
\r
Nous on adore les memes, et on a particulièrement apprécié ce  [même dédié à SQL](https://twitter.com/largedatabank/status/1559651463919452161)  posté sur le réseau social de Voldemort, mais ce qu’on a préféré dans tout ça, c’est qu’un mec, Aryan Ebrahimpour, a pris le meme au pied de la lettre et a  [fait une analyse de toutes les couches SQL décrites](https://www.avestura.dev/blog/explaining-the-postgres-meme). Ça va vraiment très loin, et c’est idéal si vous voulez creuser le sujet deeply comme on dit à Montargis.\r
\r
Mais dis-moi Jamy, comment faire pour  [organiser au mieux les équipes pour la gestion des incidents](https://firehydrant.com/blog/exploring-distributed-vs-centralized-incident-command-models/)  ? C’est très simple Fred, lis d’abord cet excellent article qui examine les organisations centralisées et distribuées ainsi que leurs avantages et inconvénients respectifs, tu en tireras pas mal de pistes et de réflexions !\r
\r
Vous êtes à la recherche d’une solution de monitoring pertinente pour votre organisation ? Ça tombe bien, ce post de blog nous fait une  [évaluation des solutions existantes](https://sennasemakula.medium.com/evaluating-monitoring-solutions-prometheus-thanos-mimir-victoria-metrics-6bf9f4f9d602)  avec les pros et les cons, elle est pas belle la vie ?\r
\r
Vous n’avez jamais compris qui était le plus fort entre l’hippopotame et l’éléphant et vous vous posez la même question entre  [devops, devsecops et gitops](https://blog.brainboard.co/devops-devsecops-finops-dataops-mlops-gitops-lifecycle-explained-f197ce4e7126)  ? Ce blog post va vous aider à y voir plus clair et nous dresse un tableau qui récapitule les paradigmes que nous utilisons dans nos métiers sans forcément savoir les nommer. Ce qui me permet de faire une transition claquée au sol comme disent les jeunes : lisez cet article qui dresse un aperçu des  [best practices et des outils DevOps](https://itnext.io/devops-big-picture-on-premises-d07f61d6c34c)  pour les environnements on premise, ça peut aussi vous donner quelques idées.\r
\r
Hey, on a bien aimé ce post des outlaws de chez Github qui nous partage  [10 tips essentiels lorsque vous utilisez Github Projects](https://github.blog/2023-08-28-10-things-you-didnt-know-you-could-do-with-github-projects/), et ça c’est vraiment cool parce que c’est vraiment bien foutu et pratique !\r
\r
Vous êtes un vrai bonhomme comme on dit dans les beaux quartiers et vous voulez affirmer vos skills sur Python. Prenez votre respiration et laissez-vous guider par ce  [super guide](https://github.com/Aviah/python-dig)  qui vous propose pas mal de snippets pour votre apprentissage. C’est bien foutu, et on vous conseille d’y passer quelques minutes par jour si vous êtes déjà un utilisateur avancé. On a aussi testé  [Try](https://github.com/binpash/try), une commande qui vous permet de tester… vos commandes justement. Allez jeter un coup d’oeil c’est facile à utiliser. Ha et dernier machin rigolo, on vous conseille Xeol, un  [scanner de paquets End Of Life](https://github.com/xeol-io/xeol)  (EOL) dans vos containers ou sur vos FS.\r
\r
  \r
\r
**Un peu de sécurité**\r
\r
![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)\r
\r
##### IA pas le feu\r
\r
C’est le 13 juillet dernier que SlashNext a identifié [l'émergence de WormGPT](https://slashnext.com/blog/wormgpt-the-generative-ai-tool-cybercriminals-are-using-to-launch-business-email-compromise-attacks/), un outil IA utilisé par des piratins. En moins de deux semaines, soit le 25 juillet, un autre outil basé sur l'IA nommé  [FraudGPT](https://www.lemondeinformatique.fr/actualites/lire-apres-wormgpt-les-cybercriminels-livrent-fraudgpt-91117.html) a fait son apparition sur Internet, et leur papa semble être le piratin connu sous le pseudo de  [CanadianKingpin12](https://cybernews.com/security/chatgpt-badboy-brothers-dark-web/). Après avoir fait de la pub pour ces malwares et s’être fait dégager entre autres, de Reddit et compagnie, le mec a continué son marketing sur Telegram.  \r
  \r
Au cours d'une  [enquête menée par SlashNext](https://www.binance.com/en/feed/post/895275), notre joyeux piratin a affirmé être en train de développer deux nouveaux bots aux noms ridicules : DarkBART et DarkBERT, ces derniers pouvant être connectés à Internet et intégrés à Google Lens, mais surtout, pouvant être utilisés comme de vrais frameworks facilitant la réalisation d'attaques d'ingénierie sociale, servir de framework de logiciels malveillants et concevoir des campagnes de phishing. Tout un programme…\r
\r
**J'aime Lire**\r
\r
![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)\r
\r
##### The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data\r
\r
Aujourd’hui on va vous parler de  [The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data](https://itrevolution.com/product/the-unicorn-project/), la suite directe du génial "The Phoenix Project" qu’on vous conseille de lire avant si possible. Toujours écrit par notre ami Gene Kim, on y suit cette fois les aventures de Maxine, une dev dans l'équipe du projet Phoenix. Elle trouve un mentor en la personne d'Erick, qui la guide avec les cinq idéaux de la résolution de problèmes en DevOps (focus, flow, lean, etc).\r
\r
Une fois encore, ça se lit tout seul et presque d’une traite et vous retrouverez pas mal de situations auxquelles nous avons tous été confrontés dans nos boulots respectifs.`,f=`---\r
layout: post\r
title: Newsletter du 02 Octobre 2023\r
subtitle: Per Horus et per Ra et per Sol Invictus duceres	\r
thumbnail-img: /assets/img/Barbara Lit.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, terraform, cybersec]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_Signe incontestable de notre succès écrasant en France, et rendant jaloux tous nos copains anglo-saxons, nous lançons ce mois-ci notre premier podcast sur le thème du devops dans un format court (et pas du tout pro on doit l’avouer). Le but du jeu : demander à des mecs de la tech ce que c’est pour eux le devops, simple, basique. Même si c’est bien mainstream, on s’est dit que c’était un chouette canal supplémentaire de partage, mot qui apparaît 37 fois dans ce premier podcast. Bonne lecture et bonne écoute !_  \r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)\r
\r
## Nos lecteurs ont du talent\r
\r
C’est MB (pour Michel Blanc ?) aujourd’hui qui nous partage  [un lien passionnant tiré du blog technique de Slack](https://slack.engineering/traffic-101-packets-mostly-flow/). On y apprend comment une requête traverse toutes les couches réseaux chez Slack avant d’arriver à destination. On y croise tout ce qui fait le sel des grosses infrastructures réseaux, et on y découvre quelques services qu’on ne connaissait pas, dont  [Envoy](https://www.envoyproxy.io/)  développé par les coyotes de chez Lyft ainsi que les notions de Thundering herd problem et les politiques de failover. Un énorme merci pour ce partage MB, qui que tu sois !\r
\r
On a aussi sélectionné le mail de Pascal B, un “sysadmin à l’ancienne” d’après ses dires, qui nous partage un article des copains de chez Thenewstack sur  [les différences entre l’observabilité et le monitoring](https://thenewstack.io/monitoring-vs-observability-whats-the-difference/), bien rédigé comme d’habitude et qui ouvrira de nouveaux horizons à ceux qui ont besoin de dépasser le stade du monitoring en leur filant quelques bases. Merci Pascal pour le partage, emoji coeur et emoji bisoux pour toi !  \r
\r
Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et un dîner en tête à tête avec Bill Gates à gagner chaque semaine). Et si vous aimez vraiment ce qu’on fait avec nos petits doigts boudinés,  [n’hésitez pas à nous payer un café](https://www.buymeacoffee.com/rudeops)  !  \r
\r
![](https://storage.mlcdn.com/account_image/325165/Bgpcb7NSvVCGwSpHQgh1Mx1O6lX5mtftUcKUtHwg.png)\r
\r
**Goooood morning devops !**\r
\r
Pour ce premier podcast on reçoit  [Damien Claisse](https://www.linkedin.com/in/damienclaisse/), SRE chez Criteo, qui nous explique comment il voit le paradigme devops et nous partage quelques réflexions super stylées.\r
\r
[Ecouter le podcast](https://podcast.ausha.co/rudeops)\r
\r
**Ghost in the shell**\r
\r
L’avantage de bosser sur Linux, c’est qu’on peut tout tuner selon ses goûts et ses besoins, du noyau jusqu’au papier peint, un peu comme un jacky fou le dimanche matin sur le parking de Carrefour en quelque sorte. Et pas la peine de baisser les yeux : passer plusieurs heures pour customiser son système, on l'a tous fait et c’est normal. Et généralement, là où on passe le plus de temps après avoir  [compilé son noyau aux petits oignons](https://medium.com/@tushar.jadhav29/linux-kernel-tuning-f888d7f83aab), c’est sur son terminal,  [et plus précisément sur son shell](https://www.fosslinux.com/101555/customizing-bash-tips-tricks-for-a-personalized-shell-environment.htm), le but étant d’obtenir un shell qui colle au maximum à votre activité ou vos habitudes. Alors pour ça on ne va pas tourner autour du pot très longtemps, il y a une super alternative qui poussera votre shell dans ses derniers retranchements en la personne de  [Oh My Zsh](https://ohmyz.sh/)  et ses nombreux  [plugins](https://blog.larsbehrenberg.com/how-to-install-custom-plugins-and-themes-with-oh-my-zsh) (installez  [Zap comme plugin manager](https://itnext.io/supercharge-zsh-with-zap-a9515bd1487)  par exemple), à essayer pour ceux qui ne connaissent pas, vous ne  [pourrez plus vous en passer](https://dev.to/cassidoo/customizing-my-zsh-prompt-3417). Dans un autre style on vous invite à tester  [Oh My Posh](https://ohmyposh.dev/)  qui pousse les potards encore un peu plus loin et fera ressembler votre shell à un sapin de Noël, mais c’est un peu ça qu’on veut non ?\r
\r
**Terraform incognita**\r
\r
Vous vous souvenez que cet été,  [HashiCorp a choisi de passer à la licence BSL](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  pour tous ses produits open source, provoquant une vive réaction de la part de ses utilisateurs et du monde de l’open source. Des éditeurs et startups utilisant Terraform ont menacé de créer un fork si HashiCorp ne faisait pas marche arrière, et c’est le 25 août que  [OpenTF](https://github.com/opentofu/manifesto) a donc créé  [un fork de Terraform récemment baptisé OpenTofu](https://opentofu.org/), avec le soutien de la Linux Foundation et de plus de 140 entreprises. OpenTofu prévoit une version sous licence MPL 2.0 pour assurer la continuité de Terraform et  [la gouvernance du projet sera alignée sur celle de la Linux Foundation](https://www.linuxfoundation.org/press/announcing-opentofu)  ce qui réjouit fortement  [Jim Zemlin](https://www.linkedin.com/in/zemlin/), hippie en chef de la LF :  _“The launch of OpenTofu signifies a collective commitment to fostering truly open collaboration and innovation in the realm of infrastructure as code. OpenTofu's dedication to open source principles underscores our shared vision of providing accessible, reliable tools that empower the tech community”_. On leur souhaite une bonne continuation, et on gage que d’autres initiatives du même genre vont éclore régulièrement dans un écosystème où l’équilibre tacite et délicat entre business et open-source doit être respecté, même si ça n’est  [pas un avis partagé par tout le monde](https://medium.com/@hello_9187/why-we-are-not-supporting-opentf-a46855f52dc4)  et que certains arguments ne sont pas délirants. Une histoire d’équilibre qu’on vous dit…  \r
\r
**Le monde merveilleux des Ops**\r
\r
On s’est déjà tous posé ce genre de questions : dois-je pointer ou tirer ? Dois-je reloader ou restarter mon HaProxy ? Bref aucune idée pour la première, mais les coyotes de chez HaProxy nous ont rédigé  [un chouette guide avec une matrice d’actions](https://www.haproxy.com/blog/should-you-reload-or-restart-haproxy)  qui nous permet de savoir quoi faire et quand le faire. Ils y expliquent aussi ce qu’il se passe en backend lors d’un restart ou d’un reload, et c’est comme d’habitude passionnant à lire et méga instructif.\r
\r
Vivons heureux vivons caché est une belle maxime qui a inspiré pas mal de technos : Memcache, Varnish, Redis… Et c’est de ce dernier dont on va parler à travers un long billet posté sur le  [blog tech des cowboys de chez SemaphoreCI](https://semaphoreci.com/blog/redis-architectures). C’est une superbe introduction à Redis et le billet y aborde différents sujets (type de déploiement, type de configuration, conseils de mise en place suivant le contexte, etc). C’est vraiment très riche et on y apprend plein de trucs, on vous conseille vraiment de le lire.\r
\r
Et en parlant de technos de punks, on est tombé sur cet article rigolo qui fait  [une analogie entre quelques briques techniques et la vie de tous les jours](https://dev.to/aws-builders/load-balancer-reverse-proxy-and-api-gateway-analogies-to-real-life-scenarios-54el). Facile à lire, ça fera sourire les vieux routards et vous permettra sans doute d’expliquer à votre vieil oncle un peu bizarre le rôle d’un load balancer.\r
\r
Lors de notre veille, on est aussi tombé sur  [Sealos](https://github.com/labring/sealos), une distribution cloud qui embarque un kernel “K8s based”. On n’a pas eu le temps de tester mais ça a l’air prometteur pour qui veut lancer des applis rapidement. On a par contre testé  [TravelGrunt](https://github.com/ivanilves/travelgrunt) qui nous permet une navigation plus rapide à travers nos repos grâce à un système d’alias tout bête. On vous conseille de jeter un coup d’oeil c’est du temps d’économisé.\r
\r
On aime beaucoup  [Github Actions](https://docs.github.com/fr/actions/quickstart)  qui apporte des bénéfices rapides et pas chers et permet de mettre en place  [des solutions de déploiement assez sexy](https://kinsta.com/fr/blog/github-actions-secrets/), mais là on va vous partager  [une critique approfondie de GitHub Actions](https://blog.yossarian.net/2023/09/22/GitHub-Actions-could-be-so-much-better), qui aborde quelques défis de sécurité intéressants, qui va insister sur les cycles de debug qui peuvent être aussi longs qu’une soirée du nouvel an, et plein d'autres aspects, tout en proposant des suggestions d'amélioration bien smart ma gueule comme on dit à Montargis.  \r
  \r
Priyansh Khodiyar a une passion dans la vie, c’est le Python, et il nous a rédigé  [un beau billet sur la place du Python dans le domaine du DevOps](https://blog.devgenius.io/python-for-devops-a-definitive-guide-f4785a60007e). On fera un tour d’horizon sur les modules les plus populaires (on y retrouvera bien sûr les indispensables Requests, Json et Sys etc) et vers la fin quelques scripts pratiques dont vous pouvez vous inspirer dans votre travail de tous les jours. Et en parlant de scripts pratiques en Python vous pouvez aussi piocher  [quelques trucs sympas ICI](https://medium.com/@hannanmentor/20-python-scripts-with-code-to-automate-your-work-68662a8dcbc1).\r
\r
**Un peu de sécu**\r
\r
![](https://storage.mlcdn.com/account_image/325165/KeJevd4fqZYRG8M4ZHssWPKFAp5PVHsc4ofuW0ld.png)\r
\r
##### Pas très Coubertin\r
\r
On avait un peu zappé, mais les gendarmes des internets, l’ANSSI, ont publié un chouette  [mémo sur l’évaluation de la menace informatique liée aux grands évènements sportifs](https://www.cert.ssi.gouv.fr/cti/CERTFR-2023-CTI-005/), avec un focus particulier vous vous en doutez sur la coupe du monde de rugby et les Jeux Olympiques de 2024. Comme d’habitude on a droit à une belle synthèse prenant en compte les contextes de chaque événement, en faisant un focus particulier sur la surface d’exposition étendue et les différents types d’attaques envisagées (ça va du ransomware au chantage par DDoS, en passant par l’espionnage). A lire comme d’habitude et à forwarder à son RSSI pour se faire bien voir.\r
\r
Un article sympa à lire chez MalwareByte qui fait  [une synthèse des actualités sur les rançongiciels et des groupes de piratins](https://www.malwarebytes.com/blog/threat-intelligence/2023/09/ransomware-review-september-2023)  qui se la donnent à fond à travers un joli classement. On y apprend par exemple que  [le groupe Lockbit](https://siliconangle.com/2023/09/26/lockbit-3-0-tops-hacking-list-august-amid-decrease-ransomware-attacks/)  est revenu à la première place du classement après une baisse constante de son activité durant les quatres derniers mois les pauvres choupinous (émoji triste).\r
\r
Et pour finir, un papier tiré d’un  [exercice CTF vachement instructif](https://alexandertasse.medium.com/blue-team-labs-employee-of-the-year-6c922203ea8d). Le but du jeu est simple : “_John received the 'Best Employee of the Year' award for his hard work at FakeCompany Ltd. Unfortunately, today John deleted some important files (typical John!). It’s your job to recover the deleted files and capture all the flags contained within!_”. Toujours aussi passionnant, aussi bien sur les méthodes employées pour retrouver les documents que les outils (on y croisera du binwalk, du foremost et plein d’autres que vous aurez hâte d’essayer).`,q=`---\r
layout: post\r
title: Newsletter du 16 Octobre 2023\r
subtitle: Chippeur arrête de chiper !	\r
thumbnail-img: /assets/img/Alain mesure.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, dora, devex]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_Les principes de partage et de collaboration tirés du paradigme DevOps peuvent-ils être appliqués dans la vie de tous les jours afin d'améliorer nos jeunes démocraties et notre société civile ? Vous avez trois heures, rendez votre devoir sur une copie double._\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)\r
\r
## Nos lecteurs ont du talent\r
\r
Merci à Anne, Devops engineer dans une startup française, qui nous signale que le Vault de Hashicorp va bénéficier d’une  [version alpha dite “Radar”](https://www.hashicorp.com/blog/new-hcp-vault-secrets-radar-and-other-features-fight-secrets-sprawl), et se présentant comme un service cloud visant à automatiser l'examen, la détection et la rectification des secrets qui sont involontairement dissimulés au sein de lignes de code et d’environnements divers. En lançant cette version alpha de HCP Vault Radar, Hashicorp a exploité les avancées issues de  [l'acquisition de la start-up BluBracket](https://www.hashicorp.com/blog/announcing-acquisition-of-blubracket)  en juin 2023.\r
\r
On a aussi JMB qui nous écrit à nouveau pour nous partager un post super intéressant qui nous explique  [ce qu’il se passe dans le répertoire .git](https://blog.meain.io/2023/what-is-in-dot-git/). Passionnant à lire on a appris plein de trucs qu’on ne connaissait pas, un énorme coeur avec les doigts pour toi JMB !  \r
\r
Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à  [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous voulez participer n'hésitez pas à nous envoyer un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  !\r
\r
**Dora, Space et DevEx sont dans un bâteau...**\r
\r
On l’a déjà dit plusieurs fois, mais comme on aime bien se répéter et faire de la pige facile, on le redit : on peut vraiment tout mesurer dans nos métiers grâce à toute une palanquée d’outils divers et variés, et on peut aller vraiment très loin suivant les moyens qu’on y met. Mais quand il s’agit de mesurer les performances d’une organisation devops, c'est un poil plus compliqué. Comme le sujet nous branche, on a creusé un peu le sujet et on vous partage ce qui existe aujourd’hui.\r
\r
On commence avec la méthodologie  [DORA](https://docs.gitlab.com/ee/user/analytics/dora_metrics.html) (DevOps Research and Assessment), initialement rédigée par des gens très bien  [dont Gene Kim qu’on ne présente plus](https://datascientest.com/gene-kim-devops-tout-savoir), qui comprend  [un ensemble d'indicateurs de performance](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance?hl=en)  connus sous le nom des quatres cavaliers de l’apocalypse ou quelque chose du même genre bref : Deployment Frequency, Lead Time for Changes, Change Failure Rate et Time to Restore Service.  [Une cinquième mesure a été ajoutée](https://cloud.google.com/blog/products/devops-sre/announcing-dora-2021-accelerate-state-of-devops-report?hl=en)  en 2021 avec la  _Reliability_  (oui on est à fond dans le franglais).\r
\r
L'introduction des métriques DORA a marqué un changement de paradigme significatif. Auparavant, les métriques de productivité étaient utilisées de manière subjective, chaque organisation se référant principalement à elle-même. Le concept derrière les métriques DORA était de  [collecter des données auprès de nombreuses organisations](https://devcycle.com/blog/the-ultimate-guide-to-dora-metrics)  et de créer une mesure empirique pour évaluer la performance et la productivité.\r
\r
En 2018,  [DORA a été acquis par la pieuvre de Mountain View](https://dora.dev/news/dora-joins-google-cloud/), leurs recherches se poursuivent avec la publication de nouvelles données et de  [nouveaux rapports chaque année](https://cloud.google.com/devops/state-of-devops?hl=fr).\r
\r
![](https://storage.mlcdn.com/account_image/325165/ewE9lyksZXFUd6IsPtO2LnEsAG89mvMcj6nhos2K.png)\r
\r
Alors que DORA fournissait une manière empirique de mesurer la productivité en ingénierie entre les organisations, en 2021, les mêmes auteurs ont publié  [le cadre SPACE](https://octopus.com/devops/metrics/space-framework/), avec l'idée de donner  [une vision plus globale de la productivité de ces boulets de devs](https://www.red-gate.com/blog/database-devops/what-is-the-space-developer-productivity-framework)  et moins centrée sur le devops. Alors bien sûr on retrouve cinq métriques qui nous permettent de mesurer l’efficience :  _Satisfaction and wellbeing_,  _Performance_,  _Activity_,  _Communication and collaboration_  et on termine avec  _Efficiency and flow_. Ce qui est passionnant, c’est qu’on commence à avoir des métriques sur le bien-être de l’équipe et de l’individu qui agit au sein de cette équipe, et qu’[on insiste bien sur le flow](https://www.lucidchart.com/blog/devops-process-flow).\r
\r
Et c’est pas fini, car en Avril, un article a été publié par certains des auteurs de DORA et de SPACE,  [introduisant ce qu'ils appellent le framework DevEx](https://www.getport.io/blog/developer-experience)  : alors que DORA visait à fournir une manière empirique de mesurer la performance, et par conséquent la productivité d'une équipe, et que SPACE visait à la rendre plus globale, DevEx reconnaît d'une certaine manière que mesurer la productivité n'est pas une tâche facile. Tout ça pour ça ouais nous aussi ça nous a rendu dingue mais là où ça change la donne, c’est que  [DevEx se concentre sur l'expérience du dev](https://www.infoq.com/articles/devex-metrics-framework/)  et explore les trois dimensions de son impact à travers ses qualifications : son expertise de dev, sa connaissance de devops et sa connaissance du produit. Dit comme ça c’est totalement obvious mais rappelez-vous qu’on parle de dev là.\r
\r
Bref, après des discussions houleuses au sein de la rédaction de Rudeops (composée de plusieurs dizaines de personnes) nous on aime bien DORA, on préfère sa simplicité un peu rugueuse et ça nous a donné plein d’idées pour nos boulots respectifs, mais le plus important, c’est qu’on pense qu’au final les deux mesures qui comptent le plus et où doivent être axés tous les efforts de nos organisations sont le bien-être des équipes et la satisfaction des clients, le reste peut passer après.\r
\r
  \r
\r
![](https://storage.mlcdn.com/account_image/325165/Bgpcb7NSvVCGwSpHQgh1Mx1O6lX5mtftUcKUtHwg.png)\r
\r
**Le podcast RudeOps**\r
\r
Vous vous sentez seul et déprimé et vous commencez à écouter en boucle des albums de Michel Sardou ? Changez-vous les idées en écoutant notre premier épisode de podcast dans lequel on écoute Damien Claisse, SRE chez Critéo, nous raconter ce qu'il pense du DevOps et comment il mesure ses bénéfices !`,y=`---\r
layout: post\r
title: Newsletter du 02 Novembre 2023\r
tags: [devops, OpenTofu, Terraform]\r
---\r
\r
_Preuve incontestable de notre avant-gardisme, ce numéro est en grosse partie constitué du courrier de nos lecteurs. La faute à une nouvelle prise de fonctions qui me prend un max de temps et d’énergie, et m’a empêché de faire une veille constante ces dernières semaines. Heureusement que vous êtes là et que vous êtes nombreux à nous envoyer pas mal d’emails, ça fait plaisir (et ça m’évite de travailler ce qui correspond parfaitement à mon way of life comme on dit à Montargis).  \r
Bonne lecture à tous et encore merci à nos lecteurs !_\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)\r
\r
## Nos lecteurs ont du talent\r
\r
On ouvre le bal avec Julien R., sysadmin dans une boîte française, qui nous fait découvrir  [Helix](https://helix-editor.com/), un terminal-based editor inspiré par  [Kakoune](https://kakoune.org/)  et  [Neovim](https://neovim.io/)  et qui intègre  [tree-sitter](https://neovim.io/doc/user/treesitter.html)  pour la syntaxe et la mise en forme. C’est écrit en Rust et il y a  [un repo dédié sur Github](https://github.com/helix-editor/helix). Merci pour le partage Julien !\r
\r
On continue avec le mystérieux JMB qui nous écrit pratiquement tous les 15 jours (coeur avec les doigts pour toi mec) et qui cette fois-ci nous présente  [jless](https://jless.io/), un outil en ligne de commande archi pratique qui  [permet de lire et d’explorer vos fichiers JSON](https://jless.io/). Alors on l’a testé et effectivement ça fait le taffe et c’est archi léger et intuitif. Merci JMB !\r
\r
On a aussi Nathan, SRE dans une grosse boîte américaine, qui nous partage un article très détaillé sur l'adoption d’eBPF pour réaliser de la surveillance côté réseau et pour offrir un meilleur contrôle d'une grande plateforme de microservices et d'infrastructure. C’est très très pointu mais passionnant, ça explique  [comment eBPF permet d'écrire du code injecté directement dans le kernel](https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/)  qui est capable de tracer ces opérations avec les routines de cloisonnement et de validation propres au noyau. Merci pour le partage Nathan !  \r
\r
![](https://storage.mlcdn.com/account_image/325165/MjzJlLxa3tXF46RjeszbpIJaR1MTas3wvBoZwVV2.png)\r
\r
On en a déjà pas mal parlé, et cette fois c’est Christian B. qui nous informe de la sortie de la  [première release alpha de OpenTofu](https://github.com/opentofu/opentofu), le fork open-source de Terraform créé en réponse du  [changement de licence](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  des produits chez Hashicorp. Merci pour l’info Christian on avoue être passé totalement à côté !\r
\r
On remercie chaudement Emilie, une dev full stack qui s’initie à Docker, et qui nous partage un chouette témoignage sur  [comment réduire son temps de docker build de 40%](https://medium.com/datamindedbe/how-we-reduced-our-docker-build-times-by-40-afea7b7f5fe7). Super chouette, très didactique, on y abordera l’usage de différents composants comme  [Buildkit](https://docs.docker.com/build/buildkit/),  [Buildx](https://docs.docker.com/engine/reference/commandline/buildx/) et l’utilisation pertinente du link option. Merci Emilie, c’est vraiment cool !\r
\r
On termine avec un tuto très basique que nous propose Pascal, sysadmin dans une boîte de retail française, qui nous prend par la main pour nous expliquer  [les rôles respectifs de Grafana et Prometheus](https://last9.io/blog/prometheus-and-grafana/). C’est très basique mais c’est une belle entrée en matière pour ceux qui ne connaissent pas et qui veulent faire un poc. Merci à toi Pascal !\r
\r
Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous voulez participer n'hésitez pas à nous envoyer un email à [contact@rudeops.com](mailto:contact@rudeops.com) !\r
\r
**Du côté des ops**\r
\r
On a beaucoup aimé ce post (qui renvoie vers un très chouette podcast) des copains de chez Thenewstack  [sur le rôle du platform engineering](https://thenewstack.io/at-run-time-driving-outcomes-with-a-platform-engineering-team/)  et comment ce rôle modifie l’interaction entre les équipes de développement et d'exploitation.\r
\r
Et en parlant de podcast, on vous conseille d’écouter avec attention celui des punks de chez  [arrested devops](https://www.arresteddevops.com/). On y écoutera Adam Jacob, le co-créateur de Chef, et Matt Stratton, un des organisateurs des devopsdays et figure bien connue de la communauté devops. Ils nous partagent  [leur vision du devops, son évolution et tous les points faibles du paradigme](https://www.arresteddevops.com/the-new-devops/).\r
\r
**Un peu de sécurité**\r
\r
On aime beaucoup ce que fait l’ANSSI, notre gendarme des télécoms en France (même si certains émettent  [certaines critiques à son sujet](https://reflets.info/articles/l-anssi-ou-la-fable-de-l-agence-nationale-de-la-securite-des-systemes-d-information)), et on trouve qu’ils ont encore réalisé un chouette boulot autour des “[Recommandations relatives à l'administration sécurisée des systèmes d'information reposant sur Microsoft Active Directory](https://cyber.gouv.fr/publications/recommandations-pour-ladministration-securisee-des-si-reposant-sur-ad)” (Matthieu si tu me lis c’est dédicace). On y parlera sans surprise des méthodologies de cloisonnement, de Tier 0 et de hardening, et différentes considérations autour des règles de sécurité à mettre en place si on gère un AD, la fameuse usine à gaz de la pieuvre de Redmond.  \r
\r
**J'aime lire**\r
\r
![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)\r
\r
##### The DevOps Adoption Playbook: A Guide to Adopting DevOps in a Multi-Speed IT Enterprise\r
\r
On a quand même réussi à terminer le bouquin "_The DevOps Adoption Playbook: A Guide to Adopting DevOps in a Multi-Speed IT Enterprise_". Pavé de presque 500 pages, c’est un guide très (voire trop) complet pour l'adoption de la méthodologie DevOps dans une organisation à “environnements multiples”, c’est donc très agnostique, on ne parle pas trop de la techno et on insiste surtout sur la méthodologie à employer.\r
\r
L'auteur, Sanjeev Sharma, aborde les principaux défis de l'adoption de DevOps, comme la culture de la boîte, les process, les outils et les mesures. Il propose des stratégies pratiques pour mettre en œuvre DevOps, en insistant sur l'importance de l'automatisation, de la collaboration entre les équipes de dev et de prod, ainsi que sur la supervision et la gestion du flow. Le livre met en évidence des études de cas et des exemples concrets pour nous aider à appliquer ces concepts dans notre boîte, et c’est vraiment pas mal du tout car vous tomberez forcément sur des use case que vous avez l’habitude de voir chez vous.`,w=`---\r
layout: post\r
title: Newsletter du 01 Décembre 2023\r
subtitle: La newsletter du petit-déjeuner\r
thumbnail-img: /assets/img/Alain-anssi.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, eBPF, Docker, Hashicorps, ANSSI]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_“Mauvais équilibre, mauvais karaté Daniel-San” nous enseignait Maître Miyagi dans Karaté Kid. Et c’est exactement ce qu’on pourrait dire de nos jours. On perd notre équilibre, entre les modèles commerciaux et le monde de l’open source par exemple, mais aussi entre le public et le privé. Dans un monde où la pieuvre de Redmond fait partie des plus gros contributeurs open-source et où c’est Xavier Niel qui se substitue, à travers l'initiative Kyutai, à un état défaillant, il serait temps de retrouver un centre de gravité sain, avec une vision adaptée aux enjeux de demain et une vraie stratégie autour du numérique._\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)\r
\r
## Nos lecteurs ont du talent\r
\r
On remercie une fois de plus le mystérieux JMB qui cette fois-ci nous fait découvrir  [Kaniko](https://github.com/GoogleContainerTools/kaniko), un chouette projet permettant de construire des images Docker pour vos projets. Le principe semble simple sur le papier,  [Kaniko reprenant vos Dockerfile et vos contextes afin de reproduire votre projet](https://itnext.io/building-docker-images-with-kaniko-6859bdb893f6) sans passer par un docker build et sans nécessité d’utiliser le démon Docker dans le conteneur de construction. Merci pour ce partage JMB !\r
\r
On a aussi Elodie NG, devops engineer pour le compte d’une grosse ESN française, qui elle nous partage un article passionnant sur  [l’utilisation de Open ID Connect (OIDC) en tant que mécanisme d'authentification](https://hedrange.com/2023/10/07/adopt-open-id-connect-oidc-in-terraform-for-secure-multi-account-ci-cd-to-aws), afin de durcir notre sécurité dans les pipelines CI/CD pour déployer une infrastructure basée sur Terraform chez AWS. Passionnant, on y évoquera bien entendu pour un tel sujet l’IAM, la mise en place d’un IDP, Github actions et bien entendu Terraform. Merci Elodie pour ce partage, on a adoré !  \r
\r
Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous souhaitez partager un peu de votre veille avec nous, ne soyez pas timide et envoyez-nous un email à [contact@rudeops.com](mailto:contact@rudeops.com) !\r
\r
![](https://storage.mlcdn.com/account_image/325165/X2wM5qygcrwCtzjgz60sCoEUZKlBO8tDxSZdWVn4.png)\r
\r
## Le terrarium de Hashicorp\r
\r
Même si on est un peu déçu du move des cowboys de chez Hashicorps  [vers une licence BSL](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  (qui a conduit à la création de  [OpenTofu](https://opentofu.org/)), force est de constater que Terraform est sans doute l’outil le plus puissant pour faire de l’IAC dans des environnements très différents. Mais voilà, c’est inévitable, votre infra évolue, se complexifie, et à la fin vous n’avez qu’une envie : tronçonner tout ce merdier le plus salement possible. Avant d’arriver à cette extrémité ou de vous reconvertir comme éleveur de hamsters à Montargis, on vous a sélectionné quelques modules natifs et externes qui vont vous permettre de gagner un temps dingue et un peu plus de sérénité sur la gestion de votre IAC.\r
\r
On commence avec une dinguerie comme disent les jeunes d’aujourd’hui avec  [TFLint](https://github.com/terraform-linters/tflint), un framework Terraform incroyablement pratique qui vous permet de  [vérifier votre code en fonction d'un ensemble de règles prédéfinies ou de règles personnalisées](https://spacelift.io/blog/what-is-tflint)  ajoutées à l'aide de plugins. Ça va vous permettre de facilement highlighter vos erreurs de syntaxe, vos déclarations non utilisées, et vous permettre d’appliquer une meilleure convention de nommage. Un must have à utiliser dès le début dont on ne peut plus se passer.\r
\r
On vous en a déjà parlé, mais ça fera de la pige facile : intégrez  [Terrascan](https://runterrascan.io/) dès le début de vos développements pour éviter les bêtes erreurs de sécurité.  [C’est facile à utiliser](https://runterrascan.io/docs/policies/policies/), ça s’utilise dans de nombreux contextes, et ça vous permettra de bénéficier d’une jolie ceinture de sécurité face à un RSSI parano. A noter que les vrais bonhommes eux utilisent  [Checkov](https://www.checkov.io/) qui fait plus ou moins la même chose [entièrement avec Python](https://devopscube.com/terraform-checkov-scan/).\r
\r
![](https://storage.mlcdn.com/account_image/325165/l6vFXaLqb8oQ8ClgftxN6ZOTduXfp6ERcvEjtv5D.png)\r
\r
Plus petit vous rêviez de faire de la comptabilité et de jongler avec les chiffres comme un CFO sous stéroïdes ? Tout n’est pas perdu grâce à  [Infracost](https://www.infracost.io/), un outil de fifou  [capable de vous afficher un pricing](https://semaphoreci.com/blog/infracost)  basé sur ce que vous prévoyez de déployer en tapant les APIS de votre cloud provider. Mais ça peut aller encore plus loin dans le délire en utilisant  [Open Policy Agent](https://www.openpolicyagent.org/)  par exemple, pour mettre en place des process qui peuvent autoriser ou non un déploiement en fonction du coût, en l’intégrant dans une CI/CD quelconque. Elle est pas belle la vie ?\r
\r
On se rend compte qu’on a failli oublier de vous parler de  [Pike](https://github.com/JamesWoolfenden/pike), un chouette outil qui permet de déterminer les permissions minimales requises pour exécuter une opération TF/IAC. C’est archi simple et ça peut vous faire gagner un temps de malade dans la gestion de votre IAM.\r
\r
Côté documentation on préfèrera utiliser  [Terraform-Docs](https://github.com/terraform-docs/terraform-docs)  qui générera votre doc Terraform à partir des fichiers de configuration. Extrêmement utile et simple à utiliser pour créer une documentation (plusieurs formats de sortie sont disponibles, MD, HTML, JSON, etc…) montrant exactement ce que vos utilisateurs doivent savoir, il expose des variables que vous pouvez ajouter à un template, et générera automatiquement les sections pour vous dans un format convivial qui ravira les petits et les grands.\r
\r
On va terminer ce tour d’horizon avec  [Terragrunt](https://terragrunt.gruntwork.io/), qui aide à garder votre code Terraform dry comme on dit chez les cowboys, et qui sait gérer plusieurs stacks ce qui est sa grande force.Terragrunt vous facilitera le travail si vous évoluez dans un environnement multi cloud et vous garantira une grande souplesse  [grâce à des hooks et tout un tas de modules géniaux](https://spacelift.io/blog/terragrunt).\r
\r
Et bien sûr on ne le répètera jamais assez : assurez-vous d’avoir les bonnes personnes et les bons process  [avant d’utiliser tous ces outils](https://www.smartsheet.com/content/people-process-technology). Et la prochaine fois on vous causera de Ansible qui lui aussi est un outil génial et qui a un écosystème tout aussi riche que celui de Terraform.\r
\r
  \r
\r
**Du côté des ops**\r
\r
Les coyotes de chez Gscore doivent avoir un peu de temps à perdre car ils se sont mis en tête de  [mesurer les performances d’un cluster K8s sur du bare metal et de la VM](https://thenewstack.io/does-kubernetes-really-perform-better-on-bare-metal-vs-vms/). Alors de base on se dit que ce genre de tests n’a aucun intérêts car biaisés dès le départ, hé bien en fait pas tant que ça, et même si ça ne colle pas vraiment à un vrai contexte de production le travail fait pour mesurer tout ça est une masterclass comme on dit à Montargis et les conclusions bien développées. A lire donc.\r
\r
[Le shell n’est pas mort](https://itnext.io/why-you-should-still-write-shell-scripts-0a24e9174ee5), c’est en tout cas ce qu’a l’air de penser  [Anthony Critelli](https://acritelli.medium.com/?source=post_page-----0a24e9174ee5--------------------------------)  et il nous détaille son point de vue en cinq points bien argumentés.\r
\r
En parlant de trucs pas tout à fait mort et qui bougent encore (comme le parti socialiste ou la licence star wars) on vous conseille de lire le tuto de notre copain Nick Janetakis qui nous explique  [comment installer la dernière version de docker-compose](https://nickjanetakis.com/blog/install-the-latest-version-of-docker-compose-v2)  (soit la V2, la V1 n’étant plus supportée).\r
\r
On a adoré ce post qui nous fait une  [analyse comparative sur les différentes approches pour choisir une stratégie de gestion de nos branches git](https://medium.com/@sreekanth.thummala/choosing-the-right-git-branching-strategy-a-comparative-analysis-f5e635443423). Alors forcément ça va dépendre du projet mais c’est toujours bien de voir les différents designs possibles qui existent. Ici on abordera les grands classiques que sont Git-Flow, GitHub-Flow, GitLab-Flow, et le trunk based development, avec les contraintes et prérequis associés.  \r
\r
**Le coin des paranos**\r
\r
L'ANSSI, notre gendarme des télécoms en France, a ouvert  [une antenne à Rennes pour renforcer sa présence hors de Paris](https://cyber.gouv.fr/actualites/lanssi-inaugure-sa-nouvelle-antenne-rennes), axée sur la détection des menaces cybers en collaboration avec des acteurs locaux. Prévoyant d'assister jusqu'à 10 000 entités contre les cyberattaques, le site de Rennes accueillera principalement des équipes de détection, tandis que les réponses aux incidents resteront à Paris. Environ 50 agents parisiens sont déjà présents, avec un objectif de 190 personnes à recruter sur place.  \r
\r
![](https://storage.mlcdn.com/account_image/325165/mzwVBTkeeM4rJiQcIIFlbpl4Q1qQs18NqjobUwDx.png)\r
\r
Le pied-de-biche est une arme de corps à corps emblématique et l'arme signature de Gordon Freeman dans le jeu vidéo Half Life (qui vient de fêter ses 25 ans). Mais  [crowbar](https://github.com/galkan/crowbar) (anciennement Levye) c’est aussi un super outil pour faire du brute force sur certains protocoles d'une manière un poil différente des outils habituels : alors que la plupart des outils de brute force utilisent un username et un mot de passe, Crowbar utilise des clés SSH, ce qui permet d'utiliser les clés privées obtenues lors de tests de pentesting pour attaquer d'autres serveurs SSH. Malinx non ?\r
\r
On a bien aimé le papier des punks de chez thenewstack qui pose les bases pour  [faire du pentesting avec Burp Suite sur Kali](https://thenewstack.io/pentest-your-web-apps-with-burp-suite-on-kali-linux/). Bon, on est plus  [team ZAP](https://www.zaproxy.org/)  mais le papier est bien rédigé comme d’habitude et nous prend par la main pour devenir un vrai petit devsecops en herbe. On aurait aimé aller plus loin dans le détail à travers quelques use-cases et même si on ne fait qu'effleurer le sujet ça reste une chouette porte d’entrée sur le sujet.  \r
  \r
L'intégration des pratiques de sécurité dans le process de développement a donné naissance au concept de  [DevSecOps](https://www.redhat.com/en/topics/devops/what-is-devsecops), une méthodologie qui accorde la priorité à la sécurité dès le départ plutôt que de la considérer comme une réflexion après-coup. Aujourd’hui c’est au tour des cowboys de chez Dzone de nous faire un topo sur  [comment intégrer la sécurité dans notre process de développement](https://dzone.com/articles/unlocking-the-secrets-of-devsecops-the-essential-l)  en nous partageant leur vision sur les principes clef et les étapes du cycle de vie d’une méthodologie DevSecOps.\r
\r
**J'aime lire**\r
\r
![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)\r
\r
##### Time Management for System Administrators\r
\r
## Stop Working Late and Start Working Smart\r
\r
On est tombé sur ce livre un peu par hasard.  [Publié par les hipsters de chez O’Reilly](https://www.oreilly.com/library/view/time-management-for/0596007833/), et malgré quelques réflexions un peu datées (le bouquin est sorti en… 2005), on a pris pas mal de plaisir à le parcourir parce que certaines choses ne changent pas.\r
\r
On y aborde par exemple l'aspect crucial de la gestion du temps dans les opérations DevOps avec des stratégies pratiques, notamment sur la réduction de context switching, le développement de routines, la priorisation des tâches, etc. C’est un peu un livre d’hygiène de vie quand on est sysadmin dans une boîte avec plein de conseils visant à éliminer les pertes de temps et à automatiser des process.  \r
\r
C'est le cadeau de Noël idéal si vous avez un alternant, il vous remerciera.`,x=`---\r
layout: post\r
title: Newsletter du 15 Décembre 2023\r
subtitle: La newsletter sans 49.3	\r
thumbnail-img: /assets/img/Tuyaux.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Docker, GSQL]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
_Voici venir la dernière newsletter de l’année, la 17ème depuis qu’on a lancé RudeOps. On vous souhaite beaucoup de plaisir à la parcourir et comme d’habitude, on croise très fort nos petits doigts en espérant que certains sujets éveillent un intérêt applicable directement ou pas dans vos organisations. Bonne lecture à tous, bonnes fêtes de fin d’année, on se retrouve de l’autre côté en 2024._\r
\r
_Cyril_  \r
\r
![](https://storage.mlcdn.com/account_image/325165/ZQnyEP9pdesJ7X8SGo8b0QWZiTXeXxHTpzoVkCAT.png)\r
\r
## Nos lecteurs ont du talent\r
\r
C’est une fois de plus le mystérieux JMB qui nous a partagé un peu de sa veille tech, notamment un post super intéressant d’un mec de chez Infracloud qui dresse  [la liste des 6 raisons qui font qu’une organisation de platform engineering peut se planter](https://www.infracloud.io/blogs/how-to-fail-at-platform-engineering/). On y retrouve les grands classiques comme le silotage de l’activité, un design tech trop complexe ou un manque de documentation partagée. Merci une fois de plus pour le partage JMB.\r
\r
On a aussi Damien M qui nous fait découvrir  [Trippy](https://github.com/fujiapple852/trippy), un chouette outil qu’on a essayé et qui combine ping et traceroute, compatible avec différents protocoles (ICMP, UDP et TCP) avec quelques fonctions plus avancées et quelques possibilités de customisation sympathiques (la taille des paquets envoyés par exemple). Merci Damien, c’est toujours bien d’avoir ce type d’outil sous la main !  \r
\r
Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous souhaitez partager un peu de votre veille avec nous, ne soyez pas timide et envoyez-nous un email à [contact@rudeops.com](mailto:contact@rudeops.com) !\r
\r
**Le monde merveilleux des Ops**\r
\r
Au cours de notre veille on est tombé sur un chouette retour d’expérience d’une boîte qui a  [réussi à réduire les coûts d’exploitation](https://engineering.razorpay.com/the-culture-of-cost-optimization-reducing-kubernetes-cost-by-300-000-32611cdd19d9)  de ses clusters K8s de 300.000 dollars. Ce post constitue la troisième partie  [d’une série de posts](https://engineering.razorpay.com/razorpay-cost-optimization-journey-part-1-the-spot-instance-road-cb8d312c9710)  qui aborde de manière détaillée l’optimisation des coûts et du workload tech dans un environnement cloud (AWS), et on vous encourage vivement à tous les lire tellement ils sont riches d'enseignement.  \r
\r
![](https://storage.mlcdn.com/account_image/325165/Y6YkQTsvYtOhxsercyt2hcB2C8rBOK2QZRCanMv2.png)\r
\r
On est aussi tombé sur GSQL ([Git Query Language](https://github.com/AmrDeveloper/GQL)), un langage de requête avec une syntaxe très similaire à SQL, doté d'un moteur dédié -pour exécuter des requêtes sur des fichiers .git qui exécute la requête à la volée sans avoir besoin de créer des fichiers de base de données ou de convertir les fichiers .git dans un autre format. Simple à utiliser, ça peut servir dans pas mal de cas pratiques.\r
\r
Ce sont les copains de chez Thenewstack qui ont eu  [l’occasion d’interroger Patrick Debois](https://thenewstack.io/qa-patrick-debois-on-the-past-present-and-future-of-devops/)  sur l’avenir du DevOps, et comme d’habitude le bonhomme a une vision passionnante, alors on vous invite à lire religieusement l’article.\r
\r
Et pour finir on vous présente  [Pipelight](https://pipelight.dev/), un outil en ligne de commande qui exécute une liste de tâches que vous avez spécifiées dans un fichier de conf. Idéal pour l'automatisation CI/CD. La conf peut être écrite en Typescript, YAML ou TOML.  \r
\r
**Le coin des paranos**\r
\r
![](https://storage.mlcdn.com/account_image/325165/5IKBqYgE2HKC3eGUxeWad2n8Xovok4Ec2SAQwnRK.png)\r
\r
On aime beaucoup le travail des intellos de chez  [Checkpoint Research](https://research.checkpoint.com/), et on a lu avec attention leur travail sur  [SysJoker, un backdoor multi-plateformes avec de multiples variants sous Windows, MacOS et Linux,](https://research.checkpoint.com/2023/israel-hamas-war-spotlight-shaking-the-rust-off-sysjoker/)  qui est en train de muter à travers une nouvelle version ré-écrite en Rust. A partager avec votre CISO pour gagner des bons points.\r
\r
C’est  [grâce à cet article (passionnant) des mecs en costard de chez Mand Consulting Group](https://mandconsulting.ca/plundering-postman-with-porch-pirate-osint/)  qu’on a découvert l'existence de  [Porch Pirate](https://github.com/mandconsultinggroup/porch-pirate), un outil pour découvrir rapidement les secrets dans Postman et qui a lentement évolué vers un framework de reconnaissance OSINT pour Postman.\r
\r
Et pour finir on vous partage un article très riche sur le travail qu’effectue la boîte d’Aqua Nautilus intitulé  [50 Shades of Vulnerabilities: Uncovering Flaws in Open-Source Vulnerability Disclosures](https://blog.aquasec.com/50-shades-of-vulnerabilities-uncovering-flaws-in-open-source-vulnerability-disclosures). Leur taffe consiste à évaluer les processus de divulgation de vulnérabilités (pour des dizaines de milliers de projets open source) et de découvrir des failles dans ces process, failles qui ont permis d'exploiter les vulnérabilités avant qu'elles ne soient corrigées et annoncées. A travers cet article, les mecs mettent en lumière les processus et les méthodes de recherche, et mettent en évidence les étapes de la découverte des vulnérabilités en soulignant la gravité de l'exposition précoce des vulnérabilités dans les projets open source.`,k=`---\r
layout: post\r
title: Newsletter du 13 Mai 2024\r
subtitle: La newsletter officielle des JO	\r
thumbnail-img: /assets/img/Barbara sourit.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, database, AWS, ransomware, Hashicorp, GIT]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Rien de tel qu'un weekend prolongé pour reprendre notre newsletter. On a refait un peu la peinture, on a réduit la taille de la newsletter (en gros on divise le contenu par trois) mais on vous livre toujours une veille techno de qualité avec toujours autant de mauvaise foi et d'idioties à l'intérieur.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Database Fundamentals :** [Vous avez toujours voulu comprendre comment fonctionnent les bases de données ?](https://tontinton.com/posts/database-fundementals/)  Jetez-vous sur cet article. Simple basique, avec des exemples en bash pour comprendre le principe (ouais du bash vous avez bien lu).\r
\r
💥 **How an empty S3 bucket can make your AWS bill explode :** On ne le répétera jamais assez, [un bucket vide c’est la porte ouverte à toutes les fenêtres](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1), et ça peut vous coûter cher.\r
\r
🥇  **Master Parser :** Et on enchaîne avec un énième  [parseur de logs dédié au Forensic et à la réponse à incident](https://github.com/securityjoes/MasterParser). On vous en parle parce qu’on l’a testé avec nos gros doigts et qu’on trouve qu’il fait parfaitement le job.\r
\r
🤴 **Ransomware Sim :** Vous souhaitez éduquer vos sysadmins par l’exemple aux dangers du ransomware et à leur mode de fonctionnement ?  [Vous êtes au bon endroit](https://github.com/HalilDeniz/RansomwareSim).\r
\r
😱 **IBM Acquires HashiCorp for $6.4 Billion, Expanding Hybrid Cloud Offerings :** Vous vous souvenez de  [quand les mecs de Hashicorp étaient encore archi cool](https://www.techrepublic.com/article/ibm-hashicorp-acquisition/)  et marchaient main dans la main avec l’open-source ? Nous non.  \r
\r
🚀  **Oh my Git :**  Les mecs ne savaient pas quoi faire de leur dimanche alors ils ont décidé de créer  [un jeu pour vous apprendre à utiliser Git](https://ohmygit.org/). Et figurez-vous que c’est vraiment pas mal (ça tourne aussi bien sur Windows que sur Linux).\r
\r
🏆  **Gitup :** Et en parlant de Git,  [on vous présente Gitup](https://github.com/git-up/GitUp), un nouveau modèle d’interaction avec votre jouet favori qui est censé simplifier tout ce merdier auquel personne ne comprend plus rien.\r
 \r
\r
## The hater's guide to Kubernetes\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
Merci à Jérôme L, à qui on avait soufflé la reprise notre newsletter, de nous partager ce lien qui vous fera sauter le pas (ou pas) et utiliser K8s en prod. Ça fait toujours du bien de savoir comment c’est utilisé dans telle ou telle boîte et dans quel contexte, avec les bonnes pratiques associées et les éventuels pièges à éviter.  \r
\r
[Accéder au lien ->](https://paulbutler.org/2024/the-haters-guide-to-kubernetes/)`,j=`---\r
layout: post\r
title: Newsletter du 20 Mai 2024\r
subtitle: La newsletter de la Pentecôte	\r
thumbnail-img: /assets/img/Alain-peche.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, database, K8s, gitops, API, cybersecurity]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Encore un weekend prolongé et ça c'est la classe ! Mais pas pour tout le monde, alors on pense très fort à ceux qui sont sur leur clavier aujourd'hui et on leur souhaite bon courage !  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **The guide to Kubectl I never had :** Tout savoir pour bien commencer avec Kubectl, on en profite,  [c'est archi détaillé, super riche en exemples](https://medium.com/@jake.page91/the-guide-to-kubectl-i-never-had-3874cc6074ff)  et facile à suivre si vous connaissez déjà bien Kubernetes. C'est écrit avec passion par  [les coyotes de chez GlassKube](https://github.com/glasskube/glasskube), un package manager pour les amener tous et dans les ténèbres les lier.\r
\r
💝 **Building a gitops CI/CD with Github Actions (SOC 2) :** On adore la philosophie derrière  [Gitops](https://about.gitlab.com/topics/gitops/) et on adore quand c'est  [mis en place à travers Github Actions](https://mathieularose.com/gitops-cicd-github-actions)  de façon aussi simple et performante, un bel exemple de lean. Et oui, ça gère différents environnements bien sûr.\r
\r
🥇  **Minimizing on-call burnout through alerts observability :** Chez nous à RudeOps, l'observabilité c'est notre passion, et ça tombe bien, parce que les hipsters de chez Cloudflare nous ont pondu  [un très bel article sur la façon dont ils intègrent des outils open-source pour analyser et optimiser les alertes](https://blog.cloudflare.com/alerts-observability), réduisant ainsi les faux-positifs et les alertes non prioritaires, ce qui permet aux équipes d'astreinte d'être plus réactives et de réduire leur fatigue.\r
\r
😱 **Lessons learned when building my DNS resolver :** C'est en partant du projet [Implement a DNS in a weekend](https://implement-dns.wizardzines.com/)  que  [Wen-Tsung nous décrit son périple](https://blog.wtcx.dev/2024/04/27/lessons-learned-building-dns-resolver/), sorte de mix entre Koh Lanta et Pékin Express, pour monter son resolver from scratch. Ne jugeons pas.\r
\r
🏹 **What makes a good REST API :** Il y a la bonne API, et il y a la mauvaise API.  [Un ensemble de bonnes pratiques](https://apitally.io/blog/what-makes-a-good-rest-api)  à assimiler afin de ne pas rentrer brocouille comme on dit dans le bouchonnois.  \r
\r
🚀 "**run0" as a sudo replacement :** [This incident will be reported](https://lwn.net/Articles/971745/).\r
\r
🏆  **Cybersecurity isn't special :** Par le mec qui a écrit le bouquin  [Security Chaos Engineering](https://www.securitychaoseng.com/), c'est passionnant à lire et c'est  [à partager avec tous les CISO que vous connaissez](https://kellyshortridge.com/blog/posts/cybersecurity-isnt-special/).\r
\r
\r
\r
## How Figma's databases team lived to tell the scale\r
\r
![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)\r
\r
Merci à Julien A. qui nous partage un post bigrement intéressant sur la quête de la scalabilité maximale chez les techs de Figma. Au menu, de l'horizontalisation, du sharding, et tout ça sur des grosses instances Postgres.  \r
\r
[Accéder au lien ->](https://www.figma.com/fr-fr/blog/how-figmas-databases-team-lived-to-tell-the-scale/)`,S=`---\r
layout: post\r
title: Newsletter du 03 Juin 2024\r
subtitle: Petit ICQ parti trop tard	\r
thumbnail-img: /assets/img/jonglage.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, DNS, K8s, Linux, Docker, Podman, Memcache]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Il fait gris dans nos petits coeurs aigris, car le couperet vient de tomber.  [ICQ va rejoindre la tombe qu'il aurait déjà du trouver](https://www.theverge.com/2024/5/25/24164579/icq-shut-down-june)  il y a de nombreuses années, ce qui ne nous rajeunit pas.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Why use DNS ALIAS record instead of CNAME in the cloud :** Un article  [vraiment super didactique](https://adil.medium.com/why-use-dns-alias-record-instead-of-cname-in-the-cloud-ca995b7a364d)  qui vous initie au DNS Flattening. Et n'oubliez pas :  [c'est toujours la faute du DNS.](https://www.cyberciti.biz/humour/a-haiku-about-dns/)\r
\r
💀 **Why Kubernetes was a mistake for my SaaS business :** Un retour d'expérience qui montre bien qu'utiliser Kubernetes en production  [n'est pas pertinent dans 90% des cas](https://sotergreco.com/why-kubernetes-was-a-mistake-for-my-saas-business).\r
\r
😱 **How to destroy your OS with tar :** Attention, cette cascade a été réalisée par un professionnel,  [ne reproduisez pas ça chez vous](https://vorakl.com/articles/tar-curdir/).\r
\r
🔨 **Six Linux commands I use for malware analysis :** C'est écrit par Vlad Ananin, un punk de chez  [any.run](https://any.run/), qui nous partage ses  [outils favoris pour analyser des malwares](https://itsfoss.com/linux-commands-malware-analysis/). On y croisera les incontournables gdb et file, mais aussi quelques outils plus obscurs comme  [objdump](https://stacklima.com/commande-objdump-sous-linux-avec-des-exemples/).\r
\r
🏹 **Linux crisis tools :** Dans la même veine qu'au dessus, quelques outils essentiels  [d'après un vague barbu linuxien](https://www.brendangregg.com/blog//2024-03-24/linux-crisis-tools.html)  qui permettent d'intervenir rapidement en cas d'incident sur vos systèmes.  \r
\r
🚀  **Docker vs Podman, a new era in secure orchestration :** Un bel article écrit à travers le prisme de la sécurité qui compare les solutions de containers Podman et Docker.  [A la fin c'est Podman qui gagne](https://levelup.gitconnected.com/docker-vs-podman-a-new-era-in-secure-orchestration-957ea2123098).\r
\r
🏆  **DNS as Code :** Un chouette post qui décrit dans le détail  [la migration d'une config portée par Cloudflare à travers OpenTofu](https://dev.to/aws-builders/dns-as-code-40ic). On vous le partage parce que ça peut vous donner plein d'idées et que ça fait rudement plaisir de voir  [qu'OpenTofu](https://opentofu.org/), le fork de Terraform, commence à être utilisé.\r
\r
\r
## How Facebook served billions of requests per seconds using Memcached\r
\r
![](https://storage.mlcdn.com/account_image/325165/ewE9lyksZXFUd6IsPtO2LnEsAG89mvMcj6nhos2K.png)\r
\r
Aujourd'hui c'est Clément R. qui nous partage un post grave complet sur l'importance pour Facebook de relever des défis de scalabilité avec la mise en œuvre et l'optimisation de Memcache. Des décisions d'architectures globales aux optimisations spécifiques des serveurs, chaque aspect contribue à la performance, la fiabilité et l'efficacité du système, et tout ça est vraiment bien détaillé ma bonne dame.  \r
\r
[Accéder au lien ->](https://blog.bytebytego.com/p/how-facebook-served-billions-of-requests)`,C=`---\r
layout: post\r
title: Newsletter du 10 Juin 2024\r
subtitle: La newsletter qui débarque	\r
thumbnail-img: /assets/img/soldat.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Omakub, Ubuntu, database, Shell, Gitlab, Sql]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
### Quoi de neuf ?\r
\r
💊 **An Omakase Developer Setup for Ubuntu 24.04 by DHH :** Quand  [le papa de Ruby on Rails](https://world.hey.com/dhh)  s’ennuie, il lance de nouveaux projets. Le dernier en date s’appelle  [Omakub](https://omakub.org/), et consiste à transformer votre distrib Ubuntu en un système de développement web préconfiguré avec plein d’outils de base (Docker, VSCode, Neovim, etc) en une seule commande.\r
\r
💝 **What's the difference between SH and BASH :** Vous n’avez jamais osé demander de peur de perdre votre streed cred ?  [Lisez cet article](https://medium.com/@shalinpatel./whats-the-difference-between-sh-and-bash-f8fa6b2cd9f0), vous comprendrez tout.\r
\r
🥇  **Stop using UUIDs on your database :** On a tous coutume d’utiliser des UUIDs pour identifier de manière unique des lignes dans une base de données, mais ils peuvent vite devenir  [une source de problèmes de performance](https://www.danielfullstack.com/article/stop-using-uuids-in-your-database)  sur les très (très très) grosses infrastructures.\r
\r
🎁 **Writing .gitlab-ci.yml file with examples :** Tout ce que vous rêviez de savoir sur l’écriture du .gitlab-ci.yml pour configurer proprement vos pipelines de CI/CD dans Gitlab.  [Simple basique](https://spacelift.io/blog/gitlab-ci-yml).\r
\r
🏹 **SQL injection prevention cheat sheet :** Parce que chaque année, des milliers de serveurs meurent faute de règles de sécurité adéquates, on vous partage  [la cheat sheet de prévention sur les injections SQL](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)  éditée par  [l’OWASP](https://owasp.org/).  \r
\r
🚀  **Fastfetch :** Depuis que le célèbre  [Neofetch](https://github.com/dylanaraps/neofetch) n’est plus maintenu, il semblerait que ce soit  [Fastfetch](https://github.com/fastfetch-cli/fastfetch) qui fasse l’unanimité pour le remplacer et afficher plein d'informations sur votre système de manière achi classe. Ça ne sert à rien, donc c’est indispensable !\r
\r
## BitKeeper, Linux, and licensing disputes: How Linus wrote Git in 14 days\r
\r
![](https://storage.mlcdn.com/account_image/325165/l6vFXaLqb8oQ8ClgftxN6ZOTduXfp6ERcvEjtv5D.png)\r
\r
Avant l’utilisation de BitKeeper, le contrôle de version du noyau Linux reposait sur Linus Torvalds himself, qui intégrait avec ses gros doigts potelés les patchs soumis par ses lieutenants. En 1998, Larry McVoy proposa BitKeeper, qui inspira Linus et qui déboucha sur Git qu'il créa en 2005, après des conflits sur l’utilisation de BitKeeper. Tout ça vous est raconté dans un article très complet écrit par les punks de chez graphite.dev. Merci à JMB qui nous a partagé le lien !\r
\r
[Accéder au lien ->](https://graphite.dev/blog/bitkeeper-linux-story-of-git-creation)`,L=`---\r
layout: post\r
title: Newsletter du 17 Juin 2024\r
subtitle: La newsletter officielle des législatives	\r
thumbnail-img: /assets/img/claque la porte.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, LXC, Docker, CI-CD, Linux, Gitness, S3, DORA]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Quel dommage de voir notre vie politique aussi bouleversée et confuse, en manque de repères et où l'invective devient la norme. Même si ici on préfère en rire, on se plaît à penser à un framework dédié à la politique avec un set de bonnes pratiques moins déconnectées de la réalité à fournir à nos élus.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **What is PID 0 :** C'est à travers les news des bad boys de chez Bearstech (qui eux ont une  [newsletter](https://www.linkedin.com/newsletters/la-veille-des-ours-7100088441966575616/) vraiment pro qu'on vous conseille) qu'on a trouvé un article - claqué au sol comme disent les jeunes d'aujourd'hui - sur  [le rôle du mystérieux PID 0](https://blog.dave.tf/post/linux-pid0/).\r
\r
💝 **How to write a simple Linux kernel module :** Bel exemple de création de module  [très simple à suivre](https://adil.medium.com/how-to-write-a-simple-linux-kernel-module-bc3f981093b4)  et à portée de tous (sauf sans doute de Eric Ciotti, faut pas déconner non plus).\r
\r
🥇  **LXC versus Docker, which one should you use :** Un chouette article relativement impartial sur  [les avantages des deux systèmes de containerisation](https://www.docker.com/blog/lxc-vs-docker/)  et dans quel cadre les utiliser au mieux.\r
\r
🎁 **Open-source code hosting and CI/CD pipeline engine :** On vous présente Gitness, une  [plateforme de gestion de code open-source](https://github.com/harness/gitness)  qui embarque un moteur de pipelines CI/CD, et qui propose une sécurité renforcée, des intégrations personnalisables avec vos outils préférés, et des migrations en un clic depuis d'autres plateformes comme GitHub ou GitLab. Elle est pas belle la vie ?\r
\r
😳 **Things you wish you didn't need to know about S3 :** Un post archi intéressant écrit par les cowboys de chez Plerion et qui nous décrit  [quelques aspects méconnus mais importants de la sécurité sur S3](https://blog.plerion.com/things-you-wish-you-didnt-need-to-know-about-s3/)  (ça va des particularité de l'API S3 en passant par les méthodes pour lister les clefs d'objets).  \r
\r
🚀  **Top 12 Git commands every developer must know :** [La cinquième va vous étonner !](https://github.blog/2024-06-10-top-12-git-commands-every-developer-must-know/)\r
\r
\r
## Best practices for using DORA metrics to improve software delivery\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
Aujourd’hui on remercie Cédric R qui nous partage un post des outlaws de chez Datadog qui nous explique comment utiliser les métriques DORA pour améliorer notre delivery. On y parle des quatre métriques clés (fréquence de déploiement, délai de changement, temps de restauration et taux d'échec des changements) et le post donne plein de conseils pour les mesurer et les analyser efficacement. Pour les deux qui ne suivent pas, les métriques DORA (Devops Research and Assessment) permettent d'identifier et d'optimiser les points faibles de workflows CI/CD.  \r
\r
[Accéder au lien ->](https://www.datadoghq.com/blog/dora-metrics-software-delivery/)`,z=`---\r
layout: post\r
title: Newsletter du 02 Juillet 2024\r
subtitle: La newsletter officielle de l'équipe de France	\r
thumbnail-img: /assets/img/Charlie regarde au loin.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Rancher, eBPF, Linux, Zellij, SSL, Git]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Vous n'imaginez pas à quel point c'est compliqué de rédiger un édito, c'est limite un vrai métier. Histoire de pas trop m'emmerder, je vous laisse avec cette très belle citation de Diderot, faites-en ce que vous voulez :  _"La liberté d'écrire et de parler impunément marque soit l'extrême bonté du prince, soit le profond esclavage du peuple. On permet de ne le dire qu'à celui qui ne peut rien."_  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Why an engineering manager should not review code :** Sans doute le plus vieux sujet du monde, mais avec cette fois (à notre avis) le meilleur point de vue en terme d'équilibre et de pertinence,  [à lire absolument](https://betterprogramming.pub/why-an-engineering-manager-should-not-review-code-46f87c08db66).\r
\r
💝 **Rancher Desktop by Suse :** C'est l'application open-source du moment, et on est déjà fan car ça intègre de base tout ce qu'il faut pour bosser sur nos containers et K8s à travers  [une interface graphique vraiment classe](https://rancherdesktop.io/)  et lisible pour une fois.\r
\r
🥇  **Securing Linux systems with eBPF, the future of in-kernel observability and security :** Chez nous à RudeOps, l'observabilité c'est notre passion, et ça tombe bien parce que les cowboys de chez It Pro Today ont rédigé  [un chouette article sur la techno Extended Berkeley Packet Filtering](https://www.itprotoday.com/linux-os/securing-linux-systems-with-ebpf-the-future-of-in-kernel-observability-and-security)  (eBPF).\r
\r
😱 **Mastering version control with Git, beyond the basics :** Un post vraiment très complet et bien structuré sur  [toutes les bonnes pratiques pour maîtriser Git](https://dev.to/gauri1504/mastering-version-control-with-git-beyond-the-basics-44ib), de la stratégie des branches de travail jusqu'aux hooks pour l'automatisation.\r
\r
🚀  **Zellij, a terminal workspace with batteries included :** Un énième terminal au nom rigolo avec un système de layout sympa et qui fait du multiplex, on l'a essayé et ouais,  [c'est pas mal](https://zellij.dev/).\r
\r
🏆  **SSL in localhost takes 5 seconds now :** Et tout ça  [grâce à Ophichui](https://github.com/apilylabs/ophiuchi-desktop)  qui simplifie tout ce merdier en générant automatiquement des certificats et en mettant à jour le fichier hosts. Du bien bel ouvrage.\r
\r
\r
## Gitlab cheatsheet series' articles\r
\r
![](https://storage.mlcdn.com/account_image/325165/EipbH28lOYLYtVLmlTenhkkTofbQIzZ5m8EnfOSC.png)\r
\r
Aujourd'hui on remercie Jean-Philippe B. qui nous partage sa série de cheatsheets sur Gitlab vraiment au top comme on disait dans les nineties. C'est vraiment bien pour débuter ou pour une utilisation avancée (on y aborde par exemple l'intégration de Gitlab avec K8s). A mettre dans un coin pour pouvoir s'y référer au besoin.  \r
\r
[Accéder au lien ->](https://dev.to/jphi_baconnais/series/12928)`,A=`---\r
layout: post\r
title: Newsletter du 22 Juillet 2024\r
subtitle: Merci à Crowdstrike notre nouveau sponsor !		\r
thumbnail-img: /assets/img/Barbara rigole.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Starship, Github, API, PostgreSQL, S3]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Je pense qu'on a tous pris conscience des limites de notre modèle actuel et de la dépendance maladive qu'on a auprès de certains éditeurs logiciels. Comment a-t-on fait pour en arriver là ? Comment corriger le tir et comment trouver un équilibre ? Des questions qui auront un écho, on l'espère, dans les prochaines années, et dont les réponses viendront en partie des acteurs engagés pour un écosystème plus sain que ce qu'on a aujourd'hui.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Starship, a better terminal prompt in 2 minutes :** Un énième terminal qui se veut minimaliste, rapide et personnalisable,  [facile à configurer](https://itnext.io/starship-a-better-terminal-prompt-in-2-minutes-48586aecc1a6)  avec TOML. Il a pas mal de modules intégrés et permet de personnaliser l'affichage selon vos besoins. On a testé, c'est pas mal ouais.\r
\r
💝 **Using a git commit template :** Un bel article qui explique les bénéfices de  [standardiser les commits](https://blog.scottlowe.org/2024/07/15/using-a-git-commit-template/)  à travers un système de templates, par l'ami Scott Lowe qu'on aime beaucoup.\r
\r
🥇  **Github Actions tutorial :** Un chouette tuto  [rédigé par les cowboys de chez Spacelift](https://spacelift.io/blog/github-actions-tutorial)  qui couvre la création de workflows, la configuration des jobs, la gestion des secrets et le déploiement d'applications à l'aide d'exemples écrits en Go. Vachement plus simple que la doc publiée sur Github.\r
\r
😱 **What is an API definition :** Dis donc Jamy, savais-tu que les spécifications d'API fournissent un plan détaillé qui précise leur structure, leurs endpoints, les requêtes, les réponses et les méthodes d'authentification ? Mais oui Fred, et  [en lisant cet article des outlaws de chez Nordic APIS](https://nordicapis.com/what-is-an-api-definition/)  tu apprendras qu'OpenAPI (anciennement Swagger) est la spécification d'API la plus largement utilisée en 2024.\r
\r
🏹 **Don't query your PostgreSQL anymore, prefer PostgREST :** L'article détaille comment configurer PostgREST, un serveur web autonome  [transformant les bases de données PostgreSQL en API RESTful](https://www.avonture.be/blog/docker-postgrest/) simplifiant les interactions avec votre DB. L'auteur partage son expérience de migration de MySQL vers PG et explique comment PostgREST a simplifié son code PHP en éliminant les requêtes SQL directes. Il y a aussi un tuto sur la configuration et l'utilisation de PG avec Docker sur lequel votre DBA ne crachera pas.  \r
\r
🚀  **Using S3 as a container registry :** Attention,  [cette cascade a été réalisée par un professionnel](https://ochagavia.nl/blog/using-s3-as-a-container-registry/), n'essayez surtout pas de la reproduire chez vous.\r
\r
## 8 Strategies for Reducing Latency\r
\r
![](https://storage.mlcdn.com/account_image/325165/zpSj2EIqMq7ATnfxVwRWGTDQxOEFS3WLCuo1vTtW.png)\r
\r
Merci à Matthieu D. qui nous partage un article rédigé par les coyotes de chez System Design Codex et qui nous propose quelques bonnes pratiques pour diminuer la latence dans nos environnements. On y parle de l'optimisation des requêtes de base de données, de l'utilisation de caches, de la mise en œuvre de CDNs et d'un tas d'autres trucs que vous devez connaître et mettre en pratique.  \r
\r
[Accéder au lien ->](https://newsletter.systemdesigncodex.com/p/8-strategies-for-reducing-latency)`,O=`---\r
layout: post\r
title: Newsletter du 05 Août 2024\r
subtitle: Il commence à faire chaud non ?		\r
thumbnail-img: /assets/img/Barbara-OS.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Kubernetes, Linux, Network, Monitoring, Swarm]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Je suis quand même très déçu de constater qu'une fois de plus il n'y a pas d'épreuves aux Jeux Olympiques sur Kubernetes, et ce, malgré plusieurs lettres au CIO. Ça aurait quand même eu de la gueule non ?  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏹 **Kubernetes 1.31, what's new :** Et en parlant de Kubernetes,  [la version 1.31 vient de sortir](https://sysdig.com/blog/whats-new-kubernetes-1-31/)  et amène son lot de nouveautés et d'améliorations. On peut citer entre autres choses la possibilité de mettre à jour les ressources des pods sans avoir à les redémarrer, la transition vers WebSockets pour kubectl, la suppression des intégrations internes aux fournisseurs de cloud (initiée depuis la version 1.26) et il n'est maintenant plus nécessaire de réaliser de complexes sacrifices humains avant de redémarrer son cluster, ce qui fera gagner du temps à tout le monde et sera moins salissant.  \r
\r
🙌 **Linux performance ultimate guide :** Le  [guide de référence ultime](https://ntk148v.github.io/posts/linux-network-performance-ultimate-guide/)  qui va donner des frissons de plaisir à tous les barbus linuxiens. C'est vraiment archi détaillé, bien sourcé et indispensable si vous voulez comprendre comment fonctionne le réseau sur Linux.\r
\r
🤖 **Monitoring of monitoring :** [Quis custodiet ipsos custodes](https://oren-shoval.medium.com/monitoring-of-monitoring-29f552b5cb43) ?\r
\r
🥇  **Echovault :** [Un énième data-store distribué](https://github.com/EchoVault/EchoVault) qui fait du cache et écrit dans le langage du moment, le Go. Il se différencie de ses concurrents par une vitesse assez dingue sur le papier.\r
\r
🧲 **Understanding Wifi 4/5/6/6e/7 (802.11 n/ac/ax/be) :** On vous partage  [la bible](https://www.wiisfi.com/)  qui explique les différences entre les diverses générations de Wi-Fi (Wi-Fi 4/5/6/6E/7) et leurs capacités. C'est une superbe documentation, qui fourmille d'exemples et qui reste très accessible.\r
\r
🎯 **Securing Node.js in production :** Un chouette article qui résume [les bonnes pratiques à associer à Node.js](https://medium.com/@modywmbadr/securing-node-js-in-production-f11822ab20b7). On y parlera gestion des dépendances, sécurisation des headers, protection contre les attaques par injection et on conclura avec l'utilisation de linters pour augmenter la sécurité.  \r
\r
🚀  **Docker Swarm vs Kubernetes (feature and use case comparison) :** Une comparaison entre K8s et Swarm, rédigée par les coyotes de chez Spacelift, et qui vous aidera à répondre à l'angoissante question :  [dois-je installer Kubernetes en production ?](https://spacelift.io/blog/docker-swarm-vs-kubernetes) (et dont la réponse doit toujours être non, jamais, ho regardez là-bas un écureuil).\r
\r
## OpenTofu 1.8.0 is out with Early Evaluation, Provider Mocking, and a Coder-Friendly Future\r
\r
![](https://storage.mlcdn.com/account_image/325165/v3eToAFLmjvaHMpoXqLeDDzWxpMO3MhJNa0MWAVR.png)\r
\r
Merci à Mathias M. qui nous partage un post qui fait rudement plaisir sur notre chouchou, OpenTofu. On y apprend que  [la version 1.8 introduit des fonctionnalités très attendues](https://opentofu.org/blog/opentofu-1-8-0/), comme une bonne gestion des variables (pas sec mais c'est en bonne voie), la possibilité d'utiliser des extensions .tofu  [et tout un tas d'autres machins](https://opentofu.org/docs/intro/whats-new/). C'est les mecs de chez Hashicorp qui doivent commencer à tirer la gueule.  \r
\r
[Accéder au lien ->](https://opentofu.org/blog/opentofu-1-8-0/)`,P=`---\r
layout: post\r
title: Newsletter du 02 Septembre 2024\r
subtitle: La newsletter préférée des admins depuis 1870			\r
thumbnail-img: /assets/img/Alain2-Anssi.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Kubernetes, Isaiah, Traefik, Nginx, SSH, DevSecOps]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
C'est l'occasion de penser à tous les élèves qui vont rentrer en école d'ingénieur, soit environ 250.000, avec 30% de filles seulement. De là à penser que les femmes sont plus malignes que les hommes et qu'elles comprennent bien mieux que nous l'inanité de nos métiers, il n'y a qu'un pas, que je ne franchirai pas. Le seul pas que je franchirais bien volontiers par contre, c'est que 30% de filles en école d'ingénieur, c'est le reflet d'une société qui fonctionne mal et qui a besoin de plus d'inclusion et de plus de bienveillance, et que c'est nous qui avons tous les leviers en main.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Isaiah :** On adore  [LazyDocker](https://github.com/jesseduffield/lazydocker), mais on est en train d'adopter  [Isaiah](https://github.com/will-moss/isaiah), une interface web qui permet de gérer facilement toutes nos ressources Docker. C'est fluide, léger, et ça fait parfaitement le job, on vous conseille d'essayer entre deux git blame rageurs.\r
\r
🎁 **Traefik versus Nginx, comparison and practical guide :** À votre avis, c'est qui le plus fort,  [l'hippopotame ou l'éléphant](https://cast.ai/blog/traefik-vs-nginx)  ? Non parce que, l'hippopotame c'est quand même très très fort.  \r
\r
💝 **How SSH secures your connection:** On est tombé sur ce chouette billet de blog  [qui explique comment SSH sécurise les connexions](https://noratrieb.dev/blog/posts/ssh-security/)  à distance via le chiffrement, l'authentification et la protection contre les attaques. Le post aborde des concepts comme l'échange de clés Diffie-Hellman, tout en partageant quelques méthodes pour prévenir les attaques et garantir l'intégrité des échanges.\r
\r
💊 **A visual guide to SSH tunnels, local and remote port forwarding:** Chez nous, à RudeOps, le SSH c'est notre passion, on vous partage donc très rapidement hop hop hop un super guide qui vous permet de  [tout comprendre sur les tunnels SSH](https://iximiuz.com/en/posts/ssh-tunnels/)  et comment les mettre en place.\r
\r
🥇  **Creating dynamics variables in Bash :** L'arme noble d'une époque civilisée d'après Obiwan Kenobi, mais on va pas se mentir, Bash (qui va sur ses 35 ans) rend toujours autant service malgré ses limitations. On est tombé sur un post sympa qui  [nous permet d'éviter les if à rallonge](https://nickjanetakis.com/blog/creating-dynamic-variables-in-bash)  à travers quelques exemples à portée de tous.\r
\r
😱 **Kubernetes, the art of zero-downtime deployment :** Si vous pensez que  [Blue/Green ou Canary release](https://itnext.io/kubernetes-the-art-of-zero-downtime-deployments-fa92c8ec5646)  sont des noms de cocktail, lisez ce post, tout en gardant bien à l'esprit que K8s est le quatrième cavalier de l'apocalypse selon Saint-Jean.\r
\r
🏆  **What is DevSecOps and why is it essential for secure software delivery :** Un article rédigé par les coyotes de chez The Hacker news sur nos  [vigiles de supermarché préférés](https://thehackernews.com/2024/06/what-is-devsecops-and-why-is-it.html)  dont le rôle est encore trop minimisé.\r
\r
## L'ANSSI a enregistré plus de 140 cyberattaques durant les JO 2024.\r
\r
![](https://storage.mlcdn.com/account_image/325165/2NCTVCVL5QlrkUg4HinFYnPEIVoInxMepgq9Eozh.png)\r
\r
Quelques news de notre gendarme préféré transmises par notre ami JMB qui doit être notre plus vieux lecteur (?). Parce que oui, ça bouge à l'ANSSI, même si l'organisation se fait très discrète et communique de manière mesurée sur ses actions. On peut cependant évoquer quelques publications qui devraient faire écho en vous, comme leurs recommandations relatives aux architectures des services DNS, leurs recommandations pour l'hébergement des SI sensibles dans le cloud (où on parlera encore de SecNumCloud) et un Cyberdico plus dispensable.  \r
\r
[](https://www.figma.com/fr-fr/blog/how-figmas-databases-team-lived-to-tell-the-scale/)[Accéder au lien ->](https://cyber.gouv.fr/publications)`,D=`---\r
layout: post\r
title: Newsletter du 09 Septembre 2024\r
subtitle: Prenez un chewing gum Emile			\r
thumbnail-img: /assets/img/chariot.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, CI-CD, CORS, Incus, Curl, Helm, Docker]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
On se rend surtout compte que passer ses applications sous licence open-source est nécessaire pour des raisons business. Dernier exemple en date, avec Elasticsearch qui s'oriente vers une licence AGPL dans les prochaines semaines, tout ça parce que le fork Opensearch (lancé par AWS) commençait à leur faire mal. Même si on aurait préféré un passage sous licence APACHE 2.0, c'est déjà ça de pris. Vous la sentez cette petite pression du fork qui pèse sur les éditeurs ? Est-ce que c'est sain ? Est-ce la solution ? Nous on a tendance à penser que oui, et que l'open-source est de toute façon essentielle pour un business pérenne.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🦊 **Introducing CI/CD Steps, a programming language for DevSecOps automation :** On était passé un peu à côté, mais les cowboys de chez Gitlab ont introduit  [un nouveau langage expérimental](https://about.gitlab.com/blog/2024/08/06/introducing-ci-cd-steps-a-programming-language-for-devsecops-automation/)  qui vise à simplifier la création de workflows en permettant la modularité et la réutilisation des jobs CI. Ça a l'air bien foutu, simple, et Gitlab précise qu'ils visent différents ajouts de fonctionnalités dans les mois qui viennent.\r
\r
💀 **CORS is stupid :** [Grand CORS malade](https://kevincox.ca/2024/08/24/cors/).\r
\r
🥇  **Linux containers, Incus :** Aujourd'hui on vous parle un peu de  [Incus, un projet libre de gestion de conteneurs](https://linuxcontainers.org/incus/)  encore trop méconnu. En gros c'est un fork de LXD qui propose une solution avancée de virtualisation légère, permettant de gérer des conteneurs système ou applicatifs. Pour les curieux on peut tester quelques fonctionnalités en ligne avant de faire le grand saut.\r
\r
😱 **Kube-state-metrics, your complete guide to simplifying Kubernetes observability :** Kube-state-metrics est un  [add-on open-source pour K8s qui produit des métriques](https://last9.io/blog/kube-state-metrics/)  (sur vos pods, vos nodes, etc) en allant taper les APIs de votre serveur. Vous êtes grand et responsable, donc vous installez ça comme vous voulez, via Helm, des manifestes YAML, ou en construisant tout depuis les sources comme un vrai bonhomme. Et ouais, il y a bien sûr une intégration avec Prometheus. Le tuto comprend pas mal de bonnes pratiques qui vont de la configuration de permissions RBAC à l'activation de la haute dispo et l'utilisation de métriques personnalisées pour une meilleure observabilité.\r
\r
👔 **CTO to CTPO, navigating the dual role in tech leadership :** L'article des punks de chez The New Stack aborde  [la transition du rôle de Chief Technology Officer (CTO) vers celui de Chief Technology and Product Officer (CTPO)](https://thenewstack.io/cto-to-ctpo-navigating-the-dual-role-in-tech-leadership/)  à travers un retour d'expérience sympa. Le post détaille les défis et les opportunités à combiner des responsabilités à la fois pour la technologie et le développement produit au sein de la direction technique.  \r
\r
🚀  **Using CURL to create a telnet connection :** Parce que après tout, pourquoi pas hein.  [Ne jugeons pas](https://nickjanetakis.com/blog/using-curl-to-create-a-telnet-connection), et puis c'est écrit par notre pote Nick Janetakis alors bon, c'est de la pige facile et on ne va pas se priver.\r
\r
🏆  **Finally, a viable Helm replacement :** Et c'est  [une putain de bonne nouvelle](https://itnext.io/finally-a-viable-helm-replacement-388d538f9e1f)  comme on dit à Montargis, ce post vous explique pourquoi et nous propose enfin une alternative qui a l'air viable, avec Werf qui est depuis quelques mois en version 2.0 stable. On offre une bière à celui qui nous trouve ce que signifie Werf au passage.\r
\r
\r
## Introducing Docker Build Checks : Optimise dockerfiles with best practices\r
\r
![](https://storage.mlcdn.com/account_image/325165/tU1DmVmbEeJagaeS9xS6IxFoipD1OvbUG7jvwcii.png)\r
\r
Merci à Nathalie D. qui nous partage un post tiré du blog de Docker et qui nous apprend la sortie de la première release de Docker Checks, une nouvelle fonctionnalité qui permet d'optimiser nos Dockerfiles en suivant les bonnes pratiques associées. Ces checks identifient et signalent les problèmes potentiels lors des builds Docker, et c'est intégré nativement dans Docker Desktop et ça, ça nous donne envie de chanter la vie !  \r
\r
[Accéder au lien ->](https://www.docker.com/blog/introducing-docker-build-checks/)`,I=`---\r
layout: post\r
title: Newsletter du 16 Septembre 2024\r
subtitle: Est-ce que c'est toi John Wayne ? Ou est-ce que c'est moi ?			\r
thumbnail-img: /assets/img/Charlie-clown.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, PromQL, CVEs, IAC, Zsh, Git, Worktrees]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
## Aucune idée d'édito sérieux alors j'ai mis la météo du jour.\r
\r
Une perturbation très atténuée rentre par les côtes de la Manche, apportant beaucoup de nuages et quelques petites averses sur les côtes dans l'après-midi. En marge de la tempête Boris, des nuages venus d'Allemagne envahissent le Nord-Est et viennent fusionner avec les nuages venant de manche en fin de journée. Plus au sud le ciel est variable l'après-midi jusqu'au Massif central. Quelques averses parfois orageuses sont possibles l'après-midi sur les Alpes du sud et le relief corse. Ailleurs, on garde des conditions ensoleillées et moins fraîches le matin. Le mistral souffle jusqu'à 80 à 90 km/h et la tramontane jusqu'à 70/80 km/h ainsi que sur les crêtes des Pyrénées Orientales. Les minimales vont de 1 à 6 degrés dans le Massif central, 10 à 15 degrés le long de la manche, 13 à 17 autour de la Méditerranée et 5 à 9 degrés partout ailleurs. Les maximales vont de 18 à 24 degrés, 25 à 28 en Méditerranée.  \r
  \r
Météo France\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **PromQL cheat sheet, must know PromQL queries :** Que celui qui n'a jamais galéré pour créer son dashboard avec Prometheus me jette le premier clavier, du coup on est bien content de vous partager [ce petit guide qui revient sur quelques fondamentaux](https://last9.io/blog/promql-cheat-sheet/)  nécessaires à une bonne maîtrise de cet outil aussi puissant qu'obscur quand on débute.\r
\r
💝 **How to manage the rising tide of CVEs :** Les vulnérabilités critiques (MOVEit, Log4Shell et Citrix Bleed par exemple) ne représentent qu'une fraction des CVE recensées en 2023, et [le nombre de vulnérabilités augmente chaque année, atteignant presque 35 000 en 2024](https://www.cybersecuritydive.com/news/cyber-security-vulnerability-management-CVE/726710/), ce qui représente à peu de choses près le nombre d'abonnés sur RudeOps. Malgré des programmes de gestion des vulnérabilités de plus en plus pointus, beaucoup d'organisations peinent à identifier et prioriser les menaces critiques. Un chouette article qui reflète bien les challenges actuels et à venir.\r
\r
🥇  **Best pratices for IaC and Spacelift :** Un zoli guide des cowboys de chez Spacelift que vous pouvez adapter n'importe où. On y commence avec  [quelques conseils sur la stratégie](https://spacelift.io/blog/best-practices-for-iac-and-spacelift)  (monorepo versus polyrepo) et on continue avec des principes d'organisation très généraux. Sympa si vous commencez à avoir quelques réflexions sur le sujet.\r
\r
😱 **Don't get caught in the DevOps loop :** Un autre article sympa des mecs de chez devops.com, qui nous explique que, bien que [la boucle DevOps vise à standardiser le processus de développement logiciel](https://devops.com/dont-get-caught-in-the-devops-loop/), elle n'est pas toujours suivie rigoureusement, comme c'est bizarre. On y apprend que le véritable défi est de gérer les frictions dans les pipelines et de coordonner les équipes travaillant à des rythmes différents. TLDR : Les devs nous font perdre notre temps comme d'habitude.\r
\r
🏹 **The Zsh shell tricks I wish I'd know earlier :** Il y a deux catégories de personnes dans le monde,  [ceux qui utilisent Zsh](https://itnext.io/the-zsh-shell-tricks-i-wish-id-known-earlier-ae99e91c53c2), et les autres, qui brûleront à jamais dans les flammes de l'enfer consumés par la honte.  \r
\r
🏆  **Boost productivity with Git Worktrees :** Vous aimez vous compliquer la vie et aimez briller en soirée ?  [Utilisez Git Worktrees](https://blog.flotes.app/posts/git-worktrees), mais ne venez pas vous plaindre ensuite que vous n'y comprenez plus rien à ce foutoir.\r
\r
## Les livres qu'on a lus et qu'on vous conseille\r
\r
![](https://storage.mlcdn.com/account_image/325165/zpSj2EIqMq7ATnfxVwRWGTDQxOEFS3WLCuo1vTtW.png)\r
\r
Ce weekend, on a mis à jour notre liste de livres à livre impérativement si vous aimez votre métier, ne nous remerciez pas c'est cadeau.  \r
\r
[Accéder au lien ->](https://www.rudeops.com/devops-books/)`,T=`---\r
layout: post\r
title: Newsletter du 07 Octobre 2024\r
subtitle: Il ne peut plus rien nous arriver d'affreux maintenant			\r
thumbnail-img: /assets/img/Barbara loupe.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Hacking, S3, Observability, Docker, Zsh]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Mine de rien, la France possède une longue tradition de soutien aux logiciels libres, notamment à travers des initiatives comme l'April, Framasoft ou encore les nombreux projets soutenus par le Conseil National du Logiciel Libre. Les solutions open source offrent aux entreprises françaises un avantage compétitif : la flexibilité et l'indépendance technologique nécessaires pour innover, tout en évitant les risques inhérents aux technologies propriétaires (coucou Microsoft) souvent fermées ou hors de contrôle (coucou Crowdstrike).\r
\r
Le mouvement open source ne doit plus être perçu uniquement comme un choix économique ou technique, il faut qu'il incarne un véritable mouvement de souveraineté numérique qui permettrait à la France (et à l'Europe) de redevenir maîtresses de leurs technologies.\r
\r
Avant de proposer un programme ambitieux sur l'IA, qui est nécessaire, assurons-nous de le construire sur des bases plus saines qu'elles ne le sont aujourd'hui, et assurons-nous surtout de devenir les acteurs de cette prise de conscience.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
💝 **Attacking Unix Systems via CUPS, part one :** On vous partage un excellent article, tiré du blog du non moins excellent evilsocket, qui nous résume  [l'impact des vulnérabilités dans CUPS](https://www.evilsocket.net/2024/09/26/Attacking-UNIX-systems-via-CUPS-Part-I/)  (Common UNIX Printing System) qui font beaucoup parler d'elles ces derniers jours, notamment via le composant cups-browsed. On fait un point sur plusieurs vulnérabilités critiques ([CVE-2024-47176](https://access.redhat.com/security/cve/cve-2024-47176),  [CVE-2024-47076](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2024-ALE-012/),  [CVE-2024-47175](https://ubuntu.com/security/CVE-2024-47175)) qui permettent à un attaquant de modifier les URLs d'imprimantes à distance, entraînant donc l'exécution arbitraire de commandes.\r
\r
👾 **Hacking misconfigured AWS S3 buckets, a complete guide :** On est tombé sur cet article sympa des cowboys de chez Intigriti qui vous décrit, avec moultes exemples très clairs,  [comment trouver et identifier des buckets vulnérables](https://blog.intigriti.com/hacking-tools/hacking-misconfigured-aws-s3-buckets-a-complete-guide). Idéal pour se faire une checklist de tout ce qui ne doit pas être négligé dans la gestion de vos buckets (papa si tu me lis ça n'a rien à voir avec les buckets de chez KFC merci).\r
\r
🔌  **Why TCP needs 3 handshakes :** Face à cette angoissante question, les coyotes de chez pixelstech se sont retroussés les manches et ont pondu un article très détaillé sur le processus impliquant  [l'échange de paquets SYN, SYN-ACK et ACK](https://www.pixelstech.net/article/1727412048-Why-TCP-needs-3-handshakes), avec en plus un super diagramme (à destination des plus détraqués) qui illustre les différents états des connexions TCP.\r
\r
**🔍 The 4 evolutions of your observability journey :** Un chouette article des mecs de chez The New Stack qu'on salue (genre ils nous lisent) et qui décrit  [quatre phases clés dans l'évolution de l'observabilité](https://thenewstack.io/the-4-evolutions-of-your-observability-journey/)  d'une organisation. On commence par la surveillance basique des systèmes, puis on évolue vers des capacités de monitoring avancées qui permettent une meilleure compréhension des systèmes complexes. L'observabilité devient ensuite proactive, avec des systèmes capables d'anticiper les problèmes avant qu'ils n'impactent les utilisateurs, ce qui, il faut bien le reconnaître, fait partie de nos fantasmes les plus débridés.\r
\r
**🐳 5 Docker best practices I wish I knew when I started :** Utiliser des builds multi-stage, simple, utiliser son fichier .dockerignore, basique, utiliser docker-compose, simple, faire attention au tag latest, basique,  [vous n'avez pas les bases](https://devdojo.com/bobbyiliev/5-docker-best-practices-i-wish-i-knew-when-i-started)  (oui bon j'écoutais du Orelsan quand j'écrivais cette news, bref vous voyez l'idée).  \r
\r
🚀  **DnsTrace :** L'outil sympa du jour, c'est  [DnsTrace](https://github.com/furkanonder/DnsTrace), qui vous permet d'identifier les requêtes DNS réalisées par vos process, parfait pour vos debugs, votre sécurité ou vos soirées en amoureux.\r
\r
**🐧 Terminal colours are tricky :** Et c'est Julia Evans, dont nous sommes des fans absolus, qui le dit. Dans son post, elle nous partage pas mal de  [tips liés à la configuration des couleurs dans les terminaux](https://jvns.ca/blog/2024/10/01/terminal-colours/), les limitations, et tout un tas de conseils pratiques pour obtenir le terminal aux couleurs chatoyantes dont tout le monde sera jaloux.\r
\r
**🥐 Maîtrisez Zsh :** Véritable fierté française, c'est à Stéphane Robert qu'on doit ce guide archi-complet dédié à  [notre shell Unix favori](https://blog.stephane-robert.info/docs/admin-serveurs/linux/shells-linux/zsh/) qu'on vous invite à dévorer (le guide, pas Stéphane Robert).\r
\r
## Kali Linux 2024.3 launches with 11 new hacking tools and enhanced Raspberry Pi support\r
\r
![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)\r
\r
Merci à François C., ingénieur dans une ESN sur la Côte d'Azur, qui nous rappelle que la dernière version de notre distrib préférée est sortie ! Parmi les nouveautés, on trouve des outils comme graudit pour l'audit de code source, gsocket pour la communication inter-réseaux, et sprayhound pour l'attaque par "password spraying". La mise à jour intègre également le noyau Linux 6.6 LTS pour le Raspberry Pi 5 et revient au noyau Linux 6.1 LTS pour améliorer la compatibilité avec le Pinebook. Des améliorations pour les tests de pénétration mobile et les systèmes basés sur ARM sont également incluses. Encore merci François pour le partage !  \r
\r
[Accéder au lien ->](https://alternativeto.net/news/2024/9/kali-linux-2024-3-launches-with-11-new-hacking-tools-and-enhanced-raspberry-pi-support/)`,_=`---\r
layout: post\r
title: Newsletter du 21 Octobre 2024\r
subtitle: La newsletter de l'austérité			\r
thumbnail-img: /assets/img/Alain-destruction.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Servers, Vault, Zendesk, Docker, Git, Talos, Python]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Certainement le pire jour de la semaine, on espère néanmoins que vous prendrez beaucoup de plaisir à parcourir notre veille techlectique (oui c'est un nouveau mot) qui reflète ce qui nous a le plus marqué durant ces derniers jours. Bonne semaine à tous !  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🚩 Sad servers, troubleshoot and make sad servers happy :** Vous êtes un vrai bonhomme comme on dit à Montargis ? Vous allez donc adorer ce site où vous pourrez  [tester vos skills en troubleshooting](https://sadservers.com/) (avec des morceaux de bases de données, Docker, K8s, etc...) en mode Capture the Flag. Vous y trouverez une jolie collection de scénarios avec une description du problème à résoudre et un test pour vérifier si la solution fonctionne. Les serveurs sont créés à la demande, et vous accédez à une session SSH via une fenêtre de votre navigateur.  \r
\r
☸️ **How to manage secrets with Azure Key Vault in Kubernetes :** Un chouette article écrit par les outlaws de chez Devtron, et qui nous explique  [comment gérer des secrets dans K8s en utilisant Azure Key Vault](https://devtron.ai/blog/how-to-manage-secrets-with-azure-key-vault-in-kubernetes/), la solution cloud de Microsoft pour stocker et protéger des données sensibles, comme des mots de passe, des clés d'API ou les sms de votre ex.  \r
\r
🐳 **Docker Compose logs - guide to monitoring & debugging :** On a trouvé ce guide qui vous prend par la main et vous explique comment utiliser  [docker compose logs](https://spacelift.io/blog/docker-compose-logs). Idéal si vous débutez.\r
\r
🛠️ **Git-absorb :** Votre chambre est un foutoir pas possible à l'instar de votre code ?  [Essayez Git-Absorb](https://github.com/tummychow/git-absorb)  qui identifie automatiquement les modifications non validées et les incorpore dans les commits précédents d'une branche Git. Pour votre chambre on n'a hélas encore rien trouvé.\r
\r
🏆  **How I use Git :** Et on continue sur Git avec ce chouette retour d'expérience qui nous détaille  [une approche personnelle de l'utilisation de Git](https://registerspill.thorstenball.com/p/how-i-use-git), développée au cours de 12 ans d'expérience avec de petites équipes d'ingés. L'auteur y aborde l'importance d'utiliser l'interface en ligne de commande, l'utilisation d'alias, des commits fréquents, et l'importance d'une bonne gestion des pull requests.\r
\r
**🖥️ Talos Linux :** On pense pas vous avoir déjà parlé de Talos, une distribution Linux conçue [spécifiquement pour les environnements K8s](https://www.talos.dev/). La distrib prend en charge diverses plateformes, y compris dans le cloud, les serveurs physiques et la virtualisation. Le système est entièrement géré via API, supprimant ainsi le besoin d'accès via SSH.\r
\r
**🐍 SSH scripting with Fabric and Python :** On aime beaucoup Fabric, alors on vous partage ce tuto très sympa qui nous explique comment utiliser le [module Python Fabric](https://www.blog.pythonlibrary.org/2024/10/16/ssh-scripting-with-fabric-and-python/)  pour exécuter des commandes SSH à distance et transférer des fichiers entre machines.\r
\r
## How Zendesk intentionally left a backdoor in hundreds of Fortune 500\r
\r
![](https://storage.mlcdn.com/account_image/325165/3YMNSIHlg60k8xuf6PGfU7xj0EXfMc0y4Y5JzfR8.png)\r
\r
L'histoire du jour nous est partagée par Marc D., sysadmin dans une grosse boîte de retail en France, et elle est passionnante à plus d'un titre : Un gosse de 15 ans a découvert une faille critique dans Zendesk, qui permettait de manipuler les e-mails et de contourner les accès à des tickets de support. Après avoir été initialement rejetée par Zendesk, la faille a été signalée aux entreprises concernées, ce qui a quand même rapporté au chercheur plus de 50 000 dollars de récompenses en bug bounty. Zendesk a finalement corrigé la faille, mais sans offrir de compensation au jeune white hat.  \r
\r
[Accéder au lien ->](https://gist.github.com/hackermondev/68ec8ed145fcee49d2f5e2b9d2cf2e52)`,M=`---\r
layout: post\r
title: Newsletter du 04 Novembre 2024\r
subtitle: Donne-moi ton code baby, ton flow baby			\r
thumbnail-img: /assets/img/Barbara tronconeuse.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, AWS, Uber, eBPF, Docker, Git, Curl]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Comme les décideurs et les architectes de demain, vous avez le pouvoir d’influencer la stabilité, l’innovation et même l’éthique de vos systèmes. Alors, en explorant les sujets de notre veille techno, pensez à l'impact réel de vos choix, et à cette ambition partagée de créer un monde, numérique ou non, plus robuste et plus durable.  \r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**👨🏻‍🏫 Five lessons from a minor production incident :** On vous partage ce  [chouette retour d'incident](https://lucvandonkersgoed.com/2024/10/17/five-lessons-from-a-minor-production-incident-copy/) où un email quotidien AWS News n’a pas été envoyé à cause d’une surcharge de messages dans le système SQS. Le mec qui écrit ce RETEX en tire cinq leçons : investir tôt dans de l'observabilité, maintenir des tests pertinents et une infra logicielle cohérente, appliquer le principe YAGNI (You Aren't Gonna Need It), et tracer les données, la base quoi.\r
\r
🚕 **How Uber reduced their log size by 99% :** Joli post dans lequel on apprend que [Uber a réduit la taille de ses journaux de logs de 99 %](https://newsletter.betterstack.com/p/how-uber-reduced-their-log-size-by) en utilisant un outil de traitement compressé de logs (CLP). En divisant le processus de compression en deux phases, Uber a d'abord encodé et compressé les logs avant de les stocker dans HDFS, puis appliqué des étapes de déduplication et d'optimisation (non fiscale cette fois), ce qui leur a permis de passer de 5,38 pétaoctets à seulement 31,4 téraoctets, prolongeant leur rétention de logs de trois jours à un mois.\r
\r
**🚀 The past, present and future of eBPF and its path to revolutionizing systems :** Un article fourni qui revient  [sur les dix ans d’évolution de eBPF](https://eunomia.dev/en/blogs/ten-years/)  (Extended Berkeley Packet Filter), une technologie initialement conçue pour le filtrage de paquets réseau, qui est devenue incontournable pour la sécurité, l'observabilité et la performance des systèmes. On y explore les avancées comme XDP pour le haut débit, BTF pour la portabilité, et l’introduction de nouvelles fonctionnalités (kfuncs, bpf_arena) qui promettent d’étendre encore ses capacités pour les amener tous et dans les ténèbres les lier.\r
\r
⚡ **Git branching strategies :** Un zoli [guide qui explore les stratégies](https://newsletter.techworld-with-milan.com/p/git-branching-strategies)  populaires comme le Feature Branching, GitFlow, GitHub Flow, GitLab Flow et le Trunk-Based Development (qui peut nous prendre au sérieux avec des noms pareils ?), et qui détaille les étapes de mise en œuvre, les avantages et les cas d'utilisation optimaux.\r
\r
💖 **Curl source code age :** Daniel Stenberg, le papa de Curl qu'on vénère, s'ennuyait et a décidé de se transformer en archéologue et d'[explorer l'âge du code de Curl](https://daniel.haxx.se/blog/2024/10/31/curl-source-code-age/). Il a donc créé un script qui utilise Git pour déterminer la date de chaque ligne de code dans le dépôt de Curl puis a visualisé les données avec gnuplot. Ses conclusions : nous ne déchiffrons pas de cartes pour exhumer un trésor, et un X n'a jamais, jamais marqué son emplacement.  \r
\r
**🐳 Awesome Compose :** Une  [liste d'exemples Docker Compose](https://github.com/docker/awesome-compose)  qui offrent un bon point de départ pour intégrer et gérer différents services sur des envs de dev.\r
\r
## From YAML chaos to Kubernetes zen\r
\r
![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)\r
\r
Merci à Patrick D. qui nous fait découvrir Pepr, un outil censé simplifier la gestion de Kubernetes avec des modules TypeScript faciles à maintenir, et qui fournit des capacités de journalisation, de surveillance, tout en appliquant les bonnes pratiques de sécurité. Merci Patrick !  \r
\r
[Accéder au lien ->](https://itnext.io/from-yaml-chaos-to-kubernetes-zen-5b9e8242a5cb)`,E=`---\r
layout: post\r
title: Newsletter du 25 Novembre 2024\r
subtitle: Use the Devops Luke			\r
thumbnail-img: /assets/img/Lego.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Vim, Docker, Ghostty, Linux, Git, OneFetch]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Parce qu'être le owner d'une newsletter permet bien des choses, je tenais à adresser mes plus vives excuses à Ypno, Jojo, Clamiral et Skippo de ne pas être venu à la soirée de la semaine dernière parce qu'il pleuvait et mon chien avait mangé mon téléphone donc je ne me souvenais plus de la date exacte de notre rdv et j'avais un problème de train. Voilà les copains, bises.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🖥️ **On learning Vim :** Le monde se divise en deux catégories de personnes : ceux qui utilisent Vim et les gens normaux. Si vous êtes un vrai punk et que vous voulez vous initier à Vim, on vous encourage à lire ce post d'un énième détraqué qui nous partage  [son expérience d'apprentissage de Vim](https://dev.to/sindbad_x/on-learning-vim-2nld), sans doute l'éditeur de texte le plus puissant sur le marché, mais réputé aussi difficile à maîtriser qu'un Donald Trump à la Maison Blanche.\r
\r
**🚢 Advanced Docker Quiz, docker commands, networking and container management** **:** Pour tous les fans de Question pour un champion et Julien Lepers qu'on salue au passage, on vous a trouvé ce [quiz axé sur Docker](https://quizapi.io/predefined-quizzes/advanced-docker-quiz-docker-commands-networking-and-container-management), idéal pour animer une soirée entre amis ou un mariage.\r
\r
**📟 Ghostty 1.0 is coming :** Notre noble quête du terminal idéal risque de s'achever en Décembre, avec la sortie en  [version finale de Ghostty](https://mitchellh.com/writing/ghostty-is-coming), qui met l'accent sur la rapidité, une multitude de fonctionnalités avancées et une intégration native aux plateformes Linux et MacOS.\r
\r
☸️ **I didn't need Kubernetes, and you probably don't either :** Kubernetes fait des milliers de victimes chaque jour dans le monde, et la dernière en date s'appelle Ben Houston, qui nous a rédigé  [un retour d'expérience vraiment pertinent](https://benhouston3d.com/blog/why-i-left-kubernetes-for-google-cloud-run) dans lequel il souligne que Kubernetes n'est pas approprié pour la plupart des projets, et que son utilisation peut même entraîner un lock technologique et la perte de l'être aimé.\r
\r
🐧 **A mental model for Linux file, hard and soft link :** Un [joli blog post](https://bhoot.dev/2024/on-linux-file-and-links/)  qui nous propose une compréhension simplifiée des inodes, des liens physiques et symboliques dans Linux.  \r
\r
**👨🏻‍💻 Hackers steal 15.000 cloud credentials from exposed git config files :** "EmeraldWhale" n'est pas le nom du prochain James Bond mais le nom d'une opération de grande envergure visant à exploiter des fichiers de configuration git exposés, et qui a permis de dérober  [plus de 15 000 identifiants de comptes cloud](https://www.bleepingcomputer.com/news/security/hackers-steal-15-000-cloud-credentials-from-exposed-git-config-files/)  provenant de milliers de repos privés.\r
\r
🏆  **How to see beautiful git project stats in your terminal :** On vous présente [Onefetch, un outil qui affiche tout un tas de stats](https://www.howtogeek.com/how-to-see-beautiful-git-project-stats-in-your-terminal/)  de vos projets Git directement dans le terminal en ASCII art, ça fonctionne nickel sur Linux et MacOS, et franchement ça tabasse comme on dit à Montargis.\r
\r
## Docker for beginners\r
\r
![](https://storage.mlcdn.com/account_image/325165/EipbH28lOYLYtVLmlTenhkkTofbQIzZ5m8EnfOSC.png)\r
\r
Merci à Jean-Luc, SRE dans une boîte tech en IdF, qui nous partage ce qui est selon lui "la meilleure porte d'entrée pour s'initier à Docker et apprendre à construire et déployer ses applications dans le cloud ou pas". Et forcément l'ami Jean-Luc ne se trompe pas, le tuto est relativement complet et vous accompagne pas à pas de manière très didactique sur tout un tas d'étapes du build au launch de vos applications.  \r
\r
[Accéder au lien ->](https://docker-curriculum.com/)`,G=`---\r
layout: post\r
title: Newsletter du 16 Décembre 2024\r
subtitle: All I want for Christmas is tech			\r
thumbnail-img: /assets/img/sapin de noel.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, Prometheus, Gitlab, Github, Grafana, K8s]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Voici la dernière newsletter de 2024, on reviendra bien sûr en 2025 car on ne sait pas trop quoi faire de notre temps libre alors il faut bien s'occuper. En tout cas, ceux qui peuvent, on compte sur vous pour déconnecter un max et vous recentrer sur ce qui compte le plus dans une vie : la famille, les amis et le champagne !\r
\r
Bonnes fêtes de fin d'années à tous, très sincèrement.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
😱 **Over 300K Prometheus instances exposed, credentials and API keys leaked online :** Des chercheurs en cybersécurité ont révélé que des centaines de milliers de serveurs (?!) utilisant Prometheus sont vulnérables à des leaks et à des attaques par déni de service ou d'exécution de code à distance.  [Selon les mecs de Aqua Security](https://thehackernews.com/2024/12/296000-prometheus-instances-exposed.html), environ 296 000 instances de Prometheus Node Exporter et 40 300 serveurs Prometheus sont accessibles publiquement sur Internet, exposant potentiellement des informations comme des identifiants, des passwords, des tokens d'authentification et des photos de chat.\r
\r
🦊 **How to deploy a PHP app using Gitlab's cloud run integration :** Les coyotes de chez Gitlab nous partagent un guide en plusieurs étapes détaillant le  [déploiement d'une application PHP sur Google Cloud Run](https://about.gitlab.com/blog/2024/12/10/how-to-deploy-a-php-app-using-gitlabs-cloud-run-integration/)  en utilisant la CI de Gitlab.\r
\r
**🔌 Stupid network tricks using socat :** Contraction de  _socket_ et de  _cat_,  [socat est le couteau suisse parfait](https://spin.atomicobject.com/socat-stupid-network-tricks/)  pour vous accompagner en randonnée en Corse ou à Koh-Lanta dans l'équipe des jaunes. Bien plus flexible que netcat, c'est socat qu'on privilégie depuis quelques années, et notre décision est irrévocable.\r
\r
**🛠️ Git revert :** On vous partage un très chouette article des intellos de chez Alchemists.io qui nous expliquent par l'exemple  [la différence entre un git revert et un git rebase](https://alchemists.io/articles/git_revert).\r
\r
</> **Run database in Github Actions, persisting data to S3, and access it publicly :** On continue avec un article qui nous explique comment utiliser  [GitHub Actions pour lancer une base de données](https://wesql.io/blog/use-github-actions-as-database)  à la demande, en stockant des données de manière persistante sur S3 ou un autre service compatible, et en y accédant via un tunnel sécurisé. Idéal pour tester un prototype ou faire de la QA rapidement.  \r
\r
🚀  **Grafana and Docker, a simple way to monitor everything :** Un post sympa qui explore comment  [l'utilisation conjointe de Grafana et Docker](https://last9.io/blog/grafana-and-docker/)  facilite la surveillance de nos systèmes. L'article détaille les concepts clés de Docker et fournit des instructions step by step pour installer Grafana dans un conteneur Docker, parfait pour ceux qui débutent.\r
\r
**☸️ How Kubernetes requests and limits really work :** Imaginez Kubernetes comme un  [chef d'orchestre à moitié dément](https://thenewstack.io/how-kubernetes-requests-and-limits-really-work/), assignant à chaque application (les musicos) une quantité précise de ressources (CPU, mémoire) pour éviter les fausses notes. Les requests elles, garantissent une certaine puissance, tandis que les limits fixent des plafonds à ne pas dépasser. C'est pourtant pas compliqué.\r
\r
**🐳 Container hardening, securing docker containers :** Un chouette article qui aborde les  [bonnes pratiques de sécurité](https://systemweakness.com/container-hardening-999acb9d2692) comme la prévention des conteneurs avec privilèges, la protection du démon Docker, le contrôle de l'allocation des ressources et l'utilisation d'outils de sécurité comme Seccomp et AppArmor dont on ne pourrait plus se passer.\r
\r
## Avoid SELECT * even on a single-column table\r
\r
![](https://storage.mlcdn.com/account_image/325165/ZQnyEP9pdesJ7X8SGo8b0QWZiTXeXxHTpzoVkCAT.png)\r
\r
Merci à Fabrice L, DBA dans une boîte française liée à l'état, qui nous a envoyé un post un peu provoc mais super intéressant sur un mec traumatisé par une expérience vécue en 2012, où une application côté backend est soudainement devenue aussi lente qu'un parisien en province. Après investigation, il s'est avéré que l'utilisation de  \`SELECT *\`  sur une table à laquelle des colonnes BLOB avaient été ajoutées entraînait le chargement inutile de données volumineuses, causant une surcharge du réseau et une désérialisation coûteuse.  \r
\r
[Accéder au lien ->](https://medium.com/@hnasr/avoid-select-even-on-a-single-column-tables-d6deed7b4aee)`,R=`---\r
layout: post\r
title: Newsletter du 06 Janvier 2025\r
subtitle: Comme les Rois Mages en Galilée				\r
thumbnail-img: /assets/img/Alain-peche.png\r
gh-repo: daattali/beautiful-jekyll\r
tags: [devops, SRE, Gosearch, Gitleak, nmap, Ghostty]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Que cette année 2025 soit synonyme de projets ambitieux, d’automatisations réussies et de systèmes toujours plus robustes, on vous souhaite à tous le meilleur mais surtout la santé etc etc. Comme d'habitude, pour cette année 2025, on continuera à vous partager ce qui a attiré notre attention durant notre veille tech, et on espère que vous serez toujours aussi contents et nombreux à nous lire (merci d'ailleurs à tous ceux qui nous envoient des emails d'encouragement ou de partage de liens, c'est vraiment adorable).  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
👨🏻‍💻 **HTB-Sea CVE2023-41425 :** Rien de tel que de commencer l'année avec un chouette article qui nous détaille  [l'exploitation d'une vulnérabilité sur une box Linux](https://infosecwriteups.com/htb-sea-cve-2023-41425-113db350f1a6). C'est toujours fascinant de voir les étapes s'enchaîner, du scan initial jusqu'à la prise en main, et toujours instructif de voir que les outils utilisés sont de plus en plus performants et à la portée de tout le monde.\r
\r
🚀 **The evolution of SRE at Google :** Un article au moins aussi dense qu'une déclaration d'impôts mais passionnant, et qui explore l'évolution de SRE chez Google. On y apprend que la startup familiale de Mountain View a adopté un nouveau framework, STAMP ( pour  [System-Theoretic Accident Model and Processes](https://www.usenix.org/publications/loginonline/evolution-sre-google)), qui se concentre sur la compréhension et la gestion des interactions complexes au sein des systèmes, plutôt que sur la prévention des défaillances individuelles des composants.\r
\r
🐧 **Immutables linux distros, are they right for you ? Take the test :** Un article qui parlera sans doute aux plus radicalisés des linuxiens et qui instillera le doute en vous :  [avez-vous besoin d'une distro immuable](https://linuxblog.io/immutable-linux-distros-are-they-right-for-you-take-the-test/)  ?  \r
\r
🕵🏻 **Gosearch :** Les frameworks OSINT et outils associés n'ont jamais été autant à la mode, alors comme tout le monde on teste tout et n'importe quoi, et on est tombé sur  [Gosearch](https://github.com/ibnaleem/gosearch), une app sympa développée en Go qui permet de rechercher les empreintes numériques associées à un nom d'utilisateur spécifique sur diverses plateformes en ligne, et qui intègre diverses bases de données comme celle de BreachDirectory.org.\r
\r
**</> Gitleaks :** Un  [énième outil](https://github.com/gitleaks/gitleaks)  vous permettant de détecter des secrets tels que des mots de passe, des clés API et des tokens dans des repos Git, des fichiers, ou tout autre élément que vous souhaitez lui fournir via stdin. On apprécie sa légèreté et sa simplicité d'utilisation.\r
\r
😱 **Useful nmap scripts for ethical hackers :** Un bel article qui présente  [plusieurs scripts nmap](https://www.freecodecamp.org/news/useful-nmap-scripts-for-ethical-hackers/)  essentiels pour les white hats en herbe, facilitant l'audit et la sécurisation des réseaux.\r
\r
🏆  **Ghostty :** On vous en parlait il y a quelques semaines, et c'est maintenant chose faite, Ghostty,  [le meilleur terminal du monde](https://ghostty.org/)  (pour Linux et MacOS) vient de sortir en version publique, et on vous encourage fortement à l'essayer.\r
\r
\r
## S3 is the new SFTP\r
\r
![](https://storage.mlcdn.com/account_image/325165/i47xEy8IypUX1LWnYQgzcyPBn2rIZoSKGy3GzBgq.png)\r
\r
Merci à Thomas R. qui nous partage un article qui explore l'évolution des méthodes de partage de données entre entreprises : on y apprend que les protocoles comme SFTP sont ttrès souvent utilisés pour échanger des fichiers comme des rapports financiers ou des relevés de transactions, et qu'avec avec l'avènement des technos cloud, des solutions comme Amazon S3 gagnent en popularité pour ces échanges.  \r
\r
[Accéder au lien ->](https://materializedview.io/p/s3-is-the-new-sftp)`,N=`---\r
layout: post\r
title: Newsletter du 20 Janvier 2025\r
tags: [devops, API, GGH, Linux, Docker, console]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Alors que Trump se prépare à un retour en scène, l'idée d'une alliance encore plus forte entre pouvoir politique et géants de la tech donne des sueurs froides. Entre tweets ravageurs et algorithmes complaisants, on pourrait presque croire que le futur qui se dessine est un épisode inédit de Black Mirror...\r
\r
Là où la tech, et plus précisément le web devaient devenir des espaces de liberté, de savoir et d'échanges, nous avons créé un cloaque, une dette colossale aussi, pour les générations futures, à l'instar du changement climatique.\r
\r
Il est temps de reprendre le pouvoir de la tech, et de rajouter une bonne dose de responsabilité dans nos orientations techniques (et citoyennes) qui ne sont plus neutres.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Why your API strategy needs a rethink :** On vous partage un article des cowboys de chez The New Stack qui met assez bien en lumière les défis auxquels les organisations sont confrontées [avec les API REST](https://thenewstack.io/why-your-api-strategy-needs-a-rethink/)  traditionnelles, notamment sur l'accès limité au backend et la gestion des mises à jour. GraphQL est proposé comme une solution à pas mal de problèmes, alors que nous on envisagerait plutôt un lance-flammes.\r
\r
**☸️ K9s, manage your Kubernetes cluster and it's objects like a pro :** Pour les deux du fond qui ne connaissent pas encore K9s (attention on vous voit), un chouette article qui permet, avec quelques exemples, de comprendre  [le fonctionnement et les bénéfices d'un outil](https://www.cncf.io/blog/2024/12/06/k9s-manage-your-kubernetes-cluster-and-its-objects-like-a-pro/)  qui vous fera économiser du temps et de la sueur.\r
\r
💝 **GGH is a lightweight cli to recall your ssh sessions :** Un chouette outil qu'on vient de découvrir et dont vous n'allez plus pouvoir vous passer, et qui permet de  [rappeler une session ssh](https://laravel-news.com/ggh-is-a-lightweight-cli-to-recall-your-ssh-sessions)  à travers une interface très lisible. Fonctionne sur Linux et Windows.\r
\r
**👨🏻‍💻 I feel like a hacker using these cool Linux terminal tools :** Une compilation d'[outils indispensables](https://itsfoss.com/hacker-like-linux-terminal-tools/)  pour se la jouer hacker comme dans les films entre deux restart de pods sur votre cluster K8s de bonhomme.\r
\r
📟 **Top 10 ways to monitor Linux in the console :** Plusieurs outils de base que vous devez connaître pour  [surveiller les performances](https://www.jeffgeerling.com/blog/2025/top-10-ways-monitor-linux-console)  de vos boxs Linux via la console. Du simple utilitaire de base top à des outils plus avancés comme htop, atop, iftop, btop, chacun offre des fonctionnalités uniques pour la surveillance de tout un tas de machins, de la RAM jusqu'au GPU.\r
\r
🐳 **Linuxserver/webtop :** Webtop propose des conteneurs basés sur Alpine, Ubuntu, Fedora et Arch, avec des environnements de bureau complets  [accessibles via votre navigateur web préféré](https://github.com/linuxserver/docker-webtop). Webtop prend en charge plusieurs architectures, divers environnements de bureau (XFCE, KDE, MATE, i3, Openbox et IceWM), et permet une configuration via des variables d'environnement.  \r
\r
**🐧 Nix - Death by a thousand cuts :** Un article très complet qui partage le retour d'expérience d'un mec trop curieux avec NixOS. En conclusion, [il ne recommande pas son utilisation pour du desktop](https://www.dgt.is/blog/2025-01-10-nix-death-by-a-thousand-cuts/), même pour des radicalisés de longue date, et souligne que l'investissement en temps pour maintenir et configurer le système peut dépasser les avantages obtenus.\r
\r
🏆  **Container capabilities, a short tour :** Un très bon article qui explore les capacités de Linux dans  [différents scénarios d'exécution de conteneurs Docker](https://padlock.argh.in/2024/12/15/container-capabilities.html), en mettant en lumière leurs implications pour la sécurité et la flexibilité. On y parle notamment de la différence entre l'exécution d’un conteneur avec ou sans privilèges et l’impact de l’utilisation d’un utilisateur root ou non-root.\r
\r
![](https://storage.mlcdn.com/account_image/325165/1ppyRjYrpjquALFUHlNZUQ1ome3N8vBBEVly3VPh.jpg)\r
\r
# Presentation: curl from start to end\r
\r
C'est pas tous les jours que ça arrive, alors on vous prévient que demain, le 21/01/2025,  **Daniel Stenberg**, le papa de Curl, organise une  [conférence qui sera diffusée en direct sur Twitch](https://daniel.haxx.se/blog/2025/01/16/presentation-curl-from-start-to-end/)  et sera enregistrée puis hébergée sur YouTube par la suite.\r
\r
\r
## It's time to make Kubernetes disappear\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
  \r
\r
Merci à Sandrine T. qui nous partage un article pointu sur Kubernetes et dans lequel on y décrit sa complexité croissante. Initialement conçu comme un grosse couche d'abstraction de ressources, K8s est devenu une entité nécessitant sa propre gestion, entourée de trop nombreux outils et technos supplémentaires : une situation qui crée des frictions pour les devs, ces pauvres chéris, qui doivent naviguer dans des process trop complexes pour eux, comme le provisionnement de microservices ou la configuration de dépôts.  \r
\r
Pour remédier à cette complexité, l'auteur de l'article propose d'aller au-delà de l'orchestration traditionnelle en adoptant une approche de "chorégraphie", méthode qui consisterait à décentraliser le contrôle, permettant aux services de s'interconnecter de manière autonome plutôt que de dépendre d'un orchestrateur centralisé.\r
\r
  \r
\r
[Accéder au lien ->](https://cloudnativenow.com/contributed-content/its-time-to-make-kubernetes-disappear/)`,K=`---\r
layout: post\r
title: Newsletter du 10 Février 2025\r
tags: [devops, MySql, Kafka, Linux, Docker]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
43 6F 6D 6D 65 20 6F 6E 20 61 69 6D 65 20 62 69 65 6E 20 6E 6F 74 72 65 20 6C 65 63 74 6F 72 61 74 2C 20 6F 6E 20 61 20 64 E9 63 69 64 E9 20 64 65 20 66 61 69 72 65 20 67 61 67 6E 65 72 20 6C 65 20 6C 69 76 72 65 20 22 54 68 65 20 50 68 6F 65 6E 69 78 20 50 72 6F 6A 65 63 74 22 20 E0 20 75 6E 20 6C 65 63 74 65 75 72 20 61 70 72 E8 73 20 74 69 72 61 67 65 20 61 75 20 73 6F 72 74 2E 20 50 6F 75 72 20 70 61 72 74 69 63 69 70 65 72 20 63 27 65 73 74 20 73 69 6D 70 6C 65 2C 20 76 6F 75 73 20 6E 6F 75 73 20 65 6E 76 6F 79 65 7A 20 75 6E 20 65 6D 61 69 6C 20 E0 20 63 6F 6E 74 61 63 74 40 72 75 64 65 6F 70 73 2E 63 6F 6D 20 65 74 20 6F 6E 20 74 69 72 65 72 61 20 61 75 20 73 6F 72 74 20 70 61 72 6D 69 20 74 6F 75 73 20 6C 65 73 20 65 6D 61 69 6C 73 20 72 65 E7 75 73 20 64 61 6E 73 20 6C 65 73 20 6A 6F 75 72 73 20 71 75 69 20 76 69 65 6E 6E 65 6E 74 2E 20  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🛢️ **MySql at Uber :** Un chouette post des cowboys de chez Uber, la petite startup californienne qui monte, et qui nous détaille  [leur infrastructure MySQL](https://www.uber.com/en-FR/blog/mysql-at-uber/) (composée de plus de 2 300 clusters indépendants) et qui constitue la colonne vertébrale de leur plateforme. L'article aborde tout ce qui est flux de données et de contrôle, ainsi que les principaux composants de cette architecture, comme le plan de contrôle et de découverte, l'observabilité, la capture des données et leur ingestion dans leur datawarehouse. et tout un tas d'autres trucs à une échelle complètement folle.\r
\r
</> **Re-ordering git commits :** Quelques tricks qui vous aideront à [ranger vos commits](https://cassidoo.co/post/rebase-to-reorder/)  dans l'ordre de votre choix comme un grand et à grands coups "d'interactive rebase", ce qui vous permettra de faire le malin dans votre open-space.\r
\r
🏆  **Kafka consumer monitoring tips :** Vous êtes un vrai bonhomme comme on dit à Montargis, vous délaissez RabbitMQ et autres systèmes de messaging trop mainstream et avez donc installé un Kafka pour gérer vos 100 events par jour. Histoire de conserver votre street cred, on vous aide à aller plus loin grâce à ce post qui vous donne les clefs pour  [monitorer proprement vos consumers avec Prometheus et Alert Manager](https://medium.com/trendyol-tech/kafka-consumer-monitoring-tips-890357d070b7).\r
\r
🥇  **Docker networking explained - theory and network drivers simplified :** On vous partage ce post qui va vous expliquer, de manière archi simple,  [comment fonctionne la couche réseau sous Docker](https://medium.com/javarevisited/sdocker-networking-explained-theory-and-network-drivers-simplified-8c93252d2719). C'est franchement le genre d'article qu'on aurait aimé avoir à nos débuts sur Docker car lisible, didactique, où des concepts un peu tordus sont expliqués simplement.\r
\r
**👨🏻‍💻 Clone2leaks, your git credentials belong to us :** Une nouvelle étude des intellos de chez Flatt Security révèle  [plusieurs failles critiques dans des outils populaires liés à Git](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)  (on parle du cli Git, Git LFS, Github Desktop, etc). Baptisée  **Clone2Leak**, cette attaque exploite des failles permettant d'injecter des caractères spéciaux et détourner vos informations d'authentification, comme c'est original.\r
\r
📶 **Sigmon :** Sans doute l'application avec la quelle on a le plus joué ce mois-ci, et qui vous permet de  [mesurer la puissance de votre signal Wifi](https://github.com/tcsenpai/sigmon)  et qui agrège les données en temps réel dans un graph. Ça fonctionne à base de iwconfig et plotext, et c'est classe.  \r
\r
**🐳 4 tiny docker images for lightweight containers :** C'est un peu un marronnier, mais comme c'est de la pige facile on ne se prive pas de vous partager un énième article qui vante les vertus magiques d'utiliser les  [images docker les plus légères possibles](https://www.infoworld.com/article/3804073/4-tiny-docker-images-for-lightweight-containers.html). Sans surprise, on y parle de Alpine, Busybox, Debian Slim et Red Hat Ubi Micro.\r
\r
**🐧 Les utilisateurs de WSL pourront bientôt profiter d'Arch Linux officiellement :** D'après un papier des mecs de chez IT-Connect, c'est officiel,  [WSL2 va bientôt proposer des images officielles](https://www.it-connect.fr/windows-utilisateurs-wsl-pourront-bientot-profiter-arch-linux-officiellement/)  et mises à jour de Linux Arch à destination des mecs qui ont choisi le mauvais OS. Puissent-ils voir la lumière.\r
\r
🚀  **How to build a multi-tenant IDP with Gitops and vCluster :** On a trouvé cet article très fouillé qui explore [la création d'une plateforme de développement interne (IDP)](https://itnext.io/how-to-build-a-multi-tenancy-internal-developer-platform-with-gitops-and-vcluster-d8f43bfb9c3d)  multi-tenant en adoptant une approche en self-care avec K8s, GitOps et vCluster. L'article clarifie les rôles de chacune des équipes dédiées, explique les différentes couches d'une IDP et propose un guide pratique pour la mise en place et la gestion de la plateforme, idéal pour se constituer un labo de tests.\r
\r
# L'infogérance à l'heure du DevOps\r
\r
![](https://storage.mlcdn.com/account_image/325165/f13FsX3zFe6W0f7TgDEEPFOr6WqprvRw9eGGynGi.png)\r
\r
Un webinar sera donné par les coyotes de chez Bearstech  **le Jeudi 13 Février à 14h30**  :\r
\r
_Votre application rame ? Votre infogéreur ignore vos demandes ? Vous gérez une dette technique croissante et des failles de sécurité ?_\r
\r
_Performance, sécurité et support : l'infogérance joue un rôle clé pour assurer la stabilité et la scalabilité de vos infrastructures. Mais à l’ère du DevOps, où commence et où s’arrête le rôle de l’infogéreur face à votre équipe tech ?_\r
\r
_Ce que vous allez découvrir :_\r
\r
-   _Comment collaborer efficacement avec un infogéreur_\r
-   _Comment auditer la performance et tester la charge_\r
-   _Les meilleures pratiques pour sécuriser une application (WAF, monitoring…)_\r
-   _Comment identifier et résoudre les problèmes avant qu’ils ne deviennent critiques_\r
-   _Ce qu’un bon infogéreur peut faire (et ce qu’il ne peut pas)_\r
\r
_Que vous soyez développeur, chef de projet ou CTO, ce webinar vous donnera les clés pour optimiser l’infogérance et éviter les pièges classiques._\r
\r
[](https://app.livestorm.co/bearstech/linfogerance-a-lheure-du-devops-ce-que-vous-devez-savoir)\r
\r
S'inscrire\r
\r
\r
## Linux is obsolete\r
\r
![](https://storage.mlcdn.com/account_image/325165/L3ZVKsGu9oqkeqnxi85jDEilAYoJ99SYjIkX1HnM.png)\r
\r
Merci à Frédéric S, "sysadmin intégriste" dans une boîte web à Nantes, qui nous partage un échange datant de 1992, et qui soutient que les systèmes d'exploitation basés sur un micro-kernel, comme MINIX, sont supérieurs aux systèmes monolithiques comme Linux. Des mecs mettent en avant les avantages des micro-kernels, comme une certaine modularité et la facilité de la maintenance, et critiquent Linux pour sa dépendance à l'architecture 80x86, ce qui pourrait limiter sa viabilité à long terme. A déguster avec un bon whisky au coin du feu.  \r
\r
[Accéder au lien ->](https://groups.google.com/g/comp.os.minix/c/wlhw16QWltI)`,H=`---\r
layout: post\r
title: Newsletter du 24 Février 2025\r
tags: [devops, MySql, Git, Docker, TryHackMe]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Vous avez été vraiment nombreux à participer au tirage au sort de la dernière newsletter, qui a permis à Thomas "Elhaz" G de gagner le livre "The Phoenix Project". Vous en avez profité pour nous écrire plein de mots super sympas (et drôles) par la même occasion, et ça, ça nous a grave fait plaisir. Vu le succès, on va renouveler ce genre de jeu concours très prochainement, mais en le corsant "légèrement". Stay tuned.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🛢️ **Your code is fast, but your database is slow, now what ? :** On a bien aimé ce chouette article des punks de chez System Design Codex, qui nous propose  [d'identifier les goulots d'étranglement](https://newsletter.systemdesigncodex.com/p/your-code-is-fast-but-your-database)  côté bases de données, avec le profiling des requêtes et la surveillance de métriques clés. On parlera solutions, qui incluent l'ajout d'index, l'évitement des  _SELECT *_  et l'utilisation de jointures cauchemardesques. L'article va aussi parler de cache, de pooling de connexions, des vues matérialisées, de sharding et bien sûr de réplications, bref, tout ce qui rend nos amis DBA un peu plus gris et tristes chaque jour qui passe.\r
\r
**</> How I use git add ---patch for reviewing my work :** Vous êtes un peu maniaque sur les bords et vous ne supportez pas le désordre ? Utilisez git add --patch, qui vous permettra  [une révision interactive de votre travail](https://remimercier.com/git-add-patch/), vous aidera à maintenir facilement des commits atomiques et fera revenir l'être aimé sous trois jours.\r
\r
**🐳 Tester une image avec Container Structure Test :** On vous partage cet article de notre Stéphane Robert national qui nous présente  [Container Structure Test](https://blog.stephane-robert.info/docs/conteneurs/outils/container-struct-test/), un outil qui permet de valider divers aspects d'une image Docker, comme l'exécution de commandes, ses métadonnées et le contenu du système de fichiers, histoire de s'assurer que l'image est bien conforme aux attentes. C'est un très chouette tuto de l'ami Stéphane qu'on vous recommande comme d'habitude.\r
\r
**#️⃣ Oha :** On est tombé sur cette appli super carrée comme disent les jeunes, et qui permet de faire des tests de charge sur votre site web favori. On est loin des possibilités d'un Gatling ou d'un JMeter (pas de rampstart etc) mais c'est  [idéal pour faire une première passe](https://github.com/hatoo/oha)  de base et à la portée de tout le monde.\r
\r
😱 **Smag grotto TryHackMe challenge writeup :** On a adoré lire ce write-up d'un défi tiré de TryHackMe qui nous détaille toutes les étapes pour  [obtenir des accès users et root sur une box cible](https://infosecwriteups.com/smag-grotto-tryhackme-writeup-1018f5ad17df). On verra passer du nmap bien entendu, mais aussi du gobuster, du linPEAS, du reverse-shell bien sale et plein d'autres friandises du même genre. A lire absolument si vous voulez vous initier aux joies du pentesting.\r
\r
⚡ **Self hosted docker ready open source status page :** Les status page se suivent et se ressemblent, mais dans le doute on a testé Kener, qui v[ous permettra d'aller taper vos APIs et endpoints](https://kener.ing/)  (prend en charge les protocoles HTTP, TCP, DNS, ICMP...) très simplement avec des possibilités de custom à portée de tout le monde. On vous le recommande si vous avez ce genre de besoins.  \r
\r
**⚔️ A list of proxy ips to help to block KillNet's DDos bots :** [Le bruit des bots.](https://www.theregister.com/2023/02/06/killnet_proxy_ip_list/)\r
\r
🏆  **Hackropole :** Pour ceux qui ne connaissaient pas, on vous présente Hackropole, la plateforme en ligne développée par l'ANSSI qui propose de rejouer les épreuves du France Cybersecurity Challenge tout au long de l'année. [300 épreuves classées par catégories](https://hackropole.fr/fr/challenges/)  comme la cryptographie, le forensic, le hardware, le pwn, le reverse engineering et le web vous attendent pour combler un weekend pluvieux.\r
\r
**👨‍💻 How I sent 500 million http requests to 2.5 million hosts :** Un exploit rendu possible  [grâce à une pile techno soigneusement optimisée](https://www.moczadlo.com/2024/how-i-sent-500-million-http-requests-in-under-24h)  et en s'appuyant sur GO, retenu pour sa simplicité et sa rapidité, sur K8s pour sa scalabilité horizontale, et en s'aidant de massdns et fasthttp. Du bien bel ouvrage comme on dit à Montargis.\r
\r
\r
## Posting, a powerful HTTP client that lives in your terminal.\r
\r
![](https://storage.mlcdn.com/account_image/325165/8bZ5Iq4Yu86h0OhkYs6OG3Jb8aZW1XHjIasEniyD.png)\r
\r
Merci à Stéphane V., fidèle lecteur de la première heure, qui nous fait découvrir une application dont il se sert maintenant au quotidien. Posting est une alternative à Postman ou Insomnia, c'est écrit en Python, ça tourne dans un terminal, et toutes les requêtes sont stockées dans du YAML. Merci pour la découverte Stéphane !  \r
\r
[Accéder au lien ->](https://github.com/darrenburns/posting)`,B=`---\r
layout: post\r
title: Newsletter du 10 Mars 2025\r
tags: [devops, Linux, CORS, Docker, Terraform, Python]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
C’est toujours un plaisir de voir un side-project tenir dans la durée. Mine de rien, ça demande un peu d’abnégation et pas mal de discipline pour vous régurgiter ma veille perso de manière (plus ou moins) régulière.\r
\r
Mais le jeu en vaut la chandelle : la newsletter continue de grandir, et vos messages trop choupis confirment que vous y trouvez de la valeur. Alors, pour vous remercier, on va faire gagner  **deux livres incontournables du DevOps**  à l’un de nos lecteurs : The Phoenix Project et The Devops Handbook !  \r
  \r
\r
### Comment participer ?\r
\r
- Partagez un post sur LinkedIn, Bluesky ou X en expliquant pourquoi vous êtes abonnés à RudeOps.  \r
- Ajoutez le hashtag #RudeOps pour valider votre participation.  \r
- Boostez vos chances en invitant un collègue à s’abonner et en nous taguant ensemble dans un post.\r
\r
**T****irage au sort et annonce du gagnant : 24 mars**\r
\r
Bonne chance à tout le monde, et bonne lecture de la 37ème itération de cette newsletter !  \r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Web-check, a comprehensive on demand OSINT for any website :** Conçu pour analyser en profondeur n'importe quel site web, Web-Check offre une gamme étendue de fonctionnalités permettant d'examiner  [divers aspects d'un site](https://github.com/Lissy93/web-check), et c'est vraiment ce qu'on a vu de mieux pour le moment, avec un tas d'informations regroupées au même endroit, on vous recommande de le tester.\r
\r
🥇  **Nginx logging, a complete guide to beginners :** Un article sympa qui prend le temps de survoler, sans trop rentrer dans le détail, les bases à avoir pour  [comprendre et exploiter vos logs dans Nginx](https://last9.io/blog/nginx-logging/). Idéal pour les rookies qui découvrent Nginx, surnommé le GOAT des proxys dans les quartiers Nord de Montargis.\r
\r
🐳 **Advanced container resource monitoring with docker stats :** On vous partage ce guide des intellos de chez Last9 qui couvre tout ce que vous devez savoir sur  [docker stats](https://last9.io/blog/container-resource-monitoring-with-docker-stats/) : comment l'utiliser, la signification de chaque métrique et comment l'intégrer dans un système de monitoring plus large.\r
\r
👨🏻‍💻 **Craking Linux password hashes :** Un très bon article qui nous explique comment les  [systèmes Linux actuels stockent les informations de mot de passe](https://infosecwriteups.com/cracking-linux-password-hashes-12dfb9e1dc2f)  à l’aide de méthodes comme yescrypt et sha512crypt, et qui fournit des conseils pour analyser les empreintes de passwords avec des outils aux noms rigolos comme John the Ripper ou Hashcat.\r
\r
😱 **CORS, the ultimate guide :** On a adoré parcourir cet excellent guide pour  [tout savoir sur CORS (Cross-Origin Resource Sharing](https://www.devsecurely.com/blog/2024/06/cors-the-ultimate-guide) qui nous explique comment les politiques CORS sont configurées via les headers de réponse HTTP, pour autoriser ou refuser l'accès en fonction de l'origine et des informations d'identification. Le guide met également en avant les risques liés à une configuration incorrecte des politiques CORS et propose des étapes pour définir une politique de sécurité digne de ce nom.\r
\r
🏹 **7 Linux terminal from the future :** Parfait pour perdre un Dimanche après-midi  [à tester tout et n'importe quoi](https://itsfoss.com/modern-linux-terminals/), et revenir sur  [Ghostty](https://ghostty.org/), mais ça fait de la pige facile alors pourquoi se priver.  \r
\r
**📢 Open-Source is where dreams go to die :** Un article qui reflète une réalité aussi triste qu'absurde, et qui aborde sans détours les défis auxquels sont confrontés les devs impliqués dans des projets open source. On y retrouve par exemple la démission de Hector Martin, leader du projet Asahi Linux qui a quitté le projet épuisé et désillusionné, un  [scénario de plus en plus courant dans le monde de l'open source](https://www.trevorlasn.com/blog/open-source-is-where-dreams-go-to-die), où une passion se transforme en grosse charge mentale. L'auteur de l'article, bien énervé et il a raison, critique également le modèle économique de l'open source, où la majorité des mainteneurs ne reçoivent aucune compensation financière, malgré l'utilisation de leurs logiciels par des entreprises générant des milliards.  \r
\r
🏆  **Building an IP address manager in Go :** Un chouette tuto pour créer  [un gestionnaire d'adresses IP en Go](https://themsaid.com/building-an-ip-address-manager-in-go)  pour une allocation efficace des blocs CIDR dans un réseau, en utilisant les librairies net et encoding/binary. A réserver aux détraqués du réseau.\r
\r
**🛠️ Je fais toutes les conneries possibles avec Terraform :** Un blog français qu'on découvre à travers cet article qui partage des  [erreurs courantes commises lors de l'utilisation de Terraform](https://www.cyberpunkachien.fr/posts/bricolo_je_fait_toutes_les_conneries_possible_avec_terraform/), et qui nous propose des solutions pour les éviter ou les corriger, on s'est bien marré et on a beaucoup appris.\r
\r
**🚀 Gh-Dash :** Un [outil indispensable](https://github.com/dlvhdr/gh-dash)  si vous êtes sur Github, qui vous permet de gérer vos opérations courantes, pull requests comprises, dans un dashboard. C'est lisible, ça va vite, c'est stable, on kiffe.\r
\r
**🐍 Python for DevOps :** On vous partage ce chouette article des cowboys de chez Pulumi, qui explore  [l'utilisation de Python dans le domaine du DevOps](https://www.pulumi.com/blog/python-for-devops/), en mettant en avant sa simplicité, sa lisibilité et sa vaste communauté, ce qui en fait un choix privilégié et logique pour l'automatisation des tâches par exemple. L'article fait une rétro sur pas mal d'outils que vous devez connaître, comme Django, RQ, Dagger, Pytest et plein d'autres.\r
\r
## RudeOps a deux ans !\r
\r
![](https://storage.mlcdn.com/account_image/325165/2LzG80vJuDhYrA8VDGgqotZAp7gp5eoEijRvI4iw.png)\r
\r
Histoire de faire comme si on était de vrais pros, on partage quelques chiffres à destination des plus curieux. Sur les six derniers mois (on arrive pas à agréger sur une année et on a la flemme) :  \r
  \r
-  **Taux d'ouverture**  : 62%  \r
-  **Taux de click**  : 25%  \r
-  **Nombre d'inscriptions par mois**  : 28  \r
-  **Nombre de désinscriptions par mois**  : 4  \r
  \r
Vous êtes  **6%**  à ne jamais nous lire (ou à utiliser un reader type Protonmail qui supprime notre lien de tracking),  **31%**  à nous lire de temps en temps et  **63%**  à nous lire très régulièrement.  \r
Vous êtes  **55%**  à nous lire à travers un webmail, et  **40%**  à utiliser Gmail (nous ne vous jugeons pas).  \r
  \r
Et pour finir, vous n'êtes que  **15%**  à nous lire depuis votre smartphone.`,U=`---\r
layout: post\r
title: Newsletter du 24 Mars 2025\r
tags: [devops, Linux, Git, K8s, Gitops]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Le printemps, c’est peut-être le moment idéal pour faire ce qu’on repousse depuis des mois : un peu de jardinage dans les playbooks, du désherbage dans les pipelines, remettre un peu d’air dans l’infra, et surtout, redonner du sens à nos outils. Faire respirer nos stacks. Repenser nos choix.\r
\r
Pas besoin de tout jeter. On taille, on arrose, on documente. On refait passer la lumière.  \r
\r
Bon printemps à tous, et bonne lecture de la 38ème édition de notre newsletter.  \r
\r
Cyril  \r
\r
### Quoi de neuf ?\r
\r
**</> How core git developers configure Git :** C'est lors d'un échange à travers une obscure liste de diffusion qu'un core dev de Git, certainement complètement ivre, a lancé un défi :  [supprimer toutes leurs configurations et alias personnalisés pour tester Git en mode vanilla](https://blog.gitbutler.com/how-git-core-devs-configure-git/). L'idée ? Identifier les confs que même les core devs trouvent indispensables. Résultat : une liste resserrée de 9 paramètres et 3 alias, sur laquelle les principaux développeurs de Git sont à peu près tous tombés d’accord, beaucoup pensant même que ces réglages devraient devenir les nouvelles valeurs par défaut de Git. In Vino Veritas...\r
\r
💝 **No longer my favorite git commit :** On continue avec Git... Il y a six ans, David Thompson partageait son "commit Git préféré", une anecdote sur  [un message de commit exceptionnellement détaillé](https://mtlynch.io/no-longer-my-favorite-git-commit/)  écrit par un collègue. Ce message, long de six paragraphes et comportant cinq extraits de code, expliquait minutieusement la correction d'un simple caractère d'espacement. Ces gens ont beaucoup trop de temps libre, mais ça reste passionnant (et hilarant) à lire.\r
\r
**☸️ Kubernetes tool, kubectl :** On vous partage cette très jolie série d'articles qui nous propose une  [introduction pratique à K8s](https://rnemet.dev/posts/practical_k8s/k8s_intro_local_and_kubectl/), en se concentrant sur l'installation d'un environnement local à l'aide de Rancher Desktop et sur l'utilisation de kubectl, l'outil forgé dans les entrailles de la Montagne du Destin pour les amener tous et dans les ténèbres les lier. C'est une très bonne base de départ pour s'initier à Kubernetes ou conquérir la Terre du Milieu, c'est vous qui voyez.\r
\r
😱 **15 Gitops best practices to improve your workflows :** On a comme d'habitude bien aimé ce papier des cowboys de chez Spacelift, qui revient sur  [ce qu'est le Gitops et comment l'implémenter](https://spacelift.io/blog/gitops-best-practices)  à travers différentes approches.\r
\r
🐧 **My 2025 stack, a modern and optimized setup :** Le post d'un énième linuxien qui nous partage sa transition vers un système "adapté à ses besoins" (notez les guillemets). Le mec a opté pour un dual boot entre Windows 11 et EndeavourOS (une distribution d'extrémistes basée sur Arch Linux), et utilise Hyprland comme tous les radicalisés. A parcourir pour les  [quelques outils essentiels à tout desktop sous Linux](https://medium.com/@a-lebailly/my-2025-stack-a-modern-and-optimized-setup-06533ba67bc9)  que vous ne connaissez peut-être pas et qu'il liste.  \r
\r
🚀  **Netop :** Un chouette outil qui tourne dans un terminal et qui permet de  [surveiller le trafic réseau en temps réel](https://github.com/ZingerLittleBee/netop)  en utilisant des filtres BPF (Berkeley Packet Filter). Développé en Rust (salut Jojo), on retrouve la possibilité de définir des règles de filtrage personnalisées, de basculer facilement entre plusieurs règles et d'afficher les taux de transfert en temps réel ainsi que le trafic total.\r
\r
**💻 Sniffnet :** Un  [autre outil de monitoring réseau](https://github.com/GyulyVGC/sniffnet)  qu'on aime particulièrement, écrit en Rust une fois de plus (coucou Jojo), avec une interface graphique sexy (merci à egui), et qui te permet de visualiser en temps réel le trafic entrant et sortant sur ton interface réseau, filtré par protocole, port, IP ou même localisation géographique. Elle est pas belle la vie ?\r
\r
🏆  **Writeups Noobops :** Un  [site français bien carré](https://writeup.noobops.fr/) comme on dit à Montargis, et dont l'auteur nous partage sa passion du CTF à travers différents writeups (c'est le terme à la mode pour dire comptes-rendus). Idéal pour bosser sa cybersec, tous les exemples sont supers clairs, avec différents niveaux de complexité, on apprécie particulièrement les explications aussi synthétiques que pertinentes.\r
\r
\r
## Finding my first SQL injection on HackerOne\r
\r
![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)\r
\r
Merci à Romain V. pour son post qui nous partage un retour d'expérience de la découverte d'une vulnérabilité d'injection SQL sur une plateforme d'agendas en ligne. En analysant les requêtes backend entre le site principal et son serveur de contenu, le mec a identifié que le paramètre "tag" était vulnérable à une injection SQL basée sur le temps. Très chouette à lire comme d'habitude, merci Romain pour le partage !  \r
\r
[Accéder au lien ->](https://infosecwriteups.com/finding-my-first-sql-injection-on-hackerone-6a031ab5aa1c)`,F=`---\r
layout: post\r
title: Newsletter du 14 Avril 2025\r
tags: [devops, Gitlab, Github, MTTR, DevSecOps]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
La semaine dernière, j’ai vu passer une énième présentation "stratégique" d’un grand groupe sur leur transformation DevOps. Slides léchées, acronymes DevSecWhatever en gras, un schéma en entonnoir pour faire sérieux, et au milieu : zéro trace de réalité opérationnelle. Pas une ligne sur la dette technique. Pas un mot sur les réveils à 3h du mat. Rien sur les 500 tickets Jira non traités parce que personne ne veut toucher à ce microservice zombie.\r
\r
Le DevOps, le vrai, c’est pas un framework qu’on installe par-dessus des processus foireux. C’est du cambouis, du refacto ingrat, des prises de risque, et parfois des alertes Slack à des heures pas cools. Et surtout, c’est une discipline qui se construit dans la friction, entre équipes, entre métiers, entre couches techniques.\r
\r
On veut de la résilience ? Alors parlons vrais incidents. Parlons postmortems sans bullshit. Parlons choix techniques pas glamour mais stables. La modernité n’est pas dans les outils qu’on empile, mais dans la lucidité avec laquelle on accepte que nos systèmes sont fragiles, et qu’on les rend un peu moins pires chaque jour.  \r
\r
Cyril  \r
\r
### Quoi de neuf ?\r
\r
🦊 **Gitlab vs Github, key differences in 2025 :** On a pas le même maillot, mais on fait partie de la même équipe. Ou alors c'est l'inverse je sais jamais. Bref, on vous conseille de lire ce chouette article des cowboys de chez Spacelift qui résume fort bien les choses parce qu'à la fin, [ce n’est pas tant une histoire de fonctionnalités qu’un choix de culture](https://spacelift.io/blog/gitlab-vs-github) : modularité ouverte contre intégration verticale, frugalité artisanale contre gouvernance centralisée, c'est vous qui voyez.\r
\r
👨🏻‍💻 **RedTeam-Tools:** Ce repo est une véritable mine d'or si vous aimez casser des choses. Il regroupe [plus de 130 outils et ressources](https://github.com/A-poc/RedTeam-Tools) couvrant l'ensemble du spectre des opérations de red teaming, de la reco initiale à l'impact final.\r
\r
🚀 **DnsDiag :** C'est une excellente boîte à outils en ligne de commande pour [auditer, diagnostiquer et mesurer les performances de vos serveurs DNS](https://github.com/farrokhi/dnsdiag). DnsDiag vous permettra donc de tester la latence (dnsping), de tracer le chemin des requêtes DNS (dnstraceroute) et de comparer la fiabilité de plusieurs résolveurs (dnseval). Idéal pour détecter les détournements, les lenteurs ou les anomalies dans vos résolutions DNS, parce que c'est toujours la faute du DNS.\r
\r
🏃‍♂️ **MTTR is (still) lying you :** Plutôt que de continuer à empiler des chiffres creux, mieux vaut les utiliser comme point d’entrée vers ce qui compte vraiment : les enseignements qualitatifs, les signaux faibles, les frictions organisationnelles... Ce n’est pas une question de data, c’est une question de discernement, et c'est justement ce que met en valeur cet [excellent article des intellos de chez Resilience in Software Foundation](https://resilienceinsoftware.org/news/1157532).\r
\r
🐧 **Garuda Linux might be the best looking desktop OS on the market:** On vient de découvrir Garuda, [une énième distribution basée sur Arch](https://thenewstack.io/garuda-linux-might-be-the-best-looking-desktop-os-on-the-market/), et qui se distingue par son esthétique soignée et ses performances optimisées d'après les retours de la communauté d'allumés habituels. On a pas testé car on préfère rester sur Slackware, la distribution des vrais bonhommes comme on dit à Montargis. Jetez quand même un coup d'oeil si KDE Plasma et Arch ne vous rebutent pas.\r
\r
🥇 **DevOps vs DevSecOps, key differences and best fit :** Le DevOps a révolutionné la livraison logicielle en brisant les silos entre devs et opérations, favorisant l'automatisation et la rapidité. Mais dans cette quête insensée de vitesse, [la sécurité est souvent restée en marge](https://roadmap.sh/devops/vs-devsecops), traitée comme une étape finale, voire une contrainte.​ Un bel article d'un des mecs de chez roadmap.sh qui nous explique comment le DevSecOps vient corriger cette lacune en intégrant la sécurité dès le début.\r
\r
🏹 **Database sharding case study with PostgreSQL :** Une seule instance PG pour servir des millions d’utilisateurs ? Ça marche… jusqu’au jour où VACUUM ne suit plus, les indices pèsent une tonne, et chaque requête devient une roulette russe. Spoiler : [c’est arrivé chez Notion](https://newsletter.francofernando.com/p/database-sharding-case-study-postgresql). Leur plan d’urgence ? Du vrai sharding à l’ancienne : 480 shards logiques, 32 bases physiques, un split par workspace ID pour garder la cohérence et éviter les requêtes croisées.\r
\r
</> **Git turns 20, a Q&A with Linus Torvalds :** Vingt ans après avoir créé Git, Linus Torvalds reste fidèle à lui-même : pragmatique, direct et peu impressionné par les tendances. Dans une récente interview, [il revient sur la genèse de Git](https://github.blog/open-source/git/git-turns-20-a-qa-with-linus-torvalds/), né de la nécessité de remplacer BitKeeper, et sur sa philosophie du développement logiciel, passionnant comme d'habitude.\r
\r
☸️ **Even more OpenTelemetry - Kubernetes special :** On vous partage ce [chouette retour d'expérience de Nicolas Frankel](https://blog.frankel.ch/even-more-opentelemetry-kubernetes/), qui nous explique comment il a monté une stack complète de monitoring avec OpenTelemetry dans K8s, Traefik comme Ingress Controller, Jaeger, PostgreSQL, Redis, Mosquitto, le tout orchestré via Helm et isolé proprement avec vCluster. C’est le guide idéal pour apprendre à mettre en place une observabilité sérieuse dans un environnement K8s moderne, modulaire et propre.\r
\r
🕸 **Trippy :** On a testé et bien aimé Trippy, un énième [outil de diagnostique réseau](https://github.com/fujiapple852/trippy) écrit en Rust, qui toune sur Mac, Linux, et Windows. C'est léger, ça se prend en main en deux secondes, c'est génial pour les premières étapes d'un diag sur une box quelconque.\r
\r
## OpenTofu becomes the real deal\r
\r
![](https://storage.mlcdn.com/account_image/325165/v3eToAFLmjvaHMpoXqLeDDzWxpMO3MhJNa0MWAVR.png)\r
\r
Merci à Julie B, SRE en France dans une grosse boîte tech, qui nous a partagé ce chouette article au sujet de notre chouchou, Opentofu, qui aujourd’hui n’est plus un fork de protestation, mais un projet structuré, sous la bannière de la Linux Foundation avec des poids lourds comme Cloudflare dans le cockpit. Le registre tourne à plein régime, et la roadmap avance vite <3.\r
\r
[Accéder au lien ->](https://www.infoworld.com/article/3852167/opentofu-becomes-the-real-deal.html)\r
\r
\r
\r
\r
`,V=`---\r
layout: post\r
title: Newsletter du 05 Mai 2025\r
tags: [devops, observability, SQL, Docker, Git, Hetty]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Il y a des jours où tenter de comprendre Kubernetes, c’est comme lire Joyce  sous acide, dans le noir, avec quelqu’un qui te crie "c’est évident !" à l’oreille. Des jours où Git ne te parle plus en commandes mais en runes anciennes, où chaque rebase devient une tentative de rituel païen, et où ta base PostgreSQL, pourtant chérie et bichonnée, décide sans prévenir qu’aujourd’hui, elle est en grève pour des raisons syndicales internes qu’elle ne communiquera évidemment pas.\r
\r
Alors on cherche des repères. Des points fixes dans la tourmente. On tombe sur pgmoneta, qui promet enfin des sauvegardes PostgreSQL sans s’ouvrir les veines. Sur Lazygit, qui transforme la douleur de Git en une souffrance vaguement ergonomique. Sur Hetty, qui, sans fioritures, te permet de faire du pentest sans sacrifier 15Gb de RAM. Des outils créés par des gens qui ont, eux aussi, connu les nuits blanches, les logs illisibles et les conteneurs fantômes.\r
\r
Et à force de bricoler, de lire, de tester, on apprend. Un peu. Jusqu’à ce que tout reparte en vrille et que l’infra, capricieuse et cruelle, te rappelle qui commande vraiment.\r
\r
Si RudeOps t’aide à ne pas sombrer dans ce théâtre absurde, si ça t’a fait gagner du temps, ou simplement sentir que tu n’étais pas seul à crier devant ton terminal : partage**.**  \r
Pas pour la gloire, ni pour les stats.  \r
Mais pour que d’autres sachent que, quelque part, il existe des gens qui cherchent encore à comprendre comment tout ce cirque fonctionne. Et qui ont décidé d’en rire, plutôt que d’en pleurer.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏹 **Simplifying container observability for DevOps team :** Dans le monde merveilleux des conteneurs qui naissent, meurent et respawnent plus vite qu'une licence Starwars, les cowboys de chez Last9 nous rappellent que ["monitorer" ne veut plus rien dire](https://last9.io/blog/container-observability/). Aujourd’hui, il faut "observer" : comprendre, corréler, prier. Leur article tente de démêler l’enfer semi-organisé des métriques, logs et traces, dans l’espoir qu’un jour, on puisse savoir pourquoi le service "payment-prod-v3-temporary-final2" a crashé à 3h du matin. Spoiler : ce n’est pas à cause de Kubernetes, mais presque.\r
\r
🥇  **Anatomy of a SQL engine :** Les mecs de chez Dolthub fêtent leur cinq ans de chirurgie interne en nous offrant [une autopsie complète de leur moteur SQL](https://www.dolthub.com/blog/2025-04-25-sql-engine-anatomy/). Parsing, binding, planification, exécution… tout y passe, avec une précision qui ferait rougir les scénaristes de Grey's Anatomy. On y découvre comment les requêtes sont digérées, transformées et recrachées, le tout orchestré par des arbres de syntaxe abstraite et des plans d’exécution dignes d’un casse-tête chinois. C’est technique, c’est dense, et c'est parfait pour ceux qui aiment comprendre ce qui se passe sous le capot.\r
\r
🐋 **Awesome Docker Compose :** Ce site est une bénédiction. Ou un piège, c’est selon ton rapport à la procrastination technique. Tu y trouveras des dizaines de stacks clés en main [pour déployer tout et n’importe quoi](https://awesome-docker-compose.com/) : Grafana, Gitea, Nextcloud, Prometheus, Uptime Kuma, Jellyfin, PostgREST, Vault, Paperless, et même des outils dont tu ne savais pas que tu en avais besoin jusqu’à maintenant. C’est un peu comme tomber dans un magasin gratuit rempli de gadgets DevOps. Tu cliques, tu clones, tu testes, tu pètes tout, tu recommences. C’est beau, c’est sale, c’est addictif, un peu comme une soirée poker à Montargis.\r
\r
</> **How to use LazyGit to improve your git workflow :** Git est un outil conçu par le malin pour te faire douter de ta carrière à chaque merge. Heureusement, [Lazygit est là](https://www.freecodecamp.org/news/how-to-use-lazygit-to-improve-your-git-workflow/) [pour t’éviter la thrombose cérébrale](https://www.freecodecamp.org/news/how-to-use-lazygit-to-improve-your-git-workflow/). Un genre de panneau de contrôle pour Git dans ton terminal, qui te permet de commiter, rebaser et même gérer des conflits sans ouvrir 15 onglets sur StackOverflow.\r
\r
# Focus sur le blog de Stéphane Robert\r
\r
[La caverne d’Ali Baba du DevOps et du DevSecOps.](https://blog.stephane-robert.info/)  \r
\r
Des guides clairs, des retours d’expérience concrets, des tutos qui vont droit au but (sur Terraform, Kubernetes, Ansible, Prometheus, et bien d’autres).\r
\r
Le tout saupoudré de plein de formations gratuites, accessibles et surtout utiles.  \r
  \r
\r
⋒ **Arch Linux is the latest distribution replacing Redis :** Dans un mouvement qui en dit long sur l’évolution de l’écosystème open source, [Arch Linux a décidé de remplacer Redis par Valkey](https://www.phoronix.com/news/Arch-Linux-Going-Valkey) dans ses dépôts principaux. Même code de départ, mêmes performances, mais avec une gouvernance plus ouverte. Bref, un Redis sans les chaînes, ce qui est plutôt pour nous plaire.\r
\r
🏗️ **Stop using Docker like its 2015 :** Cate van Rossum le rappelle avec justesse : Docker, c’est un outil de build et de dev, pas un environnement de sandbox. Lancer nos containers à la main c’était tolérable en 2015, plus aujourd’hui, mais on ne vous juge pas. Sécurité douteuse, absence d’orchestration, maintenance à la main... [on vaut mieux que ça en 2025](https://dev.to/code42cate/stop-using-docker-like-its-2015-1o5l).\r
\r
👾 **Hetty, an HTTP toolkit for security research :** Burp Suite est trop cher ? ZAP rame comme un vieux Java en chaussettes ? Respire : Hetty, c’est [un proxy HTTP dédié aux tests de sécurité web](https://github.com/dstotijn/hetty), écrit en Go, avec une interface simple, rapide, et -miracle- qui n’a pas besoin de 15 Go de RAM pour tourner. Tu lances, tu interceptes, tu t’amuses. Pas besoin de tout reconfigurer à chaque fois. Pas de pop-ups obscurs. Pas de plugins à la con. Ça fait le job, et ça le fait bien. Une belle alternative open source pour ceux qui veulent tester proprement sans se battre contre l’outil.\r
\r
☸️ **How Kubernetes works internally :** Dans ce chouette article des intellos de chez System Design Codex, on t'explique [comment fonctionne Kubernetes "à l'intérieur",](https://newsletter.systemdesigncodex.com/p/how-kubernetes-works-internally) c’est-à-dire dans ses entrailles, là où les pods naissent, meurent et se redéploient sans qu’on leur demande, pendant que toi tu regardes ton cluster comme un exorciste regarde une gamine possédée. On y parle d’un Control Plane qui croit être Dieu, d’un scheduler qui fait du Tetris en panique, de Kubelet qui joue au Tamagotchi avec les conteneurs, et d’un pauvre etcd qui tient l’univers debout sur trois clous rouillés.\r
\r
🛢️ **Pgmoneta 0.16 :** La version 0.16 de pgmoneta est sortie, et elle promet de transformer [vos sauvegardes PostgreSQL](https://www.postgresql.org/about/news/pgmoneta-016-3065/) en une expérience (presque) plaisante. Au menu : support des sauvegardes incrémentielles pour PG 17+, support Prom/HTTPS, des images Docker/Podman prêtes à l’emploi, et plein d'autres trucs qu'on n'a pas compris.\r
\r
🚀 **Gitdiagram :** Finies les heures passées à comprendre la structure d'un projet inconnu sur Github. Avec GitDiagram, vous obtenez [une vue d'ensemble instantanée](https://github.com/ahmedkhaleel2004/gitdiagram), avec des liens cliquables vers les fichiers et répertoires. C'est simple, rapide et franchement bien foutu.\r
\r
\r
## PATH isn't real on Linux\r
\r
![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)\r
\r
  \r
\r
Merci à Baptiste M. de nous avoir partagé cet excellent article sur une idée reçue tenace : le \`PATH\` n’existe pas. Enfin… pas comme on le croit.\r
\r
Dans l’imaginaire collectif (et dans 98 % des tutos), le \`PATH\` serait une sorte de baguette magique : on tape \`htop\`, et paf, le système "sait" où il est. Sauf que non. **Le noyau Linux ne connaît pas \`PATH\`.** Il s’en fiche royalement. C’est notre shell (bash, zsh, dash, etc.) qui parcourt les répertoires listés dans \`PATH\` pour retrouver l’exécutable. Et encore, ça dépend du shell.  \r
Daniel Huang décortique tout ça avec beaucoup de clarté dans son article, une lecture aussi rafraîchissante qu’un \`execvp()\` bien documenté.  \r
\r
[Accéder au lien ->](https://blog.danielh.cc/blog/path)\r
\r
`,J=`---\r
layout: post\r
title: Newsletter du 19 Mai 2025\r
tags: [devops, Redis, K8s, Pentest, Git]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Chaque semaine, on se dit que ça va rouler. Une image Docker allégée, une CI qui tourne, des métriques qui tiennent la route. Et pourtant : le binaire Rust pèse une tonne, GitLab se noie dans le YAML, et ta base de logs t’envoie des alertes pour te prévenir qu’elle s’auto-détruit lentement.\r
\r
Alors on cherche mieux, plus simple, plus clair. Cette semaine : on découvre comment faire du FROM scratch proprement, on explore GreptimeDB (le TSDB qui veut tout faire sauf ton café), on tente de dompter Git avec GitSpice, et on se demande si tout ça valait vraiment la peine. Spoiler : oui, un peu, quand même.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Good news ! Redis is open source again :** La base clé-valeur préférée de tous ceux qui veulent aller très vite vers des crashs très violents a décidé de faire machine arrière : après avoir viré de bord avec des licences foireuses genre "open sauf pour toi", les voilà qui  [reviennent sagement sous AGPLv3](https://redis.io/blog/agplv3/). Officiellement, c’est pour "reconstruire la confiance" avec la communauté. Officieusement, on imagine que la vague de forks, la mauvaise presse, le projet Valkey soutenu par la Linux Foundation, et les regards noirs dans les conférences y sont peut-être pour quelque chose.\r
\r
💝 **I use zip bombs to protect my server :** Y’en a qui configurent Cloudflare, d’autres qui s’amusent avec des WAF ou du rate limiting raffiné. Et puis il y a Ibrahim Diallo, qui a choisi une méthode bien plus rustique (et délicieusement mesquine) : balancer des zip bombs aux bots malveillants. [Le principe est aussi simple que cruel](https://idiallo.com/blog/zipbomb-protection)  : un fichier compressé ridiculement petit qui, une fois décompressé par un bot trop curieux, explose à 10 Go. Résultat ? Mémoire saturée, processeur en PLS, et bot potentiellement à genoux. On valide.\r
\r
🥇  **Replacing Kubernetes by systemd :** Voltaire disait que "le superflu est une chose très nécessaire", mais il ne connaissait pas Kubernetes le bougre. Dans son article aussi lucide que rafraîchissant, Yaakov raconte comment il a viré son cluster K8s au profit d’un setup infiniment plus sobre :  [Podman + systemd](https://blog.yaakov.online/replacing-kubernetes-with-systemd/). Résultat : moins de conso, moins de friction, et surtout, moins de syndrome de Stockholm à chaque redéploiement.  \r
\r
🛠️ **Wtfis :** Marre de jongler entre whois, dig, et une douzaine d'onglets dans le navigateur pour obtenir des informations sur un domaine ou une IP suspecte ?  [Wtfis est là pour toi](https://github.com/pirxthepilot/wtfis). Ce petit bijou en ligne de commande interroge plusieurs services OSINT comme VirusTotal, Shodan, et AbuseIPDB pour fournir des informations détaillées sur une cible donnée, le tout dans un format lisible et coloré voire festif diront certains après plusieurs bières un samedi soir mais je m'égare.\r
\r
🦊 **Getting started with Gitlab CI/CD pipeline :** Il arrive un moment où balancer du code en prod à la main, en SSH à 23h, n’a plus rien d’excitant. Alors tu te penches sur GitLab CI/CD, pas parce que c’est à la mode, mais parce que tu veux que ça tienne debout, même quand tu dors. L’article des cowboys de chez Devtron t’explique  [comment poser les premières briques d’un pipeline](https://devtron.ai/blog/how-to-setup-gitlab-ci-cd-pipeline/)  sans sombrer dans une indigestion de YAML. C’est clair, propre, sans fumée magique, et ça te permet enfin de passer du bricolage fébrile à une mécanique un peu plus digne.\r
\r
**👨🏻‍💻 Free ressources to learn pentesting in 2025 :** Il fut un temps où se lancer dans le pentest relevait du parcours du combattant : entre les formations hors de prix, les certifications aux noms ésotériques et les ressources éparpillées aux quatre coins du web, il fallait une sacrée dose de détermination pour ne pas abandonner en cours de route. Mais en 2025, les choses ont changé, preuve en est cet article sur InfoSec Write-ups qui recense  [une multitude de ressources gratuites](https://infosecwriteups.com/free-resources-to-learn-pentesting-in-2025-ebeba2a5960d)  pour s'initier au pentest sans dépenser un centime.\r
\r
**🛢️ GreptimeDB as Prometheus long-term storage :** GreptimeDB, c’est la nouvelle base  [qui veut stocker tout ce que Prometheus oublie](https://blog.anarcher.dev/post/2025/04-13-greptimedb-intro/)  dès que t’as le dos tourné. C’est rapide, cloud-native, plein de promesses… et encore un peu bancal dès qu’on parle de distribuer les données sur plusieurs nœuds. Mais bon, entre Thanos, Cortex et l’enfer des dashboards cassés, y’a peut-être un espoir.\r
\r
</> **Boosting workflow velocity with git-spice :** GitSpice veut fluidifier les workflows git, en empilant les pull requests comme des crêpes bien rangées, enfin, en théorie.  [L’idée, c’est d’augmenter la vélocité des équipes](https://www.rippling.com/blog/boosting-workflow-velocity-gitspice)  en découpant le travail en couches fines, superposables, relisables, fusionnables. Un rêve d’architecte bien organisé, mais à la lecture, on sent poindre cette éternelle question : est-ce qu’on va vraiment plus vite… ou est-ce qu’on complexifie élégamment un truc qu’on ne maîtrise déjà qu’à moitié ?\r
\r
#️⃣ **Ali, generate http load and plot the results in real-time :** Tu pensais que ton service tenait la route ? Lance Ali, et regarde-le imploser en direct. Inspiré de Vegeta et jplot, cet outil de test de charge HTTP t'offre une interface en ligne de commande  [avec des graphiques en temps réel](https://github.com/nakabonne/ali). Pas besoin de rapports JSON à analyser pendant des heures : ici, tu vois immédiatement où ça coince.  \r
\r
🐋 **Docker Compose Generator :** Tu t'apprêtes à monter une stack Docker pour ton serveur perso, mais tu sais que tu vas passer plus de temps à chercher des exemples de docker-compose.yml qu'à réellement déployer tes services. C'est là que  [Compose Generator](https://compose.ajnart.dev/)  entre en scène en te permettant de sélectionner les services que tu veux (Plex, Jellyfin, Sonarr, Radarr, etc.) et en te génèrant un fichier docker compose prêt à l'emploi. Pour une fois que quelqu’un t’aide à faire les choses à moitié mais correctement profites-en.\r
\r
## How to build small and secure Docker images for Rust (FROM scratch)\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
Merci à Julien T pour le partage de cet article qui explique, avec beaucoup de clarté, comment construire des images Docker vraiment minimalistes pour des applis en Rust, et qui te montre comment faire un multi-stage build propre, linker ce qu’il faut, éviter ce qu’il ne faut pas faire, et ressortir avec une image sécurisée, légère, et prête pour la prod (ou ton cluster de test que tu refuses d’appeler “prod”).  \r
\r
[Accéder au lien ->](https://kerkour.com/rust-docker-from-scratch)`,W=`---\r
layout: post\r
title: Newsletter du 02 Juin 2025\r
tags: [devops, ECS, Kubero, Bruno, Packemon]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Cette semaine, on a croisé des outils qui veulent te simplifier la vie (Loggifly, ClusterSecret), des articles qui font semblant que GitLab + Kubernetes, c’est fluide (spoiler : non), et des tentatives pédagogiques où on te vend AWS ECS comme un terrain de jeu alors que tu vas juste y perdre des heures et un peu de foi.\r
\r
Et au milieu de tout ça, des bonnes idées, des projets solides, et des développeurs qui continuent d’essayer de faire tenir debout un monde bâti sur du YAML mal indenté.\r
\r
Si rudeops t’aide à rire, à apprendre, ou à t'éviter un kubectl delete malheureux fais tourner.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**👾 Cyber then and now, inside a 2-decade industry evolution :** Il fut un temps où la cybersécurité consistait à colmater des failles dans Windows XP et à éviter les pop-ups douteux. Aujourd'hui, c'est une industrie tentaculaire, peuplée de buzzwords, de solutions miracle et de conférences où l'on parle plus d'IA que de sécurité. Dans cet article, Dark Reading célèbre ses 19 ans  [en retraçant l'évolution de la cybersécurité](https://www.darkreading.com/cloud-security/cyber-then-now-2-decade-industry-evolution). On y découvre comment une poignée de passionnés est devenue une armée de consultants, comment les vulnérabilités se sont multipliées plus vite que les patches, et comment, malgré l’arsenal technologique, on finit quand même par cliquer sur la pièce jointe facture_finale.exe.\r
\r
⚔️ **Learning ECS the fun way, hosting a Minecraft server :** Lancer un serveur Minecraft, ça devrait être simple : tu lances un JAR, tu ouvres un port, et hop, c’est parti pour 12h de minage frénétique et de constructions absurdes à base de blocs de laine rose. Mais dans cet article, Konstantinos Siaterlis a décidé de corser le jeu : et si, au lieu de double-cliquer sur un exécutable, tu apprenais  [à déployer un serveur sur AWS ECS](https://www.thelastdev.com/p/learning-ecs-the-fun-way-hosting), avec des instances EC2, du Terraform, un load balancer, et juste assez de YAML pour décourager un Creeper ? Bien sûr, Minecraft n’est qu’un prétexte. Ce n’est pas le gameplay qui t’intéresse ici, c’est tout le bordel qu’il faut mettre en place pour faire tourner une bête image Docker dans un cluster managé par ECS. Task definitions, security groups, VPC, IAM, ALB... bref, tout ce que Mojang ne t’a jamais appris à crafter.\r
\r
🥇  **Loggifly :** Imagine un outil qui mate les logs de tes conteneurs Docker comme un stalker à moitié parano, prêt à hurler dès qu’il voit passer un “Error” un peu louche ou un "panic" de trop. C’est Loggifly :  [il scanne tes containers](https://github.com/clemcer/loggifly), cherche les mots-clés ou regex que t’as définis, et balance des alertes dès que ça commence à sentir la combustion spontanée. Et parce qu’il n’a aucune confiance en toi (à juste titre), il peut aussi arrêter ou redémarrer un conteneur s’il détecte un gros mot, genre "Segfault" ou "ElasticSearch". Tu peux le connecter à Ntfy, Apprise, des webhooks, et même ton frigo connecté si t’as envie.\r
\r
☸️ **Kubero, Open Source solution for Kubernetes deployments :** Kubero,  [c’est une plateforme "as a service" open source](https://www.kubero.dev/)  qui te promet de déployer, gérer et faire scaler tes applis sur Kubernetes sans avoir à vendre ton âme ni à lire la doc de Helm jusqu’à l’aube. Autoscaling, haute dispo, GitOps intégré, et tout un tas d’add-ons et de templates prêts à cliquer. Et pour te prouver qu’ils sont pas là pour déconner, ils te filent aussi le monitoring intégré, l’authentification, le scan de vulnérabilités, et même une interface web et une CLI, histoire de ne fâcher personne. En résumé, tu veux Kubernetes, mais sans la douleur ? Kubero veut te faire croire que c’est possible.\r
\r
🏹 **Github Actions vs Jenkins :** Dans un coin, GitHub Actions, jeune, hype, intégré, qui te promet des déploiements faciles tant que tu restes bien sage dans l’écosystème. Dans l’autre, Jenkins, le vieux bourrin increvable, moche mais libre, capable de tout faire… si tu survis à sa config XML et à ses plugins en carton. [L’article des mecs de chez Buildkite compare les deux](https://buildkite.com/resources/blog/github-actions-vs-jenkins-making-the-right-choice-for-your-team/). Spoiler : y’en a pas un pour rattraper l’autre sans un bon café et un peu de haine dans le cœur.\r
\r
🚀  **Bruno :** Dans les ruelles de Montargis, on murmure son nom comme une légende urbaine. À la boulangerie, chez le coiffeur, même au rayon surgelés du Carrefour Market, une question revient :  _"T’as testé Bruno ?"_. Et pour une fois, il ne s’agit pas d'un énième chanteur recalé de l'Eurovision,  [mais d’un client API open source](https://github.com/usebruno/bruno), local-first, qui te laisse bosser sans cloud, sans login, sans fioritures.\r
\r
![](https://storage.mlcdn.com/account_image/325165/8KOzAO85zllygCVHOxSuKVJtjSels32hWpxiu6yp.png)\r
\r
# Un concentré d'infos pour les devs par un dev.\r
\r
Les développeurs, ces étranges mammifères à hoodies, capables de réciter la syntaxe de reduce() en JavaScript mais incapables d’ouvrir un lien sans le CMD+C/CMD+V dans leur terminal préféré. Des êtres brillants, oui, mais parfois un peu... absorbés. Par leur IDE. Ou leurs erreurs de typage. Ou cette promesse de "refacto demain" qui traîne depuis six sprints.\r
\r
Heureusement,  **HappyToDev**  est là. Une newsletter hebdo, pleine de liens triés pour eux, comme on trie des légumes au marché : mûrs, digestes, et pas trop techniques, sinon ça les braque. On y trouve des actus dev, des vidéos, des interviews, des morceaux de veille pour nourrir leur esprit tout en douceur parce qu’une surcharge neuronale pourrait perturber leur flow.\r
\r
C’est bien écrit, ça se lit en moins de 10 minutes (important), et surtout, ça leur donne l’impression de rester informés sans jamais quitter leur bulle de confort VS Code + DuckDuckGo + StackOverflow.\r
\r
[Consulter](https://happytodev.substack.com/)\r
\r
\r
**🕸 Packemon, packet monster :** C’est pas Wireshark, c’est pas joli, mais c’est clair, rapide, et ça tient dans un TUI. Packemon te permet d’explorer ce qui  [transite sur ton interface réseau](https://github.com/ddddddO/packemon)  sans avoir à lancer une appli lourde ni à te perdre dans des menus en cascade. Tu vois passer les paquets, tu filtres, tu observes, c’est un peu rugueux, mais ça fait le boulot.\r
\r
**🐧 Linux cgroup, from first principles :** On vous partage ce joli post qui descend en rappel dans /sys/fs/cgroup pour  [nous expliquer les cgroups v2 sans fioritures ni magic wrapper](https://fzakaria.com/2025/05/26/linux-cgroup-from-first-principles), juste les principes de base, les fichiers système, et une bonne dose de sueur. On va apprendre à limiter la mémoire, le CPU, et l'envie de hurler devant systemd. Bref, c’est moche, c’est bas niveau, c’est Linux. Et c’est fascinant.\r
\r
💝 **Top 11 application logging tools for DevOps engineers in 2025 :** Les outlaws de chez Last9 nous partagent une  [sélection des meilleurs outils de gestion des logs en 2025](https://last9.io/blog/top-application-logging-tools/). Au menu : une galerie d'outils allant de Sematext Logs, qui promet une surveillance des logs et de l'infrastructure sur une seule plateforme, à Logtail, qui mise sur une interface épurée et des fonctionnalités modernes. On retrouve également des classiques comme Grafana Loki, pour ceux qui veulent intégrer la gestion des logs dans leur stack Prometheus/Grafana, et Logz.io, qui propose une solution basée sur l'ELK Stack avec une touche d'IA. Chaque outil est présenté avec ses forces, ses faiblesses, et surtout, son adéquation à différents cas d'usage : que vous soyez une startup en quête de simplicité ou une entreprise établie avec des besoins complexes en observabilité.\r
\r
🤖 **Nerdlog :** Nerdlog est un  [visualiseur de logs en interface texte](https://github.com/dimonomid/nerdlog), rapide, orienté vers les connexions distantes, capable de gérer plusieurs hôtes simultanément, avec un histogramme de la chronologie et sans centralisation. Du bien bel ouvrage.  \r
\r
😱 **Detecting malicious Unicode :** Daniel Stenberg nous relate une mésaventure survenue au sein du projet curl : un contributeur a remplacé une lettre ASCII  [par son équivalent Unicode visuellement identique](https://daniel.haxx.se/blog/2025/05/16/detecting-malicious-unicode/)  dans une URL. Résultat ? Aucun membre de l'équipe ni outil d'intégration continue n'a détecté la supercherie. Une démonstration édifiante de la manière dont des caractères Unicode "confusables" peuvent passer inaperçus et potentiellement introduire des vulnérabilités.\r
\r
\r
## Devops web development success, a project manager's handbook\r
\r
![](https://storage.mlcdn.com/account_image/325165/EipbH28lOYLYtVLmlTenhkkTofbQIzZ5m8EnfOSC.png)\r
\r
Merci à Claire T qui nous a partagé cet article des mecs de chez Netguru qui ont décidé de prendre le taureau par les cornes et d'expliquer aux chefs de projet que le DevOps, ce n'est pas juste une mode pour les barbus en hoodie. Non, c'est une vraie philosophie qui pourrait bien éviter à ton projet de finir en feu de joie le jour du déploiement. L'article détaille comment intégrer les pratiques DevOps dans le développement web, avec des mots doux comme "intégration continue", "déploiement automatisé" et "monitoring en production". Le tout saupoudré de conseils pour que développeurs et ops arrêtent de se regarder en chiens de faïence. En somme, un guide pour que ton projet web ne se transforme pas en Titanic numérique, et que ton équipe puisse enfin respirer entre deux sprints.  \r
\r
[Accéder au lien ->](https://www.netguru.com/blog/devops-web-development)`,Q=`---\r
layout: post\r
title: Newsletter du 16 Juin 2025\r
tags: [devops, Github, IaC, Rust, Kafka]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Il y a des semaines où tout semble marcher. Pas parfaitement, évidemment, Git continue de t’envoyer des messages en elfique, ton pipeline CI ressemble à un vieux flipper belge et kubectl te répond avec l’assurance d’un médium alcoolique, mais globalement, ça tourne.\r
\r
Et puis il y a les autres. Celles où ton infra décide de réinterpréter les lois de la physique. Où Docker oublie où il a mis tes volumes, où Terraform te menace en rouge, et où Prometheus te signale que “tout est OK” juste avant que le serveur prenne feu. Des semaines où tu lis "S3 compatible" comme on lit "couscous garni" sur une boîte de conserve douteuse.\r
\r
Alors tu ouvres RudeOps. Pas pour réparer quoi que ce soit, hein, juste pour lire une veille qui pique un peu moins que ta prod. Avec un peu de chance, tu tomberas sur un outil qui te sauvera 10 minutes ou t’évitera une humiliation en réunion. C’est déjà énorme. Bonne lecture à tous !\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**</> Github becomes go-to platform for malware delivery across Europe :** Les attaquants ont compris que pour rentrer chez toi, il vaut mieux jouer la carte de la confiance, et quoi de plus convaincant qu’un lien GitHub ? Selon Netskope, le phishing est devenu le moyen préféré des hackers pour contourner les contrôles de sécurité en Europe. Adobe et Microsoft restent les stars usurpées (29 % pour Adobe, 26 % pour Microsoft 365), histoire de t’inciter à renvoyer tes identifiants sans trop réfléchir. Résultat : un nombre croissant de fuites involontaires et de comptes cloud compromis.  [Le pompon revenant aux malwares distribués via GitHub](https://www.helpnetsecurity.com/2025/05/28/attackers-phishing-method-europe/), chapeau bas pour l’efficacité et la simplicité.  \r
\r
💝 **Rust is officially in the Linux kernel :** Rust, ce petit gaillard qui promet de supprimer les bugs de mémoire les plus sournois, vient officiellement poser ses valises dans le noyau Linux 6.15 via le pilote NVIDIA NOVA. Le projet Rust-for-Linux, lancé en 2020, affiche sa première gloire :  [un driver GPU en Rust réellement fusionné dans le code source](https://weeklyrust.substack.com/p/rust-is-officially-in-the-linux-kernel). Le gain ? Une promesse de plus de sécurité et moins de use-after-free. Les détracteurs froncent les sourcils, mais Linus, lui, semble plutôt clair : si t’es pas capable de suivre le wagon Rust, tu peux rester à quai .\r
\r
**👾 Nettacker :** Tu pourrais attendre patiemment qu’un script kiddie te ruine ton week-end. Ou alors, tu peux prendre les devants, et faire le boulot toi-même avec classe, sueur, et ---verbose. C’est là qu’arrive  [Nettacker, le scanner made in OWASP](https://github.com/OWASP/Nettacker), avec des modules pour scanner des ports, détecter des failles applicatives, collecter de l’info et te balancer un rapport bien gras en JSON, HTML ou CSV selon ton degré de souffrance préféré. Tu peux cibler du HTTP, du FTP, du CMS oublié dans un coin sombre… ou juste vérifier que tes devs ne déploient pas encore des apps en debug=true.  \r
\r
𝓥 **Lazyvim :** LazyVim,  [c’est un Neovim configuré avec soin](https://www.lazyvim.org/), comme un sandwich triangle industriel, mais sans la tristesse. C’est rapide, c’est modulaire, ça te colle LSP, Treesitter, et tout le nécessaire sans te demander d’aller lire l’équivalent d’un mémoire de master pour comprendre comment fonctionne ton tab-complete. Est-ce encore du Vim ? Peut-être, peut-être pas, mais en tout cas il y a de fortes chances que Lazyvim devienne ton IDE favori.\r
\r
🏹 **Infrastructure as code, what went wrong :** L’Infrastructure as Code devait apporter rigueur, cohérence et paix dans le monde. À la place, elle a semé  [un chaos parfaitement déclaratif](https://thenewstack.io/infrastructure-from-code-what-went-wrong/). Les cowboys de chez The New Stack dressent un constat grinçant : outils fragmentés, développeurs désengagés, pratiques incohérentes et pipelines devenus parfois si complexes qu’on en regretterait presque les scripts shell du siècle dernier.\r
\r
🚀 **Karakeep :** Karakeep, c’est  [un gestionnaire de bookmarks self-hosted](https://github.com/karakeep-app/karakeep)  qui fait bien plus que stocker des URLs : il télécharge le contenu, l’indexe en full-text (Meilisearch), applique de l’OCR, résume les pages avec une IA locale ou OpenAI, et classe automatiquement chaque ressource. Le tout avec extensions navigateur, API REST et une interface propre, prête à dompter ton chaos documentaire. Docker-ready, TypeScript sous AGPL, utilisable en local ou en prod. Et surtout : plus fiable qu’un "à lire plus tard" qui date de 2019. On s'en sert et ouais c'est franchement pas mal.\r
\r
🏃‍♂️  **GoDoxy :** GoDoxy, c’est ce petit bijou qui te permet de faire tourner un proxy en mode host, avec reconnaissance automatique de tes conteneurs Docker via labels, un tableau de bord simple et même un éditeur de config dans l’UI,  [tout ça sans t’arracher les cheveux](https://github.com/yusing/godoxy)  à cause d’un fichier YAML à rallonge, ou d’un label oublié. Le mec est allé plus loin que “ça marche juste” : support multi‑nœuds, OIDC pour l’authent, HTTP/TCP/UDP, rechargement à chaud, génération automatique de certificats Let’s Encrypt, et un mode “idle‑sleep” qui endort tes conteneurs quand personne ne les utilise. C'est écrit en Go, c'est léger, rapide, pensé pour Proxmox, Docker et tout ce qui pourra tourner sur du amd64 ou arm64.\r
\r
🖥️ **Kafka, the end of the beginning :** Kafka fête ses 10 ans sans aucune envie de raccrocher. Mais après une décennie de domination quasi totale, le constat des outlaws de chez Materialized View est brutal : on a bien adopté Kafka…  [mais on n’a guère innové](https://materializedview.io/p/kafka-end-of-beginning). Résultat, ça tourne, ça scale, mais ça n’avance presque plus, coincé dans une boucle de toolschain inchangés, de pipelines galères et de cycles de vente interminables. En gros, Kafka est archi stable, fiable, bien rôdé. Mais briller, recommencer à innover ? C’est plus compliqué que de lancer quelques brokers et un topic.\r
\r
🐋 **How to build run and package AI models locally with docker model runner :** Docker vient de sortir un outil expérimental bourré de promesses et qui  [permet de d'embarquer des modèles d’IA en local](https://www.docker.com/blog/how-to-build-run-and-package-ai-models-locally-with-docker-model-runner/), sans créer un environnement Python galère ni monter un serveur web bancal. Le processus est simple (pour un outil Docker, hein et ton modèle tourne en local, GPU-friendly sur Apple Silicon ou Windows/NVIDIA. Tu peux même pousser tes propres modèles au format GGUF vers un registre, les versionner, les scanner, bref : traiter tes modèles comme des images container. Tu gagnes en latence, tu gagnes en confidentialité (les prompts restent sur ta machine) et tu réutilises tes workflows CI/CD habituels avec Compose ou GitHub Actions.  \r
\r
🪣 **MinIO :** MinIO, ce n’est  [pas juste un S3 open-source](https://github.com/minio/minio)  : c’est l’option pour ceux qui en ont marre de la facture AWS, mais qui veulent  _vraiment_  stocker des pétaoctets sur leur propre grille de serveurs. Un objet store en Go, compatible S3, performant et pensé pour tenir la route à grande échelle, et tout cela sous licence AGPL v3. Avec MinIO, on déploie une stack objet digne de ce nom, qu’on soit sur Docker Compose, Kubernetes ou bare metal. Pas besoin de payer le prix fort quand on peut se construire sa propre version de S3 et en mieux si on sait s’y prendre.\r
\r
\r
## 7 Docker Compose tricks to level up your development workflow\r
\r
![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)\r
\r
Merci à José pour le lien : un article qui sent bon le cambouis et les volumes bien pensés. On y trouve 7 astuces Docker Compose pour rendre ton workflow de dev un peu moins douloureux, et presque élégant si tant est que YAML et élégance puissent cohabiter dans une même phrase. Au menu, des alias qui évitent de taper docker-compose up --build avec les doigts en feu, du montage de code à chaud pour ne plus rebuild à chaque virgule, des networks mieux gérés, des dépendances de services plus propres, et même quelques options de debug qui te feront passer pour un gourou dans l’open space. Ce ne sont pas des hacks obscurs, mais des petits ajustements bien sentis pour ceux qui en ont marre de redécouvrir la doc Compose à chaque bug. Et si tu les connais déjà tous, félicitations : tu es probablement le mec bizarre à qui on envoie les Dockerfiles des autres pour "voir ce qui ne va pas".\r
\r
[Accéder au lien ->](https://dev.to/shrsv/7-docker-compose-tricks-to-level-up-your-development-workflow-14f5)`,Y=`---\r
layout: post\r
title: Newsletter du 30 Juin 2025\r
tags: [devops, Omarchy, K8s, Arsenal, Git]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Il y a dans l’open-source quelque chose qu’aucun contrat de licence ne pourra jamais offrir : la possibilité de choisir. De comprendre ce qu’on utilise, d’en modifier les rouages, d’en assumer les défauts autant que les forces. C’est une lente conquête, parfois silencieuse, souvent discrète, mais qui, à mesure qu’elle progresse, redessine les contours d’une souveraineté numérique trop longtemps sacrifiée sur l’autel du confort.\r
\r
Le Schleswig-Holstein a ouvert la voie. Plutôt que de s’en remettre une énième fois aux GAFAM, ce Land allemand migre ses 30 000 postes vers Linux, LibreOffice, Nextcloud, Mastodon, pas pour le fun ni pour envoyer un signal, mais pour reprendre le contrôle tout simplement.\r
\r
Et le Danemark lui emboîte le pas. Bruxelles n’a même pas fini de se fâcher sur les traitements de données personnelles par Microsoft 365 que Copenhague, à son tour, décide de claquer la porte. Plus question de négocier des contrats dans le brouillard, ni de stocker des données publiques dans des datacenters étrangers aux juridictions floues. Place à l’open-source, à des outils qu’on peut inspecter, adapter, sécuriser. Pas parce que c’est gratuit, mais parce que c’est maîtrisable.\r
\r
C’est une voie exigeante, oui. Elle demande des moyens, des compétences, une vision à long terme, mais c’est une voie royale, celle qui fait de l’open-source non pas une rustine de geek barbu, mais un projet d’avenir sérieux, structuré et souverain.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**☸️ What would a Kubernetes 2.0 look like :** Dix ans après ses débuts, Mat Duggan s’interroge :  [et si Kubernetes avait une version 2.0](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/), à quoi ressemblerait-elle pour enfin résoudre la complexité qui nous prend à la gorge ? Il suggère plusieurs remèdes : dire adieu à YAML, remplacer etcd, imaginer un gestionnaire de packages type “KubePkg” inspiré des .deb ou .rpm, et surtout offrir une solution plus simple pour que les ops débutants ne fassent pas exploser leur cluster au premier apply.\r
\r
💝 **Bighuge BLS Osint Tool (BBOT) :** BBOT, c’est le scanner open-source par excellence : tu donnes une cible (domaine, IP, URL…),  [et il va fouiller partout](https://github.com/blacklanternsecurity/bbot)  : sous-domaines, ports ouverts, certificats SSL, captures web, vulnérabilités via Nuclei… le tout avec plus de 80 modules, sans script artisanal ni phase manuelle. Au cœur de l’engin : un moteur récursif où chaque découverte nourrit les autres modules, jusqu’à saturation, pour ne rien louper dans ta surface d’attaque.\r
\r
**</> Git Smart Squash :** Terry Pratchett écrivait "Les mages croient à la documentation. Ils aiment la documentation. Ils l’écrivent même parfois". Et si Git avait lu Pratchett, il t’aurait évité cette succession de commits débiles genre : "typo", "fix", "revert revert", "je sais pas ce que je fais", "ça marche enfin", "non en fait". C’est là qu’intervient Git-Smart-Squash, un outil  [qui appelle une IA à la rescousse](https://github.com/edverma/git-smart-squash)  pour te transformer ce magma en une jolie histoire cohérente et bien rangée. Tu balances ta branche, il te pond deux ou trois commits clairs, regroupés logiquement, avec des messages qui ressemblent à quelque chose. En local avec Ollama si t’es responsable, en ligne avec OpenAI si t’as la flemme. Il te montre le plan, te demande confirmation, garde un backup au cas où, et hop, tu passes pour quelqu’un de sérieux.\r
\r
🐧 **Omarchy, bottling that inspiration before it spoils :** DHH (le papa de Rails), pris d’une soudaine envie de réinventer sa station de travail comme on refait sa cuisine à 3h du mat, a troqué son Ubuntu pour Arch + Hyprland. Pas parce que c’était rationnel, non : parce qu’une bouffée d’inspiration l’a frappé. Et comme souvent avec ce genre d’élan, ça s’est terminé en projet open source.  [Omarchy est donc né](https://world.hey.com/dhh/omarchy-is-out-4666dd31). Une Arch Linux préconfigurée à sa sauce, avec tiling, esthétique soignée et scripts maison. Pas un produit, pas une promesse, juste le reflet d’un moment, celui où on casse tout ce qui marche pour retrouver ce petit frisson du contrôle absolu.\r
\r
🏹 **Detecting vulnerabilities in public Helm charts :** On parlait plus haut de Kubernetes 2.0, mais en attendant que cette version magique tombe du ciel on reste avec la vraie vie : des charts publics tellement troués qu’on pourrait y faire passer un tunnel VPN. Car pendant que certains rêvent d’un K8s refondu, plus simple, plus humain, d’autres balancent joyeusement des "helm install" sans lire ce qu’ils installent. Et là, c'est le drame :  [des services exposés au monde entier](https://allthingsopen.org/articles/detecting-vulnerabilities-public-helm-charts), des secrets codés en dur, des RBAC en mode open bar, et du Trivy qui hurle en CAPS LOCK. Alors oui, Kubernetes 2.0, c’est peut-être demain. Mais aujourd’hui, le seul garde-fou entre toi et un cluster transformé en hotspot pour script kiddies en reconversion, c’est toi, ton terminal et un peu de paranoïa.\r
\r
🚀 **ArgoCD, a practical guide to Gitops on Kubernetes :** Un chouette guide pondu par les cowboys de chez SitePoint qui t’expliquent comment apprivoiser ArgoCD sans finir en PLS devant ton cluster. ArgoCD, c’est le collègue qui ne dort jamais, qui relit tes fichiers YAML sans râler et qui remet ton cluster en place dès qu’il s’éloigne un peu trop de ce que Git avait prévu. Fini les “ah mince j’ai patché à la main”, fini les “je crois que c’est à jour”, fini les clusters bipolaires. Branché directement à ton dépôt, il veille, compare, corrige, rollback au besoin, et te donne presque l’illusion que le chaos est maîtrisable.  [C’est pas magique, c’est juste GitOps](https://www.sitepoint.com/power-of-argocd-with-kubernetes/), mais bien fait.\r
\r
⚡ **Highlights from Git 2.50 :** Git 2.50 est arrivé, et c'est une dinguerie comme on dit à Montargis. Finis les dépôts obèses pleins de blobs oubliés, le moteur de merge ORT devient le nouveau standard, plus rapide et plus simple que l'antique recursive, MIDX s’optimise, les lookups s’accélèrent, et git reflog delete fait son apparition pour nettoyer proprement l’historique.  [En résumé, Git transpire moins](https://github.blog/open-source/git/highlights-from-git-2-50/), pédale plus vite, et te laisse un peu plus de temps pour comprendre pourquoi tu merges encore sur main à 23h00 un dimanche soir.\r
\r
🎯 **Mitmproxy, an interactive TLS-capable intercepting proxy :** mitmproxy, c’est ton proxy man-in-the-terminal : tu interceptes, modifies et rejoues le trafic HTTP, HTTPS, WebSocket, comme un Retailleau en pleine descente d'acides. Interface terminal ou web, API Python pour tout tordre à la volée, certificats générés à la main ou presque.  [Idéal pour mater ce que ton app envoie vraiment](https://github.com/mitmproxy/mitmproxy)  ou injecter du chaos dans un backend trop confiant.\r
\r
🥇 **Arsenal :** Arsenal (rien à voir avec le club de foot lol) c'est un peu le Graal du pentester pressé : tu cherches un outil, tu sélectionnes une commande, et hop, elle se tape toute seule dans ton terminal. C’est le rêve  [quand tu ne te souviens plus de la commande exacte de nmap](https://github.com/Orange-Cyberdefense/arsenal)  pour scanner ton réseau ou des arguments de gobuster. Tu peux même définir des variables globales comme ip pour qu’elles s’insèrent dans les bonnes options automatiquement, sans te retaper la doc. Franchement, c’est peut-être l’outil qui nous a le plus bluffés depuis un bon moment, bravo aux outlaws de Orange Cyberdefense pour le taffe !\r
\r
😱 **Sshx, a secure web-based collaborative terminal :** sshx, c’est du partage de terminal en live, sans VPN ni juron. Tu lances un binaire Rust, tu files un lien,  [et ton collègue voit tout, tape avec toi](https://github.com/ekzhang/sshx), et même te parle via un mini chat. Tout est chiffré, tout marche dans tous les shells, et les commandes vont dans l’historique comme si c’était toi. C’est du pair programming sans Teams, du support sans souffrance, et du cloud sans bullshit.\r
\r
## Keep calm and respond, a beginner's heuristic to incident response\r
\r
![](https://storage.mlcdn.com/account_image/325165/hbOBBbeE1ptChGsF38RdxirD2wpn6d2zqs7g8Klr.png)\r
\r
  \r
\r
On passe au courrier des lecteurs, et aujourd’hui c’est Sylvain D., SRE sous le soleil de la Côte d’Azur qui nous a partagé un lien bien utile pour garder son sang-froid quand tout brûle. Dans ce billet, on découvre une méthode simple pour structurer sa réponse aux incidents, sans hurler “ROLLBACK” au hasard ni envoyer des gifs paniqués sur Slack. L’approche repose sur six axes à explorer : cause, impact, périmètre, utilisateurs touchés, erreurs observées et temporalité. Pas de magie, juste du bon sens balisé, un pense-bête pour les cerveaux fondus à 3h du mat.\r
\r
Merci Sylvain, et bon courage si un jour tes alertes tombent un 15 août à midi.\r
\r
[Accéder au lien ->](https://dzone.com/articles/keep-calm-and-respond-a-beginners-heuristic-to-inc-1)`,X=`---\r
layout: post\r
title: Newsletter du 15 Juillet 2025\r
tags: [devops, Chiko, Somo, Docker, CI/CD]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Vous la sentez, cette odeur de tickets qu’on ne fermera pas avant septembre ? Nous aussi. Et c’est pas qu’on vous aime pas, c’est juste qu’on a mieux à faire (bronzer, râler sur le wifi du camping, oublier son badge d’astreinte...).\r
\r
Donc cette semaine, on fait court, très court, le strict nécessaire balancé sans fioritures entre deux tentatives pour faire croire qu’on bosse encore un peu.\r
\r
On reviendra en septembre, reposés, motivés, et avec une todo pleine de side-projects qu'on ne finira jamais.\r
\r
Bonnes vacances à ceux qui partent, avec une pensée particulière pour ceux qui restent.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
😱 **Serving 200 million requests per day with a cgi-bin :** Un mec a servi 200 millions de requêtes avec… du CGI. Oui,  [ce truc des années 90](https://jacob.gold/posts/serving-200-million-requests-with-cgi-bin/). Pas de conteneurs, pas de microservices, juste du bon vieux binaire qui répond direct, comme quoi, quand c’est bien fait, même les technos considérées comme mortes peuvent humilier des stacks modernes entières. Je cherche une nounou pour le chat pendant mes vacances faire offre par email.\r
\r
🐋 **Dockman :** Une énième interface graphique pour Docker qui fait le job sans en faire des caisses. C’est écrit en Go,  [ça tourne sous Linux](https://github.com/RA341/dockman), et ça dépanne bien quand on veut voir ses conteneurs sans lancer une guerre dans le terminal. Pas révolutionnaire, mais propre, utile, et open source.\r
\r
💝 **Chiko :** Un chouette  [client gRPC en mode terminal](https://github.com/felangga/chiko). Pas de clics, pas d'interface web qui rame, juste un CLI propre pour interagir avec des services gRPC. Mais où est mon bon dieu de maillot de bain ?\r
\r
🥇 **Somo :** Somo c’est  [netstat mais en version lisible](https://github.com/theopfr/somo). Un TUI en Rust pour voir en temps réel ce qui écoute, ce qui cause, et ce qui squatte tes ports, juste l’essentiel pour comprendre pourquoi encore une fois ton app refuse de binder le 8080.  \r
\r
🏹 **Using ArgoCD to deploy to multiple clusters :** Un tips pratique pour déployer sur plusieurs clusters  [avec ArgoCD et ApplicationSet](https://itnext.io/using-applicationset-to-deploy-to-multiple-clusters-28f6879be217). Rien de magique, juste un YAML bien structuré qui évite de copier-coller ton déploiement dans trois répertoires différents. Penser à réserver un restaurant à Bonifacio.\r
\r
🚀  **How Discord stores trillions of messages with high performance :** Un chouette article dans lequel on apprend comment  [le talkie-walkie de SF stocke des trillions de messages](https://blog.bytebytego.com/p/how-discord-stores-trillions-of-messages)  sans base de données "next-gen", sans event mesh distribué, et sans cluster Kubernetes qui se prend pour un datacenter. Juste du sharding, du Postgres solide, du cache, et une équipe qui préfère que ça marche plutôt que d’en parler dans une conf.\r
\r
🏃‍♂️ **CI/CD observability with Opentelemetry :** Un excellent guide pour brancher OpenTelemetry sur ta CI/CD et enfin comprendre pourquoi ton pipeline passe plus de temps à  ["préparer l’environnement"](https://signoz.io/blog/cicd-observability-with-opentelemetry/)  qu’à déployer ton app. C’est bien foutu, ça demande un peu de tuyauterie, mais au moins tu pourras dire “latence observée” au lieu de “ça rame, je sais pas pourquoi”.\r
\r
🤖 **Monitoring my homelab, simply :** Un retour d’expérience sur du monitoring de homelab simple,  [sans Prometheus qui mange 2 Go de RAM](https://b.tuxes.uk/simple-homelab-monitoring.html)  juste pour surveiller ton frigo. Des outils légers, lisibles, qui font le taf sans tableau de bord interactif en WebGL. C’est minimaliste, clair, et ça rappelle qu’on peut monitorer proprement sans monter un cluster pour trois services qui tournent dans un coin. Il faut vraiment un passeport pour aller à Djerba ??\r
\r
🎯 **CI/CD input, secured and prefered method to pass parameters to a pipeline :** Les cowboys de chez GitLab introduisent enfin des "CI/CD inputs" pour passer des paramètres aux pipelines de façon plus propre et sécurisée.  [Finies les variables d’environnement détournées](https://about.gitlab.com/blog/ci-cd-inputs-secure-and-preferred-method-to-pass-parameters-to-a-pipeline/)  ou les hacks en cascade. C’est clair, structuré, et ça tombe bien parce qu'on préfère laisser un YAML propre que des tickets ouverts en partant en congés.  \r
\r
🔳 **Tattoy :** On a découvert Tattoy, un compositeur visuel pour terminal, qui intercepte l’affichage du shell pour y  [superposer des effets visuels](https://tattoy.sh/)  comme des shaders GPU, une mini-carte du scrollback, ou encore un deuxième terminal en arrière-plan. C’est configurable en JSON, compatible avec ShaderToy, et c'est clairement le genre d’outil qu’on installe "pour voir", puis qu’on garde parce que c’est aussi inutile que joli.\r
\r
## Build your own private cloud at home with Docker\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
Merci à Fabrice pour le lien, et pour nous rappeler qu’on peut toujours faire compliqué… chez soi.\r
\r
L’article des outlaws de chez The New Stack nous explique comment monter son propre "cloud privé" à la maison avec Docker. Traduction : tu vas empiler des conteneurs (Traefik, Portainer, Nextcloud, etc.) sur un vieux PC pour retrouver à peu près les mêmes galères qu’en prod, mais avec le chauffage gratuit en prime. C’est bien fichu, plutôt accessible, et parfait pour ceux qui veulent un labo maison (c'est à la mode) avec une touche DevOps sans passer par AWS pour héberger trois fichiers et un carnet de recettes.\r
\r
[Accéder au lien ->](https://thenewstack.io/build-your-own-private-cloud-at-home-with-docker/)`,Z=`---\r
layout: post\r
title: Newsletter du 01 Septembre 2025\r
tags: [devops, Github, Git, Docker, Wazuh]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Bonne rentrée à toutes et tous. On rallume les écrans, on éteint les promesses trop brillantes, et on remet la machine en marche sans demander l’autorisation à Git.\r
\r
Au menu des sujets récents : Wazuh en prod sans rançon à la ligne, cURL qui se balade jusque dans les voitures (oui, votre SUV fait des GET), Vim qui prétend être un bureau complet et le fait plutôt bien, un petit  _git rebase --rebase-merges_  pour larguer les commits qui n’auraient jamais dû naître, Copyparty pour partager des fichiers sans monter une cathédrale, et des astuces GitHub Workflows pour que la CI arrête de ronger vos week-ends.  \r
\r
Cap sur l’utile : automatiser, documenter, livrer. Bon courage, et bravo d’avance pour les petites victoires de la semaine.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️ **Auf Wiedersehen Github :** C'est le psychodrame de l'été, Thomas Dohmke, boss de GitHub,  [démissionne pour monter une startup](https://github.blog/news-insights/company-news/goodbye-github/). Résultat, plus de CEO et GitHub est digéré fissa par la division CoreAI de Microsoft. L’indépendance ? C’était sympa, merci d’être passés. Officiellement, tout va bien : un milliard de dépôts, Copilot qui cartonne, 150 millions de devs… Dans les faits, GitHub devient juste un appendice de la machine IA de Redmond. L’open-source survivra, bien sûr, mais il faudra désormais l’écrire avec une astérisque  _"propulsé par Microsoft"_, ou lorgner du côté de Gitlab par exemple.\r
\r
🤖 **Wazuh :** Wazuh, c’est le SIEM/XDR qui ne te facture pas le droit de regarder tes propres logs. Pendant que les suites "enterprisées" empilent des stickers "AI" et des abonnements à rallonge, lui fait le taffe : collecte, corrélation, détection, FIM, vulnérabilités, conformité… le tout open source, sans chorégraphie PowerPoint. Et comme chez RudeOps on préfère les paquets aux promesses,  [votre serviteur a pondu un papier maison qui déroule l’installation dockerisée](https://www.linkedin.com/pulse/s%25C3%25A9curiser-son-homelab-et-les-pc-des-ados-avec-wazuh-une-beaufrere-2inae/), le déploiement des agents multi-OS et deux-trois intégrations utiles pour transformer vos alertes en signal (et pas en karaoké de Slack).\r
\r
🛠️ **Car brands running Curl :** Des centaines de millions de voitures, bardées d’électronique, de capteurs et d’assistants vocaux schizophrènes, roulent chaque jour avec, sous le capot, une dépendance critique : libcurl. Oui,  _ce_  libcurl.  [Celui né dans une chambre d’étudiant](https://daniel.haxx.se/blog/2025/08/15/car-brands-running-curl/). Celui qui permet de faire un GET sans crasher, celui maintenu à bout de café par Daniel Stenberg depuis vingt-cinq ans. Tesla, Toyota, BMW et quarante-quatre autres constructeurs l’utilisent dans leurs systèmes embarqués, et comme il se doit dans l’open-source moderne, pas un rond ne redescend à celui qui maintient ce miracle discret de stabilité.\r
\r
🥇  **This website is served from nine Neovim buffers :** Gábor Nyéki, en bon bricolo du clavier, a transformé Neovim en serveur HTTP avec sa nouvelle extension Lua,  [nvim‑web‑server](https://vim.gabornyeki.com/). Pas besoin de Node, Python ou autre usine à gaz, juste Neovim, libuv et un peu de Djot. Et, accrochez-vous, c’est même plus rapide qu’un Nginx classique pour servir du contenu statique tout ça depuis un ThinkPad de 2012.  \r
\r
</> **Git rebase drop :** Un chouette tuto qui nous explique comment utiliser  [git rebase --drop](https://alchemists.io/articles/git_rebase_drop) pour se débarrasser proprement de commits embarrassants. Finies les manipulations pénibles ou les reverts empilés comme des pansements mal collés : une simple option, et l’histoire se réécrit comme si la faute n’avait jamais existé, c’est élégant, pratique, et terriblement humain dans son hypocrisie.\r
\r
🏹 **Host your own file server with Copyparty and Docker :** Si vous avez déjà rêvé d’une manière simple de partager et gérer vos fichiers depuis votre propre serveur sans plonger dans des installations lourdes et capricieuses,  [Copyparty mérite un détour](https://noted.lol/copyparty/). C’est un serveur léger qui se lance en quelques secondes et vous offre aussitôt upload, download, partage protégé par mot de passe, WebDAV, recherche et même prévisualisation de documents. Copyparty tient une promesse simple et redoutablement efficace : rendre l’auto-hébergement des fichiers aussi naturel que de glisser un dossier sur son bureau.\r
\r
🚀  **Github workflow tips and tricks :** Un chouette billet qui partage une poignée de  [bonnes pratiques pour améliorer vos workflow](https://blog.frankel.ch/github-workflows-tips-tricks/)  sous Github comme structurer ses jobs comme des modules, exploiter les matrices sans transformer le fichier en sudoku, ou encore presser un peu plus de jus du parallélisme pour ne pas attendre trois plombes un build qui compile déjà ailleurs. Rien de magique, juste du bon sens et quelques raccourcis bien sentis pour rendre vos pipelines moins capricieux.\r
\r
🐋 **Running our docker registry on-prem with Harbor :** Les outlaws de chez  37signals ont lâché  [Docker Hub et AWS ECR](https://dev.37signals.com/running-our-docker-registry-on-prem-with-harbor/)  pour installer Harbor chez eux : propre, rapide, et sans les factures salées. Résultat : des images stockées dans leur propre datacenter, trois fois plus vite en push/pull, zéro leak de credentials intempestif et des coûts réduits malgré le trafic intensif. Ils se sont entourés de leurs propres espaces S3 (Pure FlashBlade), ont déployé deux datacenters répliqués via Terraform, activé des politiques de rétention pour limiter la taille, et conçu un harbor.yml minimaliste mais fonctionnel.\r
\r
💝 **Aced :** C**'**est l’outil qu’il te faut si tu veux inspecter à l’œil nu les  [permissions Active Directory (DACL)](https://github.com/garrettfoster13/aced). Il t’aide à décortiquer ce que tu as vraiment le droit de faire avec un compte ciblé : qui peut lister ses droits, quelles permissions sont laissées en libre-service, et même résoudre les SIDs associés sans te noyer dans des scripts LDIF indigestes. Simple, direct, et parfait pour vérifier si ton domaine est un château fort ou un panier percé.\r
\r
🚢 **Docker alternatives to Bitnami :** Bitnami, désormais aux mains de Broadcom, a décidé que  [l’open-source c’était bien](https://www.docker.com/blog/broadcoms-new-bitnami-restrictions-migrate-easily-with-docker/), mais surtout pour ceux qui peuvent payer. À partir du 29 Septembre, plus question de tirer des images versionnées depuis docker.io/bitnami sans passer à la caisse. Seuls quelques tags latest resteront disponibles, le reste part dans un repo legacy figé dans l’ambre. L’article des mecs de chez Docker liste quelques alternatives pour migrer proprement sans finir enfermé dans un abonnement à cinq chiffres.  \r
\r
👾 **Dele.To : C**’est l’outil parfait pour partager un mot de passe sensible ou une clé API sans risquer que tout devienne public. Les données sont  [chiffrées en AES‑256 dans ton navigateur](https://github.com/dele-to/dele-to)  avant même d’être envoyées, les clés ne quittent jamais ton poste, et le lien s’autodétruit après un certain nombre de vues. Pratique, moderne, sans inscription, mais garde en tête que ce truc est encore tout neuf, sans audit derrière. Ça donne envie, mais un peu de parano ne fait pas de mal.\r
\r
## How Engineers are Automating More with Less\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
On passe maintenant au courrier des lecteurs. L’été a été calme côté mails, sans doute parce que tout le monde était trop occupé à debug en tongs ou à éviter Slack depuis un transat. Mais on a quand même reçu un message d’Arthur D. qui nous a partagé un article intéressant sur les tendances DevOps du moment.\r
\r
Le papier explore comment les ingénieurs tentent de faire plus avec moins : moins d’outils, moins d’étapes manuelles, moins de migraine. L’ère est à l’unification, à l’automatisation poussée, et à la recherche désespérée de solutions simples dans un paysage toujours plus complexe. Spoiler : tout le monde veut tout automatiser, mais personne ne sait encore exactement avec quoi. Merci Arthur et bon courage si tu tentes toi aussi de réduire ta stack sans tout casser.\r
\r
[Accéder au lien ->](https://devops.com/how-engineers-are-automating-more-with-less-trends-in-devops-tooling/)`,$=`---\r
layout: post\r
title: Newsletter du 15 Septembre 2025\r
tags: [devops, Gitops, Git, Docker, Hurl]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
Il y a des semaines où l’actualité tech déborde de nouveautés, de scripts malins, de retours d’expérience bien sentis. Et il y a celles où l’on se dit qu’on ferait mieux d’aller promener son laptop dans un champ, loin des clusters K8s et des pipelines qui refusent de build.\r
\r
Mais voilà, on est là. On continue de lire, de tester, de partager. Parce que sous les commits mal commités et les conférences trop longues, il y a encore des idées, des outils et des pratiques qui valent le détour.\r
\r
Cette semaine, on parle d’open source qui gratte, d’automatisation qui pique, et de ces petites trouvailles techniques qui rendent le quotidien un peu moins absurde. Comme toujours, pas de promesse de miracle, juste de quoi nourrir votre veille, et peut-être, vous arracher un sourire en prime.\r
\r
Bonne lecture.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **MLOps vs DevOps, essential differences for tech leaders :** Un choc des titans… du buzzword. D’un côté, DevOps, cette vieille bête fatiguée qui automatise les pipelines, surveille les logs et pousse du YAML jusqu’à ce que mort s’ensuive. De l’autre, MLOps, son cousin sous acide, qui fait la même chose mais en ajoutant du  _"réentraînement automatique de modèle supervisé par CI/CD"_, du  _"monitoring de dérive statistique"_, et une bonne dose de confusion sémantique. [Les cowboys de chez Netguru tentent de clarifier](https://www.netguru.com/blog/mlops-vs-devops)  : les outils se ressemblent, les métiers s’éloignent. Là où DevOps s’occupe de déployer des services stables, MLOps gère des modèles instables. Là où DevOps flique des erreurs humaines, MLOps tente de prévenir les erreurs... mathématiques. Bref, deux mondes, une même promesse : tout casser plus vite, mais proprement.\r
\r
</> **Never fear git conflict again :** Git, c’est un peu comme la plomberie d’un vieux manoir victorien : tant que personne ne touche à rien, ça tient. Mais dès que deux personnes bricolent la même canalisation en parallèle, tu te retrouves les pieds dans l’eau avec un message de conflit que même Trump n’aurait pas osé écrire. Le billet revient sur ce grand classique :  [pourquoi Git te hurle dessus quand tu merges un pull request](https://apps.theodo.com/article/never-fear-git-conflicts-again-smart-tips-for-smooth-merges)  pourtant validé, comment il découpe tes fichiers en "hunks", pourquoi changer deux lignes différentes peut quand même foutre le feu à ton diff, et comment résoudre tout ça sans te noyer dans les options. Entre les algos de diff façon histogramme, les options qu’on confond tous, et le rerere qui enregistre tes choix comme un stagiaire zélé, il y a de quoi éviter de refaire la même galère trois fois.\r
\r
🥇  **Supercharge your git workflows :** Imagine un monde où git clone ne dure pas plus longtemps qu’un discours de Bayrou, un monde où cloner Chromium ne nécessite pas une pause déjeuner complète, un massage crânien et une reprise de contexte, un monde sans 95 minutes d’attente, sans disques saturés, sans CI qui tourne dans le vide en brûlant ton budget cloud. [Ce monde, c’est](https://about.gitlab.com/blog/supercharge-your-git-workflows/) _[Git Much Faster](https://about.gitlab.com/blog/supercharge-your-git-workflows/)_. Un script pas très joli, mais diablement efficace, conçu pour benchmarker et optimiser les clones de gros dépôts Git, avec des stratégies comme le ---depth=1, les clones partiels, l'usage de Scalar, et des configurations qui insultent gentiment les réglages par défaut de Git. Résultat : des gains absurdes, des pipelines qui redémarrent, et des devs qui pleurent un peu moins. Alors non, ça ne résout pas tous tes problèmes de monorepo mutant et de JPEG dans Git, mais ça tape fort là où ça fait mal : sur la lenteur. Et pour une fois, ce n’est pas un plugin VS Code qui prétend changer ta vie.\r
\r
📦 **SafeDep Vet :** Vet, c’est un outil pour ceux qui n’ont plus envie de vivre dans le déni des dépendances.  [Un scanner de packages open source](https://github.com/safedep/vet), qui fouille dans tes projets (Go, npm, PyPI, Maven…) pour identifier les bibliothèques abandonnées, les versions vulnérables, les trucs douteux, les trucs trop vieux, et les trucs que tu n’as jamais compris mais que tu as mergé quand même parce que "ça buildait". Pas de magie, pas de chichi : un tableau de bord brut, des alertes claires, et un petit goût amer quand tu découvres que tout ton backend repose sur une lib maintenue par un certain "g33kman42" plus actif depuis 2017.\r
\r
🦊 **Getting started with Gitlab CI/CD pipeline :** Il arrive un moment où balancer du code en prod à la main, en SSH à 23h, n’a plus rien d’excitant. Alors tu te penches sur GitLab CI/CD, pas parce que c’est à la mode, mais parce que tu veux que ça tienne debout, même quand tu dors. L’article des cowboys de chez Devtron t’explique  [comment poser les premières briques d’un pipeline](https://devtron.ai/blog/how-to-setup-gitlab-ci-cd-pipeline/)  sans sombrer dans une indigestion de YAML. C’est clair, propre, sans fumée magique, et ça te permet enfin de passer du bricolage fébrile à une mécanique un peu plus digne.\r
\r
**🐋 Docker approaches to multiple environments :** Configurer plusieurs environnements avec Docker, c’est un peu comme essayer de jouer à Dwarf Fortress sur une TI-83 : théoriquement possible, mais personne ne devrait avoir à vivre ça. Tu penses faire propre avec un docker-compose.override.yml, et tu finis avec des conteneurs qui s’appellent api-test-prod2-bis, des fichiers .env dans .env.local.env, et un volume nommé data_legacy_maybe. [Le billet des mecs de chez SimpleThread essaie de remettre un peu d’ordre dans cette mare de YAML visqueux](https://www.simplethread.com/docker-approaches-to-multiple-environments/). Fichiers de conf, branches Git par environnement, ou scripts dignes d’un rite vaudou à base de sed et de jq : tout y passe. Pas de miracle, mais une bonne piqûre de rappel pour les âmes égarées.\r
\r
Ⓐ **Hands on automatisation with Ansible :** Écrire des playbooks Ansible, c’est un peu comme tenter de dresser un troupeau de chats en pyjama avec un sifflet à ultrasons : c’est élégant dans l’intention, mais très vite ça miaule dans tous les sens. [Le billet de Faun revient aux bases](https://faun.pub/hands-on-automation-with-ansible-ff724d6bba7a)  : installation, inventaire, modules, état idempotent… Une balade main dans la main avec Ansible, comme si YAML était ton ami et que les erreurs de syntaxe ne te coûtaient pas trois heures de ta vie. Si tu débutes, c’est plutôt bien fichu, si tu es vétéran, ça te rappellera une époque où tu croyais encore qu’un ansible-playbook site.yml allait marcher du premier coup.\r
\r
💝 **Hurl :** Tester des API avec curl, c’est pratique… jusqu’à ce que ton fichier de commandes ressemble à un grimoire en JSON mal formaté, et que tu te demandes si tu n’aurais pas dû devenir boulanger. Hurl,  [c’est un peu le chaînon manquant entre curl et une vraie syntaxe](https://github.com/Orange-OpenSource/hurl)  lisible. Tu écris tes requêtes HTTP comme des scripts propres, avec des assertions, des variables, des imports, et même un retour chariot de temps en temps. Pas besoin de Node, pas besoin de Swagger, juste du texte bien foutu et une CLI qui va droit au but.\r
\r
🛠️ **Zizmor :** Zizmor est un chouette outil de  _static analysis_  open source pour GitHub Actions.  [Il scanne tes workflows](https://github.com/zizmorcore/zizmor) pour détecter les failles les plus courantes : actions non “pinées” (utilisation de tags vagues), permissions trop larges, triggers risqués, templates vulnérables ou encore commits imposteurs. Tu l’installes comme un binaire Rust, tu l’ajoutes à ta CI, et il te sort un rapport clair pour que tu puisses corriger ton chantier avant qu’il ne devienne un problème.\r
\r
😱 **GitOps vs IaC :** GitOps vs IaC, c’est un peu comme demander si tu préfères un tournevis électrique ou un tournevis plat : les deux font le boulot, mais l’un tourne tout seul pendant que l’autre te laisse te visser le poignet. [L’article des outlaws de chez Spacelift](https://spacelift.io/blog/gitops-vs-iac)  remet un peu d’ordre dans la tambouille terminologique : non, GitOps n’est pas juste de l’IaC avec un dépôt Git. C’est un modèle d’exploitation, une philosophie de déploiement, une religion pour certains, un enfer YAML pour d’autres. L’idée ? Tu ne déploies plus, tu  _déclares_ et c’est l’agent qui se tape le sale boulot. L'IaC reste un outil : Terraform, Pulumi, Ansible… c’est ce que tu écris. GitOps, c’est comment tu l’utilises. Si l'IaC est le code de la route, GitOps, c’est l’autopilote qui respecte les limitations (ou pas).\r
\r
\r
## The origin story of merge queues\r
\r
![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)\r
\r
Cette semaine, merci à Arnaud T. pour son partage d’un article sur l’origine des merge queues.\r
\r
On y découvre comment une simple idée ("et si on arrêtait de péter la prod à chaque pull request ?") a donné naissance à l’un des outils les plus sous-estimés du CI moderne. L’équipe des intellos de chez Mergify y raconte la genèse de ces files d’attente à merges, conçues pour éviter le chaos quand dix devs décident de merger en même temps le vendredi à 17h.\r
\r
C’est bien raconté, étonnamment humain, et ça rappellera à certains pourquoi ils ont un bouton pause dans leur CI/CD. Une lecture utile pour quiconque a déjà pleuré devant un rebase, ou tenté d’expliquer à un Product Owner pourquoi “ça marchait sur la branche d’avant”.\r
\r
[Accéder au lien ->](https://mergify.com/blog/the-origin-story-of-merge-queues)`,ee=`---\r
layout: post\r
title: Newsletter du 29 Septembre 2025\r
tags: [devops, Kali, Harborguard, Docker]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
On ne sait plus très bien à quel moment on a commencé à écrire des newsletters DevOps sur fond de jazz free et de bières tièdes, mais ce mois-ci, quelque chose a définitivement basculé. Était-ce le froid ? Les projets absurdes aux noms encore plus absurdes ? Le moment où l’on a découvert que “sudo” allait être remplacé par “sudo-rs” et qu’on a ri, un peu trop fort, avant de pleurer dans un coin de l'open space ? Peut-être.\r
\r
Toujours est-il qu’on continue, parce qu’on croit encore, quelque part, au pouvoir de la veille technique, même noyée sous des PowerPoint multicolores, des VPN qui tombent et des managers qui disent “agilité” comme on dit “synergie”. Et puis, entre deux failles critiques et trois outils en “.sh”, il y a parfois une étincelle : un projet open source qui ne demande rien, un script crado qui sauve la prod, un RSS qui vous fait sourire.\r
\r
Alors oui, on parle ici de trucs obscurs avec un sérieux très relatif, mais si ça peut vous éviter un apt remove regrettable, un git push --force honteux ou simplement vous faire vous sentir moins seul dans la jungle de YAML, alors ça valait le coup.  \r
\r
Bonne lecture, camarades.\r
\r
Cyril\r
\r
PS : Merci Coni pour le titre de la newsletter.\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **Kali Linux 2025.3 release :** [La nouvelle update de Kali Linux est là](https://www.kali.org/blog/kali-linux-2025-3-release/), et comme d’habitude, elle arrive en sifflotant avec son sac à outils encore plus affûtés. Au menu : une meilleure intégration du support Nexmon, le framework qui permet d’exploiter les puces Broadcom pour faire du Wi-Fi un terrain de jeu offensif, de nouveaux templates Vagrant et Packer histoire de déployer des VM Kali comme on jette des sorts dans Baldur’s Gate, et, pour les archéologues du binaire, la fin du support ARMel, parce que sa place est dans un musée. Enfin, comme toujours, une fournée de nouveaux outils, dont certains à prononcer uniquement après s’être hydraté correctement : blex, ipsvd, sniffglue... Autant de noms qui sentent bon le terminal brûlé et les ports scannés.\r
\r
🚀  **7 obsolete security practices that should be terminated immediatly :** Sept pratiques de sécurité obsolètes, qu’on continue pourtant à voir dans la nature, comme des serveurs FTP en prod : le périmètre réseau considéré comme une barrière magique, la sécurité dictée par la conformité (au lieu du bon sens), les VPNs qui datent de Napster, une confiance aveugle dans l’EDR, l’authentification par SMS (coucou les attaques SIM swap), les SIEMs on-prem trop chers pour ingérer tous les logs… et des utilisateurs encore vus comme un problème plutôt qu’une force. Chaque point de l’article rappelle une évidence :  [le monde a changé, mais pas toujours les pratiques](https://www.csoonline.com/article/4022848/7-obsolete-security-practices-that-should-be-terminated-immediately.html).\r
\r
💝 **How container filesystems works :** Dans le petit monde des conteneurs, on passe beaucoup de temps à empiler des images, tirer des layers, binder des volumes… mais rarement à se demander comment tout ça tient debout. C’est là qu’intervient  [ce super tuto de iximiuz labs](https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch), qui t’embarque dans une exploration du système de fichiers d’un conteneur, depuis zéro. Pas d’images Docker prédigérées ici, mais du unshare, du chroot, du montage à la main, et une lente remontée à la surface de ce qui fait la magie (et parfois le cauchemar) de l’isolation Linux. C’est clair, progressif, presque ludique à condition d’aimer souffrir un peu pour comprendre ce qui se passe vraiment sous les couches d’overlay.\r
\r
🥇  **Harborguard, a modern image vulnerability scanning :** La sécurité des conteneurs, c’est un peu comme trier tes mails ou ranger tes photos de vacances : tout le monde sait qu’il faut le faire, mais personne n’a envie d’y passer la journée. HarborGuard, lui, t’évite le grand nettoyage à la main. Cette appli web moderne te propose  [une interface unique pour piloter un bataillon d’outils de scan bien connus](https://github.com/HarborGuard/HarborGuard)  (Trivy, Grype, Syft, Dockle, OSV Scanner, Dive…), le tout avec des tableaux interactifs et des graphes qui ne piquent pas les yeux. Tu veux visualiser tes vulnérabilités par couche Docker, explorer ton filesystem, suivre les CVE critiques ou exporter des rapports JSON bien propres ? C’est prévu, et même les API sont là pour brancher tout ça dans ton pipeline.\r
\r
🐋 **Docker multistage builds, how to optimize your images :** Faire un docker build sans étape intermédiaire, c’est comme souder ton meuble IKEA directement dans le salon : ça tient, mais t’as scié les pieds de la table et la moitié des vis traîne encore sur le tapis. Heureusement, les builds multistage sont là. Le billet des cowboys de chez Spacelift t’explique  [comment construire une image propre](https://spacelift.io/blog/docker-multistage-builds), légère, et sans tout embarquer dedans. Une méthode simple pour que ton conteneur n’emporte pas toute la chaîne de toolchains avec lui, et que docker image ls ne ressemble plus à un listing de partitions Windows 98.\r
\r
🏹 **Sudo vs sudo-rs, what you need to know :** Ubuntu 25.10 s'apprête à enterrer un monument : la commande sudo telle qu’on la connaît va être remplacée par sudo-rs,  [une réécriture complète en Rust](https://itsfoss.com/sudo-vs-sudo-rs/). Officiellement pour des raisons de sécurité mémoire, de modernisation du code, et d’attrait pour les jeunes développeurs (ceux qui ont peur du C et des pointeurs comme des légumes à la cantine). Dans les faits, pour 99 % des utilisateurs, rien ne change. Vous taperez toujours sudo apt install sans voir la différence, si ce n’est un message d’erreur formulé différemment quand vous tapez n’importe quoi. Mais pour les admins qui aiment farfouiller dans les confs exotiques, attention, adieu certaines fonctionnalités (wildcards, sendmail, configurations non-PAM…), et bonjour les surprises. Bonne nouvelle, l’ancien sudo reste dispo sous le nom sudo-ws, pour les nostalgiques, ou ceux qui gèrent des infrastructures en équilibre sur une pile de scripts hérités de 2011.\r
\r
**👾 The DevSecOps path :** [On t’a vendu le DevSecOps comme un chemin pavé d’or](https://devops.com/the-devsecops-career-path-what-no-one-tells-you-about-getting-started/), de pipelines sécurisés et de cafés en grain dans l’open-space du bonheur. En vrai, c’est surtout un poste où tu dois convaincre des Devs d’écrire moins de failles, des Ops de ne pas tout exposer sur le net, et des RSSI que "non, ce n’est pas encore audité mais promis, ça va venir". Le billet des punks de chez DevOps.com revient sur ce qu’on oublie souvent de dire : la solitude du poste fourre-tout, la jungle des outils, et la nécessité de savoir parler trois dialectes (dev, sec et ops) tout en gardant le sourire. Tu voulais faire de la sécu, tu finis par gérer des tickets Jira.\r
\r
[🏗️](https://noted.lol/komodo/) **Komodo, manage docker images & containers :** Comme le disait le regretté Terry Pratchett, "_l__es sorciers n'aiment pas l'inconnu, à moins d'être sûrs de pouvoir le maîtriser à coups de parchemins, de glyphes et de runes dans le bon ordre",_ et c’est un peu la même chose avec nos serveurs.  [Komodo propose de remettre un peu d’ordre dans tout ça](https://noted.lol/komodo/)  : monitoring, gestion des conteneurs, déploiement de stacks Docker, gestion centralisée des secrets, automatisations planifiables, interface claire, API documentée, audit complet. Pas de version pro, pas de limites arbitraires, pas de pièges, mais juste un outil pensé pour reprendre le contrôle sans avoir à inventer une nouvelle CLI tous les matins.\r
\r
🛡️ **Doxx.net, advanced VPN, parallel internet and delocation platform :** Doxx.net,  [c’est un peu comme un VPN sous stéroïdes](https://github.com/doxx/doxx.net), mais sans les pubs YouTube criardes qui promettent l’anonymat en échange de 3,99 € par mois. On y entre comme dans un VPN classique via WireGuard, HTTPS, TCP ou même HTTPS-over-CDN pour les environnements les plus hostiles, mais c’est à l’intérieur que la magie opère. Une fois connecté, vous basculez dans un réseau maillé chiffré maison, avec ses propres domaines en .doxx, sa topologie fermée, et son ambition de devenir un Internet parallèle où vos appels Signal, vos accès serveurs et vos services web restent bien à l’abri, loin des regards indiscrets et des trackers curieux. Le concept : sortir le moins possible sur l’Internet public, et tout faire à l’intérieur. Moins de fuites, moins de failles, moins de stress. À croire que c’est ce que le VPN aurait dû être depuis le début.  \r
\r
🔑 **Lazyssh**, Lazyssh, c’est le chaînon manquant entre votre ~/.ssh/config et votre mémoire défaillante. [Tout se fait depuis une interface terminal](https://github.com/Adembc/lazyssh)  propre, rapide et un peu magique façon lazydocker ou k9s mais pour vos connexions SSH. On y retrouve toutes les fonctions utiles : fuzzy search, édition des entrées, ping des serveurs, tags personnalisés, et bientôt le transfert de fichiers sans s’arracher les cheveux. Et le tout en lisant (et respectant religieusement) votre ~/.ssh/config, sans jamais stocker de clés ou faire n’importe quoi avec vos permissions.\r
\r
## Modèle Zero Trust, les fondamentaux - ANSSI\r
\r
![](https://storage.mlcdn.com/account_image/325165/mzwVBTkeeM4rJiQcIIFlbpl4Q1qQs18NqjobUwDx.png)\r
\r
  \r
\r
Aujourd’hui, un grand merci à Sandrine R. pour ce partage sérieux comme un café sans sucre : un rappel salutaire sur le modèle Zero Trust, ce mot à la mode qu’on balance dans les PowerPoint sans toujours savoir ce qu’il implique.\r
\r
Face au BYOD, au télétravail généralisé et aux connexions dans tous les sens (cloud, on-prem, via VPN ou avec un bout de ficelle), les solutions estampillées "Zero Trust" promettent de remplacer la bonne vieille sécurité périmétrique. Sauf que, comme le rappelle justement l’ANSSI dans son avis, l’un ne remplace pas l’autre : ils sont complémentaires. Pas de "tout Zero Trust" ou de "VPN c’est mort", mais plutôt une approche progressive, qui consiste à cesser d’accorder une confiance implicite à tout ce qui passe la porte du réseau.\r
\r
Bref, Zero Trust n’est pas un produit miracle, mais un modèle de pensée, et on vous encourage très fort à lire le document de l’ANSSI mis à jour cet été, surtout si vous prévoyez de glisser le mot dans votre prochaine roadmap sécurité.\r
\r
[Accéder au lien ->](https://cyber.gouv.fr/publications/zero-trust)`,se=`---\r
layout: post\r
title: Newsletter du 13 Octobre 2025\r
tags: [devops, eBPF, K8s, Atlassian]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Il y a quelques jours, nous avons reçu un message. Pas un spam, pas une alerte de sécurité à 3h du matin, pas une notification "merge failed because your pipeline is garbage", non, un vrai message humain. Un remerciement sincère d'un lecteur qui nous disait apprécier cette newsletter et qui, dans un élan de bienveillance totalement inadapté au climat ambiant, nous a simplement écrit pour dire "merci".\r
\r
Nous avons été touchés, alors nous avons pris le temps de lui répondre. Un message simple, modeste, avec le fond d’authenticité qui nous caractérise (enfin je crois), et c’est là que tout a dérapé, nous l’avons appelé Florent, alors que son prénom était Florian. Si cela peut prêter à sourire, ça pose surtout une question plus vaste : à quoi bon parler de Zero Trust, de GitOps, d'authentification forte et de sécurité prédictive, si on n’est même pas fichus de retenir correctement le prénom de quelqu’un qui nous envoie un mot sympa ?  \r
\r
Alors Florian (oui, cette fois c’est bon), on te remercie sincèrement, et on te dédie cette édition, parce que si RudeOps existe, c’est aussi grâce à des lecteurs comme toi qui prennent le temps de lire, de rire, de râler un peu, et parfois, d'écrire un petit mot qui fait toute la différence.\r
\r
Promis, la prochaine fois, on vérifiera deux fois.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **A new breed of analyzers :** Daniel Stenberg (le monsieur derrière curl) vient d'écrire un billet assez savoureux sur la nouvelle génération d’outils d’analyse "assistés" par IA, ceux qui trouvent des bugs que ni clang-tidy, ni Coverity, ni même le café ne voyaient venir. Ces nouveaux détecteurs, comme ZeroPath ou l’outil d'Aisle, ont récemment balancé à l'équipe curl plus de 400 problèmes potentiels, dont une bonne cinquantaine de vrais bugs planqués depuis des années. Pas de panique et rien d’apocalyptique, juste des petites fuites mémoire, des variables confuses et des docs qui mentent.  [Bref, l'ordinaire du C](https://daniel.haxx.se/blog/2025/10/10/a-new-breed-of-analyzers/). Stenberg ne crie pas à la révolution, plutôt à une évolution : "l'IA ne code pas mieux que nous, mais elle lit le C avec moins de fatigue oculaire". Et quand ton projet fait 180 000 lignes et qu'il tourne sur 100 OS, tout coup de main est bon à prendre. Moralité : l'IA ne remplace pas les devs, elle leur évite juste de passer leur temps à chasser des NULL mal placés.\r
\r
💝 **How ITOps automation cuts incident response time by 50% :** C'est dans ce chouette papier des cowboys de chez Netguru qu'on apprend que chaque minute d'arrêt coûte environ 5 600 balles à une entreprise. Oui, par minute. Pas étonnant donc qu'on soit passés de  ["l'automatisation c'est cool" à "l'automatisation ou la mort"](https://www.netguru.com/blog/itops-automation). Les chiffres parlent tout seuls : ceux qui gèrent encore leurs incidents à la main crament 30 millions par an, ceux qui automatisent tombent à 16 millions, et accessoirement, ils dorment un peu mieux. En pratique, l'ITOps automation fait sauter la moitié du temps de résolution, élimine les erreurs humaines, et transforme les ingénieurs en stratèges au lieu de pompiers permanents. Les AIOps poussent le vice plus loin : ils prédisent les pannes avant qu'elles arrivent, un peu comme un oracle DevOps nourri au machine learning. Bref, si ton équipe passe encore ses nuits à trier des alertes à la main, t'es pas old school, t'es juste en train de perdre 5 600 balles par minute.\r
\r
🥇  **How eBPF is powering the next generation of observability :** L’observabilité, c’était censé t’aider à comprendre ton système, mais aujourd’hui, c’est surtout un moyen de mesurer combien tu peux payer avant de pleurer. Entre les agents, les SDK et les dashboards hors de prix, on a fini par rendre la transparence aussi coûteuse qu’un audit SAP. Et puis eBPF est arrivé. Pas un outil de plus, pas un énième SaaS "next-gen observability powered by AI", non,  [un vrai changement de paradigme](https://thenewstack.io/how-ebpf-is-powering-the-next-generation-of-observability/). Le noyau Linux lui-même devient ton agent d’observation : il regarde passer les paquets, les threads, les syscalls, sans toucher à ton code, sans t’ajouter de latence, sans lever la main pour te facturer à la minute. Avec OBI, la version eBPF d’OpenTelemetry, l’observabilité devient enfin ce qu’elle aurait toujours dû être : intégrée, automatique, élégante. Le kernel voit tout (Rust, Go, Java, peu importe) et te renvoie une image complète de tout ce qui se passe sur ton système, et ça c'est la classe mon gars comme on dit à Montargis.\r
\r
😱  **Managing Kubernetes workloads using the app of apps pattern in ArgoCD :** À force d’empiler les microservices on a fini par transformer Kubernetes en sapin de Noël. Chaque appli a son chart, ses valeurs, ses secrets, ses bugs. Et toi, pauvre admin, tu es censé garder tout ça "GitOps compliant". C’est là qu’arrive ArgoCD, ce chef d’orchestre qui prétend tout synchroniser, et son tour de magie préféré s’appelle le App of Apps**,** [une appli qui déploie… d’autres applis](https://www.cncf.io/blog/2025/10/07/managing-kubernetes-workloads-using-the-app-of-apps-pattern-in-argocd-2/)  : le App of Apps, c’est ton YAML pour les gouverner tous. Tu poses une appli parent, il gère les applis enfants, et d’un seul clic tu redéploies tout ton bazar comme si c’était prévu depuis le début. C’est élégant, presque poétique, tant que tu restes raisonnable, mais bien maîtrisé, c’est la différence entre un cluster organisé et un champ de ruines automatisé. Bref, ArgoCD ne simplifie pas Kubernetes, il te donne juste un moyen de rendre ton désordre versionné, traçable… et vaguement supportable.\r
\r
🔳 **Superfile, a terminal file manager you'll actualy enjoy using :** Tu passes ta vie dans le shell à renommer des fichiers en ASCII pur ?SuperFile débarque pour te rappeler que  [même un TUI peut être sexy](https://www.omgubuntu.co.uk/2025/08/superfile-terminal-file-manager-linux-ubuntu).  \r
Couleurs, icônes, sidebar, preview… on dirait Midnight Commander après un stage chez les designers d'Apple. Tu ne seras toujours pas productif, mais au moins t’auras la classe.  \r
\r
🚀  **How I block all 26 million of your curl requests :** Tu veux bloquer 26 millions de requêtes curl ? Ce type a pris son scalpel eBPF/XDP, a découpé les ClientHello comme on trie des mails indésirables, et en a fait un filtre kernel-level qui repère les empreintes TLS de curl. C’est overkill, un peu obsessionnel,  [mais terriblement satisfaisant](https://foxmoss.com/blog/packet-filtering/)  : tu laisses tomber les user-agents bidons et tu bloques proprement les gratte-pages paresseux jusqu’à ce que quelqu’un réécrive curl en mode ninja.\r
\r
**🛠️ Wister, a wordlist generator tool :** Tu veux enrichir ton dictionnaire d’attaque ou juste générer des horreurs lexicales pour le plaisir ? Wister est ton nouveau jouet,  [un générateur de wordlists sous stéroïdes](https://github.com/cycurity/wister), capable de mélanger, inverser, saler et encoder tes mots en md5, base64 ou ce que tu veux. Tu balances quelques mots ou un fichier, tu ajustes la profondeur du chaos, et Wister recrache des combinaisons dont même un botnet aurait honte. Installe-le via un pip install et regarde ton CPU pleurer pendant que tu inventes des mots de passe que même toi tu ne pourrais plus taper. Bref, c'est un outil parfait pour les pentesters, les bourrins du brute force et les poètes du dictionnaire.\r
\r
![](https://storage.mlcdn.com/account_image/325165/1Em8sskIO32923pldJeh06e1a2VZ6SNXS3S2mGl2.png)\r
\r
# Atlassian impose le cloud.\r
\r
Atlassian a décidé :  [plus d'hébergement on-premise](https://www.atlassian.com/blog/announcements/atlassian-ascend), fin de Jira Server, fin de Confluence Data Center, la seule option, c’est leur cloud, point final, date butoir fixée en 2029.\r
\r
Alors que les DSI cherchent à reprendre la main sur leurs données et leurs infrastructures, Atlassian impose une migration forcée vers un environnement qu’on ne maîtrise plus. Données hébergées on ne sait où, mises à jour imposées, dépendance totale à un éditeur américain.\r
\r
On appelle ça la simplicité, mais c'est surtout une manière polie de te passer les menottes.  \r
\r
Attention : il ne s'agit pas de cracher sur le cloud, car le cloud, bien utilisé, c’est puissant, c'est de l’élasticité, de la rapidité, de l’expérimentation à grande échelle, mais un bon ingénieur sait que le cloud n'a de valeur que tant qu'il reste un choix, et quand la dépendance devient structurelle, la liberté d'architecturer disparaît, et avec elle, la souveraineté technique.\r
\r
Heureusement, des alternatives open-source existent et tiennent la route.  \r
[OpenProject](https://www.openproject.org/fr/), [Redmine](https://www.redmine.org/)  ou  [Taiga](https://taiga.io/) remplacent Jira.  \r
[Wiki.js](https://js.wiki/)  ou  [BookStack](https://www.bookstackapp.com/) font oublier Confluence.  \r
[Gitea](https://about.gitea.com/),  [Jenkins](https://www.jenkins.io/) ou  [GitLab](https://about.gitlab.com/) assurent le code et la CI/CD.  \r
[GLPI](https://www.glpi-project.org/fr/) ou  [Zammad](https://zammad.com/en/company/open-source) gèrent l’ITSM.  \r
  \r
Avec Keycloak pour le SSO et Grafana OnCall pour l'astreinte, tu obtiens une stack complète, libre et souveraine.\r
\r
Tout cela tourne sans problème sur une infra Docker ou Kubernetes, avec PostgreSQL et un stockage objet local, tu gardes la main sur tes données, ton rythme, et ta sécurité, et tu redeviens maître de ton environnement.  \r
\r
Chez RudeOps, on ne défend pas l'open-source par idéologie (encore que...), mais par pragmatisme, parce que la liberté, dans nos métiers, ce n’est pas une opinion, c'est une compétence.  \r
\r
\r
**☸️ Investigating and fixing "StopPodSandbox":** Depuis des mois, Marcus Noble vivait avec des "StopPodSandbox failed… unexpected end of JSON input" qui tapissaient ses logs kubelet. Rien ne plantait, donc comme tout bon admin, il a fait le choix mûrement réfléchi de ne rien faire. Jusqu’à un vendredi soir où, pris d'un élan suicidaire, il décide d'enquêter.  [Après quelques heures de kubectl debug](https://marcusnoble.co.uk/2025-09-28-investigating-and-fixing-stoppodsandbox-from-runtime-service-failed-kubelet-errors/)  sur Talos et de jurons étouffés, il tombe sur la cause : un fichier de cache CNI vide. Zéro octet, zéro sens, mille erreurs. Un rm plus tard, tout rentre dans l’ordre. Moralité : parfois, Kubernetes ne te veut pas de mal, il veut juste te rappeler que tout ce cirque repose sur un JSON mal formé.\r
\r
📜 **mkcert Web UI :** Pour ceux qui ne connaissent pas, mkcert Web UI est une interface web qui rend enfin l'usage de mkcert un peu moins "terminal des enfers". Tu cliques, tu génères, tu télécharges des certificats SSL valides pour ton environnement local, sans taper trois kilomètres de commandes OpenSSL. [La version 3.1.0 vient de sortir](https://github.com/jeffcaldwellca/mkcertWeb), et c'est loin d'être juste un bump de version paresseux. L'outil gère maintenant tout un écosystème de fonctions qu'on verrait plus dans une PKI d'entreprise que dans un projet de dev local : génération multi-domaines, monitoring des certificats, alertes e-mail avant expiration, intégration SCEP pour déployer automatiquement des certs sur des devices, et même authentification OpenID Connect si tu veux faire sérieux.\r
\r
🐳 **Dockpeek, self hosted Docker dashboard :** Dockpeek c’est un peu comme Portainer, mais sans le poids, les fioritures et la sensation d’ouvrir un ERP pour redémarrer un conteneur. Tu poses le conteneur, tu ouvres ton navigateur, et paf :  [tous tes Docker s’affichent](https://github.com/dockpeek/dockpeek), avec leurs ports, leurs liens Traefik et leurs états, comme un Pokédex pour sysadmins fatigués. Pas besoin de YAMLs qui sentent la sueur : Dockpeek s’installe en trois lignes et fonctionne direct. Tu veux voir quel service bouffe ton port 8080 ? C’est là. Tu veux cliquer sur ton container web sans chercher son IP ? C’est là aussi. Tu veux juste vérifier que tout tourne sans que ça te juge ? Dockpeek t’aime comme tu es.\r
\r
💤 **The simple habit that saves my evenings :** Le mec raconte qu'il a trouvé le secret pour sauver ses soirées de dev : arrêter de croire au mythe des "20 minutes de plus". Tu sais, ce moment où t'as enfin compris ton bug à 18h42 et tu te dis "je termine vite fait". Trois heures plus tard t'es affamé, aigri, et ton code ne compile toujours pas. Sa technique ? Quand t'as l'illumination,  [tu arrêtes tout, tu notes tes idées, et tu pars](https://alikhil.dev/posts/the-simple-habit-that-saves-my-evenings/). Le lendemain, t'es reposé, t'as un plan, et t'as pas juré devant ton IDE à minuit.\r
\r
## I'm in Vibe Code Hell\r
\r
![](https://storage.mlcdn.com/account_image/325165/Acn2pgHdxz2HNbwQo9KoZ0IPDrcjRh6XBGPs3hmx.png)\r
\r
  \r
\r
Merci à Corentin pour le partage de cet article aussi drôle que déprimant sur le "vibe code hell".\r
\r
Souviens-toi du "tutorial hell", cette époque où les devs passaient plus de temps à suivre des tutos YouTube qu’à coder ? Eh bien, on a trouvé pire. Le "vibe code hell", c’est la nouvelle zone grise où tu codes… sans vraiment coder. Tu demandes à ton IA préférée d’écrire la moitié du projet, tu copies-colles en espérant que "ça marche sur ta machine", et tu termines la journée convaincu d’avoir appris quelque chose, alors que ton seul vrai skill, c’est de reformuler des prompts.\r
\r
Le texte de Lane Wagner résume bien la vibe : on n’est plus bloqués devant des tutos, on est bloqués devant un chatbot trop poli pour nous dire qu’on est à côté de la plaque. Les nouveaux devs ne galèrent plus à comprendre, ils galèrent à exister entre deux suggestions d’autocomplétion.\r
\r
Moralité : si tu veux vraiment apprendre à coder, ferme ton Copilot, garde ton bug, et souffre un peu. C’est le seul moment où ton cerveau bosse.\r
\r
[Accéder au lien ->](https://blog.boot.dev/education/vibe-code-hell/)`,te=`---\r
layout: post\r
title: Newsletter du 29 Octobre 2025\r
tags: [devops, Omarchy, K8s, Docker]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Pour cet édito, je voulais parler du dernier outage d’Amazon, mais tout le monde l'a déjà fait, souvent sans rien comprendre mais avec beaucoup de certitudes. Et puis ma femme m'a dit : "Non, fais plutôt un papier sur Badre. L'humain, c'est plus vendeur."\r
\r
Badre, c'est un admin de l'ombre, le genre de type qui fait du pipeline dans un environnement où même les API ont besoin d’un ticket JIRA pour respirer. Il bosse dans l'écosystème Salesforce où tout est possible à condition que ce soit validé par trois comités, signé par le métier, et que le flux ne dépasse pas 50 000 records par minute sinon son tenant fait une syncope.\r
\r
Badre, c'est celui qui maintient le système debout pendant qu'on réinvente des buzzwords pour décrire ce qu'il fait déjà depuis dix ans, celui qui ferme les tickets absurdes, relance les jobs cassés et garde son calme quand on lui demande "si on peut faire ça en low-code".\r
\r
Alors oui, Badre, on te salue, parce que sans toi, on serait tous en train d'expliquer à nos patrons pourquoi "le pipeline, en fait, c’est Amazon qui l’a cassé".  \r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🏃‍♂️  **A fully functional K8s cluster with 1 million active nodes :** L'auteur de k8s-1m, c'est le type qui regarde un cluster Kubernetes à 7 500 nœuds et se dit "tiens, si on poussait jusqu'à un million, juste pour voir quand ça prend feu." Résultat : un million de nœuds simulés, un million de pods planifiés en une minute, 100 000 requêtes etcd par seconde, et un kube-apiserver qui hurle à la pitié. Ce n'est pas un produit, ni une startup déguisée en benchmark.  [C’est une expérience grandeur nature](https://bchess.github.io/k8s-1m/)  pour comprendre où K8s scale vraiment, et pourquoi. Spoiler : la limite n’est pas dans le code, mais dans nos habitudes, les raccourcis, les couches de sécurité superflues, les choix par confort. L'auteur ne veut pas vendre de miracle, juste rappeler qu'avant d’incriminer le hardware ou la scalabilité du cloud, il faudrait peut-être oser regarder nos propres goulots. En clair, k8s-1m, c’est une sorte de crash test volontaire : un projet inutile, dangereux, fascinant, et qui montre surtout que Kubernetes peut aller beaucoup plus loin que ce que les ingénieurs osent tenter.\r
\r
💝 **Créez votre premier notebook Jupyter :** Apprendre Python, c’est souvent comme essayer d'apprivoiser un pitbull à coups de print(). Entre les erreurs de syntaxe absurdes et les tutos qui datent de 2012, beaucoup abandonnent avant leur première boucle for. Heureusement, il existe Jupyter Notebook, un environnement où tu peux écrire du code, voir immédiatement ce qu'il fait, ajouter des explications, et même créer des graphs sans que ton cerveau ne parte en grève. Dans son guide, [notre Stéphane Robert national déroule un chouette tuto](https://blog.stephane-robert.info/docs/mlops/jupyter/premier-notebook/) clair et sans blabla : installation d’Anaconda, lancement du premier notebook, exécution de code, visualisations, markdown, bref, tout ce qu’il faut pour comprendre comment Python peut devenir un compagnon de jeu plutôt qu’un instrument de torture syntaxique. En une trentaine de minutes, tu passes du néant absolu à un petit laboratoire interactif où tes lignes de code prennent enfin vie. C’est simple, concret, et surtout ça fonctionne du premier coup, ce qui relève déjà du miracle.\r
\r
**🐧 A petabyte worth of Omarchy in a month :** Omarchy, c’est la nouvelle distro Linux signée David Heinemeier Hansson (oui le papa de Ruby on Rails). Sortie de nulle part cet été, elle a déjà livré plus d’un pétaoctet d’ISOs en un mois,  [une croissance fulgurante](https://world.hey.com/dhh/a-petabyte-worth-of-omarchy-in-a-month-a1fc538e)  qui prouve qu’il se passe quelque chose : les gens en ont marre de ne plus être chez eux sur leur propre machine. Pendant qu'Apple et Microsoft multiplient les verrous, la télémétrie et les injonctions à l’IA pour tous, Omarchy propose un Linux moderne, élégant et sans chaînes. Basée sur Hyprland, rapide, personnalisable, sans dogme ni baratin, c'est le genre de distro qui te rappelle que ton ordinateur t'appartient encore (pour l'instant).  \r
\r
😱 **Prometheus with Docker Compose :** Prometheus, c’est la time series database qui bouffe tes métriques et te les recrache en PromQL avec l’assurance tranquille d’un outil qui sait que tu ne comprendras pas tout. Avec Docker Compose, tu poses une stack propre en deux temps trois mouvements, et si tu veux éviter de finir la tête dans la doc,  [les coyotes de chez Spacelift ont pondu un tuto](https://spacelift.io/blog/prometheus-docker-compose)  tellement clair que même un stagiaire en pleine descente d'acide peut le suivre sans jurer. Tu lances ton docker compose, tu ouvres l'UI, tu tires trois requêtes pour la forme, et tu regardes Node Exporter cracher l’état de ta machine pendant qu'Alertmanager te hurle dessus parce que la RAM a encore décidé de partir en RTT. Tout tourne, tout est isolé, tout est versionné, et tu peux enfin surveiller ton infra sans sacrifier une chèvre. Et si tu veux la cerise sur le dashboard, tu balances Grafana par-dessus et tu prétends que tout ce bazar faisait partie d’un plan stratégique mûrement réfléchi.\r
\r
🏹 **Beszel, a lightweight server monitoring hub :** Beszel fait partie de ces projets qui te rappellent qu'un bon outil, c'est souvent juste un binaire qui marche. Tu déploies un agent sur tes machines, un hub pour centraliser le tout, et en quelques minutes t'as un dashboard propre avec les métriques CPU, RAM, disque, réseau, température ou GPU. C'est joli, ça alerte quand quelque chose part en vrille, et ça gère même les sauvegardes, l’OAuth et le multi-users sans t’encombrer. [En gros, Beszel te file la vision d’ensemble de ton infra sans t’imposer une usine à gaz.](https://github.com/henrygd/beszel)\r
\r
🚀  **The cybersecurity perception gap :** Les outlaws de chez  Bitdefender ont mené une étude sur la perception de la cybersécurité dans les entreprises, et le résultat est à peu près celui qu'on imaginait :  [93 % des dirigeants se disent confiants dans leur capacité à gérer le risque cyber](https://thehackernews.com/2025/10/the-cybersecurity-perception-gap-why.html), pendant que les équipes sur le terrain passent leurs journées à éteindre des feux avec un seau percé. Chez les C-levels, 45 % se disent "très confiants", et chez les managers, 19 %. On appelle ça une asymétrie d'information, ou dit plus simplement "le chef pense que tout va bien". La cause ? Les dirigeants voient des slides PowerPoint, les techniciens voient les logs. Quand les premiers parlent appétit au risque, les seconds parlent firewalls en carton. Bitdefender conclut qu'il faut "renforcer la communication entre le stratégique et l'opérationnel". Nous, on propose plus simple : enfermez le COMEX dans une war room pendant un vrai incident, dix minutes de stress réel valant bien mille rapports de consultants.\r
\r
**🛠️ Open source is the most fragile and most resilient ecosystem :** L'open source, c’est le paradoxe parfait : un truc qui tient tout l’internet sur le dos, mais soutenu par trois bénévoles, deux scripts en souffrance et un chat insomniaque, et c'est justement ce qu'explique cet article. C'est à la fois le système le plus fragile et le plus résilient du monde logiciel. L'auteur, un ancien de chez Shopify et membre du Ruby core team, raconte comment Shopify porte une grosse partie de l'écosystème Ruby à bout de bras. Sans leurs équipes, pas de YJIT, pas de ruby-lsp, pas de bootsnap… bref, pas grand-chose. Ruby ne serait pas mort sans eux, mais il aurait sérieusement pris la poussière. Et non, Shopify ne veut pas monopoliser Ruby, le vrai souci, c’est que les autres boîtes profitent du code libre sans jamais remettre une pièce dans la machine. Et c'est tout le paradoxe : des entreprises valorisées à plusieurs centaines de milliards dépendent de projets maintenus sur le temps libre de gens passionnés. Mais  [malgré tout, l’open source ne crève pas](https://blog.peterzhu.ca/open-source-is-the-most-fragile-and-resilient-ecosystem/). Il se casse, se fork, se recolle, renaît. Parce que la passion du code est plus solide que les budgets R&D. Conclusion de l'auteur : arrêtons de voir la contribution open source comme un don. C'est un investissement, un moyen d’assurer la stabilité, la performance et la pérennité de nos propres systèmes.\r
\r
🦭 **Podman desktop 1.22 release :** Podman Desktop vient de passer en version 1.22, alors c'est l’occasion d'en parler un peu, parce qu'apparemment tout le monde veut "faire du Kubernetes local" sans admettre qu'il lance juste un container pour tester un curl. Podman Desktop,  [c'est l’interface graphique pour ceux qui aiment les containers](https://github.com/podman-desktop/podman-desktop)  mais pas la ligne de commande, ou qui refusent de l'admettre. Ça installe, configure et met à jour Podman tout seul, affiche un joli dashboard avec tes containers, images, pods et volumes, et te donne même un petit icône dans la barre système pour te rappeler que ta machine fait tourner dix-huit trucs inutiles en tâches de fond.\r
\r
💻 **Ghostty 1.2 adds quick terminal on Linux :** Il y a aussi Ghostty, notre terminal de coeur,  [qui est passé récemment en 1.2](https://www.omgubuntu.co.uk/2025/10/ghostty-1-2-new-features-for-linux)  et apporte son lot de nouveautés que je ne vais pas vous lister parce que là je dois partir à la piscine (mais testez Ghostty si vous cherchez un vrai terminal de bonhomme).  \r
\r
☸️ **Ten common K8s misconfigurations that cause outages :** Quelques bonnes pratiques à respecter qui vont forcément parler aux forçats de la terre qui bossent sur Kubernetes, c'est  [toujours sympa à garder](https://cloudnativenow.com/contributed-content/ten-common-kubernetes-misconfigurations-that-cause-outages-and-what-you-can-do-about-it/)  sous le coude, particulièrement quand on veut se lancer sur le sujet, même si ça fera sans doute sourire les vétérans.\r
\r
## Valkey 9.0 adds multi-database clusters, supports 1 billion requests per second\r
\r
![](https://storage.mlcdn.com/account_image/325165/ewE9lyksZXFUd6IsPtO2LnEsAG89mvMcj6nhos2K.png)\r
\r
Merci à Nico D (sysadmin dans une marketplace parisienne) qui nous partage une news sur Valkey 9.0 qui vient de sortir, et ça dépote. On parle de multi-database clusters, de resharding sans downtime et d'un débit annoncé à un milliard de requêtes par seconde, oui, un milliard. À ce niveau-là, c'est plus une base de données, c’est un moteur de fusée.  \r
\r
Valkey est soutenu par la Linux Foundation avec des contributeurs comme AWS, Google, Oracle ou Alibaba. Et contrairement à certains projets qui jouent à cache-cache avec leur licence, Valkey promet de rester ouvert et libre, sans paywall ni piège propriétaire...\r
\r
[Accéder au lien ->](https://news.itsfoss.com/valkey-9-release/)`,ne=`---\r
layout: post\r
title: Newsletter du 12 Novembre 2025\r
tags: [devops, Restic, Nexterm, Talos, Linux]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Il y a des patchs qui corrigent des failles techniques, et d'autres qui corrigent des failles morales, et la Python Software Foundation en a publié un magistral il y a une dizaine de jours : refuser 1,5 million de dollars de subvention pour ne pas trahir ses valeurs.\r
\r
Dans un monde où les budgets se signent plus vite que les chartes éthiques, la PSF a choisi la ligne de code la plus coûteuse mais aussi la plus digne. Face à l’administration Trump II, qui conditionnait la subvention à l'abandon de toute action liée à la diversité, l'équité et l'inclusion (DEI), la fondation a dit non.\r
\r
On pourrait croire qu'il ne s'agit que de politique, mais dans l'open source tout est politique. La liberté du code n’a jamais été séparable de la liberté de celles et ceux qui le produisent, et dire non à la censure idéologique, c’est dire oui à la communauté dans son ensemble, à sa diversité, à sa richesse, à son humanité.\r
\r
Et pour rappel, la PSF est loin d'être une multinationale avec ses 14 personnes et ses 5 millions de budget annuel. La subvention refusée représentait donc près d'un tiers de leurs moyens, mais ils ont préféré la cohérence à la complaisance.\r
\r
Ce refus, c'est une (putain de) leçon pour toute l'industrie tech, car pendant que les techs bro de la Silicon Valley jouent les courtisans au bal du pouvoir, la PSF rappelle que l'open source n'a pas de maître, et que le code ouvert, c’est aussi un code moral.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🗄️ Database backups, dump files and restic :** Avant, on faisait comme tout le monde : un mysqldump, un petit gzip, et un fichier qui change tous les jours même si la base est aussi vide que le frigo d'un célibataire fin de mois. C’était propre, certes, mais aussi subtil qu’un backup au marteau-piqueur. Résultat : des doublons à la pelle, du stockage qui gonfle comme une grenouille, et l'étrange impression de rejouer  _MacGyver fait de l’IT_. Maintenant,  [on laisse Restic faire le sale boulot](https://strugglers.net/posts/2025/database-backups-dump-files-and-restic/). Il compresse, chiffre, déduplique, trie les fichiers par tags, note dans un petit carnet que "tout va bien" si rien n'a changé… et tout ça sans écrire une seule ligne sur disque. Bref, on est passé de la sauvegarde artisanale à la haute couture du dump, sans couture apparente.\r
\r
😱 **Déployer un VPN Wireguard sur Proxmox avec Opentofu :** Par votre serviteur. [Trois jours de boulot, du YAML partout](https://www.linkedin.com/pulse/retour-dexp%C3%A9rience-d%C3%A9ployer-un-vpn-wireguard-sur-avec-cyril-beaufrere-di8le/?trackingId=TuxZhatQQ1OfiMMwn%2BQJ2g%3D%3D), OpenTofu qui fait semblant d'être Terraform, Proxmox qui redémarre quand il veut, et WireGuard qui refuse obstinément de causer. Mais au bout : une IP qui ping, une connexion chiffrée et la satisfaction absurde d’avoir refait ce que apt install aurait fait en dix minutes. Ne me jugez pas.\r
\r
**🐋 Docker monitoring for your terminal :** On vous présente un énième Docker manager, encore un, mais celui-là a une TUI, affiche des métriques en temps réel, et surtout c'est écrit en Rust, donc c'est rapide, sûr, et ça fait transpirer les fans de Python. CPU, mémoire, réseau : tout y passe dans  [une interface qui sent bon le terminal neuf](https://dtop.dev/). Un outil de plus pour surveiller vos conteneurs, et dans les ténèbres les lier.  \r
\r
🔳 **Nexterm :** On continue avec une app sympa, même si encore en plein chantier, et  [qui permet de faire tout ce qu'on aime](https://docs.nexterm.dev/)  : se connecter en SSH, VNC ou RDP, fouiller des arborescences via SFTP, balancer des containers Docker en prod sans réfléchir, et même gérer vos LXC et QEMU sur Proxmox. Bonus : l'authentification à deux facteurs pour donner l'illusion que tout ça est sécurisé.\r
\r
🚀  **How tech companies measure the impact of AI on software development :** L'excellent Gergely Orosz s'associe à Laura Tacho (CTO chez DX) pour  [un énorme article qui mérite votre temps](https://newsletter.pragmaticengineer.com/p/how-tech-companies-measure-the-impact-of-ai?ref=dailydev), votre attention, et probablement un petit café corsé. Au menu, comment 18 entreprises tech (dont GitHub, Google, Dropbox, Monzo, Atlassian...) mesurent l'impact réel des outils d'IA sur le développement logiciel. On parle de métriques concrètes : change failure rate, PR throughput, satisfaction dev, maintenabilité du code, ou encore "bad developer days" chez Microsoft (si si). C'est une vraie plongée très documentée dans la réalité des équipes qui veulent autre chose que "Copilot a généré 38% de notre code, tout va bien". C'est dense, c'est sourcé, c'est intelligent, on en redemande.\r
\r
🏹 **Waveterm, an open-source cross-platform term :** Encore un jouet pour ceux qui trouvent que leur terminal manque de fioritures : Waveterm, un terminal open-source qui mélange bash, navigateur web, éditeur de texte et assistant IA dans une seule interface. Oui, c’est un peu  [comme si tmux avait bu trop de café et décidé de tout faire lui-même](https://github.com/wavetermdev/waveterm). Drag and drop, aperçus de fichiers distants, édition à la volée, chat IA intégré (avec support pour OpenAI, Claude, Ollama & co), et même des blocs de commande isolés pour surveiller vos scripts comme des tamagotchis sous perfusion. Compatible macOS, Linux, Windows, et crises existentielles.\r
\r
[![](https://storage.mlcdn.com/account_image/325165/m6sU57KyfAKuAxey28vdIk4xSLC3czRXgp4iaNcG.png)](https://capitoledulibre.org/)\r
\r
# Week-end dédié au logiciel libre à travers plus de 100 conférences et plus de 20 ateliers pour les expertes/experts et le grand public.\r
\r
  \r
\r
Au programme ce weekend  :\r
\r
-   Plus de 100 conférences techniques (retour d'expérience, DevOps, web, jeux…) et plus de 20 ateliers ouverts au public curieux.\r
    \r
-   Un village d'associations où les radicalisés du GPL, des licences "à coller sur ton poster" et des hackers bienveillants s'organisent, échangent des stickers, décryptent des licences obscures et expliquent pourquoi "non, Microsoft ne sera jamais ton ami".\r
    \r
-   Des moments de détente pour rappeler qu'entre deux patchs Linux, on peut aussi rigoler.\r
    \r
\r
Bref, si vous croyiez que le logiciel libre c'était juste un fichier ISO à graver, vous étiez loin. Ici, c'est un rituel, un rassemblement de ceux qui croient que "open" n’est pas un adjectif mais une épiphanie.\r
\r
L'entrée est gratuite (inscription en ligne obligatoire), ce qui ravira nos lecteurs toulousains qu'on sait nombreux (en fait on en a aucune idée mais ça sonne super bien).\r
\r
\r
🌐 **It's not always DNS :** Ah, le bon vieux "It's always DNS", le mème préféré des Ops fatigués, des Devs désabusés et des Slackers en panne d'idées. Une punchline universelle, un réflexe pavlovien, un mantra gravé dans les logs de tous les incidents post-mortem depuis 2004. Et si on arrêtait de rigoler deux minutes ? Parce qu'en vrai, c’est  **rarement**  le DNS. C'est souvent l’automatisation bancale, le firewall capricieux, le subnet mal foutu, ou ce script qui fait joyeusement rm sur les enregistrements parce que quelqu’un a oublié un --dry-run, mais sûrement pas cette pauvre pile DNS, qu’on accuse par réflexe parce que c’est la première à tomber quand tout part en sucette.  [Comme le dit Paul Tagliamonte dans son billet](https://notes.pault.ag/its-not-always-dns/), si on peut remplacer "DNS" par "key-value store qui mappe un nom à une IP" et que la phrase reste cohérente, alors non, ce n’était pas DNS. Le vrai danger, ce n’est pas un NXDOMAIN , c’est l’absence totale de pensée critique dès qu’un dig répond lentement, et ça, aucun TTL n’y survivra. On peut donc mieux faire. On  _doit_  mieux faire. Et si on se trompe, bah… on blâmera quand même DNS. Par tradition.\r
\r
🤖 **OSV-Scanner :** On vous présente aujourd'hui OSV-Scanner, un outil soutenu par une petite startup familiale du nom de Google, qui comme chacun sait, n'a pas du tout pour objectif de scanner tout ce qui bouge dans l'open source, votre infra, et vos rêves. Bref, OSV-Scanner est un frontend officiel  [pour la base de vulnérabilités OSV.dev](https://github.com/google/osv-scanner), qui permet de détecter les failles connues dans vos dépendances, vos conteneurs, vos paquets Linux, et probablement votre grille-pain si vous avez une buildroot un peu exotique. Multi-langage, multi-package manager, avec recommandations de remédiation guidée basées sur la "stratégie de ROI" (c’est écrit, on n'invente rien), c'est un peu le Shazam des CVE : il écoute votre projet et vous crache la liste de ses traumas.\r
\r
☸️ **Talos Linux, bringing simplicity to Kubernetes :** Aujourd'hui on va vous parler de Talos, un OS minimaliste et open source conçu spécialement pour exécuter Kubernetes… et rien d’autre. Pas d’interface, pas de package manager, pas de SSH. Même le concept d’utilisateur a été mis à la benne. On dirait une distribution faite par un moine du DevSecOps, sous anxiolytiques. C’est développé par Sidero Labs, une boîte qui a décidé que tout ce qui dépassait d’un conteneur était une surface d’attaque. Résultat : Talos ne se gère pas, il se déclare.  [Immutable, sécurisé, sobre](https://thenewstack.io/open-source-talos-linux-bringing-simplicity-to-kubernetes/), on dirait le fantasme mouillé d’un SRE coincé entre une RFC et un audit ANSSI. Talos a séduit des gens tout à fait normaux, comme la SNCF ou la bourse de Singapour, qui ont migré en un clin d’œil depuis OpenShift ou autres artefacts préhistoriques hérités de l’époque où on pensait que "root" c’était une bonne idée. Et pour orchestrer tout ça sans s'arracher les cheveux avec Cluster API ou Terraform, ils ont pondu Omni, une sorte de SaaS centralisateur de vos nodes Talos. Vous pouvez le déployer chez vous, dans le cloud, dans le grenier de votre oncle, tant que ça boote sur PXE. Bref, Talos, c’est Kubernetes sans le gras.  \r
\r
🐍 **Good bye Python chaos, meet UV :** On pensait que plus rien ne pouvait aggraver l'expérience d’un dev Python.  [Et puis, un jour, on découvre uv](https://shiftmag.dev/tame-python-chaos-with-uv-the-superpower-every-ai-engineer-needs-6051/), un outil écrit en Rust qui remplace tout : pip, poetry, pip-tools, les envs virtuels bordéliques, les installs aléatoires de PyTorch en 47 Go, et même les erreurs cryptiques façon "cannot resolve dependency because of ancient incantation in requirements.in". Uv, c’est un peu le gestionnaire que Python aurait dû avoir dès le départ, si les dieux du langage n'avaient pas décidé de punir l'humanité pour un péché commis avec Perl. Résultat ? Des installs rapides, un cache global partagé entre projets (donc fini les 5 copies de PyTorch), un lockfile universel, la gestion des scripts à la volée, et plus jamais de "ça marche pas sur ma machine".\r
\r
## 1/3 Hands on Kubernetes with Minikube\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
  \r
\r
Un grand merci à Sébastien pour le partage de cette chouette introduction à Kubernetes via Minikube, ce simulateur de cluster qui tourne en solo, un peu comme votre stagiaire en juillet.\r
\r
On y retrouve tout ce qui fait la beauté de Kubernetes, sans le plaisir de le débugguer à 3h du matin en prod : les namespaces, le control plane, le worker, les services, les IPs qui changent pour aucune raison apparente, etc. Le tout, sur un seul PC, pour apprendre sans se ruiner en nœuds et load balancers.\r
\r
L'article détaille chaque composant (API server, etcd, CoreDNS…), ce qu'ils font, où ils écoutent, et pourquoi ça a l'air simple alors que ça ne l’est pas. Bonus : le tableau de bord Minikube pour cliquer comme si c'était simple.\r
\r
Bref, une lecture pédagogique et bien structurée, parfaite pour celles et ceux qui veulent comprendre comment ça marche sous le capot... avant de tout casser pour voir si ça redémarre.\r
\r
  \r
\r
[Accéder au lien ->](https://faun.pub/1-3-hands-on-kubernetes-with-minikube-578ecf0351ee)`,re=`---\r
layout: post\r
title: Newsletter du 24 Novembre 2025\r
tags: [devops, LazyGit, Termix, IaC, ANSSI]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
J'aurais voulu vous pondre un édito brillant, percutant, spirituel, qui dénonce, bref, un truc qui claque, mais malheureusement, l'inspiration a décidé de partir en RTT, probablement pour rejoindre la productivité qui elle aussi a disparu quelque part entre deux contrariétés au boulot.\r
\r
Alors voilà, pas d'édito. Et honnêtement ? Ce petit vide fera très bien l'affaire, et il a même quelque chose de reposant, comme une pause involontaire et bienvenue dans un monde qui s'agite beaucoup trop.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**</> The (lazy) Git UI you didn't know you need :** Bartek nous raconte comment il a accidentellement découvert lazygit pendant un moment de fatigue néovim-esque. Résultat : une semaine plus tard, il avait tout migré dessus, son workflow, sa productivité, sa dignité, probablement ses enfants aussi. Et franchement ? On le comprend. Ça fait combien de fois qu’on vous en parle déjà, de lazygit ? Trois ? Quatre ? On a perdu le compte mais bon, quand quelqu'un tombe dedans par hasard et revient vous dire "wow, c'est génial", ça fait toujours plaisir de voir quelqu'un rejoindre la secte. Lazygit, c’est le Git que vous utilisez déjà,  [mais sans avoir à sacrifier des neurones](https://www.bwplotka.dev/2025/lazygit/)  pour vous souvenir si c'était git switch, checkout ou "tiens, je vais juste ouvrir une bière et reconsidérer ma carrière". Alors oui, si vous ne l'avez toujours pas testé… On ne veut pas dire que vous ratez votre vie, mais vous ratez votre vie.\r
\r
👨🏻‍💻 **Hackers weaponize Windows Hyper-V to hide Linux VM :** Le groupe Curly COMrades (oui, le nom ressemble à une mascotte de shampooing soviétique) a trouvé une nouvelle manière d'éviter les outils de sécurité :  [lancer leur propre mini-machine virtuelle Hyper-V](https://thehackernews.com/2025/11/hackers-weaponize-windows-hyper-v-to.html)  sur les machines compromises. Dedans, un petit Alpine Linux de 120 Mo, un reverse shell maison (CurlyShell), un reverse proxy, et tout ce qu'il faut pour se balader tranquillement pendant que l'EDR regarde ailleurs en sifflotant. Le gang, déjà connu pour taper sur la Géorgie et la Moldavie, bosse depuis 2023 à base de Mimikatz, implants .NET modulaires, tunnels dans tous les sens et persistance façon "on s'installe, on reste, et on paye pas le loyer". Bref, pendant que vous galérez à faire tourner un cluster K8s de test, eux font tourner un mini-Linux clandestin dans un coin pour piloter leurs attaques tranquillou. On peut être méchant, mais il faut reconnaître que c’est propre et efficace… si on oublie la partie cybercriminalité soutenue par un État.\r
\r
🥇  **How to write garbage code by Linus Torvalds :** Le créateur de Linux, Git, et accessoirement le chef d'orchestre irritable du plus grand projet collaboratif du monde, a une nouvelle fois expliqué à un ingénieur de Meta que son code était, techniquement parlant,  [de la purée de navet froide](https://read.engineerscodex.com/p/how-to-not-write-garbage-code-by). Derrière la castagne verbale, l'idée est simple : ne cachez pas des opérations triviales derrière des helpers débiles, ça rajoute du bruit, ça fatigue le cerveau, et ça oblige tout le monde à jouer au schmilblick dans les arborescences de fichiers.  \r
\r
🔳 **Termix :** Termix débarque comme une alternative à Termius, open-source, auto-hébergé, [et surtout pour toujours gratuit](https://github.com/Termix-SSH/Termix), ce qui dans ce milieu ressemble presque à une menace. L'idée : unifier la gestion de vos serveurs derrière une interface moderne, propre, et conçue pour vous éviter de jongler entre douze terminaux, trois tunnels SSH, et votre patience en fin de vie. Au programme, un terminal SSH avec panneaux façon "mur Bloomberg du sysadmin fatigué", du tunneling avec reconnexion automatique, un file manager qui ouvre tout, même les images (oui, vraiment), un dashboard qui donne l'illusion que vos serveurs vont bien, de l’OIDC, du TOTP, de l'authent préchauffée, et une UI moderne React/Tailwind/Shadcn pour prouver que même un panneau d'administration peut être sexy en 2025.\r
\r
🚀  **Why scaling is the funniest game :** Les cowboys de chez The New Stack ont demandé à Adam Jacob (System Initiative)  [pourquoi scaler, c'est la partie la plus fun du game](https://thenewstack.io/adam-jacob-on-why-scaling-is-the-funnest-game/). Sa réponse : parce que tu n'y touches pas tant que ça ne te fait pas mal, et que tant que personne n'utilise ton produit, optimiser revient juste à polir un mirage. Twitter a survécu sans savoir scaler pendant des années, donc relax. Et au final, son message est plutôt rassurant : tu n'as pas besoin d'anticiper l'apocalypse, construis un bon produit, laisse-le vivre, observe quand ça casse, puis renforce là où ça compte vraiment.\r
\r
🤖 **Infrastructure for AI is finally getting a standard :** Breaking news : après un an où tout le monde a balancé des modèles en prod à la truelle, l'infrastructure IA a enfin un standard. C'est durant la KubeCon d'Atlanta que le CNCF  [a annoncé le Kubernetes AI Conformance Program](https://www.giantswarm.io/blog/infrastructure-for-ai-is-finally-getting-a-standard), un label qui dit en gros que "Votre cluster ne prend pas feu quand vous lancez un modèle de 40 milliards de paramètres." Le standard définit ce qu'un cluster doit réellement savoir faire pour exécuter des workloads IA sans imploser : GPU sharing, scheduling pas trop bête, stockage qui ne pleure pas, gouvernance qui empêche les devs de miner du Dogecoin sur les nœuds, etc.\r
\r
![](https://storage.mlcdn.com/account_image/325165/oS4P3zdfozuEz2cKDb1fMM735EhcD40ByiszMcQr.jpg)\r
\r
# Le diagnostic Cyberdépart de l'ANSSI\r
\r
Vous souhaitez vous protéger contre les cyberattaques mais ne savez absolument pas par où commencer ? Pas de panique : l'ANSSI vous propose de prendre votre cyberdépart, un nom qui sonne un peu comme une course d'orientation, mais en moins fun.\r
\r
Le principe : un diagnostic gratuit de 1h30 avec un "Aidant cyber", dans vos locaux ou en visio, pour découvrir que vos mots de passe sont nuls, que vos sauvegardes datent d’avant le Covid et que votre Wi-Fi invité est un open bar.\r
\r
Attention, ce service n’est pas prévu pour les particuliers ni pour les boîtes à un seul salarié. En revanche, 3 300 sociétés ont déjà fait le grand saut, preuve que même les PME commencent à réaliser que le ransomware n'arrive pas qu'aux autres.\r
\r
Bref, si vous voulez un point de départ simple, rapide, et officiellement sponsorisé, c’est probablement le moment de prendre votre cyberdépart. Après, pour le cyberretour, ça dépendra de vous.\r
\r
[](https://messervices.cyber.gouv.fr/cyberdepart/)\r
\r
\r
**🔐 Keepr, an end to end password manager :** Keepr est un gestionnaire de mots de passe pensé pour les devs qui préfèrent vivre en ligne de commande plutôt que d’affronter une interface graphique. Tout est stocké localement  [dans une base SQLCipher chiffrée](https://github.com/bsamarji/Keepr), protégée par un mot de passe maître transformé en clé balaise via PBKDF2-HMAC (SHA256, 1,2 million d'itérations, rien que ça). Pas de cloud, pas de serveur, pas de sync magique, juste du chiffrement et du contrôle total.\r
\r
🛠️ **Proxmox VE 9.1 available :** Proxmox a dégainé la version 9.1 de sa distro de virtualisation préférée des admins qui aiment souffrir proprement. La grosse nouveauté est une dinguerie comme on dit à Montargis :  [le support des images OCI](https://proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-1) pour créer des conteneurs LXC. Oui, oui, on peut enfin balancer les mêmes images standardisées que dans nos pipelines. Proxmox les avale, les transforme en conteneurs système ou applicatifs, et pouf, vous déployez votre base de données ou votre API comme si de rien n'était. Le reste est du bonus : vTPM snapshotable en qcow2 (Windows applaudit timidement), contrôle plus fin du nested virtualization (pour ceux qui aiment faire tourner un hyperviseur dans un hyperviseur dans un hyperviseur on vous voit), et une visibilité SDN enfin digne de ce nom, avec un GUI qui arrête de jouer à cache-cache avec vos routes et vos MAC.\r
\r
⚡ **Loglynx, advanced log analytics for Traefik :** LogLynx, c’est un petit  [moteur d'analytics pour logs Traefik](https://github.com/k0lin/loglynx)  qui tourne avec moins de 50 Mo de RAM, soit à peu près ce que Chrome consomme en clignant des yeux. Ça ingère vos logs en temps réel, fait des cartes, des timelines, de la détection d’appareils, du GeoIP, le tout dans un dashboard dark mode qui ferait presque croire que vous savez ce que vous faites. Ça parle SSE, SQLite, REST API, auto-discovery… bref, tout ce qu'il faut pour jouer au détective réseau sans lâcher un rein dans une licence enterprise.  \r
\r
🐋 **How Docker hardened images patch cves in 24 hours :** Pour ceux que l'écosystème Docker intéresse, Docker continue de patcher les vulnérabilités à la vitesse d'un admin sous Red Bull. Dès qu’une CVE tombe, Docker Scout l’avale, l'analyse et déclenche la chaîne de rebuild comme si sa vie en dépendait. Résultat :  [images corrigées en moins de 24 heures](https://www.docker.com/blog/how-docker-hardened-images-patch-cves-in-24-hours/), pendant que d'autres en sont encore à rédiger un ticket Jira "à prioriser". Le tout repose sur une surveillance continue, pas sur un scan hebdomadaire qui découvre trois jours trop tard que votre stack est un gruyère. L'IA maison sert de firewall anti-conneries, bloque les patchs douteux, et un humain valide ce qui évite de pousser en prod un fix qui casse tout, joyeux classique de la sécurité pressée. Et comme chaque image embarque un SBOM propre et complet, fini les scanners qui hurlent au faux positif, les débats avec l'audit, ou les heures perdues à prouver que "non, promis juré, c’est bien patché".\r
\r
## Some Thoughts About Claude Code\r
\r
![](https://storage.mlcdn.com/account_image/325165/aemQQ4esXNJm6j8Ur0fXz5FciCNIaubetglVNpu3.png)\r
\r
  \r
\r
Merci à Arnaud qui nous partage cet article, et qui nous rappelle au passage que Claude Code, c’est un peu le stagiaire surdoué mais imprévisible que tu laisses toucher à ton repo en serrant les dents. Il lit tout, propose un plan, exécute des commandes, lance des tests… et parfois hallucine comme s'il avait compilé en pleine descente d'acide, avec le tout qui part chez Anthropic, avec une politique de rétention qui change plus souvent qu’un sprint mal cadré.\r
\r
Le conseil phare : ne jamais cliquer sur "always accept". Claude est utile, mais il faut le tenir en laisse. Sur des tâches propres (refacto, boilerplate, tests, etc) il est redoutablement efficace. Sur les demandes floues type "rends ça plus rapide" ou "corrige les bugs", il dérive façon artiste conceptuel.\r
\r
Et puis il y a le prix. Les tokens fondent vite, surtout quand Claude boucle dans sa petite logique interne. Résultat : tu finis par te demander si cette commande mérite vraiment 4 dollars d’analyse existentielle.\r
\r
L’auteur résume parfaitement : outil pratique, mais pas magique, à utiliser comme un assistant, pas comme un remplaçant. Relis tout, supervise tout, et garde un œil sur la facture.\r
\r
  \r
\r
[Accéder au lien ->](https://hashrocket.com/blog/posts/some-thoughts-about-claude-code)`,ie=`---\r
layout: post\r
title: Newsletter du 08 Décembre 2025\r
tags: [devops, Ghostty, Alpine, RustFS, Sirius]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Noël arrive dans une quinzaine de jours, et comme chaque année on se demande comment douze mois ont pu disparaître aussi vite. Le monde continue de cavaler, parfois sans logique, souvent sans pause, mais ce n'est pas forcément inquiétant, c'est même plutôt rassurant de voir que malgré le bruit, notre écosystème bouge, invente, et trouve de nouvelles façons de faire mieux que la veille.\r
\r
C'est un peu ce que montre cette newsletter : un paysage qui évolue en continu, avec des idées, des outils, des modèles qui émergent, disparaissent, reviennent différemment. Rien de linéaire, mais beaucoup d’élan, et tant mieux, c'est ce qui garde nos métiers vivants.\r
\r
Bref, Noël approche, le monde tourne vite, et nous, on continue d’avancer, un œil sur ce qui change, l'autre sur ce qui vaut encore la peine d’être construit.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**👻 Ghostty is now non-profit :** Ghostty, le terminal des gens de bon goût, devient non-profit, et quelque part on sent le parfum d'une époque où l'open source essayait encore d'être un bien commun plutôt qu'un produit d'appel pour un futur rachat.  [Mitchell Hashimoto explique la manœuvre avec gravité](https://mitchellh.com/writing/ghostty-non-profit)  : fiscal sponsorship, transparence totale, impossibilité légale de détourner la mission ou la caisse, et surtout la promesse qu’on ne verra jamais "Ghostty Enterprise Platinum Edition" s'inviter dans nos vies. L'idée est presque touchante : bâtir un terminal moderne qui ne pourra pas se faire capturer par un fonds d'investissement ou finir empaqueté dans un abonnement mensuel, un logiciel qui restera un outil, pas un produit bref, une exception dans un monde où tant de projets libres vieillissent mal, se vendent, mutent, se referment.\r
\r
🎁 **Advent of sysadmin 2025 :** Un chouette calendrier de l'Avent pour ceux qui préfèrent les logs aux chocolats :  [12 défis Linux/DevOps](https://sadservers.com/advent)  à relever, un par jour du 1er au 12 décembre. Le principe : un scénario réaliste, une machine cassée, 15 minutes pour comprendre, réparer, valider. Le but ? S'entraîner, se muscler techniquement et redécouvrir chaque matin que travailler dans l'informatique c'est une punition consentie.\r
\r
**🛠️ Domain Locker :** C'est l'outil pour tous ceux qui gèrent un portefeuille de noms de domaine comme je collectionne les mugs : sans méthode, sans souvenir précis, et avec un sentiment diffus de culpabilité. L'idée : vous centralisez  [vos domaines au même endroit](https://github.com/lissy93/domain-locker), Domain Locker fait l'analyse, récupère tout ce qui va avec (DNS, SSL, IPs, sous-domaines, registrar, santé du site, performances…) et surveille tout ça en continu. Simple basique et utile.\r
\r
☸️ **How to troubleshoot common Kubernetes errors :** Les cowboys de chez Spacelift ont partagé leur guide de "troubleshooting Kubernetes", et comme d'habitude avec ce genre de texte, on oscille entre thérapie de groupe et manuel de survie. L'idée de base est simple : Kubernetes, c'est formidable tant que ça marche, et dès que ça casse, on se retrouve à courir après des Pods en Pending, des Nodes NotReady, des CrashLoopBackOff et des images qui refusent de se laisser puller, tout ça dans un système distribué où absolument tout peut être coupable. Le guide déroule donc  [la méthode idéale du bon petit pompier K8s](https://spacelift.io/blog/kubernetes-troubleshooting)  : identifier, collecter, mitiger, vérifier, pérenniser et documenter, des probes aux events, des exit codes aux port-forward, jusqu'aux assistants "AI-powered" censés vous expliquer en mots doux pourquoi votre cluster brûle.\r
\r
😱 **What's actually keeping CISOs up at night :** Un article sympa qui nous vient des paranos de chez Security Boulevard, et qui résume assez bien  [pourquoi les CISOs dorment avec un œil ouvert](https://securityboulevard.com/2025/12/sleepless-in-security-whats-actually-keeping-cisos-up-at-night/)  : ce ne sont pas les IA maléfiques ni les hackers quantiques qui les réveillent en sueur, mais deux fléaux autrement plus ordinaires et infiniment plus humiliants, genre les basics qu’on ne fait toujours pas, et le gigantesque tas de Lego open source sur lequel repose toute l’informatique moderne. D’un côté, les fondamentaux : MFA pas déployée partout, IAM en roue libre, segmentation optionnelle… Bref, les mêmes causes, les mêmes conséquences, et les mêmes attaques qui passent parce que personne n'a le courage de s'occuper des 85 % de risques pas sexy mais catastrophiques. De l'autre, le risque existentiel : un écosystème logiciel tellement interconnecté qu'un mainteneur fatigué, un package abandonné ou une librairie générée par une IA que personne ne comprend suffit à faire trembler des milliers de systèmes.\r
\r
**🐧 Alpine 3.23.0 released :** Une news qui me permet de faire de la pige facile avec Alpine Linux 3.23.0 qui est sorti. Pas de drame, pas de polémique, juste une distro qui  [aligne les mises à jour comme si c’était un concours](https://alpinelinux.org/posts/Alpine-3.23.0-released.html)  : kernel 6.18, GCC 15, LLVM 21, Node 24, Rust 1.91, Docker 29, PostgreSQL 18, GNOME 49, KDE 6.5 et tout le reste du zoo habituel.\r
\r
\r
**🔥 Rustfs :** Une petite douceur pour les amateurs de stockage qui sentent bon la rouille avec RustFS,  [un objet store distribué façon S3](https://github.com/rustfs/rustfs), mais écrit en Rust donc théoriquement rapide, fiable, et moins susceptible de vous exploser au visage qu'un MinIO sous AGPL un lundi matin avec les perfs de Rust, la simplicité d'administration, une licence Apache 2.0 qui ne vous colle pas un avocat dans les pattes, et une compatibilité S3 complète pour ne pas casser vos outils. Le tout pensé pour les data lakes, l'IA, le big data, et toutes les autres raisons "stratégiques" d’acheter plus de disques que nécessaire. Fonctionnellement, l'essentiel est déjà là : uploads, versioning, bitrot protection, notifications, Helm charts. La réplication, le lifecycle et le mode distribué sont encore en chantier, mais ça avance.\r
\r
🔎 **Sirius Scan :** Pour ceux qui aiment scanner des vulnérabilités plus vite que leur SI ne les produit,  [Sirius est sorti en v0.4.0](https://github.com/SiriusScan/Sirius), et c'est toujours un joli mélange open source entre scanner de sécu, pentest automatisé et tableau de bord qui ressemble à un cockpit d’ISS sous stéroïdes. La nouveauté majeure de cette version tourne autour de l'observabilité. Santé temps réel, logs centralisés, métriques de perf, tableau de bord système… bref, tout ce qu'il faut pour suivre votre cluster pendant qu'il tente héroïquement de résister aux scans que vous lui infligez, plus quelques bonus : builds plus propres, meilleure gestion d’erreurs, SSH moins capricieux, et des tests auto pour éviter les surprises.\r
\r
🥇 **HoneyQuest :** Pour ceux qui veulent tester leur skills de hacker sans finir au tribunal, Honeyquest propose un jeu où le but est simple : repérer des failles dans des scénarios web réalistes… sauf que certaines sont de faux indices plantés juste pour vous faire passer pour un touriste. On vous montre une requête, une page, un comportement étrange, et à vous de dire ce que vous feriez en vrai, l'objectif n'étant pas de gagner de l'XP, mais d’[observer ce qui attire l’œil des attaquants](https://honeyquest.cns.research.dynatracelabs.com/), ce qu'ils ignorent, et comment ils se font avoir par des pièges grossiers ou subtilement tordus. Honeyquest sert surtout à comprendre quels types de vulnérabilités déclenchent les réflexes des humains et lesquels ne piègent plus que les bots enthousiastes et reste un excellent moyen de mesurer votre paranoïa opérationnelle.\r
\r
🐋 **Why I like using Docker Compose in production :** Nick Janetakis nous partage son point de vue sur  [Docker Compose en production](https://nickjanetakis.com/blog/why-i-like-using-docker-compose-in-production)  et pour lui, ce n’est ni un aveu de faiblesse ni une hérésie technique, juste du bon sens. Dix ans qu'il déploie ainsi la majorité de ses apps, et ça tourne, ça encaisse, ça facture. Son message, quelque part, c'est que tout le vernis "Compose c'est pour le dev / Kubernetes c'est pour les adultes" relève plus du folklore que du pragmatisme. Si votre app tient sur une machine à 20 balles et répond en moins de 150 ms, à quoi bon monter une cathédrale en YAML pour impressionner LinkedIn ? Compose n'est peut-être pas sexy, mais il est fidèle, prévisible, et ne vous réveille pas la nuit pour un nœud coincé en NotReady.\r
\r
\r
## Expose localhost to the internet\r
\r
![](https://storage.mlcdn.com/account_image/325165/8bZ5Iq4Yu86h0OhkYs6OG3Jb8aZW1XHjIasEniyD.png)\r
\r
  \r
\r
Merci à Jean-Pierre pour le courrier des lecteurs : après les VPN compliqués, les tunnels bricolés et les ngrok-de-travail, voici tunnl.gg, un service de reverse tunneling qui fait une promesse simple :  _exposer ton serveur local sur Internet avec une seule commande SSH_, sans installer quoi que ce soit.\r
\r
Le principe ? Un petit  \`-R 80:localhost:8080\`  qui dit au serveur distant tout ce qui arrive sur ton port 80, tu me le renvoies à la maison, merci bien. Tu remplaces 8080 par ce que tu veux, tu pointes sur  \`proxy.tunnl.gg\`, et hop, ton app React, ton Flask en dev ou ton bricolage obscur deviennent miraculeusement consultables depuis l’extérieur.\r
\r
[Accéder au lien ->](https://tunnl.gg/#/)`,oe=`---\r
layout: post\r
title: Newsletter du 22 Décembre 2025\r
tags: [devops, Docker, Dockcheck, Owasp, OpenCVE]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Bonnes fêtes à celles et ceux qui lèvent le pied, et courage à ceux qui tiennent la boutique pendant que le reste du monde mange des chocolats industriels. Que vous soyez d’astreinte, en prod, ou simplement coincés entre deux réunions inutiles, on pense à vous.\r
\r
Le boulot paie les factures et alimente les serveurs, mais ça reste le décor. Ce qui compte vraiment, ce sont les amis, la famille, les gens avec qui on partage autre chose que des tickets, autour d’une table, dans un message, à travers un silence qui repose, ou ce rare moment où personne ne vous glisse un "juste un petit truc avant Noël".\r
\r
La veille continue, la tech aussi, mais tout ça n’est pas important. Prenez soin de ce qui compte, le reste attendra bien janvier.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🐋 DockCheck :** Dockcheck est un chouette outil qui permet de gérer et automatiser les mises à jour d’images Docker  [sans y passer ses soirées](https://github.com/mag37/dockcheck). Ça tourne en interactif ou en unattended, ça notifie quand il faut, ça fait des backups avant de casser quoi que ce soit et ça nettoie après. Bref, de quoi arrêter de repousser les updates en se disant "on verra plus tard".  \r
\r
💝 **Is your CI/CD tool helping or hindering performance :** Olga Bedrina se penche sur une question que tout le monde connaît mais que peu osent formuler clairement : est-ce que ta CI/CD est vraiment un levier, ou juste un décor technique qu’on contourne en silence ? [En s'appuyant sur les métriques DORA](https://blog.jetbrains.com/teamcity/2025/12/is-your-ci-cd-tool-helping-or-hindering-performance/), l'article rappelle surtout une évidence qu’on préfère souvent ignorer : quand les déploiements prennent du temps, cassent trop souvent ou deviennent imprévisibles, ce n’est pas toujours un problème de méthode ou de volonté, très souvent c’est l’outillage lui-même qui impose son rythme, ses limites, et sa logique interne, au détriment du travail réel.\r
\r
🥇  **Upcoming change to Let's Encrypt certificates :** Let's Encrypt continue de faire évoluer les fondations du web sans tambours ni trompettes. Nouveaux certificats racine, nouvelle hiérarchie Generation Y, fin progressive du TLS client auth et certificats à durée de vie raccourcie.  [Rien de spectaculaire, mais beaucoup de prévention](https://community.letsencrypt.org/t/upcoming-changes-to-let-s-encrypt-certificates/243873). Pour la majorité des utilisateurs, bonne nouvelle, il n'y a rien à faire, la bascule se fera automatiquement en 2026. Ceux qui s’accrochent encore à des usages plus anciens ont un court sursis, pas une amnistie.\r
\r
😱  **Hardened images for everyone :** Docker annonce un grand geste :  [ses images "hardened" deviennent gratuites et open source](https://www.docker.com/blog/docker-hardened-images-for-every-developer/). En clair, des images Docker plus petites, plus propres, avec moins de CVE qui clignotent en rouge dans les scanners, et sans clause planquée au fond de la licence. Le discours est simple : la supply chain est un champ de mines, autant commencer avec des briques un peu moins friables. Transparence totale, SBOM inclus, pas de CVE maquillées pour garder un dashboard vert fluo. Alpine et Debian restent la base, histoire de ne pas réapprendre à marcher. Évidemment, si tu veux des SLA, du patch en urgence ou survivre après l'EOL, ça reste payant. Mais pour le commun des mortels, tirer une image "hardened" sans sortir la carte bleue, c’est déjà un progrès notable, pas révolutionnaire, mais suffisamment sain pour mériter un pull.\r
\r
🏹 **5 incident management lessons to carry into 2026 :** Les cowboys de chez The New Stack nous partagent ce papier, et surprise, il parle surtout de maturité. En 2025, ceux qui s’en sont sortis n’étaient pas les plus brillants,  [mais les mieux organisés](https://thenewstack.io/5-incident-management-lessons-to-carry-into-2026/). Des rôles clairs, des runbooks, et quelqu'un qui pilote pendant que d'autres réparent. L'IA aide à filtrer le bruit et à automatiser le pénible, mais les décisions restent humaines. Le vrai changement, c’est que l’incident sort enfin du seul monde IT. Support, sécu, métier : tout le monde est concerné. En 2026, les systèmes casseront encore, et la différence se fera entre ceux qui s’entraînent et ceux qui improvisent.\r
\r
🚀  **UptimeKit :** On a découvert cette appli durant notre veille, et elle coche une case simple mais souvent oubliée : savoir si ça répond, sans monter une usine à gaz.  [UptimeKit fait du monitoring depuis le terminal](https://github.com/abhixdd/UptimeKit-CLI), en daemon, avec un tableau de bord en TUI et juste ce qu’il faut de métriques pour savoir si ton service est vivant ou fait semblant. HTTP, ping, DNS, certificats SSL, notifications locales ou webhooks, c'est léger, lisible, et ça s'installe en deux commandes. Pas de promesse démesurée, juste un outil honnête pour garder un œil sur ses services sans ouvrir quinze onglets.\r
\r
![](https://storage.mlcdn.com/account_image/325165/79MxTzErnQIqpfKP7s7fV6Pkm9dS71AxoUtouZG5.png)\r
\r
Si vous vous intéressez un tant soit peu à la sécurité (ou si, par un malheureux concours de circonstances vous vous êtes retrouvé affublé du badge "DevSecOps" sans qu'on vous demande votre avis), l'analyse que  [Jim Burger vient de publier après avoir parcouru le Top Ten 2025](https://octopus.com/blog/20-years-of-appsec) (encore en Release Candidate) de l'OWASP a quelque chose de délicieusement cruel. On y retrouve cette saveur étrange, à la fois réconfortante et accablante : réconfortante, parce que les vieilles vulnérabilités sont toujours là, fidèles au poste comme de vieux camarades de régiment, et accablante, parce qu’elles continuent, vingt ans plus tard, à nous dynamiter joyeusement les systèmes.\r
\r
Ce que son état des lieux souligne, avec un sens aigu de la lucidité un peu désabusée, c’est que malgré la fièvre des pipelines CI/CD "shift-leftés", des scanners "AI-powered" et des tableaux de bord qui scintillent comme un cockpit de navette spatiale, nous retombons encore et toujours sur les mêmes écueils que nos aînés. L'injection, par exemple, n'a pas disparu, elle a simplement changé de costume, passant du SQL au NoSQL, puis au GraphQL, avant d'essayer une carrière dans les prompts d'IA. Broken Access Control, lui, reste numéro un comme si l'ensemble de l’industrie avait signé un pacte secret pour ne jamais vraiment vérifier qui a le droit de voir quoi. Quant à la supply chain, elle tient désormais plus du mythe forestier : un écosystème de centaines de milliers de dépendances, entretenu par des mainteneurs bénévoles dont la moitié a probablement oublié qu’ils avaient créé un package.\r
\r
Pour autant, l'article n’est pas une lamentation, mais plutôt un miroir poli avec soin qui ne nous fait pas de cadeau et qui nous rappelle que les menaces ne deviennent pas forcément plus sophistiquées : c’est nous qui construisons un terreau toujours plus fertile pour les mêmes vieilles vulnérabilités. Nous avons industrialisé l'intégration, automatisé l'analyse, gouverné par la policy-as-code… mais nous avons oublié qu'aucun outil ne remplacera jamais la compréhension des mécanismes fondamentaux, ni cette méfiance instinctive envers n’importe quelle entrée utilisateur qui sent vaguement l'aventure.\r
\r
Si ce futur Top Ten 2025 nous apprend encore quelque chose, c'est que la sécurité n'avance pas en ligne droite mais en boucle. Nous bâtissons des architectures plus complexes, des chaînes plus longues, des systèmes plus distribués, et nous y déployons, avec constance, les mêmes erreurs que celles de 2004, simplement transposées dans un décor plus moderne.  \r
\r
🏃‍♂️  **OpenCVE :** On a aussi croisé dans notre veille OpenCVE, et cocorico discret, l’outil est signé Nicolas Crocfer, Team Lead DevOps chez OVH, comme quoi, on sait faire autre chose que des slides PowerPoint et des outages mondiaux. OpenCVE donc,  [c’est une plateforme de veille CVE](https://github.com/opencve/opencve)  qui fait exactement ce qu’on lui demande : agréger les vulnérabilités depuis les bonnes sources, te laisser filtrer, trier, taguer, suivre les évolutions et recevoir des alertes sans transformer ta boîte mail en décharge toxique. Par produit, par éditeur, par gravité, avec historique, dashboards et rapports, histoire de garder un minimum de contrôle sur le chaos permanent des CVE. Ça existe en SaaS pour les pressés, et en self-hosted pour ceux qui aiment savoir où vivent leurs données. Pas révolutionnaire, mais propre, efficace, et clairement pensé par quelqu’un qui vit avec les vulnérabilités au quotidien plutôt que de les découvrir dans un audit annuel.\r
\r
⚡ **Nixopus :** Nixopus se présente comme une alternative open source à Vercel, Heroku ou Netlify, avec la promesse habituelle :  [un clic, ça déploie](https://github.com/raghavyuva/nixopus), zéro config, zéro SSH, et une jolie interface pour te donner l’impression que l’infra n’existe plus. Dans les faits, on est encore en alpha, donc surtout prêt à casser, pas à encaisser de la prod, mais sur le papier, la checklist est complète : terminal intégré pour quand ça tourne mal, gestion de fichiers façon explorateur, monitoring temps réel, SSL automatique, intégration GitHub et reverse proxy géré par Caddy. Le package SaaS classique, version self-hostable, avec en bonus la liberté de regarder sous le capot. À garder sous le coude, donc. Pas pour remplacer demain ce qui tourne déjà, mais pour rappeler que le rêve d’un PaaS simple, open source et sans abonnement mensuel existe toujours. En phase alpha, évidemment.\r
\r
🐍 **Use Python for scripting :** L’article part d’une scène familière : un script shell qui fonctionne parfaitement chez son auteur… et s'écroule dès qu’il croise un Mac, un autre Linux, ou une CI un peu trop propre. GNU contre BSD, options qui changent, commandes qui n’existent pas, et soudain,  [le petit script devient patrimoine technique](https://hypirion.com/musings/use-python-for-scripting). Le constat est simple : Bash, c'est très bien tant que ça reste minuscule, lisible et jetable. Dès que ça commence à accumuler des conditions, des substitutions obscures, et des incantations que plus personne n’ose toucher, ça devient une dette… avec un shebang. Python arrive alors non pas comme une solution sexy, mais comme une solution qui tient. Installé partout, compréhensible par à peu près tout le monde, doté d’une bibliothèque standard cohérente, il permet d'écrire des scripts qui survivent aux machines, aux systèmes, et aux humains.  \r
\r
## I got hacked, my server started mining Monero this morning\r
\r
![](https://storage.mlcdn.com/account_image/325165/ZQnyEP9pdesJ7X8SGo8b0QWZiTXeXxHTpzoVkCAT.png)\r
\r
  \r
\r
Merci à Marc pour le partage de ce retour d’expérience aussi passionnant que légèrement anxiogène.\r
\r
Résumé des épisodes précédents : "je n’utilise pas Next.js" n'a jamais empêché Next.js de s’inviter chez vous par l’intermédiaire d'une dépendance bien intentionnée. Résultat : un container d'analytics tranquillement exploité pour miner du Monero, un mail d’abuse Hetzner au réveil, et un load average digne d'un stress test.\r
\r
La bonne nouvelle, c’est que Docker a fait son boulot. Container non root, pas de volumes, pas de privilèges, pas d'évasion. On supprime le container, on respire, on active enfin le firewall qu’on repoussait depuis six mois, et on apprend deux ou trois choses utiles sur ses dépendances, ses images, et son hygiène de base.  \r
\r
[Accéder au lien ->](https://blog.jakesaunders.dev/my-server-started-mining-monero-this-morning/)`,ae=`---\r
layout: post\r
title: Newsletter du 05 Janvier 2026\r
tags: [devops, K8s, Pi-hole, Snitch, eBPF]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Janvier arrive toujours avec les mêmes promesses : des bonnes résolutions, des roadmaps toutes neuves, et des systèmes qui n'ont absolument rien demandé mais qu'on va quand même "optimiser".\r
\r
Dans cette édition, on parle de ce qu'on voit revenir encore et encore : de la sécurité qu'on redécouvre trop tard, des outils qui tentent de rendre tout ce zoo un peu plus lisible, et de cette industrie qui change de vocabulaire plus vite que de pratiques. Rien de révolutionnaire, juste du réel, du concret, et quelques rappels utiles pour attaquer l'année sans trop se raconter d'histoires.\r
\r
Bonne lecture, et courage, ce n’est pas une nouvelle année qui va casser la prod toute seule.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
☸️ **How I think about Kubernetes :** Un rappel salutaire pour ceux qui pensent encore que Kubernetes est juste un chef d'orchestre un peu trop zélé. Kubernetes ne lance pas des conteneurs, il exécute des intentions. Vous lui décrivez un état désiré, il le grave dans le marbre et passe ensuite son temps à corriger la réalité pour qu’elle colle au manifeste. Supprimer un pod à la main n'est pas une action, c'est une hérésie temporaire aussitôt réparée. Pods, Deployments, Services ne sont pas des scripts déguisés mais des types, avec leurs règles strictes et leurs effets bien précis.  [Si vous vous trompez de type, le système ne crie pas](https://garnaudov.com/writings/how-i-think-about-kubernetes/), il attend, puis vous le fait payer plus tard. Et vu comme ça, GitOps devient évident, kubectl redevient un outil d’observation, et K8s apparaît pour ce qu’il est vraiment : un runtime obstiné, littéral, et parfaitement cohérent. Le bug n’est presque jamais dans le cluster, il est dans ce qu’on lui a demandé.\r
\r
💝 **Netronome :** C’est l'outil qui regarde le réseau pendant que vous faites semblant de dormir.  [Ça mesure, ça trace, ça alerte](https://github.com/autobrr/netronome/), et surtout ça se plaint à votre place quand les paquets se perdent ou que la bande passante fond sans prévenir. Un binaire Go tout-en-un, frontend compris, qui tourne avec une poignée de mégaoctets et zéro dépendance exotique. Vous le lancez, il surveille CPU, mémoire, disque, débit, pertes réseau, et même vos liens Tailscale sans ouvrir un seul port. Des agents légers, un tableau de bord vraiment sexy et archi lisible, des graphes et des alertes qui arrivent là où vous êtes déjà distrait, bref, on vous conseille chaudement de le tester.\r
\r
🥇  **Retour d'expérience sur Pi-Hole :** J'ai pris un peu de temps pour décrire  [pourquoi et comment j'ai installé PI-Hole et Unbound](https://www.linkedin.com/pulse/retour-dexp%C3%A9rience-pi-hole-unbound-%C3%A0-la-maison-cyril-beaufrere-mvone/?trackingId=4uQfoh0oRKaV6%2Fwgh0iCJg%3D%3D)  à la maison, et quels sont les bénéfices que j'en tire. Les pubs ont disparu, mes pages chargent plus vite, et étrangement j’ai meilleure mine. Coïncidence ? Je ne crois pas.  \r
\r
🤖 **XPipe, entire server infrastructure at your fingertips :** XPipe, c'est un hub local pour SSH, Docker, kubectl et consorts. Rien à installer sur les serveurs, il  [se contente d'orchestrer vos outils CLI existants](https://github.com/xpipe-io/xpipe), mais avec une surcouche qui évite de jongler entre dix terminaux, trois scripts bancals et une mémoire défaillante. Connexions rangées proprement, fichiers distants édités avec vos outils locaux, tunnels, conteneurs, sudo à la volée : tout ce que vous faisiez déjà, mais sans faire semblant d'aimer le bordel.\r
\r
🐝 **The eBPF foundation's 2025 year in review :** Les freaks de la eBPF Foundation ont publié leur bilan 2025, et surprise, eBPF n’est plus un jouet de kernel pour hackers insomniaques, c’est devenu un truc sur lequel des gens raisonnables basent de vraies plateformes. Pas de feature révolutionnaire cette année,  [mais du travail ingrat et utile](https://ebpf.foundation/the-ebpf-foundations-2025-year-in-review/), comme de meilleurs tests dans le kernel, des runtimes plus sûrs, JIT audités, BTF mieux outillé, et un effort assumé pour que ça marche pareil sur x86, ARM et le reste du cirque habituel. Côté usage, on n’est plus dans la démo de conf car Meta, Datadog, Alibaba & co utilisent eBPF pour consommer moins de CPU, moins de réseau et moins d’argent. Et comme tout ce qui finit par marcher, ça attire maintenant chercheurs, fondations, subventions, meetups et programmes de fellowship.\r
\r
🚀  **Snitch :** C’est ss/netstat  [mais pour des humains](https://github.com/karol-broda/snitch). Un outil qui te montre les connexions réseau sans te punir avec des colonnes illisibles et des flags cryptiques hérités de 1998. Tu veux voir qui parle à qui, sur quel port, et arrêter de plisser les yeux devant  \`ss -tulpn\`  ? Snitch te sort ça en TUI propre ou en tableaux lisibles, sans te demander un doctorat en regex réseau.\r
\r
## The Observability Evolution: How AI and Open Source are Taming Kubernetes Complexity\r
\r
![](https://storage.mlcdn.com/account_image/325165/5IKBqYgE2HKC3eGUxeWad2n8Xovok4Ec2SAQwnRK.png)\r
\r
  \r
\r
Merci à Arthur G de Toulouse pour le partage de ce papier de fin d'année, qui explique calmement ce que beaucoup vivent bruyamment : Kubernetes est devenu un sport extrême, et l'observabilité sert désormais de casque, de genouillère et parfois de psychologue.\r
\r
L'article revient sur une évidence longtemps ignorée : à force d’empiler des clusters, des microservices et des métriques par millions, les humains ont décroché. Résultat, l'industrie redécouvre la valeur des interfaces lisibles, de l'open source bien pensé et de l'IA qui fait autre chose que des slides marketing.\r
\r
En résumé, moins de YAML en apnée, plus de dashboards compréhensibles, un peu d'IA pour trier le bruit, et l'espoir naïf mais tenace que Kubernetes devienne enfin utilisable par autre chose qu’un DevOps barbu, insomniaque et vaguement résigné.\r
\r
  \r
\r
[Accéder au lien ->](https://cloudnativenow.com/editorial-calendar/best-of-2025/the-observability-evolution-how-ai-and-open-source-are-taming-kubernetes-complexity-2/)`,ue=`---\r
layout: post\r
title: Newsletter du 19 Janvier 2026\r
tags: [devops, Talos, K8s, Tailwind, Memtui]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Le monde brûle un peu partout. Aux États-Unis, des idées qu'on pensait rangées au rayon des horreurs du 20ème siècle reviennent en costard, badge et algorithmes. Le fascisme ne marche plus au pas de l'oie, il s'optimise, se teste en A/B, se déploie en production.\r
\r
Et pendant ce temps-là, dans notre petite veille techno, on parle d’open source, d'outils, de pratiques, de gens qui documentent, partagent et construisent à plusieurs. Ce n'est pas hors-sol, c'est même tout l’inverse. Le libre, ce n'est pas juste une licence ou un repo Git, c'est une manière de refuser que tout devienne opaque, propriétaire, verrouillé par défaut.\r
\r
Cette veille n'a aucune prétention, mais elle rappelle une chose simple : quand tout tend vers le contrôle, la fermeture et la peur, continuer à comprendre, partager et garder la main sur nos outils reste un acte éminemment politique, même quand ça ressemble juste à une newsletter un peu cynique lue entre deux tickets.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
🖥️ **From pets to cattle, the new mindset for managing VMs :** Un papier des cowboys de chez TheNew Stack qui nous explique, une fois de plus, que les VM ne sont plus des animaux de compagnie mais du bétail, et que la solution consiste évidemment à les faire entrer de force dans Kubernetes via KubeVirt. [L'idée n’est pas tant technique que psychologique](https://thenewstack.io/from-pets-to-cattle-the-new-mindset-for-managing-vms/)  : arrêter de cliquer dans des interfaces pleines de souvenirs, accepter le YAML, Git, la déclaration d'intention et le fait que ça disparaît et ça revient. On y parle surtout de résistance au changement, de perte de contrôle ressentie, et de ce moment gênant où les équipes découvrent que K8s ne fait pas que tourner des conteneurs, mais remet aussi en question leurs habitudes. Rien de révolutionnaire, mais un bon rappel que le plus dur, dans la migration des VM, ce n’est pas la techno, c’est l’ego.\r
\r
🔥 **Rebuilding my Talos cluster from bare metal :** Un radicalisé a tenté une simple refacto Flux bien propre, et a déclenché l’apocalypse ordinaire du homelab moderne. Rook-Ceph a vu deux manifests bouger, a paniqué sur des disques "déjà vus", et  [le cluster a commencé à faire la grève](https://blog.nerdz.cloud/2025/talos-dr-reset/)  comme un service public un jour de départ en vacances (je plaisante calmez-vous les fonctionnaires). Du coup méthode hygiène maximale, on blkdiscard tout ce qui dépasse, on wipefs les souvenirs, et on relance Talos plus Flux comme si de rien n'était, avec un Taskfile pour éviter de se trahir soi-même en tapant une IP au mauvais endroit. Et quand enfin tout respire, on découvre une feature alpha qui monte un OCI en volume read-only, on l'active évidemment, parce que quitte à tout reconstruire autant ajouter un nouveau point de fragilité, pour l'amour du risque.\r
\r
**☸️ How to setup kubectl aliases with kuberc :** Bibin Wilson nous apprend une nouveauté qui aurait dû exister avant qu'on invente GitOps et la thérapie de groupe. Depuis kubectl 1.33, les alias peuvent en effet enfin vivre dans un fichier dédié, kuberc,  [au lieu de pourrir votre .zshrc](https://devopscube.com/kubectl-aliases/)  entre deux exports honteux. En pratique, vous passez kubectl en 1.33+, vous activez la feature via une variable d'environnement, vous posez un YAML dans ~/.kube/kuberc, et kubectl lit vos alias nativement. Bonus, vous pouvez aussi y définir des overrides pour imposer des flags par défaut, histoire que "juste un get" finisse systématiquement en "-o yaml", comme la nature l'a voulu.\r
\r
</> **Two regimes of Git :** Pendant que certains veulent annexer le Groenland, d'autres tentent encore d’annexer Git avec une seule règle universelle, comme si ça avait déjà marché quelque part. Mark Seemann rappelle pourtant un truc simple :  [Git a deux modes de jeu](https://blog.ploeh.dk/2026/01/12/two-regimes-of-git/), et les confondre est un sport de haut niveau. Le premier, collaboratif, où tout ce qui est poussé devient sacré. Tu touches à l’historique et tu déclenches un incident diplomatique. Le second, tactique, en local, sans public. Là, tu rebases, tu réécris, tu nettoies, tu fais disparaître les erreurs comme si elles n'avaient jamais existé parce que personne n’a besoin de voir tes brouillons. Moralité : Git c’est pas compliqué, ce qui l'est, c'est d'accepter que tout le monde ne joue pas dans le même régime, et que hurler "rebase interdit" hors contexte est une forme d'extrémisme modéré.\r
\r
🏹 **Anubis :** Anubis,  [c'est un pare-feu web](https://github.com/TecharoHQ/anubis)  qui te regarde droit dans les paquets et te demande si tu es un humain ou juste un autre aspirateur à données entraîné au venture capital. C’est pas encore tout à fait sec, mais l'essentiel est là, à suivre pour ceux qui bossent dans de petites structures.\r
\r
**💾 Plakar :** Une chouette solution de backup qui a décidé que copier des fichiers c'était trop simple et surtout pas suffisant. Plakar sauvegarde les données  [avec leur contexte](https://github.com/PlakarKorp/plakar), histoire de ne pas restaurer un truc inutilisable à 3h du matin en se demandant où est passé le reste. C'est chiffré, immuable, dédupliqué, compressé, scalable dans tous les sens et étonnamment calme sous charge. Tu peux parcourir, comparer, monter un snapshot à la volée, restaurer juste ce qui t'intéresse, et repartir sans avoir à sacrifier un SSD et ta dignité.\r
\r
![](https://storage.mlcdn.com/account_image/325165/Zup52cvnTcdWNxTUeCyxrJbDOu5vN0KxGLgoAwsU.png)\r
\r
# Succès technique, échec économique\r
\r
  \r
\r
Personne ne conteste le succès de Tailwind, le framework est partout. Ce qui s’effondre, en revanche, ce sont les recettes.  [En deux ans, Tailwind Labs a vu ses revenus chuter brutalement](https://loud-technology.com/blog/tailwind-labs-ia-menace-modele-economique-open-source/), alors même que l'adoption continuait de croître. Résultat mécanique :  [licenciement d’environ 75 % de l’équipe](https://www.leanware.co/insights/tailwind-ai-crisis)  à cause d'une équation économique qui ne tient plus.\r
\r
Le modèle était pourtant classique pour l'open source moderne : une documentation très fréquentée, notoriété, puis monétisation via des produits premium (UI kits, templates, services). Sauf que la doc n'est plus lue, elle est ingérée. Les agents IA consomment le contenu, génèrent le code, et l'utilisateur n'a plus aucun contact avec le projet ni aucune raison de financer quoi que ce soit. Le trafic baisse, la conversion disparaît, la trésorerie suit.\r
\r
Le plus dingue, c'est que tout fonctionne techniquement, le projet remplit sa mission, c'est juste que  [la valeur économique est désormais captée en amont](https://devclass.com/2026/01/08/tailwind-labs-lays-off-75-percent-of-its-engineers-thanks-to-brutal-impact-of-ai/), par des intermédiaires qui ne contribuent ni au maintien, ni à l'évolution du logiciel. L'open source continue d’alimenter l’écosystème gratuitement pendant que ceux qui le maintiennent réduisent la voilure.\r
\r
On reconnaît le scénario. Un contenu devenu indispensable, un modèle fondé sur l'attention, puis une couche intermédiaire qui capte l’usage sans jamais capter la responsabilité. La valeur circule, l'argent s'évapore, le logiciel continue de tourner, mais ceux qui le maintiennent réduisent la voilure. Et la question reste entière :  **comment financer des biens communs quand l’usage n’implique plus aucun lien direct avec ceux qui les produisent ?**\r
\r
🏃‍♂️  **Open-Bastion :** Open-Bastion c'est l'idée simple qu'on promet depuis vingt ans et qu'on finit rarement par appliquer proprement : reprendre la main sur qui se connecte en SSH, où, et pour faire quoi, sans laisser traîner des clés et des sudoers bricolés à la main. Le principe est simple comme une chanson de Jul :  [un bastion central, branché sur LemonLDAP::NG](https://github.com/linagora/open-bastion) qui décide, accès par token temporaire ou clé SSH vérifiée, règles définies une fois, appliquées partout via PAM/NSS. Pas d’interprétation locale, pas de créativité. Côté hygiène, on est sur du sérieux sans folklore : TLS partout, journaux JSON propres, rate limiting, secrets chiffrés, et même intégration CrowdSec pour ceux qui aiment quand les IP disparaissent toutes seules.\r
\r
💝 **God's eye :** Pour ceux qui aiment quand la cartographie d'un périmètre ressemble moins à une checklist et  [plus à une autopsie](https://github.com/Vyntral/god-eye), God's Eye arrive avec la délicatesse d'un scanner industriel. Ça énumère les sous-domaines, ça brute-force tout ce qui bouge, ça interroge tout ce qui passe, puis ça enchaîne HTTP probing, détection de technos, cloud guessing, secrets planqués dans le JavaScript, takeover potentiels et CVE servis encore chauds, le tout avec une couche d’analyse avec un LLM local, parce qu'en 2026 même la reco refuse de réfléchir toute seule.\r
\r
😱 **Histomat of F/OSS, we should reclaim LLMs, not reject them :** Un chouette billet qui défend une idée presque subversive : le problème des LLMs n'est pas qu'ils mangent du code libre, mais qu'ils recrachent du propriétaire.  [La réponse ne serait donc pas la fuite](https://writings.hongminhee.org/2026/01/histomat-foss-llm/)  ou le blocage de bots déjà gavés, mais une bonne vieille arme open source, le copyleft. En gros entraîne-toi si tu veux, mais libère les modèles, poids compris.\r
\r
🥇 **Memtui :** Pour ceux qui ne savent pas quoi faire de leur week-end et qui trouvent que fouiller un Memcached à coups de telnet manque cruellement de poésie, voilà memtui. [Un TUI moderne en Go](https://github.com/nnnkkk7/memtui)  pour explorer des clés comme on explore une arborescence, lire du JSON sans pleurer, détecter du gzip sans deviner, et éditer des valeurs avec un minimum de garde-fous pour éviter de tout casser. Recherche floue en temps réel, palette de commandes façon VS Code, confirmations avant les actions irréversibles et raccourcis vim pour se sentir chez soi, en clair tout ce qu’il faut pour passer deux jours à "juste regarder" Memcached et finir par comprendre pourquoi personne n’aime y toucher.  \r
\r
## Easier Than Nano, Fresh is a 'Fresh' New Rust-based Terminal Editor for Linux\r
\r
![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)\r
\r
  \r
\r
Merci à Pascal C, Scrum Master dans une célèbre startup parisienne, qui nous partage cette découverte autour de Fresh, un éditeur de texte TUI qui prend volontairement le contrepied de Vim et Emacs.\r
\r
Fresh part d'un constat simple : tout le monde n'a ni l'envie ni le temps d'apprendre des keybindings ésotériques ou l'édition modale. Ici, pas de surprise : Ctrl+S pour sauvegarder, Ctrl+F pour chercher, Ctrl+Z pour annuler. Comme un éditeur graphique… mais dans un terminal.\r
\r
Le projet, écrit en Rust, pousse le concept assez loin : support complet de la souris, palette de commandes (Ctrl+P), explorateur de fichiers intégré (Ctrl+E), panneaux latéraux, thèmes, aperçu Markdown et même un terminal embarqué, le tout sans configuration lourde. À noter aussi un support LSP natif et la capacité de manipuler des fichiers très volumineux ce qui parlera à pas mal d’ops.\r
\r
Les plugins existent également, développés en TypeScript, exécutés dans un environnement sandboxé, ce qui est plutôt sain côté sécurité.  \r
\r
[Accéder au lien ->](https://itsfoss.com/fresh-terminal-text-editor/)`,le=`---\r
layout: post\r
title: Newsletter du 02 Février 2026\r
tags: [devops, Dockers, K8s, Superplane, KRR]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Cette édition de RudeOps ressemble à l'époque qu’on traverse : beaucoup d'outils, beaucoup de promesses, et de plus en plus d'IA glissée partout, parfois par conviction, souvent par nécessité marketing.\r
\r
Des agents qui codent, des dashboards qui "expliquent", des recommandations automatiques qui promettent d'optimiser ce qu’on a jamais vraiment pris le temps de régler à la main. Derrière le vernis, on retrouve surtout les mêmes obsessions d'ops fatigués : réduire le bruit, maîtriser les coûts, limiter les blast radius et éviter que la prod ne décide de partir en freestyle.\r
\r
L'IA ouvre clairement des possibilités intéressantes, mais elle n'efface ni la complexité, ni la responsabilité, et change surtout la forme des outils… pas le fond du métier.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🐋 What has docker become :** Docker Inc continue son slalom stratégique : Swarm vendu, dev tooling (Scout, Testcontainers), sécurité, IA partout, GPU offload et agents en liberté. Dernier coup : plus de 1 000 Hardened Images rendues gratuites et open source, histoire de rappeler que "free" reste la meilleure réponse à Chainguard. Le problème, c’est que Docker a trop bien réussi : la techno est devenue  [une brique d’infrastructure, omniprésente](https://tuananh.net/2026/01/20/what-has-docker-become/), invisible, et donc structurellement impossible à facturer. Docker va très bien, Docker Inc, beaucoup moins.\r
\r
☸️ **Kubewall :** Un énième dashboard Kubernetes "simple", temps réel et évidemment boosté à l'IA, parce qu'en 2026 on ne peut plus lister des pods sans convoquer trois LLM. Promesse : gérer tous vos clusters depuis un binaire unique, sans dépendance, avec logs, manifests, port-forwarding et clic droit magique pour redémarrer ce que vous ne comprenez pas. Réalité probable : une jolie surcouche pour faire oublier que  [Kubernetes reste trop complexe](https://github.com/kubewall/kubewall), même pour ceux qui prétendent le maîtriser. Bonus : privacy by design et zéro cloud… jusqu'au moment où vous branchez OpenAI pour savoir pourquoi votre PodCrashLoopBackOff existe.\r
\r
🥇  **Manage systemd services with systemctl on Linux :** Les cowboys de chez DigitalOcean nous ont pondu un guide complet pour expliquer  [comment utiliser systemctl](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units), cette commande que tout admin Linux tape machinalement depuis dix ans tout en expliquant que c'était mieux avant. On y revoit comment démarrer, arrêter, masquer des services, manipuler des units et jouer avec les targets quand plus rien ne répond. C’est utile pour les juniors, vaguement rassurant pour les autres, et surtout un bon rappel que systemd est devenu une techno incontournable, invisible quand tout va bien, ésotérique quand ça casse, et presque toujours réparée à coups de daemon-reload et de soupirs résignés.  \r
\r
👾 **OpenCTI :** Une plateforme open source pour centraliser, structurer et visualiser la cyber threat intelligence, autrement dit pour donner une forme exploitable à des montagnes d’IOCs, de TTPs et de rapports PDF que personne ne lit en entier. Basé sur STIX2, connecté à MISP, TheHive et MITRE ATT&CK, OpenCTI promet de transformer le chaos informationnel en graphes élégants et en relations "inférées". Dans les faits,  [c'est un excellent outil pour les équipes matures](https://github.com/OpenCTI-Platform/opencti)… et un magnifique aspirateur à temps pour les autres qui découvriront qu’industrialiser la CTI ne rend pas la menace plus simple, juste mieux documentée. Bonus classique : une Community Edition open source, et une Enterprise Edition pour quand la réalité du budget rattrape les idéaux.\r
\r
![](https://storage.mlcdn.com/account_image/325165/6PyYZGHMM98xYOp8yKvdIAFuob1WdGQNlSeEJwtI.png)\r
\r
# Data-Shield Blocklist, The Official IPv4 Blocklist Community\r
\r
Derrière cette bloc-list ultra sérieuse, il y a le travail de  [Laurent Minne](https://www.linkedin.com/in/laurent-minne/), et franchement c'est du très solide. Une liste maintenue proprement, alimentée par des sondes globales et des HIDS/SIEM auto-hébergés, pensée pour être consommée telle quelle par des firewalls, WAF ou outils de CTI sans gymnastique inutile. Le discours est carré, les chiffres aussi, la fraîcheur maîtrisée, la compatibilité universelle assumée. Oui, ça bloque beaucoup, oui, ça réduit drastiquement le bruit, et non, ce n'est pas de la magie : juste du boulot bien fait, rigoureux, documenté, et déployable sans bullshit marketing. On est clairement sur un projet très pro, tenu par quelqu'un qui sait ce que "réduire la surface d’attaque" veut dire en production, et ça force le respect.  \r
\r
[Découvrir](https://duggytuxy.github.io/)\r
\r
\r
🏃‍♂️  **Adapter PostgreSQL pour 800 millions d'utilisateurs de ChatGPT :** OpenAI, la petite startup familiale qui a le vent en poupe, nous explique comment  [PostgreSQL encaisse des millions de QPS](https://openai.com/fr-FR/index/scaling-postgresql/)  pour faire tourner ChatGPT, avec un mono-primaire, des dizaines de réplicas en lecture et une avalanche de garde-fous pour éviter l'implosion. La leçon reste la même, Postgres scale très bien tant qu’on limite les écritures, qu'on déporte le sale boulot ailleurs et qu'on passe son temps à empêcher l'application de se tirer une balle dans le pied.\r
\r
🤖 **Superplane, an n8n for Devops :** Superplane, le nouveau "n8n pour DevOps", débarque avec l'ambition modeste d'orchestrer tout ce que vos pipelines, alertes, tickets et notifications font déjà… mais chacun dans son coin. L'idée est simple : rajouter un control plane au-dessus d'une dizaine d'outils censés simplifier votre vie, pour  [enfin capturer ce fameux tribal knowledge sous forme de jolis workflows visuels](https://github.com/superplanehq/superplane). C'est open source, auto-hébergé, stateful, durable, et évidemment stocké dans PostgreSQL. Promesse officielle : moins de coordination manuelle. Réalité probable : un très bel outil, bien pensé, qui finira soit par devenir indispensable, soit par être un autre diagramme que plus personne n'ose toucher de peur de casser la prod.\r
\r
⚙️ **OpenCode vs Claude Code :** Les artistes de chez Builder.io nous ont pondu un comparatif pour expliquer les subtiles différences entre un  [agent CLI propriétaire bien poli et son équivalent open source](https://www.builder.io/blog/opencode-vs-claude-code), plus libre, plus bricolable et forcément un peu moins lisse. D'un côté, Claude Code, le jardin bien taillé où tout marche tant que tu restes chez Anthropic, de l'autre, OpenCode, la fête foraine des providers, des modèles locaux et des configs JSON, avec le plaisir de la liberté et les bugs qui vont avec. Le comparatif est intéressant, vraiment, mais soyons honnêtes, côté RudeOps on n’a pas besoin de tableaux ni de chronos pour faire un choix. Vendor lock-in ou un peu de mains dans le cambouis, chacun choisira selon son seuil de tolérance au polish, à la facture mensuelle et à l'envie de garder la main quand le provider décide de changer les règles du jeu.  \r
\r
🛡️ **Minimal CVE hardened container image colection :** Une collection d'images containers minimalistes, reconstruites quotidiennement, avec zéro CVE ou presque,  [pour rappeler que debian:latest n'a jamais été une base secure](https://github.com/rtvkiz/minimal). Python, Node, Go, Nginx, Postgres & co, sans shell quand c'est possible, patchées en 24–48h et prêtes pour faire plaisir aux audits. C'est propre, sérieux, et ça fait exactement ce que la sécurité demande depuis des années… à condition de résister à l’envie d’ajouter bash 'juste pour debug'.\r
\r
\r
## Kubernetes Resource Recommendations Based on Historical Data\r
\r
![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)\r
\r
David R nous a partagé KRR, un outil qui promet de dire à Kubernetes combien de CPU et de RAM vos pods auraient vraiment dû demander depuis le début. Le principe est simple, on regarde l'historique Prometheus, on calcule, et on sort des recommandations de requests et limits sans agent, sans magie noire, et sans installer encore un truc de plus dans le cluster.\r
\r
Sur le papier, ça fait rêver : moins de gaspillage, des coûts en baisse et des graphes pour expliquer pourquoi votre pod à 4 CPU n’en consomme jamais plus de 200 millicores. Dans la vraie vie, ça reste un rappel utile d’une vérité gênante : Kubernetes n’a jamais été bon pour l’auto-discipline, et si vos ressources sont mal dimensionnées, ce n’est pas la faute du scheduler.\r
\r
Merci à David R pour le partage, ça mérite clairement un coup d'oeil.  \r
\r
[Accéder au lien ->](https://github.com/robusta-dev/krr)`,ce=`---\r
layout: post\r
title: Newsletter du 16 Février 2026\r
tags: [devops, Glances, ASF, LLM, Vortix]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Au moment où vous lisez ces lignes, je suis chez le dentiste, bouche ouverte, regard vide, pendant qu'un type masqué en blouse blanche s'acharne à extraire deux dents qui n'ont rien demandé.\r
\r
Il paraît qu'elles sont devenues inutiles et potentiellement dangereuses, alors on les enlève. C’est préventif, c’est propre, et c'est exactement comme ça qu'on traite les vieux serveurs.\r
\r
Tant qu'ils ne font pas de bruit, on les ignore, et puis un jour, quelqu'un prononce les mots fatidiques : "non supporté", "plus maintenu".\r
\r
Et là, c'est la panique, on sort les gants, on prévoit une coupure, on parle de "migration douce" alors qu'en vérité, on va tout arracher et espérer que ça repousse bien ailleurs, dans le cloud ou dans un coin de budget jamais validé.\r
\r
On appelle ça la gestion de l'obsolescence.\r
\r
Mais vu de l’intérieur, c’est surtout de l'extraction, ça a l'air vivant, mais ça ne l'est plus depuis longtemps.\r
\r
Un peu comme mon sourire dans les heures qui viennent.  \r
  \r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🖥️ Glances :** Pour les deux du fond qui ne suivent pas et qui pensent encore que top suffit à comprendre ce qui se passe sur un serveur,  [Glances est monté en version 4.5.0](https://github.com/nicolargo/glances)… enfin 4.5.0.1, parce que la 4.5.0 a été remplacée. Classique. Au programme : monitoring ZFS natif, support NVMe amélioré, surveillance des NPU (oui, même vos puces IA ont droit à leur graphe), export vers DuckDB, et possibilité de voir sur quel cœur CPU tourne chaque process, de quoi relancer des débats inutiles en salle ops. Côté sécurité, token pour l'API REST et correctifs bienvenus sur des vulnérabilités qui traînaient. Bref, 40 issues fermées, du refactoring, moins de complexité, plus de stabilité, Glances continue tranquillement de faire ce qu'il fait depuis toujours : vous montrer que votre serveur va bien… jusqu'au moment précis où il ne va plus bien du tout.\r
\r
🪶 **The Apache Software Foundation announces new top-level projects :** L'Apache Software Foundation annonce  [un nouveau Top-Level Project](https://news.apache.org/foundation/entry/the-apache-software-foundation-announces-new-top-level-project-3), sans doute parce qu’il n’y avait visiblement pas encore assez de projets Apache dont tout le monde dépend sans vraiment savoir qui les maintient. Passage en TLP, gouvernance officielle, comité dédié, maturité reconnue… le bingo open source est complet. Derrière la communication institutionnelle bien huilée, ça reste la même réalité : plus de responsabilités, plus d'utilisateurs, et probablement le même nombre de maintaineurs bénévoles le soir après le boulot.\r
\r
**🤖 Sysadmin in the LLM age :** Un sysadmin en colère découvre qu’un confrère a "vibe-codé" un coloriseur de logs avec un LLM et décide d'y voir  [le symbole de l'effondrement civilisationnel](https://nullrouted.space/2026/02/05/sysadmin-in-the-llm-age/). Le billet est un long cri du cœur : l'IA rendrait paresseux, flatterait l'ego, brûlerait la planète et détruirait l'art noble de demander de l'aide sur IRC. Derrière l'indignation très pure, on retrouve un débat classique : est-ce qu'un LLM rend vraiment meilleur, ou est-ce qu'il donne juste l'illusion de compétence ? Le texte tranche sans nuance, tout est décadence et individualisme toxique, oubliant peut-être qu'entre "coder seul dans son coin" et "remplacer toute communauté par une machine", il existe un entre-deux un peu moins apocalyptique. Mais bon, au moins le log est colorisé.  \r
\r
</> **Hide code in a repo using git submodules :** Besoin de cacher une partie de votre code sans créer un repo totalement séparé ? Git a déjà la réponse :  [les submodules](https://spin.atomicobject.com/repo-git-submodules/). Un repo enfant avec ses propres droits d'accès, référencé par le parent, et invisible pour ceux qui n'y ont pas accès. Propre sur le papier, pratique pour du code sensible, mais en contrepartie, vous gagnez des pointeurs de commit à maintenir et des clones qui cassent si quelqu’un oublie un petit --recurse-submodules.\r
\r
🏹 **Vortix :** Une chouette TUI  [pour piloter WireGuard et OpenVPN](https://github.com/Harry-kp/vortix)  sans se coltiner un GUI à 400 Mo ni jongler avec wg show dans trois terminaux. Promesse : télémétrie temps réel, détection de leaks IPv6/DNS, kill switch intégré et switch de profils sans mémoriser des flags obscurs, le tout en 15 Mo, clavier only, et utilisable en SSH comme un vrai bonhomme.\r
\r
![](https://storage.mlcdn.com/account_image/325165/h0qOYK16Q8JwMZ8034OaGXcb5uehIcnnvvnubzW1.png)\r
\r
# RudeTools : Découvrez, comparez et adoptez les meilleurs outils open source pour le DevOps, le SRE et l'IT. Une base organisée, documentée et orientée cas d'usage.\r
\r
Il y a quelque temps, je me suis rendu compte que je passais beaucoup de temps à tester des applications… et presque autant à oublier pourquoi je les avais ouvertes.  \r
Face à ce problème manifestement insoluble, j'ai pris une décision très rationnelle, ajouter une couche supplémentaire en créant un site pour tout centraliser :  [https://rudetools.dev](https://rudetools.dev/)  \r
Ce n'est ni exhaustif ni ambitieux, c'est simplement une cartographie perso alimentée par la curiosité, l'open-source et une quantité d'heures dont je préfère ne pas faire l’inventaire précis.  \r
Je n'ai aucune certitude sur l'utilité réelle de tout ça, il est même fort possible que cela ne serve strictement à rien, ce qui, d'une certaine manière, resterait cohérent avec une bonne partie de l'informatique moderne. Mais si quelqu'un y trouve malgré tout un outil utile ou une idée intéressante, l'expérience pourra être considérée comme un succès statistiquement improbable.  \r
\r
\r
🏃‍♂️  **What is a tech lead ? :** Trois semaines dans son premier rôle de tech lead, et toujours aucune idée claire de ce qu'il est censé faire. Réponse du manager : "Personne ne sait."  [Bienvenue dans le job le plus flou de l'ingénierie](https://joshhornby.com/what-is-a-tech-lead). Selon la boîte, un tech lead est soit un senior qui fait de l’archi sans toucher aux humains, soit un hybride improbable : architecte, coach, pompier prod à 18h et garant des deadlines. En gros, technique, croissance de l'équipe et delivery, le tout avec la même journée de 24 heures. Rappel utile, ce n'est ni un super dev avec un nouveau titre, ni un mini-manager. Et si tout passe encore par vous, vous n'êtes pas indispensable, vous êtes le bottleneck, le vrai job consistant à rendre l’équipe moins dépendante de vous, ce qui est paradoxalement la seule façon de ne pas devenir le problème que vous essayez de résoudre.\r
\r
💝 **Peon-ping :** C'est pas comme si on était dans une newsletter sérieuse, alors oui, on a décidé de partager ça parce que ça nous a bien fait marrer :  [un outil qui joue des voix de Warcraft, StarCraft ou Portal](https://github.com/PeonPing/peon-ping)  quand votre agent IA finit une tâche ou demande une permission. Oui, vraiment. Compatible Claude Code, Codex, Cursor et compagnie, avec hooks, notifications desktop/mobile, relay audio en remote et même une "spec" ouverte pour packs sonores. En résumé, votre agent termine un refactor et vous balance un "Job's done." On ne sait pas si ça améliore la productivité, mais au moins votre pipeline aura enfin un peu de personnalité.\r
\r
🥇 **kube-green, a K8s operator to reduce CO2 footprint :** Vous laissez encore tourner vos pods de dev le week-end ? Honte à vous, la planète pleure et votre CFO aussi. Heureusement,  [kube-green débarque pour sauver vos clusters](https://github.com/kube-green/kube-green)  en éteignant automatiquement ce que vous oubliez d'éteindre vous-même. Le pitch est simple, on coupe les ressources inutiles la nuit et le week-end, on parle d'empreinte carbone, on met un joli badge "adopter" sur GitHub… et tout le monde se sent un peu plus responsable.  \r
\r
😱 **How to reduce telemetry volume by 40% smartly (Java):  \r
**OpenTelemetry, c’est génial, tu branches un agent, et magie, tout est instrumenté. Absolument tout, même ce que tu n’as jamais voulu mesurer. Auto-instrumentation "capture everything by default", et derrière tu découvres que  [ton budget observabilité part en fumée](https://newsletter.signoz.io/p/is-your-opentelemetry-auto-instrumented)  parce que chaque URL avec un ID unique, chaque thread.name, chaque restart de pod et chaque heartbeat Kafka génère sa petite série temporelle bien inutile. Résultat : 10 % de signal, 90 % de bruit, et une facture qui scale mieux que ton appli. Le message du billet est simple, si tu ne tailles pas dans le gras (controller spans, JDBC bavard, scheduler qui span toutes les secondes, attributs Kubernetes ultra volatiles), tu transformes ton système d'observabilité en usine à télémetrie décorative.\r
\r
## Watch SQL traffic in real-time with a TUI\r
\r
![](https://storage.mlcdn.com/account_image/325165/rvenYEkPDSOIt0Xv4AhoNwm06y2lmHVAHucYRoXe.png)\r
\r
  \r
\r
Sébastien nous partage sql-tap, un proxy qui s'intercale discrètement entre ton appli et ta base (Mysql ou PG) pour enregistrer absolument toutes les requêtes, sans te demander ton avis et sans modifier une ligne de code.\r
\r
Tu branches, et d'un coup tu découvres en TUI la vérité nue : les SELECT *, les requêtes N+1, les transactions qui durent trois plombes et les EXPLAIN qui font peur. Ça intercepte le protocole, traque les prepared statements et te stream ça en gRPC comme si c'était normal.\r
\r
En gros, c'est l'outil parfait si tu veux enfin savoir pourquoi ta base souffre. Attention toutefois : une fois que tu as vu ce que ton appli envoie vraiment à Postgres, tu ne peux plus faire semblant de ne pas savoir.\r
\r
  \r
\r
[Accéder au lien ->](https://github.com/mickamy/sql-tap)`,de=`---\r
layout: post\r
title: Newsletter du 02 Mars 2026\r
tags: [devops, KDash, Dockhand, K8s, Docker]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
On nous parle sans cesse de transformation, d'accélération, de nouveaux paradigmes, et chaque mois apporte son lot de tendances, de méthodes, de "game changers" censés redéfinir la manière dont on travaille. Tout semble urgent, stratégique, structurant.\r
\r
Et pourtant, une grande partie des problèmes qui nous rattrapent ne sont ni exotiques ni futuristes. Ce sont des fondamentaux négligés, des décisions repoussées, des compromis devenus structurels à force d’être tolérés. Rien de spectaculaire, juste du travail qu’on n’a pas eu envie de prioriser.\r
\r
On préfère souvent lancer quelque chose de neuf plutôt que consolider l'existant, c’est plus visible, plus gratifiant, et plus facile à raconter.\r
\r
Mais la solidité d’un système tient rarement à ses nouveautés. Elle tient à ce qui a été fait sérieusement, longtemps, et sans bruit.\r
\r
Cyril\r
\r
### Quoi de neuf ?\r
\r
**🔳 KDash, Kubernetes en terminal :** KDash, c'est pour ceux qui ont déjà 14 onglets ouverts, un port-forward qui tourne depuis trois jours, et un  \`kubectl get pods-A\`  relancé toutes les 30 secondes "juste pour voir".  [Un dashboard K8s en TUI](https://blog.stephane-robert.info/docs/conteneurs/orchestrateurs/outils/kdash/), écrit en Rust, qui tourne dans ton terminal et fait ce qu'on attend d’un outil d'ops en 2026 : montrer l'état du cluster sans te forcer à ouvrir un navigateur. Pods, services, nodes, namespaces, logs, métriques CPU/mémoire le tout rafraîchi en temps réel, bref, une vue globale, navigable au clavier, avec onglets et logs intégrés. Binaire unique, pas de dépendances, ça démarre vite et ça ne discute pas, c'est parfait en complément d'un K9s.\r
\r
🐋 **Dockhand, modern docker management :** Dockhand, c'est une énième UI Docker, ouais, mais celle-ci tourne sur un Raspberry Pi si besoin, n'appelle personne en douce, et ne vous facture pas le droit de cliquer sur Restart. SQLite par défaut, zéro télémétrie, vuln scanning intégré, SSO gratuit, MFA gratuit. Le RBAC ? Enterprise, évidemment, il faut bien garder un petit cliffhanger financier quelque part. [C'est BSL maintenant, Apache 2.0 plus tard](https://dockhand.pro/). Le code est visible, les promesses aussi, pas de SaaS, pas de cloud mystique, juste une interface pour gérer vos conteneurs sans jongler entre un wiki, trois shells et une prière.\r
\r
**🚢 Want an easy way to manage Podman containers ? :** Les cowboys de chez The New Stack ont encore dégainé plus vite que leur ombre : "Vous avez quitté Docker ? Pas de panique, voici la GUI." Parce qu'apparemment, il existe encore des outlaws qui n'ont toujours pas compris la différence entre Docker et Podman, mais qui tiennent quand même à cliquer sur des boutons. Podman Desktop, c’est donc le Docker Desktop… sans Docker.  [Dashboard propre](https://thenewstack.io/want-an-easy-way-to-manage-podman-containers-here-it-is/), gestion des conteneurs, images, volumes, pods, support Kubernetes, Compose, extensions, Kind, logs, terminal intégré, Pin's parlant de Patrick Sebastien, le tout gratuit, multi-plateforme, installable en Flatpak pour ceux qui aiment les dépendances bien rangées. En gros, si vous avez migré vers Podman pour des raisons philosophiques, techniques ou existentielles, vous pouvez continuer à faire du point-and-clic en paix.  \r
\r
☸️ **Managing K8s secrets with Mozilla SOPS and Age :** Kubernetes et les secrets, c'est souvent du base64 maquillé en securité. Autant dire que si ca fuite, ce n'est pas un exploit zero day, juste quelqu'un qui a fait un git clone. [Avec SOPS et age, tu chiffres ton fichier YAML](https://medium.com/@cbaah123/managing-kubernetes-secrets-with-mozilla-sops-and-age-780c84e6ec5e)  avant de le committer. La version dans Git est illisible, la cle reste chez toi, et tu decryptes seulement au moment d'appliquer. Ca ne règle pas tout. Mais au moins, ton mot de passe ne traine plus en clair dans l'historique depuis trois ans.\r
\r
🏹 **You probably don't need Oh My Zsh :** Oh My Zsh continue d'être recommandé comme si on était en 2015 et qu'on venait de découvrir les thèmes flashy, alors qu'en réalité c'est surtout un paquet de scripts shell qui ralentissent chaque ouverture d’onglet pour afficher un prompt avec trois icônes  [et un plugin git que tu n'utilises pas vraiment](https://rushter.com/blog/zsh-shell/). Un zsh minimal avec compinit, un peu d'historique propre, starship pour le prompt et fzf sur Ctrl+R, et ça fait largement le taffe, en tout cas c'est l'avis du mec qui a rédigé ce billet, on vous laisse seuls juges.\r
\r
🚀  **Docker log rotation :** Il pensait héberger deux sites statiques tranquilles. Résultat, disque plein, pas à cause du contenu mais à cause des logs Docker. Petite piqûre de rappel : Docker ne fait pas de rotation de logs par défaut.  [Tant que le conteneur existe, le fichier grossit](https://ntietz.com/blog/til-docker-log-rotation/), même si tu redémarres. Même si tu oublies. Surtout si tu oublies. La Solution ? Configurer le daemon avec un max-size et un max-file dans /etc/docker/daemon.json, redémarrer Docker, recréer les conteneurs, et fin de la game comme on dit à Montargis.\r
\r
![](https://storage.mlcdn.com/account_image/325165/TzR91OWe1jX0uUw9cB3bKwX3cNsjDx4Qwu3GJm65.png)\r
\r
# Je suis en train de refondre la landing page de RudeOps, notamment parce que l'actuelle commence sérieusement à sentir la naphtaline.\r
\r
Pour être honnête, elle avait été bricolée vite fait sur un Jekyll un week-end et par pure flemme, je n'ai jamais vraiment pris le temps de bosser dessus correctement.  \r
\r
Pour cette nouvelle version, j'aimerais mettre en avant des témoignages de lecteurs, pas des slogans marketing en plastique, mais une ou deux lignes sincères : ce que RudeOps vous apporte, pourquoi vous lisez la newsletter, ce qui vous est utile (ou même ce qui vous fait râler).\r
\r
Si vous êtes partant, j'afficherai votre prénom, votre rôle, et un lien vers votre LinkedIn ou GitHub.\r
\r
L'idée est simplement que le site reflète un peu mieux la communauté qui lit RudeOps (et vous êtes maintenant un sacré bon paquet).\r
\r
Si cette veille vous a déjà servi à quelque chose (même à lever les yeux au ciel), envoyez-moi deux lignes à  **[cyril@rudeops.com](https://preview.mailerlite.io/preview/325165/emails/180096858688849276)**.\r
\r
Promis : pas de tunnel de conversion, juste une landing page un peu moins triste.  \r
\r
\r
🏃‍♂️  **De F à A+ sur HTTP Observatory :** Un chouette retour d'expérience sur un sujet qu'on oublie trop souvent :  [les headers HTTP](https://blog.zwindler.fr/2026/02/20/securite-headers-http-observatory-hugo/). On optimise les images, on gagne 300 ms, on compresse en AVIF, on tweake nginx… et pendant ce temps-là, HTTP Observatory nous met un F bien propre. Zéro pointé, parce que oui, même un blog statique peut être mal configuré. Ce REX montre à quel point on néglige HSTS, X-Content-Type-Options, Referrer-Policy et surtout une vraie Content-Security-Policy, et comment une CSP un peu stricte peut transformer un thème Hugo "qui marche" en chantier d’overrides, de scripts externalisés et de styles nettoyés à la main. C'est concret, sans bullshit, avec les pièges nginx, les add_header qui s'écrasent, les unsafe-inline qui traînent partout et les aller-retours console + reload jusqu'à obtenir le fameux A+. Moralité : les headers, ce n’est pas sexy, mais c'est souvent la différence entre "ça fonctionne" et "c'est propre". Et on ferait tous bien de relancer Observatory sur nos side-projects. Juste pour voir.\r
\r
💝 **Getting started with Windsurf and CircleCI :** Encore un "getting started" où l'IA va révolutionner ton workflow, et cette fois avec Windsurf, un IDE "AI-native" (rien que ça) branché à CircleCI pour que ton assistant code plus vite que toi et que la CI ramasse les morceaux. Le pitch est simple : l'IA génère des modules entiers en 30 secondes, mais ne sait pas que ton projet a 12 contraintes implicites, 4 tests bancals et une config YAML écrite un dimanche soir. Donc on colle CircleCI derrière, parce que oui, quand tu produis du code à la chaîne,  [il vaut mieux un filet de sécurité qui tourne à chaque push](https://circleci.com/blog/getting-started-with-windsurf-and-circleci/). L’article montre donc comment brancher Windsurf à CircleCI via MCP, balancer ton token API dans un JSON, et demander à ton assistant de fixer les bugs et autres joyeusetés.\r
\r
🥇 **Git in Postgres :** Un radicalisé du "tout dans Postgres" a décidé de tester un truc simple :  [et si git n'était qu’un backend SQL](https://nesbitt.io/2026/02/26/git-in-postgres.html)  un peu mal assumé ? Résultat : objets et refs dans deux tables, libgit2 branché dessus, et un remote helper pour que ton git clone parle en réalité à PostgreSQL sans le savoir. Tu push, tu fetch, tu vis ta vie, derrière, c’est du SELECT. Le vrai intérêt, c'est côté forge : commits, issues et metadata dans la même base. Plus de repos qui traînent sur le filesystem, plus de shell-out vers git pour afficher une page web, plus de backup en deux morceaux.  \r
\r
😱 **SSHStalker botnet brute-force its way onto 7K linux machines :** Un botnet qui brute-force du SSH avec mot de passe faible, qui exploite des kernels Linux 2.6 datant de 2009, qui installe ses clés, nettoie ses logs et parle via IRC comme au bon vieux temps.  [Sept mille machines compromises](https://www.csoonline.com/article/4130967/sshstalker-botnet-brute-forces-its-way-onto-7000-linux-machines.html), la moitié aux États-Unis. Pas avec une 0-day magique. Avec la routine. Le plus ironique ? Pour l'instant, pas de ransomware spectaculaire, pas de minage massif, juste de la persistance, un peu comme si quelqu'un empilait tranquillement des accès pour plus tard, pendant que les propriétaires des serveurs continuent leur journée. La défense recommandée tient en trois phrases presque embarrassantes : désactiver les mots de passe SSH, utiliser des clés, patcher. On peut débattre des menaces dopées à l'IA et des APT sophistiquées, mais en 2026 on tombe encore parce qu’un serveur oublié accepte un mot de passe faible sur le port 22.\r
\r
\r
## Inside Frenzy Works: The maker space where being bad at things is the point\r
\r
![](https://storage.mlcdn.com/account_image/325165/39oaTLQw7yXMJGCoYdjd68B2otwGKi0Exz4or3Uh.png)\r
\r
  \r
\r
Merci à Mohammed T pour le partage.\r
\r
Au milieu du vacarme sur l'IA qui code plus vite que son ombre, cette vidéo fait un pas de côté plutôt salutaire. Ritvi Mishra y parle d'open source, d'authenticité, et surtout de son maker space, Frenzy Works, un endroit conçu comme un espace conçu pour être mauvais.\r
\r
Oui, mauvais. Débutant. Approximatif. En apprentissage.\r
\r
À l’heure où les contributions affluent, parfois brillantes, parfois juste vibe-checkées par une IA, le rappel est simple : ce qui compte, ce n'est pas la perfection, mais l'intention et la sincérité. Les communautés open source ont toujours mieux fonctionné avec des passionnés un peu nerds qu'avec des profils trop lissés.\r
\r
La vidéo est chouette à suivre, très naturelle, sans storytelling forcé.\r
\r
Et ça fait du bien d’entendre qu’être nul quelque part n’est pas un bug. C’est le point de départ.\r
\r
[Accéder au lien ->](https://allthingsopen.org/articles/frenzy-works-maker-space-safe-place-to-fail)`,pe=`---\r
layout: post\r
title: Newsletter du 09 Mars 2026\r
tags: [devops, MTTR, Terraform, Docker, pgrok, MinIO, systemd, Linux]\r
comments: true\r
mathjax: true\r
author: RudeOps\r
---\r
\r
\r
Honnêtement, je ne pensais pas tenir aussi longtemps. Et apparemment, vous non plus, et pourtant vous êtes encore là, à ouvrir ces emails avec une fidélité que je ne mérite probablement pas tout à fait.\r
\r
Trois ans, ça mérite un petit bilan, ou du moins une mise à jour avant que vous vous demandiez pourquoi les choses changent sans prévenir.\r
\r
**D'abord, les mauvaises nouvelles.**\r
\r
Les illustrations disparaissent. Mon cousin Vincent, qui ornait chaque édition de ses petits dessins plus ou moins inspirés (surtout moins, soyons francs), a décidé que son talent valait de l'argent. Il n'a pas tort, mais moi non plus quand je lui ai dit que mon budget communication tournait autour de zéro. On s'est séparés en bons termes, et il continue de faire carrière dans la BD, ce qu'il fait très bien d'ailleurs, [lisez ses BDs](https://www.bedetheque.com/auteur-11701-BD-Vincent.html), c'est un mec qui a du talent.\r
\r
Exit aussi le courrier des lecteurs qui me prenait trop de temps (merci pour toutes vos contributions, toujours accompagnées d'un mot sympa).\r
\r
**Ensuite, les bonnes nouvelles.**\r
\r
Une newsletter par semaine, format plus court, moins de blabla, plus d'essentiel. L'idée c'est que vous la lisiez jusqu'au bout pour une fois.\r
\r
La landing page a aussi été refaite avec une techno de hipster, voilà.\r
\r
Et quelques lecteurs ont pris le temps d'écrire des mots gentils pour la nouvelle homepage. Je dis "pris le temps" mais soyons honnêtes : je les ai relancés deux fois, j'ai envoyé un message vocal gênant à au moins trois personnes, et j'ai probablement abusé du mot "service". Mais les témoignages sont là, ils sont beaux, et je leur en suis sincèrement reconnaissant, même ceux qui ont mis trois semaines à répondre. Surtout eux.\r
\r
**Et pour finir.**\r
\r
Le but de tout ça n'a pas changé : partager ma veille, ce que je lis, ce qui m'intrigue, ce qui me semble valoir votre attention. Rien de plus, rien de moins.\r
\r
On repart pour combien ? Je ne sais pas, mais la prochaine est pour dans sept jours.\r
\r
Cyril\r
\r
## La pépite de la semaine\r
\r
Le MTTR c'est la métrique préférée de ceux qui veulent avoir l'air de résoudre des problèmes sans vraiment les résoudre. Devenir super rapide pour redémarrer le même service qui tombe toutes les deux semaines, c'est de la bêtise, pas de l'ingénierie. Cet article dit ce que tout le monde sait mais que personne n'ose mettre dans son OKR : l'objectif d'un bon incident management c'est de ne plus jamais avoir le même incident, pas de battre son record de rétablissement. Les post-mortems qui ne produisent rien de concret dans le backlog ne sont que de la thérapie de groupe avec un compte-rendu Confluence que personne ne relira. Et si vos incidents les plus récents ressemblent trait pour trait à ceux d'il y a six mois, le problème n'est pas votre MTTR, c'est votre culture, et aucun outil à 50k par an ne va vous aider à régler ça.\r
\r
[Lire l'article](https://log.andvari.net/no-mttr.html)\r
\r
### Le coeur de la veille\r
\r
🔧 **[Pgrok, a personnal ngrok alternative](https://github.com/R44VC0RP/pgrok)** Parce que ngrok est devenu payant le jour où vous en avez vraiment eu besoin, pgrok vous permet de faire la même chose sur votre propre VPS. Un wildcard DNS, Caddy pour le HTTPS automatique, des tunnels SSH, et une TUI qui colorie vos requêtes HTTP par méthode et statut comme si votre tunnel de dev méritait autant d'attention qu'un dashboard de prod. Mono-utilisateur, Linux et Mac uniquement, pas de reconnexion automatique, mais pour un outil perso c'est exactement ce qu'on demande : simple, souverain, et sans abonnement mensuel qui grimpe dès qu'on dépasse 10 000 requêtes.\r
\r
⚡ **[Advanced Terraform performance optimization](https://www.bejarano.io/terraform-performance/)** Le monde se divise en deux catégories de personnes : celles qui n'ont jamais attendu 7 heures qu'un terraform plan se termine, et celles qui ont une opinion très arrêtée sur le sujet. Cet article de Ricard Bejarano est pour les secondes. Init, plan, apply : chaque phase disséquée, chaque goulot d'étranglement nommé, quelques solutions franchement expérimentales assumées comme telles. Le provider AWS à 750 Mo téléchargé à chaque init, le refresh qui interroge chaque ressource une par une, le cache pas concurrent-safe qui corrompt tout si deux process tournent en même temps. Pas de magie, pas de silver bullet, juste un panorama honnête de ce qu'on peut faire quand Terraform commence à peser.\r
\r
📊 **[Docker container monitoring for your terminal](https://dtop.dev/)** Un énième TUI pour surveiller vos conteneurs Docker, écrit en Rust, mais celui-là a le mérite d'être léger, rapide, et de gérer plusieurs hôtes simultanément en SSH ou TCP. CPU, mémoire, réseau en temps réel, tri par nom ou consommation, logs accessibles etc. Rien que vous ne puissiez faire avec dix autres outils, mais si dtop devient celui qui reste dans votre PATH, c'est déjà une victoire.\r
\r
### En bref\r
\r
💾 **[MinIO is dead, long live MinIO](https://blog.vonng.com/en/db/minio-resurrect/)** MinIO a archivé son repo le 12 février dernier. 60 000 étoiles, un milliard de pulls Docker, et une levée de fonds à 126 millions pour finir en read-only pendant que la boîte pousse son produit enterprise. Le cycle classique : open source pour l'adoption, AGPL pour faire peur aux concurrents, suppression de la console d'admin en catimini, arrêt des binaires, et bonne nuit. Sauf que l'AGPL qu'ils avaient eux-mêmes choisie comme matraque juridique garantit aussi le droit de forker, ce que Ruohang Feng a fait, en restaurant la console, reconstruit les packages, relancé la doc, etc. Retenez juste la leçon : "open source" dans la bouche d'une startup financée par du capital-risque, c'est une stratégie de go-to-market, pas une philosophie.\r
\r
🐧 **[New to Linux ? These 4 systemd tools help you fix common issues](https://itsfoss.com/systemd-troubleshoot-tools/)** On ne va pas se mentir, si vous en êtes encore au stade "je reboot et j'espère", cet article va changer votre vie, ou du moins vos nuits d'astreinte. Rien de révolutionnaire pour les anciens, mais pour ceux qui débutent sous Linux, c'est exactement le genre de base qu'on aurait aimé avoir le jour où on a passé trois heures sur un service SSH mort pour une raison qu'un simple journalctl -xe aurait réglé en dix secondes.\r
`,me=`---
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

Bonne nouvelle pour ceux qui trouvaient que leur terminal manquait cruellement de scrollbars et de notifications sonores quand un \`git pull\` se termine : Ghostty vient de sortir sa version 1.3.0, fruit de 6 mois de développement, 2 800 commits et 180 contributeurs qui auraient probablement pu patcher Vim à la place mais ont fait un choix. Au menu : une recherche dans le scrollback, des scrollbars natives qui suivent le thème système, et des notifications à la fin d'une commande, parce que visiblement en 2026 fixer un curseur qui clignote n'est plus suffisant pour savoir si votre build est terminé. Zig-based, open source, pas dispo sur Windows, ce qui selon votre point de vue sera soit une limitation soit une feature de sécurité.

[Lire l'article](https://www.omgubuntu.co.uk/2026/03/ghostty-1-3-terminal-brings-big-new-features)

### Le coeur de la veille

⚡ **[Why K8s reliability is now a machine-speed problem](https://cloudnativenow.com/contributed-content/why-kubernetes-reliability-is-now-a-machine-speed-problem/)** Un SRE se fait paguer à 2h17 du matin, le déploiement dit que tout va bien, l'autoscaler fait sa vie, le GitOps écrase le hotfix manuel, et le temps que l'admin reconstitue la séquence, le système s'est déjà auto-stabilisé comme si rien ne s'était passé. L'auteur de l'article en tire une conclusion lumineuse : le problème de Kubernetes ce n'est pas la complexité, c'est la vélocité. Les machines vont plus vite que les humains, ce qui, avouons-le, n'est pas exactement une révélation du niveau de la théorie de la relativité. La solution proposée : une couche d'IA agentique qui corrèle les signaux, reconstruit les séquences d'incidents et contextualise les alertes avant même que l'on-call ait trouvé ses lunettes. Les SREs deviendraient alors des superviseurs de haut niveau qui valident les investigations plutôt que de les mener, un peu comme un chef de cuisine qui ne touche plus aux fourneaux mais signe les assiettes.

🗃️ **[How to work with JSON in MySQL](https://www.digitalocean.com/community/tutorials/working-with-json-in-mysql)** Les cowboys de chez Digital Ocean ont pondu un chouette tuto sur l'utilisation du type JSON dans MySQL, et c'est l'occasion de rappeler que oui, votre base de données relationnelle préférée fait aussi du NoSQL depuis 2015, mais que vous l'avez probablement ignoré parce que vous étiez trop occupé à débattre de MongoDB en meeting infra. Le principe est simple : une colonne JSON dans votre table, et vous voilà avec la rigidité rassurante du relationnel d'un côté et la flexibilité anarchique du document store de l'autre, un peu comme mettre une cravate sur un hoodie et prétendre que c'est du smart casual. Le tuto couvre la création, la lecture avec JSON_EXTRACT, la mise à jour avec JSON_INSERT, JSON_REPLACE et JSON_SET qui se comportent tous différemment parce que pourquoi faire simple. La cerise : une intégration Laravel avec Eloquent qui caste automatiquement votre JSON en tableau PHP, pour que vous puissiez oublier que vous faites de la database et vous concentrer sur l'essentiel, c'est-à-dire débattre de la prochaine migration vers PostgreSQL.

🤖 **[Debian decides not to decide on AI-generated](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)** Les hipsters de chez Debian ont tenté de voter une résolution sur les contributions générées par IA et ont conclu, après des semaines de débats passionnés, qu'ils n'étaient pas prêts à voter. C'est le genre de décision qui demande beaucoup de travail pour aboutir à du statu quo, ce qui quelque part est profondément cohérent avec Debian. Les débats ont couverts à peu près tout : la terminologie ("AI" vs "LLM", soit le débat "Kleenex" vs "mouchoir" de notre industrie), l'impact sur l'onboarding des nouveaux contributeurs, le droit d'auteur, l'environnement, et quelqu'un a même proposé de mettre le kernel Linux en non-free. La palme revient à Russ Allbery qui a sobrement fait remarquer que le terme "IA" était si vague qu'il englobait potentiellement chaque objet physique de l'univers, y compris les rochers, les nuages et très probablement la ville de Montargis, ce qui, convenons-en, ne facilite pas la rédaction d'une politique de contribution propre sur le papier.

### En bref

🔑 **[How passkeys work](https://cassidoo.co/post/passkeys/)** Un mot de passe c'est un secret que vous connaissez. Une passkey c'est un secret que vous ne connaissez pas, que vous ne verrez jamais, et qui vit dans votre téléphone comme un fantôme bienveillant. Votre appareil génère deux clés à votre place, garde la privée pour lui, file la publique au site, et quand vous revenez il prouve cryptographiquement que c'est bien vous sans jamais rien révéler, un peu comme un avocat, mais honnête. Anti-phishing, anti-leak, sympa sur le papier sauf que l'autrice conclut sobrement que si vous utilisez déjà un gestionnaire de mots de passe, vous n'avez pas vraiment de problème à résoudre. Les passkeys c'est la solution à un problème que les gens raisonnables n'ont plus vraiment, les autres ayant toujours leur post-it.

⚙️ **[Dinit, the init systemd should have been](https://unixdigest.com/articles/dinit-the-init-system-systemd-should-have-been.html)** Vous vous souvenez de Terminator, quand Skynet commence comme un simple système de défense et finit par contrôler absolument tout, y compris les machines à café et votre ex ? systemd, c'est exactement ça, et Dinit, c'est l'univers parallèle où Skynet aurait sagement dit "non merci, je gère juste les missiles". Un init system écrit en C++ portable, qui tourne sur Linux et BSD, qui supervise vos services, les redémarre quand ils pleurent, et rentre chez lui à 17h sans empiéter sur le boulot du résolveur DNS du voisin. Pas de tentacules, pas de binaires interdépendants qui font juste semblant d'être indépendants, pas d'opinion sur votre vie, juste des services qui démarrent et s'arrêtent.
`,ve=`---
layout: post
title: Newsletter du 23 Mars 2026
tags: [git, SSH, Trivy, CI/CD, GitOps, Kubernetes, open source, AWS]
comments: true
mathjax: true
author: RudeOps
---


J'ai eu des boss de toutes les formes, toutes les tailles, toutes les gammes de compétence et d'humanité.

Celui qui t'engueule franchement quand tu mènes un projet dans le mur, et qui t'oublie le lendemain matin parce que c'est réglé, celui qui te pousse sur des sujets où tu ne te sens pas encore légitime, juste parce qu'il a vu quelque chose que toi tu n'avais pas encore vu, celui qui m'a mis en prod un vendredi soir sur un projet que je n'avais pas fini, pour me voir me débrouiller seul, et qui avait eu raison.

Il y en a eu d'autres.

Celui qui ne savait pas ce qu'on faisait mais aimait beaucoup les slides. Celui dont le management consistait principalement à déplacer les problèmes vers les autres avec une précision chirurgicale. Celui qui confondait "disponible" et "corvéable", et "urgence" avec "j'ai pensé à quelque chose dans le métro ce matin".

On grandit avec les deux, en fait. Le bon manager te tire vers le haut, le mauvais te donne une définition précise de ce que tu ne veux jamais devenir.

Ce qu'ils ont tous en commun, les bons, c'est qu'ils t'ont fait confiance avant que tu le mérites vraiment. Ils ont parié sur toi comme on deploy en prod sans filet : avec un peu d'inconscience, beaucoup de conviction, et en croisant les doigts très fort pour que le monitoring ne sonne pas la nuit.

C'est une forme de courage qu'on ne valorise pas assez dans nos métiers où on parle de scalabilité, de résilience, de zero downtime. Faire confiance à quelqu'un qui apprend encore, c'est accepter des incidents, c'est dire "go" quand l'environnement n'est pas encore stable. C'est du leadership, pas de la gestion.

Alors à tous ceux qui m'ont dit "vas-y", merci. Vous savez qui vous êtes. Et pour au moins l'un d'entre vous qui lit ces lignes en ce moment : tu fais partie des bons, et non, je ne dirai pas lequel tu es, parce que ça serait bien trop simple, et qu'on n'est pas du genre à rendre les choses faciles par ici.

Cyril

## La pépite de la semaine

Vous faites encore des git stash comme un sauvage en 2026 ? Bravo. Pendant ce temps, les adultes utilisent git worktree, qui permet d'avoir plusieurs branches dans des dossiers séparés sans se retrouver à faire un git checkout dans un répertoire qui appartient à votre collègue depuis trois sprints. La méthode recommandée : cloner en bare dans un dossier caché, poser un fichier .git d'une ligne qui dit "l'historique est là-dedans", corriger le remote tracking parce que sinon Git fait semblant de ne pas voir les branches distantes, et ensuite créer votre premier worktree. Un dossier par branche, un seul historique pour les gouverner tous, et la liberté de faire tourner vos tests sur main pendant que vous corrigez un bug urgent ailleurs, sans jamais perdre votre flow. Bonus : Git vous empêche d'extraire la même branche deux fois, ce qui évitera à votre collègue de vous reprocher d'avoir écrasé son travail. Pour les flemards, il y a un script dans le billet. Pour les autres, vous pouvez continuer à cloner deux fois le même repo et prétendre que c'est une stratégie.

[Lire l'article](https://www.metal3d.org/blog/2026/git-worktree-comme-un-chef/)

### Le coeur de la veille

⚡ **[Why does SSH send 100 packets per keystroke](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)** Un chouette article qui va parler aux détraqués qui lisent des pcaps le soir pour se détendre. Ce dev bossait sur un jeu multijoueur qui tourne via SSH avec 2000 connexions simultanées, et se demandait pourquoi son CPU ne redescendait jamais à zéro même sans envoyer de données. Réponse : depuis 2023, SSH envoie des paquets "chaff" pour masquer le timing de vos frappes clavier, une vraie feature de sécurité, mais catastrophique pour son use-case. Solution finale : forker la lib crypto de Go pour ne pas annoncer l'extension ping@openssh.com. Résultat : -60% de CPU, -50% de bande passante. L'article est aussi une bonne réflexion sur le débugage avec un LLM (Claude Code utile, ChatGPT très confiant et complètement à côté de la plaque).

🛡️ **[20 days later, Trivy compromise acte II](https://labs.boostsecurity.io/articles/20-days-later-trivy-compromise-act-ii/)** Un an après la compromission de tj-actions, l'écosystème CI/CD remet le couvert avec la même recette, en deux actes. Premier acte fin février : Pwn Request sur le pipeline Trivy, token de service aqua-bot exfiltré, credentials validés, fin de la représentation. Le token est rotated, tout le monde respire. Deuxième acte le 19 mars : l'attaquant revient par une porte qu'on n'a toujours pas identifiée, faux commit signé au nom d'un vrai mainteneur, domaine typosquatté, payload Go qui aspire vos secrets cloud, vos clés SSH et vos tokens Kubernetes, et 75 tags sur 76 de trivy-action réécrits en silence parce que les force-push de tags sont invisibles aux outils de monitoring. En bonus, la clé GPG de signature utilisée depuis 2019 est désormais compromise et toujours pas révoquée, ce qui est exactement le niveau de rigueur qu'on attend d'un outil de sécurité. La communauté a répondu en quelques heures, pendant que 47 bots inondaient le fil de discussion de "merci ça marche super" pour noyer le signal. Si vos pipelines consomment Trivy, c'est le bon moment pour vérifier. Sinon, attendez l'acte III, prévu en mars 2027.

☁️ **[Floci](https://github.com/hectorvent/floci)** Un émulateur AWS local, gratuit et open-source, qui débarque au moment précis où LocalStack a décidé de tuer son tier gratuit, ce qui a surpris exactement personne et déçu absolument tout le monde. Zéro token d'auth, usage CI/CD illimité, démarrage en 24ms, 13 MiB en idle et une image Docker de 90 Mo contre le gigaoctet de LocalStack qui se prenait visiblement pour une distro Linux. Plus de 20 services AWS supportés, 408 tests SDK sur 408 qui passent, et une intégration qui se résume à pointer votre endpoint sur localhost:4566.

### En bref

🔄 **[How to implement GitOps on K8s using Argo CD](https://www.freecodecamp.org/news/how-to-implement-gitops-on-kubernetes-using-argo-cd/)** Si vous faites encore des kubectl apply depuis votre laptop en vous disant que c'est temporaire, cet article est pour vous. Olumoko Moses y détaille un pipeline GitOps complet avec GitHub Actions pour builder et tagger les images, Argo CD pour synchroniser le cluster avec le repo, et Argo CD Image Updater pour que la mise à jour des tags se fasse toute seule sans intervention humaine. Le tout bien expliqué, avec les manifests qui vont avec. Classique mais solide.

🌍 **[Open Source is critical infrastructure](https://allthingsopen.org/articles/open-source-critical-infrastructure-openinfra-alignment)** Le Linux Foundation Member Summit de Napa a sorti quelques chiffres qui donnent le vertige : l'open source représenterait 8800 milliards de dollars de valeur pour l'IA, dont 1500 milliards directement liés aux composants sous-jacents. Pour contexte, c'est plus que le PIB de l'Allemagne, le tout entretenu par des bénévoles qui codent entre deux lessives dans des appartements mal chauffés, y compris à Montargis. Et pourtant les organisations continuent de payer des licences propriétaires, laissant 25 milliards de valeur non réalisée sur la table chaque année. Migrer vers l'open source, c'est apparemment aussi agréable que manger du verre pilé en écoutant la Symphonie des Adieux de Haydn, tout le monde part avant la fin et personne ne comprend vraiment pourquoi on a commencé.
`,ge=`---
layout: post
title: Newsletter du 30 Mars 2026
tags: [supply chain, sécurité, curl, IA, open source, Kubernetes, Istio, WiFi]
comments: true
mathjax: true
author: RudeOps
---


On a tous regardé les news cette semaine avec ce mélange familier d'horreur et d'impuissance, celui qu'on ressent quand on comprend que les décisions qui vont tuer des gens ont été prises dans des salles où personne ne mourra jamais sous les bombes.

Je n'ai pas grand chose d'intelligent à dire en fait, juste que certaines semaines, ouvrir un terminal et faire des trucs qui ont du sens, même des petits trucs, même déboguer un yaml mal indenté, c'est une façon comme une autre de continuer à exister.

Cyril

## La pépite de la semaine

Daniel Stenberg, le papa de curl (oui le truc qui tourne sur vos frigos connectés, vos voitures, vos satellites et probablement votre ex qui n'a vraiment pas de coeur), a publié un post assez édifiant sur la sécurité de la chaîne d'approvisionnement logicielle, et spoiler : la liste de ce qui pourrait mal tourner est suffisamment longue pour ruiner définitivement votre confiance en tout.

On y parle de Jia Tan (le fantôme de XZ), de contributeurs blackmailés, de mirrors "temporaires" infectés, de deepfakes d'un committer bien connu qui vous explique que "ouais t'inquiète le patch il est bon" et de CI hébergées dans le cloud qui se font compromettre. Bref, le catalogue complet du cauchemar d'un mainteneur, avec la cerise sur le gâteau : tout ça peut arriver en même temps.

La réponse de Daniel ? Vérifier. Tout. Toujours. Deux cents jobs CI par commit, valgrind, sanitizers, fuzzing continu via Google OSS-Fuzz, 2FA obligatoire, zéro blob binaire, zéro Unicode chelou dans le code et une politique d'ABI tellement stable qu'elle est devenue une religion. Une page dédiée vient même d'être ajoutée au site de curl pour que n'importe qui puisse vérifier que ce qu'il télécharge est bien ce qui a été signé.

Morale de l'histoire : curl tourne depuis 30 ans parce que quelqu'un fait vraiment son boulot, pendant que nous, on ship en prod sans lire les diffs.

[Lire l'article](https://daniel.haxx.se/blog/2025/03/20/curl-security-posture/)

### Le coeur de la veille

⚡ **[The million AI monkeys](https://ayende.com/blog/202017-B/the-million-ai-monkeys)** Je suis tombé sur ce billet d'Oren Eini (le monsieur RavenDB) qui s'attaque à une thèse qui commence à sérieusement agacer les gens sérieux : l'idée que l'IA va réécrire tout l'open source, commercialiser le résultat, et que les développeurs humains peuvent aller se recycler en prompt engineers. La thèse de départ vient d'un certain John Rush qui a eu la très bonne idée d'utiliser comme argument de vente le fait que Cloudflare a "reconstruit Next.js en une semaine" avec de l'IA. Très bien, sauf que ce "rebuild" s'est retrouvé truffé de vulnérabilités critiques en quelques jours, dont certaines étaient des copier-coller littéraux de failles déjà connues et déjà corrigées dans le projet original. C'est comme réécrire La Joconde à l'IA, ça ressemble à une Joconde, mais elle a quand même l'air légèrement lobotomisée. Oren rappelle qu'une ligne de code générée par une IA vaut zéro, pas moins que zéro, mais exactement zéro. Sa valeur ne naît que dans la relecture, le test, le débogage à 3h du matin et les cinq années de production qui vont avec. Et ça, aucun modèle ne vous le vend (encore) dans le prompt.

🦎 **[Release Komodo v2.0.0](https://github.com/mbecker20/komodo/releases/tag/v2.0.0)** Komodo passe en version 2.0.0, et si vous ne connaissez pas encore cet outil, c'est un gestionnaire de déploiement multi-serveurs qui porte le nom du plus grand lézard vivant, ce qui est soit une métaphore sur la scalabilité, soit le résultat d'une soirée où quelqu'un a posé la question du nom du projet à 2h du matin, les yeux vitreux, une main agrippée au bar et l'autre qui tape "largest lizard in the world" sur son téléphone, avant d'annoncer "Komodo" d'une voix qui n'acceptait plus vraiment de contradiction, et où les trois autres ont acquiescé parce qu'ils n'étaient de tout façon plus en état de faire mieux. Au programme de cette v2 : support Docker Swarm, authentification PKI avec rotation automatique des clés, 2FA intégré, une nouvelle UI avec plus de contraste pour les ops qui lisent leurs dashboards dans le noir à 3h du matin, et une documentation OpenAPI complète, ce qui veut dire que cette fois vous n'avez plus d'excuse pour ne pas lire la doc avant de tout casser. À noter pour les distraits : le tag :latest est désormais déprécié, les images v2 ne sont disponibles qu'avec le tag :2, ce que vous découvrirez en production dans trois semaines avec le sentiment caractéristique de quelqu'un qui n'a pas lu les release notes.

📡 **[Six-eye, a cybernetic observatory for the local aether](https://github.com/nullswan/six-eye)** C'est un chouette outil desktop Linux, encore en plein dev mais déjà utilisable, qui vous offre une vue radar interactive sur le spectre WiFi de votre environnement. Rust pour l'UI, Zig pour le scan bas niveau via nl80211, egui/eframe pour le rendu animé, nmcli et ip neigh pour le contexte réseau. Tracking SSIDs/BSSIDs, graphes RSSI historiques, cartographie des congestions de canaux, hints OUI/vendor, détection de présence et fingerprinting de pièces via heuristiques RF, votre voisin qui pompe votre WiFi a désormais un graphe dédié. Pas de webapp, pas de capteurs exotiques, accès direct au kernel. Le projet précise honnêtement que "présence" et "mouvement" restent des interprétations basées sur le comportement du signal, ce qui en 2026 mérite presque une médaille. Attention à bien respecter les versions de Zig si vous voulez tester (et donc pas galérer comme moi).

### En bref

💸 **[Making Kubernetes Cost Governance Practical for DevOps Teams](https://thenewstack.io/making-kubernetes-cost-governance-practical-for-devops-teams/)** Kubernetes coûte cher et personne ne sait pourquoi. C'est le résumé de cet article de 1200 mots qui explique avec beaucoup de sérieux que les pods montent et descendent, que le billing cloud est écrit dans un langage que personne dans votre équipe ne parle, et que quand le CFO demande "c'est qui qui a fait exploser la facture ce mois-ci", tout le monde regarde ses chaussures. La solution ? Coller des labels sur tout, aligner les resource requests avec l'usage réel, et faire collaborer DevOps et FinOps, deux tribus qui se parlent aussi naturellement qu'un dauphin et un comptable coincés dans un ascenseur un dimanche de Pâques. L'article propose un modèle de maturité en trois étapes sobrement appelé "crawl, walk, run", ce qui est une façon poétique de dire que vous allez d'abord ne rien comprendre, puis comprendre sans rien changer, et enfin automatiser des processus que vous n'avez toujours pas vraiment compris. Entre-temps, vos pods de dev continuent de tourner le week-end, votre cluster de staging existe depuis 14 mois pour un projet annulé en février, et quelque part dans us-east-1, un job cron lance un scan toutes les 30 secondes.

🚢 **[Istio is migrating container registries](https://istio.io/latest/blog/2026/registry-migration/)** Istio annonce que gcr.io/istio-release ferme le 1er janvier 2027, ce qui veut dire que vos clusters qui pointent dessus commenceront poliment à refuser de bosser. La raison officielle ? "Changes in funding model", ce qui dans la langue de l'open source signifie "Google a arrêté de payer pour héberger les images d'un projet qu'il a lui-même créé et filé à la CNCF". La migration se résume à remplacer gcr.io/istio-release par registry.istio.io/release dans votre config, et à espérer que personne n'a hardcodé l'ancienne URL dans un script bash de 2019 que plus personne ne maintient. La deadline c'est 2027, donc vous avez le temps, ce qui veut dire que vous le ferez un vendredi soir de décembre 2026.
`,he=`---
layout: post
title: Newsletter du 07 Avril 2026
tags: [IA, Docker, réseau, Kubernetes, API, on-call, open source, LLM, sécurité]
comments: true
mathjax: true
author: RudeOps
---


Il y a quelques années, j'aurais dit que l'IA dans une newsletter DevOps c'était aussi pertinent qu'un festival de street art à Montargis.

Et puis GPT-4 est arrivé, puis les agents, puis les LLMs sur Kubernetes, puis quelqu'un a demandé à un modèle probabiliste de gérer sa prod, et là j'ai compris que l'IA était devenue mon problème, que je le veuille ou non.

Alors j'ai décidé d'en parler parce que ignorer ce qui est en train de remodeler nos infrastructures, nos outils et nos métiers c'est une stratégie qui a autant d'avenir que de ne pas faire ses mises à jour de sécurité.

Je vais donc faire une petite place à la veille IA dans ces pages, avec le même niveau d'enthousiasme mesuré et de cynisme affectueux que j'applique au reste.

Cyril

## La pépite de la semaine

On a tous vécu ça : trois heures à lutter avec des variables d'environnement, un reverse proxy qui refuse de causer, et un docker-compose.yml qui ressemble à une lettre de rupture mal rédigée. Les cowboys de chez 37signals ont décidé d'en finir avec ce bordel et proposent ONCE, une plateforme qui installe et gère vos applis Docker avec la même philosophie que leurs produits : sobre, opinionated, et ça marche du premier coup. L'appli est fetchée, installée, bootée, avec mises à jour automatiques, backups, TUI de monitoring et même un healthcheck intégré. Pas de Kubernetes, pas de Helm chart, pas de certification spécialisée requise. Compatible avec n'importe quelle image Docker qui sert du HTTP sur le port 80, ce qui couvre à peu près tout ce que vous avez toujours voulu auto-héberger sans jamais oser le faire. Tourne sur Linux, macOS, un VPS, un Raspberry Pi, ou le vieux ThinkPad qui prend la poussière sous votre bureau et que vous appelez encore "serveur de dev" pour vous donner bonne conscience.

[Lire l'article](https://github.com/basecamp/once)

### Le coeur de la veille

🔍 **[Real time network diagnostic in your terminal](https://github.com/matthart1983/netwatch)** Une TUI réseau écrite en Rust, zéro config, qui affiche en temps réel vos interfaces, connexions, latences DNS et santé de la passerelle sans vous demander de lire une page de man. Le truc sympa c'est le Flight Recorder : Shift+R pour armer une fenêtre glissante de 5 minutes, Shift+F pour geler l'incident qui vient de se produire, Shift+E pour exporter un bundle complet avec pcap, connexions, DNS et un summary.md lisible par un humain, ce qui sera utile pour expliquer à votre manager ce qui s'est passé sans avoir à reconstituer l'incident de mémoire à 3h du matin. Ça tourne sur macOS et Linux, ça s'installe en une ligne via brew ou cargo, et sudo vous donne en plus la capture de paquets avec décodage TLS, HTTP, DNS et une vingtaine d'autres protocoles. Pour ceux qui passent leur vie à jongler entre iftop, ss, tcpdump et Wireshark en espérant que le problème réseau attende poliment qu'ils aient ouvert le bon outil.

☸️ **[A one-line K8s fix that saved 600 hours a year](https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/)** Pendant des mois, l'équipe infra de Cloudflare a consciencieusement réveillé son ops d'astreinte 100 fois par mois pour regarder K8s faire un chgrp récursif sur des millions de fichiers, parce que c'est le comportement par défaut et que personne ne remet en question les comportements par défaut, c'est bien connu. 30 minutes de restart, 50 heures bloquées par mois, un on-call qui développe une relation compliquée avec son téléphone, pourtant la solution existe depuis Kubernetes 1.20 sous le nom fsGroupChangePolicy: OnRootMismatch, ce qui fait donc environ cinq ans qu'elle attendait dans la doc que quelqu'un tombe dessus par accident. Une ligne de YAML plus tard, le restart prend 30 secondes et 600 heures annuelles ont été rendues à des gens qui auraient pu les passer à faire n'importe quoi d'autre, y compris lire la documentation Kubernetes, ce qui aurait réglé le problème cinq ans plus tôt mais bon, on n'en est plus là.

🔒 **[Privacy-first API platform](https://github.com/berbicanes/apiark)** Postman bouffe 800 Mo de RAM, vous demande un compte, stocke vos collections dans le cloud et a décidé à un moment que devenir un monstre était une stratégie produit viable. ApiArk fait la même chose avec 60 Mo, sans compte, sans cloud, en stockant tout en YAML versionnable dans votre repo comme un être humain normal. Construit sur Tauri v2 plutôt qu'Electron, ce qui signifie que votre laptop ne ressemblera pas à un radiateur pendant que vous testez un endpoint. Ça gère REST, GraphQL, gRPC, WebSocket, SSE et MQTT, propose des mock servers locaux, du monitoring cron-based sans passer par le serveur de quelqu'un d'autre, et importe vos collections Postman en trois clics pour que vous puissiez tourner la page sans cérémonie et constater que vos requêtes sont maintenant des fichiers YAML que vous possédez réellement, concept apparemment révolutionnaire en 2026.

🔔 **[How we designed empathetic alert sounds for on-call](https://www.datadoghq.com/blog/designing-on-call-sounds/)** Datadog a publié un billet sur la refonte de ses sons de notification on-call, et c'est soit le signe qu'ils se soucient vraiment du bien-être de leurs ingénieurs, soit qu'ils avaient un budget R&D à écouler avant la fin du trimestre, probablement les deux. La démarche est sérieuse : études sur la perception auditive, recherches en sécurité aérienne et médicale, collaboration avec un studio audio spécialisé. On y apprend par exemple que les sons graves autour de 520 Hz réveillent jusqu'à dix fois mieux que les alarmes aiguës traditionnelles, ce qui va à l'encontre de tout ce qu'on a toujours cru et explique peut-être pourquoi votre PagerDuty actuel vous laisse parfois dormir à poings fermés. Ils ont aussi identifié quatre profils de responders : celui qui bosse dans le bruit, celui qui ne veut pas réveiller sa famille, celui qui dort et le quatrième qui préfère une notification avec une blague dedans, ce dernier profil étant clairement écrit par quelqu'un qui n'a jamais géré un incident SEV1 à 4h du matin. Le résultat c'est une bibliothèque de sons qui va du grelot discret au woof d'un chien, parce que la boîte s'appelle Datadog et qu'ils n'allaient quand même pas rater ça.

### En bref

🌐 **[The 49MB web page](https://thatshubham.com/blog/news-audit)** Shubham Gupta a ouvert le New York Times et regardé l'onglet réseau par curiosité malsaine. 422 requêtes, 49 Mo, deux minutes de chargement. Windows 95 tenait dans moins que ça, et avant d'avoir lu un seul mot de journalisme, son navigateur avait déjà participé à une enchère publicitaire en temps réel, reconstruit son identité cross-site pour douze régies différentes, et reçu trois modales superposées dont deux en violation de ses propres CGU. Les devs du Times détestent ça autant que vous, mais personne ne commande vraiment ce système, il s'est juste optimisé tout seul vers le pire résultat possible comme une IA mal alignée avec un objectif de CPM.

🦊 **[15 years of forking - Waterfox](https://www.waterfox.com/blog/15-years-of-forking/)** Compiler Firefox en 64 bits à 16 ans dans sa chambre, coller ça sur SourceForge et se retrouver avec 50 000 téléchargements en une semaine, c'est le genre de success story qui se termine normalement par une levée de fonds en série A et un hoodie à son nom. Sauf qu'Alex Graf était sur une île méditerranéenne sans réseau tech, sans mentor, et avec des cours à pas rater, ce qui explique sans doute pourquoi quinze ans plus tard il gère encore tout ça seul en se demandant ce qu'il a raté. Le bilan est honnête jusqu'au malaise : les partenariats search c'était le modèle, Bing a décidé que non, et certains mois sont dans le rouge, ce qui dans la bouche d'un fondateur de navigateur indépendant est à peu près aussi surprenant que d'apprendre que l'eau est mouillée. La vraie leçon c'est celle que tout le monde connaît et que personne n'applique : ne jamais mettre sa survie économique dans les mains d'un seul partenaire qui peut vous envoyer un email poli un mardi matin pour tout changer. Quinze ans de Waterfox, c'est finalement le retour d'expérience le plus sincère sur ce que coûte vraiment de faire du logiciel qui respecte ses utilisateurs : beaucoup d'argent, beaucoup de nuits blanches, et un créateur qui n'arrive pas à lâcher l'affaire malgré tout, ce qui est à la fois attendrissant et légèrement inquiétant.

## Sous les pavés l'IA

📚 **[Open Notebook](https://www.open-notebook.ai/)** On a tous ce cimetière de PDFs, d'articles et de vidéos YouTube sauvegardés avec les meilleures intentions du monde et jamais ouverts depuis. Open Notebook est une plateforme open source qui ingère tout ça, le vectorise, et vous laisse interroger votre propre base de connaissance via le modèle de votre choix, le tout sans envoyer votre contexte chez Google comme le fait NotebookLM avec son sourire rassurant. Le pipeline RAG supporte les liens, PDFs, TXT, PPT et YouTube, vous gardez la main sur ce que l'IA peut voir ou pas, et vous choisissez vos modèles plutôt que de subir ceux qu'on a décidés pour vous. Le générateur de podcast qui transforme vos notes en épisodes audio est soit une feature géniale pour les gens qui apprennent en écoutant, soit un signal inquiétant sur notre rapport à la lecture, je vous laisse trancher. Un RAG pour les gouverner tous, pour ceux qui veulent un NotebookLM self-hosted où les données restent là où on les met.

☸️ **[LLMs on K8S](https://www.cncf.io/blog/2026/03/30/llms-on-kubernetes-part-1-understanding-the-threat-model/)** La CNCF a publié un billet sur la sécurité des LLMs sous Kubernetes, et la conclusion tient en une phrase : Kubernetes sait que vos pods sont healthy, il n'a aucune idée de ce qu'ils font. Déployer Ollama derrière un Service en supposant que l'isolation réseau règle le problème c'est comme mettre un vigile devant une banque et supposer qu'il lit dans les pensées des clients. L'OWASP LLM Top 10 recense les façons classiques de se faire avoir : prompt injection parce que les LLMs font confiance aux utilisateurs comme un stagiaire son premier jour, fuite de credentials parce que le modèle génère du texte plausible sans notion de ce qui est secret, supply chain sur des blobs binaires qu'on ne peut pas auditer, et excessive agency quand on donne à un système probabiliste accès à des APIs qui font de vraies choses. La solution c'est une gateway devant le modèle, exactement comme partout ailleurs, sauf que cette fois personne ne l'a fait parce que les pods étaient healthy et que ça suffisait.
`,be=`---
layout: post
title: Newsletter du 13 Avril 2026
tags: [IA, sécurité, CI/CD, GitLab, DNS, Kubernetes, cloud, infra, email, open source]
comments: true
mathjax: true
author: RudeOps
---


Au moment où vous lisez ces lignes, un agent IA quelque part dans le monde est en train de créer une branche Git, d'écrire du code, de scanner ses propres vulnérabilités, de les corriger, de pousser, d'ouvrir une PR, de répondre aux commentaires de review générés par un autre agent IA, de merger, de fermer le ticket, et de notifier sur Slack un troisième agent IA qui résumera le tout dans un rapport hebdomadaire que personne ne lira, pas même l'agent IA chargé de le lire.

Quelque part dans ce même monde, un développeur humain attend que son environnement local se lance.

Bienvenue en 2026.

Cyril

## La pépite de la semaine

SysWarden, je vous en avais déjà parlé, et le projet vient de franchir un cap symbolique avec la v2.10. Pour les deux du fond qui ne suivent pas, SysWarden c'est un orchestrateur de firewall ultra-léger pour Linux qui bloque 97% du trafic malveillant au niveau kernel sans vous demander un doctorat en sécu pour le configurer. La v2.10 marque un vrai palier de maturité : nouvelle interface CLI propre et lisible sur n'importe quel terminal, et surtout l'ajout du Generic Web Auth Guard, un nouveau module qui traque et bloque automatiquement les attaques par brute-force et password spraying sur vos pages de login personnalisées, quel que soit l'endpoint, que ce soit du HTML, du PHP ou un framework quelconque. Le reste de ce qui fait son intérêt est toujours là : fusion de plusieurs blocklists de référence (Spamhaus, Blocklist.de, CINS Army entre autres), jails Fail2ban optimisés pour 46+ services dont Docker et Nginx, cloaking SSH derrière WireGuard, reporting automatique vers AbuseIPDB, et un dashboard HTTPS self-hosted pour suivre les menaces en temps réel sans base de données lourde. Bref, un projet à suivre de près, surtout si vous gérez des serveurs exposés et que vous en avez assez de regarder vos logs se remplir de scans en provenance de pays que vous n'avez jamais visités.

[Découvrir](https://syswarden.io/)

### Le coeur de la veille

🔧 **[Plumber, open source compliance CLI for GitLab CI/CD](https://getplumber.io/)** Si vous utilisez GitLab et que votre pipeline CI/CD est un Far West où chacun fait ce qu'il veut tant que ça passe au vert, Plumber va vous intéresser. C'est un outil en Go qui analyse vos projets GitLab et vérifie leur conformité selon une liste de contrôles configurables : images Docker mal taguées, branches non protégées, variables d'environnement unsafe, et tout ce que vous savez pertinemment qu'il faudrait corriger mais que personne ne touche parce que "ça marche comme ça depuis deux ans". Le tout s'intègre proprement dans vos MR via un commentaire de conformité automatique, génère un badge sur votre projet et peut sortir un PBOM en CycloneDX si vous avez besoin de prouver à votre RSSI que vous faites des trucs sérieux. Ça se déploie en Docker en deux minutes, ça s'intègre dans un pipeline existant sans douleur, et ça échoue proprement avec des exit codes qui font sens. Bref, l'outil qu'on aurait voulu avoir la dernière fois qu'un stagiaire a pushé une image taguée latest en prod sans que personne ne le voit venir.

🌐 **[How DNS name tracking enhances network observability](https://developers.redhat.com/articles/2026/04/09/how-dns-name-tracking-enhances-network-observability)** Des mecs ont découvert qu'écrire \`nginx\` au lieu de \`nginx.server.svc.cluster.local.\` dans un cluster Kubernetes génère du trafic DNS inutile, des latences, et des NXDOMAIN en pagaille. Cette révélation bouleversante, qui remet en question tout ce qu'on croyait savoir sur les points à la fin des noms de domaine, est disponible sous forme de post de blog avec des graphiques et tout. DNS existe depuis 1983, le point final aussi, votre cluster souffre donc probablement de ça depuis le premier jour, et personne n'a rien dit parce que ça passait au vert. Le post explique aussi comment visualiser les dégâts avec Loki, ce qui vous permettra enfin de mettre un visage sur la source de vos latences inexpliquées lors de vos prochains post-mortems.

☁️ **[Rethinking your infrastructure strategy](https://www.arturhenriques.com/p/why-cloud-might-be-rethought)** Un article qui enfonce des portes ouvertes avec beaucoup de classe, mais qui les enfonce quand même. Le pitch : le cloud c'est cher, ça va devenir encore plus cher avec l'IA qui dévore du hardware, et certaines boîtes commencent à regarder leurs vieux serveurs sous-utilisés dans la salle machine avec des yeux neufs. On y parle de cloud repatriation, c'est-à-dire le mouvement inverse de ce qu'on vous a vendu comme inévitable depuis dix ans. L'auteur évoque aussi la souveraineté technologique européenne, les egress fees qui ruinent silencieusement tous les beaux calculs de TCO, et les architectures hybrides comme compromis raisonnable pour ceux qui ne veulent pas choisir entre la facture AWS et l'armoire à serveurs qui sent le renfermé. Pas de révélation fracassante, mais une synthèse honnête d'un débat qui va occuper pas mal de réunions budget dans les deux ans qui viennent.

## Copinage

On va pas se mentir, on déteste le copinage, mais on déteste encore plus envoyer des candidatures dans le vide intersidéral d'un ATS qui les lit jamais, ou recruter un admin senior via une plateforme qui nous propose trois profils dont deux sont en poste depuis 1998 et un troisième qui "maîtrise Docker" parce qu'il a vu le logo une fois. BAO c'est un cabinet spécialisé sur les métiers Tech, Data, Infra et Produit, et ils jouent sur les deux tableaux : si vous cherchez un job, un chasseur de têtes dédié prend vos critères en main et revient vers vous avec des offres qui correspondent vraiment à ce que vous voulez, pas à ce qu'un algo a cru comprendre de votre LinkedIn. Si vous recrutez, premiers candidats en 48h, recrutement bouclé en 30 jours, chasseurs qui parlent vraiment votre langue (et pas celui du manager qui pense que Terraform c'est une marque de chaussures de rando), transparence totale et suivi post-embauche pour éviter la roulette russe de la période d'essai. 12 000 candidats accompagnés depuis 2019, un modèle au succès côté entreprise, et apparemment des gens qui répondent vraiment aux candidats, ce qui dans notre secteur relève du miracle documenté.

(BAO ne m'a pas payé pour écrire ça. Je le fais parce que c'est vraiment du copinage, ce qui dans le monde de la newsletter tech est effectivement une information.)

[En savoir plus](https://bao.jobs/)

### En bref

☸️ **[Kor, a golang tool to discover unused K8s resources](https://github.com/yonahd/kor)** Vous êtes convaincu que votre cluster Kubernetes ne contient que des ressources utiles ? Kor va corriger cette illusion touchante. L'outil traque les ressources orphelines dans vos namespaces : ConfigMaps, Secrets, PVCs, Ingresses, Roles, et une vingtaine d'autres choses que vous avez créées un jour pour "tester un truc" et oublié là depuis. Cronjob avec rapport Slack le lundi matin, métriques Prometheus, et un flag \`--delete\` qui existe, ce qui devrait suffire à vous convaincre de le lire avant de l'utiliser en prod.

📧 **[Héberger ses emails chez soi, en 2026](https://www.linkedin.com/pulse/h%C3%A9berger-ses-emails-chez-soi-en-2026-une-tr%C3%A8s-id%C3%A9e-que-beaufrere-gilie/)** J'ai passé beaucoup trop de temps à monter une stack mail maison avec Mailcow sur une VM Proxmox, un VPS Postfix en frontal, et tout le bazar DNS qui va avec (SPF, DKIM, DMARC, PTR et tous les autres acronymes qui font pleurer). Le verdict est sans appel : c'est possible, c'est fonctionnel, c'est instructif, et c'est une très mauvaise idée si vous cherchez une activité tranquille un samedi pluvieux. J'ai écrit le retex complet pour ceux qui veulent comprendre pourquoi chaque brique existe, comment éviter les erreurs classiques, et pourquoi tant d'entreprises finissent par payer un ESP en se demandant pourquoi elles ne l'ont pas fait plus tôt.

## Sous les pavés l'IA

🤖 **[Claude Usage](https://github.com/phuryn/claude-usage)** Si vous utilisez Claude Code et que vous avez toujours eu l'impression de conduire les yeux fermés côté consommation de tokens, ce petit outil va vous intéresser. Claude Code écrit des logs JSONL détaillés en local (tokens, modèles, sessions, projets) quel que soit votre plan, et ce dashboard les lit pour vous sortir des graphes et des estimations de coûts que l'interface d'Anthropic ne vous donne pas. Zéro dépendance externe, Python stdlib uniquement, un git clone et c'est parti. Ça couvre le CLI, l'extension VS Code et les sessions dispatchées, avec un scanner incrémental qui ne retraite que ce qui a changé, une base SQLite locale, et un dashboard qui se rafraîchit toutes les 30 secondes avec filtrage par modèle. Utile surtout si vous êtes sur un plan API et que vous voulez comprendre d'où vient votre facture avant qu'elle ne vous comprenne elle-même.

🧠 **[Welcome on the post-AI era of software development](https://itnext.io/automate-your-code-reviews-welcome-to-the-post-ai-era-of-software-development-169ba917cc48)** Un long article d'Andrew Blooman qui décrit comment les workflows de développement se restructurent autour de l'IA en 2026, et c'est plus intéressant que le titre ne le laisse penser. On y parle de vibe coding pour le prototypage rapide (oui ça marche, non c'est pas de la vraie prod, oui tout le monde le fait quand même), de développement structuré avec Claude Code comme collaborateur autonome plutôt que comme outil d'autocomplétion glorifié, et d'un pattern "security engineer agent" qui balance une revue de sécurité automatique sur chaque PR à une vitesse qu'aucune équipe humaine ne pourrait tenir. Ce qui est chouette dans ce post c'est qu'il ne prétend pas que les développeurs disparaissent, il décrit simplement ce que "développer" veut dire concrètement quand l'agent lit votre issue GitHub, crée la branche, écrit le code, scanne les vulnérabilités, corrige, pousse et ferme le ticket pendant que vous buvez votre café.
`,fe=`---
layout: post
title: Newsletter du 20 Avril 2026
tags: [IA, sécurité, open source, git, CI/CD, GitLab, Kubernetes, infra, agents]
comments: true
mathjax: true
author: RudeOps
---


Il y a quelques jours, j'ai publié la newsletter sur le web de RudeOps comme je le fais chaque semaine. La routine classique : une automatisation à base d'IA qui prend le contenu, génère le markdown, insère les liens, met tout en forme, propre, rapide, efficace.

Sauf que j'ai pas relu.

Et l'IA, dans sa grande générosité, a décidé de remplacer certains liens par d'autres. Des liens qui ont l'air bien, qui sont syntaxiquement corrects, qui pointent vers des choses qui existent ou pas... Le genre de travail bâclé qu'on qualifierait d'inacceptable si c'était un stagiaire, mais qu'on excuse volontiers quand c'est un modèle à 200 milliards de paramètres.

Un grand merci à Aurélien de chez Plumber qui me l'a signalé, parce que sans lui, les liens seraient encore là à pointer vers n'importe quoi.

Le comble de l'histoire, c'est que dans cette même newsletter je prêche le contrôle, la rigueur, le human in the loop. J'ai écrit tout ça, relu tout ça, envoyé tout ça avant de confier la publication à un pipeline que je n'ai pas vérifié.

La morale ? C'est pas l'IA qui m'a eu. C'est moi qui me suis eu.

Parce qu'un outil sans relecture, c'est pas de l'automatisation, c'est juste de la confiance mal placée avec un joli wrapper Python autour. Et la leçon, elle tient en une ligne qu'on connaît tous et qu'on oublie tous : ce qu'on ne vérifie pas, on ne le contrôle pas.

Cyril

## La pépite de la semaine

Forgejo passe en version 15.0, et si vous ne connaissez pas encore, c'est l'alternative open source à GitHub née en 2022 d'un fork de Gitea, par des gens qui avaient décidé qu'une forge logicielle ne devrait pas appartenir à une entreprise privée. Ça tourne sur tout et n'importe quoi, ça gère les issues, les PR, les wikis, les kanban boards, le CI, les registres de paquets, et ça s'auto-héberge sans vous demander de signer un contrat en 47 pages. Cette version apporte notamment les tokens d'accès spécifiques aux repos, des runners éphémères, le support des reusable workflows imbriqués, et Monaco remplacé par CodeMirror dans l'éditeur, ce qui va relancer des débats passionnants dans exactement zéro salle de réunion. Côté sécurité, plusieurs endpoints API qui laissaient fuiter des données de repos privés via des tokens public-only ont été corrigés, ce qui est le genre de phrase qu'on préfère lire dans des release notes que dans un post-mortem.

[Lire l'article](https://codeberg.org/forgejo/forgejo)

### Le coeur de la veille

🛡️ **[NIST updates NVD operations to address record CVE growth](https://www.nist.gov/news-events/news/2026/04/nist-updates-nvd-operations-address-record-cve-growth)** Le NIST a regardé son backlog de CVEs grossir comme les todos d'un ticket "quick fix" et a pris une décision historique : ne plus tout traiter. Les soumissions de CVEs ont augmenté de 263% entre 2020 et 2025, et le premier trimestre 2026 arrive déjà 30% au-dessus de l'année dernière, ce qui signifie que la base de données nationale de vulnérabilités américaine croule sous les tickets comme un stagiaire à qui on a dit "t'inquiète, c'est calme en ce moment". La réponse du NIST est donc à la hauteur : désormais, seules les CVEs qui apparaissent dans le catalogue KEV de la CISA, celles qui touchent des logiciels utilisés par le gouvernement fédéral, ou celles qui concernent des logiciels critiques seront traitées en priorité. Les autres tomberont dans une catégorie sobrement baptisée "Not Scheduled", ce qui est une façon très institutionnelle de dire que votre faille attendra que quelqu'un ait le temps, c'est-à-dire probablement jamais. Pour les optimistes, il est possible d'envoyer un email pour demander un traitement prioritaire, une boîte mail qui va sans aucun doute devenir l'endroit le plus serein de l'internet en 2026.

🐘 **[Git-like version control CLI backed by PostgreSQL](https://github.com/ImGajeed76/pgit)** Quelqu'un a regardé Git un matin et s'est dit : "Et si on mettait PostgreSQL là-dedans ?" Pas pour résoudre un vrai problème, mais parce que certains développeurs ont une relation avec PG qui dépasse largement le cadre professionnel et frôle le trouble de la personnalité. pgit, c'est donc un système de contrôle de version Git-compatible sauvegardé dans PostgreSQL, avec compression delta maison, parce que visiblement stocker des blobs dans une base relationnelle à schéma rigide c'est exactement ce que git faisait mal depuis 1785. L'argument massue : vous pouvez faire du SQL sur tout votre historique de commits, savoir quels fichiers sont toujours modifiés ensemble, qui est le seul à comprendre ce module que tout le monde contourne en rasant les murs, ou quel répertoire concentre 80% des commits de panique du vendredi soir.

⚙️ **[Gcil](https://gitlab.com/RadianDevCore/tools/gcil)** C'est un chouette outil qui vous permet de lancer vos jobs GitLab CI en local, parce qu'attendre que le pipeline distant confirme que votre script bash est cassé, c'est un style de vie qu'on ne peut plus se permettre. Vous collez votre .gitlab-ci.yml, vous tapez gcil, et vos jobs tournent dans leurs images Docker respectives exactement comme en vrai, sauf que cette fois c'est votre machine qui souffre et non le runner partagé que tout le monde maltraite honteusement. Ça supporte Docker, Podman, le mode debug pour les optimistes, le mode bash pour les réalistes, et il y a tellement de flags disponibles que la page de documentation ressemble elle-même à un fichier de config qu'on ne lira jamais en entier.

☸️ **[K3s, a better way to deploy a docker app](https://spin.atomicobject.com/k3s-deploy-docker-app-linux/)** K3s, c'est la version de Kubernetes pour ceux qui veulent faire du Kubernetes sans avoir besoin d'une équipe de dix personnes et d'un budget infrastructure à six chiffres pour le faire tourner. Un seul binaire, un installer qui ne pleure pas et vous avez un cluster qui embarque déjà Traefik, Flannel et une registry, ce qui représente en volume de YAML évité une économie thérapeutique non négligeable. Ce chouette article des cowboys de chez Atomicobject vous guide à travers une stack complète sur un seul serveur Linux : K3s pour orchestrer, Zot comme registry privée parce qu'il faut bien stocker ses images quelque part, CloudNativePG pour avoir un Postgres géré sans se transformer en DBA, et Helm pour coller tout ça ensemble sans écrire du YAML à la main comme un animal. Le résultat tient sur 2 à 4 Go de RAM, ce qui est soit impressionnant soit légèrement terrifiant selon l'endroit où vous êtes dans votre relation avec Kubernetes.

### En bref

⚖️ **[FSF clarifies its stance on AGPLv3](https://lwn.net/Articles/1067771/)** OnlyOffice se retrouve dans une situation inconfortable que les amateurs de drama open source apprécieront à sa juste valeur : le CEO a lui-même demandé à la FSF de trancher sur la compatibilité de sa licence avec l'AGPLv3, visiblement convaincu que ça allait bien se passer (ça ne s'est pas bien passé). La FSF a conclu qu'OnlyOffice a ajouté des restrictions incompatibles avec l'AGPLv3, et que n'importe qui ayant reçu le code peut les supprimer, ce qui est une façon très juridique de dire que le fork Euro-Office fait exactement ce qu'il veut. En bonus, un mainteneur de paquets a remarqué en passant qu'OnlyOffice embarque un binaire CEF propriétaire modifié qu'ils n'ont jamais open-sourcé, téléchargé au moment du build via une URL HTTP non chiffrée sans vérification d'intégrité, ce qui transforme chaque installation en opportunité de supply chain attack offerte à quiconque se trouve sur le chemin. Le ticket ouvert sur ce sujet attend une réponse depuis un an et demi, ce qui dans l'open source signifie soit "on travaille dessus" soit "on espère que tout le monde a oublié".

📅 **[Cal.com goes private](https://thenewstack.io/cal.com-codebase-security-ai/)** Niveau drama dans le monde merveilleux de l'open source, on est plutôt bien servis ce mois-ci. Cal.com, l'alternative open source à Calendly, vient de fermer son code source principal en invoquant les risques liés à l'IA et sa capacité croissante à trouver des vulnérabilités automatiquement. Le CEO a sorti la métaphore du coffre-fort dont on ne donne plus les plans, ce qui est une façon honnête de dire que cinq ans d'open source c'était bien, mais que là ça commence à faire peur. En compensation, la société publie Cal.diy, une version allégée sous licence MIT avec les fonctionnalités enterprise retirées, ce qui est généreusement appelé "donner quelque chose à la communauté" et moins généreusement appelé "garder la partie qui rapporte de l'argent pour soi". Le CEO reconnaît d'ailleurs que d'autres boîtes open source sont en train de faire exactement le même calcul en ce moment, ce qui laisse présager une année 2026 riche en annonces habillées en décisions de sécurité.

## Sous les pavés l'IA

🖥️ **[Tmux config with built-in terminal](https://github.com/ShawnPana/smux)** smux, c'est l'outil pour ceux qui trouvent que tmux manquait d'une couche d'abstraction et que leurs agents IA méritaient eux aussi d'avoir accès au terminal. Le principe est simple : une commande installe tmux avec une config sensée, des raccourcis à base d'Option sans prefix à mémoriser, et surtout tmux-bridge, un CLI qui permet à n'importe quel agent de lire, écrire et envoyer des touches dans n'importe quel panneau. Claude Code peut donc demander à Codex de relire un fichier dans le panneau d'à côté, Codex répond, et vous regardez vos agents se parler dans votre terminal comme si c'était tout à fait normal. C'est soit la chose la plus utile que j'ai vue cette semaine, soit le début de quelque chose qu'on regrettera, mais dans les deux cas c'est impressionnant à regarder tourner.

🤖 **[A Github agentic workflow](https://itnext.io/a-github-agentic-workflow-161189fa9f85)** Les GitHub Agentic Workflows, c'est le truc que GitHub a sorti discrètement et que les cowboys de chez ITnext ont décidé de tester sur un vrai problème : automatiser la lecture de release notes non structurées pour alimenter un outil d'analyse de compatibilité, un travail que son collègue faisait à la main en lisant des docs et en souffrant en silence. Le principe est simple, vous écrivez votre workflow en Markdown, vous le compilez en YAML avec gh aw compile, vous oubliez de le faire une fois, vous poussez le Markdown tout seul, vous passez deux heures à déboguer, et ensuite vous ne recommencez plus. L'agent tourne avec un token Copilot, lit les release notes, en extrait ce qu'aucune regex ne pourrait capturer proprement, et ouvre une PR avec le résultat. Le système prompt embarqué est un chef d'œuvre de paranoïa préventive qui interdit à l'agent de s'évader du container, de scanner des ports ou de suivre des instructions cachées dans des fichiers, ce qui suggère que quelqu'un chez GitHub a passé du temps à réfléchir à des scénarios qu'on préfère ne pas imaginer un lundi matin.
`,qe=`---
layout: post
title: Newsletter du 27 Avril 2026
tags: [Linux, NixOS, Kubernetes, Git, Docker, supply chain, sécurité, ANSSI, IA, agents]
comments: true
mathjax: true
author: RudeOps
---


La France envisage donc de migrer ses postes de travail vers Linux, et on imagine déjà la scène : un agent de la DINUM, 15 ans d'Excel avec des macros VBA imbriquées comme des poupées russes, qui découvre LibreOffice Calc un lundi matin. C'est le genre de moment où on comprend pourquoi les plans de migration ont des taux d'échec qui feraient rougir un déploiement Kubernetes en prod un vendredi.

Mais cette fois, il y a quelque chose de différent. L'État n'a pas choisi Ubuntu par facilité ou Debian par habitude : il a choisi NixOS, une distribution déclarative et reproductible, et l'a durcie aux normes ANSSI pour donner naissance à Sécurix, avec Bureautix comme environnement de bureau de référence. Authentification FIDO2, Secure Boot, TPM2, gestion des utilisateurs par dépôt Git en lieu et place de l'Active Directory, des choix techniques sérieux, assumés, et qui montrent qu'on a réfléchi au problème plutôt que de juste coller une nouvelle distro sur les postes et espérer que ça passe.

Oui, Munich a essayé et échoué. Oui, les pilotes d'imprimantes multifonctions en SMBv1 vont faire des victimes. Oui, les 2 millions d'agents de la fonction publique ne basculeront pas en un claquement de doigts, et la première à souffrir sera sans doute la personne du service RH qui a un fichier Excel de 47 onglets avec des liaisons croisées que LibreOffice ouvrira de travers. Tout ça est réel, documenté, et personne ne prétend le contraire.

Mais l'alternative, c'est de continuer à faire tourner l'ensemble du système d'information de l'État sur des logiciels dont on ne contrôle ni le code, ni les mises à jour, ni les conditions d'accès, dans un contexte géopolitique où cette dépendance n'est plus une abstraction mais un risque concret. Sécurix et Bureautix sont encore en alpha, hébergés avec une certaine ironie sur GitHub qui appartient à Microsoft, mais la direction est bonne et les choix techniques sont les bons. Il fallait commencer quelque part.

Cyril

## La pépite de la semaine

Homelable, c'est l'outil qu'on attendait tous pour transformer le schéma Visio de votre infra dessiné sur une serviette en 2019 en quelque chose de vaguement présentable. Le principe : un scan nmap de vos plages réseau, une interface canvas où vous approuvez les machines découvertes, des healthchecks en continu pour savoir lesquelles sont mortes sans que personne ne vous ait prévenu, et un export PNG pour coller le tout dans votre wiki Confluence que personne ne lit. Le détail qui va faire craquer les plus atteints d'entre vous : un serveur MCP intégré qui permet à Claude de lire votre topologie, déclencher des scans et gérer vos nodes en langage naturel, ce qui signifie concrètement que vous pouvez demander à une IA de gérer le bordel réseau que vous avez mis trois ans à construire et que vous êtes le seul à comprendre, enfin, à peu près.

[Lire l'article](https://github.com/Pouzor/homelable)

### Le coeur de la veille

☸️ **[Kubernetes 1.36, workloads applicatifs et cycle de vie mutable](https://www.linkedin.com/pulse/kubernetes-136-workloads-applicatifs-et-cycle-de-vie-mutable-romeo-xqtne/)** Pendant des années, modifier les ressources d'un pod signifiait le tuer, le recréer, attendre que le scheduler daigne le regarder, et sacrifier une chèvre à l'équinoxe pour que ça reparte proprement. La v1.36 débarque avec sept KEPs qui racontent tous la même histoire : Kubernetes apprend enfin à toucher aux workloads sans les raser, le resize in-place au niveau pod passe Beta (KEP-5419), les Jobs suspendus deviennent mutables avant démarrage comme si vous pouviez changer la commande d'un pizza livreur déjà en route (KEP-5440), on peut redémarrer tous les conteneurs d'un pod sans perdre son IP ni ses GPUs ni sa dignité (KEP-5532), les StatefulSets gagnent enfin Recreate après seulement quelques années d'attente, ce qui dans le temps Kubernetes équivaut à trois ères géologiques (KEP-3541), et les Deployments apprennent à attendre que les pods terminants soient vraiment morts avant d'en spawner de nouveaux, concept révolutionnaire qu'on appelle dans le reste de l'univers "attendre son tour" (KEP-5882). Benjamin Romeo détaille tout ça avec la précision qui ferait pleurer un auditeur, feature gates à activer, cas limites à éviter, et combinaisons de policies qui transformeront votre vendredi soir en séance de thérapie de groupe. Une lecture accessible et indispensable.

📝 **[Highlights from Git 2.54](https://github.blog/open-source/git/highlights-from-git-2-54/)** Git 2.54 est sorti et pour une fois on n'est pas obligé de faire semblant que c'est excitant : ça l'est vraiment. La nouveauté qui va changer la vie des gens comme moi qui poussent des commits avec des messages du type "fix", "fix2" et "fix_final_VRAIMENT_final" : git history, une commande expérimentale qui permet de réécrire proprement un message de commit ou de découper un commit monolithique sans invoquer le rebase interactif et les trois cérémonies chamaniques qui l'accompagnent. Côté hooks, terminée la grande tradition du symlink copié-collé entre repos avec la même faute de frappe partout, on peut désormais les définir dans gitconfig, en empiler plusieurs pour le même événement, et les désactiver sans les supprimer comme le ferait quelqu'un qui a lu un livre sur le rangement. Enfin, git maintenance run adopte le repacking géométrique par défaut, ce qui signifie que vos repos seront désormais maintenus efficacement sans intervention humaine, concept tellement étranger à nos habitudes que j'ai dû le vérifier deux fois.

🌐 **[Minimal, fast and modern http client](https://github.com/DevlogZz/Kivo)** Kivo, c'est un client HTTP qui se présente comme l'alternative légère à Postman pour ceux qui en ont assez de sacrifier 800 Mo de RAM et l'âme de leur laptop juste pour envoyer un GET sur localhost. Cross-platform, stockage local, collections hiérarchiques, gestion d'environnements et un moteur de requêtes JSON pour filtrer les réponses sans invoquer jq comme un toxico un vendredi soir. En v0.4.1, donc encore jeune, mais ça avance plus vite que votre migration vers quelque chose de moins gourmand que vous repoussez depuis 2023.

🔒 **[Docker supply chain hardening](https://heyvaldemar.com/docker-supply-chain-hardening-solo-maintainer/)** Une image Docker à 730 000 pulls avec une note Scout de D, c'est le genre de situation où on comprend mieux pourquoi les DSI ont des insomnies. L'auteur s'est retrouvé dans ce cas, a décidé de faire le ménage, et documente tout : passage en multi-stage build, épinglage des digests, USER non-root, signature cosign keyless, SBOM, provenance SLSA et score OpenSSF qui passe de "embarrassant" à 7.8/10. Le tout pour 16 heures de travail initial et une heure par mois de maintenance, ce qui au tarif d'un incident de supply chain reste une affaire. L'incident de prod au passage : une attestation pushée sur Docker Hub dont l'API OCI referrers a silencieusement refusé le handoff, corrigé en basculant vers GitHub Attestations. La morale de l'histoire, c'est que les outils pour signer et attester une image sont gratuits, les workflows font moins de 300 lignes de YAML, et la seule vraie raison pour laquelle la plupart des images publiques tournent encore sans rien de tout ça, c'est que personne n'a pris le temps de le faire.

### En bref

📦 **[Arch Linux now has a bit-for-bit reproductible Docker image](https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/)** L'image Docker officielle d'Arch Linux est désormais reproductible bit-for-bit, et derrière l'annonce un peu geek se cache un vrai sujet : la supply chain security. Deux builds indépendants produisent exactement la même image, vérifiable par digest, ce qui signifie concrètement qu'on peut détecter si quelqu'un a glissé une surprise dans votre image entre sa construction et votre docker pull. Le genre de garantie qui aurait peut-être évité quelques sueurs froides post-XZ Utils à ceux qui avaient la mémoire courte. Bémol assumé : les clés pacman ont été retirées pour garantir la reproductibilité, ce qui est un peu comme livrer un coffre-fort sans la combinaison en promettant que c'est pour votre sécurité. L'image est dispo sous le tag "repro", en attendant mieux.

🐳 **[Dockerfile practices are Devops tax before they are a security concern](http://cloudnativenow.com/contributed-content/dockerfile-practices-are-a-devops-tax-before-they-are-a-security-concern/)** Votre Dockerfile, c'est le jean du dimanche de votre pipeline : tout le monde sait qu'il est là, personne ne le lave vraiment, et un jour ça finit en prod avec une image de 2,3 Go que personne ne peut expliquer. C'est le constat un peu douloureux que dresse cet article, qui rappelle que les mauvaises pratiques Dockerfile ne tombent pas du ciel : elles s'accumulent tranquillement, décision par décision, deadline après deadline, jusqu'au jour où vos builds prennent 22 minutes et bloquent toute l'équipe pendant deux jours pour une raison que personne ne peut tracer. Les suspects habituels sont toujours les mêmes : images de base non épinglées, dépendances installées après la copie des sources (ce qui invalide le cache à chaque changement de code), et le classique COPY . . placé trop tôt par quelqu'un qui avait autre chose à faire. L'article présente DockSec, un outil open source qui combine Trivy (lol), Hadolint et une couche IA pour transformer les findings en conseils actionnables par des humains normaux. Le cas concret partagé est assez éloquent : après optimisation des layers et du cache, les builds sont passés de 12-16 minutes à 3,5-4,5 minutes, et les images ont maigri de 60 à 75%. Des chiffres qui font réfléchir, surtout quand on sait que la résistance au changement se dissout généralement dès le premier PR qui passe en 4 minutes au lieu de 14.

## Sous les pavés l'IA

🔥 **[CodeBurn](https://github.com/getagentseal/codeburn)** Un énième dashboard en TUI pour surveiller ce que vos agents IA dépensent en tokens, sauf que celui-là lit directement les sessions de Claude Code, Codex, Cursor et consorts sur disque sans proxy ni API key et vous dit combien de fois votre IA a raté sa première tentative avant de trouver la solution que vous auriez codée en dix minutes.

🔗 **[Cursor and chainguard partner to lock down the AI agent supply chain](https://thenewstack.io/cursor-chainguard-agentic-ai-secure/)** Cursor et Chainguard s'associent pour régler un problème que personne n'avait vraiment anticipé : quand votre agent IA écrit du code en mode automatique, il sélectionne aussi des dépendances à vitesse machine, sans la moindre pause pour vérifier que le package npm qu'il vient de choisir n'a pas été backdooré la semaine dernière par un type basé à Montargis. Le deal : Cursor branche ses agents sur le catalogue Chainguard plutôt que sur les registres publics, avec plus de 2300 images reconstruites en continu, zéro CVE connue à la sortie, et des rebuilds qui suivent les patches upstream en quelques heures. Les dépendances Python, JavaScript et Java passent par des sources vérifiables et signées, et la configuration des credentials est gérée automatiquement par Cursor pour que vous n'ayez rien à changer à vos workflows.
`,ye=Object.assign({"/content/2023-03-15-rudeops-newsletter.md":a,"/content/2023-03-31-rudeops-newsletter.md":u,"/content/2023-04-14-rudeops-newsletter.md":l,"/content/2023-05-02-rudeops-newsletter.md":c,"/content/2023-05-15-rudeops-newsletter.md":d,"/content/2023-06-01-rudeops-newsletter.md":p,"/content/2023-06-15-rudeops-newsletter.md":m,"/content/2023-07-03-rudeops-newsletter.md":v,"/content/2023-07-17-rudeops-newsletter.md":g,"/content/2023-09-01-rudeops-newsletter.md":h,"/content/2023-09-15-rudeops-newsletter.md":b,"/content/2023-10-02-rudeops-newsletter.md":f,"/content/2023-10-16-rudeops-newsletter.md":q,"/content/2023-11-02-rudeops-newsletter.md":y,"/content/2023-12-01-rudeops-newsletter.md":w,"/content/2023-12-15-rudeops-newsletter.md":x,"/content/2024-05-13-rudeops-newsletter.md":k,"/content/2024-05-20-rudeops-newsletter.md":j,"/content/2024-06-03-rudeops-newsletter.md":S,"/content/2024-06-10-rudeops-newsletter.md":C,"/content/2024-06-17-rudeops-newsletter.md":L,"/content/2024-07-02-rudeops-newsletter.md":z,"/content/2024-07-22-rudeops-newsletter.md":A,"/content/2024-08-05-rudeops-newsletter.md":O,"/content/2024-09-02-rudeops-newsletter.md":P,"/content/2024-09-09-rudeops-newsletter.md":D,"/content/2024-09-16-rudeops-newsletter.md":I,"/content/2024-10-07-rudeops-newsletter.md":T,"/content/2024-10-21-rudeops-newsletter.md":_,"/content/2024-11-04-rudeops-newsletter.md":M,"/content/2024-11-25-rudeops-newsletter.md":E,"/content/2024-12-16-rudeops-newsletter.md":G,"/content/2025-01-06-rudeops-newsletter.md":R,"/content/2025-01-20-rudeops-newsletter.md":N,"/content/2025-02-10-rudeops-newsletter.md":K,"/content/2025-02-24-rudeops-newsletter.md":H,"/content/2025-03-10-rudeops-newsletter.md":B,"/content/2025-03-24-rudeops-newsletter.md":U,"/content/2025-04-14-rudeops-newsletter.md":F,"/content/2025-05-05-rudeops-newsletter.md":V,"/content/2025-05-19-rudeops-newsletter.md":J,"/content/2025-06-02-rudeops-newsletter.md":W,"/content/2025-06-16-rudeops-newsletter.md":Q,"/content/2025-06-30-rudeops-newsletter.md":Y,"/content/2025-07-15-rudeops-newsletter.md":X,"/content/2025-09-01-rudeops-newsletter.md":Z,"/content/2025-09-15-rudeops-newsletter.md":$,"/content/2025-09-29-rudeops-newsletter.md":ee,"/content/2025-10-13-rudeops-newsletter.md":se,"/content/2025-10-29-rudeops-newsletter.md":te,"/content/2025-11-12-rudeops-newsletter.md":ne,"/content/2025-11-24-rudeops-newsletter.md":re,"/content/2025-12-08-rudeops-newsletter.md":ie,"/content/2025-12-22-rudeops-newsletter.md":oe,"/content/2026-01-05-rudeops-newsletter.md":ae,"/content/2026-01-19-rudeops-newsletter.md":ue,"/content/2026-02-02-rudeops-newsletter.md":le,"/content/2026-02-16-rudeops-newsletter.md":ce,"/content/2026-03-02-rudeops-newsletter.md":de,"/content/2026-03-09-rudeops-newsletter.md":pe,"/content/2026-03-16-rudeops-newsletter.md":me,"/content/2026-03-23-rudeops-newsletter.md":ve,"/content/2026-03-30-rudeops-newsletter.md":ge,"/content/2026-04-07-rudeops-newsletter.md":he,"/content/2026-04-13-rudeops-newsletter.md":be,"/content/2026-04-20-rudeops-newsletter.md":fe,"/content/2026-04-27-rudeops-newsletter.md":qe});function we(e){const s=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!s)return{meta:{},content:e};const t={};for(const n of s[1].split(`
`)){const r=n.indexOf(":");if(r>0){const i=n.slice(0,r).trim(),o=n.slice(r+1).trim();t[i]=o}}return{meta:t,content:s[2]}}function xe(e){const s=e.match(/\[(.*)\]/);return s?s[1].split(",").map(t=>t.trim()):[]}function ke(e){const s=e.match(/(\d{4}-\d{2}-\d{2})/);return s?s[1]:""}const je=Object.entries(ye).map(([e,s])=>{const{meta:t,content:n}=we(s);return{date:ke(e),title:t.title||"",tags:xe(t.tags||""),content:n}}).sort((e,s)=>e.date.localeCompare(s.date)),Se=je.map((e,s)=>({number:s+1,slug:e.date,title:e.title,date:e.date,tags:e.tags,content:e.content}));export{Se as n};
