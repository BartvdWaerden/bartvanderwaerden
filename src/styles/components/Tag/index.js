// styles/components/Tag/index.js

import styled from 'styled-components'

const Tag = styled.span`
  display: inline-block;
  color: ${props => props.theme.grayColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;
`

export default Tag
