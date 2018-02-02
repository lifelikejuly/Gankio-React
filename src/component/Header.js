import React from 'react'
import { Layout, Menu, Breadcrumb, Spin, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

export default function GankHeader() {
    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            <div className="logo" />
            <a href='https://github.com/yuhaocan/React-Gank' target="_blank"><Icon type="github" style={{ fontSize: '25px', float: 'right', lineHeight: '63px', }} /> </a>
        </Header>
    )
    function toGitHub() {
        window.open('https://github.com/yuhaocan/React-Gank');
    }
}