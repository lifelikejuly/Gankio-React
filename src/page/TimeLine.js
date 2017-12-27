import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tree, Input,Calendar , Tag } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import $ from 'jquery';
import {actionGankToday} from '../redux/action'
const TreeNode = Tree.TreeNode;
moment.locale('zh-cn');
export class TimeLine extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor(props) {
    super(props)
  
    this.state = {
       years:[],
       yearsDates:{},
       value: moment().format("YYYY-MM-DD")
    }
  }
  
  componentDidMount = () => {
    let {dates} = this.props
    let years = [];
    let yearsDates = new Object();
    dates.map((item) => {
        let year = item.split('-')[0];
        // console.log($.inArray(year,years))
        if(yearsDates.hasOwnProperty(year)){
          yearsDates[year].push(item)
        }else{
          yearsDates[year] = [];
          yearsDates[year].push(item)
        }
        if($.inArray(year,years) < 0){
          years.push(year);
        }
    })
    this.setState({
      years: years,
      yearsDates:yearsDates
    })
  }
  componentWillReceiveProps = (nextProps) => {

  }
  
  render() {

    let {years,yearsDates,value} = this.state;
    return (
    // <Tree 
    //   showLine
    //   className="draggable-tree">
    //   {
    //     years.map((item) => {
    //       return <TreeNode key={item} title={item}>
    //           {
    //             yearsDates[item].map(year => {
    //               return <TreeNode key={year} title={year} onClick={this._intoTimeMachine.bind(this,year)}/>
    //             })
    //           }
    //       </TreeNode>
    //     })
    //   }
    //   </Tree>
    <Calendar  
      dateCellRender={this._getTimeMachineDatas.bind(this)}
      onSelect={this._intoTimeMachine.bind(this)}
      disabledDate={this._hasTime.bind(this)}
    />
    )
  }
  _getTimeMachineDatas(date){
    let {years,yearsDates,value} = this.state;
    let year = date.weekYear();
    if(yearsDates.hasOwnProperty(year) && ($.inArray(date.format("YYYY-MM-DD"),yearsDates[year]) >= 0)){
        return  <Tag color="#f50">有更新</Tag>
    }
  }
  _hasTime(date){
    let {years,yearsDates,value} = this.state;
    let year = date.weekYear();
    return (!yearsDates.hasOwnProperty(year) || ($.inArray(date.format("YYYY-MM-DD"),yearsDates[year]) < 0))
  }
  _intoTimeMachine(time){
    let date = time.format("YYYY/MM/DD");
    this.props.machineTime(date);
  }
}

const mapStateToProps = (state) => ({
    dates: state.gank.dates
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        machineTime: (time) => {
            dispatch(actionGankToday(time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
