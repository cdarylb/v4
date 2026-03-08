---
layout: post
title: Newsletter du 16 Juin 2025
tags: [devops, Github, IaC, Rust, Kafka]
comments: true
mathjax: true
author: RudeOps
---


Il y a des semaines où tout semble marcher. Pas parfaitement, évidemment, Git continue de t’envoyer des messages en elfique, ton pipeline CI ressemble à un vieux flipper belge et kubectl te répond avec l’assurance d’un médium alcoolique, mais globalement, ça tourne.

Et puis il y a les autres. Celles où ton infra décide de réinterpréter les lois de la physique. Où Docker oublie où il a mis tes volumes, où Terraform te menace en rouge, et où Prometheus te signale que “tout est OK” juste avant que le serveur prenne feu. Des semaines où tu lis "S3 compatible" comme on lit "couscous garni" sur une boîte de conserve douteuse.

Alors tu ouvres RudeOps. Pas pour réparer quoi que ce soit, hein, juste pour lire une veille qui pique un peu moins que ta prod. Avec un peu de chance, tu tomberas sur un outil qui te sauvera 10 minutes ou t’évitera une humiliation en réunion. C’est déjà énorme. Bonne lecture à tous !

Cyril

### Quoi de neuf ?

**</> Github becomes go-to platform for malware delivery across Europe :** Les attaquants ont compris que pour rentrer chez toi, il vaut mieux jouer la carte de la confiance, et quoi de plus convaincant qu’un lien GitHub ? Selon Netskope, le phishing est devenu le moyen préféré des hackers pour contourner les contrôles de sécurité en Europe. Adobe et Microsoft restent les stars usurpées (29 % pour Adobe, 26 % pour Microsoft 365), histoire de t’inciter à renvoyer tes identifiants sans trop réfléchir. Résultat : un nombre croissant de fuites involontaires et de comptes cloud compromis.  [Le pompon revenant aux malwares distribués via GitHub](https://www.helpnetsecurity.com/2025/05/28/attackers-phishing-method-europe/), chapeau bas pour l’efficacité et la simplicité.  

💝 **Rust is officially in the Linux kernel :** Rust, ce petit gaillard qui promet de supprimer les bugs de mémoire les plus sournois, vient officiellement poser ses valises dans le noyau Linux 6.15 via le pilote NVIDIA NOVA. Le projet Rust-for-Linux, lancé en 2020, affiche sa première gloire :  [un driver GPU en Rust réellement fusionné dans le code source](https://weeklyrust.substack.com/p/rust-is-officially-in-the-linux-kernel). Le gain ? Une promesse de plus de sécurité et moins de use-after-free. Les détracteurs froncent les sourcils, mais Linus, lui, semble plutôt clair : si t’es pas capable de suivre le wagon Rust, tu peux rester à quai .

**👾 Nettacker :** Tu pourrais attendre patiemment qu’un script kiddie te ruine ton week-end. Ou alors, tu peux prendre les devants, et faire le boulot toi-même avec classe, sueur, et ---verbose. C’est là qu’arrive  [Nettacker, le scanner made in OWASP](https://github.com/OWASP/Nettacker), avec des modules pour scanner des ports, détecter des failles applicatives, collecter de l’info et te balancer un rapport bien gras en JSON, HTML ou CSV selon ton degré de souffrance préféré. Tu peux cibler du HTTP, du FTP, du CMS oublié dans un coin sombre… ou juste vérifier que tes devs ne déploient pas encore des apps en debug=true.  

𝓥 **Lazyvim :** LazyVim,  [c’est un Neovim configuré avec soin](https://www.lazyvim.org/), comme un sandwich triangle industriel, mais sans la tristesse. C’est rapide, c’est modulaire, ça te colle LSP, Treesitter, et tout le nécessaire sans te demander d’aller lire l’équivalent d’un mémoire de master pour comprendre comment fonctionne ton tab-complete. Est-ce encore du Vim ? Peut-être, peut-être pas, mais en tout cas il y a de fortes chances que Lazyvim devienne ton IDE favori.

🏹 **Infrastructure as code, what went wrong :** L’Infrastructure as Code devait apporter rigueur, cohérence et paix dans le monde. À la place, elle a semé  [un chaos parfaitement déclaratif](https://thenewstack.io/infrastructure-from-code-what-went-wrong/). Les cowboys de chez The New Stack dressent un constat grinçant : outils fragmentés, développeurs désengagés, pratiques incohérentes et pipelines devenus parfois si complexes qu’on en regretterait presque les scripts shell du siècle dernier.

🚀 **Karakeep :** Karakeep, c’est  [un gestionnaire de bookmarks self-hosted](https://github.com/karakeep-app/karakeep)  qui fait bien plus que stocker des URLs : il télécharge le contenu, l’indexe en full-text (Meilisearch), applique de l’OCR, résume les pages avec une IA locale ou OpenAI, et classe automatiquement chaque ressource. Le tout avec extensions navigateur, API REST et une interface propre, prête à dompter ton chaos documentaire. Docker-ready, TypeScript sous AGPL, utilisable en local ou en prod. Et surtout : plus fiable qu’un "à lire plus tard" qui date de 2019. On s'en sert et ouais c'est franchement pas mal.

🏃‍♂️  **GoDoxy :** GoDoxy, c’est ce petit bijou qui te permet de faire tourner un proxy en mode host, avec reconnaissance automatique de tes conteneurs Docker via labels, un tableau de bord simple et même un éditeur de config dans l’UI,  [tout ça sans t’arracher les cheveux](https://github.com/yusing/godoxy)  à cause d’un fichier YAML à rallonge, ou d’un label oublié. Le mec est allé plus loin que “ça marche juste” : support multi‑nœuds, OIDC pour l’authent, HTTP/TCP/UDP, rechargement à chaud, génération automatique de certificats Let’s Encrypt, et un mode “idle‑sleep” qui endort tes conteneurs quand personne ne les utilise. C'est écrit en Go, c'est léger, rapide, pensé pour Proxmox, Docker et tout ce qui pourra tourner sur du amd64 ou arm64.

🖥️ **Kafka, the end of the beginning :** Kafka fête ses 10 ans sans aucune envie de raccrocher. Mais après une décennie de domination quasi totale, le constat des outlaws de chez Materialized View est brutal : on a bien adopté Kafka…  [mais on n’a guère innové](https://materializedview.io/p/kafka-end-of-beginning). Résultat, ça tourne, ça scale, mais ça n’avance presque plus, coincé dans une boucle de toolschain inchangés, de pipelines galères et de cycles de vente interminables. En gros, Kafka est archi stable, fiable, bien rôdé. Mais briller, recommencer à innover ? C’est plus compliqué que de lancer quelques brokers et un topic.

🐋 **How to build run and package AI models locally with docker model runner :** Docker vient de sortir un outil expérimental bourré de promesses et qui  [permet de d'embarquer des modèles d’IA en local](https://www.docker.com/blog/how-to-build-run-and-package-ai-models-locally-with-docker-model-runner/), sans créer un environnement Python galère ni monter un serveur web bancal. Le processus est simple (pour un outil Docker, hein et ton modèle tourne en local, GPU-friendly sur Apple Silicon ou Windows/NVIDIA. Tu peux même pousser tes propres modèles au format GGUF vers un registre, les versionner, les scanner, bref : traiter tes modèles comme des images container. Tu gagnes en latence, tu gagnes en confidentialité (les prompts restent sur ta machine) et tu réutilises tes workflows CI/CD habituels avec Compose ou GitHub Actions.  

🪣 **MinIO :** MinIO, ce n’est  [pas juste un S3 open-source](https://github.com/minio/minio)  : c’est l’option pour ceux qui en ont marre de la facture AWS, mais qui veulent  _vraiment_  stocker des pétaoctets sur leur propre grille de serveurs. Un objet store en Go, compatible S3, performant et pensé pour tenir la route à grande échelle, et tout cela sous licence AGPL v3. Avec MinIO, on déploie une stack objet digne de ce nom, qu’on soit sur Docker Compose, Kubernetes ou bare metal. Pas besoin de payer le prix fort quand on peut se construire sa propre version de S3 et en mieux si on sait s’y prendre.


## 7 Docker Compose tricks to level up your development workflow

![](https://storage.mlcdn.com/account_image/325165/tPx6WuEZyzgDdW8DQhNqWBRMyzbnqKodB4m9O3iT.png)

Merci à José pour le lien : un article qui sent bon le cambouis et les volumes bien pensés. On y trouve 7 astuces Docker Compose pour rendre ton workflow de dev un peu moins douloureux, et presque élégant si tant est que YAML et élégance puissent cohabiter dans une même phrase. Au menu, des alias qui évitent de taper docker-compose up --build avec les doigts en feu, du montage de code à chaud pour ne plus rebuild à chaque virgule, des networks mieux gérés, des dépendances de services plus propres, et même quelques options de debug qui te feront passer pour un gourou dans l’open space. Ce ne sont pas des hacks obscurs, mais des petits ajustements bien sentis pour ceux qui en ont marre de redécouvrir la doc Compose à chaque bug. Et si tu les connais déjà tous, félicitations : tu es probablement le mec bizarre à qui on envoie les Dockerfiles des autres pour "voir ce qui ne va pas".

[Accéder au lien ->](https://dev.to/shrsv/7-docker-compose-tricks-to-level-up-your-development-workflow-14f5)