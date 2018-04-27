// ui/components/Logo/index.js

import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { position, size } from 'polished'
import breakpoint from '../../settings/Breakpoints'

const modifierConfig = {
  secondary: ({ theme }) => `
    color: ${theme.secondaryColor};

    &::after {
      background-color: ${theme.whiteColor};
    }
  `,
}

const Logo = styled.h1`
  ${props =>
    position(
      'absolute',
      props.theme.mdSpacing,
      null,
      null,
      props.theme.smSpacing
    )};
  z-index: 1;
  height: 30px;
  transition: top 0.32s ease-in-out, color 0.32s ease-in-out,
    opacity 0.16s ease-in-out;
  opacity: 1;
  color: ${props => props.theme.primaryColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;

  @media ${breakpoint.large} {
    ${props =>
      position(
        'absolute',
        props.theme.lgSpacing,
        null,
        null,
        props.theme.mdSpacing
      )};
  }

  &::after {
    ${position('absolute', '32%', null, null, '26%')};
    ${size('2px', '72%')};
    content: '';
    transition: background-color 0.4s ease-in-out;
    background-color: ${props => props.theme.blackColor};
    letter-spacing: 26%;
  }

  ${applyStyleModifiers(modifierConfig)};

  &.is-open {
    top: 30px;
    opacity: 0;
    color: ${props => props.theme.primaryColor};

    &::after {
      background-color: white;
    }

    @media ${breakpoint.medium} {
      opacity: 1;
    }
  }
`

export default Logo
