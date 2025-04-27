+++
title = "Domain Model"
weight = 20
+++

## Définir "Domain Model"

> [!Definition] Définition
> A domain model is an object model of the domain that **incorporates both behavior and data**. DDD’s tactical patterns — aggregates, value objects, domain events, and
domain services are the building blocks of such an object model. [^1]

[^1]: Learning Domain Driven Design p77

- Pour ne pas avoir des [Anemic Domain Model]({{< relref "commun_antipattern/anemic_model/" >}}), les *models* encapsule la structure de données ainsi que les comportements
- Les *models* ne doit tenir compte d'aucune infrastructure ou problématique technique (e.g. appel à la BDD). Ils sont des POJOs.

```java
/**
 * - Encapsule structure de données + comportement (ajouterProduit, calculerTotal)
 * - n'est lié à aucune dépendance Spring, Hibernate, etc ...
 */
public class Commande {
    private final UUID id;
    private final UUID clientId;
    private final LocalDateTime dateCommande;
    private final List<LigneCommande> lignes;

    ...

    public void ajouterProduit(UUID produitId, int quantite, BigDecimal prixUnitaire) {
        if (quantite <= 0) {
            throw new IllegalArgumentException("La quantité doit être supérieure à zéro.");
        }

        for (LigneCommande ligne : lignes) {
            if (ligne.getProduitId().equals(produitId)) {
                ligne.augmenterQuantite(quantite);
                return;
            }
        }

        lignes.add(new LigneCommande(produitId, quantite, prixUnitaire));
    }

    public BigDecimal calculerTotal() {
        return lignes.stream()
                .map(LigneCommande::getSousTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}

```