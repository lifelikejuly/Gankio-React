import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Collapse, Card, Tag, Icon } from 'antd';
import moment from 'moment';
import GankCard from './gankCard';
import GirlCard from './GirlsCard';
import { actionGankDates } from '../redux/action';
const Panel = Collapse.Panel;

export class TodayGank extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentWillMount = () => {

  }
  componentDidMount = () => {
    // this.props.loadGankDates();
  }


  render() {
    let { category, todayDatas } = this.props;
    return (
      <Collapse >
        {
          category.map((itemCate, index) => {
            return <Panel header={itemCate} key={index}>
            {
                itemCate == '福利' ? <GirlCard key={index} items={todayDatas[itemCate]}/> : <GankCard key={index} items={todayDatas[itemCate]} vertical={true}/>
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

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(TodayGank)

