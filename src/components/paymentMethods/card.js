import React from 'react'
import { Image, Text, View } from 'react-native'
import PaymentMethodContainer from './paymentMethodContainer'
import _ from 'lodash'

const CardBrandImage = (props) => {
  const brandLower = _.lowerCase(props.brand)
  if (brandLower === 'visa') {
    return (<Image style={props.style} source={require('../../../assets/images/card_visa.png')} />)
  } else if (brandLower === 'master card') {
    return (<Image style={props.style} source={require('../../../assets/images/card_mastercard.png')} />)
  } else if (brandLower === 'american express') {
    return (<Image style={props.style} source={require('../../../assets/images/card_amex.png')} />)
  }
  return (<View />)
}
export default (props) =>
  <PaymentMethodContainer {...props} styles={props.styles} onPress={() => props.selectPaymentHandler(props.paymentSource)}>
    <View style={props.styles.cardTextContainer}>
      <CardBrandImage style={props.styles.cardBrandImage} brand={props.brand} />
      <Text style={props.styles.cardTextType}>{props.brand}</Text>
      <Text style={props.styles.cardTextEndingIn}>Ending in</Text>
      <Text style={props.styles.cardTextLast4}>{props.last4}</Text>
    </View>
  </PaymentMethodContainer>
