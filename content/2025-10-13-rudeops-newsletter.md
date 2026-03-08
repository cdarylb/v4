---
layout: post
title: Newsletter du 13 Octobre 2025
tags: [devops, eBPF, K8s, Atlassian]
comments: true
mathjax: true
author: RudeOps
---


Il y a quelques jours, nous avons reçu un message. Pas un spam, pas une alerte de sécurité à 3h du matin, pas une notification "merge failed because your pipeline is garbage", non, un vrai message humain. Un remerciement sincère d'un lecteur qui nous disait apprécier cette newsletter et qui, dans un élan de bienveillance totalement inadapté au climat ambiant, nous a simplement écrit pour dire "merci".

Nous avons été touchés, alors nous avons pris le temps de lui répondre. Un message simple, modeste, avec le fond d’authenticité qui nous caractérise (enfin je crois), et c’est là que tout a dérapé, nous l’avons appelé Florent, alors que son prénom était Florian. Si cela peut prêter à sourire, ça pose surtout une question plus vaste : à quoi bon parler de Zero Trust, de GitOps, d'authentification forte et de sécurité prédictive, si on n’est même pas fichus de retenir correctement le prénom de quelqu’un qui nous envoie un mot sympa ?  

Alors Florian (oui, cette fois c’est bon), on te remercie sincèrement, et on te dédie cette édition, parce que si RudeOps existe, c’est aussi grâce à des lecteurs comme toi qui prennent le temps de lire, de rire, de râler un peu, et parfois, d'écrire un petit mot qui fait toute la différence.

Promis, la prochaine fois, on vérifiera deux fois.  
  
Cyril

### Quoi de neuf ?

