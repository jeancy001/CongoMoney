import { View, Text ,Image, StyleSheet ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'


export default function WelcomePages({navigation}) {
  return (
    <View style={{backgroundColor:'white'}}>
      <Image  style={styles.image}source={require('../../assets/CongoMoney.png')} />
      <Text style={styles.text}>Send and Receive Money In  Congo. </Text>
       <TouchableOpacity onPress={() =>navigation.navigate("TabNavigation")}>
        <Text style ={styles.btn}>Allons-y</Text>
       </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:400,
        height:500,
        resizeMode:'stretch',
      
        flexWrap:'wrap'

    },
    text:{
        textAlign:'center',
        alignContent:'center',
        fontSize:18,
        flexWrap:'wrap',
        margin:20,
        justifyContent:'center',
       fontStyle:'italic',
       color:Colors.gray,
        

    },
    btn:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:40,
        color:Colors.textColor,
        marginHorizontal:60,
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        borderRadius:8,

    }
})