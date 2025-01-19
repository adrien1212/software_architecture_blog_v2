+++
draft = "true"
title = "All Archiectures Versus"
weight = 98
+++

> [!ressource] Ressources
> - [Hexagonal, Onion & Clean Architecture](https://youtu.be/JubdZIdLQ4M)
> - [Onion Architecture vs Clean Architecture Comparison](https://youtu.be/KqWNtCpjUi8?si=JJjJWEc5dalKlWSc)

## Layered Architecture
Traditionnellement, nous avons la Presentation qui connait et dépend du Business qui connait et dépend de la Persistance.

![layered](../images/layered.png?width=30pc)

Mais que se passe-t-il si nous décidons d'inverser la dépendance entre la Logique métier et la Persistance ?

![layered with DI](../images/layered_di.png?width=30pc)

- La partie Business appelle toujours la couche Data Access
- Mais ne la connait plus qui est appelé (fichier, base de données, in-memory, ?), elle partie métier devient indépendante 

### Comment ?

![layered with DI](../images/layered_interface.png?width=30pc)

Pour ce faire :
- la partie Business (`Service`) dépend d'une interface (`IRepository`) qui est implémenté par la couche de Persistance (`Repository`)
- Et c'est en positionnant `IRepository` dans Business (et non dans Data Access) nous inversions la dépendance
  ![Si repository](../images/di_irepo.png?width=30pc)

{{% notice style="note" title="Conséquence" icon=" " %}}
Les *patrons architecturaux* Hexagonale, Onion et Clean Architecture se basent sur le *style architectural* Layered en y ajoutant le concept d'inversion de dépendances
  {{% /notice %}}

## Hexagonale
Nous avons la naissance du patron architectural Port/Adapter (ou Hexagonale). En effet :
- l'interface `IRepository` est un Port
- l'implémentation `Repository` un adaptateur

![Port Adapter](../images/port_adapter.png?width=30pc)

![Port Adapter - Hexa](../images/port_adapter2.png?width=30pc)

Par conséquent, le **coeur applicatif n'a aucune dépendance**; aucune référence vers le monde externe

## Onion
Le coeur applicatif peut lui être divisé en différente couche (layers) avec des dépendances qui ne pointent que vers l'intérieur

![Onion](../images/onion.png?width=30pc)

![Onion Detail](../images/onion_detail.png?width=30pc)


## Clean Architecture
La Clean Architecture reprend l'ensemble de ces idées pour y donner du sens. On va y nommer les couches

![Clean Architecture](../images/clean_architecture.png?width=30pc)


## Conclusion
- Fondamentalement, l'architecture hexagonale (alias Ports/Adaptateurs) définit le cœur (logique métier) et la périphérie (services et composants externes) sans rien dire de la structure interne du cœur.
- Ses descendants, les architectures Onion et Clean, entrent dans les détails de la structuration du coeur en le divisant en plusieurs couches, conformément aux principes DDD. 
