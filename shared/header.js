import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({navigation}) => {


  const openMenu = () => {
    navigation.openDrawer()
  }

  return(
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu}/>
      <View>
        <Text style={styles.headerText}>Rewiiew</Text>
      </View>
    </View>
  )
}

const width = Dimensions.get('window').width - 20
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
})

export default Header