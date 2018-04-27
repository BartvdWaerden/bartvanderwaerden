// ui/objects/Main.js

import styled from 'styled-components'
import breakpoint from '../settings/Breakpoints'

const Main = styled.section`
  grid-area: main;
  width: 100%;
  max-width: ${props => props.theme.contentWidth};
  justify-self: center;
  padding: ${props => props.theme.smSpacing};

  @media ${breakpoint.large} {
    padding: 180px ${props => props.theme.mdSpacing};
  }
`

export default Main
