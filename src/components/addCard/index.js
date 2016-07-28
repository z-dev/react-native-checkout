import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableHighlight, Text } from 'react-native'

const styles = StyleSheet.create({
  test: {
    marginTop: 100
  },
  highlight: {
    backgroundColor: 'grey',
    height: 40,
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  errorStyle: {

  }
})

export default class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = { cardNumber: '', expiryMonth: '', expiryYear: '', cvc: '' }
  }

  changeInput(ref) {
    if (expiryMonth.length === 2) {
      ref.focus()
    }
  }

  render() {
    return (
      <View style={styles.test}>
        <TextInput
          keyboardType={'numeric'}
          style={styles.textInput}
          onChangeText={(cardNumber) => this.setState({ cardNumber })}
          value={this.state.cardNumber}
          placeholder={'4242424242424242'}
        />
        <TextInput
          maxLength={2}
          keyboardType={'numeric'}
          style={styles.textInput}
          onChangeText={(expiryMonth) => {
            this.changeInput(this.refs.YearInput)
            this.setState({ expiryMonth })
          }}
          value={this.state.expiryMonth}
          placeholder={'03'}
        />
        <TextInput
          ref={'YearInput'}
          maxLength={2}
          keyboardType={'numeric'}
          style={styles.textInput}
          onChangeText={(expiryYear) => {
            this.changeInput(this.refs.cvcInput)
            this.setState({ expiryYear })
          }}
          value={this.state.expiryYear}
          placeholder={'19'}
        />
        <TextInput
          ref={'cvcInput'}
          keyboardType={'numeric'}
          style={styles.textInput}
          onChangeText={(cvc) => this.setState({ cvc })}
          value={this.state.cvc}
          placeholder={'123'}
        />
        <TouchableHighlight
          style={[styles.highlight, this.props.highlightStyle]}
          onPress={() => this.props.addCardHandler(this.state.cardNumber, this.state.expiryMonth, this.state.expiryYear, this.state.cvc)}
        >
          <Text>
            + Add Card
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
