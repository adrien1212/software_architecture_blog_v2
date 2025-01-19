+++
draft = "true"
title = "Pourquoi le DDD ?"
weight = 1
+++

> [!ressource] Ressources
> - [CHAOS Report 2015](https://standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf)

Selon des études, environ 70 % des projets de logiciels ne sont pas livrés à temps, dans le respect du budget ou des exigences du client.

Le terme _crise du logiciel_ (software crisis) a été introduit en 1968. On pourrait supposer que les choses se sont améliorées au cours des 50 années qui ont suivi. En effet, de nombreuses approches, méthodologies et disciplines ont été introduites pour rendre l'ingénierie logicielle plus efficace : Manifeste Agile, extreme programming, développement piloté par les tests (TDD), DevOps, etc. Malheureusement, les choses n'ont pas beaucoup changé. Les projets échouent encore assez souvent et la crise du logiciel est toujours là.

## L'approche DDD

Le DDD propose de s'attaquer à la source des echecs avec un angle différent. Une communication efficace est le thème central des outils et des pratiques DDD. LE DDD peut ainsi être divisée en deux parties : stratégique et tactique.

- Les outils stratégiques de DDD sont utilisés pour analyser la business logic, et pour favoriser une compréhension commune entre les différentes parties prenantes.
- Les patterns tactiques du DDD nous permettent d'écrire du code qui refléte le domaine métier (business logic), à répondre à ses objectifs et à parler le langage métier.

Les patterns _stratégiques_ et _tactiques_ du DDD alignent la conception du logiciel sur le domaine d'activité. D'où le nom (business) domain-driven (software) design.

## Comment ?

Avec l'approche DDD l'implémentation d'un logiciel consiste en plusieurs pièces d'un puzzle :

- Se concentrer sur le domaine métier
- Explorer le _modèle_ avec l'aide des experts métiers
- Parler un même _ubiquitous language_ dans un _Bounded Context_
