// ui/components/Sidebar/Title.js

import styled from 'styled-components'

const Title = styled.span`
  font: ${props => props.theme.megaFontSize};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.boldFontWeight};
  text-transform: uppercase;
`

export default Title
