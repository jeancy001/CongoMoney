import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePages from '../pages/WelcomePages';
import TabNavigation from './TabNavigation';


const Stack = createNativeStackNavigator()
export default function NavigationsPages() {


  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown:false}}>
            <Stack.Screen name='welcome' component={WelcomePages} />
            <Stack.Screen name='TabNavigation'component={TabNavigation} />
            
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}