---
layout: post
title: Newsletter du 03 Juillet 2023
subtitle: Richard Stallman dément formellement avoir incendié les locaux de RedHat		
thumbnail-img: /assets/img/Charlie regarde au loin.png
gh-repo: daattali/beautiful-jekyll
tags: [devops, DNS, cybersec]
comments: true
mathjax: true
author: RudeOps
---

_Il semble de plus en plus compliqué de trouver un modèle équilibré entre open-source et offre commerciale. Et on ne va pas se mentir, les principes de l’open-source sont de plus en plus mis à mal, dernier exemple en date avec RedHat qui après avoir insulté ses utilisateurs et retiré CentOs il y a deux ans a jugé utile de limiter l’accès au code source de RHEL. Quand on sait que les plus gros contributeurs à l’open source sont des GAFAM, quelque chose me dit que nous avons choisi une voie peu compatible avec les principes de liberté de redistribution et d’utilisation que nous chérissons tous._

_Cyril_  


## Nos lecteurs ont du talent

Aujourd’hui c’est Guillaume R., devops engineer dans une administration française, qui a pris sa plus belle plume pour nous partager un lien qui fait du bien puisqu’il s’agit d’un  [guide de durcissement de vos noyaux Linux](https://madaidans-insecurities.github.io/guides/linux-hardening.html)  et c’est passionnant car didactique avec beaucoup de références et facilement mis en pratique où que vous bossiez. Merci Guillaume, un pouce bleu pour toi frérot !

Il y a aussi Omar Sy (qui nous précise que c'est un homonyme) qui nous partage un joli tuto qui va parler à tout le monde puisqu’il s’agit cette fois de bien  [gérer vos confs Terraform à l’aide de Terragrunt](https://medium.com/otto-tech/infrastructure-as-code-iac-keeping-terraform-configuration-dry-with-terragrunt-bdb33bdac907), simple et basique, merci pour ce partage !

_Si vous aussi vous souhaitez nous partager un lien qui vous semble intéressant, n’hésitez pas à nous envoyer un email à  [contact@rudeops.com](mailto:contact@rudeops.com), et en plus vous serez peut-être tiré au sort pour remporter une Tesla ou un voyage dans l’espace (oui nous avons des moyens démesurés)._  

**Cybersec**

On a appris plein de choses sympa à travers ce post des intellos de l’Université de Carnegie Mellon sur  [les 12 méthodes les plus utilisées pour modéliser les menaces cyber](https://insights.sei.cmu.edu/blog/threat-modeling-12-available-methods/). C’est vraiment archi complet et on est tombé sur plein de méthodes qu’on ne connaissait pas, avec en vrac OCTAVE ([Operationally Critical Threat, Asset, and Vulnerability Evaluation](https://resources.sei.cmu.edu/library/Asset-view.cfm?assetid=51546)) qui se base sur la gestion des risques,  [les security cards](http://securitycards.cs.washington.edu/index.html), un framework de modélisation des menaces qui utilise des cartes pour représenter les menaces potentielles et les contre-mesures (oui comme le jeu de cartes Magic) ou encore  [Trike](http://www.octotrike.org/) qui se base sur une approche structurée et qui intègre des aspects techniques, opérationnels et stratégiques pour évaluer les menaces.

Le monde se divise en deux catégories de personne : ceux qui utilisent Zap propulsé par l’Owasp, et les autres qui utilisent Burp Suite, mais  [qui sommes-nous pour les juger](https://www.apisec.ai/blog/burp-suite-vs-zap)  ? Bon, après Burp c’est pas si mal que ça si on ne regarde pas les prix prohibitifs, et l’outil dispose d’une communauté assez active. Et en fouillant bien on trouve plein de trucs très sympa, comme cette  [extension qui utilise OpenAI](https://github.com/hisxo/ReconAIzer)  pour améliorer le process de reconnaissance de vos bug bounty hunters, super classe ! On est aussi tombé sur cette  [présentation de Nicolas Grégoire](https://www.agarri.fr/docs/nsec23-burp_tips_n_tricks.pdf)  qui partage quelques tips bien sympa sur l’optimisation de la performance, de l’automatisation et l’utilisation d’extensions comme  [hackvertor](https://portswigger.net/research/bypassing-wafs-and-cracking-xor-with-hackvertor) et  [piper](https://github.com/PortSwigger/piper).

![](https://storage.mlcdn.com/account_image/325165/8bZ5Iq4Yu86h0OhkYs6OG3Jb8aZW1XHjIasEniyD.png)

Comme nous sommes entre gens de bonne compagnie, on ne peut s’empêcher de vous partager ce repo sobrement intitulé  [Awesome Password Cracking](https://github.com/n0kovo/awesome-password-cracking)  qui condense une liste plutôt sexy de plein de ressources autour du hacking de mots de passe, on y trouve aussi bien des best practices, des outils (dont le génial  [maskcat](https://github.com/JakeWnuk/maskcat)) que de la méthodo autour des mots de passe.

C’est aux cowboys de Datadog qu’on doit ce  [quatrième article sur la sécurisation des containers](https://securitylabs.datadoghq.com/articles/container-security-fundamentals-part-4/), et cette fois-ci c’est pour approfondir notre compréhension des  [cgroups](https://man7.org/linux/man-pages/man7/cgroups.7.html) et étudier leur rôle dans l'attribution des ressources aux processus. L’article explore divers aspects de sécurité liés aux cgroups, comme l'utilisation de ces derniers pour atténuer les risques d'attaques par déni de service, ainsi que pour gérer l'accès des conteneurs à des périphériques spécifiques sur un hôte.

Et en parlant de Datadog, c’est aussi à eux qu’on doit, Mkat ([Managed Kubernetes Auditing Toolkit](https://github.com/DataDog/managed-kubernetes-auditing-toolkit)), une boîte à outils d'audit “tout-en-un” permettant d'identifier les problèmes de sécurité courants au sein de clusters Kubernetes. Pour le moment, il se concentre principalement sur l’EKS de AWS, mais sera étendu à d'autres environnements prochainement.  

**Le monde merveilleux des Ops**

C’est au tour d’InfoWorld de s’interroger :  [“Is it time for development and operations to be separated once again ?”](https://www.infoworld.com/article/3669477/devs-don-t-want-to-do-ops.html). Au-delà du troll évident dans lequel il convient de ne pas tomber, certaines réflexions font écho aux heures les plus sombres de l’histoire quand le DevOps n'existait pas, et ça fait du bien de mesurer tout le chemin parcouru, même si nous savons tous pertinemment que ces boulets de devs restent la grosse faiblesse du DevOps.

Et en parlant du paradigme DevOps, on vous invite à lire ce post -un peu vnr comme disent les jeunes- intitulé  [“Devops is bullshit”](https://blog.massdriver.cloud/posts/devops-is-bullshit/)  et qui propose d’enterrer DevOps et de le remplacer par heu, plus ou moins la même chose. Bon après c’est super rigolo à lire avec une belle couche de cynisme qui nous a beaucoup plu et quelques arguments qui risquent de heurter la sensibilité des plus jeunes.

D’après les punks de chez Sysdig, on apprend avec stupeur dans  [leur rapport annuel que des millions de ressources sur Kubernetes sont perdues car jamais utilisées](https://sysdig.com/blog/millions-wasted-kubernetes/). C’est forcément un peu orienté, mais ça met en évidence qu’il reste un sacré chemin à parcourir avant de maîtriser pleinement les possibilités de K8s et que surtout, il existe autre chose que cette infâme machine à gaz pour gérer vos deux images Docker.  

![](https://storage.mlcdn.com/account_image/325165/45X1nXD48LisNAJUeJzySi6dZoBOxsame3dDvNBE.png)

On le sait tous, en cas d’incident sur la prod,  [c’est toujours la faute du DNS](https://www.pentestpartners.com/security-blog/its-always-dns-heres-why/), et ça, les coyotes de chez Adevinta l’ont bien compris. On vous encourage d’ailleurs à lire  [leur RETEX sur un incident lié au DNS](https://medium.com/adevinta-tech-blog/its-not-always-dns-unless-it-is-16858df17d3f)  qui détaille avec précision chaque étape pour diagnostiquer le problème et le régler, on les remercie chaudement pour ce partage.

Et pour régler un problème en production, rien de mieux que d’avoir un super système de monitoring, sauf que notre copain  [Mathew Duggan vient tout remettre en question à travers un post sur son blog qui conclut rageusement](https://matduggan.com/were-all-doing-metrics-wrong/)  :  _“My experience has been monitoring is an unloved internal service of the worst kind. It requires a lot of work, costs a lot of money and never makes the company any money…”_. A lire pour se faire une idée et remettre un peu de profondeur dans nos actions.

On a tous dans nos boîtes respectives ces mecs un peu bizarres qui s’occupent du réseau et qui nous font un peu peur tellement on ne capte rien à ce qu’ils essaient de nous dire. Pour rétablir le dialogue, l’ami Ivan Velichko nous a pondu  [un chouette guide qui nous explique super clairement comment est constitué un réseau](https://iximiuz.com/en/posts/computer-networking-101/), en résumant parfaitement les aspects liés aux layers 2 et 3, et même au vxlan ma bonne dame !  

Aujourd’hui on a décidé de vous présenter  [Robusta KRR](https://github.com/robusta-dev/krr), car en plus d’avoir le nom rigolo d’une éventuelle machine à café sponsorisée par George Clooney, Robusta KRR vous permet d'optimiser l'allocation des ressources dans vos clusters K8s, dans un but de réduction de coûts et de meilleures performances. What else ?

Vous êtes un vrai bonhomme et utilisez VSCode pour terraformer ? Essayez donc  [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph)  qui vous permettra de générer un graph Terraform en live pendant que vous codez avec vos petits doigts boudinés. Bluffant et archi utile.

**J'aime lire**

![](https://storage.mlcdn.com/account_image/325165/1wH7EN6zJwtIiJ0YA9NeAhHfdRa1B9jFjVZThwHU.png)

##### Software Architecture: The Hard Parts

Livre écrit à plusieurs mains  [qui aborde les aspects complexes de l'architecture logicielle](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/)  et qui nous offre des conseils pratiques pour résoudre les problèmes courants auxquels nous sommes confrontés tous les jours lorsqu'il s’agit d’étudier la mise en place d’une nouvelle architecture. On fera un grand tour d’horizon sur la modularité, la réactivité, la sécurité, l'évolutivité, la résilience et bien d'autres choses qui concernent la mise en place de votre architecture bien aimée.

C’est super bien écrit avec forcément plein de cas d’usage qu’on a tous eu un jour, et ça parle bien entendu micro services, des architectures dans le cloud et des solutions et contraintes portées par l’intégration continue.