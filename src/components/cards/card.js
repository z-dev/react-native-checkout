import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export class Card extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.selectPaymentHandler(this.props.paymentSource)}>
          <Text>
            { this.props.brand } Ending in { this.props.last4 }
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
