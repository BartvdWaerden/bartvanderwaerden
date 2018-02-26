// ui/components/Breadcrumbs/index.js

import styled from 'styled-components'
import { margin } from 'polished'

import Item from './Item'
import Link from './Link'

const Breadcrumbs = styled.ul`
  ${props => margin(props.theme.mdSpacing, null)};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;

  @media (min-width: 105em) {
    margin-top: 0;
  }
`

export default Breadcrumbs

Breadcrumbs.Item = Item
Breadcrumbs.Link = Link
