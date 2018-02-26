import React from 'react'
import PropTypes from 'prop-types'

import Time from './elements/Time'
import Card from './components/Card'
import Tag from './components/Tag'

const Excerpt = ({ data }) => {
  const { date, tag, title } = data.frontmatter
  const { slug } = data.fields
  const { excerpt } = data
  const url = slug.replace(/\/$/, ``)
  return (
    <Card>
      <Time>{date}</Time>
      <Tag>{tag}</Tag>
      <Card.Title>{title}</Card.Title>
      {/* eslint-disable */}
      <Card.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
      {/* eslint-enable */}
      <Card.Link to={url} modifiers={['arrow']}>
        Continue reading
      </Card.Link>
    </Card>
  )
}

Excerpt.propTypes = {
  data: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Excerpt
