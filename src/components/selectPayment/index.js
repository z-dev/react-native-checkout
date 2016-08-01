import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PaymentMethods from '../paymentMethods'
import defaultStyles from './defaultStyles'
import TouchableOpacity from '../common/touchableOpacity'
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
        <TouchableOpacity style={defaultStyles.addButton} styles={defaultStyles} onPress={() => this.props.addCardHandler()} last>
          <Text style={defaultStyles.addButtonText}>Add New Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
