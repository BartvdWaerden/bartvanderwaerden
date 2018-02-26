// ui/components/Breadcrumbs/Item.js

import styled from 'styled-components'
import { margin } from 'polished'

const Item = styled.li`
  color: ${props => props.theme.grayLightColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;

  &:not(:last-child)::after {
    ${props => margin(null, props.theme.xsSpacing)};
    content: '>';
    color: ${props => props.theme.secondaryColor};
  }
`

export default Item
