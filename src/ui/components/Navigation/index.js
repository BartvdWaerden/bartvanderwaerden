// ui/components/Navigation/index.js

import styled from 'styled-components'
import { position } from 'polished'

import List from './List'
import Item from './Item'
import Link from './Link'

const Navigation = styled.nav`
  ${position('absolute', '-30px', null, null, '0')};
  transition: top 0.32s ease-in-out, opacity 0.32s ease-in-out;
  opacity: 0;
  text-align: left;
  text-transform: uppercase;

  @media (min-width: 48em) {
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
