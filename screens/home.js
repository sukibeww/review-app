import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity, Text} from 'react-native'
import  globalStyles from '../styles/global'

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  const [reviews , setReviews ] = useState([
    { title: 'Zelda, Breath of the wild', rating: 5, body: 'lorem ipsum', key: '1'},
    { title: 'Pokemon', rating: 1, body: 'lorem ipsum', key: '2'},
    { title: 'Temtem', rating: 5, body: 'lorem ipsum', key: '3'},
  ])

  return(
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home