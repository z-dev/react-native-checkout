import React from 'react'
import { Image, View } from 'react-native'
import _ from 'lodash'
import cardVisa from '../../../assets/images/card_visa.png'
import cardMastercard from '../../../assets/images/card_mastercard.png'
import cardAmex from '../../../assets/images/card_amex.png'

export default props => {
  const brandLower = _.lowerCase(props.brand)
  if (brandLower === 'visa') {
    return <Image style={props.style} source={cardVisa} />
  } else if (brandLower === 'master card') {
    return <Image style={props.style} source={cardMastercard} />
  } else if (brandLower === 'american express') {
    return <Image style={props.style} source={cardAmex} />
  }
  return <View />
}
