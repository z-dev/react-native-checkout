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
    const styles = _.merge({...defaultStyles}, props.styles)

    return (
      <View style={styles.addCardContainer}>
        <View>
          <View style={styles.cardNumberContainer}>
            <Image resizeMode="contain" style={styles.cardNumberImage} source={require('../../../assets/images/card_front.png')} />
            <TextInput
              ref="cardNumber"
              keyboardType="numeric"
              style={styles.cardNumberInput}
              onChangeText={(cardNumber) => this.setState({ cardNumber })}
              value={this.state.cardNumber}
              placeholder="4242424242424242"
            />
          </View>
          <View style={styles.monthYearContainer}>
            <Image resizeMode="contain" style={styles.cardExpiryImage} source={require('../../../assets/images/card_expiry.png')} />
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              style={styles.monthTextInput}
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
              style={styles.yearTextInput}
              onChangeText={(expiryYear) => {
                this.changeInput(this.refs.cvcInput, expiryYear)
                this.setState({ expiryYear })
              }}
              value={this.state.expiryYear}
              placeholder="YY"
            />
          </View>
          <View style={styles.cvcContainer}>
            <Image resizeMode="contain" style={styles.cvcImage} source={require('../../../assets/images/card_cvc.png')} />
            <TextInput
              ref="cvcInput"
              keyboardType="numeric"
              style={styles.cvcInput}
              onChangeText={(cvc) => this.setState({ cvc })}
              value={this.state.cvc}
              placeholder="CVC"
            />
          </View>
            <TouchableOpacity style={styles.addButton} styles={styles} onPress={() => this.props.addCardHandler()} last>
              <Text style={styles.addButtonText}>Add Card</Text>
            </TouchableOpacity>
        </View>
        <KeyboardSpacer />
      </View>
    )
  }
}
