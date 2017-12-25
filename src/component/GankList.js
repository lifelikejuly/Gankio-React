import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Card, Icon, Tag } from 'antd';
import moment from 'moment';
import { getGankClassifyDatas } from '../api/gankApi';
import { actionGankClassifyDatas } from '../redux/action';
export class GankList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            classifyType: props.match.params.classify,
        }
    }
    // all | Android | iOS | 休息视频 | 福利 | 拓展资源 | 前端 | 瞎推荐 | App
    componentDidMount = () => {
        let { classifyType } = this.state;
        this.props.getGankDatas(this._getClassify(classifyType), 1)

    }

    componentWillReceiveProps = (nextProps) => {
        let nclassify = nextProps.match.params.classify
        let { classifyType } = this.state;
        if (nclassify !== classifyType) {
            this.setState({
                classifyType: nclassify
            })
            this.props.getGankDatas(this._getClassify(nclassify), 1)
        }
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
                            <Card title={item.desc} hoverable={true} onClick={this._getDetail.bind(this, item)}> <Tag color="magenta">{item.type}</Tag><Icon type="user" />{item.who}<Icon type="clock-circle" />{moment(item.publishedAt).format('YYYY-MM-DD')}</Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    _getClassify(classifyType) {
        let type;
        switch (classifyType) {
            case 'Android':
                type = 'Android'
                break
            case 'iOS':
                type = 'iOS';
                break
            case 'front':
                type = '前端'
                break
            case 'app':
                type = 'App'
                break
            case 'more':
                type = '拓展资源'
                break
            case 'video':
                type = '休息视频'
                break
            case 'girls':
                type = '福利'
                break
            default:
                type = ''
                break

        }
        return type;
    }
    _getClassifyColor(classifyType) {
        let color;
        switch (classifyType) {
            case 'Android':
                color = 'Android'
                break
            case 'iOS':
                color = 'iOS';
                break
            case '前端':
                color = '前端'
                break
            case 'App':
                color = 'App'
                break
            case '拓展资源':
                color = '拓展资源'
                break
            case '休息视频':
                color = '休息视频'
                break
            case '福利':
                color = '福利'
                break
            default:
                color = ''
                break
        }
        return color;
    }
    _getDetail(item) {
        window.open(item.url);
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