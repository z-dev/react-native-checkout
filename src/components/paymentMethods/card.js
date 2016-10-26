import React from 'react'
import { Text, View } from 'react-native'
import TouchableOpacity from '../common/touchableOpacity'
import CardBrandImage from './cardBrandImage'
export default (props) =>
  <TouchableOpacity {...props} styles={props.styles} style={props.styles.cardTextOuterContainer} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
    <View style={props.styles.cardTextContainer}>
      <CardBrandImage style={props.styles.cardBrandImage} brand={props.brand} />
      <Text style={props.styles.cardTextType}>{props.brand}</Text>
      <Text style={props.styles.cardTextEndingIn}>Ending in</Text>
      <Text style={props.styles.cardTextLast4}>{props.last4}</Text>
    </View>
  </TouchableOpacity>
