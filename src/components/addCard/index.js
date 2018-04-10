import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Platform, View, Image, TextInput, Text } from 'react-native'
import _ from 'lodash'
import s from 'string'
import payment from 'payment'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'
import defaultStyles from './defaultStyles.js'
import TouchableOpacity from '../common/touchableOpacity'
import { formatMonthYearExpiry } from '../../common/cardFormatting'
import ScanCard, { DefaultScanCardContainer } from '../scanCard'
import cardFront from '../../../assets/images/card_front.png'
import cardExpiry from '../../../assets/images/card_expiry.png'
import cardCvc from '../../../assets/images/card_cvc.png'

const DELAY_FOCUS = Platform.OS === 'android' ? 200 : 0
export default class AddCard extends Component {
  static propTypes = {
    addCardHandler: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    onCardNumberBlur: PropTypes.func,
    onCardNumberFocus: PropTypes.func,
    onCvcFocus: PropTypes.func,
    onCvcBlur: PropTypes.func,
    onExpiryBlur: PropTypes.func,
    onExpiryFocus: PropTypes.func,
    onScanCardClose: PropTypes.func,
    onScanCardOpen: PropTypes.func,
    styles: PropTypes.object,
    activityIndicatorColor: PropTypes.string,
    scanCardButtonText: PropTypes.string,
    scanCardAfterScanButtonText: PropTypes.string,
    scanCardVisible: PropTypes.bool,
    addCardButtonText: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    cardNumberPlaceholderText: PropTypes.string,
    expiryPlaceholderText: PropTypes.string,
    cvcPlaceholderText: PropTypes.string,
    cardNumberErrorMessage: PropTypes.string,
    expiryErrorMessage: PropTypes.string,
    cvcErrorMessage: PropTypes.string,
    scanCardContainer: PropTypes.any,
  }

