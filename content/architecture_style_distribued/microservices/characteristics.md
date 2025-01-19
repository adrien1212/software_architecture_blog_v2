+++
draft = "true"
title = "Caractéristiques"
weight = 15
+++

> [!ressource] Ressources
> - [https://martinfowler.com/articles/microservices.html - MUST READ](https://martinfowler.com/articles/microservices.html)

[Martin Fowler et James Lewis](https://martinfowler.com/articles/microservices.html#CharacteristicsOfAMicroserviceArchitecture) nous donnes les 9 caractéristiques suivantes pour un microservices :

- Componentization via Services
- Organized around Business Capabilities
- Products not Projects
- Smart endpoints and dumb pipes
- Decentralized Governance
- Decentralized Data Management
- Infrastructure Automation
- Design for failure
- Evolutionary Design

### Componentization via Services

Comme d'écrit [modularité]({{% relref "../../basics_for_modeling/module_vs_services.md" %}}), il y a deux moyens de réaliser de la modularité :

- soit en créant des librairie
- soit en créant des services

L'architecture microservices utilisera la _Componentization via Services_ car utiliser des services permet :

- d'avoir un déploiement indépendant des composants. Si on modifie un composant alors nous n'avons qu'à déployer se composant, tandis que si nous utilisons des librairies nous devrions redéployer tous les composants ayant une dépendance vers la librairie mise à jour.
- chaque déploiement d'un microservice n'impactera les autres (_inflexible deployment_)
- définition d'interface, lorsqu'on veut exposer notre service nous n'avons pas d'autre choix que de définir correctement nos APIs.
- allocation de ressources (hardware) pour chaque service en fonction de ses besoins. Ceci n'étant pas possible si nous travaillons avec des librairies.

### Organized around Business Capabilities

Dans une architecture monolithique nous pourrions avoir une équipe responsable par couche. Mais cette approche est néfaste lorsqu'on souhaite impacter une fonctionnalité car il faut coordonner les équipes des 4 couches.

![equipe couche](../images/equipe_couche.png?width=15pc)

Avec une approche par microservices nous avons des équipes responsable d'un service complet. L'équipe à maintenant responsable de son service et de sa complétion dans les coûts et les temps.

![equipe ms](../images/equipe_ms.png?width=15pc)

- Développement plus rapide
- Des frontières bien définies : l'équipe sait ce qui doit être inclus ou non dans son microservice

### Product not project

La gestion de projet est également impacté avec l'approche microservice. On ne souhaite plus simplement délivrer du code qui marche puis l'équipe passe à autre chose mais créer un logiciel qui répond aux attentes.

Chaque produit nécessite une forte relation avec le client et l'équipe prend la responsabilité du support du microservice après sa livraison. En soit on retrouve l'approche Agile dont Martin Fowler est l'un des signataire.

> You build it, you run it

### Smart endpoints and dumb pipes

Un projet SOA classique se compose deux attributs "compliqués" :

- un ESB : fait la médiation entre les services
- WS-\* protocole : extension du protocole SOAP

Avec l'approche microservice, nous allons utiliser des _dumb pipes_ (i.e. des protocoles simples) :

- HTTP protocole en exposant des REST API

Chaque microservice expose ses API REST et communiquent entres eux via le protocole HTTP. Nous n'avons plus besoin d'ESB. Ainsi :

- Le développement est accélérer via l'utilisation de protocole simple et standard
- La maintenance est également simplifiée

### Decentralized Governance

L'une des conséquences de la gouvernance centralisée est la tendance à la standardisation par les instances plus haute dans l'entreprise :

- quelle plateforme de développement
- quelle base de données
- comment les log sont créés
- etc ...

Avec une gouvernance décentralisé chaque équipe prend des décisions et est responsable de son service. Ceci est facilement possible grâce à la nature des microservices qui sont de couplage faible et leur communication standardisée.

### Decentralized Data Management

Dans les architectures monolithiques et SOA nous n'avons qu'une seule base de données partagée.

En microservices, chaque service possède sa propre base de données. Mais ceci est une caractéristique très controversée :

- car ce n'est pas toujours possible
- il faut gérer les problèmes de transactions distribués, de duplication des données, etc.

Les avantages de ce système sont :

- la bonne base de données pour la bonne tâches; toutes les base de données ne sont pas équivalente
- encourager l'isolation

### Infrastructure Automation

![infrastructure automation](../images/automation.png)

- Automated Testing
- Automated Deployment

En microservices, l'automatisation est essentielle car nous avons des cycle de déploiement qui doivent être court.

### Design for failure

Avec un architecture microservice nous avons beaucoup de process et de traffic réseaux. Par conséquent nous pouvons avoir beaucoup d'erreur, le code doit donc prendre en compte que des erreurs peuvent subvenir et doit les gérer avec rigueur (logging et monitoring) :

### Evolutionary Design

Changer sa structure pour tendre vers du microservices doit se faire de manière graduelle.

> The key property of a component is the notion of independent replacement and upgradeability

## Conclusion

Les microservices sont un style architectural qui structure une application comme une collection de services qui sont :

- Utilisent des protocoles standards
- Déployables de manière indépendante
- Faiblement couplés
- Facilement maintenable et testable
- Maintenu par une petite équipe
