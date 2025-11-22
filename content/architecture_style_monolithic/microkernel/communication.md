+++
draft = "true"
title = "Communication"
weight = 5
+++

> [!ressource] Ressources
> - [https://www.alibabacloud.com/blog/what-is-microkernel-architecture-design_597605](https://www.alibabacloud.com/blog/what-is-microkernel-architecture-design_597605)

La principale difficulté de l'architecture microkernel est la communication: 
- entre le coeur applicatif (le kernel) et les plugins
- entre les plugins

## Registre
Mais avant de pouvoir communiquer, il faut connaitre avec *qui* on peut communiquer et *comment* on communique. Pour ce faire, le coeur applicatif va utiliser un registre qui contient des informations sur chaque module (son nom, les détails du contrat, le format, protocole d'accès à distance si besoin).

Le format peut être un XML, un JSON ou un objet (e.g. DTO Java) et les détails du contrat (i.e. paramètres d'entrées et de sortie) sont fournis par le service appelé.

## Communication Kernel-Plugins
La communication avec le coeur peut se faire de deux manières :
- point-à-point
- via APIs REST

### Point-à-point
Avec cette approche les plugins sont compilés sous la forme d'exécutable (e.g. `jar`) puis :
- le coeur applicatif appelle les plugins grâce un appel de fonction classique via l'interface (i.e. code java)
- le plugin peut appeler le coeur applicatif via l'interface également

![point to point](../images/point-to-point.png?width=40pc)



### REST
Les modules peuvent également être mis en œuvre comme des services à distance et accessibles par le biais d'interfaces REST à partir du système central.

![REST](../images/rest.png?width=40pc)

Avec une communication point-à-point notre architecture microkernel est considéré comme monolithique mais si on opte pour une approche REST alors nous pouvons nous orienter vers une architecture microkernel distribuée. En effet ce type d'architecture permet de gérer :
- la scalabilité de notre système; si plugin plus utilisé que les autres nous pourons le scaler
- d'avoir une communication asynchrone; avec l'approche point-à-point communication est forcément synchrone

Néanmoins, n'oublions pas de prendre en compte que de passer d'une architecture monolithique à une architecture distribuée (ici avec REST) crée de la complexité et un coût supplémentaire.

### Comment choisir ?

{{% notice style="note" %}}
The choice of whether to make the communication to plugin components from the core system point-to-point or remote should be based on specific requirements and thus requires a careful trade-off analysis of the benefits and drawbacks of such an approach.
{{% /notice %}}

## Communication Plugin-Plugin
Le coeur applicatif est responsable de coordonner les communications entre les différents plugins. Une communication directe entre deux plugins est fortement déconseillée. En effet, si un service est indisponible ou remplacé, les autres processus qui communiquent avec lui doivent en être informés. Nous devons donc envoyer un ensemble de notifications à tous les plugins. Maintenant en centralisant dans le kernel, seul ce dernier a besoin d'être au courant. Ceci se fait généralement au moyen de *bus*.

![microkernel bus](../images/bus.png?width=20pc)
