---
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

🌐 **[How DNS name tracking enhances network observability](https://isovalent.com/blog/post/dns-name-tracking/)** Des mecs ont découvert qu'écrire `nginx` au lieu de `nginx.server.svc.cluster.local.` dans un cluster Kubernetes génère du trafic DNS inutile, des latences, et des NXDOMAIN en pagaille. Cette révélation bouleversante, qui remet en question tout ce qu'on croyait savoir sur les points à la fin des noms de domaine, est disponible sous forme de post de blog avec des graphiques et tout. DNS existe depuis 1983, le point final aussi, votre cluster souffre donc probablement de ça depuis le premier jour, et personne n'a rien dit parce que ça passait au vert. Le post explique aussi comment visualiser les dégâts avec Loki, ce qui vous permettra enfin de mettre un visage sur la source de vos latences inexpliquées lors de vos prochains post-mortems.

☁️ **[Rethinking your infrastructure strategy](https://architecturenotes.co/p/rethinking-infrastructure-strategy)** Un article qui enfonce des portes ouvertes avec beaucoup de classe, mais qui les enfonce quand même. Le pitch : le cloud c'est cher, ça va devenir encore plus cher avec l'IA qui dévore du hardware, et certaines boîtes commencent à regarder leurs vieux serveurs sous-utilisés dans la salle machine avec des yeux neufs. On y parle de cloud repatriation, c'est-à-dire le mouvement inverse de ce qu'on vous a vendu comme inévitable depuis dix ans. L'auteur évoque aussi la souveraineté technologique européenne, les egress fees qui ruinent silencieusement tous les beaux calculs de TCO, et les architectures hybrides comme compromis raisonnable pour ceux qui ne veulent pas choisir entre la facture AWS et l'armoire à serveurs qui sent le renfermé. Pas de révélation fracassante, mais une synthèse honnête d'un débat qui va occuper pas mal de réunions budget dans les deux ans qui viennent.

## Copinage

On va pas se mentir, on déteste le copinage, mais on déteste encore plus envoyer des candidatures dans le vide intersidéral d'un ATS qui les lit jamais, ou recruter un admin senior via une plateforme qui nous propose trois profils dont deux sont en poste depuis 1998 et un troisième qui "maîtrise Docker" parce qu'il a vu le logo une fois. BAO c'est un cabinet spécialisé sur les métiers Tech, Data, Infra et Produit, et ils jouent sur les deux tableaux : si vous cherchez un job, un chasseur de têtes dédié prend vos critères en main et revient vers vous avec des offres qui correspondent vraiment à ce que vous voulez, pas à ce qu'un algo a cru comprendre de votre LinkedIn. Si vous recrutez, premiers candidats en 48h, recrutement bouclé en 30 jours, chasseurs qui parlent vraiment votre langue (et pas celui du manager qui pense que Terraform c'est une marque de chaussures de rando), transparence totale et suivi post-embauche pour éviter la roulette russe de la période d'essai. 12 000 candidats accompagnés depuis 2019, un modèle au succès côté entreprise, et apparemment des gens qui répondent vraiment aux candidats, ce qui dans notre secteur relève du miracle documenté.

(BAO ne m'a pas payé pour écrire ça. Je le fais parce que c'est vraiment du copinage, ce qui dans le monde de la newsletter tech est effectivement une information.)

[En savoir plus](https://bao.jobs/)

### En bref

☸️ **[Kor, a golang tool to discover unused K8s resources](https://github.com/yonahd/kor)** Vous êtes convaincu que votre cluster Kubernetes ne contient que des ressources utiles ? Kor va corriger cette illusion touchante. L'outil traque les ressources orphelines dans vos namespaces : ConfigMaps, Secrets, PVCs, Ingresses, Roles, et une vingtaine d'autres choses que vous avez créées un jour pour "tester un truc" et oublié là depuis. Cronjob avec rapport Slack le lundi matin, métriques Prometheus, et un flag `--delete` qui existe, ce qui devrait suffire à vous convaincre de le lire avant de l'utiliser en prod.

📧 **[Héberger ses emails chez soi, en 2026](https://www.linkedin.com/pulse/h%C3%A9berger-ses-emails-chez-soi-en-2026-une-tr%C3%A8s-id%C3%A9e-que-beaufrere-gilie/)** J'ai passé beaucoup trop de temps à monter une stack mail maison avec Mailcow sur une VM Proxmox, un VPS Postfix en frontal, et tout le bazar DNS qui va avec (SPF, DKIM, DMARC, PTR et tous les autres acronymes qui font pleurer). Le verdict est sans appel : c'est possible, c'est fonctionnel, c'est instructif, et c'est une très mauvaise idée si vous cherchez une activité tranquille un samedi pluvieux. J'ai écrit le retex complet pour ceux qui veulent comprendre pourquoi chaque brique existe, comment éviter les erreurs classiques, et pourquoi tant d'entreprises finissent par payer un ESP en se demandant pourquoi elles ne l'ont pas fait plus tôt.

## Sous les pavés l'IA

🤖 **[Claude Usage](https://github.com/ryuichi-tani/claude-usage)** Si vous utilisez Claude Code et que vous avez toujours eu l'impression de conduire les yeux fermés côté consommation de tokens, ce petit outil va vous intéresser. Claude Code écrit des logs JSONL détaillés en local (tokens, modèles, sessions, projets) quel que soit votre plan, et ce dashboard les lit pour vous sortir des graphes et des estimations de coûts que l'interface d'Anthropic ne vous donne pas. Zéro dépendance externe, Python stdlib uniquement, un git clone et c'est parti. Ça couvre le CLI, l'extension VS Code et les sessions dispatchées, avec un scanner incrémental qui ne retraite que ce qui a changé, une base SQLite locale, et un dashboard qui se rafraîchit toutes les 30 secondes avec filtrage par modèle. Utile surtout si vous êtes sur un plan API et que vous voulez comprendre d'où vient votre facture avant qu'elle ne vous comprenne elle-même.

🧠 **[Welcome on the post-AI era of software development](https://andrewblooman.com/post-ai-era-software-development/)** Un long article d'Andrew Blooman qui décrit comment les workflows de développement se restructurent autour de l'IA en 2026, et c'est plus intéressant que le titre ne le laisse penser. On y parle de vibe coding pour le prototypage rapide (oui ça marche, non c'est pas de la vraie prod, oui tout le monde le fait quand même), de développement structuré avec Claude Code comme collaborateur autonome plutôt que comme outil d'autocomplétion glorifié, et d'un pattern "security engineer agent" qui balance une revue de sécurité automatique sur chaque PR à une vitesse qu'aucune équipe humaine ne pourrait tenir. Ce qui est chouette dans ce post c'est qu'il ne prétend pas que les développeurs disparaissent, il décrit simplement ce que "développer" veut dire concrètement quand l'agent lit votre issue GitHub, crée la branche, écrit le code, scanne les vulnérabilités, corrige, pousse et ferme le ticket pendant que vous buvez votre café.
