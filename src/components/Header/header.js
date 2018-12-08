import React, { Component } from 'react'

import './header.css'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isSignup: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    switchAuthModeHandler = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        })
    }

    register = (event) => {
        event.preventDefault()
    }
  render() {
      let regBtn = ''
      if (this.state.isSignup === true) {
        regBtn = 'Login'
      }
      else {
        regBtn = 'Register'
      }
    return (
      <div>
        <div className="header-inner">
            <div className="login">
                <form onSubmit={this.register}>
                    <input type="email" placeholder="email" name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
                    <button>{regBtn}</button>
                </form>
                <div onClick={this.switchAuthModeHandler} className="switch">Switch to {this.state.isSignup ? 'Register' : 'Login'}</div>
            </div>
          <img src="http://civcic.com/assets/images/header-bg.jpg" alt="img" />
            <div className="header-content">
            <h2>React.JS DEVELOPER</h2>
            <a className="knowmore-btn" href="https://www.upwork.com/freelancers/~01f507600be26cc2a3" target="_blank">Upwork profile</a><br />
            <a className="knowmore-btn" href="https://www.linkedin.com/in/boris-civcic-37244378/" target="_blank">Linkedin</a><br />
            <a className="knowmore-btn" href="https://github.com/fixman93" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    )
  }
}



export default Header