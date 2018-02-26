// ui/components/Sidebar/index.js

import styled from 'styled-components'
import { position } from 'polished'

import Title from './Title'
import Footer from './Footer'
import Text from './Text'
import Links from './Links'

const Sidebar = styled.aside`
  display: grid;
  position: relative;
  grid-area: sidebar;
  min-height: calc(100vh - 30px);
  padding: ${props => props.theme.xlSpacing} ${props => props.theme.mdSpacing}
    ${props => props.theme.smSpacing} ${props => props.theme.smSpacing};
  color: ${props => props.theme.whiteColor};

  @media (min-width: 64em) {
    grid-template-rows: repeat(2, 1fr);
    padding: 180px ${props => props.theme.mdSpacing}
      ${props => props.theme.smSpacing} ${props => props.theme.mdSpacing};
  }

  > * {
    z-index: 1;
  }

  &::after {
    ${position('absolute', '0', '0', '0', '0')};
    content: '';
    background-color: ${props => props.theme.primaryColor};
    mix-blend-mode: multiply;
  }
`

Sidebar.Title = Title
Sidebar.Footer = Footer
Sidebar.Text = Text
Sidebar.Links = Links

export default Sidebar
