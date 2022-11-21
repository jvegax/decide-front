import { useState } from 'react'
import './App.css'
import { VotingCard } from './components'
import useVotacion from './hooks/useVotaciones'


function App() {
  return (
    <div className="App">
      <VotingCard />
    </div>
  )
}

export default App
