// styles/components/Sidebar/Links.js

import styled from 'styled-components'

const Links = styled.div`
  display: grid;
  grid-column-gap: ${props => props.theme.smSpacing};
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${props => props.theme.lgSpacing};

  > a {
    border-bottom: 4px solid ${props => props.theme.secondaryColor};
  }
`

export default Links
