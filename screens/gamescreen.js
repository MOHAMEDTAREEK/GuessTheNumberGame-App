import { View , useWindowDimensions , StyleSheet , Alert,FlatList} from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/primarybutton';
import NumberContainer from '../components/game/NumberContainer';
import {useState, useEffect} from 'react'
import Card from '../components/ui/card';
import { Ionicons } from '@expo/vector-icons'
import InstaText from '../components/ui/InstaText';
import GuessLogItem from '../components/game/GuessLogItem';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundary = 1;
  let maxBoundary = 100;
function Gamescreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100 ,userNumber );
    const [currentGuess , setCurrentGuess] =useState(initialGuess);
    const [guessRounds, setGuessRounds]=useState([initialGuess]);
    const { width, height } = useWindowDimensions();
    
    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver]);
useEffect (() => {
  minBoundary=1;
  maxBoundary=100;
},[])

    function nextGuessHandler(direction){
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
          ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
          }
      
          if (direction === 'lower') {
            maxBoundary = currentGuess;
          } else {
            minBoundary = currentGuess + 1;
          }
      
          const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
          );
        setCurrentGuess(newRndNumber);
        setGuessRounds( prevGuessRounds => [newRndNumber, ...prevGuessRounds] );
    }
    const guessRoundsListLength = guessRounds.length;

    let content = (
    <>
    <NumberContainer>{ currentGuess }</NumberContainer>
    <Card>
        <InstaText style={styles.instatext}> higher or lower?</InstaText>
        <View style={styles.buttonscontainer}>
            <View style={styles.buttoncontaner}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}> <Ionicons name="md-remove" size={24}/> </PrimaryButton>
        </View>
        <View  style={styles.buttoncontaner}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>  <Ionicons name="md-add" size={24}/> </PrimaryButton>
        </View>
        </View>
    </Card>
    </>
    );

    if ( width > 500 ){
      content =(
        <>
            <View style={styles.buttonconw}>
            <View style={styles.buttoncontaner}>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}> <Ionicons name="md-remove" size={24}/> </PrimaryButton>
            </View>
              <NumberContainer>{ currentGuess }</NumberContainer>
            <View  style={styles.buttoncontaner}>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>  <Ionicons name="md-add" size={24}/> </PrimaryButton>
            </View>
            </View>       
        </>

      );

    }
    return (
    <View style={styles.Screen}>
        <Title> Opponent's Guess</Title>
        {content}
    <View style={styles.listcontainer}>
    <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
    </View>
    </View>
    );
}

 export default Gamescreen;
  
 const styles=StyleSheet.create({
    Screen :{
        flex:1,
        padding:24,
        alignItems:'center',
    },
    buttonscontainer:{
        flexDirection:'row',
    }, 
    buttoncontaner:{
        flex:1,
    },
    instatext : {
        marginBottom:12,
    },
    listcontainer :{
      flex:1,
      padding:10,

    },
    buttonconw:{
      flexDirection:'row',
      alignItems:'center',
    }
 });