+++
draft = "true"
title = "Database Partitioning"
weight = 30
+++

> [!ressource] Ressources
> - [Lesson 136 - Managing Shared Database Changes ](https://youtu.be/cvcX5XG6oew)


## Le problème
> [!danger] Définition
>  Un changement de règle en base de données peut impacter l'ensemble des services

Dans une architecture base de données tradictionnelle nous avons un *schema* qui contient un ensemble de *tables* et nous avons des *Entités Java* qui représente ces tables sous la forme de code Java (e.g. JPAEntity) et ces entités sont regroupées dans une librairie à part qui est partagée entre les différents services (ici `db_model.jar`).

![DB partitioning](../images/db_partitioning1.png)

Mais un chagement des règles dans le schéma de la base de données entrainera une mise à jour de `db_model.jar` donc tous les services se retrouvent impacter. Pour éviter ceci, il faut que chaque service partage son `jar`. 

## Une solution

Une façon de procéder est d'utiliser un *partitionnement logique de la base de donnée* (et non physique). Nous pourrons avoir les partitions suivantes :
- une partition avec toutes les données communes
- des partitions pour les domaines spécifiques 

![DB partitioning](../images/db_partitioning2.png?width=37pc)


Par conséquent, si on doit mettre à jour le modele de base de données *commande* seul le service *Commande* sera impacté. Les autres ne partageant aucune données n'auront pas besoin d'être retesté ni redéployé.
