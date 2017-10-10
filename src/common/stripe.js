import _ from 'lodash'

const stripeUrl = 'https://api.stripe.com/v1/'

export const getCardToken = (cardNumber, expiryMonth, expiryYear, cvc, publicStripeKey) => {
  const cardDetails = {
    'card[number]': cardNumber,
    'card[exp_month]': expiryMonth,
    'card[exp_year]': expiryYear,
    'card[cvc]': cvc,
  }

  const formBody = _.map(cardDetails, (value, key) => {
    const encodedValue = encodeURIComponent(value)
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodedValue}`
  }).join('&')

  return fetch(`${stripeUrl}tokens`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${publicStripeKey}`,
    },
    body: formBody,
  })
    .then(response => response.text())
    .then(responseText => JSON.parse(responseText).id)
}
