import React, { Component } from 'react'
import { connect } from 'react-redux'


class Projects extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <tr key={project.title}>
          <td>{project.number}</td>
          <td>{project.title}</td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList2() {
    return this.props.projects2.map((project2) => {
      return (
        <tr key={project2.title}>
          <td>{project2.number}</td>
          <td>{project2.title}</td>
          <td>{project2.skills}</td>
          <td>{project2.status}</td>
        </tr>
      )
    })
  }
  renderList3() {
    return this.props.projects3.map((project) => {
      return (
        <tr key={project.title}>
          <td>{project.number}</td>
          <td>{project.title}</td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <h2>FREELANCE (2014)</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name (Link)</th>
              <th>Technologies</th>
              <th>Individual/Team</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList3()}
          </tbody>
        </table>
        <h2>FREELANCE (2013)</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name (Link)</th>
              <th>Technologies</th>
              <th>Individual/Team</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList2()}
          </tbody>
        </table>
        <h2>FREELANCE (2011 - 2012)</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name (Link)</th>
              <th>Technologies</th>
              <th>Individual/Team</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    projects2: state.projects2,
    projects3: state.projects3
  }
}

export default connect(mapStateToProps)(Projects)
