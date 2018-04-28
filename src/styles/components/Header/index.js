// styles/components/Header/index.js

import styled from 'styled-components'

const Header = styled.header`
  grid-area: header;
  height: 30px;
  transition: height 0.32s ease-in-out;
  background-color: ${props => props.theme.secondaryColor};

  &.is-open {
    height: 90px;
  }
`

export default Header
