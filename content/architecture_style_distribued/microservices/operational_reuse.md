+++
draft = "true"
title = "Partage de données"
weight = 20
+++

## Problématique

Comment pouvons devons nous gérer quand des données sont dans deux microservices et que la valeur ajoutée nécessite un couplage.

Par exemple _nous souhaitons récupérer le nombre de commande passé par chaque client alors nous couplons le service Client et Commande_.

### Trois solutions possibles

![components coupling](../images/couplage_solution.png)

- **Data duplication** qui consiste à avoir le nombre de commande stocké à la fois dans le service Commande et Client. Par conséquent, lorsqu'une commande est ajoutée/supprimée nous devons mettre à jour le montant des deux services
- **Service Query** où le service Client fait une requête au service Commande mais ceci pause un problème de surcharge du traffic et du service. En effet si nous avons 2000 clients alors nous devons contacter 2000 fois le service Commande.
- **Aggregation** où nous créons un troisième service qui agrège les données des deux services.

### Approche recommandées

> [!danger] Définition
>  Avec l'architecture microservices on préférera dupliquer plutôt que coupler

Étant donnée qu'avec l'architecture microservices on essaie d'éviter le couplage nous préférerons dupliquer le composant dupliquer.

## Réutilisation

Cependant certain composant ont une réelle valeur ajoutée uniquement lorsque nous réalisons un couplage. C'est le cas d'un système de _Logging_ (logs) ou un _Circuit Breaker_.
De plus pour ces composants nous pouvons nous demander si nous préférions que chaque équipe en soit responsable ou avoir une organisation plus globale avec une équipe d'infrastructure.

### Sidecar pattern

Le composant sidecar gère toutes les questions opérationnelles que les équipes ont intérêt à coupler. Ainsi, lorsque le moment est venu de mettre à jour l'outil, l'équipe chargée de l'infrastructure peut mettre à jour le sidecar, et chaque microservice bénéficie de la nouvelle fonctionnalité.

![Sidecar](../images/sidecar.png)
