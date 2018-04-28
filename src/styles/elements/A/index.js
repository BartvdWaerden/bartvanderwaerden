// styles/elements/A/index.js

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { omit } from 'lodash'

function UnstyledA(props) {
  const aProps = omit(props, ['modifiers'])
  return <Link {...aProps} />
}

const modifierConfig = {
  secondary: ({ theme }) => `
    color: ${theme.secondaryColor};
  `,
  arrow: () => `
    &::after {
      content: '→';
      position: relative;
      left: 0.375rem;
      transition: left 0.32s ease-in-out;
    }

    &:hover::after {
      left: 0.75rem;
    }
  `,
}

const A = styled(UnstyledA)`
  display: inline-block;
  color: ${props => props.theme.primaryColor};
  font: ${props => props.theme.picoFontSize};
  letter-spacing: ${props => props.theme.primaryLetterSpacing};
  text-transform: uppercase;
  cursor: pointer;
  ${applyStyleModifiers(modifierConfig)};
`

export default A
