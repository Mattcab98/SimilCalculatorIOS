import { View, Text, } from 'react-native'

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

// Imports FUENTES
import { useFonts } from 'expo-font'
// Imports Styles
import { globalStyles } from '../../styles/global-styles'

const RootLayout = () => {
  
  const [loaded] = useFonts ({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf')
  })

  if ( !loaded ) {
    return null;
  }

  return (

    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style='light'/>
    </View>

  )
}

export default RootLayout