import React from 'react'
import { View, Text, Button } from 'react-native'
import  globalStyles from '../styles/global'

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go to review details' onPress={pressHandler}/>
    </View>
  )
}

export default Home