import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Collapse, Card, Tag, Icon } from 'antd';
import moment from 'moment';
import GankCard from './gankCard';
import { actionGankDates } from '../redux/action';
const Panel = Collapse.Panel;

export class TodayGank extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentWillMount = () => {

  }
  componentDidMount = () => {
    this.props.loadGankDates();
  }


  render() {
    let { category, todayDatas } = this.props;
    return (
      <Collapse >
        {
          category.map((itemCate, index) => {
            return <Panel header={itemCate} key={index}>
              {
                todayDatas[itemCate].map((item) => {
                  return <GankCard  key={index} item={item}/>
                })
              }
            </Panel>
          })
        }
      </Collapse>
    )
  }

  _getDetail(item) {
    window.open(item.url);
  }
}

const mapStateToProps = (state) => ({
  todayDatas: state.gank.today,
  category: state.gank.category
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadGankDates: () => {
      dispatch(actionGankDates())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayGank)

