import { View, Text ,Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export default function BoardInfo({ id,imageIcon, tel, sold}) {
  return (
    
    <View style={styles.container}>
    <View >
      <FontAwesome name={imageIcon} size={26} />

      <Text style={styles.tel}>{tel}</Text>
      </View>
      <TouchableOpacity>
      <View style={styles.money}>
       
      <Text style={styles.sold}>$ {sold}</Text>
      
      </View>
    </TouchableOpacity>
    </View>
  )
};

const styles =StyleSheet.create({
    money:{
    
        backgroundColor:'#ddd',
      
        flexDirection:'row',
        paddingVertical:20,
        marginVertical:10,
        paddingHorizontal:10,
        margin:20,
        borderRadius:10,
  
    },
    tel:{
        fontSize:18,
        fontWeight:'bold',
        padding:20,

    },
    sold:{
        flex:1,
        textAlign:'center',
        fontSize:20,
        fontWeight:'200'

    },
    container:
    {
       
    }
})