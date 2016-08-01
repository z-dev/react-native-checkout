import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default (props) =>
  <TouchableOpacity
    style={[props.styles.touchableOpacityContainer, props.style]}
    onPress={props.onPress}
  >
    <View style={[props.styles.innerTouchableOpacityContainer, props.last && props.styles.innerTouchableOpacityContainerLast, props.innerStyle]}>
      {props.children}
    </View>
  </TouchableOpacity>
