// ui/components/Breadcrumbs/index.js

import styled from 'styled-components'
import { margin } from 'polished'
import breakpoint from '../../settings/Breakpoints'

import Item from './Item'
import Link from './Link'

const Breadcrumbs = styled.ul`
  ${props => margin(props.theme.mdSpacing, null)};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;

  @media ${breakpoint.huge} {
    margin-top: 0;
  }
`

export default Breadcrumbs

Breadcrumbs.Item = Item
Breadcrumbs.Link = Link
