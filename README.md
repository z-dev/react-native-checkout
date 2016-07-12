# react-native-stripe-checkout

React Native component which mimics Stripe's ios component.

For iOS and Android

## Usage

```
  <StripeCheckout
    enableApplePay={true} // optional, default: false
    applePayHandler={() => console.log('apple pay is go')} // optional, mandatory if enableApplePay={true} 
    sources={[{}]} // mandatory, See: [Customer Object](https://stripe.com/docs/api/node#customer_object) -> sources -> data for exact format.
    stripePublishableKey="pk_12345"
    createCardHandler={(token) => console.log('Stripe Token: ' + token)}
    stripeCustomer="cust_id"
    invalidStyle={{borderColor: 'red'}} // Optional. Default: {borderColor: 'red'}
    selectPaymentMethod={(token) => console.log(token)}
    fontFamily="" // Optional, Default: iOS default
    fontSize={16} // Optional, Default: iOS default
    //more custom styles

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

![](https://stripe.com/img/documentation/ios/stripe-ios-ui-theming.png)

Add button goes at the bottom. No nav. No card diagram.

## Apple pay / Android Wallet

Neither are directly supported. We have a button, which can be enabled / disabled with `enableApplePay` and a handler `applePayHandler` which is called when it is pressed.


## Notes

Create card fields: We care about mandatory ones only: https://stripe.com/docs/api#create_card_token cvc, number, exp_year, exp_year

Prop types to check types / mandatory fields
