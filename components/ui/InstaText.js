import { View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
function InstaText({children, style}){
 return <Text style={[styles.instaText, style]}>{children}</Text>
}

export default InstaText;
const styles = StyleSheet.create({
    instaText:{
        fontFamily:'open-sans',
        color: Colors.accent1,
        fontSize:24,

    },
})