# 🌐 IoT Smart Supervision System with AI

### Plateforme intelligente de supervision des données IoT basée sur les systèmes distribués et l'intelligence artificielle.

---

## 📌 1. Présentation du projet

Notre projet consiste à développer une plateforme Web intelligente permettant de simuler, collecter, traiter et superviser les données provenant de plusieurs capteurs IoT virtuels.

Le système repose sur une architecture distribuée composée de plusieurs services indépendants communiquant entre eux.

L'intelligence artificielle permet de détecter les anomalies et de réaliser des prédictions à partir des données collectées.

**Remarque :** Le projet sera réalisé entièrement par logiciel, sans utilisation de matériel physique.

## 🎯 2. Objectifs

* Simuler plusieurs capteurs IoT.
* Collecter les données automatiquement.
* Assurer la communication entre les services.
* Distribuer le traitement des données.
* Stocker les données dans une base de données.
* Détecter les anomalies avec l'IA.
* Réaliser des prédictions.
* Développer une plateforme Web de supervision.

## 🛠️ 3. Technologies utilisées

| Domaine                   | Technologie             |
| ------------------------- | ----------------------- |
| Langage                   | Python                  |
| Backend                   | FastAPI                 |
| Communication synchrone   | REST API                |
| Communication asynchrone  | RabbitMQ                |
| Simulation IoT            | Python                  |
| Intelligence artificielle | Scikit-learn            |
| Data Processing           | Pandas / NumPy          |
| Frontend                  | HTML / CSS / JavaScript |
| Visualisation             | Chart.js                |
| Base de données           | PostgreSQL              |
| ORM                       | SQLAlchemy              |
| Conteneurisation          | Docker                  |
| Orchestration             | Docker Compose          |
| Tests                     | Pytest                  |
| Versioning                | Git / GitHub            |

## 👥 4. Répartition des tâches

### Personne 1 – Backend & Architecture distribuée

* Développer les API avec FastAPI.
* Configurer RabbitMQ.
* Créer les Workers.
* Gérer la communication entre les services.
* Connecter le service AI.
* Tester les API et les communications.

**Livrables :** Backend, API REST, Workers et documentation technique.

### Personne 2 – IoT Simulation & Database

* Créer les capteurs virtuels.
* Simuler la température, l'humidité et la qualité de l'air.
* Générer les données automatiquement.
* Envoyer les données vers RabbitMQ.
* Concevoir la base PostgreSQL.
* Stocker les mesures et leur historique.

**Livrables :** Simulateur IoT, Publisher RabbitMQ et base de données.

### Personne 3 – Intelligence artificielle

* Préparer et nettoyer les données.
* Développer un modèle Isolation Forest.
* Détecter les anomalies.
* Développer un modèle de prédiction.
* Évaluer les modèles.
* Créer une API AI.

**Livrables :** Modèles Machine Learning, API AI et résultats d'évaluation.

### Personne 4 – Frontend & Plateforme Web

* Concevoir l'interface Web.
* Développer la page Login.
* Créer le Dashboard.
* Développer la gestion des capteurs.
* Créer les pages Monitoring et Analytics.
* Afficher les résultats AI et les alertes.
* Connecter le Frontend aux API Backend.

**Livrables :** Plateforme Web interactive et Dashboard.

## 🗂️ 5. Structure du projet

```text
IoT-AI-Supervision/
│
├── backend/
├── simulator/
├── ai_service/
├── dashboard/
├── database/
├── tests/
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## 🚀 6. Plan de réalisation – Checklist

### PHASE 1 – Préparation

* [ ] Créer le dépôt GitHub.
* [ ] Ajouter les 4 membres au dépôt.
* [ ] Installer Python.
* [ ] Installer VS Code.
* [ ] Installer Git.
* [ ] Installer Docker Desktop.
* [ ] Cloner le dépôt dans VS Code.
* [ ] Créer la structure des dossiers.
* [ ] Créer le fichier README.md.
* [ ] Définir les branches Git.

### PHASE 2 – Conception

* [ ] Définir l'architecture distribuée.
* [ ] Définir le format JSON des données IoT.
* [ ] Définir les API REST.
* [ ] Définir les queues RabbitMQ.
* [ ] Concevoir les tables PostgreSQL.
* [ ] Définir les échanges entre les services.

### PHASE 3 – Développement

**Backend**

* [ ] Développer FastAPI.
* [ ] Configurer RabbitMQ.
* [ ] Développer les Workers.
* [ ] Créer les endpoints.

**IoT & Database**

* [ ] Créer les capteurs virtuels.
* [ ] Générer les mesures.
* [ ] Envoyer les données avec RabbitMQ.
* [ ] Créer la base PostgreSQL.

**AI**

* [ ] Préparer les données.
* [ ] Entraîner Isolation Forest.
* [ ] Développer la prédiction.
* [ ] Créer l'API AI.

**Frontend**

* [ ] Créer le design.
* [ ] Développer Login.
* [ ] Créer Dashboard.
* [ ] Créer Sensors.
* [ ] Créer Monitoring.
* [ ] Créer AI Analysis.
* [ ] Créer Alerts.

### PHASE 4 – Intégration

* [ ] Connecter IoT à RabbitMQ.
* [ ] Connecter RabbitMQ au Backend.
* [ ] Connecter PostgreSQL.
* [ ] Connecter le service AI.
* [ ] Connecter le Frontend aux API.
* [ ] Vérifier la circulation des données.

### PHASE 5 – Tests

* [ ] Tester les API.
* [ ] Tester RabbitMQ.
* [ ] Tester les Workers.
* [ ] Tester la base de données.
* [ ] Tester la détection des anomalies.
* [ ] Tester les prédictions.
* [ ] Tester le Dashboard.
* [ ] Tester l'intégration complète.

### PHASE 6 – Déploiement

* [ ] Créer les Dockerfiles.
* [ ] Configurer Docker Compose.
* [ ] Lancer tous les services.
* [ ] Vérifier le fonctionnement global.

### PHASE 7 – Finalisation

* [ ] Corriger les bugs.
* [ ] Finaliser le design.
* [ ] Préparer le rapport.
* [ ] Préparer la présentation.
* [ ] Réaliser la démonstration finale.

## 🔗 7. Organisation Git

Branches de travail :

* `main`
* `feature/backend`
* `feature/iot-simulator`
* `feature/ai-service`
* `feature/frontend`

Chaque membre doit travailler sur sa branche et créer une Pull Request avant de fusionner son travail dans `main`.

## 🧪 8. Démonstration finale

1. Lancer tous les services.
2. Démarrer les capteurs virtuels.
3. Observer les données collectées.
4. Afficher les mesures sur le Dashboard.
5. Simuler une anomalie.
6. Montrer sa détection par l'IA.
7. Afficher une alerte.
8. Présenter les prédictions.
9. Démontrer le fonctionnement distribué.

---

**Projet académique – Distributed Systems**

*IoT Smart Supervision System with AI*
*Virtual Sensors – Distributed Processing – Artificial Intelligence – Web Supervision*
