import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavIcon from '../styles/components/NavIcon'

class Hamburger extends Component {
  render() {
    let hamburger = null

    if (this.props.homepage) {
      hamburger = (
        <NavIcon
          homepage
          onClick={this.props.openMenu}
          className={this.props.toggleClass}
        >
          <span />
        </NavIcon>
      )
    } else {
      hamburger = (
        <NavIcon
          onClick={this.props.openMenu}
          className={this.props.toggleClass}
        >
          <span />
        </NavIcon>
      )
    }

    return hamburger
  }
}

Hamburger.propTypes = {
  homepage: PropTypes.bool,
  toggleClass: PropTypes.string.isRequired,
  openMenu: PropTypes.func.isRequired,
}

Hamburger.defaultProps = {
  homepage: false,
}

export default Hamburger
