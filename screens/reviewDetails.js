import React from 'react'
import { View, Text , Button} from 'react-native'
import  globalStyles from '../styles/global'

const ReviewDetails = ({navigation}) => {

  return(
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  )
}

export default ReviewDetails