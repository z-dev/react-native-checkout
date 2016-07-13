import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export class Card extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={(paymentSource) => this.props.selectPaymentHandler(paymentSource)}>
          <Text>
            { this.props.brand } Ending in { this.props.last4 }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
