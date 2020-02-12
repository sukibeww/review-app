import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native'
import globalStyle from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number one to five', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0 
    })
})

const ReviewForm = ({addReview}) => {
  return(
    <View style={globalStyle.container}>
      <Formik
        validationSchema={reviewSchema}
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