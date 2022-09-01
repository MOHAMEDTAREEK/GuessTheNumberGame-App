import { useState } from 'react';
import { StyleSheet ,ImageBackground , SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/startgamescreen';
import Gamescreen from './screens/gamescreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/gameoverscreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds]=useState(0);
  
  const [fontsloaded] =useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsloaded){
    return <AppLoading />;
  }
  function pickednumberhandler(pickednumber){ 
    setUserNumber(pickednumber);
    setGameIsOver(false);

  }

  function gameOverHandler (numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandeler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen=    <StartGameScreen  onpicknumber ={pickednumberhandler}/>
  if (userNumber){
    screen=<Gamescreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if(gameIsOver && userNumber){
    screen= <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartGame={startNewGameHandeler} />
  }
  

  return (
    <>
    <StatusBar style='light' />
    <LinearGradient colors={[Colors.primary4,Colors.accent1]}style={styles.rootscreen}>
    <SafeAreaView style={styles.rootscreen}>{screen}</SafeAreaView>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
rootscreen: {
  flex:1,
}

});
