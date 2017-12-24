import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class TodayGank extends Component {
  static propTypes = {
    prop: PropTypes
  }
  
  componentWillMount = () => {
    
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayGank)

