// ui/components/Sidebar/Footer.js

import styled from 'styled-components'
import breakpoint from '../../settings/Breakpoints'

const Footer = styled.div`
  align-self: end;
  margin-top: ${props => props.theme.mdSpacing};

  a {
    color: ${props => props.theme.secondaryColor};
  }

  @media ${breakpoint.large} {
    margin-top: 0;
  }
`

export default Footer
