import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Tabs } from 'antd';
import InterMeeting from '../intermeeting'

import './index.less'

const { TabPane } = Tabs;

@inject('meetingStore')
@observer
class Meeting extends Component {
  render() {
    return (
      <div className="meeting-container">
        <h1>会议记录</h1>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="公司内部会议" key="1">
            <InterMeeting />
          </TabPane>
          <TabPane tab="商务会议" key="2">
            商务会议
          </TabPane>
          <TabPane tab="会议室" key="3">
            会议室
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Meeting
