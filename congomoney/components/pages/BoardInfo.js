import { View, Text ,Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export default function BoardInfo({ id,imageIcon, tel, sold}) {
  return (
    
    <View style={styles.container}>
    <View style={{flexDirection:'row', padding:2,margin:2,justifyContent:'space-between',
    alignItems:'center'
  
    }}>
      <Image source={imageIcon}style={{width:60,height:60,
        borderRadius:100
      }} />
       <Text style={{marginLeft:0,fontSize:18,fontWeight:'bold'}}>{id} </Text>
      
      </View>
      <Text style={styles.tel}>{tel}</Text>
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
    
        backgroundColor:'#fff',
      
        flexDirection:'row',
        paddingVertical:20,
        marginVertical:10,
        paddingHorizontal:10,
        margin:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ddd',
        shadowOpacity:0.2,
        shadowColor:'#000',
        shadowOffset:{width:0,height:5}
  
    },
    tel:{
        fontSize:16,
        fontWeight:'100',
        padding:2,
        margin:1,

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