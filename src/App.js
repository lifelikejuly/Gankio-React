import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Spin, BackTop, Icon } from 'antd';
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
// import Header from './component/Header';
import TimeLine from './page/TimeLine';
const { Content, Footer, Sider, Header } = Layout;
class App extends Component {
  constructor(props) {
    super(props)
  
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
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}

            >
              <Menu.Item key="1"><Link to='/'><Icon type="clock-circle-o" /><span>最新</span></Link ></Menu.Item>
              <Menu.Item key="2"><Link to='/Android'><Icon type="android-o" /><span>安卓</span></Link ></Menu.Item>
              <Menu.Item key="3"><Link to='/iOS'><Icon type="apple-o" /><span>苹果</span></Link ></Menu.Item>
              <Menu.Item key="4"><Link to='/front'><Icon type="html5" /><span>前端</span></Link ></Menu.Item>
              <Menu.Item key="5"><Link to='/app'><Icon type="appstore" /><span>App</span></Link ></Menu.Item>
              <Menu.Item key="6"><Link to='/more'><Icon type="book" /><span>拓展知识</span></Link ></Menu.Item>
              <Menu.Item key="7"><Link to='/video'><Icon type="youtube" /><span>休息视频</span></Link ></Menu.Item>
              <Menu.Item key="8"><Link to='/girls'><Icon type="gift" /><span>福利</span></Link ></Menu.Item>
              <Menu.Item key="9"><Link to='/time'><Icon type="calendar" /><span>时光机</span></Link ></Menu.Item>
              {/* <Menu.Item style={{float: 'right'}}>
                
             </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200}}>
            <Header style={{ background:"#fff" , padding: 0 }}>
              <a href='https://github.com/yuhaocan/React-Gank' target="_blank"><Icon type="github" style={{ fontSize: '25px', float: 'right', lineHeight: '63px', }} /> </a>
            </Header>
            <Content style={{ margin:"24px 16px 0", overflow: "initial"}}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
              <div style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
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
function toGitHub() {
  window.open('https://github.com/yuhaocan/React-Gank');
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