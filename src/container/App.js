import React, { Component } from 'react';
import { Button, Layout, Row, Col } from 'antd';

import HeaderNav from './header'
import './App.less';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Layout>
          <Header>
            <Row>
              <Col span={6} className="title">地林伟业网络办公系统</Col>
              <Col span={12}><HeaderNav /></Col>
              <Col span={6}>用户</Col>
            </Row>
          </Header>
          <Content>
            {this.props.children}
          </Content>
          <Footer>

          </Footer>
        </Layout>
      </div>
    )
  }
}
export default App;
