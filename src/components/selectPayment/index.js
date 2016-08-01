import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PaymentMethods from '../paymentMethods'
import defaultStyles from './defaultStyle'
import PaymentMethodContainer from '../paymentMethods/paymentMethodContainer'
export default class SelectPayment extends Component {
  render() {
    return (
      <View style={defaultStyles.selectPaymentContainer}>
        <PaymentMethods
          paymentSources={this.props.paymentSources}
          selectPaymentHandler={this.props.selectPaymentHandler}
          applePayHandler={this.props.applePayHandler}
          enableApplePay={this.props.enableApplePay}
          styles={defaultStyles}
        />
        <PaymentMethodContainer style={defaultStyles.addButton} styles={defaultStyles} onPress={() => this.props.addCardHandler()} last>
          <Text style={defaultStyles.addButtonText}>Add New Card</Text>
        </PaymentMethodContainer>
      </View>
    )
  }
}
