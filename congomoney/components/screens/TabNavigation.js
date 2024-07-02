import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
const Tabs = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tabs.Navigator screenOptions={{headerShown:false}}>
    <Tabs.Screen name='Home' component={Home} options={{
      tabBarIcon:({size,color}) => <AntDesign name="home" size={size} color={color}/>
    }}/>
    </Tabs.Navigator>
  )
}