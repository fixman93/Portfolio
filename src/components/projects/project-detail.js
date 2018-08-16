import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.projects) {
      return (
        <div>Click on project to show more info.</div>
      )
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.projects.title}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail)
