import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Card, Icon, Tag } from 'antd';
import moment from 'moment';
import { getGankClassifyDatas } from '../api/gankApi';
import { actionGankClassifyDatas } from '../redux/action';
export class GankList extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    constructor(props) {
        super(props)

        // this.state = {
        //     gankItems: []
        // }
    }
    componentDidMount = () => {
        this.props.getGankDatas('Android', 1)
        // getGankClassifyDatas('Android', 1).then(res => {
        //     if (res) {
        //         this.setState({
        //             gankItems: res.results
        //         })
        //     }
        // })
    }


    render() {
        let { gankItems } = this.props
        return (
            <div>
                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={gankItems}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.desc}> <Tag color="magenta">{item.type}</Tag><Icon type="user" />{item.who}<Icon type="clock-circle" />{moment(item.publishedAt).format('YYYY-MM-DD')}</Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gankItems: state.gank.items
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getGankDatas: (classify, page) => {
            dispatch(actionGankClassifyDatas(classify, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GankList)
// export default GankList;