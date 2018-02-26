// ui/objects/Grid.js

import styled from 'styled-components'

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

  @media (min-width: 64em) {
    grid-template-areas:
      'header header'
      'sidebar main';
    grid-template-columns: 1fr 2fr;
  }
`

export { Grid, GridWithSidebar }
