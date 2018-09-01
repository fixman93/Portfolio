import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectProject } from '../../actions/index'
import ProjectDetail from './project-detail'


class Projects extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList2() {
    return this.props.projects2.map((project2) => {
      return (
        <tr key={project2.title} onClick={() => this.props.selectProject(project)}>
          <td>{project2.number}</td>
          <td><a href={project2.url} target="_blank">{project2.title}</a></td>
          <td>{project2.skills}</td>
          <td>{project2.status}</td>
        </tr>
      )
    })
  }
  renderList3() {
    return this.props.projects3.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList4() {
    return this.props.projects4.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList5() {
    return this.props.projects5.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList6() {
    return this.props.projects6.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList7() {
    return this.props.projects7.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  renderList8() {
    return this.props.projects8.map((project) => {
      return (
        <tr key={project.title} onClick={() => this.props.selectProject(project)}>
          <td>{project.number}</td>
          <td><a href={project.url} target="_blank">{project.title}</a></td>
          <td>{project.skills}</td>
          <td>{project.status}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="popup">
          <ProjectDetail />
        </div>
        <div className="container project-list">
          <h2>FREELANCE (2018)</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name (Link) </th>
                <th>Technologies</th>
                <th>Individual/Team</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList8()}
            </tbody>
          </table>
          <h2>FREELANCE (2017)</h2>
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
              {this.renderList7()}
            </tbody>
          </table>
          <h2>FREELANCE (2015 - 2016)</h2>
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
              {this.renderList6()}
            </tbody>
          </table>
          <h2>Zojax (2015)</h2>
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
              {this.renderList5()}
            </tbody>
          </table>
          <h2>DEGREE 361 ( 2014 )</h2>
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
              {this.renderList4()}
            </tbody>
          </table>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    projects2: state.projects2,
    projects3: state.projects3,
    projects4: state.projects4,
    projects5: state.projects5,
    projects6: state.projects6,
    projects7: state.projects7,
    projects8: state.projects8
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectProject: selectProject}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
