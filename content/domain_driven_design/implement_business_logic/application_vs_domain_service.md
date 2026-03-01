+++
title = "App vs Domain service"
weight = 99
+++


> https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
> As I mentioned above, the role of an Application Service is to:
> - use a repository to find one or several entities;
> - tell those entities to do some domain logic;
> - and use the repository to persist the entities again, effectively saving the data changes.
>
> However, sometimes we encounter some domain logic that involves different entities, of the same type or not, and we feel that that domain logic does not belong in the entities themselves, we feel that that logic is not their direct responsibility.
>
> So our first reaction might be to place that logic outside the entities, in an Application Service. However, this means that that domain logic will not be reusable in other use cases: domain logic should stay out of the application layer!
>
> The solution is to create a Domain Service, which has the role of receiving a set of entities and performing some business logic on them. A Domain Service belongs to the Domain Layer, and therefore it knows nothing about the classes in the Application Layer, like the Application Services or the Repositories. In the other hand, it can use other Domain Services and, of course, the Domain Model objects.

## Exemple sans domain service

```java
public class TransferMoneyApplicationService {

    public void transfer(AccountId fromId, AccountId toId, BigDecimal amount) {

        Account from = accountRepository.findById(fromId);
        Account to = accountRepository.findById(toId);

        // ❌ BUSINESS RULE IN APPLICATION LAYER
        if (amount.compareTo(new BigDecimal("10000")) > 0) {
            throw new IllegalArgumentException("Daily transfer limit exceeded");
        }

        from.withdraw(amount);
        to.deposit(amount);

        accountRepository.save(from);
        accountRepository.save(to);
    }
}
```

-  Not reusable in another use case (e.g. scheduled transfers, batch payments)
-  Hard to test independently from infrastructure

## Avec domain service
```java
public class MoneyTransferService {

    private static final BigDecimal DAILY_LIMIT = new BigDecimal("10000");

    public void transfer(Account from, Account to, BigDecimal amount) {

        if (amount.compareTo(DAILY_LIMIT) > 0) {
            throw new IllegalArgumentException("Daily transfer limit exceeded");
        }

        from.withdraw(amount);
        to.deposit(amount);
    }
}
```

- Pure domain logic => easy to test

=> Application Service devient plus simple

```java
// Rename in UseCase
public class TransferMoneyUseCase {

    public void execute(AccountId fromId, AccountId toId, BigDecimal amount) {

        Account from = accountRepository.findById(fromId);
        Account to = accountRepository.findById(toId);

        moneyTransferService.transfer(from, to, amount);

        accountRepository.save(from);
        accountRepository.save(to);
    }
}
```

## Domain Service optionnel
Un Domain Service est nécessaire lorsque une règle métier implique plusieurs agrégats et qu’elle ne peut pas être naturellement rattachée à l’un d’eux sans violer le principe de responsabilité unique.
En revanche, si une seule entité (ou agrégat) est concernée et que la règle protège ses invariants, alors le comportement doit être implémenté directement dans le modèle de domaine. L’Application Service se limite alors à orchestrer : charger l’agrégat, invoquer son comportement métier, puis le persister.

```java
public class DepositMoneyUseCase {

    public void execute(AccountId accountId, BigDecimal amount) {
        Account account = accountRepository.findById(accountId);

        account.deposit(amount); // pas de Domain Service

        accountRepository.save(account);
    }
}
```