---
layout: post
title: Newsletter du 31 Mars 2023
tags: [devops, gitops, cloud]
---


_Vous avez tous vu cette vague de fond qui est en train de grossir et commence à emporter pas mal de choses sur son chemin ? Je parle bien sûr de ChatGPT, Dall-E, Midjourney… Ici on est assez convaincu qu’il ne s'agit pas d’une fumisterie (coucou les NFT) ou d’un nouveau buzzword (coucou les métavers), mais que les premiers modèles publics d'intelligence artificielle vont structurer et développer nos métiers voire même, soyons fou, améliorer la vie de tout le monde sur la planète ? Allez, on croise les doigts et on en reparle dans dix ans._

_Cyril_

  

![](https://storage.mlcdn.com/account_image/325165/L3ZVKsGu9oqkeqnxi85jDEilAYoJ99SYjIkX1HnM.png)

## ChatGPT - Vers l’infini et au delà

On ne peut pas nier que ChatGPT  [commence à être utile dans nos métiers](https://blog.devgenius.io/using-chatgpt-for-devops-7daa7c1783e9). Envie de céder aux sirènes de la hype et de mettre de l’’IA dans votre vie un peu morne ? On a pensé à vous et on a testé plein de trucs plutôt chouettes qui vont booster votre productivité comme disent les startupers. On commence doucement avec  [sqltranslate](https://www.sqltranslate.app/), un site plutôt utile qui vous permet de convertir une demande humaine en langage sql, votre DBA va apprécier. Ensuite comment ne pas parler de  [Openai-pr-reviewe](https://github.com/fluxninja/openai-pr-reviewer)r qui vous permet de faire une revue intelligente de toutes vos PR en souffrance sur Github (votre RSSI vous interdira de le faire forcément car ça envoie votre code sur les serveurs d’Openai, mais soyez fou et essayez sur un projet perso, c’est assez bluffant).

Envie de créer des manifests avec un plugin kubectl qui s’appuie sur Openai ? Utilisez  [Kubectl-ai](https://github.com/sozercan/kubectl-ai)  ! Attendez c’est pas fini, on ne vous a pas encore parlé de l'extension [ChatGPT](https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf)  qui s’insère dans vos recherches Google ou de ce template qui permet de se servir de  [ChatGPT dans Google Doc](https://github.com/cesarhuret/docGPT)  ! Vous utilisez VS Code (on ne vous jugera pas promis), alors utilisez cette extension qui vous permet de requêter l’API non officielle de ChatGPT à travers votre IDE favori. Je sais que vous êtes des gens bien et vous avez donc noté que Github intègre désormais le modèle  [ChatGPT-4 à Copilot](https://github.com/features/preview/copilot-x)  ? “_With Copilot X we’re laying out our future vision of Copilot, which means AI is at every step of the developer lifecycle_,”  [dixit le CEO de Github](https://www.theverge.com/2023/3/22/23651456/github-copilot-x-gpt-4-code-chat-voice-support), rien que ça.

Allez on arrête là avant de faire une indigestion d’IA, mais si vous voulez aller plus loin (n’oubliez jamais, sky is the limit) foncez sur  [ShowGPT](https://showgpt.co/), un site web qui va vous permettre d’utiliser quelques prompts bien sympas et d’en soumettre. Encore un peu vide, ça commence à pas mal s’étoffer. Et attendez, ne partez pas, avec  [ce client ChatGPT](https://github.com/0xacx/chatGPT-shell-cli)  vous allez pouvoir requêter ChatGPT et DALL-E dans votre terminal si vous êtes prêts à y  [mettre le prix](https://medium.com/sopmac-labs/gpt-4-api-pricing-analysis-a507a4bf9829)  bien sûr, à moins que vous n’attendiez un  [ChatGPT open-source](https://news.itsfoss.com/open-source-chatgpt/)  vu que OpenAI  [estime s’être trompé en proposant un modèle open-source](https://www.lunasec.io/docs/blog/openai-not-so-open/).

**Cybersec**

C’est au tour du célèbre constructeur de voitures rouges qui vont vite de  [se faire torpiller par un ransomware](https://www.securitymagazine.com/articles/99097-ransomware-attack-exposed-ferrari-customer-data). Confirmé directement par son CEO via une lettre à destination des clients,  _“We regret to inform you of a cyber incident at Ferrari, where a threat actor was able to access a limited number of systems in our IT environment”_, la société refuse de payer quoi que ce soit, certaines données des clients vont donc se retrouver sur la place publique. On a encore aucune idée si ce ransomware a quelque chose à voir avec la  [faille exploitée par le groupe RansomEXX en Octobre](https://www.usine-digitale.fr/article/ferrari-victime-d-une-cyberattaque-des-documents-internes-publies-en-ligne.N2050677), mais une chose est sûre, c’est que  [petits](https://www.lemagit.fr/actualites/252528725/Cyberattaques-lenseignement-superieur-en-etat-dalerte-malgre-les-vacances) ou  [grands](https://heimdalsecurity.com/blog/vice-society-ransomware-gang-strikes-again/), nous sommes tous la cible de cyberattaques, et que la France se classe au 5e rang mondial des attaques par ransomware d’après un [rapport d’Outpost24](https://outpost24.com/fr).

![](https://storage.mlcdn.com/account_image/325165/GC2qBYkTZbJ65XnLYvHCkEA09Qx3ItV6EPlLYGd6.png)

Il faut dire que chez les piratins, on ne connaît pas la crise : des groupes comme  [Vice Society](https://www.malwarebytes.com/blog/business/2023/01/5-facts-about-vice-society-the-ransomware-group-wreaking-havoc-on-k-12-schools)  ou  [Lockbit](https://www.usine-digitale.fr/article/le-specialiste-des-transactions-financieres-ion-group-victime-d-une-cyberattaque-de-lockbit.N2101526) sont en pleine croissance et font un nombre considérable de victimes, notamment dans le secteur de l’éducation avec déjà 23 attaques recensées au mois de Janvier, et les données de 9 écoles publiées sur le site de Vice Society. Pour rappel, c’est plus de 70% des entreprises qui ont été touchées par des ransomwares en 2022 d’après le rapport “[2023 State of Malware](https://go.malwarebytes.com/rs/805-USG-300/images/MWB_State_of_Malware_Report_2023.pdf)” de la société Malwarebytes. Et si vous aimez les chiffres claqués au sol comme disent les jeunes, c’est pas moins de 22500 nouvelles failles et vulnérabilités qui ont été ajoutées à la base de données CVE en 2022, soit 10% de plus que l’année précédente.

Vous reprendrez bien un peu de ChatGPT ? On vous a parlé de ce poc à base de nmap qui vous permet de créer des  [rapports de vulnérabilité](https://www.kitploit.com/2023/03/gptvuln-analyzer-uses-chatgpt-api-and.html)  plus que pertinents ?

Mais dis-moi Jamy, comment puis-je installer Kali, la distribution Linux orientée sécurité offensive et défensive ? Rien de plus simple Fred, il suffit de lire  [ce petit guide plutôt bien fichu](https://www.hackingarticles.in/multiple-ways-to-install-kali/)  qui vous prendra par la main pour installer Kali sur plein de plateformes, comme AWS, Raspberry, ou même votre frigo. Vous n’avez maintenant plus d’excuses pour ne pas essayer cette chouette distribution qui rend service tous les jours.

Lassé d’utiliser toujours le même scan de vulnérabilité ? Pourquoi ne pas se laisser tenter par  [Whatweb](https://kalilinuxtutorials.com/whatweb/), qui est vraiment simple à prendre en main et nativement intégré à Kali, ou encore  [Nikto](https://www.freecodecamp.org/news/an-introduction-to-web-server-scanning-with-nikto/) qui vous permettra d’aller encore un poil plus loin ? Sinon histoire d’avoir une vue bien générale, vous pouvez essayer le  [Coudflare Radar URL](https://radar.cloudflare.com/scan)  qui  [vient de sortir en bêta](https://blog.cloudflare.com/radar-url-scanner-early-access/)  et vous donnera déjà une tonne d’informations à exploiter.

Après avoir découvert que leur clé privée RSA SSH avait été brièvement exposée dans un dépôt public,  [Github a changé sa clef RSA SSH](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/).  _"This week, we discovered that GitHub.com’s RSA SSH private key was briefly exposed in a public GitHub repository. We immediately acted to contain the exposure and began investigating to understand the root cause and impact"._  Circulez y’a rien à voir.  

**Du côté des ops**

Le monde se divise en deux catégories de personnes : ceux qui pensent que YAML (Yet Another Markup Language) est une abomination contre nature dont seul le feu peut venir à bout, et ceux qui s’en servent tous les jours avec enthousiasme. Vous n’y avez jamais touché (ça viendra, faites-moi confiance, personne ne sera préservé du YAML Iä Iä Shub-Niggurath) et avez envie d’avoir un aperçu des possibilités offertes ? Consultez ce  [post des outlaws de chez Cloudbees](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)  qui constitue une bonne introduction à YAML, ou l’entrée vers le royaume des ténèbres, c’est vous qui voyez.

Rien à voir avec nos métiers, mais en fait si un peu quand même. On a tous ce manager un peu relou qui nous inflige des réunions sans valeur d’où nous ressortons encore plus perdu qu’avant d’y entrer. Plutôt que de jouer la  [provocation](https://www.zazzle.com/i_survived_another_meeting_that_should_have_been_a_t_shirt-235572301833323582), éduquons-le et faisons-lui lire ce  [merveilleux post de Jean-Marc Charles](https://medium.com/@chomb/comment-rendre-vos-meeting-int%C3%A9ressants-ou-vous-en-passer-b5838e82c1b8)  de chez Hokla, alias Chomb, qu’on remercie chaudement !  

Alors que certains parlent de la  [trinité devops](https://dzone.com/articles/what-is-devops-4)  (People & Culture, Process & Practice, Tools & Technology), John Willis lui préfère parler de  [CAMS](https://medium.com/@seanguthrie/devops-principles-the-cams-model-9687591ca37a), les quatre piliers qui soutiennent Devops (Culture, Automation, Measurement, Sharing). C’est en train d’évoluer depuis quelques temps et maintenant on préfère parler de CALMS (oui il y a un L en plus, pour Leans). C’est le SRE David Jacobs qui en parle  [dans un post qui vulgarise bien](https://medium.com/@davidjacobs522/the-calms-model-84784994ee25)  tout ça, et on ne peut qu’être d’accord avec lui.  

**Clouderies**

Amazon a soufflé les bougies pour les  [17 ans de leur service Simple Storage Service](https://aws.amazon.com/fr/blogs/aws/celebrate-amazon-s3s-17th-birthday-at-aws-pi-day-2023/)  (S3). On y apprend pour l’occasion qu’en 2023 S3 héberge 280 billions d'objets et se tape en moyenne plus de 100 millions de requêtes par seconde, soit autant que le site rudeops.com dans trente ans.

Ils bougent encore

Hey vous avez vu,  [Dragonfly est passé en version 1.0](https://github.com/dragonflydb/dragonfly/releases/tag/v1.0.0)  ! Pour les deux au fond qui dorment, Dragonfly est un data-store key/value chargé en mémoire (comme Memcache ou Redis) avec des temps de réponse complètement fous.

C’est aussi  [OpenSSH qui se met à jour à travers sa version 9.3](https://www.openssh.com/txt/release-9.3), on y apprend entre autres bugs fix obscurs que cette version inclut la possibilité de "_“accept -Ohashalg=sha1|sha256 when outputting SSHFP fingerprints to allow algorithm selection“_".
Aucune idée de ce que ça signifie mais ça a l’air important, quel métier merveilleux.

**Marcel et son orchestre**

On ne va pas se mentir, nous ce qu’on aime c’est mettre en place des microservices à base d’images docker archi compactes, fiables et sécurisées. Et si vous n’avez aucune idée de comment faire, voici  [un excellent post](https://medium.com/vantageai/how-to-make-your-python-docker-images-secure-fast-small-b3a6870373a0)  qui va tout vous expliquer. C’est vraiment super riche, avec un use-case à la portée des plus profanes d’entre nous, à lire et à bookmaker !

Et en parlant de Docker, on a de plus en plus de mal à comprendre la stratégie de la baleine bleue qui se transforme en requin. C’est dans un email adressé à ces utilisateurs qu’elle a annoncé  [fermer ses free plans](https://blog.alexellis.io/docker-is-deleting-open-source-images/)  à la date fatidique du 14 Avril 2023, merci de passer sur un plan payant, bisous ! Alors forcément  [ça fait réagir](https://blog.alexellis.io/docker-is-deleting-open-source-images/), et c’est  [Github qui se frotte les mains](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry). Docker, à fond pour l’Open Source, mais pas trop.

On vous parlait de  [Gitops](https://join.rudeops.com/emails/webview/325165/82716504434410942) la dernière fois, mais c’est toujours compliqué de se poser les bonnes questions pour savoir par où commencer. Les coyotes de chez DZone ont rédigé un post qui structure l’approche à adopter sur l’implémentation de Gitops dans votre organisation, avec un focus sur la gestion de vos artefacts dans vos repos et les bonnes pratiques associées.[Ça se lit ICI](https://dzone.com/articles/source-code-management-for-gitops-and-cicd)  en sirotant la boisson de votre choix. Et si vous n’y comprenez toujours rien à ce qu’apporte Gitops, lisez ce post de  [John Dietz](https://thenewstack.io/i-need-to-talk-to-you-about-kubernetes-gitops/)  très détaillé sur les prérequis et les contraintes apportées par ce set de bonnes pratiques.

**J'aime lire**

##### Cloud Native DevOps with Kubernetes

Kubernetes est une usine à gaz, c’est sacrément dur de s’y mettre, et même si la courbe de progression est gratifiante, c’est un peu comme manger du verre pilé en riant.

Heureusement, John Arunde[l](https://www.amazon.fr/John-Arundel/e/B00BZWK2JQ/ref=aufs_dp_fta_dsk)  et son compère Justin Domingus  [ont sorti cette bible](https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/)  qui vous donne les clefs, de manière très pragmatique et à portée de tout le monde, afin de vous familiariser et prendre en main vos premiers clusters, quel que soit votre environnement (cloud based, on premise…).

Ca se lit rapidement, c’est bourré d'exemples et de réflexions pertinentes, et vous n’aurez plus aucune excuse pour conserver vos clusters swarm ou manger du verre pilé.