import React from 'react'
import { Image } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'

export default (props) =>
  <TouchableOpacity {...props} innerStyle={props.styles.applePayContainer} style={props.styles.applePayOuterContainer} styles={props.styles} onPress={() => props.applePayHandler()}>
    <Image source={require('../../../assets/images/apple_pay.png')} />
  </TouchableOpacity>
