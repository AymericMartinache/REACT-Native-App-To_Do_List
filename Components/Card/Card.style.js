// STYLES
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        height: 70,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 4,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#abb2b9',
    },

    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Playwrite',
        color: '#111',
        completed: {
            textDecorationLine: 'line-through',
            color: '#abb2b9',
        },
    },
});

export { styles };
