import React from 'react'
import Demo from './components/Demo'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Home />
            <Demo />
        </div>
    </main>
  )
}

export default App