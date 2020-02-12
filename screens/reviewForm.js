import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native'
import globalStyle from '../styles/global'
import { Formik } from 'formik'

const ReviewForm = ({addReview}) => {
  return(
    <View style={globalStyle.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: ''
        }}
        onSubmit={(values, actions)=>{
          actions.resetForm()
          addReview(values)

        }}
      >
        {(props)=>(
          <View>
            <TextInput 
            style={globalStyle.input} 
            placeholder='Review title' 
            onChangeText={ props.handleChange('title')}
            value={props.values.title}
            />

            <TextInput 
            multiline
            style={globalStyle.input} 
            placeholder='Review body' 
            onChangeText={ props.handleChange('body')}
            value={props.values.body}
            />
            <TextInput 
            style={globalStyle.input} 
            placeholder='Rating 1-5' 
            onChangeText={ props.handleChange('rating')}
            value={props.values.rating}
            keyboardType='numeric'
            />
            <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm