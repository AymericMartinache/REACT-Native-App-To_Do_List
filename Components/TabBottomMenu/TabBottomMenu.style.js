// STYLES
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        shadowColor: '#111',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: '#F1F1F1',
    },

    item: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
        color: '#abb2b9',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // Style actif
    activeItem: {
        backgroundColor: '#2E76E5',
        color: '#fff',
        fontWeight: 'bold',
    },
});

export { styles };
