import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';
import { Card, Button } from 'antd';
import GankCard from '../component/gankCard';
import GirlCard from '../component/GirlsCard';
import { getGankClassifyDatas } from '../api/gankApi';
import { actionGankClassifyDatas } from '../redux/action';
export class GankList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            classifyType: props.match.params.classify,
        }
    }
    // all | Android | iOS | 休息视频 | 福利 | 拓展资源 | 前端 | 瞎推荐 | App
    componentDidMount = () => {
        let { classifyType, page } = this.state;
        this.props.getGankDatas(this._getClassify(classifyType), page)

    }

    componentWillReceiveProps = (nextProps) => {
        let nclassify = nextProps.match.params.classify
        let { classifyType, page } = this.state;
        if (nclassify !== classifyType) {
            this.setState({
                classifyType: nclassify,
                page: 1
            })
            this.props.getGankDatas(this._getClassify(nclassify), 1)
        }
    }



    render() {
        let { gankItems, classifyType ,loading} = this.props
        return (
            <div>
                {
                    this._getClassify(this.state.classifyType) == '福利' ? <GirlCard items={gankItems} /> : <GankCard items={gankItems} />
                }
                <Card loading={loading} style={{ width: '100%',cursor: 'pointer' }} onClick={this._loadMore.bind(this)}>
                    <span style={{ width: '100%',fontSize: '25px', textAlign: 'center', display: 'block' }} >加载更多</span>
                </Card>
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
    _loadMore() {
        let { classifyType, page } = this.state;
        this.setState({
            page: page + 1
        })
        this.props.getGankDatas(this._getClassify(classifyType), page + 1);
    }
}

const mapStateToProps = (state) => ({
    gankItems: state.gank.items,
    loading: state.gank.gankLoding
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getGankDatas: (classify, page) => {
            dispatch(actionGankClassifyDatas(classify, page))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GankList)
// export default GankList;