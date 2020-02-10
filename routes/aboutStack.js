import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return{
        header: () => <Header navigation={navigation} />
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  //default style
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'whiteSmoke',
      height: 60
    }
  }
})

export default AboutStack