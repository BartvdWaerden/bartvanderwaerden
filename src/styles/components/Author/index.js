// styles/components/Author/index.js

import styled from 'styled-components'

const Author = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.smSpacing};
  color: ${props => props.theme.grayLightColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;
`

export default Author
