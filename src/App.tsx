import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from 'templates/Home'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { NoteProvider } from 'hooks/use_note'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NoteProvider>
        <GlobalStyles />
        <Home />
      </NoteProvider>
    </ThemeProvider>
  )
}

export default App
