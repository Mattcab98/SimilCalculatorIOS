import { View, Text } from 'react-native'
import { globalStyles } from '../../styles/global-styles'
import { ThemeTxt } from '../../components/ThemeTxt'
import { CalculatorButton } from '../../components/CalculatorButton'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingBottom: 40 }}>
        <ThemeTxt variant='h1'>20 x 4 </ThemeTxt>
        <ThemeTxt variant='h2'> 80 </ThemeTxt>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='C' color='lightGray' textColor='background' />
        <CalculatorButton label='+/-' color='lightGray' textColor='background' />
        <CalculatorButton label='del' color='lightGray' textColor='background' />
        <CalculatorButton label='÷'  color='orange'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7' color='darkGray'/>
        <CalculatorButton label='8' color='darkGray'/>
        <CalculatorButton label='9' color='darkGray'/>
        <CalculatorButton label='x' color='orange'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='4' color='darkGray'/>
        <CalculatorButton label='5' color='darkGray'/>
        <CalculatorButton label='6' color='darkGray'/>
        <CalculatorButton label='-' color='orange'/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='1' color='darkGray'/>
        <CalculatorButton label='2' color='darkGray'/>
        <CalculatorButton label='3' color='darkGray'/>
        <CalculatorButton label='=' color='orange'/>
      </View>

    </View>
  )
}
export default CalculatorApp