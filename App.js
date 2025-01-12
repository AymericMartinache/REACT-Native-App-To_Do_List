// REACT
import React, { useState } from 'react';

// REACT NATIVE
import { ScrollView, View, Alert } from 'react-native';

// SAFE AREA CONTEXT
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// COMPONENTS
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import AddButton from './Components/AddButton/AddButton';

// EXPO SPLASH SCREEN
import * as SplashScreen from 'expo-splash-screen';
import TabBottomMenu from './Components/TabBottomMenu/TabBottomMenu';

// Empêcher le Splash Screen de disparaître automatiquement
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {
    // STATES
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'Sortir le chat', isCompleted: true },
        { id: 2, title: 'Aller au sport', isCompleted: true },
        { id: 3, title: 'Faire les courses', isCompleted: true },
        { id: 4, title: 'Appeler copain', isCompleted: false },
        { id: 5, title: 'Préparer le dîner', isCompleted: false },
        { id: 6, title: 'Lire un chapitre de livre', isCompleted: true },
        { id: 7, title: 'Envoyer un email important', isCompleted: false },
        { id: 8, title: 'Nettoyer la maison', isCompleted: true },
        { id: 9, title: 'Planifier le week-end', isCompleted: false },
    ]);

    const [activeTab, setActiveTab] = useState('all');

    //* CREATE
    function addTask(inputValue) {
        const newTask = {
            id: new Date().getTime(),
            title: inputValue,
            isCompleted: false,
        };
        todoList.push(newTask);
    }

    //* READ
    // Rendu des tâches
    function renderTodoList() {
        const sortedFilteredTodoList = todoList
            .filter((task) => {
                if (activeTab === 'all') return true;
                if (activeTab === 'inProgress') return !task.isCompleted;
                if (activeTab === 'done') return task.isCompleted;
            })
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((task) => (
                <View key={task.id}>
                    <Card
                        updateTask={updateTask}
                        deleteTask={confirmDeleteTask}
                        task={task}
                    />
                </View>
            ));

        return sortedFilteredTodoList;
    }

    // Calcul du nombre de tâches pour chaque filtre
    const taskCounts = todoList.reduce(
        (acc, task) => {
            acc.all += 1;
            if (task.isCompleted) acc.done += 1;
            else acc.inProgress += 1;
            return acc;
        },
        { all: 0, inProgress: 0, done: 0 }
    );

    //* UPDATE
    // Update d'une tâche
    function updateTask(task) {
        // On met à jour la tâche en moodifiant isCompleted
        const updatedTask = {
            ...task,
            isCompleted: !task.isCompleted,
        };

        // On récupère l'index de la tâche dans le tableau des tâches
        const indexToUpdate = todoList.findIndex(
            (task) => task.id === updatedTask.id
        );

        // On Créé un tableau des tâches mises à jour en récupérant le tableau d'origine
        const updatedTodoList = [...todoList];

        // On met à jour la tâche avec l'index
        updatedTodoList[indexToUpdate] = updatedTask;

        // On met à jour le state des taches avec le tableau à jour
        setTodoList(updatedTodoList);
    }

    //* DELETE
    function deleteTask(task) {
        // On filtre les tâches pour ne pas inclure celle que l'on veut supprimer
        const updatedTodoList = todoList.filter((t) => t.id !== task.id);

        // On met à jour le state des taches avec le tableau à jour
        setTodoList(updatedTodoList);
    }
    // Fonction pour confirmer la suppression
    const confirmDeleteTask = (task) => {
        Alert.alert(
            '⚠️ Suppression ⚠️',
            `Êtes-vous sûr de vouloir supprimer la tâche "${task.title}" ?`,
            [
                {
                    text: 'Annuler',
                    style: 'cancel',
                },
                {
                    text: 'Supprimer',
                    onPress: () => deleteTask(task),
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.app}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Header />
                    </View>

                    {/* Tasks list */}
                    <View style={styles.body}>
                        <ScrollView>{renderTodoList()}</ScrollView>
                    </View>

                    {/* Add task */}
                    {/* <AddButton></AddButton> */}
                </SafeAreaView>
            </SafeAreaProvider>

            {/* Footer */}
            <View style={styles.footer}>
                <TabBottomMenu
                    activeTab={activeTab}
                    taskCounts={taskCounts}
                    onPress={setActiveTab}
                />
            </View>
        </>
    );
}
