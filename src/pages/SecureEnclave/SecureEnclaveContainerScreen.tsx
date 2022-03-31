import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DeviceCrypto from 'react-native-device-crypto'

export type Props = {
  navigation: any;
  containerStyle: {}
};

const SecureEnclaveContainerScreen: React.FC<Props> = ( { navigation }: Props ) => {

  const [ pubKey, setPubKey ] = useState( 'APABANAN' )

  useEffect( () => {
    const asyncFunc = async () => {
      const calculatedPublicKey = await DeviceCrypto.getPublicKey( 'SajjonsKey' ).catch( e => {
        console.error( `ERROR getting public key: ${e}` )
      } )
      setPubKey( calculatedPublicKey )
    }

    asyncFunc()
  }, [] )
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, Secure Enclave!!! pubkey is: {pubKey}</Text>
    </View>
  )
}

export default SecureEnclaveContainerScreen
