// REACT NATIVE
import { Image, Text, TouchableOpacity, View } from 'react-native';

// STYLES
import { styles } from './Card.style';

// ASSETS
import checkbox from '../../assets/img/check.png';

export default function Card({ task, updateTask, deleteTask }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => updateTask(task)}
            onLongPress={() => deleteTask(task)}
        >
            {task.isCompleted ? (
                <>
                    <Text style={[styles.text, styles.text.completed]}>
                        {task.title}
                    </Text>
                    <Image source={checkbox} style={styles.image}></Image>
                </>
            ) : (
                <Text style={styles.text}>{task.title}</Text>
            )}
        </TouchableOpacity>
    );
}
