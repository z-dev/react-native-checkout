# react-native-checkout [![CircleCI](https://circleci.com/gh/z-dev/react-native-checkout.svg?style=svg)](https://circleci.com/gh/z-dev/react-native-checkout) [![npm version](https://badge.fury.io/js/react-native-checkout.svg)](https://badge.fury.io/js/react-native-checkout)

Checkout component with validation for React Native (iOS and Android). Supports Stripe, Apple Pay. You can override the entire style for the components.

#### Add Cards
![](https://media.giphy.com/media/l4FGDkIm9QzGEJzMY/giphy.gif)

#### Select Payment Method
[![Screen Shot 2017-03-25 at 14.23.52.png](https://s24.postimg.org/5ukrsfl8l/Screen_Shot_2017-03-25_at_14.23.52.png)](https://postimg.org/image/ilyxyxv0h/)

Everything was designed with Stripe in mind, should also work with other payment gateways.

## Installation

`yarn add react-native-checkout` or `npm i react-native-checkout --save`

`yarn add react-native-awesome-card-io` or `npm i react-native-awesome-card-io --save`

`react-native link react-native-awesome-card-io` <- Scan card functionality

## Usage

See our [full example](https://github.com/z-dev/react-native-checkout-example) for more details.

### Adding Cards

![](https://media.giphy.com/media/l4FGDkIm9QzGEJzMY/giphy.gif)
```
  import { AddCard } from 'react-native-stripe-checkout'
  <AddCard
    addCardHandler={(cardNumber, cardExpiry, cardCvc) => {
      console.log(`${cardNumber} ${cardExpiry} ${cardCvc}`)
      return Promise.resolve(cardNumber) //return a promise when you're done
    }}
    styles={{}} // Override default styles
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
    scanCardVisible={true}
    placeholderTextColor="black"
    cardNumberPlaceholderText="4242 4242 4242 4242"
    expiryPlaceholderText="MM/YY"
    cvcPlaceholderText="CVC"
    cardNumberErrorMessage="Card Number is incorrect"
    expiryErrorMessage="Expiry is incorrect"
    cvcErrorMessage="CVC is incorrect"
    scanCardContainer={/*Custom component*/}
  />
```

#### Custom styling

You can merge in your own styles. See the [default styles](src/components/addCard/defaultStyles.js) for details.

### Select Payment Method
[![Screen Shot 2017-03-25 at 14.23.52.png](https://s24.postimg.org/5ukrsfl8l/Screen_Shot_2017-03-25_at_14.23.52.png)](https://postimg.org/image/ilyxyxv0h/)

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
    styles={{}} // Override default styles
  />

```
#### Custom styling

You can merge in your own styles. See the [default styles](src/components/selectPayment/defaultStyles.js) for details.

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

## Inspirations & Thanks

[payment package](https://github.com/jessepollak/payment) provides card validation, which itself was based on the excellent [library by Stripe](https://github.com/stripe/jquery.payment).

Stripe's [iOS library](https://stripe.com/docs/mobile/ios) and [checkout library](https://stripe.com/checkout)
