// STYLES
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        height: 80,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginVertical: 10,
    },

    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 25,
        fontFamily: 'Playwrite',
        color: '#111',
        completed: {
            textDecorationLine: 'line-through',
            color: '#abb2b9',
        },
    },
});

export { styles };
