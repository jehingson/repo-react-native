//
import React from 'react'
import { View, Image, StyleSheet, Platform } from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'


const parseThoursands = value => {
  return value >= 1000 ? `${Math.round(value / 100)/10}k` : String(value)
}

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 2 }}>
          <View style={{ paddingRight: 10 }}>  
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
          </View>
          <View style={{ flex: 1 }}>  
            <StyledText fontWeight="bold">{props.fullName}</StyledText>
            <StyledText color="secondary">{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
          </View>
        </View>
      </View>
      <View style={styles.flex}>
        <View>
          <StyledText align="center">{parseThoursands(props.forksCount)}</StyledText> 
          <StyledText align="center" fontWeight="bold">Stars</StyledText>
        </View>
        <View>
          <StyledText align="center">{parseThoursands(props.stargazersCount)}</StyledText>
          <StyledText align="center" fontWeight="bold">Fonrks</StyledText>
        </View>
        <View>
          <StyledText align="center">{props.reviewCount}</StyledText>
          <StyledText align="center" fontWeight="bold">Review</StyledText>
        </View>
        <View>
          <StyledText align="center">{props.ratingAverage}</StyledText>
          <StyledText align="center" fontWeight="bold">Rating</StyledText>
        </View>
      </View>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 4
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: 'orange',
      ios: 'green',
      default: theme.colors.primary
    }),
    alignSelf: 'flex-start',
    marginTop: 4,
    borderRadius: 4,
    overflow: "hidden"
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    border: "px solid red"
  },  
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default RepositoryItem
