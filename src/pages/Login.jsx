import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../components/validationSchemas/login'

const initialValues = {
  email: "",
  password: "",
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5
  },  
  form: {
    margin: 12
  }
})


const FormikInputValue = ({ name, ...props }) => {

  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

// const validate = values => {
//   const errors = {} 

//   if (!values.email) {
//     errors.email = "Email is required"
//   }
//   if (!values.password) {
//     errors.password = "Invalid email address"
//   }

//   console.log('errrors', errors)

//   return errors

// }

const Login = () => {

  return (
    <Formik
      // validate={validate}
      validationSchema={loginValidationSchema}
      initialValues={initialValues} 
      onSubmit={value => console.log('value', value)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue  
              name="email"
              placeholder='E-mail'
            />
            <FormikInputValue
              name="password"
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Iniciar" />
          </View>
        )
      }}
    </Formik>
  )
}


export default Login