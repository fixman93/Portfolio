import React, { Component } from 'react';

import Header from './components/header/header'
import Projects from './components/projects/project'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
