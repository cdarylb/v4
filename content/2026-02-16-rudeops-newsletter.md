---
layout: post
title: Newsletter du 16 Février 2026
tags: [devops, Glances, ASF, LLM, Vortix]
comments: true
mathjax: true
author: RudeOps
---


Au moment où vous lisez ces lignes, je suis chez le dentiste, bouche ouverte, regard vide, pendant qu'un type masqué en blouse blanche s'acharne à extraire deux dents qui n'ont rien demandé.

Il paraît qu'elles sont devenues inutiles et potentiellement dangereuses, alors on les enlève. C’est préventif, c’est propre, et c'est exactement comme ça qu'on traite les vieux serveurs.

Tant qu'ils ne font pas de bruit, on les ignore, et puis un jour, quelqu'un prononce les mots fatidiques : "non supporté", "plus maintenu".

Et là, c'est la panique, on sort les gants, on prévoit une coupure, on parle de "migration douce" alors qu'en vérité, on va tout arracher et espérer que ça repousse bien ailleurs, dans le cloud ou dans un coin de budget jamais validé.

On appelle ça la gestion de l'obsolescence.

Mais vu de l’intérieur, c’est surtout de l'extraction, ça a l'air vivant, mais ça ne l'est plus depuis longtemps.

Un peu comme mon sourire dans les heures qui viennent.  
  
Cyril

### Quoi de neuf ?

