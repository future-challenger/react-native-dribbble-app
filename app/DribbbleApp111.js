/*
  Created by Uncle Charlie, 2016/12/25

  @flow
*/

import React from 'react'
import {
  View,
  StyleSheet,
  AppState,
  StatusBar,
} from 'react-native'
import DribbbleNavigator from './DribbbleNavigator'


class DribbbleApp extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    // if(this.props.isLoggedIn) {
    //   return <LoginScreen />
    // }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />

        <F8Navigator />
        <PushNotificationsController />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogIn
  }
}

export default connect(select)(DribbbleApp)
