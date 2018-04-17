// ui/generic/BaseStyles.js

const BaseStyles = `
  body,
  html { overflow-x: hidden; }

  *,
  *::before,
  *::after { box-sizing: inherit; }

  html {
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 0;
    color: #333333;
    font-family: "PT Serif", serif;
    font-size: 100%;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: 30em) {
      font-size: 112.5%;
    }

    @media (min-width: 40em) {
      font-size: 125%;
    }

    @media (min-width: 64em) {
      font-size: 137.5%;
    }

    @media (min-width: 80em) {
      font-size: 150%;
    }

    @media (min-width: 120em) {
      font-size: 162.5%;
    }
  }

  body {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  aside,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #5141d3;
  }

  strong {
    font-weight: 700;
  }

  a {
      text-decoration: none;
  }

  button {
    border: 0;
    background: none;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    overflow: visible;
  }


  img {
    max-width: 100%;
    height: auto;
    border: 0;
    vertical-align: top;
  }

  ::selection {
    background-color: #333333;
    color: white;
    text-shadow: none;
  }
`

export default BaseStyles
