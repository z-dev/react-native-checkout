import { StyleSheet } from 'react-native'
import { bold, grey, pressableColor, touchableOpacityContainer, innerTouchableOpacityContainer } from '../../common/styles'

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

export default ({
  activityIndicator: {
    height: 200,
  },
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
    ...cardFieldContainer
  },
  cvcImage: {
    ...cardImage
  },
  cvcInput: {
    ...textInput,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
  },
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  monthYearContainer: {
    ...cardFieldContainer,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: grey,
  },
  monthYearTextInput: {
    ...textInput,
  },
  textInput: textInput,

})
