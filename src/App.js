import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import GankList from './component/GankList';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{  width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">今日</Menu.Item>
            <Menu.Item key="2">安卓</Menu.Item>
            <Menu.Item key="3">苹果</Menu.Item>
            <Menu.Item key="4">前端</Menu.Item>
            <Menu.Item key="5">App</Menu.Item>
            <Menu.Item key="6">拓展知识</Menu.Item>
            <Menu.Item key="7">休息视频</Menu.Item>
            <Menu.Item key="8">福利</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <GankList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ReactGank ©2017 UI by Ant Design & API by GankIo & Power by React
    </Footer>
      </Layout>

    );
  }
}

export default App;
