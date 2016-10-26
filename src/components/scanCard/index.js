import React, { Component } from 'react'
import { View } from 'react-native'
import { CardIOView } from 'react-native-awesome-card-io'

export default class ScanCard extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardIOView
          didScanCard={this.props.didScanCard}
          expiry
          hideCardIOLogo
          guideColor={this.props.scanCardGuideColor}
          style={{ flex: 1 }}
        />
      </View>
    )
  }
}
