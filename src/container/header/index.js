import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import './index.less'

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: '/',
  };
  componentWillMount() {
    this.setState({
      current: window.location.pathname,
    });
  }
  handleClick = e => {
    console.log('click ', e.key);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="/"><Link to="/">首页</Link></Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">工作管理</span>
          }
        >
          <Menu.Item key="/meeting"><Link to="/meeting">会议记录</Link></Menu.Item>
          <Menu.Item key="/setting:1"><Link to="/testA">testA</Link></Menu.Item>
          <Menu.Item key="/setting:2"><Link to="/testB">testB</Link></Menu.Item>
          <Menu.Item key="/setting:3"><Link to="/testC">testC</Link></Menu.Item>
          <Menu.Item key="/setting:4"><Link to="/testD">testD</Link></Menu.Item>
          <Menu.Item key="/setting:5"><Link to="/testE">testE</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">项目管理</span>
          }
        >
          <Menu.Item key="setting:5">Option 1</Menu.Item>
          <Menu.Item key="setting:6">Option 2</Menu.Item>
          <Menu.Item key="setting:7">Option 3</Menu.Item>
          <Menu.Item key="setting:8">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">客户管理</span>
          }
        >
          <Menu.Item key="setting:9">Option 1</Menu.Item>
          <Menu.Item key="setting:10">Option 2</Menu.Item>
          <Menu.Item key="setting:11">Option 3</Menu.Item>
          <Menu.Item key="setting:12">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">综合管理</span>
          }
        >
          <Menu.Item key="setting:13">Option 1</Menu.Item>
          <Menu.Item key="setting:14">Option 2</Menu.Item>
          <Menu.Item key="setting:15">Option 3</Menu.Item>
          <Menu.Item key="setting:16">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">人事管理</span>
          }
        >
          <Menu.Item key="setting:17">Option 1</Menu.Item>
          <Menu.Item key="setting:18">Option 2</Menu.Item>
          <Menu.Item key="setting:19">Option 3</Menu.Item>
          <Menu.Item key="setting:20">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
export default Header;