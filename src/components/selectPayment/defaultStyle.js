import { StyleSheet } from 'react-native'

const pressableColor = 'rgba(0,122,255,1)'
const grey = '#F8F8F8'
const bold = '500'
const cardContainer = {
  paddingLeft: 12,
  paddingRight: 12,
  backgroundColor: 'white',
}
export default ({
  addButton: {
    ...cardContainer,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: grey,
  },
  addButtonText: {
    color: pressableColor,
    fontWeight: bold,
    textAlign: 'center',
  },
  applePayContainer: {
    marginLeft: 10,
  },
  cardBrandImage: {
    marginRight: 8,
  },
  cardContainer: cardContainer,
  cardsLoadingIndicator: {
    marginTop: 20
  },
  cardTextLast4: {
    fontWeight: bold
  },
  cardTextEndingIn: {
    marginRight: 4,
  },
  cardTextType: {
    fontWeight: bold,
    marginRight: 4,
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerCardContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: grey,
    paddingBottom: 12,
    paddingTop: 12,
  },
  innerCardContainerLast: {
    borderBottomWidth: 0,
  },
  paymentMethodsContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: grey,
  },
  selectPaymentContainer: {
    flex: 1,
    backgroundColor: '#F2F2F5',
  },

})
