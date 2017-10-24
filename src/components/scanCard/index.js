import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CardIOView } from 'react-native-awesome-card-io'

export const DefaultScanCardContainer = props => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => props.onClose()} style={{ marginTop: 20, padding: 20, width: 55 }}>
        <Text style={{ fontSize: 18 }}>X</Text>
      </TouchableOpacity>
      {props.children}
    </View>
  )
}

export default class ScanCard extends Component {
  render() {
    const ScanCardContainer = this.props.scanCardContainer
    return (
      <ScanCardContainer {...this.props}>
        <CardIOView didScanCard={this.props.didScanCard} expiry hideCardIOLogo guideColor={this.props.scanCardGuideColor} style={{ flex: 1 }} />
      </ScanCardContainer>
    )
  }
}
