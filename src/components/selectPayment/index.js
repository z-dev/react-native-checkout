import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Cards } from '../cards'

const styles = StyleSheet.create({
  test: {
    marginTop: 100
  }
})

export default class SelectPayment extends Component {
  render() {
    return (
      <View style={styles.test}>
        { this.props.enableApplePay ? <TouchableHighlight onPress={() => this.props.applePayHandler()}><Text>Apple Pay</Text></TouchableHighlight> : null }
        <Cards
          paymentSources={this.props.paymentSources}
          selectPaymentHandler={(paymentSource) => this.props.selectPaymentHandler(paymentSource)}
        />
        <TouchableHighlight onPress={() => this.props.addCardHandler()}>
          <Text>
            Add New Card
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
