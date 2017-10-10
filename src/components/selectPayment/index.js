import React, { Component } from 'react'
import { View, Text } from 'react-native'
import _ from 'lodash'
import PaymentMethods from '../paymentMethods'
import defaultStyles from './defaultStyles'
import TouchableOpacity from '../common/touchableOpacity'

export default class SelectPayment extends Component {
  static propTypes = {
    enableApplePay: React.PropTypes.bool,
    applePayHandler: React.PropTypes.func,
    paymentSources: React.PropTypes.array,
    addCardHandler: React.PropTypes.func.isRequired,
    selectPaymentHandler: React.PropTypes.func.isRequired,
    addNewCardText: React.PropTypes.string,
    styles: React.PropTypes.object,
  }

  static defaultProps = {
    enableApplePay: false,
    paymentSources: [],
    addNewCardText: 'Add New Card',
  }

  render() {
    const styles = _.merge({}, defaultStyles, this.props.styles)
    return (
      <View style={styles.selectPaymentContainer}>
        <PaymentMethods
          paymentSources={this.props.paymentSources}
          selectPaymentHandler={this.props.selectPaymentHandler}
          applePayHandler={this.props.applePayHandler}
          enableApplePay={this.props.enableApplePay}
          styles={styles}
        />
        <TouchableOpacity style={styles.addButton} styles={styles} onPress={() => this.props.addCardHandler()} last>
          <Text style={styles.addButtonText}>{this.props.addNewCardText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
