import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Home from '../layouts/Home'
import Intro from '../components/Intro'
import Excerpt from '../components/Excerpt'
import Main from '../styles/objects/Main'

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Home>
      <Helmet title={siteTitle} />
      <Intro text="I'm Bart front-end developer based in Rotterdam, Netherlands." />
      <Main>
        <h1>Latest Posts</h1>
        {posts.map(({ node }) => (
          <Excerpt key={node.fields.slug} data={node} />
        ))}
      </Main>
    </Home>
  )
}

Index.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
            type
          }
        }
      }
    }
  }
`
