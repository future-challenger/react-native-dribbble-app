/**
 *  Created by Uncle Charlie, 2016/12/24
 *
 *  @flow
 */

type Tab = 'all' | 'debuts' | 'animated' | 'rebounds'

export default {
  switchTab(tab: Tab) {
    return {
      type: 'switch_tab',
      tab,
    }
  }
}
