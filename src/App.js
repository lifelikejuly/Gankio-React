import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { actionGankDates } from './redux/action';
import GankList from './component/GankList';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;

class App extends Component {

  componentWillMount = () => {
    this.props.loadGankDates();
  }

  render() {
    return (
      <Layout>
        <Header style={{ width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>今日</Link ></Menu.Item>
            <Menu.Item key="2"><Link to='/Android'>安卓</Link ></Menu.Item>
            <Menu.Item key="3"><Link to='/iOS'>苹果</Link ></Menu.Item>
            <Menu.Item key="4"><Link to='/front'>前端</Link ></Menu.Item>
            <Menu.Item key="5"><Link to='/app'>App</Link ></Menu.Item>
            <Menu.Item key="6"><Link to='/more'>拓展知识</Link ></Menu.Item>
            <Menu.Item key="7"><Link to='/video'>休息视频</Link ></Menu.Item>
            <Menu.Item key="8"><Link to='/girls'>福利</Link ></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Route path="/:classify" component={GankList} />
            {/* <GankList /> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ReactGank ©2017 UI by Ant Design & API by GankIo & Power by React
    </Footer>
      </Layout>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    // prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadGankDates: () => {
      dispatch(actionGankDates())
    }
  }
}
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
