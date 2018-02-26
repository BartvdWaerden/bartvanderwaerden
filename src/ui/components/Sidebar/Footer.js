// ui/components/Sidebar/Footer.js

import styled from 'styled-components'

const Footer = styled.div`
  align-self: end;
  margin-top: ${props => props.theme.mdSpacing};

  a {
    color: ${props => props.theme.secondaryColor};
  }

  @media (min-width: 64em) {
    margin-top: 0;
  }
`

export default Footer
