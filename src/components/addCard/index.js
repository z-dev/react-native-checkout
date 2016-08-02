import React, { Component } from 'react'
import { ActivityIndicator, View, Image, TextInput, Text } from 'react-native'
import defaultStyles from './defaultStyles.js'
import TouchableOpacity from '../common/touchableOpacity'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import _ from 'lodash'

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = { addingCard: false, cardNumber: '', error: null, expiry: '', cvc: '' }
  }

  componentDidMount() {
    this.refs.cardNumber.focus()
  }

  render() {
    const styles = _.merge({}, defaultStyles, this.props.styles)

    const addCardContents = (
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
            style={styles.monthYearTextInput}
            onChangeText={(expiry) => {
              let newExpiry = expiry
              if (_.size(expiry) === 2 && _.size(this.state.expiry) !== 3) {
                newExpiry = `${expiry}/`
              } else if (_.size(expiry) === 3 && _.size(this.state.expiry) === 4) {
                newExpiry = expiry.substring(0, 2)
              }
              this.setState({ expiry: newExpiry })
              if (_.size(newExpiry) === 5) {
                this.refs.cvcInput.focus()
              }
            }}
            value={this.state.expiry}
            placeholder="MM/YY"
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
        <Text style={styles.errorText}>{this.state.error}</Text>
          <TouchableOpacity
            style={styles.addButton}
            styles={styles}
            onPress={() => {
              this.setState({ addingCard: true })
              this.props.addCardHandler(this.state.cardNumber, this.state.expiry, this.state.cvc)
                .then(() => this.setState({ addingCard: false }))
                .catch((error) => this.setState({ error: error.message, addingCard: false }))
            }}
            last
          >
            <Text style={styles.addButtonText}>Add Card</Text>
          </TouchableOpacity>
      </View>
    )
    return (
      <View style={styles.addCardContainer}>
        {this.state.addingCard ? <ActivityIndicator size="large" style={styles.activityIndicator} /> : addCardContents}
        <KeyboardSpacer />
      </View>
    )
  }
}
