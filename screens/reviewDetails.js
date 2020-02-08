import React from 'react'
import { View, Text , Button} from 'react-native'
import  globalStyles from '../styles/global'

const ReviewDetails = ({navigation}) => {

  const pressHandler = () => {
    navigation.goBack()
  }

  return(
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title='Back to Home' onPress={pressHandler}/>
    </View>
  )
}

export default ReviewDetails