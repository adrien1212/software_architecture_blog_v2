+++
draft = "true"
title = "Autres considérations"
weight = 10
+++

## Implémenter le coeur 
Le coeur applicatif peut être implémenté de différentes façon :
- nous pouvons utiliser une [architecture Layered]({{% relref "../Layered" %}})
- nous pouvons le découper en différent domaine logique qui intègre un ou plusieurs plugins. Par exemple le service de paiements pourra faire appel à plusieurs plugin (carte bancaire, paypal, etc ...)

![core organization](../images/core_organization.png)


Une alternative consiste séparer la couche présentation du coeur applicatif (elle peut avoir ou non des plugins).
![core organization](../images/core_organization2.png?width=30pc)

## Gestion des données
Les données nous pouvons :
- soit avoir une base de données unique gérées par le Kernel
- soit chaque plugin gère ses propres données (in-memory ou en base de données)

![BDD](../images/db.png?width=35pc)
