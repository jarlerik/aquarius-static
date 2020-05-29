import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import Navbar from './components/navbar/Navbar'
import Content from './containers/Content'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
     <Navbar />
      <Content />
    </Root>
  )
}

export default App
