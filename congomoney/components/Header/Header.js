import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

export default function Header({headerText,HeaderIcon}) {
  return (

    <SafeAreaView style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
      {/* <Text style={styles.text}>{headerText}</Text> */}
      <Ionicons name={headerText} size={25} color="black" />
    <FontAwesome name={HeaderIcon} size={20} color="red"/>
  
    </SafeAreaView>
  )
};
const  styles = StyleSheet.create({
  text:{
    flex:1,
    fontSize:20,
    margin:10,
  }
})