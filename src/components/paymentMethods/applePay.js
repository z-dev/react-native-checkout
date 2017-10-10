import React from 'react'
import { Image } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import applePay from '../../../assets/images/apple_pay.png'

export default props => (
  <TouchableOpacity
    {...props}
    innerStyle={props.styles.applePayContainer}
    style={props.styles.applePayOuterContainer}
    styles={props.styles}
    onPress={() => props.applePayHandler()}
  >
    <Image source={applePay} />
  </TouchableOpacity>
)
