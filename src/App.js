import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Spin } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { actionGankDates } from './redux/action';
import GankList from './component/GankList';
import { connect } from 'react-redux';
import TodayGank from './component/TodayGank';
import Header from './component/Header';
import TimeLine from './page/TimeLine';
const { Content, Footer } = Layout;
class App extends Component {

  componentWillMount = () => {
    // this.props.loadGankDates();
  }
  componentDidMount = () => {
    // this.props.loadGankDates();
  }

  // componentWillReceiveProps = (nextProps) => {
  //   if(nextProps.loading !== this.props.loading){
  //     this.setState({
  //       loading:
  //     })
  //   }
  // }

  render() {
    let { loading } = this.props
    return (
      <Spin size="large" spinning={false}>
        <Layout>
          <Header/>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Switch>
              <Route exact path="/" component={TodayGank} />
              <Route path='/time' component={TimeLine}/>
              <Route path='/time/:time' component={TodayGank}/>
              <Route path="/:classify" component={GankList} />
            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <span>ReactGank ©2017 UI by Ant Design & API by GankIo & Power by React</span>
          </Footer>
        </Layout>
      </Spin >
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
    loading: state.gank.loading
})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     loadGankDates: () => {
//       dispatch(actionGankDates())
//     }
//   }
// }
export default App;
// export default connect(mapStateToProps, null)(App)
