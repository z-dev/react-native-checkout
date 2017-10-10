import React, { Component } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import _ from 'lodash'
import Card from './card'
import ApplePay from './applePay'

export default class PaymentMethods extends Component {
  cards() {
    return _.map(this.props.paymentSources, (paymentSource, i) => {
      return (
        <Card
          selectPaymentHandler={() => this.props.selectPaymentHandler(paymentSource)}
          paymentSource={paymentSource}
          styles={this.props.styles}
          last={_.last(this.props.paymentSources) === paymentSource}
          key={i}
        />
      )
    })
  }

  render() {
    return (
      <View style={this.props.styles.paymentMethodsContainer}>
        <ScrollView automaticallyAdjustContentInsets={false} contentContainerStyle={this.props.styles.paymentMethodsInnerContainer}>
          <View style={this.props.styles.paymentMethodsInnerViewContainer}>
            {this.props.enableApplePay ? <ApplePay styles={this.props.styles} applePayHandler={this.props.applePayHandler} last={_.isEmpty(this.props.paymentSources)} /> : null}
            {this.cards()}
          </View>
        </ScrollView>
        {!this.props.paymentSources ? <ActivityIndicator style={this.props.styles.cardsLoadingIndicator} /> : null}
      </View>
    )
  }
}
