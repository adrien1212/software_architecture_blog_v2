+++
draft = "true"
title = "Complexité"
weight = 7
+++

> [!ressource] Ressources
> - [The Nature of Complexity](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=complexity)

La complexité c'est l'ensemble des choses qui rendent la compréhension et la modification d'un système difficile
- que signifie ce code ?
- quelle partie du logiciel doit-on modifier pour ce nouveau besoin ?
- etc ...

## Symptôme de la complexité  

- **Change amplification**: a simple change requires many code modifications.
- **Cognitive load**: have to load a lot of information in your mind in order to make a change.
- **Unknown unknowns**: there's important information you need to know before making a change, but not obvious where to find it, or even that it is needed. 

## Qu'est-ce qui rend un système complexe
Les dépendances. 

Lorsque la modification d'une partie du logiciel impacte une autre partie, alors notre système est fortement couplé. Respecter les principes de Couplage et Cohesion peut aider le système à réduire ces dépendances.
