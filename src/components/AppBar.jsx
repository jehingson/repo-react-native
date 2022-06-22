//
import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useLocation } from "react-router-native";



const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  
  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>{children}</StyledText>
    </Link>
  )
}


const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositorio</AppBarTab>
        <AppBarTab to="/signin">Iniciar Sesión</AppBarTab>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: 'row'
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

export default AppBar