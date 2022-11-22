import { useState } from 'react'
import './App.css'
import { VotingCard } from './components'
import { Register, Login } from './components'
import useVotacion from './hooks/useVotaciones'


function App() {
  return (
    <div className="App">
      <Register />
    </div>
  )
}

export default App