🏃‍♂️  **A new breed of analyzers :** Daniel Stenberg (le monsieur derrière curl) vient d'écrire un billet assez savoureux sur la nouvelle génération d’outils d’analyse "assistés" par IA, ceux qui trouvent des bugs que ni clang-tidy, ni Coverity, ni même le café ne voyaient venir. Ces nouveaux détecteurs, comme ZeroPath ou l’outil d'Aisle, ont récemment balancé à l'équipe curl plus de 400 problèmes potentiels, dont une bonne cinquantaine de vrais bugs planqués depuis des années. Pas de panique et rien d’apocalyptique, juste des petites fuites mémoire, des variables confuses et des docs qui mentent.  [Bref, l'ordinaire du C](https://daniel.haxx.se/blog/2025/10/10/a-new-breed-of-analyzers/). Stenberg ne crie pas à la révolution, plutôt à une évolution : "l'IA ne code pas mieux que nous, mais elle lit le C avec moins de fatigue oculaire". Et quand ton projet fait 180 000 lignes et qu'il tourne sur 100 OS, tout coup de main est bon à prendre. Moralité : l'IA ne remplace pas les devs, elle leur évite juste de passer leur temps à chasser des NULL mal placés.

💝 **How ITOps automation cuts incident response time by 50% :** C'est dans ce chouette papier des cowboys de chez Netguru qu'on apprend que chaque minute d'arrêt coûte environ 5 600 balles à une entreprise. Oui, par minute. Pas étonnant donc qu'on soit passés de  ["l'automatisation c'est cool" à "l'automatisation ou la mort"](https://www.netguru.com/blog/itops-automation). Les chiffres parlent tout seuls : ceux qui gèrent encore leurs incidents à la main crament 30 millions par an, ceux qui automatisent tombent à 16 millions, et accessoirement, ils dorment un peu mieux. En pratique, l'ITOps automation fait sauter la moitié du temps de résolution, élimine les erreurs humaines, et transforme les ingénieurs en stratèges au lieu de pompiers permanents. Les AIOps poussent le vice plus loin : ils prédisent les pannes avant qu'elles arrivent, un peu comme un oracle DevOps nourri au machine learning. Bref, si ton équipe passe encore ses nuits à trier des alertes à la main, t'es pas old school, t'es juste en train de perdre 5 600 balles par minute.

🥇  **How eBPF is powering the next generation of observability :** L’observabilité, c’était censé t’aider à comprendre ton système, mais aujourd’hui, c’est surtout un moyen de mesurer combien tu peux payer avant de pleurer. Entre les agents, les SDK et les dashboards hors de prix, on a fini par rendre la transparence aussi coûteuse qu’un audit SAP. Et puis eBPF est arrivé. Pas un outil de plus, pas un énième SaaS "next-gen observability powered by AI", non,  [un vrai changement de paradigme](https://thenewstack.io/how-ebpf-is-powering-the-next-generation-of-observability/). Le noyau Linux lui-même devient ton agent d’observation : il regarde passer les paquets, les threads, les syscalls, sans toucher à ton code, sans t’ajouter de latence, sans lever la main pour te facturer à la minute. Avec OBI, la version eBPF d’OpenTelemetry, l’observabilité devient enfin ce qu’elle aurait toujours dû être : intégrée, automatique, élégante. Le kernel voit tout (Rust, Go, Java, peu importe) et te renvoie une image complète de tout ce qui se passe sur ton système, et ça c'est la classe mon gars comme on dit à Montargis.

😱  **Managing Kubernetes workloads using the app of apps pattern in ArgoCD :** À force d’empiler les microservices on a fini par transformer Kubernetes en sapin de Noël. Chaque appli a son chart, ses valeurs, ses secrets, ses bugs. Et toi, pauvre admin, tu es censé garder tout ça "GitOps compliant". C’est là qu’arrive ArgoCD, ce chef d’orchestre qui prétend tout synchroniser, et son tour de magie préféré s’appelle le App of Apps**,** [une appli qui déploie… d’autres applis](https://www.cncf.io/blog/2025/10/07/managing-kubernetes-workloads-using-the-app-of-apps-pattern-in-argocd-2/)  : le App of Apps, c’est ton YAML pour les gouverner tous. Tu poses une appli parent, il gère les applis enfants, et d’un seul clic tu redéploies tout ton bazar comme si c’était prévu depuis le début. C’est élégant, presque poétique, tant que tu restes raisonnable, mais bien maîtrisé, c’est la différence entre un cluster organisé et un champ de ruines automatisé. Bref, ArgoCD ne simplifie pas Kubernetes, il te donne juste un moyen de rendre ton désordre versionné, traçable… et vaguement supportable.

🔳 **Superfile, a terminal file manager you'll actualy enjoy using :** Tu passes ta vie dans le shell à renommer des fichiers en ASCII pur ?SuperFile débarque pour te rappeler que  [même un TUI peut être sexy](https://www.omgubuntu.co.uk/2025/08/superfile-terminal-file-manager-linux-ubuntu).  
Couleurs, icônes, sidebar, preview… on dirait Midnight Commander après un stage chez les designers d'Apple. Tu ne seras toujours pas productif, mais au moins t’auras la classe.  

🚀  **How I block all 26 million of your curl requests :** Tu veux bloquer 26 millions de requêtes curl ? Ce type a pris son scalpel eBPF/XDP, a découpé les ClientHello comme on trie des mails indésirables, et en a fait un filtre kernel-level qui repère les empreintes TLS de curl. C’est overkill, un peu obsessionnel,  [mais terriblement satisfaisant](https://foxmoss.com/blog/packet-filtering/)  : tu laisses tomber les user-agents bidons et tu bloques proprement les gratte-pages paresseux jusqu’à ce que quelqu’un réécrive curl en mode ninja.

**🛠️ Wister, a wordlist generator tool :** Tu veux enrichir ton dictionnaire d’attaque ou juste générer des horreurs lexicales pour le plaisir ? Wister est ton nouveau jouet,  [un générateur de wordlists sous stéroïdes](https://github.com/cycurity/wister), capable de mélanger, inverser, saler et encoder tes mots en md5, base64 ou ce que tu veux. Tu balances quelques mots ou un fichier, tu ajustes la profondeur du chaos, et Wister recrache des combinaisons dont même un botnet aurait honte. Installe-le via un pip install et regarde ton CPU pleurer pendant que tu inventes des mots de passe que même toi tu ne pourrais plus taper. Bref, c'est un outil parfait pour les pentesters, les bourrins du brute force et les poètes du dictionnaire.

![](https://storage.mlcdn.com/account_image/325165/1Em8sskIO32923pldJeh06e1a2VZ6SNXS3S2mGl2.png)

# Atlassian impose le cloud.

Atlassian a décidé :  [plus d'hébergement on-premise](https://www.atlassian.com/blog/announcements/atlassian-ascend), fin de Jira Server, fin de Confluence Data Center, la seule option, c’est leur cloud, point final, date butoir fixée en 2029.

Alors que les DSI cherchent à reprendre la main sur leurs données et leurs infrastructures, Atlassian impose une migration forcée vers un environnement qu’on ne maîtrise plus. Données hébergées on ne sait où, mises à jour imposées, dépendance totale à un éditeur américain.

On appelle ça la simplicité, mais c'est surtout une manière polie de te passer les menottes.  

Attention : il ne s'agit pas de cracher sur le cloud, car le cloud, bien utilisé, c’est puissant, c'est de l’élasticité, de la rapidité, de l’expérimentation à grande échelle, mais un bon ingénieur sait que le cloud n'a de valeur que tant qu'il reste un choix, et quand la dépendance devient structurelle, la liberté d'architecturer disparaît, et avec elle, la souveraineté technique.

Heureusement, des alternatives open-source existent et tiennent la route.  
[OpenProject](https://www.openproject.org/fr/), [Redmine](https://www.redmine.org/)  ou  [Taiga](https://taiga.io/) remplacent Jira.  
[Wiki.js](https://js.wiki/)  ou  [BookStack](https://www.bookstackapp.com/) font oublier Confluence.  
[Gitea](https://about.gitea.com/),  [Jenkins](https://www.jenkins.io/) ou  [GitLab](https://about.gitlab.com/) assurent le code et la CI/CD.  
[GLPI](https://www.glpi-project.org/fr/) ou  [Zammad](https://zammad.com/en/company/open-source) gèrent l’ITSM.  
  
Avec Keycloak pour le SSO et Grafana OnCall pour l'astreinte, tu obtiens une stack complète, libre et souveraine.

Tout cela tourne sans problème sur une infra Docker ou Kubernetes, avec PostgreSQL et un stockage objet local, tu gardes la main sur tes données, ton rythme, et ta sécurité, et tu redeviens maître de ton environnement.  

Chez RudeOps, on ne défend pas l'open-source par idéologie (encore que...), mais par pragmatisme, parce que la liberté, dans nos métiers, ce n’est pas une opinion, c'est une compétence.  


**☸️ Investigating and fixing "StopPodSandbox":** Depuis des mois, Marcus Noble vivait avec des "StopPodSandbox failed… unexpected end of JSON input" qui tapissaient ses logs kubelet. Rien ne plantait, donc comme tout bon admin, il a fait le choix mûrement réfléchi de ne rien faire. Jusqu’à un vendredi soir où, pris d'un élan suicidaire, il décide d'enquêter.  [Après quelques heures de kubectl debug](https://marcusnoble.co.uk/2025-09-28-investigating-and-fixing-stoppodsandbox-from-runtime-service-failed-kubelet-errors/)  sur Talos et de jurons étouffés, il tombe sur la cause : un fichier de cache CNI vide. Zéro octet, zéro sens, mille erreurs. Un rm plus tard, tout rentre dans l’ordre. Moralité : parfois, Kubernetes ne te veut pas de mal, il veut juste te rappeler que tout ce cirque repose sur un JSON mal formé.

📜 **mkcert Web UI :** Pour ceux qui ne connaissent pas, mkcert Web UI est une interface web qui rend enfin l'usage de mkcert un peu moins "terminal des enfers". Tu cliques, tu génères, tu télécharges des certificats SSL valides pour ton environnement local, sans taper trois kilomètres de commandes OpenSSL. [La version 3.1.0 vient de sortir](https://github.com/jeffcaldwellca/mkcertWeb), et c'est loin d'être juste un bump de version paresseux. L'outil gère maintenant tout un écosystème de fonctions qu'on verrait plus dans une PKI d'entreprise que dans un projet de dev local : génération multi-domaines, monitoring des certificats, alertes e-mail avant expiration, intégration SCEP pour déployer automatiquement des certs sur des devices, et même authentification OpenID Connect si tu veux faire sérieux.

🐳 **Dockpeek, self hosted Docker dashboard :** Dockpeek c’est un peu comme Portainer, mais sans le poids, les fioritures et la sensation d’ouvrir un ERP pour redémarrer un conteneur. Tu poses le conteneur, tu ouvres ton navigateur, et paf :  [tous tes Docker s’affichent](https://github.com/dockpeek/dockpeek), avec leurs ports, leurs liens Traefik et leurs états, comme un Pokédex pour sysadmins fatigués. Pas besoin de YAMLs qui sentent la sueur : Dockpeek s’installe en trois lignes et fonctionne direct. Tu veux voir quel service bouffe ton port 8080 ? C’est là. Tu veux cliquer sur ton container web sans chercher son IP ? C’est là aussi. Tu veux juste vérifier que tout tourne sans que ça te juge ? Dockpeek t’aime comme tu es.

💤 **The simple habit that saves my evenings :** Le mec raconte qu'il a trouvé le secret pour sauver ses soirées de dev : arrêter de croire au mythe des "20 minutes de plus". Tu sais, ce moment où t'as enfin compris ton bug à 18h42 et tu te dis "je termine vite fait". Trois heures plus tard t'es affamé, aigri, et ton code ne compile toujours pas. Sa technique ? Quand t'as l'illumination,  [tu arrêtes tout, tu notes tes idées, et tu pars](https://alikhil.dev/posts/the-simple-habit-that-saves-my-evenings/). Le lendemain, t'es reposé, t'as un plan, et t'as pas juré devant ton IDE à minuit.

## I'm in Vibe Code Hell

![](https://storage.mlcdn.com/account_image/325165/Acn2pgHdxz2HNbwQo9KoZ0IPDrcjRh6XBGPs3hmx.png)

  

Merci à Corentin pour le partage de cet article aussi drôle que déprimant sur le "vibe code hell".

Souviens-toi du "tutorial hell", cette époque où les devs passaient plus de temps à suivre des tutos YouTube qu’à coder ? Eh bien, on a trouvé pire. Le "vibe code hell", c’est la nouvelle zone grise où tu codes… sans vraiment coder. Tu demandes à ton IA préférée d’écrire la moitié du projet, tu copies-colles en espérant que "ça marche sur ta machine", et tu termines la journée convaincu d’avoir appris quelque chose, alors que ton seul vrai skill, c’est de reformuler des prompts.

Le texte de Lane Wagner résume bien la vibe : on n’est plus bloqués devant des tutos, on est bloqués devant un chatbot trop poli pour nous dire qu’on est à côté de la plaque. Les nouveaux devs ne galèrent plus à comprendre, ils galèrent à exister entre deux suggestions d’autocomplétion.

Moralité : si tu veux vraiment apprendre à coder, ferme ton Copilot, garde ton bug, et souffre un peu. C’est le seul moment où ton cerveau bosse.

[Accéder au lien ->](https://blog.boot.dev/education/vibe-code-hell/)