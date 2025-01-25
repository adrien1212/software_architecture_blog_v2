+++
title = "Bounded Context"
weight = 50
+++

> [!ressource] Ressources
> - [https://martinfowler.com/bliki/BoundedContext.html](https://martinfowler.com/bliki/BoundedContext.html)


> [!definition] Définition
>  Chaque service comprend tout ce qui lui est nécessaire pour fonctionner, classes, sous-composants, base de données.

> [!info] Info
> Un Bounded Context est implémenté et maintenus par une seule équipe

Un Bounded Context représente une limite spécifique et bien définie à l'intérieur de laquelle les termes, les concepts et les règles d'une logique métier sont définis et cohérents. Il s'agit d'un moyen de segmenter un système logiciel plus vaste en parties plus petites et plus faciles à gérer.

![Bounded Context](https://martinfowler.com/bliki/images/boundedContext/sketch.png?width=40pc)

## Exemple

L'exemple classique est celui d'un site web de commerce :
- In possède un model de Commande, avec tous les articles, le prix, les taxes, les remises, l'adresse de livraison, etc. 
- Mais une fois que la Commande arrive dans l'entrepôt, le model prend une autre signification et un autre but. Les personnes qui travaillent dans l'entrepôt ne s'intéressent pas aux prix, aux taxes et aux remises. Ils s'intéressent au bordereau d'expédition, avec les UGS des produits, l'emplacement des rayons, les détails de l'expédition, etc. 

Ainsi un même nom (ici Commande) peut avoir deux significations distinctes suivant le Bounded Context où il se trouve. 

## Caractéristiques

### Indépendant

Chaque Bounded Context doit pouvoir être mis en œuvre en tant que service/projet individuel, ce qui signifie qu'il est implémenté, mis à jour et versionné indépendamment des autres Bounded Context.

### Isolation des données

L'architecture microservices essaie d'éviter toute forme de couplage dont le partage de schemas de de base de données.

Par conséquent, chaque service devient responsable de sa source de vérité.

## Intéractions avec d'autres Bounded Context

Malgré que les Bounded Context sont indépendants ils doivent interagir les uns avec les autres. Il existe plusieurs patterns permettant d'assurer la communication entre plusieurs Bounded Context

> [!ressource] Ressources
> - Chapitre 4 - Learning Domain Driven Design
> - [Différents types de relation](https://github.com/ddd-crew/context-mapping)