import React from 'react'
import { Image } from 'react-native'
import PaymentMethodContainer from './paymentMethodContainer'
export default (props) =>
  <PaymentMethodContainer {...props} innerStyle={props.styles.applePayContainer} styles={props.styles} onPress={() => props.applePayHandler()}>
    <Image source={require('../../../assets/images/apple_pay.png')} />
  </PaymentMethodContainer>
