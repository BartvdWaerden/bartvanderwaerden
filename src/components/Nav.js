import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../styles/components/Navigation'

const Nav = props => (
  <Navigation className={props.toggleClass}>
    <Navigation.List>
      <Navigation.Item>
        <Navigation.Link to="/journal">Journal</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link to="/about">About</Navigation.Link>
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
)

Nav.propTypes = {
  toggleClass: PropTypes.string.isRequired,
}

export default Nav
