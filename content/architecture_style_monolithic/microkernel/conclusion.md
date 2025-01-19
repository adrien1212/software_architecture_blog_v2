+++
draft = "true"
title = "Conclusion"
weight = 15
+++

## Avantages
L'architecture microkernel offre de nombreux avantages. 
- Modularité : l'ajour, la mise à jour ou la suppression d'un module est très simple.
- Fiabilité : même en cas de crash d'un composant, l'application peut rester utilisable.
- Maintenance : les plugins gèrent leur propre maintenance

## Discussions
Elle offre deux choix d'implémentation pour la communication :
- point-à-point, nous avons donc une architecture monolithique
- via APIs, nous avons donc une architecture pouvons être distribuée. Il faut donc prendre un compte les difficultés de deploiements et le cout supplémentaire.
