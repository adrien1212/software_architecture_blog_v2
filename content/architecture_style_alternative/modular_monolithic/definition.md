+++
draft = "true"
title = "Définition"
weight = 15
+++

> [!ressource] Ressources
> - [Modular Monolith: A Primer](https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer)
> - [Shopify - Deconstructing the Monolith: Designing Software that Maximizes Developer Productivity](https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity#)
> - [Caractéristiques d'un module]({{% relref "../../modularity_concepts/characteristics" %}})

## Monolith et Modularization
Dans son article, [Modular Monolith: A Primer](https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer), Kamil Grzybek nous donnes les définitions suivantes.

> Monolith is nothing more than a system that has exactly one deployment unit. No less no more.

> Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

Puis dans le second article [Modular Monolith: Architectural Drivers](https://www.kamilgrzybek.com/blog/posts/modular-monolith-architectural-drivers), il nous rappelle les caractéristiques d'une architecture Modular Monolithique :
- est un système qui a exactement une unité de déploiement
- la modularisation signifie que le module :
    - doit être indépendant, autonome
    - possède tout ce qui est nécessaire pour fournir la fonctionnalité souhaitée (séparation par domaine d'activité)
    - est encapsulé et possède une interface/un contrat bien défini(e)

Ainsi [Simon Brown définit](https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity#) l'architecture Modular Monolithique

> [!danger] Définition
>  A modular monolith is a system where all of the code powers a single application and there are strictly enforced boundaries between different domains.
