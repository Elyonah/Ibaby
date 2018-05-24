# Ibaby
Projet de WEB IOT


##Configurations
Pour ce projet, j'ai utilisé une BDD avec WAMP, dans une base de données MYSQL nommée "ibaby"
Les configurations sont présentes dans le fichier "ibaby/config/datastores.js"
User: root
PDW : "" (vide)

Pour lancer l'API, rendez-vous dans le dossier source et exécuter
`npm install` puis `sails lift`

Pour lancer l'application, rendez-vous dans le dossier app/ibaby et exécuter 
`npm install` puis `ionic serve`

Quand on clique sur "se connecter", un utilisateur déjà enregistré dans la base de donnée est saisi. Vous n'avez plus qu'à cliquer sur : "Se connecter"

##Avancée dans le travail
J'ai pris beaucoup de retard sur ce projet, mais voici les fonctionnalités qui sont présentes :
* Connexion / Déconnexion (menu personnalisé, connexion avec l'api et déconnexion avec le storage d'IONIC)
* Inscription à l'application (création d'un compte faite en cours)
* Liste des équipes, avec page détail (avec chacun des membres)
* Liste des babyfoot, avec page détail (possibilité de trier par disponibilité, impossible de commencer un match sur un babyfoot indisponible, possibilité de réserver un babyfoot, affichage des réservations d'un babyfoot)
* Page de profil (informations du compte et de la team si l'utilisateur est dans une équipe)
* Liste des matchs, avec page détail (création match, création usermatch, changement état d'un babyfoot)

##Possibilités d'amélioration
* ARDUINO (Je n'ai pas pris le temps de m'attaquer à ce côté là).
* Règles de validations concernant les ajouts des matchs, usermatchs
* Possibilité d'ajouter une équipe et de la gérer
* Règles de validation d'un match (quand est-ce qu'il se termine)
* Gestion des matchs et des équipes (avec la possibilité de trier ceux qu'on veut inviter, par exemple)
* Sécurité
