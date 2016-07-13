import React, { Component } from 'react'
import { View } from 'react-native'
import { Card } from './card.js'
import _ from 'lodash'

export class Cards extends Component {
  render() {
    return (
      <View>
        { _.map(this.props.paymentSources, (paymentSource) => {
          return (
            <Card
              last4={paymentSource.last4}
              brand={paymentSource.brand}
              selectPaymentHandler={() => this.props.selectPaymentHandler(paymentSource)}
            />
          )
        })}
      </View>
    )
  }
}
