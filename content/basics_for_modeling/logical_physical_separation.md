+++
draft = "true"
title = "Séparation Physique/Logique"
weight = 35
+++

> [!ressource] Ressources
> - [Application_Architecture_and_Design_October_2008-20612-Part19](https://www.uop.edu.jo/PDF%20File/petra%20university%20ASP.NET_3.5_Application_Architecture_and_Design_October_2008-20612-Part19.pdf)
> - [https://codeopinion.com/microservices-gets-it-wrong-defining-service-boundaries/](https://codeopinion.com/microservices-gets-it-wrong-defining-service-boundaries/)

Dans les architectures qui vont suivre nous allons beaucoup parler de séparation (découpage) physique ou logique de notre application. Regardons donc ce que signifie ces deux termes.

## Séparation Physique
> [!danger] Définition
>  Le code est séparé physiquement en différents ensembles qui peuvent être déployés unitairement

Par exemple, nous pouvons avoir un ensemble (assembly) qui regroupe les fonctionnalités Web et un ensemble qui regroupe les fonctionnalités métiers. Ces deux ensemble pourrait être déployé de manière séparée sur différents serveurs. Ils fontionnement en autonomie l'un de l'autre

![Séparation physique](https://codeopinion.com/wp-content/uploads/2022/05/7-1-768x650.png?width=20pc)

## Séparation Logique
> [!danger] Définition
>  La séparation logique que nous séparons logiquement le code, mais que l'ensemble de l'application fera partie d'un seul ensemble physique.

En d'autres termes, nous pouvons positionner notre code dans différent ensembles (e.g. pour améliorer la lisibilité) mais le déploiement d'un seul ensemble n'est pas possible. Pour que l'application fonctionne correctement il faut que tous les ensembles séparés logiquement soient déployés en même temps.

![Séparation logique](https://codeopinion.com/wp-content/uploads/2022/05/5-1-768x678.png?width=20pc)

Une séparation logique est verticale tandis qu'une séparation physique est horizontale.

### N-tiered vs Layerer
L'architecture *N-Tier* est une séparation physique du code. Tandis qu'une architecture *Layer* est une séparation logique du code (cf [Layered vs N-tier]({{% relref "../architecture_style_monolithic/layered/layered_vs_ntier.md" %}})).

Mais ces deux concepts peuvent être fortement liés. Une *layer* peuvent devenir un *tier* si elle peut être séparée physiquement
des couches qui la consomment. Par exemple, chaque couche logique (vue, présentation, base de données) s'exécute sur des serveurs séparés.



![Séparation logique et physique](https://codeopinion.com/wp-content/uploads/2022/05/8-1-768x816.png?width=20pc)


Dans l'image du dessus nous avons une seule base de données, qui peut être dans une couche physique à part et elle contient deux schémas qui sont eux des séprations logiques. Pareil pour l'interface graphique, nous pouvons avoir des composants microfronted.

### Privilégier découpage logique

Ainsi, si notre code est déjà logiquement séparé en couches distinctes (interface utilisateur, logique métier, accès aux données), cela peut rendre plus facile la distribution physique de ces couches sur des serveurs distincts dans une architecture n-tier. On préviligera donc en premier un découpage logique.
