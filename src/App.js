import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Spin, BackTop } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import { actionGankDates } from './redux/action';
import GankList from './page/GankList';
import { connect } from 'react-redux';
import TodayGank from './component/TodayGank';
import MachineGank from './component/MachineGank';
import Header from './component/Header';
import TimeLine from './page/TimeLine';
const { Content, Footer, Sider } = Layout;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount = () => {
    this.props.loadGankDates();
  }


  render() {
    let { loading } = this.props
    return (
      <Spin size="large" spinning={loading}>
        {/* <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop> */}
        <BackTop />
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '63px', float: 'left' }}
            >
              <Menu.Item key="1"><Link to='/'><span>最新</span></Link ></Menu.Item>
              <Menu.Item key="2"><Link to='/Android'><span>安卓</span></Link ></Menu.Item>
              <Menu.Item key="3"><Link to='/iOS'><span>苹果</span></Link ></Menu.Item>
              <Menu.Item key="4"><Link to='/front'><span>前端</span></Link ></Menu.Item>
              <Menu.Item key="5"><Link to='/app'><span>App</span></Link ></Menu.Item>
              <Menu.Item key="6"><Link to='/more'><span>拓展知识</span></Link ></Menu.Item>
              <Menu.Item key="7"><Link to='/video'><span>休息视频</span></Link ></Menu.Item>
              <Menu.Item key="8"><Link to='/girls'><span>福利</span></Link ></Menu.Item>
              <Menu.Item key="9"><Link to='/time'><span>时光机</span></Link ></Menu.Item>
              {/* <Menu.Item style={{float: 'right'}}>
                
             </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout>
            <Header />
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Switch>
                  <Route exact path="/" component={TodayGank} />
                  <Route path='/time' component={TimeLine} />
                  <Route path='/timeMachine/:date' component={MachineGank} />
                  <Route path="/:classify" component={GankList} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <span>ReactGank ©2017 UI by Ant Design & API by GankIo & Power by React</span>
            </Footer>
          </Layout>
        </Layout>
      </Spin >
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  loading: state.gank.loading
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadGankDates: () => {
      dispatch(actionGankDates())
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))