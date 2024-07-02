import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@fortawesome/react-fontawesome'
import Header from '../Header/Header'


export default function Home() {
  return (
    <SafeAreaView style={{padding:10,margin:20}}>
  <Header HeaderIcon={'bell-o'} headerText={'Hi,Jeancy '} />
      <Text>Home ok</Text>
    </SafeAreaView>
  )
}