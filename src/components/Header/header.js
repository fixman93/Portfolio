import React, { Component } from 'react'
import { connect } from 'react-redux'


class Header extends Component {
  renderList() {
    return this.props.headerTitle.map((book) => {
      return (
        <h2
          className="header-slide slick-initialized slick-slider"
          key={book.title}>
          {book.title}
        </h2>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="header-inner">
          <img src="http://civcic.com/assets/images/header-bg.jpg" alt="img" />
            <div className="header-content">
            {this.renderList()}
            <a className="knowmore-btn" href="https://www.upwork.com/freelancers/~01f507600be26cc2a3" target="_blank">UpWork profile</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.headerTitle
  }
}

export default connect(mapStateToProps)(Header)
