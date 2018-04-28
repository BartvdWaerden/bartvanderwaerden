// styles/elements/Time/index.js

import styled from 'styled-components'
import { size, margin } from 'polished'

const Time = styled.time`
  color: ${props => props.theme.grayLightColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;

  &::after {
    ${size('10px')};
    ${margin(null, '0.75rem')};
    content: '';
    display: inline-block;
    background-color: ${props => props.theme.secondaryColor};
  }
`

export default Time
