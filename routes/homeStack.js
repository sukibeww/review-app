import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import About from '../screens/about'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Review App',
      headerStyle: {
        backgroundColor: '#FEFEFE',
        fontWeight: 'bold'
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details'
    }
  },
  About: {
    screen: About
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)