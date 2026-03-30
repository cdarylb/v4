---
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