**🖥️ Glances :** Pour les deux du fond qui ne suivent pas et qui pensent encore que top suffit à comprendre ce qui se passe sur un serveur,  [Glances est monté en version 4.5.0](https://github.com/nicolargo/glances)… enfin 4.5.0.1, parce que la 4.5.0 a été remplacée. Classique. Au programme : monitoring ZFS natif, support NVMe amélioré, surveillance des NPU (oui, même vos puces IA ont droit à leur graphe), export vers DuckDB, et possibilité de voir sur quel cœur CPU tourne chaque process, de quoi relancer des débats inutiles en salle ops. Côté sécurité, token pour l'API REST et correctifs bienvenus sur des vulnérabilités qui traînaient. Bref, 40 issues fermées, du refactoring, moins de complexité, plus de stabilité, Glances continue tranquillement de faire ce qu'il fait depuis toujours : vous montrer que votre serveur va bien… jusqu'au moment précis où il ne va plus bien du tout.

🪶 **The Apache Software Foundation announces new top-level projects :** L'Apache Software Foundation annonce  [un nouveau Top-Level Project](https://news.apache.org/foundation/entry/the-apache-software-foundation-announces-new-top-level-project-3), sans doute parce qu’il n’y avait visiblement pas encore assez de projets Apache dont tout le monde dépend sans vraiment savoir qui les maintient. Passage en TLP, gouvernance officielle, comité dédié, maturité reconnue… le bingo open source est complet. Derrière la communication institutionnelle bien huilée, ça reste la même réalité : plus de responsabilités, plus d'utilisateurs, et probablement le même nombre de maintaineurs bénévoles le soir après le boulot.

**🤖 Sysadmin in the LLM age :** Un sysadmin en colère découvre qu’un confrère a "vibe-codé" un coloriseur de logs avec un LLM et décide d'y voir  [le symbole de l'effondrement civilisationnel](https://nullrouted.space/2026/02/05/sysadmin-in-the-llm-age/). Le billet est un long cri du cœur : l'IA rendrait paresseux, flatterait l'ego, brûlerait la planète et détruirait l'art noble de demander de l'aide sur IRC. Derrière l'indignation très pure, on retrouve un débat classique : est-ce qu'un LLM rend vraiment meilleur, ou est-ce qu'il donne juste l'illusion de compétence ? Le texte tranche sans nuance, tout est décadence et individualisme toxique, oubliant peut-être qu'entre "coder seul dans son coin" et "remplacer toute communauté par une machine", il existe un entre-deux un peu moins apocalyptique. Mais bon, au moins le log est colorisé.  

</> **Hide code in a repo using git submodules :** Besoin de cacher une partie de votre code sans créer un repo totalement séparé ? Git a déjà la réponse :  [les submodules](https://spin.atomicobject.com/repo-git-submodules/). Un repo enfant avec ses propres droits d'accès, référencé par le parent, et invisible pour ceux qui n'y ont pas accès. Propre sur le papier, pratique pour du code sensible, mais en contrepartie, vous gagnez des pointeurs de commit à maintenir et des clones qui cassent si quelqu’un oublie un petit --recurse-submodules.

🏹 **Vortix :** Une chouette TUI  [pour piloter WireGuard et OpenVPN](https://github.com/Harry-kp/vortix)  sans se coltiner un GUI à 400 Mo ni jongler avec wg show dans trois terminaux. Promesse : télémétrie temps réel, détection de leaks IPv6/DNS, kill switch intégré et switch de profils sans mémoriser des flags obscurs, le tout en 15 Mo, clavier only, et utilisable en SSH comme un vrai bonhomme.

![](https://storage.mlcdn.com/account_image/325165/h0qOYK16Q8JwMZ8034OaGXcb5uehIcnnvvnubzW1.png)

# RudeTools : Découvrez, comparez et adoptez les meilleurs outils open source pour le DevOps, le SRE et l'IT. Une base organisée, documentée et orientée cas d'usage.

Il y a quelque temps, je me suis rendu compte que je passais beaucoup de temps à tester des applications… et presque autant à oublier pourquoi je les avais ouvertes.  
Face à ce problème manifestement insoluble, j'ai pris une décision très rationnelle, ajouter une couche supplémentaire en créant un site pour tout centraliser :  [https://rudetools.dev](https://rudetools.dev/)  
Ce n'est ni exhaustif ni ambitieux, c'est simplement une cartographie perso alimentée par la curiosité, l'open-source et une quantité d'heures dont je préfère ne pas faire l’inventaire précis.  
Je n'ai aucune certitude sur l'utilité réelle de tout ça, il est même fort possible que cela ne serve strictement à rien, ce qui, d'une certaine manière, resterait cohérent avec une bonne partie de l'informatique moderne. Mais si quelqu'un y trouve malgré tout un outil utile ou une idée intéressante, l'expérience pourra être considérée comme un succès statistiquement improbable.  


🏃‍♂️  **What is a tech lead ? :** Trois semaines dans son premier rôle de tech lead, et toujours aucune idée claire de ce qu'il est censé faire. Réponse du manager : "Personne ne sait."  [Bienvenue dans le job le plus flou de l'ingénierie](https://joshhornby.com/what-is-a-tech-lead). Selon la boîte, un tech lead est soit un senior qui fait de l’archi sans toucher aux humains, soit un hybride improbable : architecte, coach, pompier prod à 18h et garant des deadlines. En gros, technique, croissance de l'équipe et delivery, le tout avec la même journée de 24 heures. Rappel utile, ce n'est ni un super dev avec un nouveau titre, ni un mini-manager. Et si tout passe encore par vous, vous n'êtes pas indispensable, vous êtes le bottleneck, le vrai job consistant à rendre l’équipe moins dépendante de vous, ce qui est paradoxalement la seule façon de ne pas devenir le problème que vous essayez de résoudre.

💝 **Peon-ping :** C'est pas comme si on était dans une newsletter sérieuse, alors oui, on a décidé de partager ça parce que ça nous a bien fait marrer :  [un outil qui joue des voix de Warcraft, StarCraft ou Portal](https://github.com/PeonPing/peon-ping)  quand votre agent IA finit une tâche ou demande une permission. Oui, vraiment. Compatible Claude Code, Codex, Cursor et compagnie, avec hooks, notifications desktop/mobile, relay audio en remote et même une "spec" ouverte pour packs sonores. En résumé, votre agent termine un refactor et vous balance un "Job's done." On ne sait pas si ça améliore la productivité, mais au moins votre pipeline aura enfin un peu de personnalité.

🥇 **kube-green, a K8s operator to reduce CO2 footprint :** Vous laissez encore tourner vos pods de dev le week-end ? Honte à vous, la planète pleure et votre CFO aussi. Heureusement,  [kube-green débarque pour sauver vos clusters](https://github.com/kube-green/kube-green)  en éteignant automatiquement ce que vous oubliez d'éteindre vous-même. Le pitch est simple, on coupe les ressources inutiles la nuit et le week-end, on parle d'empreinte carbone, on met un joli badge "adopter" sur GitHub… et tout le monde se sent un peu plus responsable.  

😱 **How to reduce telemetry volume by 40% smartly (Java):  
**OpenTelemetry, c’est génial, tu branches un agent, et magie, tout est instrumenté. Absolument tout, même ce que tu n’as jamais voulu mesurer. Auto-instrumentation "capture everything by default", et derrière tu découvres que  [ton budget observabilité part en fumée](https://newsletter.signoz.io/p/is-your-opentelemetry-auto-instrumented)  parce que chaque URL avec un ID unique, chaque thread.name, chaque restart de pod et chaque heartbeat Kafka génère sa petite série temporelle bien inutile. Résultat : 10 % de signal, 90 % de bruit, et une facture qui scale mieux que ton appli. Le message du billet est simple, si tu ne tailles pas dans le gras (controller spans, JDBC bavard, scheduler qui span toutes les secondes, attributs Kubernetes ultra volatiles), tu transformes ton système d'observabilité en usine à télémetrie décorative.

## Watch SQL traffic in real-time with a TUI

![](https://storage.mlcdn.com/account_image/325165/rvenYEkPDSOIt0Xv4AhoNwm06y2lmHVAHucYRoXe.png)

  

Sébastien nous partage sql-tap, un proxy qui s'intercale discrètement entre ton appli et ta base (Mysql ou PG) pour enregistrer absolument toutes les requêtes, sans te demander ton avis et sans modifier une ligne de code.

Tu branches, et d'un coup tu découvres en TUI la vérité nue : les SELECT *, les requêtes N+1, les transactions qui durent trois plombes et les EXPLAIN qui font peur. Ça intercepte le protocole, traque les prepared statements et te stream ça en gRPC comme si c'était normal.

En gros, c'est l'outil parfait si tu veux enfin savoir pourquoi ta base souffre. Attention toutefois : une fois que tu as vu ce que ton appli envoie vraiment à Postgres, tu ne peux plus faire semblant de ne pas savoir.

  

[Accéder au lien ->](https://github.com/mickamy/sql-tap)