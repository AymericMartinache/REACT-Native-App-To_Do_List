// REACT NATIVE
import { Text, TouchableOpacity } from 'react-native';

// STYLES
import { styles } from './AddButton.style';

export default function AddButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>+ Nouvelle tâche</Text>
        </TouchableOpacity>
    );
}
