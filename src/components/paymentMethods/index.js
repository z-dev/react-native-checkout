import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Card from './card'
import ApplePay from './applePay'
import _ from 'lodash'

export default class PaymentMethods extends Component {
  cards() {
    return (
      _.map(this.props.paymentSources, (paymentSource, i) => {
        return (
          <Card
            last4={paymentSource.last4}
            brand={paymentSource.brand}
            selectPaymentHandler={() => this.props.selectPaymentHandler(paymentSource)}
            paymentSource={paymentSource}
            styles={this.props.styles}
            last={_.last(this.props.paymentSources) === paymentSource}
            key={i}
          />
        )
      })
    )
  }

  render() {
    return (
      <View style={this.props.styles.paymentMethodsContainer}>
        <View style={this.props.styles.paymentMethodsInnerContainer}>
          { this.props.enableApplePay
            ? <ApplePay styles={this.props.styles} applePayHandler={this.props.applePayHandler} last={_.isEmpty(this.props.paymentSources)} />
            : null }
          { this.cards() }
        </View>
        {!this.props.paymentSources ? <ActivityIndicator style={this.props.styles.cardsLoadingIndicator} /> : null}
      </View>
    )
  }
}
