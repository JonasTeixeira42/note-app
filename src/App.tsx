import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from 'templates/Home'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
