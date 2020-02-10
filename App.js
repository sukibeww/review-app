import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from './routes/drawer'

export default function App() {
  const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
  const [ fontLoaded, setFontLoaded ] = useState(false)
  if(fontLoaded){
    return(
      <Navigator />
    )
  }
  else{
    return(
      <AppLoading startAsync={getFonts} onFinish={()=> setFontLoaded(true)}/>
    )
  }
}