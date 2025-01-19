+++
draft = "true"
title = "Architecture Sinkhole"
weight = 30
+++

## Sinkhole anti-pattern

Cette anti-pattern est fortement lié à [l'architecture Layered]({{% relref "/architecture_style_monolithic/layered" %}}). En effet, le principal risque dans architecture s'est de permettre à une requête traverse toutes les couches sans qu'aucune business logic n'ait été appliquée.

![Alt text](../images/Sinkhole-antipattern.png)

Par conséquence, l'entité de la base de données est remonté directement à la couche de présentation. Or cette entité en base de données contient peut-être plus d'informations que nécessaire à la vue.
