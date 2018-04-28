import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Theme from '../styles/settings/Theme'
import Head from '../layouts/Head'
import { GridWithSidebar } from '../styles/objects/Grid'
import PageHead from '../components/PageHead'
import Photo from '../styles/components/Photo'
import image from '../../static/bart-van-der-waerden.jpg'

const Home = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GridWithSidebar>
      <Head />
      <PageHead isHomepage />
      {children}
      <Photo>
        <img src={image} alt="Bart van der Waerden" />
      </Photo>
    </GridWithSidebar>
  </ThemeProvider>
)

Home.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default Home
