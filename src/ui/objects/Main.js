// ui/objects/Main.js

import styled from 'styled-components'

const Main = styled.section`
  grid-area: main;
  width: 100%;
  max-width: ${props => props.theme.contentWidth};
  justify-self: center;
  padding: ${props => props.theme.smSpacing};

  @media (min-width: 64em) {
    padding: 180px ${props => props.theme.mdSpacing};
  }
`

export default Main
