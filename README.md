# react-native-stripe-checkout [![CircleCI](https://circleci.com/gh/z-dev/react-native-stripe-checkout.svg?style=svg)](https://circleci.com/gh/z-dev/react-native-stripe-checkout)

React Native component which mimics Stripe's ios component.

For iOS and Android

Note: This plugin is dependent from react-native-awesome-card-io, which you have to install manually and link  

## Installation

```Bash
$ npm i react-native-stripe-checkout --save
$ react-native link react-native-awesome-card-io 
```

## Usage

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

  <AddCard
    createCardHandler={(cardDetails) => console.log(cardDetails)}
    invalidStyle={{borderColor: 'red'}} // Optional. Default: {borderColor: 'red'}
    fontFamily="" // Optional, Default: iOS default
    fontSize={16} // Optional, Default: iOS default
  />
```

## Selecting a payment method

When the component is rendered it shows the user their existing cards.

![](https://stripe.com/img/blog/posts/ui-components-for-ios/wallet@2x.png)
No Nav. No card picture. Apple pay present if it exists. Simple Add button at bottom. Tapping a payment option, fires `selectPaymentMethod`

## Adding a card

We provide support for the minimal number of fields:

* Card Number
* Expiry Month
* Expiry Year
* CVC

These fields are validated using https://github.com/jessepollak/payment.

![](https://stripe.com/img/documentation/mobile/ios/stripe-ios-ui-theming.png)

Add button goes at the bottom. No nav. No card diagram.

## Apple pay / Android Wallet

Neither are directly supported. We have a button, which can be enabled / disabled with `enableApplePay` and a handler `applePayHandler` which is called when it is pressed.


## Notes

Create card fields: We care about mandatory ones only: https://stripe.com/docs/api#create_card_token cvc, number, exp_year, exp_year

Prop types to check types / mandatory fields
