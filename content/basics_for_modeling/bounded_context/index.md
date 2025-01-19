+++
title = "Bounded Context"
weight = 50
+++

> [!ressource] Ressources
> - [https://martinfowler.com/bliki/BoundedContext.html](https://martinfowler.com/bliki/BoundedContext.html)
> - [Différents types de relation](https://github.com/ddd-crew/context-mapping)

  {{% /notice %}}

> [!danger] Définition
>  Chaque service comprend tout ce qui lui est nécessaire pour fonctionner, classes, sous-composants, base de données.

{{% notice style="note" title= " " icon=" " %}}
Un Bounded Context est implémenté et maintenus par une seule équipe
{{% /notice %}}

Un Bounded Context représente une limite spécifique et bien définie à l'intérieur de laquelle les termes, les concepts et les règles d'une logique métier sont définis et cohérents. Il s'agit d'un moyen de segmenter un système logiciel plus vaste en parties plus petites et plus faciles à gérer.

![Bounded Context](https://martinfowler.com/bliki/images/boundedContext/sketch.png?width=40pc)

## Exemple

Imaginez que vous ayez un système avec des clients et des comptes bancaires. On peut considérer ces deux éléments comme faisant partie d'un bounded context "paiements", dans lequel les paiements ont généralement besoin des deux éléments. Dans un monde de microservices, vous pourriez avoir un microservice pour les clients et un autre pour les comptes bancaires avec deux bases de code différentes.

Mais les deux concepts sont si étroitement liés pour certains processus (bounded context) qu'il y a une interaction constante entre les deux. Nous aurons donc énormément d'appels API, on peut se demander s'il ne serait pas plus simple d'avoir une seule base de code et de faire des appel de méthodes classiques.

- Par exemple, de quoi ai-je besoin pour afficher le nom du client et les détails de son compte bancaire sur le même écran ?
- Cela peut devenir encore plus compliqué lorsque chaque microservice possède sa propre base de données et qu'il faut réfléchir à la manière de tester les différents composants.

## Caractéristiques

### Indépendant

Chaque Bounded Context doit pouvoir être mis en œuvre en tant que service/projet individuel, ce qui signifie qu'il est implémenté, mis à jour et versionné indépendamment des autres Bounded Context.

### Isolation des données

L'architecture microservices essaie d'éviter toute forme de couplace dont le partage de schemas de de base de données.

Par conséquent, chaque service devient responsable de sa source de vérité.

## Intéractions avec d'autres Bounded Context

Malgré que les Bounded Context sont indépendants ils doivent interagir les uns avec les autres. Il existe plusieurs patterns permettant d'assurer la communication entre plusieurs Bounded Context

> [!ressource] Ressources
- Chapitre 4 - Learning Domain Driven Design

## Bounded Context VS Microservices

> [!ressource] Ressources
> - [Bounded Contexts are NOT Microservices](https://vladikk.com/2018/01/21/bounded-contexts-vs-microservices/)
> - [Video - Bounded Contexts, Microservices, and Everything In Between - KanDDDinsky 2018 ](https://youtu.be/dlnu5pSsg7k)
