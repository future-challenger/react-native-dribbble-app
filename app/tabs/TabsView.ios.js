/*
  Created by Uncle Charlie, 2016/12/24

  @flow
*/

import React from 'react'
import {
  TabBarIOS,
  Navigator
} from 'react-native'
import {connect} from 'react-redux'
import {switchTab} from '../actions'

class TabsView extends React.Component {

  onTabSelect(tab) {
    if(this.props.tab !== tab) {
      this.props.onTabSelect(tab)
    }
  }

  render() {
    return (
      <TabBarIOS tintColor="#ea4c89">
        <TabBarIOS.Item
          title="All"
          selected={this.props.tab === 'all'}
          onPress={this.onTabSelect.bind(this, 'all')}
          icon={require('../../img/dribbble.png')}
          selectedIcon={allSelectedIcon}>
          <DribbbleAllView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Debuts"
          selected={this.props.tab === 'debuts'}
          onPress={this.onTabSelect.bind(this, 'debuts')}
          icon={require('../../img/trophy.png')}
          selectedIcon={allSelectedIcon}>
          <DebutsView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Animated"
          selected={this.props.tab === 'animated'}
          onPress={this.onTabSelect.bind(this, 'animated')}
          icon={require('../../img/heart.png')}
          selectedIcon={allSelectedIcon}>
          <DebutsView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Rebounds"
          selected={this.props.tab === 'rebounds'}
          onPress={this.onTabSelect.bind(this, 'rebounds')}
          icon={require('../../img/light.png')}
          selectedIcon={allSelectedIcon}>
          <DebutsView
            navigator={this.props.navigator}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

function select(state) {
  return {
    tab: state.navigation.tab,
    // notificationBadge:
  }
}

function actions(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(switchTab(tab)),
  }
}

export default connect(select, actions)(TabsView)
