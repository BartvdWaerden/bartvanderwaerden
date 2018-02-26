import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from './components/Breadcrumbs'

const Breadcrumb = ({ data }) => {
  let breadcrumbs
  let postName
  if (data === '/about') {
    breadcrumbs = (
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link to="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>About</Breadcrumbs.Item>
      </Breadcrumbs>
    )
  } else if (data === '/journal') {
    breadcrumbs = (
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link to="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Journal</Breadcrumbs.Item>
      </Breadcrumbs>
    )
  } else {
    postName = data.replace(/-/g, ' ')
    postName = postName.replace('/journal/', ' ')
    breadcrumbs = (
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link to="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link to="/journal">Journal</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>{postName}</Breadcrumbs.Item>
      </Breadcrumbs>
    )
  }
  return <nav>{breadcrumbs}</nav>
}

Breadcrumb.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Breadcrumb
