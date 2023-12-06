# Reconature

## Infrastructure

- Langage serveur ?
- Quelle base de donnees SQL ? PostGres, Mysql, MariaDb, SqlServer ?
- Site web et/ou appli android ? Site web dans un premier temps, dev beaucoup plus rapide.
- Interface utilisateurs, active directory, etc ?

## Modèle de données

# table: flores

- Il ne faut pas mettre l'id en auto-increment, il sera rempli par les administrateurs à chaque creation.

| \*id: int | nom_latin | nom_classique | est_publique |
| --------- | --------- | ------------- | ------------ |
| 1         | Hydrangea | Hortensia     | Oui          |
| 2         | Syringa   | Lilas         | Non          |

# table M2M: flores_images

| \*flore_id | \*file_id                            |
| ---------- | ------------------------------------ |
| 1          | ef8ffae9-0262-4e74-9c94-2c856ae580e5 |
| 2          | f2254027-2764-48a2-b8bf-953b9821266b |

# table: files

| \*id: uuid                           | nom     |
| ------------------------------------ | ------- |
| ef8ffae9-0262-4e74-9c94-2c856ae580e5 | photo_1 |
| f2254027-2764-48a2-b8bf-953b9821266b | photo_2 |

## Ressources

- [Plantes latin / fr](https://tecfa.unige.ch/perso/lombardf/calvin/teaching/botanic-latin-fr/conversion-fr-latin.htm)
