// REACT NATIVE
import { Image, Text, View } from 'react-native';

// ASSETS
import logo from '../../assets/img/logo.png';

// STYLES
import { styles } from './Header.style';

export default function Header() {
    return (
        <>
            <Image style={styles.image} source={logo}></Image>
            <Text style={styles.subTitle}>
                Tu as probablement un truc à faire ?!
            </Text>
        </>
    );
}
