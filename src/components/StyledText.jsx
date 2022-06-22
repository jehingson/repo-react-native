// 
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontSizes.main,
    fontWeight: theme.fontWeight.normal
  }, 
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },  
  bold: {
    fontWeight: theme.fontWeight.bold,
  }, 
  subheading: {
    fontSize: theme.fontSizes.subheading,
  }, 
  small: {
    fontSize: 10,
  },
  textAlignCenter: {
    textAlign: "center"
  }
})

export default function StyledText ({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) {

  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textAlignCenter,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}