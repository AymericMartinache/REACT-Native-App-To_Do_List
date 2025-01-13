// REACT
import React, { useEffect, useState } from 'react';

// REACT NATIVE
import { ScrollView, View, Alert } from 'react-native';
import Dialog from 'react-native-dialog';
import uuid from 'react-native-uuid';

// STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage';

// EXPO FONT
import { useFonts } from 'expo-font';

// SAFE AREA CONTEXT
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// COMPONENTS
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import AddButton from './Components/AddButton/AddButton';
import TabBottomMenu from './Components/TabBottomMenu/TabBottomMenu';

// EXPO SPLASH SCREEN
import * as SplashScreen from 'expo-splash-screen';

// Empêcher le Splash Screen de disparaître automatiquement
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {
    // FONTS
    const [fontsLoaded] = useFonts({
        'Playwrite-ExtraLight': require('./assets/fonts/Playwrite_AU_SA/static/PlaywriteAUSA-ExtraLight.ttf'),
        'Playwrite-Light': require('./assets/fonts/Playwrite_AU_SA/static/PlaywriteAUSA-Light.ttf'),
        'Playwrite-Regular': require('./assets/fonts/Playwrite_AU_SA/static/PlaywriteAUSA-Regular.ttf'),
        'Playwrite-Thin': require('./assets/fonts/Playwrite_AU_SA/static/PlaywriteAUSA-Thin.ttf'),
    });

    // STATES
    const [todoList, setTodoList] = useState([
        // { id: 1, title: 'Sortir le chat', isCompleted: true },
        // { id: 2, title: 'Aller au sport', isCompleted: true },
        // { id: 3, title: 'Faire les courses', isCompleted: true },
        // { id: 4, title: 'Appeler copain', isCompleted: false },
        // { id: 5, title: 'Préparer le dîner', isCompleted: false },
        // { id: 6, title: 'Lire un chapitre de livre', isCompleted: true },
        // { id: 7, title: 'Envoyer un email important', isCompleted: false },
        // { id: 8, title: 'Nettoyer la maison', isCompleted: true },
        // { id: 9, title: 'Planifier le week-end', isCompleted: false },
        // { id: 10, title: 'Faire une promenade', isCompleted: false },
        // {
        //     id: 11,
        //     title: 'Apprendre une nouvelle compétence',
        //     isCompleted: false,
        // },
        // { id: 12, title: 'Faire du jardinage', isCompleted: true },
        // { id: 13, title: 'Réviser pour un examen', isCompleted: false },
        // {
        //     id: 14,
        //     title: 'Faire une réservation au restaurant',
        //     isCompleted: true,
        // },
    ]);

    const [activeTab, setActiveTab] = useState('all');

    const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);

    const [inputAddTask, setInputAddTask] = useState('');

    const [isFirstRender, setIsFirstRender] = useState(true);

    const [isLoadUpdate, setIsLoadUpdate] = useState(false);

    // USE EFFECT
    useEffect(() => {
        loadTodoList();
        // setIsFirstRender(false);
    }, []);

    useEffect(() => {
        if (isLoadUpdate) {
            setIsLoadUpdate(false);
        } else {
            if (!isFirstRender) {
                console.log('SAVE TO DO');
                saveToDoList();
            } else {
                setIsFirstRender(false);
            }
        }
    }, [todoList]);

    // //* CREATE
    // Ajout d'une tâche
    function addTask(inputAddTask) {
        const newTask = {
            id: uuid.v4(),
            title: inputAddTask,
            isCompleted: false,
        };

        setTodoList([...todoList, newTask]);
        hideAddDialog();
        console.log('New task added, updated todoList:', todoList);
    }
    // Boite de dialog
    function showAddDialog() {
        setIsAddDialogVisible(true);
    }
    function hideAddDialog() {
        setIsAddDialogVisible(false);
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
            if (task.isCompleted) acc.done += 1;
            else acc.inProgress += 1;
            return acc;
        },
        { all: todoList.length, inProgress: 0, done: 0 }
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
    // Fonction pour confirmer la suppression
    const confirmDeleteTask = (task) => {
        function deleteTask(task) {
            // On met à jour le state des taches avec le tableau à jour
            setTodoList(todoList.filter((t) => t.id !== task.id));
        }
        Alert.alert(
            '⚠️ Suppression ⚠️',
            `Êtes-vous sûr de vouloir supprimer "${task.title}" ?`,
            [
                {
                    text: 'Annuler',
                    style: 'cancel',
                },
                {
                    text: 'Supprimer',
                    style: 'destructive',
                    onPress: () => deleteTask(task),
                },
            ],
            { cancelable: false }
        );
    };

    //* STORAGE
    // Sauvegarde
    async function saveToDoList() {
        console.log('SAVE TO DO');

        try {
            await AsyncStorage.setItem('@todoList', JSON.stringify(todoList));
        } catch (error) {
            alert(`Erreur : ${error}`);
        }
    }
    // Lecture
    async function loadTodoList() {
        console.log('LOAD TO DO');

        try {
            const stringyfyTodoList = await AsyncStorage.getItem('@todoList');
            if (stringyfyTodoList !== null) {
                const parsedTodoList = JSON.parse(stringyfyTodoList);
                setIsLoadUpdate(true);
                setTodoList(parsedTodoList);
                setIsFirstRender(false);
            }
        } catch (error) {
            alert(`Erreur : ${error}`);
        }
    }

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.app}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Header />
                    </View>

                    {/* Liste des taches */}
                    <View style={styles.body}>
                        <ScrollView>{renderTodoList()}</ScrollView>
                    </View>

                    {/* Ajout d'une tâche */}
                    <AddButton onPress={() => showAddDialog()}></AddButton>
                </SafeAreaView>
            </SafeAreaProvider>

            {/* Modale ajout d'une tâche */}
            <Dialog.Container
                visible={isAddDialogVisible}
                onBackdropPress={() => setIsAddDialogVisible(false)}
            >
                <Dialog.Title>Nouvelle tâche</Dialog.Title>

                <Dialog.Description>
                    Nom de la nouvelle tâche :
                </Dialog.Description>

                <Dialog.Input onChangeText={setInputAddTask} />

                <Dialog.Button
                    label="Créer"
                    onPress={() => addTask(inputAddTask)}
                    color={'#2E76E5'}
                    bold="true"
                    disabled={inputAddTask.trim().length === 0}
                />
                <Dialog.Button
                    label="Annuler"
                    onPress={() => setIsAddDialogVisible(false)}
                    color={'#111'}
                />
            </Dialog.Container>

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
