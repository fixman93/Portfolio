import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import PropTypes from 'prop-types'

import './header.css'

class Header extends Component {

    componentDidMount() {
        this.setState({
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
        })
        console.log('asd', this.state.expiresIn)
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isSignup: true,
            token: '',
            userId: '',
            expiresIn: ''
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
        event.preventDefault();
        this.props.onAuth( this.state.email, this.state.password, this.state.isSignup )
         .then(() => {
             this.setState({
                 token: this.props.tokenId,
                 userId: this.props.userId,
                 expiresIn: this.props.expiresIn
             })
           localStorage.setItem('token', this.state.token);
           localStorage.setItem('userId', this.state.userId);
         });
      }
    render() {
        console.log(this.state)
      let regBtn = ''
      if (this.state.isSignup) {
        regBtn = 'Register'
      }
      else {
        regBtn = 'Login'
      }

    let login = null
    if(!this.state.token) {
        login = (
            <div className="login">
                <form onSubmit={this.register}>
                    <input type="email" placeholder="email" name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
                    <button>{regBtn}</button>
                </form>
                <div onClick={this.switchAuthModeHandler} className="switch">Switch to {this.state.isSignup ? 'Login' : 'Register'}</div>
            </div>
        )
    }
    else {
        login = (
            <div className="loggedIn">
                <p>Hello: {this.state.userId}</p>
                <button>Logout</button>
            </div>
        )
    }
    if(this.props.loading) {
        login = <div>Loading...</div>
    }
    return (
      <div>
        <div className="header-inner">
            {this.props.tokenId}
            {login}
          <img src="http://civcic.com/assets/images/header-bg.jpg" alt="img" />
            <div className="header-content">
            <h2>React.JS DEVELOPER</h2>
            <a className="knowmore-btn" href="https://www.upwork.com/freelancers/~01f507600be26cc2a3" rel="noopener noreferrer" target="_blank">Upwork profile</a><br />
            <a className="knowmore-btn" href="https://www.linkedin.com/in/boris-civcic-37244378/" rel="noopener noreferrer" target="_blank">Linkedin</a><br />
            <a className="knowmore-btn" href="https://github.com/fixman93" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    )
  }
}


Header.defaultProps = {
    tokenId: ''
}


Header.propTypes = {
    tokenId: PropTypes.string
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        userId: state.auth.userId,
        tokenId: state.auth.token,
        expiresIn: state.auth.expiresIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup) => dispatch( actions.auth(email, password, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)