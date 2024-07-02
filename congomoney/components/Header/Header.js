import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Header({headerText,HeaderIcon}) {
  return (

    <SafeAreaView style={{flexDirection:'row'}}>
      <Text style={{flex:1}}>{headerText}</Text>
    <FontAwesome name={HeaderIcon} size={18} color="red" />
    </SafeAreaView>
  )
}