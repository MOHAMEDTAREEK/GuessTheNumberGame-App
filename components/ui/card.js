import {StyleSheet,View , Dimensions} from 'react-native';
import Colors from '../../constants/colors';
function Card({children}) {
   return <View style={styles.Card}>{children}</View>
}

export default Card;
 
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create ({
    Card :{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:24,
        borderRadius:8,
        marginTop: deviceWidth < 400 ? 24 :36,
        backgroundColor:Colors.primary3,
        elevation:4,

}
}
)