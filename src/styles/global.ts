import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('assets/fonts/roboto-v27-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
      url('assets/fonts/roboto-v27-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('assets/fonts/roboto-v27-latin-700.woff2') format('woff2')
  }

  html {
    font-size: 62.5%;
  }

  button {
    outline: 0;
    border: 0;
    background: transparent;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
