import { Text , View ,StyleSheet , Dimensions} from 'react-native';
import Colors from '../../constants/colors';
function NumberContainer({children}){
    return <View style={styles.contanier}>
    <Text style={styles.numberText}>{children}</Text>

    </View>
}
export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
const styles=StyleSheet.create({
contanier :{
borderWidth:4,
borderColor: Colors.accent1,
padding: deviceWidth < 400 ? 18 :24,
borderRadius:8,
margin: deviceWidth < 400 ? 16 :24,
alignItems:'center',
justifyContent:'center',
},
numberText :{
    color: Colors.accent1,
    fontSize:deviceWidth < 400 ? 28 :36,
    fontFamily:'open-sans-bold',
}

});