import {Image,View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/primarybutton';
import Title from '../components/ui/Title';
import success from '../assets/image/success.png'
function GameOverScreen( {roundsNumber, userNumber, onStartGame } ){
    const { width, height } = useWindowDimensions();
    
    let imageSize =300;
    if (width < 380){
        imageSize = 200;
    }

    if (height < 400){
        imageSize = 80;
    }
    const imageStyle ={
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize /2,
    };
    return (
        <ScrollView style={styles.screen}>
    <View style={styles.rootcontanier}>
        <Title> Game Over!</Title>
        <View style={[styles.imageconainer, imageStyle]}>
      <Image  
      style={styles.image} 
      source={success} /> 
      </View>
        <Text style={styles.summaryText}> Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
        <PrimaryButton onPress={onStartGame}> Start New Game </PrimaryButton>
    </View>
    </ScrollView>
    
    )
}

export default GameOverScreen;
const styles = StyleSheet.create({
    imageconainer:{
        borderWidth:3,
        borderColor:Colors.primary4,
        overflow:'hidden',
        margin:36,
    },
    image :{
        width:'100%',
        height:'100%',
    },
    rootcontanier:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
      
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom: 24,
        
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color: Colors.primary4,
    },
    screen:{
        flex:1,

    }
})