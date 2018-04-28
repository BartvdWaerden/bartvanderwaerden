// styles/components/Navigation/index.js

import styled from 'styled-components'
import { position } from 'polished'
import breakpoint from '../../settings/Breakpoints'

import List from './List'
import Item from './Item'
import Link from './Link'

const Navigation = styled.nav`
  ${position('absolute', '-30px', null, null, '0')};
  z-index: 2;
  transition: top 0.32s ease-in-out, opacity 0.32s ease-in-out;
  opacity: 0;
  text-align: left;
  text-transform: uppercase;

  @media ${breakpoint.medium} {
    ${position('-30px', '150px', null, 'auto')};
  }

  &.is-open {
    top: 30px;
    opacity: 1;
  }
`

export default Navigation

Navigation.List = List
Navigation.Item = Item
Navigation.Link = Link
