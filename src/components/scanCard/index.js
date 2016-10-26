import React, { Component } from 'react'
import { View } from 'react-native'
import { CardIOView, CardIOUtilities } from 'react-native-awesome-card-io'

export default class ScanCard extends Component {
  componentWillMount() {
    CardIOUtilities.preload()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardIOView
          didScanCard={this.props.didScanCard}
          expiry
          hideCardIOLogo
          guideColor={'orange'}
          style={{ flex: 1 }}
        />
      </View>
    )
  }
}
