import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import QR from 'react-native-qrcode-svg'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Colors from '../common/Colors'
import Fonts from '../common/Fonts'

export type Props = {
  value: string;
  size?: number;
  title? : string;
};

const QRCode: React.FC<Props> = ( {
  value = '',
  size = hp( '27%' ),
  title = '',
}: Props ) => {

  return (
    <View style={styles.containerQrCode}>
      <QR
        logo={require( '../assets/images/icons/icon_hexa.png' )}
        logoSize={50}
        logoMargin={2}
        logoBackgroundColor="white"
        logoBorderRadius={50}
        value={value}
        size={size} />
      {
        title !== '' && (
          <Text style={styles.textQr}>{title}</Text>

        )
      }
    </View>
  )
}

const styles = StyleSheet.create( {
  containerQrCode: {
    backgroundColor: '#e3e3e3',
  },
  textQr: {
    color: Colors.textColorGrey,
    fontSize: RFValue( 14 ),
    letterSpacing: 0.7,
    textAlign: 'center',
    paddingVertical: 7,
    fontFamily: Fonts.FiraSansRegular,
  },
} )

export default QRCode
