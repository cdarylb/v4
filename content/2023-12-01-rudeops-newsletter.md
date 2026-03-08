---
layout: post
title: Newsletter du 01 Décembre 2023
subtitle: La newsletter du petit-déjeuner
thumbnail-img: /assets/img/Alain-anssi.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, eBPF, Docker, Hashicorps, ANSSI]
comments: true
mathjax: true
author: RudeOps
---

_“Mauvais équilibre, mauvais karaté Daniel-San” nous enseignait Maître Miyagi dans Karaté Kid. Et c’est exactement ce qu’on pourrait dire de nos jours. On perd notre équilibre, entre les modèles commerciaux et le monde de l’open source par exemple, mais aussi entre le public et le privé. Dans un monde où la pieuvre de Redmond fait partie des plus gros contributeurs open-source et où c’est Xavier Niel qui se substitue, à travers l'initiative Kyutai, à un état défaillant, il serait temps de retrouver un centre de gravité sain, avec une vision adaptée aux enjeux de demain et une vraie stratégie autour du numérique._

_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/einN7ZhLaqd0K80FTJWNQS49fb8uTD0O82bbnMiy.png)

## Nos lecteurs ont du talent

On remercie une fois de plus le mystérieux JMB qui cette fois-ci nous fait découvrir  [Kaniko](https://github.com/GoogleContainerTools/kaniko), un chouette projet permettant de construire des images Docker pour vos projets. Le principe semble simple sur le papier,  [Kaniko reprenant vos Dockerfile et vos contextes afin de reproduire votre projet](https://itnext.io/building-docker-images-with-kaniko-6859bdb893f6) sans passer par un docker build et sans nécessité d’utiliser le démon Docker dans le conteneur de construction. Merci pour ce partage JMB !

On a aussi Elodie NG, devops engineer pour le compte d’une grosse ESN française, qui elle nous partage un article passionnant sur  [l’utilisation de Open ID Connect (OIDC) en tant que mécanisme d'authentification](https://hedrange.com/2023/10/07/adopt-open-id-connect-oidc-in-terraform-for-secure-multi-account-ci-cd-to-aws), afin de durcir notre sécurité dans les pipelines CI/CD pour déployer une infrastructure basée sur Terraform chez AWS. Passionnant, on y évoquera bien entendu pour un tel sujet l’IAM, la mise en place d’un IDP, Github actions et bien entendu Terraform. Merci Elodie pour ce partage, on a adoré !  

Vous aimez ce qu'on fait avec nos petits doigts boudinés ? N'hésitez pas à [nous offrir un café](https://www.buymeacoffee.com/rudeops), et si vous souhaitez partager un peu de votre veille avec nous, ne soyez pas timide et envoyez-nous un email à [contact@rudeops.com](mailto:contact@rudeops.com) !

![](https://storage.mlcdn.com/account_image/325165/X2wM5qygcrwCtzjgz60sCoEUZKlBO8tDxSZdWVn4.png)

## Le terrarium de Hashicorp

Même si on est un peu déçu du move des cowboys de chez Hashicorps  [vers une licence BSL](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)  (qui a conduit à la création de  [OpenTofu](https://opentofu.org/)), force est de constater que Terraform est sans doute l’outil le plus puissant pour faire de l’IAC dans des environnements très différents. Mais voilà, c’est inévitable, votre infra évolue, se complexifie, et à la fin vous n’avez qu’une envie : tronçonner tout ce merdier le plus salement possible. Avant d’arriver à cette extrémité ou de vous reconvertir comme éleveur de hamsters à Montargis, on vous a sélectionné quelques modules natifs et externes qui vont vous permettre de gagner un temps dingue et un peu plus de sérénité sur la gestion de votre IAC.

On commence avec une dinguerie comme disent les jeunes d’aujourd’hui avec  [TFLint](https://github.com/terraform-linters/tflint), un framework Terraform incroyablement pratique qui vous permet de  [vérifier votre code en fonction d'un ensemble de règles prédéfinies ou de règles personnalisées](https://spacelift.io/blog/what-is-tflint)  ajoutées à l'aide de plugins. Ça va vous permettre de facilement highlighter vos erreurs de syntaxe, vos déclarations non utilisées, et vous permettre d’appliquer une meilleure convention de nommage. Un must have à utiliser dès le début dont on ne peut plus se passer.

On vous en a déjà parlé, mais ça fera de la pige facile : intégrez  [Terrascan](https://runterrascan.io/) dès le début de vos développements pour éviter les bêtes erreurs de sécurité.  [C’est facile à utiliser](https://runterrascan.io/docs/policies/policies/), ça s’utilise dans de nombreux contextes, et ça vous permettra de bénéficier d’une jolie ceinture de sécurité face à un RSSI parano. A noter que les vrais bonhommes eux utilisent  [Checkov](https://www.checkov.io/) qui fait plus ou moins la même chose [entièrement avec Python](https://devopscube.com/terraform-checkov-scan/).

![](https://storage.mlcdn.com/account_image/325165/l6vFXaLqb8oQ8ClgftxN6ZOTduXfp6ERcvEjtv5D.png)

Plus petit vous rêviez de faire de la comptabilité et de jongler avec les chiffres comme un CFO sous stéroïdes ? Tout n’est pas perdu grâce à  [Infracost](https://www.infracost.io/), un outil de fifou  [capable de vous afficher un pricing](https://semaphoreci.com/blog/infracost)  basé sur ce que vous prévoyez de déployer en tapant les APIS de votre cloud provider. Mais ça peut aller encore plus loin dans le délire en utilisant  [Open Policy Agent](https://www.openpolicyagent.org/)  par exemple, pour mettre en place des process qui peuvent autoriser ou non un déploiement en fonction du coût, en l’intégrant dans une CI/CD quelconque. Elle est pas belle la vie ?

On se rend compte qu’on a failli oublier de vous parler de  [Pike](https://github.com/JamesWoolfenden/pike), un chouette outil qui permet de déterminer les permissions minimales requises pour exécuter une opération TF/IAC. C’est archi simple et ça peut vous faire gagner un temps de malade dans la gestion de votre IAM.

Côté documentation on préfèrera utiliser  [Terraform-Docs](https://github.com/terraform-docs/terraform-docs)  qui générera votre doc Terraform à partir des fichiers de configuration. Extrêmement utile et simple à utiliser pour créer une documentation (plusieurs formats de sortie sont disponibles, MD, HTML, JSON, etc…) montrant exactement ce que vos utilisateurs doivent savoir, il expose des variables que vous pouvez ajouter à un template, et générera automatiquement les sections pour vous dans un format convivial qui ravira les petits et les grands.

On va terminer ce tour d’horizon avec  [Terragrunt](https://terragrunt.gruntwork.io/), qui aide à garder votre code Terraform dry comme on dit chez les cowboys, et qui sait gérer plusieurs stacks ce qui est sa grande force.Terragrunt vous facilitera le travail si vous évoluez dans un environnement multi cloud et vous garantira une grande souplesse  [grâce à des hooks et tout un tas de modules géniaux](https://spacelift.io/blog/terragrunt).

Et bien sûr on ne le répètera jamais assez : assurez-vous d’avoir les bonnes personnes et les bons process  [avant d’utiliser tous ces outils](https://www.smartsheet.com/content/people-process-technology). Et la prochaine fois on vous causera de Ansible qui lui aussi est un outil génial et qui a un écosystème tout aussi riche que celui de Terraform.

  

**Du côté des ops**

Les coyotes de chez Gscore doivent avoir un peu de temps à perdre car ils se sont mis en tête de  [mesurer les performances d’un cluster K8s sur du bare metal et de la VM](https://thenewstack.io/does-kubernetes-really-perform-better-on-bare-metal-vs-vms/). Alors de base on se dit que ce genre de tests n’a aucun intérêts car biaisés dès le départ, hé bien en fait pas tant que ça, et même si ça ne colle pas vraiment à un vrai contexte de production le travail fait pour mesurer tout ça est une masterclass comme on dit à Montargis et les conclusions bien développées. A lire donc.

[Le shell n’est pas mort](https://itnext.io/why-you-should-still-write-shell-scripts-0a24e9174ee5), c’est en tout cas ce qu’a l’air de penser  [Anthony Critelli](https://acritelli.medium.com/?source=post_page-----0a24e9174ee5--------------------------------)  et il nous détaille son point de vue en cinq points bien argumentés.

En parlant de trucs pas tout à fait mort et qui bougent encore (comme le parti socialiste ou la licence star wars) on vous conseille de lire le tuto de notre copain Nick Janetakis qui nous explique  [comment installer la dernière version de docker-compose](https://nickjanetakis.com/blog/install-the-latest-version-of-docker-compose-v2)  (soit la V2, la V1 n’étant plus supportée).

On a adoré ce post qui nous fait une  [analyse comparative sur les différentes approches pour choisir une stratégie de gestion de nos branches git](https://medium.com/@sreekanth.thummala/choosing-the-right-git-branching-strategy-a-comparative-analysis-f5e635443423). Alors forcément ça va dépendre du projet mais c’est toujours bien de voir les différents designs possibles qui existent. Ici on abordera les grands classiques que sont Git-Flow, GitHub-Flow, GitLab-Flow, et le trunk based development, avec les contraintes et prérequis associés.  

**Le coin des paranos**

L'ANSSI, notre gendarme des télécoms en France, a ouvert  [une antenne à Rennes pour renforcer sa présence hors de Paris](https://cyber.gouv.fr/actualites/lanssi-inaugure-sa-nouvelle-antenne-rennes), axée sur la détection des menaces cybers en collaboration avec des acteurs locaux. Prévoyant d'assister jusqu'à 10 000 entités contre les cyberattaques, le site de Rennes accueillera principalement des équipes de détection, tandis que les réponses aux incidents resteront à Paris. Environ 50 agents parisiens sont déjà présents, avec un objectif de 190 personnes à recruter sur place.  

![](https://storage.mlcdn.com/account_image/325165/mzwVBTkeeM4rJiQcIIFlbpl4Q1qQs18NqjobUwDx.png)

Le pied-de-biche est une arme de corps à corps emblématique et l'arme signature de Gordon Freeman dans le jeu vidéo Half Life (qui vient de fêter ses 25 ans). Mais  [crowbar](https://github.com/galkan/crowbar) (anciennement Levye) c’est aussi un super outil pour faire du brute force sur certains protocoles d'une manière un poil différente des outils habituels : alors que la plupart des outils de brute force utilisent un username et un mot de passe, Crowbar utilise des clés SSH, ce qui permet d'utiliser les clés privées obtenues lors de tests de pentesting pour attaquer d'autres serveurs SSH. Malinx non ?

On a bien aimé le papier des punks de chez thenewstack qui pose les bases pour  [faire du pentesting avec Burp Suite sur Kali](https://thenewstack.io/pentest-your-web-apps-with-burp-suite-on-kali-linux/). Bon, on est plus  [team ZAP](https://www.zaproxy.org/)  mais le papier est bien rédigé comme d’habitude et nous prend par la main pour devenir un vrai petit devsecops en herbe. On aurait aimé aller plus loin dans le détail à travers quelques use-cases et même si on ne fait qu'effleurer le sujet ça reste une chouette porte d’entrée sur le sujet.  
  
L'intégration des pratiques de sécurité dans le process de développement a donné naissance au concept de  [DevSecOps](https://www.redhat.com/en/topics/devops/what-is-devsecops), une méthodologie qui accorde la priorité à la sécurité dès le départ plutôt que de la considérer comme une réflexion après-coup. Aujourd’hui c’est au tour des cowboys de chez Dzone de nous faire un topo sur  [comment intégrer la sécurité dans notre process de développement](https://dzone.com/articles/unlocking-the-secrets-of-devsecops-the-essential-l)  en nous partageant leur vision sur les principes clef et les étapes du cycle de vie d’une méthodologie DevSecOps.

**J'aime lire**

![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)

##### Time Management for System Administrators

## Stop Working Late and Start Working Smart

On est tombé sur ce livre un peu par hasard.  [Publié par les hipsters de chez O’Reilly](https://www.oreilly.com/library/view/time-management-for/0596007833/), et malgré quelques réflexions un peu datées (le bouquin est sorti en… 2005), on a pris pas mal de plaisir à le parcourir parce que certaines choses ne changent pas.

On y aborde par exemple l'aspect crucial de la gestion du temps dans les opérations DevOps avec des stratégies pratiques, notamment sur la réduction de context switching, le développement de routines, la priorisation des tâches, etc. C’est un peu un livre d’hygiène de vie quand on est sysadmin dans une boîte avec plein de conseils visant à éliminer les pertes de temps et à automatiser des process.  

C'est le cadeau de Noël idéal si vous avez un alternant, il vous remerciera.