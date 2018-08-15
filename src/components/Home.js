import React, { Component } from 'react'
import Header from './Header/header'
import Projects from './Projects/projects'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
      </div>
    )
  }
}

export default App