  static defaultProps = {
    activityIndicatorColor: 'black',
    addCardButtonText: 'Add Card',
    autoFocus: true,
    scanCardAfterScanButtonText: 'Scan Again',
    scanCardButtonText: 'Scan Card',
    scanCardVisible: true,
    placeholderTextColor: 'black',
    cardNumberPlaceholderText: '4242 4242 4242 4242',
    expiryPlaceholderText: 'MM/YY',
    cvcPlaceholderText: 'CVC',
    cardNumberErrorMessage: 'Card Number is incorrect',
    expiryErrorMessage: 'Expiry is incorrect',
    cvcErrorMessage: 'CVC is incorrect',
    scanCardContainer: DefaultScanCardContainer,
  }

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
      cvc: '',
    }
  }

  componentWillMount() {
    if (CardIOUtilities.preload) {
      CardIOUtilities.preload()
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      _.delay(() => this.refs.cardNumberInput.focus(), 1000)
    }
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
      _.delay(() => this.refs.cvcInput.focus(), DELAY_FOCUS)
    } else {
      _.delay(() => this.refs.expiryInput.focus(), DELAY_FOCUS)
    }
    if (this.props.onScanCardClose) {
      this.props.onScanCardClose()
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
      error = this.props.cardNumberErrorMessage
    } else if (expiryShowError) {
      error = this.props.expiryErrorMessage
    } else if (cvcShowError) {
      error = this.props.cvcErrorMessage
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
    if (calculatedState.addingCard) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color={this.props.activityIndicatorColor} size="large" style={styles.activityIndicator} />
        </View>
      )
    }
    if (calculatedState.scanningCard) {
      return (
        <ScanCard
          scanCardContainer={this.props.scanCardContainer}
          scanCardGuideColor={this.props.scanCardGuideColor}
          onClose={() => this.setState({ scanningCard: false })}
          didScanCard={card => this.didScanCard(card)}
        />
      )
    }
    const addCardContents = (
      <View>
        <View style={[styles.cardNumberContainer, calculatedState.cardNumberShowError && styles.invalid]}>
          <Image resizeMode="contain" style={styles.cardNumberImage} source={cardFront} />
          <TextInput
            ref="cardNumberInput"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            style={styles.cardNumberInput}
            placeholderTextColor={this.props.placeholderTextColor}
            onChangeText={rawCardNumber => {
              const cardNumber = s(rawCardNumber).replaceAll(' ', '').s
              this.setState({ cardNumber: cardNumber })
              if (payment.fns.validateCardNumber(cardNumber)) {
                this.refs.expiryInput.focus()
              }
            }}
            value={calculatedState.cardNumberFormatted}
            placeholder={this.props.cardNumberPlaceholderText}
            onFocus={() => this.props.onCardNumberFocus && this.props.onCardNumberFocus(calculatedState.cardNumber)}
            onBlur={() => {
              if (this.props.onCardNumberBlur) {
                this.props.onCardNumberBlur(calculatedState.cardNumber)
              }
              this.setState({ cardNumberDirty: true })
            }}
          />
        </View>
        <View style={styles.monthYearCvcContainer}>
          <View style={[styles.monthYearContainer, calculatedState.expiryShowError && styles.invalid]}>
            <Image resizeMode="contain" style={styles.cardExpiryImage} source={cardExpiry} />
            <TextInput
              ref="expiryInput"
              maxLength={5}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              style={styles.monthYearTextInput}
              placeholderTextColor={this.props.placeholderTextColor}
              onChangeText={expiry => {
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
              placeholder={this.props.expiryPlaceholderText}
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
            <Image resizeMode="contain" style={styles.cvcImage} source={cardCvc} />
            <TextInput
              ref="cvcInput"
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              style={styles.cvcInput}
              placeholderTextColor={this.props.placeholderTextColor}
              onChangeText={cvc => this.setState({ cvc })}
              value={calculatedState.cvc}
              placeholder={this.props.cvcPlaceholderText}
              onFocus={() => this.props.onCvcFocus && this.props.onCvcFocus(calculatedState.cvc)}
              onBlur={() => {
                this.setState({ cvcDirty: true })
                if (this.props.onCvcBlur) {
                  this.props.onCvcBlur(calculatedState.cvc)
                }
              }}
            />
          </View>
        </View>
        <View style={styles.errorTextContainer}>
          <Text style={styles.errorText}>{calculatedState.error}</Text>
        </View>
        {this.props.scanCardVisible ? (
          <TouchableOpacity
            style={styles.scanCardButton}
            styles={styles}
            onPress={() => {
              if (this.props.onScanCardOpen) {
                this.props.onScanCardOpen()
              }
              if (Platform.OS === 'android') {
                CardIOModule.scanCard({
                  // guideColor: this.props.scanCardGuideColor, // This isn't working at the moment.
                  hideCardIOLogo: true,
                  suppressManualEntry: true,
                  suppressConfirmation: true,
                })
                  .then(card => this.didScanCard(card))
                  .catch(() => {
                    let refToFocus
                    if (!calculatedState.cardNumber) {
                      refToFocus = this.refs.cardNumberInput
                    } else if (!calculatedState.expiry) {
                      refToFocus = this.refs.expiryInput
                    } else {
                      refToFocus = this.refs.cvcInput
                    }
                    // Make sure keyboard stays open on android.
                    _.delay(() => refToFocus.blur(), DELAY_FOCUS / 2)
                    _.delay(() => refToFocus.focus(), DELAY_FOCUS)
                  })
              } else {
                this.setState({ scanningCard: true })
              }
            }}
            last
          >
            <Text style={styles.scanCardButtonText}>{calculatedState.hasTriedScan ? this.props.scanCardAfterScanButtonText : this.props.scanCardButtonText}</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={styles.addButton}
          styles={styles}
          onPress={() => {
            this.setState({ expiryDirty: true, cardNumberDirty: true, cvcDirty: true })
            if (this.isCardNumberValid() && this.isExpiryValid() && this.isCvcValid()) {
              this.setState({ addingCard: true })
              this.props
                .addCardHandler(calculatedState.cardNumber, calculatedState.expiry, calculatedState.cvc)
                .then(() => this.setState({ addingCard: false }))
                .catch(error => this.setState({ error: error.message, addingCard: false }))
            }
          }}
          last
        >
          <Text style={styles.addButtonText}>{this.props.addCardButtonText}</Text>
        </TouchableOpacity>
      </View>
    )
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.addCardContainer, this.props.style]}>{addCardContents}</View>
        {Platform.OS === 'android' ? null : <KeyboardSpacer /> /* Android takes care of this for us. */}
      </View>
    )
  }
}
