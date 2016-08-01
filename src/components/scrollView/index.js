import React from 'react'
import { ScrollView, View } from 'react-native'
import _ from 'lodash'
export default (props) => {
  if (_.isEmpty(props.children)) {
    return <View />
  }
  return (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      {...props}
    >
      {props.children}
    </ScrollView>
  )
}
