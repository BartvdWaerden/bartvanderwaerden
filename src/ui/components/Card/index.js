// ui/components/Card/index.js

import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Link from './Link'

const Card = styled.article`
  margin-top: ${props => props.theme.mdSpacing};

  @media (min-width: 64em) {
    margin-top: ${props => props.theme.lgSpacing};
  }
`

export default Card

Card.Title = Title
Card.Text = Text
Card.Link = Link
