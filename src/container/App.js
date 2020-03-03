import React, { Component } from 'react';
import { Button } from 'antd';
import Header from './header'
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <div className="title">
            地林伟业网络办公系统
          </div>
          <Header />
          <div>用户</div>
        </header>
        {this.props.children}
        {/* <div className="footer">
          @地林伟业
        </div> */}
      </div>
    )
  }
}
export default App;
