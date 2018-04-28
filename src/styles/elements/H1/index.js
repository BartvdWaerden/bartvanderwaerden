// styles/elements/H1/index.js

import styled from 'styled-components'

const H1 = styled.h1`
  font: ${props => props.theme.betaFontSize};
  font-weight: ${props => props.theme.boldFontWeight};
  letter-spacing: 0.01em;
`

export default H1
