import React from 'react'
import PropTypes from 'prop-types'

import A from './elements/A'

export default function Link({ link: { title, url, modifiers } }) {
  return (
    <A to={url} modifiers={modifiers}>
      {title}
    </A>
  )
}

Link.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

Link.defaultProps = {
  link: PropTypes.shape({
    modifiers: '',
  }),
}
