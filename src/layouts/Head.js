import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import BaseStyles from '../styles/generic/BaseStyles'
import favicon from '../../static/favicon.png'

injectGlobal`
  ${normalize()}
  ${BaseStyles}
`

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="description"
      content="Hi, I'm Bart van der Waerden a Dutch front-end developer & UX Designer."
    />
    <meta name="robots" content="index, follow" />
    <link rel="icon" href={favicon} />
    <link
      href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|PT+Serif:400,700"
      rel="stylesheet"
    />
  </Helmet>
)

export default Head
