import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native'
import  globalStyles from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

const Home = ({navigation}) => {
  const [ modalOpen , setModalOpen ] = useState(false)
  const [reviews , setReviews ] = useState([
    { title: 'Zelda, Breath of the wild', rating: 5, body: 'lorem ipsum', key: '1'},
    { title: 'Pokemon', rating: 1, body: 'lorem ipsum', key: '2'},
    { title: 'Temtem', rating: 5, body: 'lorem ipsum', key: '3'},
  ])
  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }
  return(
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons style={{...styles.modelToggle, ...styles.modalClose}} name='close' size={24} onPress={() => setModalOpen(false)}/>
          <ReviewForm/> 
        </View>
      </Modal>

      <MaterialIcons  style={styles.modelToggle}name='add' size={24} onPress={() => setModalOpen(true)}/>
      <FlatList 
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1,
  }
})

export default Home