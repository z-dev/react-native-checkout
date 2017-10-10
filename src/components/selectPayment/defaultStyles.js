import { bold, grey, pressableColor, touchableOpacityContainer, innerTouchableOpacityContainer } from '../../common/styles'

export default {
  addButton: {
    ...touchableOpacityContainer,
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
  touchableOpacityContainer: touchableOpacityContainer,
  cardsLoadingIndicator: {
    marginBottom: 20,
    marginTop: 20,
  },
  cardTextLast4: {
    fontWeight: bold,
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
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  innerTouchableOpacityContainerLast: {
    borderBottomWidth: 0,
  },
  paymentMethodsContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  paymentMethodsInnerContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: grey,
  },
  paymentMethodsInnerViewContainer: {},
  selectPaymentContainer: {
    flex: 1,
    backgroundColor: '#F2F2F5',
  },
}
