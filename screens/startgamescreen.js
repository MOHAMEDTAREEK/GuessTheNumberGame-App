import { useState } from 'react';
import { TextInput, View , StyleSheet, Alert ,useWindowDimensions, KeyboardAvoidingView, ScrollView} from'react-native';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/primarybutton';
import Title from '../components/ui/Title';
import Card from '../components/ui/card';
import InstaText from '../components/ui/InstaText';
function StartGameScreen({ onpicknumber })   { 
   const [enteredNumber, setEnteredNumber] =useState('')
   
   const { width, height } = useWindowDimensions();

   function numberInputHandler(enteredText){
    setEnteredNumber(enteredText)
   }
   function resetInputHandler(){
    setEnteredNumber('');
   }
   function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onpicknumber(chosenNumber);
  }

   const marginTopDis = height < 300 ? 100 : 40;
   return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior={"position"}>
    <View style={[styles.rootcontainer, {marginTop:marginTopDis}]}>
        <Title> Guess My Number </Title>
    <Card>
        <InstaText>Enter a Number</InstaText>
        <TextInput style={styles.numberInput} onChangeText={numberInputHandler} maxLength={2} keyboardType="number-pad" value={enteredNumber}/>
        <View style={styles.buttonscontainer}>
            <View style={styles.buttoncontaner}>
                <PrimaryButton onPress={resetInputHandler}> reset </PrimaryButton>
            </View>
            <View style={styles.buttoncontaner}>
                <PrimaryButton onPress={confirmInputHandler} > confirm </PrimaryButton>
             </View>
        </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    );
}

export default StartGameScreen; 

//const devicehight =Dimensions.get('window').height; 
const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    rootcontainer :{
        flex:1,
        //marginTop: devicehight < 300 ? 30 : 50 ,
        alignItems:'center'
    },
    
numberInput :{
    height: 50,
    width:50,
    fontSize:32,
    borderBottomColor:Colors.accent1,
    borderBottomWidth:1,
    color:Colors.accent1,
    marginVertical:8,
    fontWeight: 'bold',
    textAlign:'center',
},
buttonscontainer:{
    flexDirection:'row',
}, 
buttoncontaner:{
    flex:1,
}
}
)