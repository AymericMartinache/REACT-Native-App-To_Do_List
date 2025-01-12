// REACT
import React, { useEffect, useState } from 'react';

// REACT NATIVE
import { ScrollView, Text, View } from 'react-native';

// SAFE AREA CONTEXT
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// COMPONENTS
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import AddButton from './Components/AddButton/AddButton';

// EXPO SPLASH SCREEN
import * as SplashScreen from 'expo-splash-screen';

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

    // Rendu des tâches
    function renderTodoList() {
        return todoList
            .sort((a, b) => {
                if (a.isCompleted === b.isCompleted) {
                    return a.title.localeCompare(b.title);
                } else {
                    return a.isCompleted - b.isCompleted;
                }
            })
            .map((task) => <Card key={task.id} task={task}></Card>);
    }

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.app}>
                    <View style={styles.header}>
                        <Header></Header>
                    </View>
                    <View style={styles.body}>
                        <ScrollView> {renderTodoList()}</ScrollView>
                    </View>
                    {/* <AddButton></AddButton> */}
                </SafeAreaView>
            </SafeAreaProvider>
            <View style={styles.footer}>
                <Footer></Footer>
            </View>
        </>
    );
}
