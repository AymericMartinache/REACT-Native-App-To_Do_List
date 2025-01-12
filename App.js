// REACT
import React, { useEffect, useState } from 'react';

// REACT NATIVE
import { Text, View } from 'react-native';

// SAFE AREA CONTEXT
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// COMPONENTS
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import AddButton from './Components/AddButton/AddButton';

// EXPO FONT
import { useFonts } from 'expo-font';

export default function App() {
    // STATES

    // Charger les polices
    const [fontsLoaded] = useFonts({
        JosefinSans: require('./assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf'),
        Playwrite: require('./assets/fonts/Playwrite_AU_SA/PlaywriteAUSA-VariableFont_wght.ttf'),
    });

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.app}>
                    <View style={styles.header}>
                        <Header></Header>
                    </View>
                    <View style={styles.body}>
                        <Body></Body>
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
