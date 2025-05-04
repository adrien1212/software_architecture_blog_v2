+++
title = "Caractéristique d'un module"
weight = 50
+++

> [!ressource] Ressources
> - [Modular Monolith: A Primer](https://www.kamilgrzybek.com/blog/posts/modular-monolith-primer)

Dans la section [Définition d'un module]({{< relref "fundamental_principles/modularity/definition" >}}) nous avons abordé les caractéristiques théoriques d'un module. Ici grâce à l'article en ressource nous comprenons comment les mettre en oeuvre.

>Several important issues have been raised here. In order to have modular architecture, you must have modules and these modules:
>
>    - must be independent and interchangeable and
>    - must have everything necessary to provide desired functionality and
>    - must have defined interface

Victor RENTEA dans son talk [The Modular Monolith - a Practical Alternative to Microservices](https://youtu.be/nuHMlA3iLjY?t=1007) nous proposes les deux slides suivantes

![alt text](fundamental_principles/modularity/characteristics/images/victor.png)

![alt text](fundamental_principles/modularity/characteristics/images/victor2.png)

Dans cette seconde slide on remarque bien :
- une implémentation (coeur métier) protégée
- par des interfaces publique (*external interface*) ou privée (*internal*)
  - Et plusieurs moyens de communication entre les modules (*in-memory*, HTTP/REST ou encore de l'asynchrone)