import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Default from '../layouts/Default'
import Author from '../styles/components/Author'
import A from '../styles/elements/A'
import Time from '../styles/elements/Time'
import Tag from '../styles/components/Tag'
import Copy from '../styles/components/Copy'

const JournalPostTemplate = ({ location, data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteAuthor = data.site.siteMetadata.author
  let author
  if (location.pathname !== `/about`) {
    author = (
      <Author>
        Writter by: <A to="/about">{siteAuthor}</A> -&nbsp;
        <Time>{post.frontmatter.date}</Time>
        <Tag>{post.frontmatter.tag}</Tag>
      </Author>
    )
  }
  return (
    <Default data={post} location={location.pathname}>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>{post.frontmatter.title}</h1>
      {author}
      <Copy dangerouslySetInnerHTML={{ __html: post.html }} />
    </Default>
  )
}

JournalPostTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
}

export default JournalPostTemplate

export const pageQuery = graphql`
  query JournalPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
      }
    }
  }
`
