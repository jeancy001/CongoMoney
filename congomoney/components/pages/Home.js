import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@fortawesome/react-fontawesome'
import Header from '../Header/Header'
import BoardInfo from './BoardInfo'


export default function Home() {
  const num=39383353;
  const userId ="Mpoyi"
  return (
    <SafeAreaView style={{padding:10,margin:20}}>
     <Header HeaderIcon={'bell-o'} headerText={'Hi,Jeancy '} />
      
      <BoardInfo imageIcon={'user'}  tel={num} sold={43.34} />
    </SafeAreaView>
  )
}