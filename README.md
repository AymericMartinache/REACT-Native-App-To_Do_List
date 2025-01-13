# ✅ To-Do List App - Organisez vos tâches efficacement !

L'application **To-Do List** est une solution complète et intuitive pour gérer vos tâches quotidiennes. Développée avec **React Native** et optimisée avec **Expo**, elle offre des fonctionnalités simples et pratiques telles que l'ajout, la modification, la suppression et le filtrage de vos tâches.

---

## 🛠️ **Fonctionnalités principales**

1. **Ajout de tâches :**

    - Une boîte de dialogue permet de créer une nouvelle tâche avec un titre personnalisé.

2. **Filtrage des tâches :**

    - **All :** Affiche toutes les tâches.
    - **In Progress :** Affiche les tâches en cours.
    - **Done :** Affiche les tâches terminées.

3. **Mise à jour de l'état des tâches :**

    - Permet de marquer une tâche comme terminée ou de la réactiver.

4. **Suppression de tâches :**

    - Affiche une boîte de confirmation avant la suppression.

5. **Persistance des données :**
    - Les tâches sont sauvegardées localement grâce à **AsyncStorage**, permettant de conserver vos tâches même après la fermeture de l'application.

---

## 🧰 **Technologies utilisées**

### 📱 **React Native**

-   Gestion des composants dynamiques et des styles pour les plateformes iOS et Android.

### 🖼️ **Expo**

-   Plateforme utilisée pour le démarrage rapide et la gestion des dépendances du projet.

### 🛠️ **Modules et bibliothèques**

-   **AsyncStorage :** Pour sauvegarder et charger les tâches localement.
-   **Dialog (react-native-dialog) :** Pour afficher les fenêtres modales de confirmation ou de création de tâches.
-   **expo-font :** Pour charger et utiliser des polices personnalisées dans toute l'application.
-   **expo-splash-screen :** Pour gérer un écran de démarrage personnalisé.
-   **React Native UUID :** Pour générer des identifiants uniques pour chaque tâche.

---

## 🗂️ **Structure du projet**

| **Dossier/Fichier**          | **Description**                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| `/assets/fonts/`             | Contient les fichiers de polices personnalisées utilisées dans l'application.                      |
| `/assets/img/`               | Contient les images comme les icônes ou les fonds de l'application.                                |
| `/Components/AddButton/`     | Composant pour le bouton permettant d'ajouter une nouvelle tâche.                                  |
| `/Components/Card/`          | Composant pour l'affichage des tâches dans une carte avec des options d'édition et de suppression. |
| `/Components/Header/`        | Composant pour l'en-tête de l'application (titre principal).                                       |
| `/Components/TabBottomMenu/` | Composant pour le menu de navigation entre les onglets "All", "In Progress" et "Done".             |
| `App.js`                     | Point d'entrée principal de l'application. Gère les états globaux et les interactions principales. |
| `App.style.js`               | Contient les styles globaux de l'application.                                                      |

---

## 📚 **Détails de développement**

1. **Création du projet avec Expo :**

    - Initialisation du projet via **Expo CLI** pour faciliter le démarrage.

2. **Gestion des composants :**

    - Chaque fonctionnalité est encapsulée dans un composant réutilisable :
        - `AddButton` pour l'ajout.
        - `Card` pour l'affichage des tâches.
        - `TabBottomMenu` pour le filtrage.

3. **Persistance des données :**

    - Utilisation d'**AsyncStorage** pour sauvegarder et charger les tâches localement.
    - Les tâches sont récupérées automatiquement au démarrage grâce à un **useEffect** dédié.

4. **Logique métier :**

    - Utilisation de fonctions dédiées pour le **filtrage** (par état), la **création**, la **modification** et la **suppression** des tâches.

5. **Interface utilisateur :**
    - Des boîtes de dialogue sont utilisées pour ajouter ou confirmer la suppression d'une tâche.
    - Les états de filtrage (All, In Progress, Done) sont visualisés grâce à un menu de navigation interactif.

---

## 🎨 **Design et styles**

-   Les styles sont définis avec **StyleSheet** pour un rendu natif et performant.
-   Les polices personnalisées (par exemple, `Playwrite`) sont chargées grâce à **expo-font**.
-   L'interface est pensée pour être propre et intuitive, avec des couleurs différenciées pour les tâches actives et terminées.

---

## 👍 **Points forts**

-   **Multiplateforme** : Fonctionne sur iOS, Android et Web grâce à Expo.
-   **Personnalisation** : Utilisation de polices et de styles personnalisés pour un design soigné.
-   **Simplicité d'utilisation** : Interface épurée pour une expérience utilisateur fluide.
-   **Sauvegarde locale** : Les données sont persistantes même après la fermeture de l'application.

---

## 🚀 **Comment exécuter le projet**

### Prérequis

-   **Node.js** et **npm** installés sur votre machine.
-   **Expo CLI** installé globalement :
    npm install -g expo-cli

### Étapes pour démarrer

1. Installez les dépendances :

```bash
  npm install
```

2. Lancez l'application :

```bash
    npx expo start
```

3. Ouvrez l'application sur un émulateur ou un appareil physique :
    - Appuyez sur **`a`** pour Android.
    - Appuyez sur **`i`** pour iOS.
    - Scannez le QR code avec l'application **Expo Go**.
