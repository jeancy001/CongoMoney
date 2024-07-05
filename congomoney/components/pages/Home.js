import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Header/Header'
import BoardInfo from './BoardInfo'
import PannelPages from './PannelPages';
import * as ImagePicker from 'expo-image-picker'


export default function Home() {

  const num=39383353;
  const userId ="Mpoyi"
  return (
    <SafeAreaView style={{padding:10,margin:20}}>
     <Header HeaderIcon={'bell-o'} headerText={'settings-outline'} />
      <BoardInfo  id={userId} tel={num} sold={0.00}  />
      <PannelPages />
    </SafeAreaView>
  )
}