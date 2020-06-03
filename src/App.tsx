import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import Navbar from './components/navbar/Navbar'
import Content from './containers/Content'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
import { Provider } from 'react-redux';
import store from './store/createStore';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
    <Root>
     <Navbar />
      <Content />
    </Root>
    </Provider>
    </ThemeProvider>
  )
}

export default App
