// styles/elements/Outgoing/index.js

import styled from 'styled-components'

const Outgoing = styled.a`
  display: inline-block;
  color: ${props => props.theme.primaryColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;
  cursor: pointer;
`

export default Outgoing
