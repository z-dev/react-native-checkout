import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default (props) =>
  <TouchableOpacity
    style={[props.styles.cardContainer, props.style]}
    onPress={props.onPress}
  >
    <View style={[props.styles.innerCardContainer, props.last && props.styles.innerCardContainerLast, props.innerStyle]}>
      {props.children}
    </View>
  </TouchableOpacity>
