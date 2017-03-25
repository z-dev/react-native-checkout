# react-native-stripe-checkout [![CircleCI](https://circleci.com/gh/z-dev/react-native-stripe-checkout.svg?style=svg)](https://circleci.com/gh/z-dev/react-native-stripe-checkout)

React Native Checkout component.

Handles:

* Adding Cards
  * Validates card numbers, expiries and cvcs (using [payment package](https://github.com/jessepollak/payment))
  * Scan cards using card.io

* Selecting Cards
  *

* Works with Stripe


For iOS and Android

Note: This plugin is dependent from react-native-awesome-card-io, which you have to install manually and link

## Installation

```Bash
$ npm i react-native-stripe-checkout --save
$ react-native link react-native-awesome-card-io
```

## Usage

### Adding Cards

```
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
```
  <SelectPayment
    enableApplePay={true} // optional, default: false
    applePayHandler={() => console.log('apple pay is go')} // optional, mandatory if enableApplePay={true}
    paymentSources={[{}]} // mandatory, See: [Customer Object](https://stripe.com/docs/api/node#customer_object) -> sources -> data for exact format.
    selectPaymentHandler={(paymentSource) => console.log(paymentSource)}
    fontFamily="" // Optional, Default: iOS default
    fontSize={16} // Optional, Default: iOS default
    //more custom styles

  />

```

## Selecting a payment method

When the component is rendered it shows the user their existing cards.

![](https://stripe.com/img/blog/posts/ui-components-for-ios/wallet@2x.png)
No Nav. No card picture. Apple pay present if it exists. Simple Add button at bottom. Tapping a payment option, fires `selectPaymentMethod`

