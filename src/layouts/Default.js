import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'
import Theme from '../styles/settings/Theme'

import Head from '../layouts/Head'
import { Grid } from '../styles/objects/Grid'
import PageHead from '../components/PageHead'
import Breadcrumb from '../components/Breadcrumb'
import Main from '../styles/objects/Main'

const Default = ({ location, children }) => (
  <ThemeProvider theme={Theme}>
    <Grid>
      <Head />
      <PageHead />
      <Main>
        <Breadcrumb data={location} />
        {children}
      </Main>
    </Grid>
  </ThemeProvider>
)

Default.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Default
