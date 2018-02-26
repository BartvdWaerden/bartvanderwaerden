// ui/generic/BaseStyles.js

const BaseStyles = `

  :root {
    --primaryColor: #5141d3;
    --secondaryColor: #2afb9b;
    --grayColor: #333333;
    --grayLightColor: #7f7f7f;
    --grayLightestColor: #f2f2f2;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    --primaryFont: "PT Serif", serif;
    --secondaryFont: "PT Sans", sans-serif;

    --picoFontSize: .75rem/2 var(--secondaryFont);
    --baseFontSize: 1rem/1.5 var(--primaryFont);
    --deltaFontSize: 1.25rem/1.5 var(--primaryFont);
    --gammaFontSize: 1.25rem/1.2 var(--primaryFont);
    --betaFontSize: 1.5rem/1 var(--primaryFont);
    --alphaFontSize: 2rem/1.5 var(--primaryFont);
    --megaFontSize: 4.5rem/.85 var(--primaryFont);

    --regularFontWeight: 400;
    --boldFontWeight: 700;

    --primaryLetterSpacing: .25rem;
    --xsSpacing: 5px;
    --smSpacing: 30px;
    --mdSpacing: 60px;
    --lgSpacing: 90px;
    --xlSpacing: 120px;

    --contentWidth: 1000px;
  }

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
    color: var(--grayColor);
    font-family: var(--primaryFont);
    font-size: 100%;
    font-weight: var(--regularFontWeight);
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
    color: var(--primaryColor);
  }

  strong {
    font-weight: var(--boldFontWeight);
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
