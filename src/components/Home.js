import React, { Component } from 'react'
import Header from './Header/header'
import Projects from './Projects/projects'
import AboutMe from './Projects/AboutMe'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Projects />
      </div>
    )
  }
}

export default App
