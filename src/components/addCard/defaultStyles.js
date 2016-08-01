import { StyleSheet } from 'react-native'
import { bold, grey, pressableColor, touchableOpacityContainer, innerTouchableOpacityContainer } from '../../common/styles'

const textInput = {
  paddingLeft: 12,
  paddingRight: 12,
  height: 44,
  backgroundColor: 'white',
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
    flex: 1,
  },
  cvcContainer: {
    ...cardFieldContainer
  },
  cvcImage: {
    ...cardImage
  },
  cvcInput: {
    ...textInput,
    flex: 1,
  },
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  monthYearContainer: {
    ...cardFieldContainer,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: grey,
  },
  monthTextInput: {
    ...textInput,
    width: 46,
    paddingLeft: 12,
    paddingRight: 4,
    textAlign: 'right',
  },
  textInput: textInput,
  yearTextInput: {
    ...textInput,
    width: 40,
    paddingLeft: 4,
    paddingRight: 12,
  }

})
