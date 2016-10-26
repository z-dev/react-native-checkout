import React, { Component } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, View, Image, TextInput, Text } from 'react-native'
import defaultStyles from './defaultStyles.js'
import TouchableOpacity from '../common/touchableOpacity'
import ScanCard from '../scanCard'
import { formatMonthYearExpiry } from '../../common/cardFormatting'
import _ from 'lodash'
import s from 'string'
import payment from 'payment'

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingCard: false,
      cardNumberDirty: false,
      scanningCard: false,
      hasTriedScan: false,
      cardNumber: '',
      error: null,
      expiry: '',
      cvc: ''
    }
  }

  componentDidMount() {
    this.refs.cardNumberInput.focus()
  }

  didScanCard(card) {
    this.setState({
      scanningCard: false,
      hasTriedScan: true,
      cardNumberDirty: true,
      cardNumber: card.cardNumber,
    })
    const expiryYear = `${card.expiryYear}`
    if (s(card.expiryMonth).length >= 2 && s(expiryYear).length >= 2) {
      this.setState({ expiry: `${card.expiryMonth}/${expiryYear.slice(-2)}`, expiryDirty: true })
      this.refs.cvcInput.focus()
    } else {
      this.refs.expiryInput.focus()
    }
  }

  isCardNumberValid() {
    return payment.fns.validateCardNumber(this.state.cardNumber)
  }
  isExpiryValid() {
    return payment.fns.validateCardExpiry(this.state.expiry)
  }
  isCvcValid() {
    return payment.fns.validateCardCVC(this.state.cvc)
  }

  calculatedState() {
    const cardNumberShowError = this.state.cardNumberDirty && !this.isCardNumberValid()
    const expiryShowError = this.state.expiryDirty && !this.isExpiryValid()
    const cvcShowError = this.state.cvcDirty && !this.isCvcValid()
    let error = ''
    if (cardNumberShowError) {
      error = 'Card Number is incorrect'
    } else if (expiryShowError) {
      error = 'Expiry is incorrect'
    } else if (cvcShowError) {
      error = 'CVC is incorrect'
    }
    return {
      ...this.state,
      error: this.state.error || error,
      cardNumberShowError: cardNumberShowError,
      expiryShowError: expiryShowError,
      cvcShowError: cvcShowError,
      cardNumberFormatted: payment.fns.formatCardNumber(this.state.cardNumber),
    }
  }

  render() {
    const styles = _.merge({}, defaultStyles, this.props.styles)
    const calculatedState = this.calculatedState()
    if (calculatedState.scanningCard) {
      return <ScanCard didScanCard={(card) => this.didScanCard(card)} />
    }
    const addCardContents = (
      <View>
        <View style={[styles.cardNumberContainer, calculatedState.cardNumberShowError && styles.invalid]}>
          <Image resizeMode="contain" style={styles.cardNumberImage} source={require('../../../assets/images/card_front.png')} />
          <TextInput
            ref="cardNumberInput"
            keyboardType="numeric"
            style={styles.cardNumberInput}
            onChangeText={(rawCardNumber) => {
              const cardNumber = s(rawCardNumber).replaceAll(' ', '').s
              this.setState({ cardNumber: cardNumber })
              if (payment.fns.validateCardNumber(cardNumber)) {
                this.refs.expiryInput.focus()
              }
            }}
            value={calculatedState.cardNumberFormatted}
            placeholder="4242 4242 4242 4242"
            onFocus={() => this.props.onCardNumberFocus && this.props.onCardNumberFocus(calculatedState.cardNumber)}
            onBlur={() => {
              if (this.props.onCardNumberBlur) {
                this.props.onCardNumberBlur(calculatedState.cardNumber)
              }
              this.setState({ cardNumberDirty: true })
            }}
          />
        </View>
        <View style={[styles.monthYearContainer, calculatedState.expiryShowError && styles.invalid]}>
          <Image resizeMode="contain" style={styles.cardExpiryImage} source={require('../../../assets/images/card_expiry.png')} />
          <TextInput
            ref="expiryInput"
            maxLength={5}
            keyboardType="numeric"
            style={styles.monthYearTextInput}
            onChangeText={(expiry) => {
              const newExpiry = formatMonthYearExpiry(expiry, calculatedState.expiry)
              this.setState({ expiry: newExpiry })
              if (_.size(newExpiry) === 5) {
                if (payment.fns.validateCardExpiry(newExpiry)) {
                  this.refs.cvcInput.focus()
                } else {
                  this.setState({ expiryDirty: true })
                }
              }
            }}
            value={calculatedState.expiry}
            placeholder="MM/YY"
            onFocus={() => this.props.onExpiryFocus && this.props.onExpiryFocus(calculatedState.expiry)}
            onBlur={() => {
              this.setState({ expiryDirty: true })
              if (this.props.onExpiryBlur) {
                this.props.onExpiryBlur(calculatedState.expiry)
              }
            }}
          />
        </View>
        <View style={[styles.cvcContainer, calculatedState.cvcShowError && styles.invalid]}>
          <Image resizeMode="contain" style={styles.cvcImage} source={require('../../../assets/images/card_cvc.png')} />
          <TextInput
            ref="cvcInput"
            keyboardType="numeric"
            style={styles.cvcInput}
            onChangeText={(cvc) => this.setState({ cvc })}
            value={calculatedState.cvc}
            placeholder="CVC"
            onFocus={() => this.props.onCvcFocus && this.props.onCvcFocus(calculatedState.cvc)}
            onBlur={() => {
              this.setState({ cvcDirty: true })
              if (this.props.onCvcBlur) {
                this.props.onCvcBlur(calculatedState.cvc)
              }
            }}
          />
        </View>
        <Text style={styles.errorText}>{calculatedState.error}</Text>
        <TouchableOpacity
          style={styles.addButton}
          styles={styles}
          onPress={() => {
            this.setState({ scanningCard: true })
          }}
          last
        >
          <Text style={styles.addButtonText}>{calculatedState.hasTriedScan ? 'Scan Again' : 'Scan Card'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          styles={styles}
          onPress={() => {
            this.setState({ addingCard: true, expiryDirty: true, cardNumberDirty: true, cvcDirty: true })
            this.props.addCardHandler(calculatedState.cardNumber, calculatedState.expiry, calculatedState.cvc)
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
      <KeyboardAvoidingView behavior="position" style={styles.addCardContainer}>
        {calculatedState.addingCard ? <ActivityIndicator size="large" style={styles.activityIndicator} /> : addCardContents}
      </KeyboardAvoidingView>
    )
  }
}
