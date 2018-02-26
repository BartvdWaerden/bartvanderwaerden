// ui/components/Copy/index.js

import styled from 'styled-components'
import { position, size, margin } from 'polished'

const Copy = styled.main`
  ${margin(null, 'auto')};
  width: 100%;

  > * + * {
    margin-top: ${props => props.theme.mdSpacing};
  }

  > * + figure,
  > figure + *,
  > * + blockquote,
  > blockquote + * {
    margin-top: ${props => props.theme.xlSpacing} !important;
  }

  > * + p,
  > * + ul,
  > h2 + p,
  > h3 + p {
    margin-top: ${props => props.theme.smSpacing} !important;
  }

  > h4 + p,
  > .gatsby-highlight {
    margin-top: 0 !important;
  }

  h1 {
    font: ${props => props.theme.alphaFontSize};
  }

  h2 {
    font: ${props => props.theme.betaFontSize};
  }

  h3 {
    font: ${props => props.theme.gammaFontSize};
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.primaryColor};
    font-weight: ${props => props.theme.boldFontWeight};
  }

  p a {
    border-bottom: 1px solid ${props => props.theme.primaryColor};
  }

  ul li {
    display: list-item;
    position: relative;
    padding-left: ${props => props.theme.mdSpacing};
    list-style: none;

    &::before {
      ${position('absolute', '0.6rem', null, null, 0)};
      ${size('0.375rem')};
      content: '';
      background-color: ${props => props.theme.secondaryColor};
    }
  }

  figure > img {
    display: block;
  }

  figcaption {
    margin-top: ${props => props.theme.smSpacing};
    color: ${props => props.theme.grayLightColor};
    font: ${props => props.theme.picoFontSize};
    letter-spacing: ${props => props.theme.primaryLetterSpacing};
    text-transform: uppercase;

    & cite::before {
      ${margin(null, '0.37rem')};
      content: '—';
      display: inline-block;
      color: ${props => props.theme.secondaryColor};
    }
  }

  blockquote {
    & p {
      display: inline;
      background-color: rgba(${props => props.theme.primaryColor}, 0.2);
      font: ${props => props.theme.gammaFontSize};
      font-style: italic;

      &::before {
        content: '“';
      }

      &::after {
        content: '”';
      }
    }
  }

  pre {
    padding: ${props => props.theme.smSpacing};
    overflow: auto;
    background-color: ${props => props.theme.grayLightestColor};
    white-space: pre-wrap;
  }

  code,
  strong {
    color: ${props => props.theme.primaryColor};
  }

  p:first-of-type {
    margin-top: ${props => props.theme.smSpacing};
    color: ${props => props.theme.grayLightColor};
    font: ${props => props.theme.deltaFontSize};
    font-style: italic;
  }
`

export default Copy
