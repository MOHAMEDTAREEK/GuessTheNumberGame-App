import {View ,Text , Pressable , StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
function PrimaryButton({ children, onPress }) {

return (
    <View style= {styles.buttonoutercontainer}>
    <Pressable  style= {styles.buttoninnercontainer} 
    onPress={onPress}
    android_ripple={{color:Colors.primary2}}>
<Text style={styles.buttontext}> {children} </Text>
</Pressable>
</View>
);
}

export default PrimaryButton;
const styles= StyleSheet.create({
buttonoutercontainer:{ 
    borderRadius:28,
    margin:4,
    overflow:'hidden',
},
buttoninnercontainer : {
    backgroundColor:Colors.primary1,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
},
buttontext:{
    color:'white',
    textAlign:'center',
}

})
