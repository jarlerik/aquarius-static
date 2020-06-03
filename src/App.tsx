import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import Navbar from './components/navbar/Navbar'
import Content from './containers/Content'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Root>
     <Navbar />
      <Content />
    </Root>
    </ThemeProvider>
  )
}

export default App
