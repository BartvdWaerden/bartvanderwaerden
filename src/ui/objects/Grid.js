// ui/objects/Grid.js

import styled from 'styled-components'
import breakpoint from '../settings/Breakpoints'

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-template-columns: 1fr;
  min-height: 100vh;
`

const GridWithSidebar = Grid.extend`
  grid-template-areas: 'header' 'sidebar' 'main';

  @media ${breakpoint.large} {
    grid-template-areas:
      'header header'
      'sidebar main';
    grid-template-columns: 1fr 2fr;
  }
`

export { Grid, GridWithSidebar }
