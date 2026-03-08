---
layout: post
title: Newsletter du 05 Janvier 2026
tags: [devops, K8s, Pi-hole, Snitch, eBPF]
comments: true
mathjax: true
author: RudeOps
---


Janvier arrive toujours avec les mêmes promesses : des bonnes résolutions, des roadmaps toutes neuves, et des systèmes qui n'ont absolument rien demandé mais qu'on va quand même "optimiser".

Dans cette édition, on parle de ce qu'on voit revenir encore et encore : de la sécurité qu'on redécouvre trop tard, des outils qui tentent de rendre tout ce zoo un peu plus lisible, et de cette industrie qui change de vocabulaire plus vite que de pratiques. Rien de révolutionnaire, juste du réel, du concret, et quelques rappels utiles pour attaquer l'année sans trop se raconter d'histoires.

Bonne lecture, et courage, ce n’est pas une nouvelle année qui va casser la prod toute seule.  
  
Cyril

### Quoi de neuf ?

☸️ **How I think about Kubernetes :** Un rappel salutaire pour ceux qui pensent encore que Kubernetes est juste un chef d'orchestre un peu trop zélé. Kubernetes ne lance pas des conteneurs, il exécute des intentions. Vous lui décrivez un état désiré, il le grave dans le marbre et passe ensuite son temps à corriger la réalité pour qu’elle colle au manifeste. Supprimer un pod à la main n'est pas une action, c'est une hérésie temporaire aussitôt réparée. Pods, Deployments, Services ne sont pas des scripts déguisés mais des types, avec leurs règles strictes et leurs effets bien précis.  [Si vous vous trompez de type, le système ne crie pas](https://garnaudov.com/writings/how-i-think-about-kubernetes/), il attend, puis vous le fait payer plus tard. Et vu comme ça, GitOps devient évident, kubectl redevient un outil d’observation, et K8s apparaît pour ce qu’il est vraiment : un runtime obstiné, littéral, et parfaitement cohérent. Le bug n’est presque jamais dans le cluster, il est dans ce qu’on lui a demandé.

💝 **Netronome :** C’est l'outil qui regarde le réseau pendant que vous faites semblant de dormir.  [Ça mesure, ça trace, ça alerte](https://github.com/autobrr/netronome/), et surtout ça se plaint à votre place quand les paquets se perdent ou que la bande passante fond sans prévenir. Un binaire Go tout-en-un, frontend compris, qui tourne avec une poignée de mégaoctets et zéro dépendance exotique. Vous le lancez, il surveille CPU, mémoire, disque, débit, pertes réseau, et même vos liens Tailscale sans ouvrir un seul port. Des agents légers, un tableau de bord vraiment sexy et archi lisible, des graphes et des alertes qui arrivent là où vous êtes déjà distrait, bref, on vous conseille chaudement de le tester.

🥇  **Retour d'expérience sur Pi-Hole :** J'ai pris un peu de temps pour décrire  [pourquoi et comment j'ai installé PI-Hole et Unbound](https://www.linkedin.com/pulse/retour-dexp%C3%A9rience-pi-hole-unbound-%C3%A0-la-maison-cyril-beaufrere-mvone/?trackingId=4uQfoh0oRKaV6%2Fwgh0iCJg%3D%3D)  à la maison, et quels sont les bénéfices que j'en tire. Les pubs ont disparu, mes pages chargent plus vite, et étrangement j’ai meilleure mine. Coïncidence ? Je ne crois pas.  

🤖 **XPipe, entire server infrastructure at your fingertips :** XPipe, c'est un hub local pour SSH, Docker, kubectl et consorts. Rien à installer sur les serveurs, il  [se contente d'orchestrer vos outils CLI existants](https://github.com/xpipe-io/xpipe), mais avec une surcouche qui évite de jongler entre dix terminaux, trois scripts bancals et une mémoire défaillante. Connexions rangées proprement, fichiers distants édités avec vos outils locaux, tunnels, conteneurs, sudo à la volée : tout ce que vous faisiez déjà, mais sans faire semblant d'aimer le bordel.

🐝 **The eBPF foundation's 2025 year in review :** Les freaks de la eBPF Foundation ont publié leur bilan 2025, et surprise, eBPF n’est plus un jouet de kernel pour hackers insomniaques, c’est devenu un truc sur lequel des gens raisonnables basent de vraies plateformes. Pas de feature révolutionnaire cette année,  [mais du travail ingrat et utile](https://ebpf.foundation/the-ebpf-foundations-2025-year-in-review/), comme de meilleurs tests dans le kernel, des runtimes plus sûrs, JIT audités, BTF mieux outillé, et un effort assumé pour que ça marche pareil sur x86, ARM et le reste du cirque habituel. Côté usage, on n’est plus dans la démo de conf car Meta, Datadog, Alibaba & co utilisent eBPF pour consommer moins de CPU, moins de réseau et moins d’argent. Et comme tout ce qui finit par marcher, ça attire maintenant chercheurs, fondations, subventions, meetups et programmes de fellowship.

🚀  **Snitch :** C’est ss/netstat  [mais pour des humains](https://github.com/karol-broda/snitch). Un outil qui te montre les connexions réseau sans te punir avec des colonnes illisibles et des flags cryptiques hérités de 1998. Tu veux voir qui parle à qui, sur quel port, et arrêter de plisser les yeux devant  `ss -tulpn`  ? Snitch te sort ça en TUI propre ou en tableaux lisibles, sans te demander un doctorat en regex réseau.

## The Observability Evolution: How AI and Open Source are Taming Kubernetes Complexity

![](https://storage.mlcdn.com/account_image/325165/5IKBqYgE2HKC3eGUxeWad2n8Xovok4Ec2SAQwnRK.png)

  

Merci à Arthur G de Toulouse pour le partage de ce papier de fin d'année, qui explique calmement ce que beaucoup vivent bruyamment : Kubernetes est devenu un sport extrême, et l'observabilité sert désormais de casque, de genouillère et parfois de psychologue.

L'article revient sur une évidence longtemps ignorée : à force d’empiler des clusters, des microservices et des métriques par millions, les humains ont décroché. Résultat, l'industrie redécouvre la valeur des interfaces lisibles, de l'open source bien pensé et de l'IA qui fait autre chose que des slides marketing.

En résumé, moins de YAML en apnée, plus de dashboards compréhensibles, un peu d'IA pour trier le bruit, et l'espoir naïf mais tenace que Kubernetes devienne enfin utilisable par autre chose qu’un DevOps barbu, insomniaque et vaguement résigné.

  

[Accéder au lien ->](https://cloudnativenow.com/editorial-calendar/best-of-2025/the-observability-evolution-how-ai-and-open-source-are-taming-kubernetes-complexity-2/)