//
import { Platform } from 'react-native'


const theme = {
  appBar: {
    primary: "#24292e",
    primaryANDROID: "#0366d6",
    textPrimary: "#fff",
    textSecondary: "#aaa"
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#fafafa"
  }, 
  fontSizes: {
    body: 14,
    subheading: 16,
  }, 
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeight: {
    normal: "400",
    bold: "700"
  }
}

export default theme