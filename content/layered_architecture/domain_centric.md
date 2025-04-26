+++
title = "Se center sur le domaine"
weight = 15
+++

Dans la section précédente [inconvenients]({{< relref "inconvenients" >}}) nous avons vu que l'architecture en couche classique présente des inconvénients. Les patrons architecturaux *Clean Architecture*, *Hexagonale Architecture* et *Onion Architecture* présentent des caractéristiques communes

## Centré sur le domaine
Le concept le plus important est qu'elles soient centrées sur le *domaine métier*. Là où l'architecture en couche nous pointons vers la base de données, ici nous inversons les dépendances pour que le *domaine métier* (aka coeur applicatif) soit au centre de nos architectures.

> In contrast to the hexagonal architecture (here in its original representation by Alistair Cockburn without explicit ports), the layered architecture does not focus on the business logic but on the database [^1]

![hexa vs layered](layered_architecture/images/hexa_vs_layered.png)

Et ces trois architecture *Clean*, *Hexagonale* et *Onion* partage ce même principe malgré des différences d'implémentation

![](https://www.happycoders.eu/wp-content/uploads/2023/01/hexagonal-architecture-vs-clean-architecture-2.v4-800x310.png)

### Pourquoi est-ce important ?
Avoir une architecture centré sur le domaine est important pour garantir la maintenabilité et l'évolutivité de l'application. L'article [Hexagonal Architecture – What Is It? Why Use It?](https://www.happycoders.eu/software-craftsmanship/hexagonal-architecture/) explique très bien cela.

Lorsqu'on souhaite par exemple connecter notre application avec une application tierce, dans un architecture classique n'importe quelle couche va pouvoir appeler cette application tierce (souvent la *Business Logic*). Notre système dépend maintenant de cette application et de ces évolution. Ainsi pour garantir que notre système ne soit pas compromis par une application tierce nous ne souhaitons pas que notre coeur applicatif dépendante de cette application tierce. Pour ce faire on peut par exemple implémenter des Port/Adapter (autre nom de l'architecture hexagonale)

![alt text](layered_architecture/images/hexa_vs_layered_2.png)


### Comment implémenter le coeur applicatif ?
D'abord, qu'est-ce que le "cœur applicatif" exactement ? Le cœur (ou application core) est la partie de ton projet qui contient :
- Les entités métiers (modèles purs, sans dépendance technique).
- Les règles métiers (services métiers, use cases).
- Les interfaces (ports) que la couche extérieure doit respecter (ex: repository, service externe).
- Les exceptions métiers.

=> **Règle d’or : PAS de framework (pas de SQL, pas de HTTP, pas de classes Spring, pas d’ORM ici).**

Mais libre à chacun de l'implémenter comme il le souhaite. On peut néanmoins noter que le [Domaine Driven Design]({{< relref "domain_driven_design/index" >}}) et les architectures centrés sur le domaine se complètent exceptionnellement bien car le permet de bien structurer ce coeur applicatif (entité, règles métiers).

> [!definition] A retenir
> Tout (BDD, APIs, UI, fichiers, etc.) tourne autour de la *Business Logic* (coeur applicatif), mais sans jamais l'influencer directement.

[^1]: https://www.happycoders.eu/software-craftsmanship/hexagonal-architecture/