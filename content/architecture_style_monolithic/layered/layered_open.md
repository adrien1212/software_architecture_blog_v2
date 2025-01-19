+++
draft = "true"
title = "Couche Ouverte"
weight = 15
+++

En ayant des couches fermées nous ne pouvons pas une couche ne peut intéragir qu'avec sa n+1 ou sa n-1. Néanmois comment pouvons nous restraindre l'accès à certain composant de couche n-1 ou n+1 ? 

Dans l'architecture suivante, le couche métier a défini des composants partagées, par conséquent la couche de présentation peut y accéder. Cependant, la couche présentation n'a pas à connaitre ces composants, comment faire ?

![Alt text](../images/open1.png)

Nous pouvons découper la couche métier en deux, ainsi la partie présentation n'aura maintenant accès qu'à la partie métier. Les services partagées sont dans une couche inférieure. Et comment la couche business n'est pas obligée de passer par la couche service nous disons que celle-ci est *ouverte* :
- la couche métier peut contacter la couche service
- la couche métier peut aussi contacter la couche persistance

![Alt text](../images/open2.png)

## Conclusion
L'utilisation du concept de couches ouvertes et fermées permet de définir la relation entre les couches de l'architecture et les flux de demandes. Il fournit également aux développeurs les informations pour comprendre les différentes restrictions d'accès aux couches.
