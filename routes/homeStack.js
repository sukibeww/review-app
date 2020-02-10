import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import React from 'react'
import Header from '../shared/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: (props) => {
      return{
        header: () => <Header navigation={props.navigation} />
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      //override the default style
      headerStyle: {
        backgroundColor: 'red',
      }
    }
  },
}

const HomeStack = createStackNavigator(screens, {
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

export default HomeStack