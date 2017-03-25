# react-native-stripe-checkout [![CircleCI](https://circleci.com/gh/z-dev/react-native-checkout.svg?style=svg)](https://circleci.com/gh/z-dev/react-native-checkout)

React Native Checkout

Handles:

* Adding Cards
  * Validates card numbers, expiries and cvcs (using [payment package](https://github.com/jessepollak/payment))
  * Scan cards using card.io

* Selecting Cards
  * Lists cards
  * Shows Apple Pay option if enabled

* Stripe
  * Automatically add cards to stripe

Everything was designed with Stripe in mind, should also work with other payment gateways.

For iOS and Android

Note: This plugin is dependent from react-native-awesome-card-io, which you have to install manually and link

## Installation

```Bash
$ yarn add react-native-checkout or npm i react-native-checkout --save
$ react-native link react-native-awesome-card-io
```

## Usage

See our [full example](https://github.com/z-dev/react-native-checkout-example) for more details.

### Adding Cards

[![Screen Shot 2017-03-25 at 14.23.52.png](https://s21.postimg.org/evvelfe1j/Screen_Shot_2017-03-25_at_14.23.52.png)]

```
  import { AddCard } from 'react-native-stripe-checkout'
  <AddCard
    addCardHandler={(cardNumber, cardExpiry, cardCvc) => {
      console.log(`${cardNumber} ${cardExpiry} ${cardCvc}`)
      return Promise.resolve(cardNumber) //return a promise when you're done
    }}
    styles={{}} // Override default styles <LINK HERE>
    onCardNumberBlur={() => console.log('card number blurred')}
    onCardNumberFocus={() => console.log('card number focused')}
    onCvcFocus={() => console.log('cvc focused')}
    onCvcBlur={() => console.log('cvc blurred')}
    onExpiryFocus={() => console.log('expiry focused')}
    onExpiryBlur={() => console.log('expiry blurred')}
    onScanCardClose={() => console.log('scan card closed')}
    onScanCardOpen={() => console.log('scan card opened')}
    activityIndicatorColor="pink"
    addCardButtonText="Add Card"
    scanCardButtonText="Scan Card"
    scanCardAfterScanButtonText="Scan Card Again"
  />
```

### Select Payment Method

![](http://i.imgur.com/XlCfbUO.png)

```
  import { SelectPayment } from 'react-native-stripe-checkout'

  <SelectPayment
    enableApplePay={true} // optional, default: false
    applePayHandler={() => console.log('apple pay happened')} // optional
    paymentSources={[
      {last4: '1234', brand: 'American Express', more: 'stuff' },
      {last4: '2345', brand: 'Visa', more: 'stuff' },
      {last4: '2345', brand: 'Master Card', more: 'stuff' },
    ]} // mandatory, See: [Customer Object](https://stripe.com/docs/api/node#customer_object) -> sources -> data for Stripe format.
    addCardHandler={() => console.log('Add Card Pressed!')}
    selectPaymentHandler={(paymentSource) => console.log(paymentSource)}
    styles={{}} // override default styles <LINK>
  />

```

### Adding cards to Stripe

Automatically adds cards to stripe

```
  import { StripeAddCard } from 'react-native-stripe-checkout'

 <StripeAddCard
    publicStripeKey="yourKey"
    addCardTokenHandler={(stripeCardToken) => {
      console.log(stripeCardToken)
    }}
    {/* Other props from AddCard */ }
  />
```
