import React from 'react'
import { Layout, Menu, Breadcrumb, Spin } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function GankHeader(){
    return (
        <Header style={{ width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
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
            </Menu>
        </Header>
    )
}