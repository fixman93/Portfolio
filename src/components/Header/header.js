import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';

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
        this.props.onAuth( this.state.email, this.state.password, this.state.isSignup );
    }
  render() {
      let regBtn = ''
      if (this.state.isSignup) {
        regBtn = 'Register'
      }
      else {
        regBtn = 'Login'
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
                <div onClick={this.switchAuthModeHandler} className="switch">Switch to {this.state.isSignup ? 'Login' : 'Register'}</div>
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


const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup) => dispatch( actions.auth(email, password, isSignup))
    }
}

export default connect(null, mapDispatchToProps)(Header)