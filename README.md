# Reconature

## Infrastructure

- Langage serveur ? Bun/Elysia + Directus
- Quelle base de donnees SQL ? PostGresSQL
- Site web et/ou appli android ? Site web dans un premier temps, dev beaucoup plus rapide.
- Authentification utilisateurs :
  - A terme, via [educagri](https://auth.educagri.fr/cas/login).
  - Les apprenants seront dans l'obligation de creer un compte directement sur l'appli.

## Modèle de données

### table: users

- Ne pas mettre l'_*id*_ en auto-increment, il sera rempli par les administrateurs à chaque creation.

| \*id: uuid | email                      | Nom     | Prenom  | mot_de_passe     | role_id |
| ---------- | -------------------------- | ------- | ------- | ---------------- | ------- |
| 1          | formateur1@lyceenature.com | Laffite | Bernard | \*\*\*\*\*\*\*\* | 1       |
| 2          | eleve1@lyceenature.com     | Baschet | Claire  | \*\*\*\*\*\*\*\* | 2       |

### table: roles

| \*id: id | name           |
| -------- | -------------- |
| 1        | Administrateur |
| 2        | Apprenant      |

### table: flores

| \*id: int | nom_scientifique | nom_commun              | cultivar ? | genre  | est_publique |
| --------- | ---------------- | ----------------------- | ---------- | ------ | ------------ |
| 1         | Stolonifera      | Cornouiller             | Flaviramea | Cornus | Oui          |
| 2         | matsudana        | Saule pleureur tortueux | ‘Tortuosa’ | Salix  | Non          |

### table m2m: flores_images

- Pas besoin d'avoir cette feature pour le mvp.

| \*flore_id | \*file_id                            |
| ---------- | ------------------------------------ |
| 1          | ef8ffae9-0262-4e74-9c94-2c856ae580e5 |
| 2          | f2254027-2764-48a2-b8bf-953b9821266b |

### table: files

| \*id: uuid                           | nom     |
| ------------------------------------ | ------- |
| ef8ffae9-0262-4e74-9c94-2c856ae580e5 | photo_1 |
| f2254027-2764-48a2-b8bf-953b9821266b | photo_2 |

## Ressources

- [Plantes latin / fr](https://tecfa.unige.ch/perso/lombardf/calvin/teaching/botanic-latin-fr/conversion-fr-latin.htm)

## Charte graphique

- https://www.lyceenature.com
