import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'
import Theme from '../ui/settings/Theme'

import Head from '../layouts/Head'
import { Grid } from '../ui/objects/Grid'
import PageHead from '../ui/PageHead'
import Breadcrumb from '../ui/Breadcrumb'
import Main from '../ui/objects/Main'

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
