import './App.css'
import React from 'react'
import SimpleCounterComponent from './Components/SimpleCounter'
import PureCounterComponent from './Components/PureCounter'

function App() {
  return (
    <>
      <SimpleCounterComponent />
      <PureCounterComponent />

    </>
  )
}

export default App;