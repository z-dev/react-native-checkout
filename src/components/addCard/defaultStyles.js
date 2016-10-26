import { StyleSheet } from 'react-native'
import { bold, grey, pressableColor, red, touchableOpacityContainer, innerTouchableOpacityContainer } from '../../common/styles'

const textInput = {
  paddingLeft: 12,
  paddingRight: 12,
  height: 44,
  backgroundColor: 'white',
  flex: 1,
}

const cardImage = {
  height: 20,
  width: 40,
  marginLeft: 10,
}
const cardFieldContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  backgroundColor: 'white',
}
const button = {
  ...touchableOpacityContainer,
  marginTop: 20,
  marginBottom: 20,
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderColor: grey,
}

const buttonText = {
  color: pressableColor,
  fontWeight: bold,
  textAlign: 'center',
}

export default ({
  activityIndicator: {
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addButton: button,
  addButtonText: buttonText,
  addCardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F2F2F5',
  },
  cardExpiryImage: {
    ...cardImage
  },
  cardNumberContainer: {
    ...cardFieldContainer
  },
  cardNumberImage: {
    ...cardImage
  },
  cardNumberInput: {
    ...textInput,
  },
  cvcContainer: {
    ...cardFieldContainer,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: grey,
  },
  cvcImage: {
    ...cardImage
  },
  cvcInput: {
    ...textInput,
  },
  errorTextContainer: {
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  invalid: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: red,
  },
  monthYearContainer: {
    ...cardFieldContainer,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: grey,
  },
  monthYearCvcContainer: {
    flexDirection: 'row',
  },
  monthYearTextInput: {
    ...textInput,
  },
  scanCardButton: button,
  scanCardButtonText: buttonText,
  textInput: textInput,
})
