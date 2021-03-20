
# Projet 6
## Installation
### Fichiers du site
Sur le terminal se placer sur un dossier cible.

**Copier les fichiers :**
Sur le terminal tapper successivement :
 - `$ git clone https://github.com/S0Imyr/Projet-6`
 - `$ cd Projet-6`

### L'API

Le site utilise une API construite pour ce projet de formation d'OpenClassrooms.
Elle a été construite par Thierry Chapuis et est disponible à l'adresse : https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

Je reprends le détail de l'installation avec quelques ajustements :

### Installation et exécution avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande :`$ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git`
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd OCMovies-API-EN-FR`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 5 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/titles/).

Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 4 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter l'étape 5 à partir du répertoire racine du projet.


### Installation et exécution sans pipenv (avec venv et pip)

1. Cloner ce dépôt de code à l'aide de la commande :`$ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git`
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd OCMovies-API-EN-FR`
3. Créer un environnement virtuel pour le projet avec `$ python -m venv env` sous windows ou `$ python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `$ source env/Scripts/activate` sous windows ou `$ source env/bin/activate` sous MacOS ou Linux.
5. Installez les dépendances du projet avec la commande `$ pip install -r requirements.txt`
6. Créer et alimenter la base de données avec la commande `$ python manage.py create_db`
7. Démarrer le serveur avec `$ python manage.py runserver`


Lorsque le serveur fonctionne, après l'étape 7 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/titles/).

Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 6 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter les étapes 4 et 7 à partir du répertoire racine du projet.


## Accéder au site

Ouvrir avec un navigateur le fichier index.html.
Il se trouve dans le dossier Projet-6 que l'on a créé plus haut.

## Arrêter le serveur

Pour arrêter le serveur appuyer sur les touches Ctrl+C.
