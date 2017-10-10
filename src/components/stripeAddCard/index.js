import React, { Component } from 'react'
import { getCardToken } from '../../common/stripe'

import AddCard from '../addCard'

export default class StripeAddCard extends Component {
  static propTypes = {
    publicStripeKey: React.PropTypes.string.isRequired,
    addCardTokenHandler: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <AddCard
        {...this.props}
        addCardHandler={(cardNumber, expiry, cvc) => {
          const [expiryMonth, expiryYear] = expiry.split('/')
          return getCardToken(cardNumber, expiryMonth, expiryYear, cvc, this.props.publicStripeKey).then(token => this.props.addCardTokenHandler(token))
        }}
      />
    )
  }
}
