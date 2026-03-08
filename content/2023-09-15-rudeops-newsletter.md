---
layout: post
title: Newsletter du 15 Septembre 2023
subtitle: Traque sur Internet	
thumbnail-img: /assets/img/lettre.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, kubernetes, cybersec]
comments: true
mathjax: true
author: RudeOps
---

_“Ma devise, c'est : il faut se recréer, pour recréer !” nous partageait Jean-Claude Van Damme, ce grand philosophe des années 90 féru d’arts martiaux. Et force est de constater qu’il a entièrement raison le bougre : nos métiers nous incitent à un changement permanent, perpétuel, et nécessitent une capacité d’adaptation élevée pour faire face à un écosystème de plus en plus complexe et mouvant, et ça c’est tout à fait dans le paradigme DevOps ! Alors merci Jean-Claude de nous indiquer la voie à suivre._  
_Cyril_  

![](https://storage.mlcdn.com/account_image/325165/6gfpFKWwzuPlAg7h7CX6uO0vgrKitP8PvJHaCUoa.png)

## Nos lecteurs ont du talent

Aujourd’hui, c’est Clément D, engineering manager dans une belle boîte de sécu française, qui nous partage un très bon article sur un use case bien précis : générer des logs à des fins d’audit à travers  [Infisical](https://github.com/Infisical/infisical) qu’on ne connaissait pas et qui semble se positionner comme un concurrent open source de Vault.  [Ca se lit ici](https://medium.com/@tony.infisical/guide-to-building-audit-logs-for-application-software-b0083bb58604) et on remercie chaudement Clément pour cette belle découverte !

  
Et on continue avec Julien A. qui lui répond à l’angoissante question : faut-il utiliser apt ou apt-get pour être un vrai cowboy ?  [Ça se lit en deux minutes ici](https://medium.com/@mobolaji___/difference-between-apt-and-apt-get-in-linux-71108bdd35f2) en insistant bien sur les différences entre les deux approches et ça vous permettra certainement de briller en société. Merci Julien pour le partage, coeur avec les doigts !

Vous aussi vous voulez avoir votre moment de gloire et dire à vos enfants que vous avez participé à enrichir RudeOps de vos bons liens avant que nous ne nous fassions racheter par Amazon ou Google ? Ne soyez pas timide et envoyez-nous un email à  [contact@rudeops.com](mailto:contact@rudeops.com)  (Un voyage aux Seychelles et une Tesla à gagner chaque semaine après tirage au sort).  

**Apéricube**

On l’a déjà dit, mais orchestrer ses ressources à travers Kubernetes équivaut à manger du verre pilé en riant, mais ça change petit à petit, l’écosystème s’adaptant et la communauté grandissant autour du projet, il devient un poil plus aisé (non) de manager la solution d'orchestration qui d’ailleurs  [vient de sortir en version 1.28](https://medium.com/@seifeddinerajhi/kubernetes-1-28-new-features-for-sidecar-containers-jobs-and-proxies-1c30315243e9), et on vous conseille  [d’écouter ce podcast qui interview Grace Nguyen](https://craigbox.substack.com/p/the-kubernetes-128-release-interview#details), release team lead du projet. Cette 1.28,  [très riche en ajout de nouvelles fonctionnalités](https://blog.wescale.fr/kubernetes-1.28-planternetes-fonctionnalit%C3%A9s-et-am%C3%A9liorations), permet enfin de faire du  [Sidecar Containers](https://kodekloud.com/blog/kubernetes-sidecar-container/), un modèle qui permet d’ajouter des fonctionnalités aux pods comme de la collecte de métriques ou la récupération de secrets. Tout ça pour ça.  

![](https://storage.mlcdn.com/account_image/325165/J4xOFekPrFjBLSlt8PILzrM5OlUoL1enAYDY59Gv.png)

Bref, sinon au cours de notre veille on est tombé sur quelques ressources bien sympa autour de Kubernetes, avec tout d’abord  [Microk8s](https://microk8s.io/), un K8s light conçu pour le déploiement en local (à ne pas confondre avec  [K9](https://k9scli.io/) ou K2000 qui est une vieille voiture qui carbure avec ChatGPT). L’article, nous propose  [un guide étape par étape](https://medium.com/@ufukhalis/an-introduction-story-what-is-microk8s-70ee9a3c9d5)  pour l'installation et le déploiement d'une application exemple et met en avant la simplicité de microk8s, sa facilité d'utilisation et sa compatibilité avec différents matériels et OS. On est aussi tombé sur  [Monokle](https://github.com/kubeshop/monokle), un outil qui aide au processus de création, d'analyse et de déploiement de configurations Kubernetes et qui fournit un GUI pour la rédaction de manifestes YAML, la validation des politiques et la gestion des clusters en direct. On terminera avec l’inévitable  [top 10 des meilleurs outils pour K8s](https://semaphoreci.medium.com/top-10-must-have-tools-for-kubernetes-engineers-71b32fd21b95), où vous trouverez des classiques mais aussi des outils qu’on aime bien, genre  [Kustomize](https://kustomize.io/). A mettre en parallèle avec le  [top ten de l’OWASP dédié à Kubernetes](https://owasp.org/www-project-kubernetes-top-ten/)  qui lui, vise à aider les paranos de la sécu et les SRE à hiérarchiser les risques liés à l'écosystème Kubernetes.  

![](https://storage.mlcdn.com/account_image/325165/2kFouYtwxLMTik8cFTftH4odoAQiHLtqxhrcQFJG.png)

##### Faites vos propres recherches

Kubernetes vient du grec et signifie littéralement “gouvernail” d’après google translate et “capitaine” selon la FAQ officielle de la firme californienne. Les sept rayons du logo de Kubernetes font référence au nom original du projet “[Project Seven of Nine](https://cloud.google.com/blog/products/containers-kubernetes/from-google-to-the-world-the-kubernetes-origin-story?hl=en)”. A la base il y avait neuf rayons symbolisant les neufs cercles de l’enfer mais l’idée a été abandonnée car jugée trop voyante et pas assez vendeuse.

**Le monde merveilleux des Ops**

Nous on adore les memes, et on a particulièrement apprécié ce  [même dédié à SQL](https://twitter.com/largedatabank/status/1559651463919452161)  posté sur le réseau social de Voldemort, mais ce qu’on a préféré dans tout ça, c’est qu’un mec, Aryan Ebrahimpour, a pris le meme au pied de la lettre et a  [fait une analyse de toutes les couches SQL décrites](https://www.avestura.dev/blog/explaining-the-postgres-meme). Ça va vraiment très loin, et c’est idéal si vous voulez creuser le sujet deeply comme on dit à Montargis.

Mais dis-moi Jamy, comment faire pour  [organiser au mieux les équipes pour la gestion des incidents](https://firehydrant.com/blog/exploring-distributed-vs-centralized-incident-command-models/)  ? C’est très simple Fred, lis d’abord cet excellent article qui examine les organisations centralisées et distribuées ainsi que leurs avantages et inconvénients respectifs, tu en tireras pas mal de pistes et de réflexions !

Vous êtes à la recherche d’une solution de monitoring pertinente pour votre organisation ? Ça tombe bien, ce post de blog nous fait une  [évaluation des solutions existantes](https://sennasemakula.medium.com/evaluating-monitoring-solutions-prometheus-thanos-mimir-victoria-metrics-6bf9f4f9d602)  avec les pros et les cons, elle est pas belle la vie ?

Vous n’avez jamais compris qui était le plus fort entre l’hippopotame et l’éléphant et vous vous posez la même question entre  [devops, devsecops et gitops](https://blog.brainboard.co/devops-devsecops-finops-dataops-mlops-gitops-lifecycle-explained-f197ce4e7126)  ? Ce blog post va vous aider à y voir plus clair et nous dresse un tableau qui récapitule les paradigmes que nous utilisons dans nos métiers sans forcément savoir les nommer. Ce qui me permet de faire une transition claquée au sol comme disent les jeunes : lisez cet article qui dresse un aperçu des  [best practices et des outils DevOps](https://itnext.io/devops-big-picture-on-premises-d07f61d6c34c)  pour les environnements on premise, ça peut aussi vous donner quelques idées.

Hey, on a bien aimé ce post des outlaws de chez Github qui nous partage  [10 tips essentiels lorsque vous utilisez Github Projects](https://github.blog/2023-08-28-10-things-you-didnt-know-you-could-do-with-github-projects/), et ça c’est vraiment cool parce que c’est vraiment bien foutu et pratique !

Vous êtes un vrai bonhomme comme on dit dans les beaux quartiers et vous voulez affirmer vos skills sur Python. Prenez votre respiration et laissez-vous guider par ce  [super guide](https://github.com/Aviah/python-dig)  qui vous propose pas mal de snippets pour votre apprentissage. C’est bien foutu, et on vous conseille d’y passer quelques minutes par jour si vous êtes déjà un utilisateur avancé. On a aussi testé  [Try](https://github.com/binpash/try), une commande qui vous permet de tester… vos commandes justement. Allez jeter un coup d’oeil c’est facile à utiliser. Ha et dernier machin rigolo, on vous conseille Xeol, un  [scanner de paquets End Of Life](https://github.com/xeol-io/xeol)  (EOL) dans vos containers ou sur vos FS.

  

**Un peu de sécurité**

![](https://storage.mlcdn.com/account_image/325165/YoBtJ253h6ad1AUIV9hdzJb08UMD1uOr1cfqlsWg.png)

##### IA pas le feu

C’est le 13 juillet dernier que SlashNext a identifié [l'émergence de WormGPT](https://slashnext.com/blog/wormgpt-the-generative-ai-tool-cybercriminals-are-using-to-launch-business-email-compromise-attacks/), un outil IA utilisé par des piratins. En moins de deux semaines, soit le 25 juillet, un autre outil basé sur l'IA nommé  [FraudGPT](https://www.lemondeinformatique.fr/actualites/lire-apres-wormgpt-les-cybercriminels-livrent-fraudgpt-91117.html) a fait son apparition sur Internet, et leur papa semble être le piratin connu sous le pseudo de  [CanadianKingpin12](https://cybernews.com/security/chatgpt-badboy-brothers-dark-web/). Après avoir fait de la pub pour ces malwares et s’être fait dégager entre autres, de Reddit et compagnie, le mec a continué son marketing sur Telegram.  
  
Au cours d'une  [enquête menée par SlashNext](https://www.binance.com/en/feed/post/895275), notre joyeux piratin a affirmé être en train de développer deux nouveaux bots aux noms ridicules : DarkBART et DarkBERT, ces derniers pouvant être connectés à Internet et intégrés à Google Lens, mais surtout, pouvant être utilisés comme de vrais frameworks facilitant la réalisation d'attaques d'ingénierie sociale, servir de framework de logiciels malveillants et concevoir des campagnes de phishing. Tout un programme…

**J'aime Lire**

![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)

##### The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data

Aujourd’hui on va vous parler de  [The Unicorn Project: A Novel about Developers, Digital Disruption, and Thriving in the Age of Data](https://itrevolution.com/product/the-unicorn-project/), la suite directe du génial "The Phoenix Project" qu’on vous conseille de lire avant si possible. Toujours écrit par notre ami Gene Kim, on y suit cette fois les aventures de Maxine, une dev dans l'équipe du projet Phoenix. Elle trouve un mentor en la personne d'Erick, qui la guide avec les cinq idéaux de la résolution de problèmes en DevOps (focus, flow, lean, etc).

Une fois encore, ça se lit tout seul et presque d’une traite et vous retrouverez pas mal de situations auxquelles nous avons tous été confrontés dans nos boulots respectifs.