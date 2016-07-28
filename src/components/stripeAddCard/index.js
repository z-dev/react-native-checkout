import React, { Component } from 'react'
import { getCardToken } from '../../common/stripe'

import AddCard from '../addCard'

export default class StripeAddCard extends Component {

  render() {
    return (
      <AddCard addCardHandler={(cardNumber, expiryMonth, expiryYear, cvc) => {
        getCardToken(cardNumber, expiryMonth, expiryYear, cvc, this.props.publicStripeKey)
          .then((token) => this.props.addCardTokenHandler(token))
      }}
      />
    )
  }
}
