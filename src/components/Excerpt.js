import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'

import Time from '../styles/elements/Time'
import Card from '../styles/components/Card'
import Tag from '../styles/components/Tag'
import Link from './Link'

const Excerpt = ({ data }) => {
  const { date, tag, title } = data.frontmatter
  const { slug } = data.fields
  const { excerpt } = data
  const url = slug.replace(/\/$/, ``)
  return (
    <Card onClick={() => navigateTo(url)}>
      <Time>{date}</Time>
      <Tag>{tag}</Tag>
      <Card.Title>{title}</Card.Title>
      {/* eslint-disable */}
      <Card.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
      {/* eslint-enable */}
      <Link
        link={{
          title: 'Continue reading',
          url,
          modifiers: ['arrow'],
        }}
      />
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
