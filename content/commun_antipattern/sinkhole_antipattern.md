+++
title = "Architecture Sinkhole"
weight = 20
+++

## Définition
> [!definition] Définition
> Occurs when requests move from layer to layer as simple pass-through processing with no business logic performed within each layer

S'en tenir à un ensemble fixe de couches offre un certain niveau d'isolation, mais dans les cas plus simples, cela peut s'avérer excessif sans apporter de bénéfice perceptible, si ce n'est le respect des directives d'architecture convenues.
Chaque couche ne fait que relayer l'appel à la couche inférieure sans ajouter de valeur. L'exemple suivant illustre ce scénario assez courant

![](sinkhole_antipattern.png)

## Quand le retrouve-t-on ?
Cette anti-pattern est fortement lié à [l'architecture Layered]({{% relref "/architecture_style_monolithic/layered" %}}). En effet, le principal risque dans architecture s'est de permettre à une requête traverse toutes les couches sans qu'aucune business logic n'ait été appliquée.

> If 80 percent of the requests are sinkholes, it a good indicator that the layered architecture is not the correct architecture style for the problem domain.

Si vous vous retrouvez dans ce cas, cela signifie que votre métier n'est pas très complexe et peut se résumer en grande partie à des appels CRUD. Dans ce cas là, il peut être intéressant de rendre vos couches ouvertes (voir Layered Architecture) et d'autoriser les appel de la couche de *Présentation* directement à la couche de *Persistence*.