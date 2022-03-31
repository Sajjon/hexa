import { createStackNavigator } from 'react-navigation-stack'
import SecureEnclaveContainerScreen from '../../../pages/SecureEnclave/SecureEnclaveContainerScreen'

const SecureEnclaveStack = createStackNavigator(
  {
    Home: {
      screen: SecureEnclaveContainerScreen,
      navigationOptions: {
        header: null,
      },
    },
  }
)

export default SecureEnclaveStack
