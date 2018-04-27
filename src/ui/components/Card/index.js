// ui/components/Card/index.js

import styled from 'styled-components'
import breakpoint from '../../settings/Breakpoints'

import Title from './Title'
import Text from './Text'
import A from '../../elements/A'

const Card = styled.article`
  margin-top: ${props => props.theme.mdSpacing};
  cursor: pointer;

  @media ${breakpoint.large} {
    margin-top: ${props => props.theme.lgSpacing};
  }

  &:hover {
    ${A}::after {
      left: 0.75rem;
    }
  }

  ${A} {
    margin-top: ${props => props.theme.smSpacing};
  }
`

export default Card

Card.Title = Title
Card.Text = Text
