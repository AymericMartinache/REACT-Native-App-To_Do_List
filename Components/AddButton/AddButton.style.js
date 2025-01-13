// STYLES
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: '#F1F1F1',
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        alignSelf: 'center',

        backgroundColor: '#2E76E5',
        padding: 15,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    text: {
        color: '#F1F1F1',
        fontSize: 20,
        fontWeight: 700,
        textShadowColor: '#F1F1F1',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export { styles };
