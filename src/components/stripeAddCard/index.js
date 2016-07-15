import React, { Component } from 'react'
import { getCardToken } from '../../common/stripe'

import AddCard from '../addCard'

export default class StripeAddCard extends Component {

  render() {
    return (
      <AddCard addCardHandler={(cardNumber, expiryDate, cvc) => {
        getCardToken(cardNumber, expiryDate, cvc, this.props.publicStripeKey)
          .then((token) => this.props.addCardTokenHandler(token))
      }}
      />
    )
  }
}
