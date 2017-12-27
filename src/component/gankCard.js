import React, { Component } from 'react'
import { List, Card, Icon, Tag } from 'antd';
import moment from 'moment';
export default function GankCard({ items , vertical = false}) {

    return (
        <List
            grid={(vertical ? null : { gutter: 16, column: 2 })}
            dataSource={items}
            renderItem={item => (
                card(item)
            )}
        />

    )
    function card( item ) {
        return (
            <List.Item>
                <Card title={item.desc} hoverable={true} onClick={_getDetail.bind(this, item)}>
                    <Tag color={_getClassifyColor(item.type)}>{item.type}</Tag>
                    <Icon type="user" style={{ marginLeft: '10px' }} />
                    <span style={{ marginLeft: '5px' }}>{item.who}</span>
                    <Icon type="clock-circle" style={{ marginLeft: '10px' }} />
                    <span style={{ marginLeft: '5px' }}> {moment(item.publishedAt).format('YYYY-MM-DD')}</span>
                </Card>
            </List.Item>
        )
    }
    function _getClassifyColor(classifyType) {
        let color;
        switch (classifyType) {
            case 'Android':
                color = 'red'
                break
            case 'iOS':
                color = 'volcano';
                break
            case '前端':
                color = 'lime'
                break
            case 'App':
                color = 'orange'
                break
            case '拓展资源':
                color = 'green'
                break
            case '休息视频':
                color = 'cyan'
                break
            case '福利':
                color = 'purple'
                break
            default:
                color = 'magenta'
                break
        }
        return color;
    }

    function _getDetail(item) {
        window.open(item.url);
    }
}

