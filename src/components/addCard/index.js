import React, { Component } from 'react'
import { View, Image, TextInput, Text } from 'react-native'
import defaultStyles from './defaultStyles.js'
import TouchableOpacity from '../common/touchableOpacity'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = { cardNumber: '', expiryMonth: '', expiryYear: '', cvc: '' }
  }

  componentDidMount() {
    this.refs.cardNumber.focus()
  }

  changeInput(ref, input) {
    if (input.length === 2) {
      ref.focus()
    }
  }

  render() {
    return (
      <View style={defaultStyles.addCardContainer}>
        <View>
          <View style={defaultStyles.cardNumberContainer}>
            <Image resizeMode="contain" style={defaultStyles.cardNumberImage} source={require('../../../assets/images/card_front.png')} />
            <TextInput
              ref="cardNumber"
              keyboardType="numeric"
              style={defaultStyles.cardNumberInput}
              onChangeText={(cardNumber) => this.setState({ cardNumber })}
              value={this.state.cardNumber}
              placeholder="4242424242424242"
            />
          </View>
          <View style={defaultStyles.monthYearContainer}>
            <Image resizeMode="contain" style={defaultStyles.cardExpiryImage} source={require('../../../assets/images/card_expiry.png')} />
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              style={defaultStyles.monthTextInput}
              onChangeText={(expiryMonth) => {
                this.changeInput(this.refs.yearInput, expiryMonth)
                this.setState({ expiryMonth })
              }}
              value={this.state.expiryMonth}
              placeholder="MM"
            />
            <Text>/</Text>
            <TextInput
              ref="yearInput"
              maxLength={2}
              keyboardType="numeric"
              style={defaultStyles.yearTextInput}
              onChangeText={(expiryYear) => {
                this.changeInput(this.refs.cvcInput, expiryYear)
                this.setState({ expiryYear })
              }}
              value={this.state.expiryYear}
              placeholder="YY"
            />
          </View>
          <View style={defaultStyles.cvcContainer}>
            <Image resizeMode="contain" style={defaultStyles.cvcImage} source={require('../../../assets/images/card_cvc.png')} />
            <TextInput
              ref="cvcInput"
              keyboardType="numeric"
              style={defaultStyles.cvcInput}
              onChangeText={(cvc) => this.setState({ cvc })}
              value={this.state.cvc}
              placeholder="CVC"
            />
          </View>
            <TouchableOpacity style={defaultStyles.addButton} styles={defaultStyles} onPress={() => this.props.addCardHandler()} last>
              <Text style={defaultStyles.addButtonText}>Add Card</Text>
            </TouchableOpacity>
        </View>
        <KeyboardSpacer />
      </View>
    )
  }
}
