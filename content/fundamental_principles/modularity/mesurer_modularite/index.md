+++
title = "Mesurer Modularité"
weight = 80
+++

## Couplage et Cohesion
La modularité d'un module peut se mesurer grâce à plusieurs métriques. Les deux principales sont :

- Le [couplage]({{< relref "fundamental_principles/couplage_and_cohesion/index" >}}) : l'objectif est d'avoir des modules ayant un faible couplage entre eux
- La [cohesion]({{< relref "fundamental_principles/couplage_and_cohesion/index" >}}) : les éléments regroupés au sein d'un même module doivent avoir une forte cohésion, ils couvrent les mêmes objectifs, la même fonctionnalité

Un module avec très peu de comportement ne sera pas utile s'il n'est pas couplé à d'autres modules. De même un module trop conséquent sera trop sur à réutiliser dans un autre contexte. Ainsi quand on conçoit un module la difficulté est de trouver la bonne granularité.

## Granularité et Poids
Dans cette section nous abordons également les notions de _Granualarité_ et de _Poids_ d'un module
Ces définitions sont également valable pour des autres composants (e.g. services, classes Java)

### Granularité

> [!definition] Définition
> La granularité est la mesure dans laquelle un module est décomposé en plusieurs parties

Les modules gros grains (_coarse-grained_) ont tendance a avoir un comportement plus riche (il font plus de chose) que les modules à grains fins (_fine-grained_). Pour maximiser la réutilisation on essaie de composé des coarsed-grained module en utilisant des fine-grained modules. Mais ceci entraine beaucoup de dépendances entres les modules à grains fins. On notera également que gérer le déploiement d'un seul gros module est plus simple que le déploiement de plusieurs petits modules.

### Granularité et Couplage/Cohesion
Le choix de la granularité influence à la fois le couplage et la cohésion. 
- Les modules à granularité fine peuvent avoir une plus grande cohésion, 
- mais peuvent conduire à un couplage accru s'ils sont interdépendants. 
<br> 

- Les modules de plus grande taille peuvent avoir un couplage plus faible 
- mais peuvent entraîner une cohésion moindre s'ils gèrent de nombreuses responsabilités.

> [!note] Note
>  Coarse-grained modules sont plus facilement utilisables, mais les fine-grained modules sont plus facilement réutilisables

### Poids

> [!definition] Définition
> Le poids est la mesure dans laquelle un module dépend de son environnement

Un module poids lourd (_heavyweight_) dépend de son environnement opérationnel, tandis qu'un module poids léger (_lightweight_) évite ces dépendances. La question se pose donc d'embarquer les dépendances liés à l'OS par exemple à l'intérieur du module (donc en faire un heavyweight module) ou de gérer les dépendances liés à l'OS lors du déploiement du module.

> [!note] Note
>  Heavyweight modules sont plus facilement utilisables, mais les lightweight modules sont plus facilement réutilisables

On retrouve également un compromis à faire. Si nous créons un coarse-grained module basé sur 4 fine-grained modules. Si chacun de ces modules n'a besoin que d'un seul applicatif et OS pour fonctionner on peut encapsuler tous les code de l'environnement dans module. On obtient ainsi 4 fine-grained/heavyweight modules.
A contrario, si nous souhaitons réutiliser ces modules sur différents environnements nous devons placer le code de configuration des environnement en dehors des modules et s'assurer qu'il peut être configurer à la volé suivant l'environnement, on obtient donc 4 fine-grained/lightweight modules.

### Compromis

La granualarité et le poids sont des considérations importantes dans la conception de modules. Il faut trouver le bon équilibre

- Coarse-grained et Heavyweight modules sont plus facilement _utilisables_
- File-grained et Lightweight modules sont plus facilement _réutilisables_