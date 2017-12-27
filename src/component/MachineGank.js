import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {actionGankMachine} from '../redux/action';
import DayGank from '../component/TodayGank';
export class MachineGank extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount = () => {
    let date = this.props.match.params.date;
    date = date.replace(/-/g,'/');
    this.props.machineTime(date)
  }
  
  render() {
    return (
      <div>
        <DayGank/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        machineTime: (time) => {
            dispatch(actionGankMachine(time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MachineGank)
