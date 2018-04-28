import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Default from '../layouts/Default'
import Excerpt from '../components/Excerpt'

const Journal = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  return (
    <Default location={location.pathname}>
      <Helmet title={`Journal | ${siteTitle}`} />
      <h1>Latest Posts</h1>
      {posts.map(({ node }) => <Excerpt key={node.fields.slug} data={node} />)}
    </Default>
  )
}

Journal.propTypes = {
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
}

export default Journal

export const postQuery = graphql`
  query JournalQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tag
          }
        }
      }
    }
  }
`
