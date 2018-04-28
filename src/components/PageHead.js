import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../styles/components/Header'
import A from '../styles/elements/A'
import Logo from '../styles/components/Logo'
import Nav from './Nav'
import Hamburger from './Hamburger'

class PageHead extends Component {
  static propTypes = {
    isHomepage: PropTypes.bool,
  }

  static defaultProps = {
    isHomepage: false,
  }

  state = {
    openMenu: false,
  }

  openMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu,
    })
  }

  render() {
    const { isHomepage } = this.props
    let logo = null
    let navIcon = null

    if (isHomepage) {
      logo = (
        <Logo
          modifiers={['secondary']}
          className={this.state.openMenu ? 'is-open' : ''}
        >
          Bart<br /> van der Waerden
        </Logo>
      )
      navIcon = (
        <Hamburger
          homepage
          openMenu={this.openMenu}
          toggleClass={this.state.openMenu ? 'is-open' : ''}
        />
      )
    } else {
      logo = (
        <Logo className={this.state.openMenu ? 'is-open' : ''}>
          Bart<br /> van der Waerden
        </Logo>
      )
      navIcon = (
        <Hamburger
          openMenu={this.openMenu}
          toggleClass={this.state.openMenu ? 'is-open' : ''}
        />
      )
    }

    return (
      <Header className={this.state.openMenu ? 'is-open' : ''}>
        <A to="/">{logo}</A>
        <Nav toggleClass={this.state.openMenu ? 'is-open' : ''} />
        {navIcon}
      </Header>
    )
  }
}

export default PageHead
