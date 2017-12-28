import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Timeline, Card } from 'antd';
import moment from 'moment';
const { Meta } = Card;

export default function GirlsCard({ items }) {
    if (items.length == 1) {
        return (
            <div>
                {
                    items.map((item, index) => {
                        return (
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.url} />}
                            >
                                <Meta
                                    title={item.who}
                                    description={moment(item.publishedAt).format('YYYY-MM-DD')}
                                />
                            </Card>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <Timeline>
                {
                    items.map((item, index) => {
                        return (
                            <Timeline.Item kye={index}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={item.url} />}
                                >
                                    <Meta
                                        title={item.who}
                                        description={moment(item.publishedAt).format('YYYY-MM-DD')}
                                    />
                                </Card>
                            </Timeline.Item>
                        )
                    })
                }
            </Timeline>
        )
    }
}