---
layout: post
title: Newsletter du 02 Mai 2023
tags: [devops, Github, secops]
---


*Un grand scientifique avait coutume de dire que “Là où on va on n’a pas besoin de route Marty” avant d’éclater d’un rire dément et de démarrer en trombe à bord de sa DeLorean. C’est un peu le contraire dans la culture DevOps : on a un grand besoin de belles routes, de pistes à peine empruntées parfois, de sentiers sinueux… Et pour les suivre, il nous faut des trajectoires, des jalons, et quelques panneaux pour nous guider sur des chemins pas toujours évidents à suivre. Et c’est justement de cela dont nous allons discuter aujourd’hui pour ouvrir cette quatrième édition de la newsletter, bonne lecture à tous !_
_Cyril_*  
  
  

![](https://storage.mlcdn.com/account_image/325165/1ZpZlI9wTqe1L8YIbcvXBNomd5BDwFQBfD72ru1g.png)

## Devops - The Three Ways

Gene Kim est l'une des principales têtes pensantes de DevOps, et il est l'auteur de plusieurs livres sur le sujet, notamment "The Phoenix Project" dont on parlera un peu plus bas et "The DevOps Handbook" dont on vous a déjà parlé.  [Selon Gene Kim, il existe trois chemins DevOps qui peuvent être empruntés](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/)  pour améliorer l'efficacité et la rentabilité de l'entreprise (oui, ça fait un choc dit comme ça mais DevOps est centré sur un système archi capitaliste) : bref, il s’agit du flow, du feedback et de l'apprentissage continu.  

**The First Way: Flow/Systems Thinking**

Le premier chemin DevOps consiste à identifier les goulots d'étranglement dans le process de développement et de déploiement, et à les éliminer le plus vite possible afin d’accélérer le flow de travail. C’est le chemin qui met l'accent sur l'automatisation des process de développement, des tests et du déploiement, ainsi que sur la mesure continue des performances pour identifier les problèmes et les améliorer : rien ne doit perturber [la création de valeur de cette chaîne](https://linearb.io/blog/value-stream-mapping-devops/), et l’unique priorité est d’éliminer toutes les aspérités avant un déploiement. Simple, basique.

**The Second Way: Amplify Feedback Loops**

Le deuxième chemin se concentre sur la communication et la collaboration entre les différentes équipes impliquées dans le développement et les mises en production. Il met l'accent sur la  [création d'une culture de collaboration](https://medium.com/@antweiss/understanding-feedback-loops-in-devops-e93b92b74bd1), de confiance et de partage de connaissances pour assurer que tous les membres de l'équipe travaillent ensemble de manière efficace. Le feedback est basé sur le principe que  [les devs doivent être en mesure de comprendre comment leur travail affecte les utilisateurs finaux](https://beautytmr.com/five-benefits-of-making-your-developers-talk-with-your-end-users-8a73b3ffe1f7), ce qui paraît évident dit comme ça mais est loin d’être acquis en général.  [Les équipes de développement et d'exploitation doivent travailler ensemble](https://www.devopsdigest.com/dev-and-ops-collaborate-1)  pour s'assurer que les commentaires des utilisateurs sont pris en compte et que des mesures sont prises pour améliorer le produit.

**The Third Way: Culture of Continual Experimentation and Learning**

Le chemin de l'apprentissage continu (oui en français ça fait moins rêver forcément) de DevOps consiste à  [améliorer constamment le process de développement et de déploiement](https://devops.com/learning-the-third-way-of-devops-continuous-improvement/)  en utilisant des données pour guider les décisions. ça inclut des mesures de perf pour suivre la qualité et la vitesse du process, ainsi que des données sur les problèmes de production pour guider les améliorations futures. L'apprentissage continu DevOps est basé sur un principe simple : les devs doivent être en mesure de comprendre les causes profondes des problèmes de production et de les résoudre rapidement. Les équipes de dév et d'exploitation doivent travailler ensemble pour identifier les opportunités d'amélioration et mettre en place des mesures pour y parvenir.

En combinant ces trois chemins DevOps - le flow, le feedback et l'apprentissage continu -  [les organisations peuvent améliorer considérablement leur efficacité](https://www.freshworks.com/freshservice/itsm/phoenix-project-three-ways-devops-blog/)  et leur rentabilité en matière de développement et de delivery. Les devs et les ops travailleront ensemble pour identifier les problèmes et les résoudre rapidement, ce qui réduira le temps de déploiement, améliorera la qualité du produit, augmentera la satisfaction des clients et par la même occasion votre prime de fin d’année.

En conclusion, il y a un point commun qui émerge de tout ça : c’est la collaboration entre les équipes avec des objectifs partagés. Un peu comme si on n’avait pas tous le même maillot, mais qu'on faisait partie de la même équipe, ou quelque chose du genre…  

## Marcel et son orchestre

Lorsqu’on demande quel orchestrateur utiliser en 2023, la réponse est aussi triste qu’unanime : Kubernetes, qui est loin devant Swarm (en train de mourir après le rachat de Mirantis), Nomad ou Rancher, et qui remporte tous les suffrages, avec une préférence sur un mode PaaS à travers GKE ou AKS. Même les coyotes de Scaleway ont leur Paas pour faire du K8s maintenant c’est dire.

Et là où ça peut coincer, c’est que les solutions à base de K8s demandent pas mal d’efforts afin d’être sécurisées aux petits oignons et d’avoir un joli tampon vert apposé par le RSSI sur votre projet. Il y a d'ailleurs ce rapport de la société d’assurances NCC qui vient de rendre publique  [une évaluation de sécurité de K8s](https://research.nccgroup.com/2023/04/17/public-report-kubernetes-1-24-security-audit/), on y retrouve la méthodologie employée et comment ils ont mené l’audit, c’est un document vraiment très riche qui fournit pas mal de pistes (certaines très basiques et obvious) sur la sécurisation de votre orchestrateur favori.

Dans la même veine, les techs de chez Teleport donnent quelques best practices sur comment réduire votre surface d’attaque sur K8s,  [ça se lit ici](https://goteleport.com/blog/how-to-hack-kubernetes/), et c’est à mettre en parallèle avec cette série de posts -arides mais qui ouvrent de sacrés horizons- sur du “[Forensic container checkpointing](https://kubernetes.io/blog/2023/03/10/forensic-container-analysis/)”. Sans doute plus proches de nos préoccupations, on a trouvé cet article des outlaws de chez Wescale qui nous partage  [deux visions du GitOps sur Kubernetes](https://blog.wescale.fr/flux-et-argocd-deux-visions-du-gitops-sur-kubernetes), à travers Flux et ArgoCD, et c’est passionnant à lire, merci à eux ! Il y a aussi les cowboys de chez Padok qui proposent une solution de migration de vos  [Docker-Compose vers K8s avec Kompose](https://www.padok.fr/blog/migration-kubernetes-kompose), c’est vraiment chouette pour se familiariser avec Kubernetes en mode POC, même si vous tomberez sur des limitations avec Kompose qui sont décrites dans le post.

Allez, on va en rester là et vous rappeler que s’orienter vers K8s n’est pas la solution ultime, et qu’il ne faut pas négliger les besoins réels de votre organisation (non, mettre votre blog perso sur un cluster Kubernetes n’est pas raisonnable).  

![](https://storage.mlcdn.com/account_image/325165/JTq8ZXUd64cDPRpTEYzekQWFj1twB15vF0fqgCbX.png)

## Le monde merveilleux du DevOps

Le mois de Mai est arrivé, et on ne peut s’empêcher de penser que  [le monde irait bien mieux si on arrivait à éradiquer YAML par le feu](https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell)  une bonne fois pour toute, et on n'est pas les seuls à le penser d’ailleurs.

Si vous aviez le choix entre vous enfoncer des clous rouillés sous les ongles ou faire du devops, vous vous rendriez compte qu’en fait c’est la même chose. C’est à travers ce gros post de Bibin Wilson, un tech de chez DevopsCube, que ce dernier  [récapitule l’outillage nécessaire et les méthodologies à maîtriser](https://devopscube.com/become-devops-engineer/)  pour “être un vrai bonhomme” comme on dit dans les quartiers chauds de Montargis. Et c’est là qu’on se rend compte à quel point notre métier est tellement complexe qu’il nous empêche de faire la différence entre le plaisir et la souffrance.

C’est vrai qu’aggréger et standardiser des logs d’events ça peut vite tourner au casse-tête, et c’est donc fort logiquement qu’un mec de chez Sematext  [nous donne quelques pistes et quelques outils](https://sematext.com/blog/log-aggregation/)  pour faire au mieux. A lire avant la mise en place de votre prochain puis de logs.

Il est acquis que  [GitHub Copilot et d’autres solutions à base d’IA](https://medium.com/sopra-steria-norge/github-copilot-vs-amazon-codewhisperer-327c1e358d26), peuvent comprendre et générer du code dans des dizaines de langages de programmation. Il est aussi acquis que ça peut générer des failles de sécurité et des contextes non respectés. Et c’est Paul Foryt de chez Styra qui nous en parle dans son article intitulé  [AI-Generated Infrastructure-as-Code: The Good, the Bad and the Ugly](https://www.styra.com/blog/ai-generated-infrastructure-as-code-the-good-the-bad-and-the-ugly/), à lire sans retenue pour avoir un beau panorama d’où nous en sommes en 2023 et bien comprendre que nous n’en sommes qu’aux balbutiements.  

## Un peu de sécu

Un post de David das Neves nous montre à quel point les systèmes d’information à travers le cloud  [se complexifient et mènent à une flopée d’incidents de sécurité](https://www.linkedin.com/pulse/cloud-burning-brightly-david-das-neves/). Quelques pistes sont évoquées, comme la mise en place de standards et une automatisation poussée au maximum. A garder sous le coude.

Nmap, qui est sans doute un de nos outils favoris, permet d’aller loin, voire même très loin dans l’analyse de votre réseau. Et aujourd’hui c’est Jose Vicente Nunez  [qui nous propose un tuto complètement fou](https://www.freecodecamp.org/news/enhance-nmap-with-python/)  qui va nous apprendre en vrac à comment analyser un fichier de résultats XML et à l'enrichir avec des avis de sécurité provenant de NIST, comment combiner Nmap avec d'autres scripts pour automatiser son exécution ou encore comment utiliser les bonnes options pour accélérer le scan de notre réseau.

En vrac

Ha ce post-it indique que je dois vous parler de deux applications, ça m’arrange c’est de la pige facile. La première se nomme Killport et vous permet, comme son nom l’indique, de  [tuer un process qui écoute sur un port spécifique](https://github.com/jkfran/killport). Alors pourquoi pas, ne jugeons pas, ça peut toujours être utile et c’est écrit en Rust. La deuxième appli dont je dois vous parler est  [Kube-Reqsizer](https://github.com/jatalocks/kube-reqsizer), un controller Kubernetes, qui vous permet de mesurer et mieux contrôler l’usage de vos pods, une alternative au très apprécié  [vertical-pod-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler).