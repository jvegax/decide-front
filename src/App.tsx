import { useState } from 'react'
import './App.css'
import { VotingCard } from './components'
import Register from './components/signin'
import Login from './components/signup'
import useVotacion from './hooks/useVotaciones'


function App() {
  return (
    <div className="App">
      <Register />
    </div>
  )
}

export default App
